import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/shared/models/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { Tweet } from 'src/app/shared/models/tweet';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TweetSeletor } from 'src/app/shared/models/seletor/tweet.seletor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  usuarioAtual: Usuario;

  publicandoTweet: Boolean;

  tweetsRecentes: Tweet[];

  constructor(private api: ApiService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit() {
    this.buscarUsuario();
    this.buscarTweetsRecentes();
  }

  buscarTweetsRecentes() {
    const seletor = <TweetSeletor> {
      orderField: 'data',
      orderType: 'desc',
      limite: 20,
      pagina: 1
    };

    this.api.tweet().pesquisar(seletor).subscribe(tweets => this.tweetsRecentes = tweets);
  }

  buscarUsuario() {
    this.api.usuario().usuarioAtual().subscribe(usuario => this.usuarioAtual = usuario);
  }

  onAdicionarTweet(ngForm: NgForm) {
    const onSuccess = (tweet: Tweet) => {
      // Por algum motivo o onComplete não está sendo invocado, então tive que atualizar
      // o valor do publicandoTweet aqui e no onError.
      this.publicandoTweet = false;

      this.toastrService
        .success('Clique para ver', 'Tweet publicado',  { closeButton: true })
        .onTap
        .subscribe(() => {
          this.router.navigate(['/tweet', tweet.id]);
        });

      ngForm.reset();

      this.buscarTweetsRecentes();
    };

    const onError = () => {
      this.publicandoTweet = false;

      this.toastrService.error(`Tente novamente dentro de alguns instantes.`,
        'Não foi possível publicar o tweet',  { closeButton: true });
    };

    const tweet = new Tweet();
    tweet.conteudo = ngForm.form.value.conteudo;
    tweet.usuario = this.usuarioAtual;

    this.publicandoTweet = true;

    this.api.tweet().inserir(tweet).subscribe(onSuccess, onError);
  }
}
