import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { MyTaskComponentComponent } from './my-task-component/my-task-component.component';
import { PatientTaskComponent } from './patient-task/patient-task.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {
    path: " ",
    component: SideNavbarComponent
  },
  {
    path: "mytasks",
    component: MyTaskComponentComponent
  },
  {
    path: "patienttasks",
    component: PatientTaskComponent
  },
  {
    path : "error",
    component : ErrorComponent
    
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
