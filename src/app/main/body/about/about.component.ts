import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FieldsetModule,CardModule,SelectButtonModule,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  text: string | undefined;

  selectedLanguage: string = 'br';
  txtOptions = [
    { label: 'PT-BR', value: 'br' },
    { label: 'EN-US', value: 'en' }
  ];
  header: string | undefined;
  palavras = ["Web Developer", "Frontend Designer", "Creative Coder"];
  index = 0;

  
  constructor() {}
  
  ngOnInit(){
    this.translateTXT({ value: this.selectedLanguage });
  }
  
  translateTXT(event: any) {

    const optionSelect = event.value; 
    
    if (optionSelect === 'en') {
      this.text = `Software Engineer r<br><br>
      Proactive and focused on innovative solutions, with experience in JavaScript, 
      TypeScript, Angular, Node, and Java. Strong foundation in Scrum, Kanban, and structured planning. 
      Fluent in English. Always seeking growth and new challenges.<br> 
      Let’s build something amazing together! 🚀`;
      this.header = 'About Me'
    
      } else {
      this.text = `Engenheiro de Software <br><br>
      Proativo e focado em soluções inovadoras, com experiência em JavaScript, 
      TypeScript, Angular, Node e Java. Forte base em Scrum, Kanban e planejamento estruturado.
      Fluente em inglês. Sempre em busca de evolução e desafios.<br> 
      Vamos construir algo incrível juntos? 🚀`;
      
      this.header = 'Sobre mim'
      }
  }
}
