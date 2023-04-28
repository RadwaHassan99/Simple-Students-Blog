import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { TableComponent } from './components/table/table.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule,Routes  } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


let routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"students", component:TableComponent},
  {path:"students/:id", component:DetailsComponent},
  {path:"register", component:RegisterComponent},
  {path:"**", component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    DetailsComponent,
    TableComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
