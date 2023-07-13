const mainDisplay = document.querySelector("#ListDisplay")
const searchBt = document.querySelector("#btSearch")
const inputSrch = document.querySelector("#inputSearch")

const DEFAULT_VALUES = [{
    ip: "192.168.13.1.0",
    location: {city: "NY", district: "Brooklyn", number: 101},
    timezone: -5,
    isp: "Vivo Fibra - Ultra Banda Larga"
}]

let map = L.map('map')
map.setView([51.505, -0.09], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

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
    const pos = [lat, lng]
    map.setView(pos, 21)
})

