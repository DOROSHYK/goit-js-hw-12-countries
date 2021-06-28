import './sass/main.scss';
import Error from './js/pnotify.js';
import fetchCountries from './js/fetchCountries';
import  debounce  from 'lodash.debounce';
import countryCard from './templates/oneCountry.hbs';
import countriesList from './templates/countriesList.hbs';

const refs = {
    input: document.querySelector('.input'),
    render: document.querySelector('.render__country'),
}


// const r = fetch(`https://restcountries.eu/rest/v2/name/ukraine`).then(resp => {

//     return resp.json();
// }).then(uk => {
//     console.log(uk);
//     const mark = countryCard(uk);
//     console.log(mark);
//     refs.render.innerHTML = mark;
// } );

const onDebounce = debounce(onSeachInput, 500);

refs.input.addEventListener('input', onDebounce);
//вводимо по чому шукаєм
function onSeachInput(event) {
     if(!event.target.value) {
        return;
    };
    const seachCountry = event.target.value;
    fetchCountries(seachCountry).then(countryMarkup).catch(onCatch);
    
}

//перевірка на кількість введених знаків
function countryMarkup(countries) {
    if (countries.length === 1) {
        renderCountry(countries);
   } else 
    if (countries.length >= 2 && countries.length <= 10) {
        renderCountries(countries);
    } else {
        Error();
    }; 
}


function renderCountry(countries) {
    countries.forEach(country => {
        refs.render.innerHTML = countryCard(country);
        refs.input.value = '';
    })
}
    

function renderCountries(countries) {
    const countryArr = countries.map(country => country.name);
    refs.render.innerHTML = countriesList(countryArr);
}
   
    
function onCatch (error) {
    alert(`${error}`)
};

