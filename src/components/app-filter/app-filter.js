import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                    Всі працівники
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Очікують премію
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    З/П більше 1.000$
            </button>
        </div>
    );
}

export default AppFilter;