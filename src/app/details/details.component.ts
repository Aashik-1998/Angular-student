import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  students;
  @Output() editAgainButton = new EventEmitter();
  @Input() hiddenEditIcon ;
  constructor(private studentService : StudentsService,private router :Router){}


  ngOnInit(): void {
    this.studentService.serviceRecordProvider$.subscribe(  result => { 
      this.students = result;
      })
  }
  editDetails():void{
    this.editAgainButton.emit(true);
    this.router.navigate(['/edit-details']);
  }

}
