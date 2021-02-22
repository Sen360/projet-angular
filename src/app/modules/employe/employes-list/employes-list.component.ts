import { Component, ViewChild, OnInit } from '@angular/core';
import { Employe } from 'src/app/classes/employe';
import { ApiService } from 'src/app/shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

  EmployeData: any = [];
  dataSource!: MatTableDataSource<Employe>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['_id', 'nom', 'prenom', 'action'];

  constructor(private employeApi: ApiService) {
    this.employeApi.GetEmployes().subscribe(res => {
      this.EmployeData = res;
      console.log(this.EmployeData);
      this.dataSource = new MatTableDataSource<Employe>(this.EmployeData.result);
      console.log(this.dataSource);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
   }

  ngOnInit(): void {
    
  }

  deleteEmploye(index: number, e:any){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.employeApi.DeleteEmploye(e._id).subscribe()
    }
  }

}
