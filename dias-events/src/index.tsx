import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { store } from './store';

ReactDOM.render(
    <div>yolo</div>,
    document.getElementById('main-app')
);

/*const renderApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router children={routes} />
            </Provider>
        </AppContainer>,
        document.getElementById('main-app')
    );
}

//renderApp();

/*if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').Routes;
        renderApp();
    });
}*/