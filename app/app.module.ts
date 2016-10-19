import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumEditComponent } from './album-edit.component';
import { AlbumAddComponent} from './album-add.component';
import { CartComponent } from './album-cart.component';
import { GenrePipe } from './genre.pipe';
import { InCartPipe } from './incart.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumEditComponent,
    AlbumAddComponent,
    CartComponent,
    GenrePipe,
    InCartPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
