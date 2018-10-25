import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from '../service/ordem-servico.service';

@Component({
  selector: 'app-lista-ordem-servico',
  templateUrl: './lista-ordem-servico.component.html',
  styleUrls: ['./lista-ordem-servico.component.css']
})
export class ListaOrdemServicoComponent implements OnInit {

  osS: Array<any>;

  constructor(private ordemServicoService: OrdemServicoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.ordemServicoService.listarOsS()
    .subscribe(response => this.osS = response);
  }

}
