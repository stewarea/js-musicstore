import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-edit',
  template: `
  <div *ngIf="childSelectedAlbum">
    <hr>
    <h3>Edit {{childSelectedAlbum.name}}</h3>

      <div class="form-group">
        <label>Edit Name</label>
        <input [(ngModel)]="childSelectedAlbum.name">
      </div>
      <div class="form-group">
        <label>Edit Artist</label>
        <input [(ngModel)]="childSelectedAlbum.artist">
      </div>
      <div class="form-group">
        <label>Edit Price</label>
        <input [(ngModel)]="childSelectedAlbum.price">
      </div>
      <div class="form-group">
        <label>Edit Genre</label>
        <input [(ngModel)]="childSelectedAlbum.genre">
        <button (click)="doneEditingClicked()">Done Editing</button>
      </div>

  </div>
  `
})

export class AlbumEditComponent {
  @Input() childSelectedAlbum: Album;
  @Output() doneEditingClickedSender = new EventEmitter();
  doneEditingClicked() {
    this.doneEditingClickedSender.emit();
  }
}
