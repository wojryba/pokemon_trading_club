import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.css']
})
export class MyPokemonsComponent implements OnInit {
  form: FormGroup;
  disable = false;
  pokemons: any;

  constructor(private _flashMessagesService: FlashMessagesService, private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });

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

  addPokemon() {
    this.disable = true;
    this.api.addPokemon(this.form.value).subscribe(
      response => {
        const pokemon = JSON.parse(response['_body']);
        if (pokemon.statusCode === 404) {
          this._flashMessagesService.show('Wrong Pokemon Name!', { cssClass: 'alert-danger' });
        }
        this.pokemons = pokemon;
      },
      error => {

      },
      () => {
        console.log('completed')
        this.disable = false;
        this.form.reset();
      }
    );
  }

  deletePokemon(i) {
    this.api.deletePokemon(i).subscribe(
      response => {
        this.pokemons = JSON.parse(response['_body']);
      },
      error => console.log(error),
      () => console.log('completed')
    )
  }

}
