import { Component, Input } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-edit',
  template: `
  <div *ngIf="editAlbum">
    <hr>
    <h3>Edit Album</h3>
    <form>
      <div class="form-group">
        <label>Edit Name</label>
        <input [(ngModel)]="editAlbum.name">
      </div>
      <div class="form-group">
        <label>Edit Artist</label>
        <input [(ngModel)]="editAlbum.artist">
      </div>
      <div class="form-group">
        <label>Edit Price</label>
        <input [(ngModel)]="editAlbum.price">
      </div>
      <div class="form-group">
        <label>Edit Genre</label>
        <input [(ngModel)]="editAlbum.genre">
      </div>
    </form>
  `
})

export class AlbumEditComponent {
  @Input() editAlbum: Album;
}
