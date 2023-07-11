const mainDisplay = document.querySelector("#ListDisplay")
const searchBt = document.querySelector("#btSearch")
const inputSrch = document.querySelector("#inputSearch")
const map = document.querySelector("#mapa")

const DEFAULT_VALUES = [{
    ip: "192.168.13.1.0",
    location: {city: "NY", district: "Brooklyn", number: 101},
    timezone: -5,
    isp: "Vivo Fibra - Ultra Banda Larga"
}]

function generateHtmlList(apiResult) {
    mainDisplay.innerHTML = apiResult.map(({ip, location: {city, district, number, timezone}, isp}) => {
        return (`
            <li class="ip">
                <h2>IP ADRESS</h2>
                <p>${ip}</p>
            </li>
            <div class="separator"></div>
            <li class="location">
                <h2>LOCATION</h2>
                <p>${district}, ${city}<br>${number}</p>
            </li>
            <div class="separator"></div>
            <li class="timezone">
                <h2>TIMEZONE</h2>
                <p>${timezone}</p>
            </li>
            <div class="separator"></div>
            <li class="isp">
                <h2>ISP</h2>
                <p>${isp}</p>
            </li>
        `)
    })
}

async function query() {
    let url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_OPigSXHYex5qHvm7X3Jklxv5uWjs0&ipAddress=' + inputSrch.value
    console.log(url)
    const data = await fetch(url)
    return await data.json()
}

generateHtmlList(DEFAULT_VALUES)

searchBt.addEventListener("click", async () => {
    const {ip, location: {region, city, postalCode, timezone, lat, lng}, isp} = await query()
    const result = [{ip, location: {district: region, city, number: postalCode, timezone}, isp}]
    console.log(result)
    generateHtmlList(result)
    map.src = `https://www.openstreetmap.org/#map=6/${lat}/${lng}`
})

let t = `https://www.openstreetmap.org/export/embed.html?bbox=${lng}%2C${lat}%2C${lng}%2C${lat}&amp;layer=mapnik`