import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { UsuariosService } from './usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, FormularioComponent, ListaComponent],
  imports: [
    CommonModule,
     HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers:[
    UsuariosService
  ],
  exports:[MenuComponent]
})
export class UsuariosModule { }
