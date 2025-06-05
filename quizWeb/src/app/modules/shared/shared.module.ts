import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterOutlet,RouterLink,DemoNgZorroAntdModule,HttpClientModule
  ],
  exports:[
    CommonModule,FormsModule,ReactiveFormsModule,RouterOutlet,RouterLink,DemoNgZorroAntdModule,HttpClientModule
  ]
})
export class SharedModule { }
