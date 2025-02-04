import { Component,Input, SimpleChanges } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillsComponent } from "./skills/skills.component";
import { WorkComponent } from "./work/work.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [AboutComponent, ContactComponent, SkillsComponent, WorkComponent,CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  standalone: true
})
export class BodyComponent {
  @Input() menu: string = '';
  about:  boolean = false;
  contact:  boolean = false;
  skills:  boolean = false;
  work: boolean = false;


  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['menu']) {
      this.abaSelecionada();
    }
  }

  abaSelecionada() {
    this.about = this.contact = this.skills = this.work = false;
    
    switch(this.menu){
      case "About":
        this.about = true;
        break
      case "Contact":
        this.contact = true;
        break
      case "Skills":
        this.skills = true;
        break
      case "Work":
        this.work = true;
        break
    }
    console.log("Estado atualizado:", {
      about: this.about,
      contact: this.contact,
      skills: this.skills,
      work: this.work
    });
  }
}
