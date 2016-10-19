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

    <div class="row">
      <div class="col-sm-12" *ngFor="let currentAlbum of childAlbumList | genre:selectedGenre">
        <hr>
        <h4> {{ currentAlbum.name }} - {{ currentAlbum.artist }}</h4>
        <button (click)="inCart(true)">Add to Cart</button>
        <button (click)="editButton(currentAlbum)">Edit</button>
      </div>
      <div class="col-sm-12" *ngFor="let currentAlbum of childAlbumList | incart:selectedCart">
        <hr>
        <p>{{ currentAlbum.name }} - {{ currentAlbum.artist }} {{ currentAlbum.price }}</p>
      </div>
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

  public selectedCart: boolean = false;
  inCart(cartOptionFromMenu) {
    this.selectedCart = cartOptionFromMenu;
    console.log(this.selectedCart);
  }



  editButton(albumToEdit: Album) {
    this.editButtonClickSender.emit(albumToEdit);
  }
}
