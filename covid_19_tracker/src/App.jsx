import React, { useEffect, useState } from "react";


import "./App.css";
import Header from "./components/header/Header";
import InfoBox from "./components/infobox/InfoBox";
import { Card, CardContent } from "@material-ui/core";

const App = (props) => {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Worldwide');
  const [countryInfo, setCountryInfo] = useState({}); 

  // use effect of single country
  useEffect(  () => {
    const getSingleCountriesInfo = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
    }

    getSingleCountriesInfo();
  },[]);

  // use effect of countries
  useEffect(() =>  {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then( (response) => response.json())
        .then((data) => {
          const countriesInfo = data.map((country) => ({
            name: country.country, // United States, India...
            value: country.countryInfo.iso2, // USA, UK, ...
          }));

          setCountries(countriesInfo);
        });
    };

    getCountriesData();
  }, []);
  

  // helper Functions
  const getSelectedCountry = (selectedCountry) => {
    const url =
    selectedCountry === "Worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // setInputCountry(countryCode);
      setCountryInfo(data);
      // setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      // setMapZoom(4);
    });
  }


  return (
    <div className="app">

      <div className="app__left">
        <Header 
        countries={countries} 
        getSelectedCountry={getSelectedCountry}></Header>

        <div className="app__stats">
          <InfoBox 
            title = 'Coronavirus Cases'
            cases = {countryInfo.todayCases}
            total={countryInfo.cases}
          />

          <InfoBox 
            title = 'Recovered'
            cases = {countryInfo.todayRecovered}
            total = {countryInfo.recovered}
          />

          <InfoBox 
            title = 'Deaths'
            cases = {countryInfo.todayDeaths}
            total = {countryInfo.deaths}
          />
        </div>

        <div className="app__map">
          <h1>Map</h1>
        </div>

      </div>

      <div className="app__right">
        <Card>
          <CardContent>
            <h2> Data table </h2>
            <h2> Chart </h2>
          </CardContent>
        </Card>

      </div>

      
      

      
    </div>
  );
};

export default App;
