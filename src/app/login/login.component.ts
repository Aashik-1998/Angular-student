import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import {StudentsService} from '../students.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// MDB Angular Free
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() forgetPasswordSelect = new EventEmitter();
  @Output() loginSuccess = new EventEmitter();

  loginForm = new FormGroup({
    name : new FormControl(''),
    password : new FormControl(''),
  });
  // loginData = [];
  // userEmail:string = "";
  // userPassword:string = "";
  // isEmpty : boolean = false;
  forgetPassIsClicked : boolean = false;
  isCorrect:boolean = false;
  loginErrorMessage = "";
  forgetPassModal: BsModalRef;

  // @Input() toggleValue;
  // @Output() loginToggler = new EventEmitter();
  
  constructor(private loginService: StudentsService,private router :Router,private modalService: BsModalService) { }

  ngOnInit(): void {
    // this.loginService.login()
    //   .subscribe(data =>{
    //     this.loginData = data;
        // debugger;
        // console.log(this.loginData);
      // } );
  }
  // logintoggle(toggleValue): void{
  //   this.toggleValue = !this.toggleValue;
  //   this.loginToggler.emit(toggleValue);
  // }
  // close():void{
  //   this.router.navigate([''])
  // }
  submit():void{  
  this.loginService.LoginPostRequest(this.loginForm.value).subscribe(
    (data) => {
      this.isCorrect = false;
      this.loginSuccess.emit(this.loginForm.value);
    this.router.navigate([''])

      // console.log(data);
    },
    (error) => {                              
      this.loginErrorMessage = error.error.error;
      this.isCorrect = true;
      // console.log('error caught in component',error.error.error);
    }

  );
  }
  modalForgetPass() {
    this.forgetPasswordSelect.emit(!this.forgetPassIsClicked);
    // this.forgetPassModal = this.modalService.show(template);
    
  }
}
