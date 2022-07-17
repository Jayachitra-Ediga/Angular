import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teplate-form',
  templateUrl: './teplate-form.component.html',
  styleUrls: ['./teplate-form.component.scss']
})
export class TeplateFormComponent implements OnInit {
  model: any = {};
  SendRequest: any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    f.resetForm();;

  
  }
}
