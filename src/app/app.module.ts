import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyTaskComponentComponent } from './my-task-component/my-task-component.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PatientTaskComponent } from './patient-task/patient-task.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    NavbarComponent,
    MyTaskComponentComponent,
    PatientTaskComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    NgxPaginationModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
