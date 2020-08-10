import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [FirstComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FirstComponentComponent  
  ]
})
export class FirstModuleModule { }
