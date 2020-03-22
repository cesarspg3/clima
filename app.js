const argv = require('./config/yargs').argv;
const { getLangLng } = require('./lugar/lugar');
const { getWeather } = require('./clima/clima');
const { direccion } = argv;

// getLangLng(direccion)
// .then( resp => {
//     const { direccion, lat, lng } = resp;
//     getWeather(lat, lng)
//         .then( resp => console.log(`En la dirección: ${direccion} tiene ${resp} grados`) )
//         .catch( err => console.log(err) )
// } )
// .catch( err => console.log(err) )

const getInfo = async(direccion) => {
    const coords = await getLangLng(direccion);
    const { direccion:dir, lat, lng } = coords;
    if ( direccion && lat && lng ){
        const temp = await getWeather(lat, lng);
        if (temp) console.log(`En la dirección: ${dir} tiene ${temp} grados`)
    }
}

getInfo(direccion);
