import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './Api'
import styles from './App.module.css';



class App extends React.Component {

    state = {
        data: {},
    }


    // bringing in the data
    // to make the componentDidMount we need to
    // put 'async keyword in front of the function'
    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({data: fetchedData});
    
    }

    render() {
        // bringing the data from the state
        const { data } = this.state;
        // console.log(data)

        return (
            <div className={styles.container}>
                
                {/* sending the data as props */}
                <Cards data={ data } />

                <CountryPicker />

                <Chart />
            </div>
        )
    }
}

export default App