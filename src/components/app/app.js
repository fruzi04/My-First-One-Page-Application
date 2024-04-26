import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    
    const data = [
        {name: 'Slavik P.', salary: 650, increase: false, id: 1},
        {name: 'Lana R.', salary: 1500, increase: false, id: 2},
        {name: 'Josephine J.', salary: 3000, increase: true, id: 3},
        {name: 'Jhonny Sins', salary: 6000, increase: false, id: 4}
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