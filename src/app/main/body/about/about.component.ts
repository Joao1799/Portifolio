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
  textoAtual = this.palavras[this.index];
  
  constructor() {}
  
  ngOnInit(){
    this.translateTXT({ value: this.selectedLanguage });
    this.iniciarEfeitoDigitacao();
  }

  iniciarEfeitoDigitacao() {
    setInterval(() => {
      setTimeout(() => {
        setTimeout(() => {
          this.index = (this.index + 1) % this.palavras.length; 
          this.textoAtual = this.palavras[this.index];
        }, 3000); // Tempo para o efeito de digitação (meio do ciclo de animação de apagamento)
      }, 1000); // Delay de 1 segundo (tempo inicial)
    }, 6000);
  }
  

  
  translateTXT(event: any) {

    const optionSelect = event.value; 
    
    if (optionSelect === 'en') {
      this.text = `Hello! I’m a Software Engineering student at the Catholic University of Brasília, currently in my 7th semester.<br>
        Throughout my academic journey, I’ve developed a strong knowledge base by leading and participating in challenging projects, which taught me the importance of structured planning and clearly abstracting ideas before moving on to execution.<br><br>
        I have a proactive and patient profile, always focused on achieving both short- and long-term goals, constantly seeking the most efficient and innovative solutions to the challenges I face.<br><br>
        I am proficient in technologies such as JavaScript, TypeScript, Angular, Node, and Java, and have a strong understanding of agile methodologies, including Scrum and Kanban. Additionally, I am fluent in English, which allows me to collaborate in diverse, global environments.<br><br>
        This is a bit of my journey so far and how I constantly strive to improve, whether in technical development or in building efficient and collaborative solutions. If you’re interested in learning more or collaborating, feel free to get in touch!`;
      this.header = 'About Me'
    
      } else {
      this.text = `Olá! Sou estudante de Engenharia de Software na Universidade Católica de Brasília, atualmente no 7º semestre.<br>
        Ao longo da minha trajetória acadêmica, desenvolvi uma base de conhecimento sólida liderando e participando de projetos desafiadores, que me ensinaram a importância do planejamento estruturado e da abstração clara das ideias antes de partir para a execução.<br><br>
        Tenho um perfil proativo e paciente, sempre focado em atingir objetivos de curto e longo prazo, buscando constantemente as soluções mais eficientes e inovadoras para os desafios que enfrento.<br><br>
        Possuo conhecimento em tecnologias como JavaScript, TypeScript, Angular, Node e Java, além de um forte entendimento sobre metodologias ágeis, incluindo Scrum e Kanban. Além disso, sou fluente em inglês, o que me permite colaborar em ambientes globais e diversificados.<br><br>
        Esse é um pouco do meu percurso até aqui e de como estou sempre em busca de evolução, seja no desenvolvimento técnico ou na construção de soluções eficientes e colaborativas. Se tiver interesse em saber mais ou colaborar, fique à vontade para entrar em contato!`;
      
      this.header = 'Sobre mim'
      }
  }
}
