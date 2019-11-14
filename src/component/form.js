import React from 'react';
import Logo from '../../src/user.jpg';
import '../../src/App.css';
import '../../src/index'
import { connect } from "react-redux";
import { Link } from "react-router-dom";




function add(payload) {
    return ({
        type: 'AddRecord',
        payload
    })
}

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo: [],
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: '',
            phoneNumber: '',
            key: 0,
            List: false,
            file: Logo,
            updateList: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    onHandleChange1 = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }
    onHandleChange2 = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }
    onHandleChange3 = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    onHandleChange4 = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    onHandleChange5 = (e) => {
        this.setState({
            confirmPassword: e.target.value
        });
    }
    onHandleChange6 = (e) => {
        this.setState({
            dateOfBirth: e.target.value
        });
    }
    onHandleChange7 = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    }

    addItem = (e) => {
        let list = this.state.userInfo;
        let keys = this.state.key;
        this.props.add({ fName: this.state.firstName, lName: this.state.lastName, email: this.state.email, pwd: this.state.password, cPwd: this.state.confirmPassword, dob: this.state.dateOfBirth, phoneNumber: this.state.phoneNumber, key: this.state.key, file: this.state.file });
        this.setState({
            allValues: list,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: '',
            phoneNumber: '',
            key: keys + 1,
            file: Logo
        })
    }


    render() {
        return (
            <div>
                <div className="container row test">
                    <form className="form-horizontal col-8" role="form">
                        <h2>Registration</h2>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Record</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Your insert record has been succussfull
                                     </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-3 control-label">First Name</label>
                            <div className="col-9">
                                <input type="text" id="firstName" placeholder="First Name" className="form-control" onChange={this.onHandleChange1} value={this.state.firstName} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-3 control-label">Last Name</label>
                            <div className="col-9">
                                <input type="text" id="lastName" placeholder="Last Name" className="form-control" onChange={this.onHandleChange2} value={this.state.lastName} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-3 control-label">Email* </label>
                            <div className="col-9">
                                <input type="email" id="email" placeholder="Email" className="form-control" name="email" onChange={this.onHandleChange3} value={this.state.email} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-3 control-label">Password*</label>
                            <div className="col-9">
                                <input type="password" id="password" placeholder="Password" className="form-control" onChange={this.onHandleChange4} value={this.state.password} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-3 control-label">Confirm Password*</label>
                            <div className="col-9">
                                <input type="password" id="password1" placeholder="Password" className="form-control" onChange={this.onHandleChange5} value={this.state.confirmPassword} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-3 control-label">Date of Birth*</label>
                            <div className="col-9">
                                <input type="date" id="birthDate" className="form-control" onChange={this.onHandleChange6} value={this.state.dateOfBirth} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group col-9">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" onChange={this.handleChange} id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose Image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-3 control-label">Phone number </label>
                            <div className="col-9">
                                <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" className="form-control" onChange={this.onHandleChange7} value={this.state.phoneNumber} />
                                <span className="help-block">Your phone number won't be disclosed anywhere </span>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary btn-block" onClick={this.addItem} data-toggle="modal" data-target="#exampleModal">Register</button>
                        <br />
                        <Link to="/UserList">
                            <button type="button" className="btn btn-primary btn-block" onClick={this.props.list}>Todo List</button>
                        </Link>
                    </form>
                    <div className="col-4 p-box">
                        <h2><br></br></h2>
                        <div className='changeBackgroundColor row'>
                            <div className='col'>
                                <img className='img-heigthWidth' src={this.state.file} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = { add };
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)

