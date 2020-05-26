const Pool = require("pg").Pool;
const keys = require("./config/keys");
const bcrypt = require("bcryptjs");
const parse = require("pg-connection-string").parse;

let pool;

pool = new Pool({
    user: keys.DATABASE_USER,
    host: keys.DATABASE_HOST,
    database: keys.DATABASE_NAME,
    password: keys.DATABASE_SECRET,
    port: keys.DATABASE_PORT,
});

// to create table in database use:
//create table appointments (id serial primary key, date varchar (15), time varchar (10), name varchar (100),email varchar (100), phone varchar (100) );

const getAppointments = (req, res) => {
    pool.query(
        "SELECT date, time FROM appointments ORDER BY date ASC;",
        (err, results) => {
            if (err) {
                throw err;
            }
            if (results.rows) {
                return res.status(200).json(results.rows);
            } else {
                return res.status(200).json([]);
            }
        }
    );
};

const createAppointment = (req, res) => {
    const { date, time, name, email, phone } = req.body;

    pool.query(
        "INSERT INTO appointments (date, time, name, email, phone) VALUES ($1, $2, $3, $4, $5)",
        [date, time, name, email, phone],
        (err, result) => {
            if (err) {
                throw err;
            }
            return res.status(200).json({ date, time, name, email, phone });
        }
    );
};

const loginClient = (req, res) => {
    const { email, password } = req.body;

    pool.query(
        `SELECT hash FROM client WHERE email = $1`,
        [email],
        (err, result) => {
            if (err) {
                res.status(400).json({
                    error: "something went wrong",
                });
                throw err;
            }
            if (result.rows.length < 1) {
                return res.status(400).json({
                    error: "wrong credentials",
                });
            }
            const hash = result.rows[0].hash;
            if (bcrypt.compareSync(password, hash)) {
                return res.status(200).json({ token: "foifj390i" });
            } else {
                return res.status(400).json({ error: "wrong credentials" });
            }
        }
    );
};

const getPrices = (req, res) => {
    pool.query("SELECT * FROM prices", (err, result) => {
        if (err) {
            throw err;
        }
        if (result.rows.length > 0) {
            return res.status(200).json({ content: result.rows });
        } else {
            return res.status(400).json({ error: "something went wrong" });
        }
    });
};

const updatePrices = async (req, res) => {
    //USE TRANSACTIONS FOR MULTIPLE OPERATIONS ON DATABASE

    // assign request body to the variable data
    const data = req.body;
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await pool.connect();
    try {
        //BEGIN TRANSACTION
        await client.query("BEGIN");
        // create new table like existing one. This will soon replace existing one
        await client.query("CREATE TABLE new_prices (LIKE prices)");
        //map through items in data and insert them in new table
        await data.map(async (item) => {
            await client.query(
                "INSERT INTO new_prices (field_id, name, price) values($1, $2, $3)",
                [`${item.field_id}`, `${item.name}`, `${item.price}`]
            );
        });
        //rename existing table to table_old
        await client.query("ALTER TABLE prices RENAME TO prices_old");
        // rename new table to the same name old table was - in this case prices
        await client.query("ALTER TABLE new_prices RENAME TO prices");
        //remove old table
        await client.query("DROP TABLE prices_old");
        //commit changes
        await client.query("COMMIT");
        return res.status(200).json("Succes");
    } catch (e) {
        //if error occures rollback to begginig state and not commit any of operation to database
        await client.query("ROLLBACK");
        return res.status(400).json(data);
    } finally {
        //close client connection
        client.release();
    }
};

module.exports = {
    getAppointments,
    createAppointment,
    loginClient,
    getPrices,
    updatePrices,
};
