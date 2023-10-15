import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  private fetch_object :HttpClient;
  url : string = "http://localhost:3000/Person";

  constructor(a:HttpClient) {
    this.fetch_object=a;
  }

  getData()
  {
    return this.fetch_object.get(this.url);
  }
}
