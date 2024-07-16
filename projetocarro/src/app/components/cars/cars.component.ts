import { Component } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { ICar } from '../../icar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarComponent,
    CommonModule
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car: ICar = {}
  idCount: number = 6
  isEdited: boolean = false
  cars: ICar[] = [
    {
      id: 1,
      name: "Toyota Corolla",
      montadora: 'Toyota',
      price: 140.000,
      year:  2024
    },
    {
      id: 2,
      name: "Honda Civic",
      montadora: 'Honda',
      price: 160.000,
      year:  2024
    },
    {
      id: 3,
      name: "Ford Mustang",
      montadora: 'Ford',
      price: 300.000,
      year: 2024
    },
    {
      id: 4,
      name: "Chevrolet Onix",
      montadora: 'Chevrolet',
      price: 80.000,
      year: 2024
    },
    {
      id: 5,
      name: "Volkswagen Golf",
      montadora: 'Volkswagen',
      price: 180.000,
      year: 2024
    }
  ]

  saveCar(){
    if(!this.isEdited){
      this.car.id = this.idCount
      this.cars.push(this.car)
      this.idCount++
    }
    this.car = {}
    this.isEdited = false
  }

  editbutton(car:ICar){
    this.car = car
    this.isEdited = true
  }
  deletebutton(cartoRemove:ICar){
    this.cars = this.cars.filter((car) => car.id !== cartoRemove.id)
  }
}
