import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';
import rootReducer from './reducers';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/login"
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import client from "./graphQL/apolloClient.config"


export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const client = new ApolloProvider({
//     uri : "http://localhost:4000/"
// })
console.log(client,"Client-------")
class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/login'}/>
                    }}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Header/>
                    <Route exact path={'/products'} component={Home}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact path={'/cart'} component={ShoppingCart}/>
                </Switch>

            </React.Fragment>
            </BrowserRouter>
        </Provider>
         </ApolloProvider>
    );
  }
}

export default App;
