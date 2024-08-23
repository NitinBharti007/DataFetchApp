import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  data: any[] = [];
  error: string | null = null;
  sortAscId = true;
  isNavbarOpen = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.error = 'Failed to load data. Please try again later.';
      }
    );
  }

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  sortDataById(): void {
    this.sortAscId = !this.sortAscId;
    this.data.sort((a, b) => (this.sortAscId ? +a.id - +b.id : +b.id - +a.id));
  }
}
