import { Component, OnInit } from '@angular/core';
import { Personne } from '../../../interfaces/personne';
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  personnes: Array<Personne> = [];
  personne: Personne = {}

  nom = "";

  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne() {
    this.personnes.push({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    console.log(this.personnes);
  }

  supprimerPersonne(personne: Personne) {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }

  person: any = {
    nom: 'john', 
    prenom: 'pat'
  }

}
