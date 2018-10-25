import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  private url = 'http://192.168.0.184:6060/WS/rest';

  constructor( private http: HttpClient) {   }

  adicionar(frm: any): Observable<any> {
    return this.http.post<any>(`${this.url}/OrdemServico/CriarOS/v1`, frm);
  }

  findByCliente(): Observable<any> {
    return this.http.get<any>(`${this.url}/OrdemServico/BuscarCliente/v1`);
  }

  listarOsS(): Observable<any> {
      return this.http.get<any>(`${this.url}/OrdemServico/BuscarOS/v1`);
  }

  listarTipoOSs(): Observable<any> {
    return this.http.get<any>(`${this.url}/OrdemServico/BuscarTipoOS/v1`);
  }

  listarEnderecos(): Observable<any> {
    return this.http.get<any>(`${this.url}/OrdemServico/BuscarEndereco/v1`);
  }

}

