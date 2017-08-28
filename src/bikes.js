const xmlhttpBikes = new XMLHttpRequest()
const bikeUrl = 'https://api.citybik.es/v2/networks/citybikes-helsinki'

xmlhttpBikes.onreadystatechange = () => {
  if (xmlhttpBikes.readyState === 4 && xmlhttpBikes.status === 200) {
    const stations = JSON.parse(xmlhttpBikes.responseText).network.stations
    bikeParser(stations)
  }
}

xmlhttpBikes.open('GET', bikeUrl, true)
xmlhttpBikes.send()

const bikeParser = stations => {
  const tbody = document.getElementById('fillarit')

  stations.forEach(station => {
    const row = document.createElement('tr')
    const nameTd = document.createElement('td')
    const emptySlotsTd = document.createElement('td')
    const freeBikesTd = document.createElement('td')

    const {name, empty_slots, free_bikes} = station

    nameTd.innerHTML = name
    emptySlotsTd.innerHTML = empty_slots
    freeBikesTd.innerHTML = free_bikes

    row.appendChild(nameTd)
    row.appendChild(emptySlotsTd)
    row.appendChild(freeBikesTd)

    tbody.appendChild(row)
  })
}
