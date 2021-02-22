import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-tp-form',
  templateUrl: './tp-form.component.html',
  styleUrls: ['./tp-form.component.css']
})
export class TpFormComponent implements OnInit {

  personnes: any = [];

  displayedColumns: string[] = ['Id', 'Nom', 'Prénom', 'Commentaires'];
  dataSource = this.personnes;
 
  personneForm = this.fb.group({
    id: [null, Validators.required],
    nom: ['', [Validators.required, this.checkValidator]],
    prenom: ['', [Validators.required, this.checkValidator]],
    commentaires: this.fb.array([ ])
  });

  constructor(private fb: FormBuilder) {

  }

  createCommentaire() : FormGroup {
    return this.fb.group({
      titre: ['', ],
      contenu: ['', ],
      categorie: ['', ],
    })
  }

  get commentaires() {
    return this.personneForm.get('commentaires') as FormArray;
  }

  ajouterCommentaire() {
    this.commentaires.push(this.createCommentaire());
  }

  supprimerCommentaire(i: number) {
    this.commentaires.removeAt(i);
  }

  checkValidator(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z].*$/
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  get nom() {
    return this.personneForm.get('nom');
  }
  get id() {
    return this.personneForm.get('id');
  }
  get prenom() {
    return this.personneForm.get('prenom');
  }

  ngOnInit(): void {

  }

  afficherTout() {
    this.personnes.push({ ...this.personneForm.value }); 
    this.personneForm.reset();
    this.commentaires.clear(); 
  }

}
