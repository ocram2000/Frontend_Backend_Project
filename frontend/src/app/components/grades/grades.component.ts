import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../services/grades.service'
import { NgForm } from '@angular/forms'
import {} from 'src/app/models/evaluation'
import { Grades } from 'src/app/models/grades';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  constructor(public gradesService : GradesService) { }

  ngOnInit(): void {
    this.getGrades()
  }

  resetForm(form : NgForm){
    form.reset();
  }

  getGrades(){
    this.gradesService.getGrades().subscribe(
      res => {
        this.gradesService.allgrades = res;
      },
      err => console.log(err)
    );
  }

  addGrades(form: NgForm ){
    if(form.value._id){
      this.gradesService.updateGrades(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else{
      this.gradesService.createGrades(form.value).subscribe(
        res => {this.getGrades();
        form.reset();},
        err => console.error(err)
      )
    }
  }


  deleteGrades(id : string){
    if(confirm('Do u want to delete it?')){
      this.gradesService.deleteGrades(id).subscribe(
        res => {
          this.getGrades();
        }, 
        err => console.error(err)
        );
    }
  }


  editGrades(grades : Grades){
    this.gradesService.selectedgrades = grades;
  }


}
