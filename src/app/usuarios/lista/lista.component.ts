import { Component, OnInit } from '@angular/core';
import{Usuario} from '../usuario.model';
import{UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios:Usuario[];

  constructor(
    private usuarioservice:UsuariosService
  ) { }

  ngOnInit(  ) {
    this.usuarioservice.getUsuario().subscribe(data=>this.usuarios=data);
  }

  deleteHuman(id:any)
  {
    this.usuarioservice.deleteUsuario(id).subscribe(()=>console.log(id),
    (err)=>console.log(err));
    window.location.reload();
  }

}
