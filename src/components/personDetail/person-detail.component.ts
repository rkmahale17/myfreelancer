import { Component, Input } from '@angular/core';
import { Freelacers } from '../home/interface/freelacer.interface';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent {
  
@Input() person :any;
}