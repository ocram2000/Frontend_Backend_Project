import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Evaluation} from '../models/evaluation'

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  URL_API = 'http://localhost:3000/api/evaluation';

  selectedevaluation : Evaluation | any = {
    teste1 : '',
    perct1 : "",
    teste2 : '',
    perct2 : "",
    tp1 : '',
    perctp1 : "",
    tp2 : '',
    perctp2 : "",
    classe : "",
    course : ""
  }
  allevaluation: Evaluation[] | any;



  constructor(private http: HttpClient) { }

  getEvaluations(){

    return this.http.get<Evaluation[]>(this.URL_API);

  }

  createEvaluation(evaluation : Evaluation){
    return this.http.post(this.URL_API, evaluation);
  }

  updateEvaluation(evaluation : Evaluation){
    return this.http.put(`${this.URL_API}/${evaluation._id}`, evaluation);
  }

  deleteEvaluation(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
