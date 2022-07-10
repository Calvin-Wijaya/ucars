import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-brand',
  templateUrl: './search-brand.component.html',
  styleUrls: ['./search-brand.component.scss'],
})
export class SearchBrandComponent implements OnInit {
  using = [
    'New Car (Authorised Dealer)',
    'New Car (Parallel Importer)',
    'Used Cars',
  ];

  money = 'price';

  toppings = new FormControl('');
  vehicleList: string[] = [
    'Bus',
    'Lorry',
    'SUV',
    'Classic Car',
    'MVP',
    'Truc',
    'Couple',
    'Pickup',
    'Van (Passenger)',
    'Convertible',
    'Sedan',
    'Van (Goods)',
    'Hatchback',
    'Sport Car',
    'Wagon',
  ];

  constructor() {}

  ngOnInit(): void {}
}
