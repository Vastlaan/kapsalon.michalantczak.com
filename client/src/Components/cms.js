import React, { Component } from "react";
import { MdClose } from "react-icons/md";

export default class Cms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            email: "",
            password: "",
            prices: [],
            confirmation: false,
        };
    }
    fetchData = async () => {
        const response = await fetch("/api/getPrices");
        const content = await response.json();
        if (content.content) {
            return this.setState({
                prices: content.content,
            });
        } else {
            return;
        }
    };

    loginClient = async () => {
        try {
            const data = {
                email: this.state.email,
                password: this.state.password,
            };
            const response = await fetch("/api/loginClient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.error) {
                return console.log(result.error);
            } else if (result.token === "foifj390i") {
                this.fetchData();
                return this.setState({
                    logged: true,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    updatePriceName = (newValue, id) => {
        this.setState(async (prevState) => {
            return await prevState.prices.find((item) => {
                if (item.field_id === id) {
                    return (item.name = newValue);
                }
            });
        });
    };
    updatePricePrice = (newValue, id) => {
        return this.setState(async (prevState) => {
            return await prevState.prices.find((item) => {
                if (item.field_id === id) {
                    return (item.price = newValue);
                }
            });
        });
    };

    updateAllPrices = () => {
        fetch("/api/updatePrices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.prices),
        })
            .then((res) => res.json())
            .then((confirmation) => {
                if (confirmation === "Succes") {
                    this.setState({
                        confirmation: true,
                    });
                }
            })
            .catch((e) => console.log(e));
    };

    // insertClient = async () => {
    //     const data = {
    //         email: "",
    //         password: "",
    //     };
    //     const response = await fetch("/api/loginClient", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     const result = await response.json();
    //     if (result.error) {
    //         console.log(result.error);
    //     }
    //     console.log(result.token);
    // };
    render() {
        const { logged, confirmation } = this.state;

        return (
            <section className="cms">
                {logged ? (
                    <div className="cms__manager">
                        <button
                            className="cms__manager--logout"
                            onClick={() => this.setState({ logged: false })}
                        >
                            Uitloggen
                        </button>
                        <h1>Update Prijzen</h1>
                        {this.state.prices.map((item) => {
                            return (
                                <div
                                    key={item.field_id}
                                    className="cms__manager--field"
                                >
                                    <input
                                        className="cms__manager--field-name"
                                        value={item.name}
                                        onChange={(e) =>
                                            this.updatePriceName(
                                                e.target.value,
                                                item.field_id
                                            )
                                        }
                                    />
                                    <input
                                        className="cms__manager--field-price"
                                        value={item.price}
                                        onChange={(e) =>
                                            this.updatePricePrice(
                                                e.target.value,
                                                item.field_id
                                            )
                                        }
                                    />
                                </div>
                            );
                        })}
                        <button
                            className="cms__manager--button"
                            onClick={this.updateAllPrices}
                        >
                            Update Prijzen
                        </button>
                    </div>
                ) : (
                    <div className="cms__login">
                        <div className="cms__login--header">
                            <h1>Welkom op uw Content Manager System</h1>
                            <h3>Log in om verder te gaan</h3>
                        </div>
                        <div className="cms__login--email">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                onChange={(event) =>
                                    this.setState({
                                        email: event.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="cms__login--password">
                            <label htmlFor="password">Wachtword:</label>
                            <input
                                type="password"
                                name="password"
                                onChange={(event) =>
                                    this.setState({
                                        password: event.target.value,
                                    })
                                }
                                onKeyDown={(e) =>
                                    e.keyCode === 13 ? this.loginClient() : null
                                }
                            />
                        </div>
                        <button onClick={this.loginClient}>Inloggen</button>

                        {/* <button onClick={() => this.insertClient()}>
                            Insert Client
                        </button> */}
                    </div>
                )}
                {confirmation ? (
                    <div className="cms__confirmation">
                        <button
                            className="cms__confirmation--close"
                            onClick={() =>
                                this.setState({ confirmation: false })
                            }
                        >
                            <MdClose />
                        </button>
                        <h1 className="cms__confirmation--text">
                            u heeft uw inhoud met succes bijgewerkt
                        </h1>
                        <button
                            className="cms__confirmation--ok"
                            onClick={() =>
                                this.setState({ confirmation: false })
                            }
                        >
                            Ok
                        </button>
                    </div>
                ) : null}
            </section>
        );
    }
}
