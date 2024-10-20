
function CountryDetails(props) {
    const { country, handleVisitedCountries } = props
    console.log(country)
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <h4>Country: {country.name.common}</h4>
        </div>
    );
}

export default CountryDetails;