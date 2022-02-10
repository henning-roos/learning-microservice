import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetsComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
