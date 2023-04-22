import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import {PostsModule} from "./posts/posts/posts.module";
import { TableComponent } from './table/table/table.component';
import { ChartComponent } from './chart/chart/chart.component';
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxEchartsModule} from "ngx-echarts";
import {CdkTableModule} from "@angular/cdk/table";
import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TableComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PostsModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
