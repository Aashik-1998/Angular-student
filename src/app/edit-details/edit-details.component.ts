import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentsService } from '../students.service';
import { MatStepper } from '@angular/material/stepper';
import { MatDatepicker} from '@angular/material/datepicker';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss'],
})
export class EditDetailsComponent implements OnInit {
  steps=[{name:'Student Details',heading:'Student Details', content: 'Please fill the following information' },
         {name:'Verify', heading:'Verify',content: 'Please verify the Student details' },
         {name:'Summary',heading:'Summary', content: 'Successfully changed the following student details' }]
  editedDetail;
  cancelDetail;
  hiddenIcon:boolean;
  buttonDisabled:boolean = true;
  isOptional = false;

  constructor(private location: Location,private studentDetail : StudentsService) {}


  ngOnInit() {
    this.hiddenIcon = true;
    
  }
  enableContinue(event){
    this.editedDetail = event;
  }
  restoreData(event){
    this.cancelDetail = event;
    if(JSON.stringify(this.editedDetail) == JSON.stringify(this.cancelDetail)){
      // debugger;
    this.buttonDisabled = true;
    // this.studentDetail.getStudentDetails(this.cancelDetail);
    }
    else{
      // debugger
      this.buttonDisabled = false;
      if(this.editedDetail.invalid){
        this.buttonDisabled = true;
      }
      // this.studentDetail.getStudentDetails(this.editedDetail);
    }
  }  
editAgain(stepper:MatStepper){
    stepper.previous();
}
  goBack(): void {
    this.location.back();
  }
  hideEdit(){

  }
  editedValue(){
    this.studentDetail.editDetailsPostRequest(this.editedDetail).subscribe(
      (data) => {
        console.log(data);
      },
    );
  }
  changeEditedValue(){
      this.studentDetail.getStudentDetails(this.editedDetail);
  }
  changeCanceledValue(){
    this.studentDetail.getStudentDetails(this.cancelDetail);
    this.location.back();
  }
}
