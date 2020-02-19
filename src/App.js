import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import TableData from './Components/TableData';
import AddUser from './Components/AddUser';
import UserInfo from './Database/UserInfo.json';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: UserInfo
    }
  }

  getTextSrearch = (text)=>{
    this.setState({
      textSearch: text
    }, ()=>{
      this.dataResultSearch()
    })
  }

  dataResultSearch = ()=>{
    const dataResult = [];
    // console.log("foreach: " + this.state.textSearch);
    this.state.dataUser.forEach((item) => {
      // console.log(this.state.textSearch)
      if (item.name.indexOf(this.state.textSearch) !== -1 || this.state.textSearch === undefined || this.state.textSearch === '') {
        dataResult.push(item);
      }
    });

    return dataResult;

  }

  getNewUser = (id, name, phone, permission)=>{
    const user = {};
    user.id = id;
    user.name = name;
    user.phone = phone;
    user.permission = permission;
    this.state.dataUser.push(user);
    // console.log(this.state.dataUser);
    this.getTextSrearch();
  }

  getUserEdit = (id, name, phone, permission)=>{
    this.state.dataUser.forEach((value)=>{
      if (value.id === id){
        if (name !== undefined){value.name = name};
        if (phone !== undefined){value.phone = phone};
        if (permission !== undefined){value.permission = permission};
      }
    });

    console.log(this.state.dataUser);
 
  }

  getUserRemove = (id)=>{
    // console.log('app id: '+id); 
    const data = this.state.dataUser.filter( item => item.id !== id);
    this.setState({
      dataUser : data
    }, ()=> this.dataResultSearch())
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container">
            <Search getTextSearch={(text) => this.getTextSrearch(text)} />
            <div className="row">
                <TableData getUserEdit={(id, name, phone, permission)=>this.getUserEdit(id, name, phone, permission)}
                           getUserRemove={(id)=>this.getUserRemove(id)}
                           dataUser={this.dataResultSearch()}  />
                <AddUser getNewUser={(id, name, phone, permission)=>this.getNewUser(id, name, phone, permission)} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
