import React, { Component } from "react";
export class Valid extends Component {
    state ={
firstName:'',
lastName:'',
email:'',
phone:'',
password:'',
firstNameErr:'',
lastNameErr:'',
emailErr:'',
phoneErr:'',
passwordErr:'',


    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value})
        console.log(this.state)

    }
   
    validateForm = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';
        let passwordErr = '';

        if (this.state.firstName.length <=5){
            firstNameErr='first name must contain 5 char'
        }
        if (this.state.lastName <=3){
            lastNameErr='first name must contain 3 char'
        }
        if (this.state.emailName.includes('@')){
            emailErr='enter valid email'
        }
        if (this.state.phone.length !==10){
            phoneErr='enter valid phone no'
        }
        if (this.state.password.length <=8){
            passwordErr='password must contain 8 char'
        }

        if(firstNameErr || lastNameErr || emailErr || phoneErr || passwordErr){
            this.setState({firstNameErr,lastNameErr,emailErr,phoneErr,passwordErr})
        } else{ 
        this.setState({firstNameErr,lastNameErr,emailErr,phoneErr,passwordErr})
    }
    }
    handleSubmit = (e) => {
        e.preventDefault();
       const valid = this.validateForm();
        if(valid){
            console.log(this.state)
        }
        console.log(this.state)
        console.log("form submitted")
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                          
                            <h2 className="text-primary">Application Form</h2>
                            <div className="mt-3">
                                <input type='text'
                                    name='firstName'
                                    placeholder=" enter your first name"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                />
                                <p  className="text-danger">{this.state.firstNameErr}</p>
                            </div>
                            <div className="mt-3">
                                <input type='text'
                                    name='lastName'
                                    placeholder=" enter your last name name" 
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                    />
                                    <p  className="text-danger">{this.state.lastNameErr}</p>
                            </div>
                            <div className="mt-3">
                                <input type='email'
                                    name='email'
                                    placeholder=" enter your email" 
                                    onChange={this.handleChange}
                                    value={this.state.email} 
                                        />
                                        <p  className="text-danger">{this.state.emailErr}</p>
                            </div>
                            <div className="mt-3">
                                <input type='number'
                                    name='number'
                                    placeholder=" enter your phone No" 
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                    />
                                    <p  className="text-danger">{this.state.phoneErr}</p>
                            </div>
                            <div className="mt-3">
                                <input type='password'
                                    name='password'
                                    placeholder=" enter your password" 
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    />
                            <p  className="text-danger">{this.state.passwordErr}</p>
                            <div>
 
                   <button className="btn btn-primary mt-3 fs-5">submit</button>

</div>
                       </div>
                        </form>
                        </div>




                    
                    <div className="col-md-4"></div>
                </div>
            </div>

        )
    }
}

export default Valid;