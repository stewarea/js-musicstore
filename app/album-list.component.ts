import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
    <div *ngFor="let currentAlbum of albums">
      <h3> {{ currentAlbum.name }}</h3>
    </div>
  `
})

export class AlbumListComponent {
  
}
