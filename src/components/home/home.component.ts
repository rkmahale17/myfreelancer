import { Component } from '@angular/core';
import { Freelacers } from './interface/freelacer.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public personSelected :any;
  freelancer : Freelacers[] = [
    {
    name: 'SUMIT SOLANKI',
    skill: 'ANGULAR DEVELOPMENT',
    numberOfProjects: 2,
    eduction: "BE In IT ",
  },
  {
    name: 'PRANAY SINGH',
    skill: 'JAVA DEVELOPMENT',
    numberOfProjects: 10,
    eduction: "BE In CS "
  },
  {
    name: 'R K MAHALE',
    skill: 'VUE DEVELOPMENT',
    numberOfProjects: 19,
    eduction: "BE In IT "
  },
  {
    name: 'Faijal',
    skill: 'VUE DEVELOPMENT',
    numberOfProjects: 19,
    eduction: "BE In IT "
  },
];

showDetails(person: Freelacers){
 this.personSelected = person;
}
}
