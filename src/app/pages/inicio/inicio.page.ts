import { Component, OnInit } from '@angular/core';

interface Componente {
  icon : string,
  name: string,
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'albums-outline',
      name: 'Accordion',
      redirectTo: '/accordion'
    },
    {
      icon: 'mail-unread-outline',
      name: 'Badge',
      redirectTo: '/badge'
    },
    {
      icon: 'ellipsis-horizontal-outline',
      name: 'Breadcrumbs',
      redirectTo: '/breadcrumb'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
