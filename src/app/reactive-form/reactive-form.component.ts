import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DummyApiService } from '../dummy-api/dummy-api.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  msg:string= "hello data";
  items = ['item1', 'item2', 'item3', 'item4'];
  employeeFormData: any;
  employeeForm !: FormGroup ;
// employeeForm= new FormGroup({
//   firstName: new FormControl(''),
//   lastName : new FormControl(''),
//   address: new FormGroup({
//     street: new FormControl(''),
//       city: new FormControl(''),
//       state: new FormControl(''),
//       zip: new FormControl('')
//   })
// })
  // name= new FormControl('');
  
  
  

  constructor(private fb: FormBuilder,private service:DummyApiService, private router: Router) { 
  }
 
  ngOnInit(): void {
    
    this.employeeForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      email: ['']
      // address: this.fb.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zip: ['']
      // }),
      
    });
  }
  updateFrom(){
    // this.name.setValue('Nanacy')
    this.employeeForm.patchValue({
      firstName: "NAncy",
      address:{
        street:'123 daw njmm'
      }
    })

  }
  onSubmit(){
    this.employeeFormData = this.employeeForm.value;
this.service.addEmployeeData(this.employeeFormData).subscribe(data =>{
    this.router.navigate(['/dummy-api'])

});
  }
  updateEmployeeData(){
    // this.employeeFormData = this.employeeForm.value;
    this.service.updateEmplyoyeeData(this.employeeForm.value).subscribe(data =>{
      this.router.navigate(['/dummy-api'])
    })
   
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
