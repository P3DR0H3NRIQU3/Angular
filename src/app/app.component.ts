import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  logo="../assets/logo-pokemon.png";
  imgProfile: string = "../assets/fotoPerfil.jpg";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon [] = [
    new Pokemon (1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu','https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg'),
    new Pokemon (2, 'Bulbasaur', ['Grama', 'Veneno'], 'Esse é o Bulbasaur','https://a-static.mlcdn.com.br/450x450/jibbitz-pokemon-bulbasaur-unico-unico/crocsbrasil/226044/0cb45a1cb9237bacefb0b5b6baad7923.jpeg'),
    new Pokemon (1, 'Ivysaur',['Fogo'], 'Esse é o Ivysaur', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'),
    new Pokemon (2, 'Geodude', ['Pedra'], 'Esse é o Geodude', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png'),
  ];
  selectedPokemon?: Pokemon;
    showDetails (pokemon: Pokemon) { 
      this.selectedPokemon = pokemon;
    }

    closeModal() {
    this.selectedPokemon = undefined; 
    } 
    filterValue: string = '';
    filteredPokemons(): Pokemon[] {
      if (!this.filterValue) {
        return this.pokemons;
      } 
      return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes (this.filterValue.toLowerCase()));
    }
}
