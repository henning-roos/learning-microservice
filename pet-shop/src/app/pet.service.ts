import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';
import { PETS } from './mock-pets';
import { MessageService } from './message.service';
import { PetClient } from '../interfaces/pet.pbsc';
import { PetSoundRequest } from '../interfaces/pet.pb';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  sound: any;

  constructor(
    private messageService: MessageService,
    private client: PetClient
  ) { }

  getPetSound() {
    const req = new PetSoundRequest();
    req.petType = "cat"
    const sub = this.client.getPetSound(req).subscribe(res => console.log(res));
    setTimeout(() => sub.unsubscribe(), 1000); // this closes connection
  }

  getPets(): Observable<Pet[]> {
    this.getPetSound()
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
