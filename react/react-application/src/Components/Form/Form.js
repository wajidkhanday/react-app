import React, { Component } from "react";
export class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        firstNameErr: '',
        lastNameErr: '',
        phoneErr: '',
        emailErr: '',
        passwordErr: '',
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value})
        console.log(this.state)

    }

    validateForm = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let phoneErr = '';
        let emailErr = '';
        let passwordErr = '';

        if (this.state.firstName.length <=4) {
            firstNameErr = ("first name should be atleast 5 characters")
        }
        if (this.state.lastName <= 3) {
            lastNameErr = ("last name should be atleast 3 characters")
        }
        if (this.state.phone.length !== 10) {
            phoneErr = ("enter valid phone no")
        }
        if (!this.state.email.match((/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
            emailErr = ("enter valid email id")
        }
        if(this.state.password.length<8){
            passwordErr = 'enter valid password with numbers'
        }

        if (firstNameErr || lastNameErr || phoneErr || emailErr || passwordErr) {
            this.setState({ firstNameErr, lastNameErr, phoneErr, emailErr,passwordErr})
        } else {
            this.setState = ({ firstNameErr, lastNameErr, phoneErr, emailErr,passwordErr})
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
                            <h2>Contact us</h2>
                            <div className="mt-3">
                                <input type='text'
                                    name="firstName"
                                    placeholder="enter your first name"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                />
                                <p className="text-danger">{this.state.firstNameErr}</p>
                            </div>

                            <div className="mt-3">
                                <input type='text'
                                    name="lastName"
                                    placeholder="enter your last name"
                                    onChange={this.handleChange}
                                    value={this.state.lastName} 
                                    />
                                <p className="text-danger">{this.state.lastNameErr}</p>
                            </div>


                            <div className="mt-3">
                                <input type='number'
                                    name="phone"
                                    placeholder="enter your phone number"
                                    onChange={this.handleChange}
                                    value={this.state.phone} />
                                <p className="text-danger">{this.state.phoneErr}</p>
                            </div>

                            <div className="mt-3">
                                <input type='email'
                                    name="email"
                                    placeholder="enter your email"
                                    onChange={this.handleChange}
                                    value={this.state.email} 
                                    />
                                <p className="text-danger">{this.state.emailErr}</p>
                            </div>

                            <div className="mt-3">
                                <input type='text'
                                    name="password"
                                    placeholder="enter your password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                                <p className="text-danger">{this.state.passwordErr}</p>
                            </div>

                            <div className="mt-3">
                                <button className="btn btn-danger">Submit</button>
                            </div>





                        </form>
                    </div>
                    <div className="col-md-4">
                    </div>

                </div>
            </div>
        )
    }
}


export default Form;