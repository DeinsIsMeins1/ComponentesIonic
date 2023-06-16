import { Component } from '@angular/core';

interface Componente {
  icon : string,
  name: string,
  redirectTo: string
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

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
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
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
      icon: 'tablet-landscape-outline',
      name: 'Buttons',
      redirectTo: '/button'
    },
    {
      icon: 'id-card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'ellipsis-horizontal-circle-outline',
      name: 'Chip',
      redirectTo: '/chip'
    },
    {
      icon: 'calendar-outline',
      name: 'Date-time',
      redirectTo: '/datetime'
    },
    {
      icon: 'options-outline',
      name: 'picker',
      redirectTo: '/picker'
    },
    {
      icon: 'apps-outline',
      name: 'fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'grid',
      redirectTo: '/grid'
    },
    {
      icon: 'list-outline',
      name: 'infinite scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'text-outline',
      name: 'input',
      redirectTo: '/input'
    },
    {
      icon: 'fish-outline',
      name: 'icon',
      redirectTo: '/icon'
    },
    {
      icon: 'american-football-outline',
      name: 'item',
      redirectTo: '/item'
    },
    {
      icon: 'folder-open-outline',
      name: 'item divider',
      redirectTo: '/item-divider'
    }




  ];

  constructor() {}
}
