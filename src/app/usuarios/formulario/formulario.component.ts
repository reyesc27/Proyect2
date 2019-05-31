import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { error } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario:Usuario;
  myForm: FormGroup;
  
  constructor(private usuarioServicio:UsuariosService, public fb:FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      id:['', Validators.required],
      nombre:['', Validators.required],
      telefono:['', Validators.required],
      direccion:['', Validators.required],
      correo:['', [Validators.required, Validators.email]]
    });
    this.usuario=this.usuarioServicio.nuevoUsuario();
  }
nuevoUsuario():void{
  this.usuarioServicio.agregarUsuario(this.usuario).subscribe(
    (data:Usuario)=>{
      console.log(data);
    }, (error:any)=>console.log(error)
  );
  this.usuario=this.usuarioServicio.nuevoUsuario();
}
}
