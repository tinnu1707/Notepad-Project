import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
    
      {path: 'login',component: LoginPageComponent},
      {path: 'signup',component:SignupPageComponent},
      {
        path: '', component: NotesListComponent
      },
      {
        path: 'new', component: NoteDetailsComponent
      },
      {
        path: ':id', component: NoteDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
