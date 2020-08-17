import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu } from '../../services/nav.service';
import { Usuario } from '../../models/usuario';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  public menuItems: Menu[];
  public url: any;
  public fileurl: any;

  private usuarioAtual: Usuario;

  constructor(private router: Router, public navServices: NavService, private api: ApiService) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems

    })
  }

  ngOnInit() {
    this.api.usuario().usuarioAtual().subscribe(usuario => this.usuarioAtual = usuario);
  }

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }

  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
      });
    }
    item.active = !item.active
  }

}
