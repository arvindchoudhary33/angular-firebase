import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
class GroceryListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

@Component({
  selector: 'app-food-items',
  styleUrls: ['./grocery-list.component.css'],
  template: `
    <div class="nestedGroceryListContainer">am nested component one</div>
  `,
})
class FoodItemsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
export { GroceryListComponent, FoodItemsComponent };
