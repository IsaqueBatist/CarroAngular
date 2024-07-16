import { Component, EventEmitter, Input, Output } from '@angular/core';
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


  @Input()
  car: ICar = {}

  @Output()
  saveEmiit = new EventEmitter<ICar>()

  save(){
    this.saveEmiit.emit(this.car)
  }
}
