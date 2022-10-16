 import react,  {Component} from 'react'
 class User extends Component {
    constructor(props) {
        super(props);

this.state = {
    isLoggedIn: true,    
}
    }
    
    render() {
       return this.state.isLoggedIn && <div><h1 className='bg-danger fs-1 text-center m-5 p-5 text-white  '>wajid khanday</h1></div>
       
       
       
        {/*
      ternary conditional oprator
      return(

    this.state.isLoggedIn ?
        <div>no its false</div>
      )*/}
        


        {/* element variable
        let message
        if (this.state.isLoggedOut){
        message = <h1>yes its true</h1>
        }
        else  {
            message = <h1>no its false</h1>
        }
       
    return <div>{message}</div>*/}


    {/*if else statement*/}
{/*if (this.state.isLoggedIn){
    return <h2>its true</h2>
}
else {
    return <h2>its false</h2>
}*/}

    }
}
 
 
export default User;