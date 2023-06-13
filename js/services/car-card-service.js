'use strict'
const vendors = ['audu-mea', 'fiak-ibasa', 'mitsu-bashi', 'subali-pesha']
let gCars = _createCars()
function getCars() {
  return gCars
}
function _createCar() {
  return {
    id: makeId(),
    vendor: vendors[getRandomIntInclusive(0, vendors.length - 1)],
    price: `$ ${getRandomIntInclusive(15000, 20000).toLocaleString()}`,
    desc: makeLorem(),
  }
}

function _createCars() {
  const cars = []
  for (let i = 0; i < 10; i++) {
    cars.push(_createCar())
  }
  return cars
}
