import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions"

const Counter = ({counter, inc, dec, plus}) => {
    //const {dispatch} = store;
    // const {inc, plus, dec} = bindActionCreators(actions, dispatch);

    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button className="btn btn-primary" onClick={inc}>Add</button>
            <button className="btn btn-warning" onClick={dec}>Sub</button>
            <button className="btn btn-danger" onClick={() => {plus(4)}}>Plus 5</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}*/

export default connect(mapStateToProps, actions)(Counter);