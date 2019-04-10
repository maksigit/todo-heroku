import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {

    componentDidMount() {
        fetch('https://lectorium.herokuapp.com/api/todolist', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-apikey': 'eyJhbGciOiJIUzI1NiJ9.bmV3dGVzdHVzZXJfbmV3dGVzdHBhc3M.6G0GjokS52wciQthCjbg1lxIBc_2euvZjhgw5igtZ8Y'
            }
        }).then(res => res.json())
            .then(jsonStr => this.setState({ list: jsonStr }))
            .then(data => console.log('1', this.state.list))
            // .then(jsonStr => this.setState({ apiInfo: jsonStr }))
            // .then(data => console.log('stattt', data))

            .then(data => {this.props.setTodo(this.state.list)})
    }

    render() {
        return (
            <div className='wrap-form-login'>

            </div>
        )
    }
}

export default connect(
    state => {
        console.log('store ', state);
        return ({
            testStore: state
        })
    },
    dispatch => {
        return ({
            setTodo: (todolist) => {
                dispatch({type: 'SET_TODO', payload: todolist})
            },
        })
    }
)(TodoList);