import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {
  visible : boolean = true ;
  height : string  = '';
   myForm: FormGroup;
   tr = false;
  
  
    constructor(private fb : FormBuilder, private shared :SharedService) { 
      this.myForm = this.fb.group({
        weight : '85'
      });
      
    }
  
    ngOnInit(): void {
    
  
      this.myForm.valueChanges.subscribe(() =>{
        this.visible = false ;
     
          let jsonF = JSON.stringify(this.myForm.value);
          var obj = JSON.parse(jsonF);
          this.shared.setWeight(obj.weight)
        })
       
    }
    bow(){
      this.tr = true;
    }
   
  

   
  
  
}
function bow() {
  throw new Error('Function not implemented.');
}

