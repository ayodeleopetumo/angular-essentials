import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.starWarsService.fetchCharacters();
  }

}
