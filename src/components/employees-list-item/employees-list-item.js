import { Component } from 'react';
import './employees-list-item.css';

class  EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            classNames: "list-group-item d-flex justify-content-between",
        }
    }

    render() {
        const {name, salary, onDelete, onToggleProp, increase, like} = this.props;
        let {classNames} = this.state;

        return (
            <li className={classNames}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle={like}>{name}</span>
                <input type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                onChange={this.handleChange}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        onChange={this.console}
                        data-toggle={increase}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;