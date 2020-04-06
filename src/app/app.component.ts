import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agrid';

  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];
  rowData = [
    { make: "Toyota", model: "Celica", price: "32000" },
    { make: "Ford", model: "Mondeo", price: "29000" },
    { make: "Porche", model: "Boxter", price: "45000" }
  ];
}
