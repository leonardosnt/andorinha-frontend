import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ HeaderComponent, FooterComponent, SidebarComponent, ToggleFullscreenDirective, TweetCardComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [ HeaderComponent, FooterComponent, SidebarComponent, TweetCardComponent ]
})
export class SharedModule { }
