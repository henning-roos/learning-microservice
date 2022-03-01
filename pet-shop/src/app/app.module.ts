import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrpcCoreModule, GRPC_CLIENT_FACTORY } from '@ngx-grpc/core';
import { GrpcWebClientModule, GrpcWebClientSettings } from '@ngx-grpc/grpc-web-client';
import { GRPC_PET_CLIENT_SETTINGS } from 'src/interfaces/pet.pbconf';
import { PetService } from './pet.service';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: 'http://localhost:50053' },
    }),
  ],
  providers: [
    { provide: GRPC_PET_CLIENT_SETTINGS, useValue: { host: 'http://localhost:50053' } as GrpcWebClientSettings },
    { provide: GRPC_CLIENT_FACTORY, useClass: PetService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
