import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  nome: any;
  email: any;
  telefone: any;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.activateRoute.snapshot.paramMap.get('nome');
    this.email = this.activateRoute.snapshot.paramMap.get('email');
    this.telefone = this.activateRoute.snapshot.paramMap.get('telefone');
  }

}
