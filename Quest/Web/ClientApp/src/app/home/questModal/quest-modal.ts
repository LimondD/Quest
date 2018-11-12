import { Component, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { QuestService } from '../../shared/services/quest.service';

import { QuestDetail } from '../../shared/models/quest/questDetail';

@Component({
  selector: 'quest-modal',
  templateUrl: './quest-modal.html'
})
export class QuestModal {
  public quest: QuestDetail;
  @Input() questId: string;
  closeResult: string;

  constructor(private modalService: NgbModal, private questService: QuestService) {}

  open(content) {
    this.questService.getQuestDetails(this.questId).subscribe(result => {
      this.quest = result;
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
