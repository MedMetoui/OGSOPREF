import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-terrain-type',
  templateUrl: './terrain-type.component.html',
  styleUrls: ['./terrain-type.component.css']
})
export class TerrainTypeComponent implements OnInit {
  myForm: any;

  constructor(private shared:SharedService , private router: Router) { 
  }

  ngOnInit(): void {
  }
  onChange(x: string){
    
  }
tfm(){
  this.shared.setTerrainType('touring-front-mountain')
}
tbm(){
  this.shared.setTerrainType('touring-back-mountain')
}
tm(){
  this.shared.setTerrainType('touring-mountaineering')
}
tr(){
  this.shared.setTerrainType('touring-race')
}

}
