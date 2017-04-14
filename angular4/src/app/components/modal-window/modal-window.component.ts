import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ApiService } from '../../services/api.service';

export class poke extends BSModalContext {
  constructor() {
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
  context: poke;

  constructor(private api: ApiService,
  public dialog: DialogRef<poke>) {
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
    let exchange = JSON.parse(localStorage.getItem('exchange'));
    exchange.proposed = {
      index: i
    }
    this.api.exchangePokemons(exchange).subscribe(
      response => {
        console.log(JSON.parse(response['_body']));
      },
      error => console.log(error),
      () => console.log('completed')
    )
    // this.dialog.close()
  }

}
