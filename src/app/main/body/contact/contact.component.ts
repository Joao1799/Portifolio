import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {FormsModule , FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-contact',
  imports: [ButtonModule,ReactiveFormsModule,CommonModule, InputTextModule,SelectModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  forms!: FormGroup;
  email: string = '';
  emailInvalid: boolean = false;
  
  tipoServices = [
    { tipo: 'Desenvolvimento Web' },
    { tipo: 'Consultoria' },
    { tipo: 'Manutenção' },
    { tipo: 'Suporte técnico'},
    { tipo: 'Feedback/Sugestão' }
  ];

  tiposAssunto = [
    { assunto:'Orçamento' },
    { assunto:'Parceria'  },
    { assunto:'Dúvida' },
  ];

  valores = [
    { valor:'R$ 500 - 1000' },
    { valor:'R$ 2000 - 5000'  },
    { valor:'R$ 5000 - 10000' },
  ];

  constructor(){}
  
  ngOnInit() {
    this.getForm();
  }
  
  getForm() {
    this.forms = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensagem: new FormControl(''),
      servico: new FormControl(''),
      motivoContato: new FormControl(''),
      valores: new FormControl('')
    });
  }

  postForm(){
    if(this.forms.valid){
      console.log(this.forms.value)
    }else{
      console.log("error");
      
    }
  }
  
  emailInvalide() {
    return this.forms.get('email')?.invalid && this.forms.get('email')?.touched;
  }

}
