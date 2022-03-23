import React from "react"
import { ReactDOM } from "react-dom"
class Employee extends React.Component {
    render() {
        return <div>
            <h2>Employee details....</h2>
            <p>
                <label>Employee Id: <b>{this.props.id}</b></label>
            </p>
            
            <p>
                <label>Employee Name: <b>{this.props.name}</b></label>
            </p>
            
            <p>
                <label>Employee Location: <b>{this.props.location}</b></label>
            </p>
            
            <p>
                <label>Employee Salary: <b>{this.props.Salary}</b></label>
            </p>
            
        </div>
    }
}


export default Employee;