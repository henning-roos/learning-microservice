import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pet: Pet = {
    id: 1,
    name: "Pricken"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
