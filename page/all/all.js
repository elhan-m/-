const root = document.querySelector('#root');
const api = 'https://restcountries.com/v3.1/all';
async function getCountries(Countries) {
    const res = await fetch(api)
    const data = await res.json()
    console.log(data);
    shoCountries(data)

}
getCountries()

function shoCountries(Countries) {
    for (const country of Countries) {
        root.innerHTML +=
            `<div class="card mt-5" style="width: 18rem;">
  <img src="${country.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${country.capital}</p>
    <p class="card-text">${country.continents}</p>
  </div>
</div>`
    }
}