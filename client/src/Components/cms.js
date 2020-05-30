import React, { Component } from "react";
import { MdClose } from "react-icons/md";
import { RiFileUploadLine } from "react-icons/ri";

export default class Cms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            email: "",
            password: "",
            prices: [],
            photos: [],
            newPhoto: undefined,
            category: "",
            confirmation: false,
        };
    }

    componentWillMount() {
        if (window.localStorage.getItem("kapsalonToken")) {
            const token = window.localStorage.getItem("kapsalonToken");
            fetch("/api/loginClient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((tkn) => {
                    if (tkn.token === token) {
                        this.fetchData();
                        return this.setState({ logged: true });
                    } else {
                        return console.log(tkn.error);
                    }
                })
                .catch((e) => console.log(e));
        }
    }

    saveFileToState = (file) => {
        return this.setState({
            newPhoto: file,
        });
    };
    fetchData = async () => {
        try {
            const response = await fetch("/api/getPrices");
            const content = await response.json();
            if (content.content) {
                this.setState({
                    prices: content.content,
                });
            } else {
            }
        } catch (e) {
            console.log(e);
        }

        try {
            const responsePhotos = await fetch("/api/getPhotos");
            const contentPhotos = await responsePhotos.json();
            this.setState({
                photos: contentPhotos,
            });
        } catch (e) {
            console.log(e);
        }

        return;
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
            } else if (result.token) {
                window.localStorage.setItem("kapsalonToken", result.token);

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
        const token = window.localStorage.getItem("kapsalonToken");
        fetch("/api/updatePrices", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.prices),
        })
            .then((res) => res.json())
            .then((confirmation) => {
                if (confirmation === "Succes") {
                    return this.setState({
                        confirmation: true,
                    });
                }
            })
            .catch((e) => console.log(e));
    };

    updatePhoto = () => {
        if (!this.state.newPhoto || !this.state.category) {
            return alert("u moet foto en categorie selecteren");
        }
        let data = new FormData();

        data.append("file", this.state.newPhoto);
        data.append("category", this.state.category);

        if (window.localStorage.getItem("kapsalonToken")) {
            const token = window.localStorage.getItem("kapsalonToken");
            fetch("/api/uploadPhoto", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: data,
            })
                .then((res) => res.json())
                .then((msg) => {
                    if (msg.succes) {
                        return this.setState({
                            confirmation: true,
                        });
                    } else {
                        return console.log("something went wrong");
                    }
                })
                .catch((e) => console.log(e));
        }
    };

    deletePhoto = (name) => {
        if (window.localStorage.getItem("kapsalonToken")) {
            const token = window.localStorage.getItem("kapsalonToken");
            fetch("/api/deletePhoto", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    } else if (data.succes) {
                        return this.setState({
                            confirmation: true,
                        });
                    }
                })
                .catch((e) => console.log(e));
        }
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
        const {
            logged,
            confirmation,
            prices,
            photos,
            category,
            newPhoto,
        } = this.state;

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
                        <div>
                            <h1>Update Prijzen</h1>
                            {prices.map((item) => {
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
                        <div>
                            <h1>Update Fotos</h1>
                            <div className="cms__manager--newPhoto">
                                <h3>Nieuwe foto toevoegen</h3>
                                <div>
                                    <div className="cms__manager--newPhoto-file">
                                        <h4>1. Kies een file</h4>
                                        <h5>
                                            Mogelijk format jpeg, jpg of png
                                        </h5>
                                        <label htmlFor="file">
                                            <RiFileUploadLine />
                                        </label>
                                        <input
                                            id="file"
                                            name="file"
                                            type="file"
                                            onChange={(e) =>
                                                this.saveFileToState(
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="cms__manager--newPhoto-category">
                                        <h4>2. Kies categorie</h4>
                                        <div>
                                            <label htmlFor="man">Man</label>
                                            <input
                                                id="men"
                                                type="radio"
                                                name="category"
                                                value="men"
                                                onChange={(e) =>
                                                    this.setState({
                                                        category:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <label htmlFor="women">Women</label>
                                            <input
                                                id="women"
                                                type="radio"
                                                name="category"
                                                value="women"
                                                onChange={(e) =>
                                                    this.setState({
                                                        category:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="cms__manager--newPhoto-outcome"
                                    style={
                                        category && newPhoto
                                            ? { backgroundColor: "green" }
                                            : null
                                    }
                                >
                                    <p>
                                        Categorie:{" "}
                                        {category
                                            ? category
                                            : "Categorie is niet gekozen"}
                                    </p>
                                    <p>
                                        File:{" "}
                                        {newPhoto
                                            ? newPhoto.name
                                            : "Nog geen foto gekozen"}{" "}
                                    </p>
                                </div>

                                <button onClick={this.updatePhoto}>
                                    Update Foto
                                </button>
                            </div>
                            <div className="cms__manager--gallery">
                                {photos.map((photo) => {
                                    return (
                                        <div
                                            key={photo.url}
                                            className="cms__manager--gallery-each"
                                        >
                                            <img
                                                src={photo.url}
                                                alt="photo of haircut"
                                            />
                                            <button
                                                onClick={() =>
                                                    this.deletePhoto(photo.url)
                                                }
                                            >
                                                Verwijderen
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
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
                            onClick={() => {
                                this.setState({ confirmation: false });
                                return this.fetchData();
                            }}
                        >
                            <MdClose />
                        </button>
                        <h1 className="cms__confirmation--text">
                            u heeft uw inhoud met succes bijgewerkt
                        </h1>
                        <button
                            className="cms__confirmation--ok"
                            onClick={() => {
                                this.setState({ confirmation: false });
                                window.location.reload();
                            }}
                        >
                            Ok
                        </button>
                    </div>
                ) : null}
            </section>
        );
    }
}
