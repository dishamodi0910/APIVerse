import { Component } from '@angular/core';

import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-datadisplay',
  templateUrl: './datadisplay.component.html',
  providers: [DatafetchService],
  styleUrls: ['./datadisplay.component.css']
})
export class DatadisplayComponent {

  data :any;

  constructor(a : DatafetchService)
  {
    a.getData().subscribe((res)=>this.data=res);
    
  }
}
