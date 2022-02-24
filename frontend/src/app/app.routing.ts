import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ClassesComponent } from './components/classes/classes.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component'
import { GradesComponent } from './components/grades/grades.component'



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'evaluation', component: EvaluationComponent },
    { path: 'grades', component : GradesComponent},
    


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);