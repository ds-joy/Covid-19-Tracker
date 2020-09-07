import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './Api'
import styles from './App.module.css';



class App extends React.Component {

    // bringing in the data
    // to make the componentDidMount we need to
    // put 'async keyword in front of the function'
    async componentDidMount() {
        const data = await fetchData()

        console.log(data)

    }

    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App