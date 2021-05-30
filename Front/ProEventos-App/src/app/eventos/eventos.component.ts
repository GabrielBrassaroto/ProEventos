import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = []; /// tem que definir como array senao ele da erro no lenght da view
  margemImagem: number = 2;
  exibirImagem: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem(){
   this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void{

    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
      );
  }

}
