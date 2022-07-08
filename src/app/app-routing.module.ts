import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { DummyAPIComponent } from './dummy-api/dummy-api.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [{path: 'home', component: HomeComponent},

{path: 'dummy-api', component:DummyAPIComponent },
{path: 'reactive-form', component:ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
