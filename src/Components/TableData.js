import React, { Component } from 'react'

export default class TableData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyEdit: -1
        }
    }

    getTextInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })

        console.log(this.state.name + ' - ' + this.state.phone + ' - ' + this.state.permission)

    }

    getKeyData = (key) => {
        this.setState({
            keyEdit: key
        })
    }

    setKeyData = (id) => {
        this.setState({
            keyEdit: -1
        })
        console.log(id + ' - ' + this.state.name + ' - ' + this.state.phone + ' - ' + this.state.permission)
        this.props.getUserEdit(id, this.state.name, this.state.phone, this.state.permission);
    }

    getUserRemove = (id)=>{
        this.props.getUserRemove(id);
        // console.log('table :' + id);
    }

    outDataUser = () => (
        this.props.dataUser.map((value, key) => {
            if (key === this.state.keyEdit) {
                return (
                    <tr key={key}>
                        <th>{key + 1}</th>
                        <th>
                            <input name="name" onChange={(event) => this.getTextInput(event)} style={{ display: 'block', width: '100%', height: '100%', textAlign: 'center' }} type="text" defaultValue={value.name} />
                        </th>
                        <th><input name="phone" onChange={(event) => this.getTextInput(event)} style={{ display: 'block', width: '100%', height: '100%', textAlign: 'center' }} type="text" defaultValue={value.phone} /></th>
                        <th>
                            <select defaultValue={value.permission} onChange={(event) => this.getTextInput(event)} className="custom-select" name="permission">
                                <option value="default">Quyền mặc định</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </th>
                        <th className="btn-group">
                            <span className="btn btn-success" onClick={() => this.setKeyData(value.id)}>lưu</span>
                            <span className="btn btn-danger" onClick={() => this.getUserRemove(value.id)}>Xóa</span>
                        </th>
                    </tr>
                )
            }
            return (
                <tr key={key}>
                    <th>{key + 1}</th>
                    <th>{value.name}</th>
                    <th>{value.phone}</th>
                    <th>{value.permission}</th>
                    <th className="btn-group">
                        <span className="btn btn-warning" onClick={() => this.getKeyData(key)}>Sửa</span>
                        <span className="btn btn-danger" onClick={() => this.getUserRemove(value.id)}>Xóa</span>
                    </th>
                </tr>
            )

        })

    )

    render() {
        // console.log(this.props.dataUser)
        return (
            <div className="col-lg-8">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>TÊN</th>
                            <th>ĐIỆN THOẠI</th>
                            <th>QUYỀN</th>
                            <th>THAO TÁC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.outDataUser()}
                    </tbody>
                </table>
            </div>

        )
    }
}
