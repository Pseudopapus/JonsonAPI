console.log("inicio")
let box = document.querySelector('.helloBox')
fetch('./src/data/data.json')
.then(response=> {return response.json()})
.then(data=>{
  data.hello.forEach(e=>{
    box.innerHTML +=`
    <article class="lang">
      <div class="name">
        <h2 class="center">${e.name}</h2>
        <h4 class="center">.${e.ext}</h4>
      </div>
      <div class="code">
        ${e.code}
      </div>
    </article>`
  })
})