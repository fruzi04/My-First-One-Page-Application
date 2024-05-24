import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item"

import '../employees-list/employees-list.css'
// ({data, onDelete, onToggleProp, onSalaryChange})
class EmployeesList extends Component{
    constructor(props) { 
        super(props); 
        this.state = {

        }
    }
    
    render() {
        const elements = this.props.data.map(item => {
            const {id, ...itemProps} = item;
            return(
                <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => this.props.onDelete(id)}
                onToggleProp={(e) => this.props.onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                id={id}/>
            )
        });
        
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    }
}

export default EmployeesList;