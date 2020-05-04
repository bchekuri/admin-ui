import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Light } from './theme/Theme';
import Login from "./components/login/Login";
import configureStore from "./redux/store";
import { PrivateRoute } from './components/common/privateroute/PrivateRoute';
import Loading from './components/common/loading/Loading';
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    const store = configureStore();
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
            </Helmet>
            <ReduxProvider store={store}>
                <ThemeProvider theme={Light}>
                    <CssBaseline>
                        <Loading/>
                        <Router>
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <PrivateRoute path="/home" component={Dashboard} />
                                <Route path="/login" component={Login} />
                            </Switch>
                        </Router>
                    </CssBaseline>
                </ThemeProvider>
            </ReduxProvider>

        </>
    );
}

export default App;
