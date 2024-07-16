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
  cars: ICar[] = [
    {
      id: 1,
      name: "Isaque",
      montadora: 'aquela',
      price: 1223,
      year: 2000
    },
    {
      id: 2,
      name: "Barbosa",
      montadora: 'aquelu',
      price: 14123,
      year: 200044
    },
    {
      id: 3,
      name: "Batista",
      montadora: 'aquel',
      price: 1223,
      year: 2000
    }
  ]
}
