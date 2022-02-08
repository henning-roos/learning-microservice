import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PETS } from '../mock-pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets = PETS;

  constructor() { }

  ngOnInit(): void {
  }

}
