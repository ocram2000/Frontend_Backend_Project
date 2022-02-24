import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { FlatfileAdapterModule } from '@flatfile/angular'

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HomeComponent } from './components/home/home.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { GradesComponent } from './components/grades/grades.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    HomeComponent,
    EvaluationComponent,
    GradesComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    FlatfileAdapterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
