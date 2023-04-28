import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
   students = [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Smith', age: 21 },
    { name: 'Mark Johnson', age: 22 },
    { name: 'Anna Lee', age: 23 },
    { name: 'Mike Brown', age: 24 },
  ];
}
