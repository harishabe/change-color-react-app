import React from 'react';
import Box from './../component/box';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index";

class Boxcon extends React.Component {
    render() {
        return ( 
            <div><Box handleClick={this.props.loadColor} color={ this.props.color }/> </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps,actionCreators) (Boxcon);