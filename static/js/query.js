ip = document.querySelector("#inputSearch")
btn = document.querySelector('#btSearch')
btn.addEventListener('click', query)

function query() {
    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_OPigSXHYex5qHvm7X3Jklxv5uWjs0&ipAddress=')
        .then(response => {
            return response.text()
        }).then(data => {
        console.log(data)
    })
}