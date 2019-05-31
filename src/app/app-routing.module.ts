import{NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import{FormularioComponent} from './usuarios/formulario/formulario.component';
import{ListaComponent} from './usuarios/lista/lista.component';

const routers: Routes=[
    {path:'form', component:FormularioComponent},
    {path:'Lista', component:ListaComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routers)],
    exports:[RouterModule]

})

export class AppRoutingModule{}
