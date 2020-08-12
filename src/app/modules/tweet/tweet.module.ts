import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetRoutingModule } from './tweet-routing.module';
import { TweetDetalheComponent } from './tweet-detalhe/tweet-detalhe.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TweetDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,
    TweetRoutingModule,
    SharedModule,
    NgbPaginationModule
  ]
})
export class TweetModule { }
