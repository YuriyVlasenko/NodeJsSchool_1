import singleton from './singleton';
import forecastManager from './forecastManager'

// task 1
console.log('singleton');
console.log(singleton);

// task 2
console.log('forecastManager');

const cities = ['Kharkiv', 'Kiev'];

// parallel start
for (let cityName of cities){
    forecastManager.getCityWeather(cityName).then((weather)=> {
        console.log(`${cityName} weather`);
        console.log(weather);
    })
}

// queue
const [kharkiv, kiev] = cities;
forecastManager.getCityWeather(kharkiv)
    .then((weather)=> {
            console.log(`${kharkiv} weather`);
            console.log(weather);
            return forecastManager.getCityWeather(kiev);
        })
    .then((weather)=>{
        console.log(`${kiev} weather`);
        console.log(weather);
    });

