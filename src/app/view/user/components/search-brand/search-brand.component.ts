import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-brand',
  templateUrl: './search-brand.component.html',
  styleUrls: ['./search-brand.component.scss'],
})
export class SearchBrandComponent implements OnInit {
  using = [
    'New CarNew Car ( Authorised Dealer)',
    'New Car ( Parallel Importer )',
    'Used Cars',
  ];

  money = 'price';

  constructor() {}

  ngOnInit(): void {}
}
