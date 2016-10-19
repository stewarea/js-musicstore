import { Component, Input, Output } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Rock and Roll Record Shop</h1>

    <album-list
      [childAlbumList]="masterAlbumList"
      (editButtonClickSender)="showEdit($event)"
    ></album-list>



    <album-edit
    [childSelectedAlbum]="selectedAlbum" (doneEditingClickedSender)="finishedEditing()"
    ></album-edit>

    <album-add
      (newAlbumSender)="addAlbum($event)"
    ></album-add>

  </div>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("Eleanor Friedberger", "Personal Record", 9.99, "Rock"),
    new Album("Nicolas Jaar", "Sirens", 19.99, "Electronica"),
    new Album("Hamilton Cast", "Hamilton Original Broadway Soundtrack", 24.99, "Soundtrack")
  ];

  selectedAlbum: Album = null;

  addAlbum(newAlbumFromChild: Album) {
    this.masterAlbumList.push(newAlbumFromChild);
  }

  showEdit(clickedAlbum: Album) {
      this.selectedAlbum = clickedAlbum;
    }

  finishedEditing(){
      this.selectedAlbum = null;
    }

  // addToCart() {
  //   this.selectedAlbum .inCart = true;
  // }


}
