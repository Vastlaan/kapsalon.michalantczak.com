import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/header.js";
import Landing from "./Components/landing.js";
import Prices from "./Components/prices.js";
import Appointment from "./Components/appointment.js";
import Contact from "./Components/contact.js";
import Gallery from "./Components/gallery.js";
import Footer from "./Components/footer.js";
import Legal from "./Components/legal.js";
import Cms from "./Components/cms.js";
import Error from "./Components/error.js";

function App() {
    return (
        <div className="App">
            <Header />

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Landing} />
                    <Route path="/prijzen" exact={true} component={Prices} />
                    <Route path="/contact" exact={true} component={Contact} />
                    <Route path="/gallery" exact={true} component={Gallery} />
                    <Route
                        path="/afspraak"
                        exact={true}
                        component={Appointment}
                    />
                    <Route path="/legal" exact={true} component={Legal} />
                    <Route path="/cms" exact={true} component={Cms} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
