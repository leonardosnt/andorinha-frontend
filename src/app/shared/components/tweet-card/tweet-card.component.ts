import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tweet } from '../../models/tweet';

@Component({
  selector: 'tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetCardComponent implements OnInit {

  @Input()
  private tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

}
