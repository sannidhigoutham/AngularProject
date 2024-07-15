import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component'
import {ItemlistComponent} from './itemlist/itemlist.component'
import {HomeComponent} from './home/home.component'


export const routes: Routes = [
    {path:"main",component:MainComponent},
    {path:"ItemlistComponent",component:ItemlistComponent},
    {path:"",component:HomeComponent}


];
