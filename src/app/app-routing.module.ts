import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent} from './content/content.component'
import {Content2Component} from  './content2/content2.component'
import { SkiResultComponent } from './ski-result/ski-result.component';
import { SkiLevelComponent } from './ski-level/ski-level.component';
import { TerrainTypeComponent } from './terrain-type/terrain-type.component';
import { SkiStyleComponent } from './ski-style/ski-style.component';
import { RidingSpeedComponent } from './riding-speed/riding-speed.component';
const routes: Routes = [
{ path: 'step1',   component:ContentComponent    },
{ path: 'step2',    component:Content2Component  },
{ path: 'terrain',   component:TerrainTypeComponent  },
{ path: 'riding',   component:RidingSpeedComponent   },
{ path: 'style',   component:SkiStyleComponent   },
 { path: 'SkiLevel', component:SkiLevelComponent  },
 { path: 'result',   component:SkiResultComponent },
 { path: '',         component:ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }