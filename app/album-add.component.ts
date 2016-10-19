import { Component, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-add',
  template: `
    <hr>
    <h3>Add Album</h3>
    <form class="form-inline">
      <div class="form-group">
        <label>Album Name</label>
        <input #newName>
      </div>
      <div class="form-group">
        <label>Album Artist</label>
        <input #newArtist>
      </div>
      <div class="form-group">
        <label>Price</label>
        <input #newPrice>
      </div>
      <div class="form-group">
        <label>Genre</label>
        <input #newGenre>
      </div>
      <button (click)="addAlbumClicked(newName.value, newArtist.value, newPrice.value, newGenre.value);
      newName.value ='';
      newArtist.value='';
      newPrice.value='';
      newGenre.value='';
      ">Add Album</button>
    </form>
    <hr>
  `
})

export class AlbumAddComponent {
  @Output() newAlbumSender = new EventEmitter();

  addAlbumClicked(name: string, artist: string, price: number, genre: string) {
    var newAlbumToAdd: Album = new Album(name, artist, price, genre);
    this.newAlbumSender.emit(newAlbumToAdd);
  }
}
