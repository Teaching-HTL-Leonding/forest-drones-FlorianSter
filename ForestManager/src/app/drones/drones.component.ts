import { Component, OnInit } from '@angular/core';
import { DroneData, DroneDataService, DronePos } from '../drone-data.service';


@Component({
  selector: 'app-drones',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.css']
})
export class DronesComponent implements OnInit {
  public drones?: DroneData[];

  public damagedTrees: DronePos[] = [];


  public x: string = '';
  public y: string = '';
  public id: string = '';

  public nearestDamagedTree?: DronePos;

  constructor(public dronesService: DroneDataService){
  }

  ngOnInit(): void {
    this.dronesService.getDronesData().subscribe(x => {
        this.drones = x;
    })
  }

  public activate(id: number){
    this.dronesService.activateDrone(id).subscribe(x => {
      this.ngOnInit();
    });
  }

  public deaktivate(id: number){
    this.dronesService.shutdownDrone(id).subscribe(x => {
      this.ngOnInit();
    });
  }

  public scan(){
    const pos = {
      x: parseInt(this.x),
      y: parseInt(this.y)
    };
    this.dronesService.flyTo(parseInt(this.id), pos).subscribe(x => {
      this.dronesService.scanTrees(parseInt(this.id)).subscribe(y => {
        this.damagedTrees = y.damagedTrees;
        this.nearestDamagedTree=this.getSmallestDistance(pos);

      });
    });
  }

  getSmallestDistance(pos: DronePos): DronePos{
    let result = this.damagedTrees[0];
    let smallestDistance = this.computeDistance(pos, this.damagedTrees[0]);
    for (let index = 0; index < this.damagedTrees.length; index++) {
      let distance = this.computeDistance(pos, this.damagedTrees[index]);
      if(distance < smallestDistance){
        smallestDistance = distance;
        result = this.damagedTrees[index];
      }
    }
    return result;
  }
  computeDistance(pos1: DronePos, pos2: DronePos): number {
    return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
  }



}
