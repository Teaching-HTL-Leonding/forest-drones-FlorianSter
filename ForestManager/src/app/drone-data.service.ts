import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface DronePos {
  x: number;
  y: number;
}

export interface Scan{
  damagedTrees: DronePos[];
}

export interface DroneData {
  id: number;
  isActive: boolean;
  //position: DronePos;
}



@Injectable({
  providedIn: 'root'
})
export class DroneDataService {

  constructor(private http: HttpClient,
     @Inject('DRONE_API') private url: string,
     @Inject('DRONE_API_FOR_TREE') private urlTree: string) { }

  public getDronesData(): Observable<DroneData[]>{
    return this.http.get<DroneData[]>(this.url);
  }

  public activateDrone(id: number):Observable<any>{
    return this.http.post(`${this.url}/${id}/activate`, null);
  }

  public shutdownDrone(id: number): Observable<any>{
    return this.http.post(`${this.url}/${id}/shutdown`, null)
  }

  public flyTo(id: number, xy: DronePos): Observable<any>{
    return this.http.post(`${this.url}/${id}/flyTo`, xy);
  }

  public scanTrees(id: Number): Observable<Scan>{
    return this.http.get<Scan>(`${this.url}/${id}/scan`);
  }

  public markAsExamined(xy: DronePos): Observable<any>{
    return this.http.post(`${this.urlTree}/markAsExamined`, xy);
  }

}
