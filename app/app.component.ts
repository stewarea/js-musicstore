import { Component, Input, Output } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Record Shop</h1>

    <album-list
      [childAlbumList]="masterAlbumList"
    ></album-list>

    <album-add
      (newAlbumSender)="addAlbum($event)"
    ></album-add>

  </div>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("Elenore Freidberger", "Personal Record", 9.99, "Rock"),
    new Album("Nicolas Jaar", "Sirens", 19.99, "House"),
    new Album("Hamilton Soundtrack", "Hamilton", 24.99, "Soundtrack")
  ];

  selectedAlbum: Album = null;

  addAlbum(newAlbumFromChild: Album) {
    this.masterAlbumList.push(newAlbumFromChild);
  }
}
