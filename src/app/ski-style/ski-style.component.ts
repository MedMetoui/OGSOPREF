import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-ski-style',
  templateUrl: './ski-style.component.html',
  styleUrls: ['./ski-style.component.css']
})
export class SkiStyleComponent implements OnInit {

  visible : boolean = true ;
  location: any;


  constructor(private fb : FormBuilder ,private shared:SharedService , private router: Router) { 
  
  }  
  ngOnInit(): void {
    


  }
  onChange(x: string){
 




  }
  piste(){
    this.shared.setSkiStyle('piste')
  }
  powder(){
    this.shared.setSkiStyle('powder')
  }
  couloire(){
    this.shared.setSkiStyle('couloire')
  }
  freeride(){
    this.shared.setSkiStyle('freeride')
  }
}
