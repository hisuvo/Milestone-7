import { useEffect, useState } from "react"
import Country from "../Country/Country"
import "./countries.css"

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }


    let uniqueKey = 0;

    return (
        <>
            <h2>COUNTRIES: {countries.length}</h2>

            {/* Visited country */}
            <div>
                <h2>Visited countries: {visitedCountries.length}</h2>
                <ol className="countries">
                    {visitedCountries.map((country, index) => <li key={index}>
                        <p>
                            {country.name.common}
                        </p>
                        <p><img width={'100px'} height={'70px'} src={country.flags.png} alt="" /></p>

                    </li>)}
                </ol>
            </div>

            {/* Display Country */}
            <div className="countries">
                {countries.map((country, index) => <Country key={index} country={country} handleVisitedCountries={handleVisitedCountries} />)}

            </div>
        </>
    )
}

export default Countries