let submitButton = document.querySelector(".inputSubmit")
let listContainer = document.querySelector(".listings")
let newListings = []


submitButton.addEventListener("click", function() {
    let street = document.querySelector(".street").value
    let propType = document.querySelector(".type").value
    let city = document.querySelector(".city").value
    let state = document.querySelector(".state").value

    newListings.push({id:newListings.length,street: street, type: propType, city: city, state: state, comments:[]})
    clearListings()
    renderAllListings(newListings)
})

function clearListings() {

    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild)
    }

}

function renderAllListings(listings) {
    listings.map(element => listContainer.append(renderListing(element)))
}

