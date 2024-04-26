import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Slavik P.', salary: 650, increase: false, id: 1},
                {name: 'Lana R.', salary: 1500, increase: false, id: 2},
                {name: 'Josephine J.', salary: 3000, increase: true, id: 3},
                {name: 'Jhonny S.', salary: 6000, increase: false, id: 4}
            ]
        }
        this.maxId = 4;  
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }             
        }) 
    }
    
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    
    render() {
        return (
            <div className="app">
                <AppInfo/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <div className="app-filter">
                        <AppFilter/>    
                    </div> 
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                  
                <EmployeesAddForm
                    onAdd={this.addItem}/>
    
            </div>
        );
    }
}

export default App;