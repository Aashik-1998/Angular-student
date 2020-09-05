import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
// import {MatCalendar} from '@angular/material/datepicker';

@Component({
  selector: 'app-stepper-edit',
  templateUrl: './stepper-edit.component.html',
  styleUrls: ['./stepper-edit.component.scss']
})
export class StepperEditComponent implements OnInit {
  stepperEditForm = new FormGroup({
    Name : new FormControl(''),
    Class : new FormControl(''),
    Division : new FormControl(''),
    Rank : new FormControl(''),
    Fee : new FormControl(''),
    DueDate : new FormControl(''),
    ContactNo : new FormControl(''),
    Address : new FormControl(''),
  });
  students;
  RegestrationNo;
  id;
  model;
  @Output() continueButtonEnable = new EventEmitter();
  @Output() restorePreviousData = new EventEmitter();
  
  constructor(private studentService : StudentsService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentService.serviceRecordProvider$.subscribe(  result => { 
      this.students = result;
      })
      this.stepperEditForm = this.formbuilder.group({
        Id:[this.students.Id],
        RegestrationNo:[this.students.RegestrationNo],
        Name :[this.students.Name,[Validators.required]],
        Class: [this.students.Class, [Validators.required]],
        Division: [this.students.Division, [Validators.required]],
        Rank: [this.students.Rank, [Validators.required]],
        Fee: [this.students.Fee, [Validators.required]],
        DueDate: [this.students.DueDate, [Validators.required]],
        ContactNo: [this.students.ContactNo, [Validators.required]],
        Address: [this.students.Address, [Validators.required]]
      })
    }
    valueChanged(){
      // if(JSON.stringify(this.students) !== JSON.stringify(this.stepperEditForm.value)){
        this.continueButtonEnable.emit(this.stepperEditForm.value);
        this.restorePreviousData.emit(this.students);
      // }
  }
}
