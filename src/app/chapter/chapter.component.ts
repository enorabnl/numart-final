import { Component, OnInit } from '@angular/core';
import {ChapterService} from "./chapter.service";
import {ChapterModel} from "../model/Chapter.model";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent {

  public chapter! :ChapterModel| undefined
  public chapters! :ChapterModel[]| undefined
  constructor(private chapterService :ChapterService) {
  }

  ngOnInit(): void {
    this.loadChapter();
  }

  loadChapter(): void {
    this.chapterService.getChapter(1).subscribe(
      (chapter: ChapterModel | undefined) => {
        this.chapter = chapter;
        console.log(this.chapter);// Vérifiez la sortie dans la console du navigateur
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des verbes:', error);
      }
    );
    this.chapterService.getChapters().subscribe(
      (chapters: ChapterModel[] | undefined) => {
        this.chapters = chapters;
        console.log(this.chapters);// Vérifiez la sortie dans la console du navigateur
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des verbes:', error);
      }
    );
  }
}
