import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DronesComponent } from './drones/drones.component';
import { SickTreesComponent } from './sick-trees/sick-trees.component';

@NgModule({
  declarations: [
    AppComponent,
    DronesComponent,
    SickTreesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'DRONE_API',
      useValue: 'http://localhost:5110/drones'
    },
    {
      provide: 'DRONE_API_FOR_TREE',
      useValue: 'http://localhost:5110/trees'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
