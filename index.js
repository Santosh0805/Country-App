// const countriesContainer = document.getElementById('countriesContainer');
// const sortBtn = document.getElementById('sortBtn');

// async function fetchCountries() {
//     try {
//         const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching countries:', error);
//     }
// }

// function createCountryCard(country) {
//     const card = document.createElement('div');
//     card.classList.add('country-card');
//     card.innerHTML = `
//         <h3>${country.name}</h3>
//         <p>Population: ${country.population}</p>
//         <p>Capital: ${country.capital}</p>
//         <p>Region: ${country.region}</p>
//     `;
//     countriesContainer.appendChild(card);
// }

// async function displayCountries() {
//     countriesContainer.innerHTML = ''; // Clear existing cards
//     const countries = await fetchCountries();
//     countries.forEach(country => createCountryCard(country));
// }

// sortBtn.addEventListener('click', async () => {
//     countriesContainer.innerHTML = ''; // Clear existing cards
//     const countries = await fetchCountries();
//     countries.sort((a, b) => b.population - a.population); // Sort by population in descending order
//     countries.forEach(country => createCountryCard(country));
// });

// // Initial display of countries
// displayCountries();


// sortBtn.addEventListener('click', async () => {
//     countriesContainer.innerHTML = ''; // Clear existing cards
//     const countries = await fetchCountries();
//     console.log('Countries before sorting:', countries); // Add this line for debugging
//     countries.sort((a, b) => b.population - a.population); // Sort by population in descending order
//     console.log('Countries after sorting:', countries); // Add this line for debugging
//     countries.forEach(country => createCountryCard(country));
// });

const countrySection = document.getElementById('countries');

async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all'); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error(`Error fetching countries: ${response.status}`);
    }
    const data = await response.json();
    displayCountries(data);
  } catch (error) {
    console.error('Error fetching countries:', error);
    // Handle errors appropriately, e.g., display an error message to the user
  }
}

function displayCountries(countries) {
  countries.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('












