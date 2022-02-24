import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service'
import { NgForm } from '@angular/forms'
import { Evaluation } from 'src/app/models/evaluation'

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor(public evaluationService : EvaluationService) { }

  ngOnInit(): void {
    this.getEvaluations();
  }

  resetForm(form : NgForm){
    form.reset();
  }

  
  getEvaluations(){
    this.evaluationService.getEvaluations().subscribe(
      res => {
        this.evaluationService.allevaluation = res;
      },
      err => console.log(err)
    );
  }

  addEvaluation(form: NgForm ){
    if(form.value._id){
      this.evaluationService.updateEvaluation(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else{
      this.evaluationService.createEvaluation(form.value).subscribe(
        res => {this.getEvaluations();
        form.reset();},
        err => console.error(err)
      )
    }
  }


  deleteEvaluation(id : string){
    if(confirm('Do u want to delete it?')){
      this.evaluationService.deleteEvaluation(id).subscribe(
        res => {
          this.getEvaluations();
        }, 
        err => console.error(err)
        );
    }
  }


  editEvaluation(evaluation : Evaluation){
    this.evaluationService.selectedevaluation = evaluation;
  }

}
