import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-3">Project quản lý người dùng</h1>
                    <p className="lead">React Js</p>
                    <hr className="my-2" />
                </div>
            </div>
        )
    }
}
