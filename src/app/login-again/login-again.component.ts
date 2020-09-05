import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-again',
  templateUrl: './login-again.component.html',
  styleUrls: ['./login-again.component.scss']
})
export class LoginAgainComponent implements OnInit {
  @Output() loginSelect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  modalLogin() {
    this.loginSelect.emit(false);
    // this.forgetPassModal = this.modalService.show(template);
  }
}
