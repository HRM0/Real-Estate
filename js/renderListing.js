function renderListing(itemToList) {
    let listItemCont = document.createElement("li")
    listItemCont.classList.add("listItemCont")

    let streetItem = document.createElement("div")
    streetItem.classList.add("listItem")
    streetItem.textContent = `Street: ${itemToList.street}`

    let stateItem = document.createElement("div")
    stateItem.classList.add("listItem")
    stateItem.textContent = `State: ${itemToList.state}`

    let typeItem = document.createElement("div")
    typeItem.classList.add("listItem")
    typeItem.textContent = `Type: ${itemToList.type}`

    let cityItem = document.createElement("div")
    cityItem.classList.add("listItem")
    cityItem.textContent = `City: ${itemToList.city}`

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("deleteButton")
    deleteButton.textContent = "Delete"

    deleteButton.addEventListener("click",function() {
        listItemCont.remove()
        newListings = newListings.filter(element => element.id !=itemToList.id)
        console.log(newListings)

    } )

    listItemCont.append(typeItem, stateItem, cityItem, streetItem, deleteButton)
    
    return listItemCont
}