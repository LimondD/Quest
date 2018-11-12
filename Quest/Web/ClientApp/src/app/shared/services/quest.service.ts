import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { ConfigService } from '../utils/config.service';

import { Quest } from '../models/quest/quest';
import { QuestDetail } from '../models/quest/questDetail';


@Injectable()

export class QuestService extends BaseService {
  baseUrl: string = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI() + '/Quest';
  }

  getQuests() {
    return this.http.get<Quest[]>(this.baseUrl + '/GetQuests');
  }

  getQuestDetails(id: string) {
    return this.http.get<QuestDetail>(this.baseUrl + '/GetQuestDetails/' + id );
  }
}
