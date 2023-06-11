import { Component, Input } from '@angular/core';
import {ChapterService} from "./chapter.service";
import {ChapterModel} from "../model/Chapter.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent {
  @Input() currentChapter: ChapterModel|undefined;
  private id:number;
  constructor(private activatedRoute: ActivatedRoute, private chapterService :ChapterService) {
    this.id =parseInt(this.activatedRoute.snapshot.paramMap.get('id')||'0');
  }

  ngOnInit(): void {

    this.loadChapter();
  }
  loadChapter(): void {
    this.chapterService.getChapter(this.id).subscribe(
      (chapter: ChapterModel | undefined) => {


        this.currentChapter = chapter;

      },
      (error: any) => {
        console.error('Erreur lors de la récupération du chaptitre:', error);
      }
    );
  }
}
