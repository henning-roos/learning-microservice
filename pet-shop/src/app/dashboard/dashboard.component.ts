import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets: Pet[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
  }

}

