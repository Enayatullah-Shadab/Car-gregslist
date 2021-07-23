import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {

}

export default class CarsController {
  constructor() {
    ProxyState.on('cars',)


  }

  async createCar() {

  }

  deleteCar(carId) {
    arsService.deleteCar(carId)
  }

  bidCar(carId) {
    carsService.bidCar(carId)
  }
}