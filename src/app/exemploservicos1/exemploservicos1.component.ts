import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemploservicos1',
  templateUrl: './exemploservicos1.component.html',
  styleUrls: ['./exemploservicos1.component.css']
})
export class Exemploservicos1Component {
 nome= "";

 constructor(private logger: LoggerService){

 }

 adicionarNome(){
  this.logger.logar(`O nome ${this.nome} foi adicionado`)
 }
}
