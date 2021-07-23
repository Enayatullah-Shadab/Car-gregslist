import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from './AxiosService.js'


class CarsService {
  //Step-3 utilizing our axios to get its instance 
  async getCars() {

    let res = await api.get("api/cars")// we get all of the cars from api and asign it in res(respond)
    let cars = res.data.data.map(carData => new Car(carData)) //passing our data into the array and mapping and creating a new car for each car and will safe it into the cars array
    // now updating our proxyState 
    ProxyState.cars = cars
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