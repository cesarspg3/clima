const axios = require('axios');

const getWeather = async ( lat, lon ) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2623fc5e5fa4c13f6cdf39d3cfbfc1a&units=metric`,
    })
    
    const resp = await instance.get();
    if (resp.status !== 200) {
        throw new Error(`no hay resultados para la dirección: ${direccion}`)
    }

    const data = resp.data.main;
    const { temp } = data;

    return temp
}

module.exports = {
    getWeather
}