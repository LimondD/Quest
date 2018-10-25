import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public quests: Quests[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Quests[]>(baseUrl + 'api/Quest/GetQuests').subscribe(result => {
      this.quests = result;
    }, error => console.error(error));
  }
}

interface Quests {
  id: string;
  name: string;
  shortDescription: string;
  imageName: number;
}
