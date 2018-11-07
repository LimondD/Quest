import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quest } from '../shared/models/quest/quest';

import { QuestService } from '../shared/services/quest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public quests: Quest[];

  constructor(http: HttpClient, questService: QuestService, @Inject('BASE_URL') baseUrl: string) {
    questService.getQuests().subscribe(result => {
      this.quests = result;
    }, error => console.error(error));
    //http.get<Quest[]>(baseUrl + 'api/Quest/GetQuests').subscribe(result => {
    //  this.quests = result;
    //}, error => console.error(error));
  }
}


