import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPAgeComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPAgeComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPAgeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
