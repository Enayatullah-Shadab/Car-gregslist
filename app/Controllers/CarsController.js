import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"


// Step-1: I make my draw function inside that template/proxyState.cars 
// to access the care forEach to get each car and store it into the Template
// then cars by its id(cars) and put it in the template
function _drawCars() {
  let template = ''
  ProxyState.cars.forEach(car => template += car.Template)
  document.getElementById('cars').innerHTML = template

}

//Step-2 creating a proxyState to listen when any change happen in cars by _drawCars update it.
export default class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    carsService.getCars()


  }

  async createCar(e) {
    e.preventDefault();
    let form = e.target
    let data = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value
    }

  }

  deleteCar(carId) {
    arsService.deleteCar(carId)
  }

  bidCar(carId) {
    carsService.bidCar(carId)
  }
}