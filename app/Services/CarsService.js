import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from './AxiosService.js'


class CarsService {

  constructor() {
    this.getAllCars()
  }
  async createCar(rawCar) {


  }

  async getAllCars() {


  }

  async bidCar(carId) {



  }
  async deleteCar(carId) {


  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()