import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RoutesModule from './routes';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { store } from './store';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import deepPurple from 'material-ui/colors/deepPurple';
import red from 'material-ui/colors/red';

import 'styles/main.scss';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blue,
        secondary: deepPurple,
        error: red
    }
});

let routes = RoutesModule.Routes;

const renderApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Router children={routes} />
                </MuiThemeProvider>
            </Provider>
        </AppContainer>,
        document.getElementById('main-app')
    );
};

renderApp();

if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').Routes;
        renderApp();
    });
}
