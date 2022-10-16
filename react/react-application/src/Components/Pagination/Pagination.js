import React, { Component } from 'react'


export class Pagination extends Component {
    state = {
        usersData : [],
        pageNumber :0
    
    }
    getDummyUserData = async()=>{
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,{
method :"get",
headers :{
  "app-id" :"6343cafd0c1ec348072a9b7f "
}

});
    const data = await response.json();
    this.setState({usersData:data.data});
    console.log(this.state.usersData)
    }

  handleButtonClick = (num) =>{
    this.setState({pageNumber:num})
  } 

    componentDidMount(){
        this.getDummyUserData();
    
    }
    componentDidUpdate(prevsProps,prevsState){
if(prevsState.pageNumber !== this.state.pageNumber){
    this.getDummyUserData();
}

    }
    
  render() {
    return (
      <div>
        <h2 className='text-center'>pagination</h2>
        {
   this.state.usersData.length ? (
<div className='container'>
    <div className='row'>
    { this.state.usersData.map((user)=>(
       <div className='col-md-6 mt-4'>
        <div className='card pt-4'>
        <div className='row'>
            <div className='col-md-4'>
              <img src={user.picture} />
            </div>
            <div className='col-md-8'>
              <p>{user.id}</p>
              <strong>{user.title} {user.firstName}</strong>
            </div>
        </div>
        </div>
       </div>
    ))}
    </div>

    <center className='my-4'>
        {
      [1,2,3,4,5,6,7,8,9].map((num)=>(
        <button className='btn btn-danger m-2' onClick={()=>{this.handleButtonClick(num)}}>{num}</button>
      ))
       }
    </center>
</div>
   ):<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwFQJsbFPHn4JCA127JA1zK_uLLHfiNxNtOAxmuqe&s"/>

        }

      </div>
    )
  }
}

export default Pagination
