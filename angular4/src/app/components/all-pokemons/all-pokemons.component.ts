import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalWindowComponent, Poke } from '../modal-window/modal-window.component';
import { AuthService } from '../../services/auth.service';
import { TradeRequestsComponent } from '../trade-requests/trade-requests.component';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css'],
  animations: [
    // animations for displaing locations
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-20%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0%)', opacity: 1}))
        ])
      ]
    )
  ]
})
export class AllPokemonsComponent implements OnInit {
  @ViewChild (TradeRequestsComponent)
  TradeComponent: TradeRequestsComponent;
  pokemons: any;

  constructor(private api: ApiService, private auth: AuthService,
  overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
 }

  ngOnInit() {
    this.getPokemons();



  }

  getPokemons() {
    let id = this.auth.useJwtHelper();
    id = id._id;
    this.api.getPokemons().subscribe(
      response => {
        let poke = JSON.parse(response['_body']);
        console.log(poke);
        poke = poke.filter( val => {
          if (val && val._id !== id) {
            return val;
          }
        });
        this.pokemons = poke;
      },
      error => console.log(error),
      () => console.log('completed')
    );
  }

  exchangePokemon(i, j) {
    const exchange = {
      wanted: {
        user: this.pokemons[i]._id,
        pokemonName: this.pokemons[i].pokemons[j].name,
        pokemonIndex: j,
        pokemonImg: this.pokemons[i].pokemons[j].sprites.front_default
      }
    };
    localStorage.setItem('exchange', JSON.stringify(exchange));
    this.modal.open(ModalWindowComponent, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext)).then(dialog => {
      dialog.onDestroy.subscribe(
        source => {
          this.TradeComponent.getRequests();
        }
      );
    });
  }

}
