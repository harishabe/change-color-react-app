import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

import './index.css';
import Boxcon from './container/box-container';


let store = createStore(reducers,applyMiddleware(thunk))

class App extends React.Component {
    render() {
        return ( 
            <div><Boxcon/> </div>
        )
    }
}

ReactDOM.render( <Provider store={store}> < App/> </Provider>, document.getElementById('root'));