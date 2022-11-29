import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsucursalService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = 'https://sucursal-production.up.railway.app/buscar_por_id';

  getSucursales(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);

  }


}
