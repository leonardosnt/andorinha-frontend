import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import {RouterModule} from '@angular/router';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UsuarioListaComponent, UsuarioDetalheComponent, UsuarioPerfilComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgbPaginationModule
  ],
  exports: [RouterModule]
})
export class UsuarioModule { }
