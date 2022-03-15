import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-ski-level',
  templateUrl: './ski-level.component.html',
  styleUrls: ['./ski-level.component.css']
})
export class  SkiLevelComponent implements OnInit {

  visible : boolean = true ;
  location: any;


  constructor(private shared:SharedService , private router: Router) { 
  
  }  
  ngOnInit(): void {
    


  }
  onChange(x: string){
    this.shared.setSkilevel(x)


  }
  newbie(){
    this.shared.setSkilevel('newbie')
  }
  proguide(){
    this.shared.setSkilevel('pro-guide')
  }
  confirmed(){
    this.shared.setSkilevel('confirmed')
  }
  intermediate(){
    this.shared.setSkilevel('intermediate')
  }

}
