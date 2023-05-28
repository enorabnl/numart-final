import { Component } from '@angular/core';
import {ChapterService} from "./chapter.service";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent {
  constructor(service :ChapterService) {
  }
}
