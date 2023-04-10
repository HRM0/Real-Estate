function renderListing(itemToList) {
    let listItemCont = document.createElement("li")
    listItemCont.classList.add("listItemCont")

    let nonCommentItems = document.createElement("div")
    nonCommentItems.classList.add("nonCommentItems")

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

    let commentButton = document.createElement("button")
    commentButton.classList.add("commentButton")
    commentButton.textContent = "Show Comments"

    commentButton.addEventListener("click",function() {
        
        if (commentButton.textContent === "Show Comments"){
            listItemCont.append(commentsection)
            commentButton.textContent = "Hide Comments"
        } else {
            commentsection.remove()
            commentButton.textContent = "Show Comments"
        }

    } )

    let commentsection = document.createElement("ul")
    commentsection.classList.add("commentsection")

    let inputComment = document.createElement("input")
    inputComment.classList.add("inputComment")
    inputComment.type ="text"
    inputComment.value = "type your comment here!"

    let inputCommentButton = document.createElement("input")
    inputCommentButton.classList.add("inputCommentButton")
    inputCommentButton.type ="submit"
    inputCommentButton.value = "Submit"

    inputCommentButton.addEventListener("click",function() {
        if(inputComment.value.length < 280) {
            itemToList.comments.push(inputComment.value)
            
            let commentItem = document.createElement("li")
            commentItem.classList.add("commentItem")
            commentItem.textContent = inputComment.value

            commentItemCont.append(commentItem)
        }
    } )

    let commentItemCont = document.createElement("ul")
    commentItemCont.classList.add("commentItemCont")

    commentsection.append(inputComment,inputCommentButton, commentItemCont)
    nonCommentItems.append(typeItem, stateItem, cityItem, streetItem, commentButton, deleteButton)
    listItemCont.append(nonCommentItems)
    
    return listItemCont
}