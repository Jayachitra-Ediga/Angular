import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DummyApiService } from './dummy-api.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.scss'],
})
export class DummyAPIComponent implements OnInit {
  @Input() formData: any;
  @Output() newItemEvent = new EventEmitter<string>();

  employeeData: any = [];
  public errMsg: any;

  constructor(private service: DummyApiService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.service.getEmployeeData().subscribe(
      (data) => (this.employeeData = data),
      (error) => (this.errMsg = error)
    );

    // console.log(data);
  }
  // getEmployeeData() {
  //   this.employeeData = this.service.getEmployeeData();
  // }
  // updateEmployeeData(){
  //   this.service.updateEmplyoyeeData(this.employeeFormData)
  // }
  deleteEmployeeData(id: any) {
    this.service
      .deleteEmplyoyeeData(id)
      .subscribe((_data) => this.getEmployeeData());
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.router.navigate(['/reactive-form']);
  }
}
