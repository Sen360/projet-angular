import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  personnes: any = [];

  // personneForm = new FormGroup({
  //   id: new FormControl('', Validators.required),
  //   nom: new FormControl('', [Validators.required, this.checkInputValidator]),
  //   prenom: new FormControl('', [Validators.required, this.checkInputValidator])
  // });

  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, this.checkInputValidator]],
    prenom: ['', [Validators.required, this.checkInputValidator]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }),
    sports: this.fb.array([
      
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  checkInputValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
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

  afficherTout() {
    this.personnes.push({ ...this.personneForm.value });
    console.log(this.personneForm.value);
    this.personneForm.reset();
  }

  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }

  supprimerSport(i: number) {
    this.sports.removeAt(i);
  }

  ajouterSport() {
    this.sports.push(this.fb.control(''));
  }

}
