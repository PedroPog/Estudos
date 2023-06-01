import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {
@Input() name: string =''; // para inciar o dado ou com ='' ou !:
@Input() userData!: {email: string, funcao: string}
}
