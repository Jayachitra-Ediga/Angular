import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectedId: any;

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "React"},
    {"id": 3, "name": "NodeJs"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id')|| '{}' );
      this.selectedId = id;
     }
     )  }
onSelect(department:any){
  this.router.navigate(['/home',department.id])
  return 'this is Department'


}
isSelected(department: any){
return department.id === this.selectedId

}
}
