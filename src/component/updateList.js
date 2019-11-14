import React from 'react';
import '../../src/App.css';
import '../../src/index'
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Update extends React.Component {
    constructor() {
        super();
        this.state = {
            update: [],
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: '',
            phoneNumber: '',
            key: 0,
            List: false,
            file: '',
            id: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            firstName: this.props.value.fName,
            lastName: this.props.value.lName,
            email: this.props.value.email,
            password: this.props.value.pwd,
            confirmPassword: this.props.value.cPwd,
            dateOfBirth: this.props.value.dob,
            phoneNumber: this.props.value.phoneNumber,
            key: this.props.value.key,
            file: this.props.value.file,
            id: this.props.indexx

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

    updateRow = () => {
        this.state.update.push({ fName: this.state.firstName, lName: this.state.lastName, email: this.state.email, pwd: this.state.password, cPwd: this.state.confirmPassword, dob: this.state.dateOfBirth, phoneNumber: this.state.phoneNumber, key: this.state.key, file: this.state.file });
        let arr1 = this.props.userInfo;
        arr1.splice([this.state.id], 1, this.state.update[0]);

    }


    render() {
        console.log(this.props.value.fName)
        return (
            <div>
                <div className="container row test">
                    <form className="form-horizontal col-8" role="form">
                        <h2>Update Form</h2>
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
                        <Link to="/UserList">
                            <button type="button" className="btn btn-primary btn-block" onClick={this.updateRow}>Update</button>
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

// const mapDispatchToProps = { add };
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(Update)

