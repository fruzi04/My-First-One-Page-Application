import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    
    const data = [
        {name: 'Slavik P.', salary: 650, increase: false},
        {name: 'Lana R.', salary: 1500, increase: false},
        {name: 'Josephine J.', salary: 3000, increase: true},
        {name: 'Jhonny Sins', salary: 6000, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <div className="app-filter">
                    <AppFilter/>    
                </div> 
            </div>

            <EmployeesList data={data}/>
              
            <EmployeesAddForm/>

        </div>
    );   
}

export default App;