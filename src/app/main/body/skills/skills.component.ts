import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  imports: [
    FormsModule,
    CardModule,
    TabsModule,
    BadgeModule,
    AvatarModule,
    SelectButtonModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  selectedLanguage: string = 'br';
  txtOptions = [
    { label: 'PT-BR', value: 'br' },
    { label: 'EN-US', value: 'en' },
  ];
  titleCard!: string;
  angularText!: string;
  gitSkillsText!: string;
  javaScriptText!: string;
  javaText!: string;
  softSkillsText!: string;

  constructor() {}

  ngOnInit() {
    this.translateTXT({ value: this.selectedLanguage });
  }

  translateTXT(event: any) {
    const optionSelect = event.value;

    if (optionSelect === 'en') {
      this.titleCard = 'My Skills';

      this.angularText = `Development of Applications with Angular<br>
      I have experience in developing scalable, dynamic, and high-performance web applications using Angular, one of the most comprehensive frameworks for frontend development.
      My approach focuses on componentization, code reuse, and efficient maintenance, ensuring well-structured and organized applications.<br><br>

      Architecture and Project Structuring<br>
      I apply best practices to structure Angular projects modularly, implementing principles such as Lazy Loading, Reactive Forms, and State Management to ensure performance and scalability.
      I have experience organizing applications using services and modules, enabling an efficient and secure data flow.<br><br>

      Integration with REST APIs and Data Handling<br>
      I have advanced knowledge in frontend-backend communication using HttpClient, implementing asynchronous requests, data caching, and error handling.
      I utilize Interceptors to globally manage requests, ensuring security and control over application operations.<br><br>

      Development of Modern and Responsive Interfaces<br>
      I create dynamic and accessible user interfaces using UI frameworks such as Angular Material and PrimeNG.
      Additionally, I apply Flexbox, Grid Layout, and SCSS to ensure responsiveness and an enhanced user experience.`;

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
      It is a very useful tool for commits, conflict resolution, and synchronizing changes without the need for manual commands.`;

      this.javaScriptText = `JavaScript Development<br>  
      I have solid knowledge of JavaScript fundamentals, including variables, data types, operators, and control structures, providing a strong foundation for web application development.  
      I have experience in creating and using functions, understanding concepts of scope and context, which allows me to build modular and reusable solutions.  
      I work with objects and methods, facilitating data modeling and the implementation of complex functionalities.<br><br>  

      DOM Manipulation and Events<br>  
      I use JavaScript to manipulate the DOM, enabling the dynamic creation, modification, and removal of elements, enhancing application interactivity.  
      I have experience working with events, controlling system responses to user actions such as clicks, key presses, and mouse movements.<br><br>  

      API Development and Integration with Node.js<br>  
      I have developed APIs using Node.js, implementing request and response logic for efficient communication between client and server.  
      I have used Prisma as an ORM to interact with MongoDB, allowing efficient data management in control systems, such as store management.` 
      
      this.javaText = `Java Development<br>  
      I have a solid foundational knowledge of Java, with an emphasis on object-oriented programming (OOP) principles.  
      I understand and apply the four fundamental pillars of OOP in Java: Encapsulation, Abstraction, Inheritance, and Polymorphism, ensuring the development of structured and maintainable applications.<br><br>  

      Frameworks and Unit Testing<br>  
      I have had basic exposure to the Quarkus framework, leveraging its capabilities to build efficient and high-performance applications.  
      Additionally, I have experience using JUnit for unit testing, ensuring the reliability and correctness of implemented functionalities.<br><br>  

      Service and REST Classes<br>  
      I am familiar with designing and implementing service classes and RESTful APIs, facilitating the development of modular and scalable backend applications.  
      I understand the structuring of controllers, services, and repositories, ensuring clean architecture and proper separation of concerns.`  

      this.softSkillsText = `Interpersonal and Professional Skills<br>  
      Throughout my journey, I have developed essential skills for teamwork and solving complex challenges.  
      My experience in demanding projects has allowed me to enhance my ability to plan strategically, stay organized, and abstract ideas before execution, ensuring greater efficiency and accuracy in deliveries.<br><br>  

      Proactivity and Results-Oriented Approach<br>  
      I am a proactive person, always seeking efficient solutions to challenges that arise.  
      I have the patience and determination to achieve both short- and long-term goals, maintaining a focus on quality and continuous process improvement.<br><br>  

      Communication and Teamwork<br>  
      I believe that clear and objective communication is essential for the success of any project.  
      I value collaboration and knowledge sharing, as I understand that a cooperative work environment fosters innovation and professional excellence.`  


    } else {
      this.titleCard = 'Minhas Habilidades';

      this.angularText = `Desenvolvimento de Aplicações com Angular<br>
      Tenho experiência no desenvolvimento de aplicações web escaláveis, dinâmicas e de alta performance utilizando Angular, um dos frameworks mais completos para o desenvolvimento frontend.<br>
      Minha abordagem foca na componentização, reutilização de código e manutenção eficiente, garantindo aplicações bem estruturadas e organizadas.<br><br>

      Arquitetura e Estruturação de Projetos<br>
      Utilizo as melhores práticas para estruturar projetos Angular de forma modular, aplicando princípios como Lazy Loading, Reactive Forms e State Management para garantir performance e escalabilidade.<br>
      Tenho experiência na organização de aplicações utilizando services e modules, permitindo um fluxo de dados eficiente e seguro.<br><br>

      Integração com APIs REST e Manipulação de Dados<br>
      Possuo conhecimento avançado na comunicação entre o frontend e o backend por meio do HttpClient, implementando requisições assíncronas, caching de dados e tratamento de erros.<br>
      Utilizo Interceptors para manipular requisições globalmente, garantindo segurança e controle sobre as operações da aplicação.<br><br>
      Desenvolvimento de Interfaces Modernas e Responsivas<br>
      Crio interfaces dinâmicas e acessíveis utilizando frameworks de UI como Angular Material e PrimeNG, além de aplicar Flexbox, Grid Layout e SCSS para garantir responsividade e boa experiência do usuário.`;

      this.javaScriptText = `Desenvolvimento com JavaScript<br>
      Tenho sólido conhecimento nos fundamentos do JavaScript, incluindo variáveis, tipos de dados, operadores e estruturas de controle, proporcionando uma base robusta para o desenvolvimento de aplicações web.
      Possuo experiência na criação e utilização de funções, compreendendo conceitos de escopo e contexto, o que permite construir soluções modulares e reutilizáveis.
      Trabalho com objetos e métodos, facilitando a modelagem de dados e a implementação de funcionalidades complexas.<br><br>

      Manipulação do DOM e Eventos<br>
      Utilizo JavaScript para manipular o DOM, permitindo a criação, modificação e remoção de elementos dinamicamente, melhorando a interatividade das aplicações.
      Tenho experiência em trabalhar com eventos, controlando a resposta do sistema a ações do usuário, como cliques, teclas e movimentos do mouse.<br><br>

      Desenvolvimento de APIs e Integração com Node.js<br>
      Desenvolvi APIs utilizando Node.js, implementando lógica de requisição e resposta para comunicação eficiente entre cliente e servidor.
      Utilizei Prisma como ORM para interagir com MongoDB, permitindo um gerenciamento eficiente de dados em sistemas de controle, como o gerenciamento de lojas. `

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
    
      this.javaText = `Desenvolvimento com Java<br>  
      Tenho uma base sólida em Java, com foco nos princípios da programação orientada a objetos (POO).  
      Compreendo e aplico os quatro pilares fundamentais da POO em Java: Encapsulamento, Abstração, Herança e Polimorfismo, garantindo o desenvolvimento de aplicações estruturadas e de fácil manutenção.<br><br>  

      Frameworks e Testes Unitários<br>  
      Já tive contato com o framework Quarkus, utilizando seus recursos para desenvolver aplicações eficientes e de alto desempenho.  
      Além disso, possuo experiência com testes unitários utilizando JUnit, garantindo a confiabilidade e a correta implementação das funcionalidades.<br><br>  

      Classes de Serviço e REST<br>  
      Tenho conhecimento na criação e implementação de classes de serviço e APIs RESTful, possibilitando o desenvolvimento de aplicações backend modulares e escaláveis.  
      Compreendo a estruturação de controllers, services e repositories, assegurando uma arquitetura limpa e uma adequada separação de responsabilidades.`

      this.softSkillsText = `Habilidades Interpessoais e Profissionais<br>  
      Ao longo da minha trajetória, desenvolvi habilidades essenciais para o trabalho em equipe e a resolução de desafios complexos.  
      Minha experiência em projetos desafiadores me permitiu aprimorar minha capacidade de planejamento estratégico, organização e abstração de ideias antes da execução, garantindo maior eficiência e assertividade nas entregas.<br><br>  

      Proatividade e Foco em Resultados<br>  
      Sou uma pessoa proativa, sempre em busca de soluções eficientes para os desafios que surgem.  
      Tenho paciência e determinação para alcançar tanto objetivos de curto quanto de longo prazo, mantendo o foco na qualidade e na melhoria contínua dos processos.<br><br>  

      Comunicação e Trabalho em Equipe<br>  
      Acredito que uma comunicação clara e objetiva é essencial para o sucesso de qualquer projeto.  
      Valorizo a colaboração e a troca de conhecimentos, pois entendo que um ambiente de trabalho cooperativo impulsiona a inovação e a excelência profissional.`  

    }
  }
}
