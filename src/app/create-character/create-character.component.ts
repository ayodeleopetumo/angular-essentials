import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];
  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    // console.log(form.value);
    if (form.invalid) {
      return;
    }
    this.starWarsService.addCharacter(form.value);
  }

}
