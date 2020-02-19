import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            textSearch:' '
        }
    }

    getTextInput(text){
        this.setState({
            textSearch: text.target.value
        })
        // console.log('input: '+text.target.value)
        setTimeout(()=>{this.props.getTextSearch(this.state.textSearch)}, 100)
    }
    
    render() {
        return (
            <div className="form-group">
                <div className="btn-group">
                    <input onChange={(text)=>this.getTextInput(text)} type="text" className="form-control" name="inputSearch" aria-describedby="helpId" placeholder="Tìm kiếm ..." />
                    {/* <span onClick={()=>this.props.getTextSearch(this.state.textSearch)} className="btn btn-primary">Search</span> */}
                </div>
            </div>

        )
    }
}
