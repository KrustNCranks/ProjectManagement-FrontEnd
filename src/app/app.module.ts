import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from "./authentication.service";
import { AuthGuardService } from "./auth-guard.service";
import { SignupSucessfulComponent } from './signup-sucessful/signup-sucessful.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResourcesComponent } from './resources/resources.component';
import { TasksComponent } from './tasks/tasks.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { AllresourcesComponent } from './allresources/allresources.component';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { AdderesourceComponent } from './adderesource/adderesource.component';
import { AddtaskComponent } from './addtask/addtask.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
    { path: 'signupsuccess', component: SignupComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'allprojects', component: AllprojectsComponent},
    { path: 'allresources', component: AllresourcesComponent},
    { path: 'alltasks', component: AlltasksComponent},
    { path: 'addproject', component: AddprojectComponent},
    { path: 'addresource', component: AdderesourceComponent},
    { path: 'addtask', component: AddtaskComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    SignupSucessfulComponent,
    ProjectsComponent,
    ResourcesComponent,
    TasksComponent,
    WelcomeComponent,
    AllprojectsComponent,
    AllresourcesComponent,
    AlltasksComponent,
    AddprojectComponent,
    AdderesourceComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
      AuthenticationService,
      AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
