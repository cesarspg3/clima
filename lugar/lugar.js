const axios = require('axios');

const getLangLng = async ( dir ) => {
    const econdedDireccion = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${econdedDireccion}`,
        headers: {
            'x-rapidapi-key' : '6a468ae4ecmsh1ca4eb99c29246cp1dd6b3jsn451646712d3a',
            'x-rapidapi-host' : 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    })
    
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para la dirección: ${dir}`)
    }

    const data = resp.data.Results[0];
    const { name:direccion, lat, lon:lng } = data;

    return { direccion, lat, lng }
}

module.exports = {
    getLangLng
}