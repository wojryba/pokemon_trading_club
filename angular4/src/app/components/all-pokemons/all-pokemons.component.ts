import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css']
})
export class AllPokemonsComponent implements OnInit {
  pokemons: any;

  constructor(private api: ApiService,
  overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
 }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.api.getPokemons().subscribe(
      response => {
        this.pokemons = JSON.parse(response['_body']);
      },
      error => console.log(error),
      () => console.log('completed')
    )
  }

  exchangePokemon(i, j) {
    let exchange = {
      wanted: {
        user: this.pokemons[i]._id,
        pokemonIndex: j
      }
    }
    localStorage.setItem('exchange', JSON.stringify(exchange));
    this.modal.open(ModalWindowComponent);
  }

}
