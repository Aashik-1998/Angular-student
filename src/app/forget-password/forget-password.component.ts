import { Component, OnInit, ɵConsole, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {StudentsService} from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  @Output() forgertPassSuccess = new EventEmitter();
  isPasswordChanged:boolean = false;
    form: FormGroup = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
  });
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private forgetPasswordService: StudentsService,
    private router :Router ){
  
    this.form = formbuilder.group({
      email :['',[Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }
    

  submit(){
    // debugger;
    this.forgetPasswordService.forgetPasswordPutRequest(this.form.value).subscribe(
      (data) => {
        // debugger;
        // console.log(data);
        this.router.navigate(['/login-again']);
        this.forgertPassSuccess.emit(!this.isPasswordChanged);
      },
      (error) => {
        console.log(error.error.error);
      }
    );
  }
  ngOnInit(): void {
  }

}
