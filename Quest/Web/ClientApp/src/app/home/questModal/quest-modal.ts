import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { QuestService } from '../../shared/services/quest.service';

@Component({
  selector: 'quest-modal',
  templateUrl: './quest-modal.html'
})
export class QuestModal implements OnInit {
  @Input() questId: string;
  closeResult: string;

  constructor(private modalService: NgbModal, private questService: QuestService) {}

  ngOnInit() {

    alert("onInit QuestModal " + this.questId);
  }


  open(content) {
    this.questService.getQuestDetails(this.questId).subscribe(result => {
      //this.quests = result;
      this.modalService.open(content, { ariaLabelledBy: 'quest-modal-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }, error => console.error(error));
    //this.modalService.open(content, {ariaLabelledBy: 'quest-modal-title'}).result.then((result) => {
    //  this.closeResult = `Closed with: ${result}`;
    //}, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //});
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
