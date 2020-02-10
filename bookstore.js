function bookStoreData () {
    
    var url = "https://api.myjson.com/bins/zyv02";
    fetch(url)
    .then(response=>response.json())
    .then(response=>{
        var books = response.books
        main(books)
        //console.log(books)
        
    })
    .catch(err=>console.log(err))

}
bookStoreData()

function main(mainArray) {

    flipCard(mainArray)
    filter()

} 


function flipCard (array) {

    var domDiv = document.getElementById("bookstore")

    array.forEach((element, index) => {
     
    var btn = document.getElementById(index)

    var div = 
        `<div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src=${element.cover} alt="image" style="width:300px;height:400px;">
          </div>
          <div class="flip-card-back">
         
            <button id=${element.detail} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onclick="indexModal(this.id)">
            More Info
            </button>

            <h1>${element.title}</h1>
            <p>${element.description}</p>
            <p>${element.language}</p>
          </div>
        </div>
        </div>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body" align="center">
      <img id="modalpicture" alt="image" style="width:300px;height:300px;">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
       
        
    domDiv.innerHTML += div
    //console.log(domDiv)
    
  

    });

}

function indexModal (index) {

  var x = document.getElementById("exampleModalLong")
  var y = document.getElementById("modalpicture")
  y.src = index
  x.style.display = "block"

}
  

 /* function test2 (array) {

    var domDiv = document.getElementById("demo-div")

    array.forEach(element => {
        var div = document.createElement("div")
        var img = document.createElement("img")
        var header = document.createElement("h1")
        header.innerHTML = element.title
        div.setAttribute("class", "card-div")
        img.src = element.cover
        div.appendChild(header)
        div.appendChild(img)
        console.log(div)
        domDiv.appendChild(div) 
    })
} */



function filter (array) {

  var selectBody = document.getElementsByClassName("flip-card")
  Array.from(selectBody).forEach(element=>{ 

    var search = document.forms["form-search"].querySelector("input").addEventListener("keyup", function(e){
      var result = e.target.value
      
      var book = element.outerText.toLowerCase()

      if (book.indexOf(result) !== -1) {
        
        return element.style.display = "block"
        
      } else {element.style.display = "none"}
    })

  })

} 
