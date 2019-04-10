import React, { Component } from 'react';

class Links extends Component {

    render() {
        return (
            <div className='wrap-links'>
                <a className='link' href="/" > Home </a>
                <a className='link' href="/login"> Login </a>
                <a className='link' href="/register"> Register </a>
                <a className='link' href="/todo"> TodoList </a>
            </div>
        );
    }
}

export default Links;