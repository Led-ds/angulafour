import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';

import { OrdemServicoService } from '../service/ordem-servico.service';
import { OrdemServicoPortal } from '../model-form/OrdemServicoPortal';


@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  pedido: OrdemServicoPortal;
  display: Boolean = false;
  @Output() pedidoCriado = new EventEmitter();

  tipoOSs: Array<any>;
  enderecos: Array<any>;

  constructor(private ordemServicoService: OrdemServicoService,
    private messageService: MessageService) {
      this.pedido = new OrdemServicoPortal();
     }

    ngOnInit() {
      this.ordemServicoService.listarTipoOSs()
        .subscribe(response => this.tipoOSs = response);

      this.ordemServicoService.listarEnderecos()
        .subscribe(response => this.enderecos = response);
    }

  showDialog() {
    this.display = true;
  }

  adicionar(frm: FormGroup) {
    this.ordemServicoService.adicionar(this.pedido)
      .subscribe(response => {
        frm.reset();
        this.messageService.add({ severity: 'success', detail: 'Pedido criado com sucesso!' });
        this.pedidoCriado.emit(response);
      });
  }

}
