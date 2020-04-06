import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("agGrid", {static:false }) agGrid: AgGridAngular;
  title = 'agrid';

  columnDefs = [
    { headerName: "Name", field: "name"  , sortable: true, filter:true, checkboxSelection: true },
    { headerName: "User Name", field: "username", sortable: true, filter:true },
    { headerName: "Email", field: "email", sortable: true, filter:true }
  ];
  rowData: any;

constructor(private http: HttpClient) {

}

ngOnInit(){
  this.rowData = this.http.get("https://jsonplaceholder.typicode.com/users");
}

getSelectedRows() {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map(node => node.data);
  const selectedDataStringPresentation = selectedData.map(node => node.name + ' ' + node.model).join(", ");
  alert(`Selected Nodes: ${selectedDataStringPresentation}`);
}

  // rowData = [
  //   { name: "Toyota", username: "Celica", email: "tc@y.com" },
  //   { name: "Ford", username: "Mondeo", email: "bm@g.com" },
  //   { name: "Porche", username: "Boxter", email: "nu@s.com" }
  // ];
}
