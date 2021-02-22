import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

 
  @ViewChild('resetEmployeForm') myNgForm:any;
  employeForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private studentApi: ApiService
  ) { }

  ngOnInit(): void {
    this.submitBookForm();
  }

  submitBookForm() {
    this.employeForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
    })
  }
  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.employeForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitEmployeForm() {
    if (this.employeForm.valid) {
      this.studentApi.AddEmploye(this.employeForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/employe/employes-list'))
      });
    }
  }

}
