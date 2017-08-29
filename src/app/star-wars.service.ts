import { LoggerService } from 'app/logger.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import { Http, Response } from '@angular/http';

@Injectable()
export class StarWarsService {
  private characters = [];
  charactersChanged = new Subject<void>();

  constructor(
    private starWarsLogger: LoggerService,
    private http: Http
  ) {}

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people')
      .map((response: Response) => {
        const dataReceived = response.json();
        return dataReceived.results.map((characterName) => ({ name: characterName.name, side: ''}));
      })
      .subscribe((data) => {
        this.characters = data;
        this.charactersChanged.next();
      });
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return [...this.characters];
    }

    return this.characters.filter((character) => {
      return character.side === chosenList;
    });
  }

  onSideChosen(characterInfo) {
    const position = this.characters.findIndex((character) => {
      return character.name === characterInfo.name;
    });
    this.characters[position].side = characterInfo.side;
    this.charactersChanged.next();
    this.starWarsLogger.starWarLogger(`Changed side of ${characterInfo.name} to the ${characterInfo.side} side`);
  }

  addCharacter({name, side}) {
    const position = this.characters.findIndex((character) => {
      return character.name === name;
    });
    if (position !== -1) {
      return
    };
    this.characters.push({name, side});
  }

}
