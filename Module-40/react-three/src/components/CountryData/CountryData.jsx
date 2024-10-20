import React from 'react';

function CountryData(props) {
    const { country, handleVisitedCountries } = props
    return (
        <div>
            <h4>Subregion: {country.subregion}</h4>
        </div>
    );
}

export default CountryData;