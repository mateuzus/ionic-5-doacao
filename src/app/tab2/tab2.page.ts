import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  doarAlimentos() {
    this.abrirUrl(
      'https://www.google.com/maps/search/ponto+doacao+alimento+guaratinguet%C3%A1/@-22.8034212,-45.2297978,11z/data=!3m1!4b1'
    );
  }

  doarRoupas() {
    this.abrirUrl(
      'https://www.google.com/maps/search/ponto+doacao+roupas+guaratinguet%C3%A1/@-22.8026658,-45.2297986,11z/data=!3m1!4b1'
    );
  }

  doarSangue() {
    this.abrirUrl(
      'https://www.google.com/maps/search/ponto+doacao+sangue/@-22.8006752,-45.6502127,9z/data=!3m1!4b1'
    );
  }

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
}
