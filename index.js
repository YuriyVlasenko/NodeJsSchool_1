import singleton from './singleton';
import forecastManager from './forecastManager'
import propertyPrefixItterator from './propertyPrefixItterator'

// task 1
const checkTask1 = ()=> {
    console.log('singleton');
    console.log(singleton);
}

// task 2

const checkTask2 = ()=>{

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
}

const checkTask3 = ()=> {

    // task 3 - itterator

    let target = {
        property1: "property1 value",
        property2: "property2 value",
        property3: "property3 value",
        otherProperty1: "other property1 value",
        otherProperty2: "other property1 value",
        otherProperty3: "other property1 value",
        prop: 'prop'
    };

    propertyPrefixItterator.applyItterator(target, 'other');
    for(let key of target){
        console.log(key);
    }

    propertyPrefixItterator.applyItterator(target, 'property');
    for(let key of target){
        console.log(key);
    }
}

checkTask1();
checkTask2();
checkTask3();
