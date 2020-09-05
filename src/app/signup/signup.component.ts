import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {StudentsService} from '../students.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() loginSelect = new EventEmitter();
  @Output() signUpSuccess = new EventEmitter();

  loginClicked : boolean = false;
  roles: any = ['student','admin']
  errorMsg:string;
  isCorrect:boolean = true;
  isSignedUp:boolean = false;
  signupForm = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    name : new FormControl('',[Validators.required]),
    role : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    termsAndCondition: new FormControl('',[Validators.required])
  });

  constructor(private signUpService : StudentsService) { }

  ngOnInit(): void {
  }
submit():void{
  this.signUpService.signUpPostRequest(this.signupForm.value).subscribe(
    (data) => {
      this.isCorrect = false;
      this.signUpSuccess.emit(!this.isSignedUp);

      console.log(data);
    },
    (error) => {
      this.errorMsg = error.error.error;
      console.log(error.error.error);
    }
  );
}
modalLogin() {
  this.loginSelect.emit(!this.loginClicked);
  // this.forgetPassModal = this.modalService.show(template);
}

}
