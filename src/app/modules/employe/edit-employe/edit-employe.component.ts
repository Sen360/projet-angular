import { Router,ActivatedRoute  } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from 'src/app/shared/api.service';
import { Employe } from 'src/app/classes/employe';


@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {


  
  @ViewChild('resetEmployeForm') myNgForm:any;
  
  employeForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private employeApi: ApiService) { 
      
      var id = this.actRoute.snapshot.paramMap.get('id') || '';
    
      this.employeApi.GetEmploye(id).subscribe(data => {
      
      
      this.employeForm = this.fb.group({
        nom: [data.nom, [Validators.required]],
        prenom: [data.prenom, [Validators.required]],
        
      })      
    })    
    }

  ngOnInit(): void {
  }

  updateBookForm() {
    this.employeForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
     
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.employeForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateEmployeForm() {
    console.log(this.employeForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id') || '';
    if (window.confirm('Are you sure you want to update?')) {
      this.employeApi.UpdateEmploye(id, this.employeForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/employe/employes-list'))
      });
    }
  }

}
