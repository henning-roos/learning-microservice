import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pet[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPets();
  }

  selectedPet?: Pet;
  onSelect(pet: Pet): void {
    this.messageService.add(`PetComponent: Selected pet: ${pet.name}`);
    this.selectedPet = pet;
  }

  getPets(): void {
  }

}
