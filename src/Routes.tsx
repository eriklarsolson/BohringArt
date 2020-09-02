import React, { Component } from 'react';
import { Home } from "./components/home"

import { Switch, Route } from 'react-router-dom';
import {PageNotFound} from "./components/page-not-found";
import {Resources} from "./components/resources";
import {AboutUs} from "./components/about";
import {CircuitBuilding} from "./components/circuilt-building";
import {MetalEngraving} from "./components/metal-engraving";
import {TelescopeActivity} from "./components/telescope-activity";
import {StellarCycle} from "./components/stellar-cycle";
import ObjectPage from "./components/stellar-cycle/ObjectPage";
import InfoPage from "./components/stellar-cycle/InfoPage";
import {RocketBuilding} from "./components/rocket-building";
import FlightSimulator from "./components/rocket-building/FlightSimulator";
import {UnderConstruction} from "./components/under-construction";

class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/activity/circuit-building" component={CircuitBuilding} />
                    <Route path="/activity/metal-engraving" component={MetalEngraving} />
                    <Route path="/activity/telescope-activity" component={TelescopeActivity} />
                    <Route path="/activity/rocket-building" component={RocketBuilding} />
                    <Route path="/activity/flight-simulator" component={FlightSimulator} />
                    <Route path="/activity/stellar-cycle" component={StellarCycle} />
                    <Route path="/activity/object-page" component={ObjectPage} />
                    <Route path="/activity/info-page" component={InfoPage} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/resources" component={Resources} />
                    <Route exact path="/" component={UnderConstruction} />
                    <Route path="/home" component={Home} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </>
        )
    }
}

export default Routes;

