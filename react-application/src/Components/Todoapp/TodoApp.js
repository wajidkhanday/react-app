import React, { Component } from 'react'
import Page from './Page'
 class TodoApp extends Component {
    state ={
        items:[],
        text: ''
    }
    handleChange = (e)  => {
        this.setState({ text: e.target.value })
    }
    handleAdd = (e) =>{
       if (this.state.text !== '' ){
        const items =[...this.state.items,this.state.text];
        this.setState({items: items, text:""});
       }
    }
  render() {
    return (
     <div className='container-fluid my-5'>
        <div className='row'>
            <div className='col-sm-6 mx-auto text-danger shadow-lg p-3'>
                <h1 className='text-center'>TODO APP</h1>
                <div className='row'>
                    <div className='col-sm-9'>
           <input type='text' className='form-control' placeholder='enter here' value={this.state.text} onChange={this.handleChange}/>
                </div>
                <div className='col-2'>
                 <button className='btn btn-info px-5' onClick={this.handleAdd}>ADD</button>
                </div>
                <div className='container-fluid'>
                    <ul className='list-unstyled row m-5'>
                   { this.state.items.map((value,i)=>{
                    return <Page value={value}/>
                   }
                   )}
        
                   
                         
    
    
    
                    </ul>
                </div>
                </div>
            </div>
        </div>
     </div>
    )
  }
}

export default TodoApp