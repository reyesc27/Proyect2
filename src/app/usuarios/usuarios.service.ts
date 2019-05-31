import { Injectable } from '@angular/core';
import{Usuario} from './usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string="http://localhost:3000/Usuario";

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsuario(): Observable<Usuario[]>{
    
    return this.httpClient.get<Usuario[]>(" http://localhost:3000/Usuario");

  } 
  agregarUsuario(usuario: Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>("http://localhost:3000/Usuario", usuario,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });  
    }

    deleteUsuario(id:number):Observable<void>{
      return this.httpClient.delete<void>(`${this.url}/${id}`);
    }


    nuevoUsuario(): Usuario{
      return{
        id:0,
        nombre:'',
        telefono:'',
        direccion:'',
        correo:''
      }
      } 
}
