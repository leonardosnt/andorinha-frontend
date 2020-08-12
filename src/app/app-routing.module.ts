import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { SampleComponent } from './components/sample/sample-component/sample-component';
import { UsuarioListaComponent } from './modules/usuario/usuario-lista/usuario-lista.component';
import { UsuarioDetalheComponent } from './modules/usuario/usuario-detalhe/usuario-detalhe.component';
import { UsuarioPerfilComponent } from './modules/usuario/usuario-perfil/usuario-perfil.component';
import { TweetDetalheComponent } from './modules/tweet/tweet-detalhe/tweet-detalhe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'usuario-lista',
    component: UsuarioListaComponent
  },
  {
    path: 'usuario-detalhe',
    component: UsuarioDetalheComponent
  },
  {
    path: 'usuario/:id',
    component: UsuarioPerfilComponent
  },
  {
    path: 'tweet/:id',
    component: TweetDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
