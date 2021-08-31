const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    const divCountries = document.getElementById('countries');
    countries.forEach(country => {
        //console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country: ${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">details</button
        `;
        divCountries.appendChild(div);
    })
}

const loadCountryByName = (countryName) => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountrydetails(data[0]));
}

const displayCountrydetails = (countrydetail) => {
    console.log(countrydetail);
    const countryDetailtsDiv = document.getElementById('country-details');
    countryDetailtsDiv.innerHTML = `
    <h3>Name: ${countrydetail.name}</h3>
    <p>Capital: ${countrydetail.capital}</p>
    <p>Region: ${countrydetail.region}</p>
    <p>Population: ${countrydetail.population}</p>
    <img width='300px' src='${countrydetail.flag}'>
    `
}