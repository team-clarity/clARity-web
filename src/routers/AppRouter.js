import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import RoomsPage from '../pages/RoomsPage';
import HelpPage from '../pages/HelpPage';
import HomePage from '../pages/HomePage';
import DownloadPage from '../pages/DownloadPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={WelcomePage} exact={true} />
                <Route path="/rooms" component={RoomsPage} />
                <Route path="/home" component={HomePage} exact={true} />
                <Route path="/help" component={HelpPage} />
                <Route path="/download" component={DownloadPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;