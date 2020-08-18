import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, NgZone, ChangeDetectorRef } from '@angular/core';
import { Tweet } from '../../models/tweet';
import { Comentario } from '../../models/comentario';
import { Form, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Usuario } from '../../models/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {

  @Input()
  tweet: Tweet;

  @Input()
  inputComentarAtivo: boolean = false;

  @Output()
  comentarioAdicionado: EventEmitter<Comentario> = new EventEmitter<Comentario>();

  @Output()
  tweetExcluido: EventEmitter<void>  = new EventEmitter<void>();

  usuarioAtual: Usuario;

  publicandoComentario: Boolean;
  excluindoTweet: Boolean;

  confirmaExcluirTweet: Boolean;

  constructor(private api: ApiService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.api.usuario().usuarioAtual().subscribe(usuario => this.usuarioAtual = usuario);
  }

  onDeletarTweet() {
    if (!this.confirmaExcluirTweet) {
      this.confirmaExcluirTweet = true;
      return;
    }

    const onSuccess = () => {
      this.excluindoTweet = false;

      this.tweetExcluido.emit();

      this.toastrService.success(null, 'Tweet removido!',  { timeOut: 2000 });
    };

    const onError = () => {
      this.excluindoTweet = false;

      this.toastrService.error('Tente novamente dentro de alguns instantes.',
        'Não foi possível deletar o tweet',  { closeButton: true });
    };

    this.confirmaExcluirTweet = false;
    this.excluindoTweet = true;

    this.api.tweet().remover(this.tweet).subscribe(onSuccess, onError)
  }

  onAdicionarComentario(ngForm: NgForm) {
    const onSuccess = (comentario: Comentario) => {
      this.publicandoComentario = false;

      this.comentarioAdicionado.emit(comentario);

      this.toastrService.success(null, 'Comentário publicado!',  { timeOut: 2000 });

      ngForm.reset();
    };

    const onError = () => {
      this.publicandoComentario = false;

      this.toastrService.error(`Tente novamente dentro de alguns instantes.`,
        'Não foi possível publicar o comentário',  { closeButton: true });
    };

    const comentario = new Comentario();
    comentario.tweet = this.tweet;
    comentario.usuario = this.usuarioAtual;
    comentario.conteudo = ngForm.form.value.conteudo;

    this.publicandoComentario = true;

    this.api.comentario().inserir(comentario).subscribe(onSuccess, onError)
  }
}
