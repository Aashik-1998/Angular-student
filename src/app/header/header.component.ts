import { Component, OnInit,TemplateRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modal: BsModalRef;
  // modalSignup: BsModalRef;
  // modalForgetPass: BsModalRef;
  showForgetPass:boolean;
  showLogin:boolean = false;
  showSignUp:boolean = false;
  isLoggedIn:boolean = false;
  user:string = "";
  constructor(private router :Router,private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openLoginModal(event,template: TemplateRef<any>) {
    
   if(!this.showLogin && event){
    this.showLogin = !this.showLogin;
    this.showSignUp = false;
    this.showForgetPass = false;
    this.modal = this.modalService.show(template);
   }
   else{
    this.modal.hide();
    this.showLogin = !this.showLogin;
   }
  }

  openSignUpModal(template: TemplateRef<any>) {
    if(!this.showSignUp){
      this.showSignUp = !this.showSignUp;
      this.showLogin = false;
      this.showForgetPass = false;
      this.modal = this.modalService.show(template);
    }
    else{
      this.modal.hide();
      this.showSignUp = !this.showSignUp;
    }
  }

  openForgetPassModal(event, template: TemplateRef<any>){
    if(!this.showForgetPass){
      this.showForgetPass = event;
      this.showLogin = false;
      this.showSignUp = false;
      this.modal = this.modalService.show(template);
    }
    else{
      this.modal.hide();
      this.showForgetPass = !this.showForgetPass;
    }
  }
  closePopup():void {
    this.modal.hide();
  }
  loggedin(event){
    this.modal.hide();
    this.isLoggedIn = true;
    this.user = event.name;
  }
  signedup(event){
    this.modal.hide();
  }
  passwordChanged(event){
    this.modal.hide();
  }
}
