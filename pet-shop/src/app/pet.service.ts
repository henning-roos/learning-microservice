import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';
import { PETS } from './mock-pets';
import { MessageService } from './message.service';
import { PetClient } from 'src/interfaces/pet.pbsc';
import { GRPC_PET_CLIENT_SETTINGS } from 'src/interfaces/pet.pbconf';
import { GrpcHandler, GRPC_CLIENT_FACTORY } from '@ngx-grpc/core';
import { PetSoundRequest, PetSoundResponse } from 'src/interfaces/pet.pb';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private messageService: MessageService,
    private handler: GrpcHandler
  ) { }

  const client = new PetClient();

  getPetSound(): Observable<PetSoundResponse> {
    var sounds = of(PetSoundResponse);
    this.client.getPetSound(new PetSoundRequest()).subscribe(sounds => this.sounds = sounds);;
    //TODO: how to return stuff to component?
  }

  //Copied!
  // const client = new UsersClient(environment.rpcHost);
  //   const params = new CMSQuery();
  //   client.getUsers(params).on('data', (message: User) => {
  //     const obj = message.toObject();
  //     console.log(`${obj.name} received`);
  //     this.users.push(obj);
  //   }).on('end', () => {
  //     console.log('End of request');
  //   });

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
