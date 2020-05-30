import React, { useEffect, useState } from "react";

const Prices = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch("/api/getPrices")
            .then((response) => response.json())
            .then((content) => {
                if (content.content) {
                    setPrices(content.content);
                } else {
                    console.log(content);
                }
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <section className="prices">
            <header className="prices__header">Prijzen</header>

            <div className="prices__section">
                <h1 className="prices__section--header">Heren</h1>
                <ul className="prices__section--list">
                    {prices.map((item, i) => {
                        if (item.field_id.split("_")[0] === "heren") {
                            return (
                                <li
                                    key={`${i}@${item.field_id}`}
                                    className="prices__section--list-item"
                                >
                                    {item.name}{" "}
                                    <span> {item.price} &euro;</span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className="prices__section">
                <h1 className="prices__section--header">Dames</h1>
                <ul className="prices__section--list">
                    {prices.map((item, i) => {
                        if (item.field_id.split("_")[0] === "dames") {
                            return (
                                <li
                                    key={`${i}@${item.field_id}`}
                                    className="prices__section--list-item"
                                >
                                    {item.name}{" "}
                                    <span> {item.price} &euro;</span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className="prices__section">
                <h1 className="prices__section--header">Kleuring</h1>
                <ul className="prices__section--list">
                    {prices.map((item, i) => {
                        if (item.field_id.split("_")[0] === "kleuring") {
                            return (
                                <li
                                    key={`${i}@${item.field_id}`}
                                    className="prices__section--list-item"
                                >
                                    {item.name}{" "}
                                    <span> {item.price} &euro;</span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className="prices__section">
                <h1 className="prices__section--header">Permanent</h1>
                <ul className="prices__section--list">
                    {prices.map((item, i) => {
                        if (item.field_id.split("_")[0] === "permanent") {
                            return (
                                <li
                                    key={`${i}@${item.field_id}`}
                                    className="prices__section--list-item"
                                >
                                    {item.name}{" "}
                                    <span> {item.price} &euro;</span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Prices;
