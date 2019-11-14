import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


class UserList extends React.Component {
    deleteRow = (id) => {
        let arr1 = this.props.userInfo;
        arr1.splice(id, 1);
        this.setState({
            userInfo: this.props.userInfo
        })
    }

    render() {
        return (
            <div className='test1'>
                <h2>User List</h2>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Confirm Pwd</th>
                            <th>Date Of Birth</th>
                            <th>Phone Number</th>
                            <th colSpan='2'>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userInfo.map((val, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{ind + 1}</td>
                                    <th scope="row"> <img src={val.file} className='listImg' alt='img' /></th>
                                    <td>{val.fName}</td>
                                    <td>{val.lName}</td>
                                    <td>{val.email}</td>
                                    <td>{val.pwd}</td>
                                    <td>{val.cPwd}</td>
                                    <td>{val.dob}</td>
                                    <td>{val.phoneNumber}</td>
                                    <td>
                                        <Link to="/UpdateList">
                                            <button className='btn btn-sm btn-info' onClick={() => this.props.editRow(val, ind)}>Edit</button>
                                        </Link>
                                    </td>
                                    <td><button className='btn btn-sm btn-info' onClick={() => this.deleteRow(ind)}>Delete</button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan='11' className='text-center'>
                                <Link to="/">
                                    <button className='btn btn-lg btn-info btn-block' onClick={this.props.list}>Add Registration</button>
                                </Link>
                            </th>

                        </tr>
                    </tfoot>
                </Table>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        userInfo: state.userInfo
    }
}
export default connect(
    mapStateToProps
    // mapDispatchToProps
)(UserList)