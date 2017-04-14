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
    this.disable = false;
  }

  getMyPokemons() {
    console.log('traded');
    this.api.getMyPokemons().subscribe(
      response => {
        this.pokemons = JSON.parse(response['_body']);
        console.log(this.pokemons)
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
        this.pokemons = pokemon;
      },
      error => {
        console.log(error);
        this._flashMessagesService.show('Wrong Pokemon Name!', { cssClass: 'alert-danger' });
        this.disable = false;
        this.form.reset();
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
