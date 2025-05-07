var popupbox=document.querySelector(".popupBox")
var popupoverlay=document.querySelector(".popupOverlay")
var addpopup=document.getElementById("addPopup")

addpopup.addEventListener("click",function(){
        popupbox.style.display="block"
        popupoverlay.style.display="block"

    })

//selecting cancelPopup
var cancelpopup=document.getElementById("cancelPopup")
 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
 })  
 //selecting box
 var box=document.querySelector(".box") 
 var addbook=document.getElementById("addBook")
 var booktitleinput=document.getElementById("bookTitleInput")
 var bookauthorinput=document.getElementById("bookAuthorInput")
 var bookdescriptioninput=document.getElementById("bookDescriptionInput")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-in")
    div.innerHTML=`<h3>${booktitleinput.value}</h3>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deleted(event)">Remove</button>`
    box.append(div)


 })
//select addbuton and overlay
addbook.addEventListener("click",function(){
    popupoverlay.style.display="none"
    popupbox.style.display="none"
}) 
function deleted(event){
    event.target.parentElement.remove()
}

