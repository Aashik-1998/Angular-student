import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import {Student} from 'src/table-list';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {StudentsService} from '../students.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  // @Input() student ;
  students;
  // @Output() public displayDetails = new EventEmitter<string>();\
  @Output() editAgainButton = new EventEmitter();
  // @Output() hideEditButton = new EventEmitter();
  @Input() hiddenEditIcon : boolean;
  constructor(
     private route :ActivatedRoute,
     private location: Location,
     private studentService : StudentsService,
     private router :Router
     ) 
     { }

  ngOnInit(): void {
    // this.studentService.getDetails()
    // .subscribe(data =>{
    //   this.students = data;
    // } );
    this.studentService.serviceRecordProvider$.subscribe(  result => { 
      this.students = result;
      })
      // this.hideEditButton.emit(true);
    // const regNo = this.route.snapshot.params.RegestrationNo;
  }


  goBack(): void {
    this.location.back();
  }
  editDetails():void{
    this.editAgainButton.emit(true);
    this.router.navigate(['/edit-details']);
  }
  // onSelect(event){
  //   this.displayDetails.emit(event);
  // }

}
