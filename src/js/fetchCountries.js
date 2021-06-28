// export default function fetchCountries(country) {
//     return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => {
//             response.json();
//         })
//         .catch(console.error);
// }
export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            if (!response.ok) {
                throw Error(`Sorry, but such country doesn't exist`);
            }
            return response.json()
        });
}
