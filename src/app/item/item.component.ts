import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;

  constructor(private starWars: StarWarsService) { }

  ngOnInit() {
  }

  onAssign(side) {
    this.starWars.onSideChosen({name: this.character.name, side: side});
  }

}
