import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DronesComponent } from './drones/drones.component';
import { SickTreesComponent } from './sick-trees/sick-trees.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "drones"},
  {path: "drones", component: DronesComponent},
  {path: "sickTrees", component: SickTreesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
