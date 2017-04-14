import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ApiService } from '../../services/api.service';

export class Poke extends BSModalContext {
  constructor(public num1: number, public num2: number) {
    super();
  }
}

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  pokemons: any;
  context: Poke;

  constructor(private api: ApiService,
  public dialog: DialogRef<Poke>) {
    this.context = dialog.context;
  }

  ngOnInit() {
    this.getMyPokemons();
  }

  getMyPokemons() {
    this.api.getMyPokemons().subscribe(
      response => {
        this.pokemons = JSON.parse(response['_body']);
      },
      error => console.log(error),
      () => console.log('completed')
    );
  }

  choosePokemon(i) {
    const exchange = JSON.parse(localStorage.getItem('exchange'));
    exchange.proposed = {
      pokemonIndex: i,
      pokemonName: this.pokemons[i].name,
      pokemonImg: this.pokemons[i].sprites.front_default
    };
    this.api.exchangePokemons(exchange).subscribe(
      response => {
        console.log(response['_body']);
      },
      error => console.log(error),
      () => {
        console.log('completed');
        this.dialog.close();
      }
    );
  }

}
