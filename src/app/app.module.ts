import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LinkComponent } from './link/link.component';
import { MadhuComponent } from './madhu/madhu.component';
import { HappyComponent } from './happy/happy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'res', component: RegisterComponent },
  { path: 'ppp', component: LinkComponent },
  { path: 'ppp', component: MadhuComponent },
  { path: 'rrr', component: HappyComponent},
  { path: 'rrr', component: HappyComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LinkComponent,
    MadhuComponent,
    HappyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
