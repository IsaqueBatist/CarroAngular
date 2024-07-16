import { Component } from '@angular/core';
import { ICar } from '../../icar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  car:ICar = {
    name: "Isaque",
    montadora: 'aquela',
    price: 1223,
    year: 2000
  }
}
