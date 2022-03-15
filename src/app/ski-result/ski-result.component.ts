import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { info , Product, products ,Prediction } from '../skis';
@Component({
  selector: 'app-ski-result',
  templateUrl: './ski-result.component.html',
  styleUrls: ['./ski-result.component.css']
})
export class SkiResultComponent implements OnInit {
  height : number = 0
  weight : number = 0
  ski_level: string = '';
  terrain: string = '';
  ski_style : string = '';
  riding_speed: string = '';
  rec_height : number = 0 ;
  rec_ski_name : string = '';
   result: Array<Prediction> =[];
   result_filt: Array<Prediction> =[];
   predicted_value :number = 0;
  weight_valid: boolean = false ;
  height_valid: boolean = false ;
  ski_level_valid: boolean = false;
  playground_valid: boolean = false;
  riding_speed_valid: boolean = false;
  size: number = 0;
  data : Array<info> = [];
  options: Object = {
    keys: ['date','height','weight' ]
  };
  constructor(private shared : SharedService) { }   
  ngOnInit(): void {
    
   this.height = this.shared.getHeight()
   this.weight = this.shared.getWeight()
   this.ski_level = this.shared.getSkiLevel()
   this.terrain = this.shared.getTerrainType()
   this.ski_style = this.shared.getSkiStyle()
   this.riding_speed = this.shared.getRiding()
   

   for (var ski of products){

   
     if ((this.height >= ski.min_height && this.height <= ski.max_height)  ){
    this.predicted_value += 120
    this.height_valid = true ;
     }
     else {
      this.predicted_value -= 150
    }
    if (this.weight >= ski.min_weight && this.weight <= ski.max_weight){
      this.predicted_value += 10
      this.weight_valid = true ;
    }
     
 

   
     if( (ski.ski_level.indexOf(this.ski_level) > -1) &&  (ski.playground.indexOf(this.terrain) > -1) && (ski.ski_style.indexOf(this.ski_style) > -1)&& (ski.ski_style.indexOf(this.ski_style) > -1)){
      this.predicted_value += 100
      this.ski_level_valid = true ;
     }
     if (ski.playground.indexOf(this.terrain) > -1){
      this.predicted_value += 10
      this.playground_valid = true;
     }
     if (ski.ski_style.indexOf(this.ski_style) > -1){
      this.predicted_value += 10
      this.ski_level_valid = true;
     }
     if (this.riding_speed == ski.riding_speed){
       if ((this.riding_speed =="slow") && (ski.family="SUPER ROCKER")){
      this.predicted_value += 40
       }
       if ((this.riding_speed =="fast") && (ski.family="NEOTERIC CAMBER")){
        this.predicted_value += 40

         }
         else {
          this.predicted_value += 10
         }
     
     }
     this.result.push({
       prediction : this.predicted_value,
       name : ski.name,
       size : ski.size,
       weight : this.weight,
       weight_valid : this.weight_valid,
       height_valid : this.height_valid,
       ski_level_valid : this.ski_level_valid, 
       playground_valid : this.playground_valid,
       ski_style_valid : this.ski_level_valid,
       riding_speed_valid : this.riding_speed_valid,
       src : ski.src
     })
     this.predicted_value = 0;
     this.height_valid = false;



   }

   this.result.sort(function(a ,b){ 
    return b.prediction - a.prediction 
  })
  this.result_filt = this.result.filter(x =>x.height_valid == true)

  /*var db = firebase.firestore();
  db.collection('data').add({
   date :  new Date().toISOString().slice(0, 10),
   height : this.height,
   weight : this.weight ,
   ski_level : this.ski_level,
   terrain : this.terrain,
   ski_style : this.ski_style,
   rec_ski_1 : this.result[0].name,
   rec_ski_2 : this.result[1].name,
   rec_ski_3 : this.result[2].name,


  })  .then((docRef: { id: any; }) =>{
    console.log("document written with ID ",docRef.id)

  })
  .catch(function(error: any){
    console.log("problem ",error)
  })
 */

  this.data.push ({
    date :  new Date().toISOString().slice(0, 10),
   height : this.height,
   weight : this.weight ,
   ski_level : this.ski_level,
   terrain : this.terrain,
   ski_style : this.ski_style,
   rec_ski_1 : this.result[0].name,
   rec_ski_2 : this.result[1].name,
   rec_ski_3 : this.result[2].name,
  })

 
  }




}
