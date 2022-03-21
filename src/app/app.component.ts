import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Juego-de-Ahorcado';

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  palabra = 'AGUACATE';
  palabraOculta = '';

  constructor(){
    this.palabraOculta = '_ '.repeat( this.palabra.length);
 }

 comprobar(letra: string){
    console.log('Pulsaste la letra: ' + letra);
 }

}
