import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {AboutComponent} from "./about/about/about.component";
import {TableComponent} from "./table/table/table.component";
import {ChartComponent} from "./chart/chart/chart.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'table', component: TableComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'posts', loadChildren: () => import('./posts/posts/posts.module').then((item) => item.PostsModule)},
  {path: '', pathMatch: "full", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
