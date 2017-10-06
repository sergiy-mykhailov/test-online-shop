
import React from 'react';
import ReactDOM from 'react-dom';
import HashRouter from 'react-router-dom/HashRouter'
import Route from 'react-router-dom/Route'
import Redirect from 'react-router-dom/Redirect'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';

import Home from './containers/Home.jsx';
import Login from './containers/Login.jsx';
import Catalog from './containers/Catalog.jsx';
import ProductEditor from './containers/ProductEditor.jsx';
import ErrorPage from './components/ErrorPage.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './components/main.css';

let store = createStore(appReducer);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        store.getState().user.isAdmin ? (
            <Component {...props}/>
        ) : (
            <Redirect to={'/error'}/>
        )
    )}/>
);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <HashRouter>
                <div>
                    <Route path="/" render={() => (
                        store.getState().user.isLogged
                            ? (<Home/>)
                            : (<Redirect to="/login"/>)
                    )}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/catalog" component={Catalog}/>
                    <PrivateRoute path="/editor" component={ProductEditor}/>
                    <Route path="/error" component={ErrorPage}/>
                </div>
            </HashRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
