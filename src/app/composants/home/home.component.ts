import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular-front-end';
  
  nom= 'Doe';

  couleur = 'blue';

  libelleFormation = 'POEC FRONT';
  
  personne: Personne = new Personne(100, 'Wick', 'John');

  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(101, 'Doe', 'John'),
    new Personne(102, 'Musk', 'Elon'),
    new Personne(103, 'Pot', 'Pat')
  ];
  
  tab:number[] = [3, 2, 6, 5, 11, 14, 18, 13];

  direBonjour(){
    return 'Bonjour Angular';
  }

  getColor(){
    return 'white';
  }

  getBackgroundColor(){
    return 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
