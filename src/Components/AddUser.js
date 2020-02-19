import React, { Component } from 'react'

const uuidv1 = require('uuid/v1');

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUserStatus: false
        }
    }

    addUserChangeStatus = () => {
        this.setState({
            addUserStatus: !this.state.addUserStatus
        })
       
    }

    getNewUser = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addUserView = () => {
        if (this.state.addUserStatus === true) {
            return (
                <div className="col-lg-12">
                    <button className="btn btn-outline-danger btn-block" onClick={()=>this.addUserChangeStatus()}>Đóng lại</button>
                    <br />
                    <form className="card bg-light mb-3">
                        <div className="card-header text-center">Add User</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text" name="name" onChange={(event)=>this.getNewUser(event)} className="form-control" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label>Điện Thoại</label>
                                <input type="text" name="phone" onChange={(event)=>this.getNewUser(event)} className="form-control" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label>Quyền</label>
                                <select defaultValue="default" onChange={(event)=>this.getNewUser(event)} className="custom-select" name="permission">
                                    <option value="default">Quyền mặc định</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            <button type="reset" onClick={()=>this.props.getNewUser(uuidv1(), this.state.name, this.state.phone, this.state.permission)} className="btn btn-success btn-block">Lưu lại</button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return <button className="btn btn-outline-success btn-block" onClick={()=>this.addUserChangeStatus()}>Thêm mới</button>
        }
    }

    render() {
       return (
            <div className="col-lg-4">
                {this.addUserView()}
            </div>
       )
    }
}
