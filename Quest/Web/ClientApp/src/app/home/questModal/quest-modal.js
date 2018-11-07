"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
let QuestModal = class QuestModal {
    constructor(modalService, questService) {
        this.modalService = modalService;
        this.questService = questService;
    }
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
    getDismissReason(reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
__decorate([
    core_1.Input()
], QuestModal.prototype, "questId", void 0);
QuestModal = __decorate([
    core_1.Component({
        selector: 'quest-modal',
        templateUrl: './quest-modal.html'
    })
], QuestModal);
exports.QuestModal = QuestModal;
//# sourceMappingURL=quest-modal.js.map