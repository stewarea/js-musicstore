import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
    <div *ngFor="let currentAlbum of childAlbumList">
      <h3> {{ currentAlbum.name }} - {{ currentAlbum.artist }}</h3>
      <button (click)="editButton(currentAlbum)">Edit</button>
    </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];

  @Output() editButtonClickSender = new EventEmitter();
  editButton(albumToEdit: Album) {
    this.editButtonClickSender.emit(albumToEdit);
  }
}
