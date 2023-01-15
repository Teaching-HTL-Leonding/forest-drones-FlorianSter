import { Component } from '@angular/core';
import { DroneDataService } from '../drone-data.service';

@Component({
  selector: 'app-sick-trees',
  templateUrl: './sick-trees.component.html',
  styleUrls: ['./sick-trees.component.css']
})
export class SickTreesComponent {

  public x: string = '';
  public y: string = '';


  constructor(public dronesService: DroneDataService){
  }

  public markTrees(){
    const pos = {
      x: parseInt(this.x),
      y: parseInt(this.y)
    };
    this.dronesService.markAsExamined(pos).subscribe();
  }
}
