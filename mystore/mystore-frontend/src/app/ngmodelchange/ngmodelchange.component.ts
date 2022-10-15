import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodelchange-component',
  templateUrl: './ngmodelchange.component.html',
  styleUrls: ['./ngmodelchange.component.css']
})
export class NgmodelchangeComponent implements OnInit {

iFeel:boolean = false
  iFeelNgModelChange(value: any){
    this.iFeel = value; 
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
