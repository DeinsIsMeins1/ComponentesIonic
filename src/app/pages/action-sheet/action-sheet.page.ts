import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  result: string = '';

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      backdropDismiss: false,
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          cssClass: 'rojo',
          handler() {
            console.log('Click delete');
          },
        },
        {
          text: 'Share',
          icon: 'share-social-outline',
          handler() {
            console.log('Click share');
            
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler() {
            console.log('Click close');
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

}
