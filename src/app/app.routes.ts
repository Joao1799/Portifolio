import { Routes } from '@angular/router';
import { AboutComponent } from './main/body/about/about.component';
import { ContactComponent } from './main/body/contact/contact.component';
import { SkillsComponent } from './main/body/skills/skills.component';
import { WorkComponent } from './main/body/work/work.component';



export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' }, 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work', component: WorkComponent },
];

