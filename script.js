const filmRow = document.querySelector(".filmRow");
const inp = document.querySelector(".form-control");
const btnforSearch = document.querySelector(".btnforSearch")

const url = "https://fake-coffee-api.vercel.app/api"
fetch(url)
    .then(res=> res.json())
    .then(datas => {
        console.log(datas)
        for(let i = 0; i < datas.length; i++) {
            filmRow.innerHTML += `
            <div class="col-sm-12 col-md-4 col-lg-4 card mt-5 ">
                    <img src="${datas[i].image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${datas[i].name}</h5>
                      <p class="card-text">${datas[i].description}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            `
        }
    })  
    
btnforSearch.addEventListener("click", function() {
  const searchTerm = inp.value.toLowerCase().trim()

  fetch(url)
  .then(res=> res.json())
  .then(datas => {

    filmRow.innerHTML = ''

    datas.forEach(data => {
      if(data.name.toLowerCase().includes(searchTerm)) {
        filmRow.innerHTML += `
        <div class="col-sm-12 col-md-4 col-lg-4 card mt-5 ">
                <img src="${data.image_url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">${data.description}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        `
      }
    });
   })  
})



