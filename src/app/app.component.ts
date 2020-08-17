import {Component, OnInit} from '@angular/core';
import {CustomizerService} from './shared/services/customizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'universal-starterkit';
  public toggle: boolean;
  public openToggle: boolean;

  constructor(public customize: CustomizerService) { }

  receiveToggle($event: boolean) {
    this.openToggle = $event;
    this.toggle = this.openToggle;
  }

  ngOnInit() { }

}
