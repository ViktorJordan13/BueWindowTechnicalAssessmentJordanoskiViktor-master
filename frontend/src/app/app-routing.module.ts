import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BrandListComponent } from './components/brand-list/brand-list.component';
import { SortComponent } from './components/sort/sort.component'

const routes: Routes = [
    { path: "", component: BrandListComponent },
    { path: "sort", component: SortComponent},
    { path: "**", redirectTo: "" }
    
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}