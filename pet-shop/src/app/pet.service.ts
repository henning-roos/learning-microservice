import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';
import { PETS } from './mock-pets';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private messageService: MessageService) { }

  getPets(): Observable<Pet[]> {
    const pets = of(PETS);
    this.messageService.add('PetService: fetched pets');
    return pets;
  }

  getPet(id: number): Observable<Pet> {
    // For now, assume that a pet with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const pet = PETS.find(h => h.id === id)!;
    this.messageService.add(`PetService: fetched pet with id: ${id}`);
    return of(pet);
  }

}
