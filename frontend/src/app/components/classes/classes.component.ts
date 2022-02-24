import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../services/classes.service'
import { NgForm } from '@angular/forms'
import { Allclasses } from 'src/app/models/classes';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(public classesService : ClassesService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  resetForm(form : NgForm){
    form.reset();
  }


  getClasses(){
    this.classesService.getClasses().subscribe(
      res => {
        this.classesService.allclasses = res;
      },
      err => console.log(err)
    );
  }

  addClasses(form: NgForm ){
    if(form.value._id){
      this.classesService.updateClasses(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else{
      this.classesService.createClasses(form.value).subscribe(
        res => {this.getClasses();
        form.reset();},
        err => console.error(err)
      )
    }
  }


  deleteClasses(id : string){
    if(confirm('Do u want to delete it?')){
      this.classesService.deleteClasses(id).subscribe(
        res => {
          this.getClasses();
        }, 
        err => console.error(err)
        );
    }
  }


  editClasses(classes : Allclasses){
    this.classesService.selectedclass = classes;
  }

}
