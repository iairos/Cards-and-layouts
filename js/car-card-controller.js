'use strict'
function onInit() {
  renderCarCards()
}
function renderCarCards() {
  const cars = getCars()
  const strHTMLs = cars.map(
    (car) =>
      `
    <article class = "car-card-container">
    <section class = "car-card-header" > 
    <h3>${car.vendor}</h3>
                <h5>By Iairos</h5>
            <img src="img/${car.vendor}.png" />
            </section>
        <p>${car.desc}</p>
        <section class = "car-card-footer"> 
        <h5>${car.price}</h5>
        <button>Buy</button>
        </section>
      </article>
        `
  )
  document.querySelector('.card-container').innerHTML = strHTMLs.join('')
}
