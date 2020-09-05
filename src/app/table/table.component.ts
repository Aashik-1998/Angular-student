import {Component, OnInit, Output, EventEmitter} from '@angular/core';
// import {STUDENTS} from '../../table-list';
import {Student} from '../../table-list'
import {StudentsService} from '../students.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() displayDetails = new EventEmitter();
  students = [];
 // students = STUDENTS;
 selectedStudent : Student;
  
  constructor(private studentDetail : StudentsService,
              private router :Router) { }

  ngOnInit(): void {
    this.studentDetail.getDetails()
      .subscribe(data =>{
        this.students = data;
        // console.log(this.students);
      } );
  }
  
  // onSelect(event){
  //   this.displayDetails.emit(event);
  // }
  onSelect(student): void {
    // this.studentDetail.getStudentId(student.Id);
    this.studentDetail.getStudentDetails(student);
    this.router.navigate(['/details']);
  }

}
