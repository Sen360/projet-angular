import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: any;
  prenom: any;

  // Fonction JavaScript qui sert à initialiser les attributs de la classe
  // Constructor avec Angular sert seulement à faire des injections de dépendances
  constructor(private route : ActivatedRoute) { }

  // Méthode qui sera executée quand Angular aura fini d'initialiser le composant
  ngOnInit(): void {

  // 2 formes de paramètres de requètes

  // /chemin/nom/prenom
  // /chemin?nom=Wick&prenom=John

  // 2 manières diffèrentes de recupérer les valeurs respectives

  // paramMap pour /chemin/nom/prenom

  // queryParamMap pour /chemin?nom=Wick&prenom=John

    // http://localhost:4200/stagiaire/jean/baton

    // Récupèrer les paramètres par l'intermediaire d'un objet params
    // Solution avec les snapshot(instantané)

    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
    // console.log(this.nom + ' ' + this.prenom);

    // Récupèrer les paramètres par l'intermediaire d'un objet paramMap
    // Solution avec les observables(asynchrone)

    // Concept Observables(progragrammation reactive): Les observables emettent des 
    // événements qui seront interceptés par des observateurs

    // Suscribe prend en paramètre l'observateur, qui est une simple fonction 
    // qui recevra les valeurs emises par l'observable

    // this.route.paramMap.subscribe(res =>{
    //   this.nom = res.get('nom');
    //   this.prenom = res.get('prenom');
    //   console.log(this.nom + ' ' + this.prenom);
    // });

    // http://localhost:4200/stagiaire?nom=Wick&prenom=John

    // this.nom = this.route.snapshot.queryParams.nom;
    // this.prenom = this.route.snapshot.queryParams.prenom;
    // console.log(this.nom + ' ' + this.prenom);

    // this.route.queryParamMap.subscribe(res =>{
    //   this.nom = res.get('nom');
    //   this.prenom = res.get('prenom');
    //   console.log(this.nom + ' ' + this.prenom);
    // });
  }

}
