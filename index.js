const xmlhttp = new XMLHttpRequest()
const url = './tyontekijat.json'

xmlhttp.onreadystatechange = () => {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    tableBuilder(JSON.parse(xmlhttp.responseText))
  }
}

xmlhttp.open('GET', url, true)
xmlhttp.send()

const tableBuilder = workers => {
  const tbody = document.getElementById('duunarit')

  workers.forEach(worker => {
    const row = document.createElement('tr')
    const firstNameTd = document.createElement('td')
    const lastNameTd = document.createElement('td')
    const addressTd = document.createElement('td')
    const workPhoneNumberTd = document.createElement('td')
    const homePhoneNumberTd = document.createElement('td')

    const {firstName, lastName, address, workPhoneNumber, homePhoneNumber} = worker

    firstNameTd.innerHTML = firstName
    lastNameTd.innerHTML = lastName
    addressTd.innerHTML = address ? address : '-'
    workPhoneNumberTd.innerHTML = workPhoneNumber ? workPhoneNumber : '-'
    homePhoneNumberTd.innerHTML = homePhoneNumber ? homePhoneNumber : '-'

    row.appendChild(firstNameTd)
    row.appendChild(lastNameTd)
    row.appendChild(addressTd)
    row.appendChild(workPhoneNumberTd)
    row.appendChild(homePhoneNumberTd)

    tbody.appendChild(row)
  })
}
