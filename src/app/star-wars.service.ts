import { LoggerService } from 'app/logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {

  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
    { name: 'Anakin Skywalker', side: '' },
    { name: 'Han Solo', side: '' },
    { name: 'Darth Maul', side: '' },
    { name: 'Count Dooku', side: '' }
  ];

  constructor(private starWarsLogger: LoggerService) {}

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
    this.starWarsLogger.starWarLogger(`Changed side of ${characterInfo.name} to the ${characterInfo.side} side`);
  }

}
