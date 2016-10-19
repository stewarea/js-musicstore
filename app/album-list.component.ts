import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `

    <select (change)="onChange($event.target.value)">
      <option value="All">All items </option>
      <option value="Rock">Rock</option>
      <option value="Soundtrack">Soundtrack</option>
      <option value="Electronica">Electronica</option>
    </select>
    <div *ngFor="let currentAlbum of childAlbumList | genre:selectedGenre">
    
      <album-cart [album]="currentAlbum"></album-cart>
      <h3> {{ currentAlbum.name }} - {{ currentAlbum.artist }}</h3>
      <button (click)="editButton(currentAlbum)">Edit</button>
    </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Output() editButtonClickSender = new EventEmitter();

  public selectedGenre: string = "All";
  onChange(optionFromMenu) {
    this.selectedGenre = optionFromMenu;
  }

  editButton(albumToEdit: Album) {
    this.editButtonClickSender.emit(albumToEdit);
  }
}
