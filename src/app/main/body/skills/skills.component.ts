import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-skills',
  imports: [FormsModule,CardModule,TabsModule,BadgeModule,AvatarModule,SelectButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  selectedLanguage: string = 'br';
  txtOptions = [
    { label: 'PT-BR', value: 'br' },
    { label: 'EN-US', value: 'en' }
  ];
  header!: string;
  angularText!: string;
  gitSkillsText!: string;

  constructor() {}
  
  ngOnInit(){
    this.translateTXT({ value: this.selectedLanguage });
  }
  
  translateTXT(event: any) {
    const optionSelect = event.value; 
    
    if (optionSelect === 'en') {
      this.header = 'My Skills'

      this.angularText = `Web Interface Development with Angular<br>  
      I have experience in creating and implementing dynamic and responsive screens using the Angular framework. My focus is on developing modern and efficient applications while following best practices such as componentization, code reuse, and accessibility, ensuring an intuitive user experience.<br><br>

      API Integration with REST<br> 
      I am proficient in communication between frontend and backend through HTTP requests, securely and efficiently consuming and integrating data from REST APIs. I work with services and interceptors to manage requests, handle authentication, error handling, and asynchronous data manipulation.<br><br>

      Testing and Code Quality<br>  
      I prioritize code quality and application reliability. I apply clean code principles and code reviews to maintain project organization and maintainability.<br><br>

      Code Development and Refactoring<br>  
      In addition to creating new features, I work on optimizing and refactoring code to improve readability, efficiency, and scalability. I constantly seek to enhance code structure and performance by applying architectural patterns and best web development practices.`;

      this.gitSkillsText = `Version Control Management with Git<br>  
      I have experience using version control tools to manage repositories and collaborate on projects efficiently. 
      I learn quickly and have ease in handling branches, organized commits, and well-structured development workflows.<br><br>  

      Git Bash<br>  
      I use Git Bash to interact with repositories via the command line, applying essential commands such as commit, push, pull, merge, and rebase.<br><br>  

      GitLab<br>  
      Experience working with repositories on GitLab.<br>  
      I use the platform for code reviews, creating merge requests, and managing permissions in collaborative projects.<br><br>  

      GitHub<br>  
      I have basic knowledge of GitHub for hosting projects, creating repositories, and sharing code.<br>  
      I have worked with commits, branches, and repository cloning to facilitate team collaboration.<br><br>  

      GitHub Desktop<br>  
      I use GitHub Desktop to simplify interactions with local and remote repositories in a visual way.<br>  
      It is a very useful tool for commits, conflict resolution, and synchronizing changes without the need for manual commands.<br>`;  
      } else {
      this.header = 'Minhas Habilidades'

      this.angularText = `Desenvolvimento de Interfaces Web com Angular<br>
      Possuo experiência na criação e implementação de telas dinâmicas e responsivas utilizando o framework Angular. Meu foco está em desenvolver aplicações modernas e eficientes, seguindo boas práticas de desenvolvimento, como componentização, reutilização de código e acessibilidade, garantindo uma experiência intuitiva para os usuários.<br><br> 
      
      Integração com APIs REST<br>  
      Tenho conhecimento na comunicação entre frontend e backend por meio de requisições HTTP, consumindo e integrando dados de APIs REST de forma segura e otimizada. Trabalho com serviços e interceptors para gerenciar requisições, além de lidar com autenticação, tratamento de erros e manipulação de dados assíncronos.<br><br> 
      
      Testes e Qualidade de Código<br>  
      Prezo pela qualidade do código e pela confiabilidade das aplicações que desenvolvo. Aplico boas práticas de clean code e revisão de código para manter a organização e manutenibilidade dos projetos.<br><br> 
      
      Desenvolvimento e Refatoração de Código<br>  
      Além de criar novas funcionalidades, atuo na otimização e refatoração de código, garantindo melhor legibilidade, eficiência e escalabilidade dos projetos. Busco constantemente aprimorar a estrutura e a performance do código, aplicando padrões arquiteturais e boas práticas do desenvolvimento web.`;
      
      this.gitSkillsText = `Gerenciamento de Versionamento com Git<br>   
      Tenho experiência no uso de ferramentas de controle de versão para gerenciar repositórios e colaborar em projetos de forma eficiente. Possuo um aprendizado rápido e facilidade em lidar com branchs, commits organizados e fluxos de desenvolvimento bem estruturados.<br><br> 
      
      Git Bash<br>  
      Utilizo o Git Bash para interagir com repositórios via linha de comando, aplicando comandos essenciais como commit, push, pull, merge e rebase.<br><br> 
      
      GitLab<br>   
      Experiência com repositórios no GitLab. Utilizo a plataforma para revisão de código, criação de merge requests e controle de permissões em projetos colaborativos.<br><br>
      
      GitHub<br>   
      Tenho conhecimento no uso do GitHub para hospedar projetos, criar repositórios e compartilhar código. Já trabalhei com commits, branches e clone de repositórios, facilitando a colaboração em equipe.<br><br>
      
      GitHub Desktop<br> 
      Utilizo o GitHub Desktop para facilitar a interação com repositórios locais e remotos de forma visual. Uma ferramenta bastante útil para commits, resolução de conflitos e sincronização de mudanças sem a necessidade de comandos manuais.`;  
    }
      }
  }
