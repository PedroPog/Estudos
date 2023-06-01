import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name: string = 'Pedro';
  age:number =12;
  job = 'Dev';
  hobbies = ['Correr','Jogar']; 
  car ={
    name: "Polo",
    year: 2020
  }
}
