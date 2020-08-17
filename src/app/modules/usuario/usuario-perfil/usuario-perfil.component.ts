import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario';
import { Tweet } from 'src/app/shared/models/tweet';
import { ApiService } from 'src/app/shared/services/api.service';
import { TweetSeletor } from 'src/app/shared/models/seletor/tweet.seletor';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss'],
})
export class UsuarioPerfilComponent implements OnInit {

  private usuario: Usuario;
  private tweets: Tweet[]; // TODO: paginação

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        // TODO: validar
        const id = Number(params.get('id'));

        this.api.usuario()
          .consultar(id).subscribe(usuario => this.usuario = usuario);

        this.api.tweet()
          .pesquisar(<TweetSeletor>{ idUsuario: id, orderField: 'data', orderType: 'desc' })
          .subscribe(tweets => this.tweets = tweets);
      });
  }

}
