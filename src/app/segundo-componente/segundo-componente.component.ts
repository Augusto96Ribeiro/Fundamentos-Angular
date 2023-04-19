import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
nome = "Augusto";
dataNascimento = "1995-01-01";
urlImagem = "/assets/Augusto.jpeg";

mostrarDataNascimento(){
  alert (`A data de nascimento do Augusto é: ${this.dataNascimento}`)
}
}
