import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  endpoint = "http://localhost:8080/weapons";

  constructor(private httpClient: HttpClient) { }

  getWeapons() {
    return this.httpClient.get(this.endpoint);
  }

  createWeapon(type: any, element: any, monster: any) {
    let body = new URLSearchParams();
    body.append("type", type);
    body.append("element", element);
    body.append("monster", monster);
    return this.httpClient.post(this.endpoint, body, httpOptions);
  }

  deleteWeapon(id: number) {
    // Enviar solicitud para eliminar un arma por ID
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  updateWeapon(id: number, type: any, element: any, monster: any) {
    let body = new URLSearchParams();
    body.append("type", type);
    body.append("element", element);
    body.append("monster", monster);
    return this.httpClient.put(`${this.endpoint}/${id}`, body, httpOptions);
  }
}
