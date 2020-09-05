import { Component,TemplateRef } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modalRef: BsModalRef;
  value;
  toggle;
  title = 'student-details';
  onSelect(event){
    this.value = event;
    console.log(event)
  }
  logintoggle(event){
    this.toggle = event;
  }
  // constructor(private modalService: BsModalService) {}

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
}