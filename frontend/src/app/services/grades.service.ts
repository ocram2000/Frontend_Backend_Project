import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Grades } from '../models/grades'

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  URL_API = 'http://localhost:3000/api/grades';

  selectedgrades: Grades | any = {
    studentnumber: "",
    student: "",
    classe: "",
    course: "",
    teste1: '',
    teste2: '',
    tp1: '',
    tp2: '',
    grade: ""
  }
  allgrades: Grades[] | any;

  constructor(private http: HttpClient) { }

  getGrades() {

    return this.http.get<Grades[]>(this.URL_API);

  }

  createGrades(grades: Grades) {
    return this.http.post(this.URL_API, grades);
  }

  updateGrades(grades: Grades) {
    return this.http.put(`${this.URL_API}/${grades._id}`, grades);
  }

  deleteGrades(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
