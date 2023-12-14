const select = document.querySelector('.demoMeteo__select');
const meteocard = document.querySelector('meteo-card');

select.addEventListener('input', () => {
    meteocard.style = "--weather: " + select.value;
})