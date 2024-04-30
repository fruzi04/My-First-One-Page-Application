import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Slavik P.', salary: 650, increase: false, like: false, id: 1},
                {name: 'Lana R.', salary: 1500, increase: false, like: false, id: 2},
                {name: 'Josephine J.', salary: 3000, increase: true, like: true, id: 3},
                {name: 'Jhonny S.', salary: 6000, increase: false, like: false, id: 4}
            ],
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
    
    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Знайти працівника" 
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;