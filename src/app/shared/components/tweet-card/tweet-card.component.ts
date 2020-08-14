import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Tweet } from '../../models/tweet';
import { Comentario } from '../../models/comentario';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetCardComponent implements OnInit {

  @Input()
  private tweet: Tweet;

  @Input()
  private inputComentarAtivo: boolean = false;

  @Output()
  private comentarioAdicionado: EventEmitter<string>;

  constructor() {
    this.comentarioAdicionado = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onAdicionarComentario(ngForm: NgForm) {
    const {conteudo} = ngForm.form.value;

    this.comentarioAdicionado.emit(conteudo);

    ngForm.reset();
  }
}
