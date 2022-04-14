
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPet();
  }

  getPet(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }

  goBack(): void {
    this.location.back();
  }
}
