import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

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
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  pokemons: any;
  context: Poke;

  constructor(private api: ApiService, private _flashMessagesService: FlashMessagesService,
  public dialog: DialogRef<Poke>) {
    this.context = dialog.context;
  }

  ngOnInit() {
    this.getMyPokemons();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getMyPokemons() {
    this.api.getMyPokemons().takeUntil(this.ngUnsubscribe).subscribe(
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
    const sub = this.api.exchangePokemons(exchange).takeUntil(this.ngUnsubscribe).subscribe(
      response => {
        this._flashMessagesService.show('Trade request posted!', { cssClass: 'alert-success' } );
      },
      error => console.log(error),
      () => {
        setTimeout(() => { this.dialog.close('finished') }, 1000);
      }
    );
  }

}
