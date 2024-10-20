import React, { useState } from 'react';
import CountryData from "../CountryData/CountryData";
import CountryDetails from '../CountryDetails/CountryDetails';
import "./Country.css";

function Country(props) {
    const { country, handleVisitedCountries } = props
    const { name, flags, population, area, ccn3, cca3 } = country

    const [visited, setVisited] = useState(false)


    const handleClick = () => {
        setVisited(!visited)
    }

    return (
        // <div className={visited ? "visted" : "country"} key={ccn3}>
        <div className={`country ${visited && 'visted'}`} key={ccn3}>
            <img src={flags.png} alt="" />
            <h3 style={{ color: visited && "green" }}>Population: {population}</h3>
            <h3 style={{ textTransform: "uppercase" }}>{name?.common}</h3>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountries(country)}>Add Flags</button>
            <br /><br />
            <button onClick={handleClick}>{visited ? "Visited" : "Go to"}</button>
            <p>{visited ? "I have visited here" : "I will visite"}</p>

            <br /><br />

            <hr />

            {/* props Drilling */}
            {/* first way (Not Recommanded way) */}
            <CountryDetails country={country} handleVisitedCountries={handleVisitedCountries} />

            <CountryData country={country} handleVisitedCountries={handleVisitedCountries} />

            {/* second way (Recommanded way)*/}
            {/* <CountryDetails {...props} />
            <CountryData {...props} /> */}
        </div>
    );
}

export default Country;