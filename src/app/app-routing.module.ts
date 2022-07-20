import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { DummyAPIComponent } from './dummy-api/dummy-api.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TeplateFormComponent } from './teplate-form/teplate-form.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
const routes: Routes = [{path: 'home', component: HomeComponent},

{path: 'dummy-api', component:DummyAPIComponent },
{path: 'reactive-form', component:ReactiveFormComponent },
{path:'teplate-form', component:TeplateFormComponent},
{path:'home', component:HomeComponent},
{path:'', component:HomeComponent},
{path:'home/:id', component:DepartmentDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
