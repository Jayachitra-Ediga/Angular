import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id= parseInt(this.route.snapshot.paramMap.get('id')!)
    // this.departmentId= id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
     let id = parseInt(params.get('id')|| '{}' );
     this.departmentId = id;
    }
    )
  }
  goPrevious(){
    let PreviousId=this.departmentId-1;
    this.router.navigate(['/home',PreviousId])
  }
  goNext(){
    let NextId=this.departmentId+1;
    this.router.navigate(['/home',NextId])
  }
  gotoDepartments(){
    let selecedId =this.departmentId? this.departmentId : null;
    this.router.navigate(['/home',{id: selecedId, test:'testvalue'}])
  }
}
