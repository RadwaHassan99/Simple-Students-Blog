import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { TableComponent } from './components/table/table.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule,Routes  } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';


let routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"students", component:TableComponent},
  {path:"students/register", component:RegisterComponent},
  {path:'students/:id/edit', component:EditComponent},
  {path:"students/:id", component:DetailsComponent},
  {path:"**", component:ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
