import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const clARityWelcomePage = () => (
    <div>
        Welcome to clARity
    </div>
);


const clARityDashboardPage = () => (
    <div>
        clARity dashboard
    </div>
);

const AddRoomPage = () => (
    <div>
        clARity add room page
    </div>
);

const HelpPage = () => (
    <div>
        clARity help page
    </div>
);

const NotFoundPage = () => (
    <div>
        <p>Not found ---404--- boiiiiii</p>
        <a href="/">Go Home</a>
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={clARityWelcomePage} exact={true} />
            <Route path="/addroom" component={AddRoomPage} />
            <Route path="/home" component={clARityDashboardPage} exact={true} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
        );
        
        ReactDOM.render(routes, document.getElementById('app'));
