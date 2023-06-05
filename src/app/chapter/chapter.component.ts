import { Component, Input } from '@angular/core';
import {ChapterService} from "./chapter.service";
import {ChapterModel} from "../model/Chapter.model";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent {
  @Input() currentChapter: ChapterModel|undefined;
  constructor(private chapterService :ChapterService) {
  }

  ngOnInit(): void {
    this.loadChapter();
  }
  loadChapter(): void {
    this.chapterService.getChapter(2).subscribe(
      (chapter: ChapterModel | undefined) => {
        this.currentChapter = chapter;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du chaptitre:', error);
      }
    );
  }
}
