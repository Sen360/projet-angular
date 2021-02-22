import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personnes-list',
  templateUrl: './personnes-list.component.html',
  styleUrls: ['./personnes-list.component.css']
})
export class PersonnesListComponent implements OnInit {

  personne: Personne = {};
  personnes: Array<Personne> = new Array<Personne>();

  constructor(private personneService: PersonneService, private router: Router) { }

  updatePerson(id: number){
  
    this.router.navigate(['personne/update', id]);
    
  }

  personDetails(id: number){
  
    this.router.navigate(['personne/details', id]);
    
  }

  ngOnInit(): void {
    // this.personnes = this.personneService.getAll();
    this.reloadData();
  }

  // Pour recuperer la liste des personnes dans personne.component.ts, il faut s’abonner
  reloadData() {
    this.personneService.getAllPersons().subscribe(res => {
      this.personnes = res;
    })
  }

  savePerson() {
    this.personneService.addP(this.personne).subscribe(res => {
      console.log(res);
      this.reloadData();
    })
  }

  deletePerson(id: number) {

    if (typeof(id) === 'number') {
      this.personneService.deleteP(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      })
    }
    
  }
}
