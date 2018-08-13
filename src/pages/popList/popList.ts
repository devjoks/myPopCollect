import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../service/firebase';
import { Pop } from '../../models/dataPop';

@Component({
  selector: 'page-PopList',
  templateUrl: 'PopList.html'
})
export class PopListPage {
  selectedItem: any;
  icons: string[];
  popList: Array<Pop> = [];
  loading: boolean;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private firebaseService: FirebaseService,
  ) {
    this.selectedItem = this.navParams.get('item');
    this.loadList();
  }

  async loadList() {
    this.loading = true;
    const list = await this.firebaseService.getPopList();
    Object.keys(list).forEach(key => {
      this.popList.push(list[key]);
    });
    this.loading = false;
  }

  itemTapped(event, item) {
    this.navCtrl.push(PopListPage, {
      item: item
    });
  }
}
