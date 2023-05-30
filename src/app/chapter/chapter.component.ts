import { Component, OnInit } from '@angular/core';
import {ChapterService} from "./chapter.service";
import {ChapterModel} from "../model/Chapter.model";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent {

  public chapter! :ChapterModel | undefined
  public chapters! :ChapterModel[] | undefined
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
        console.log(this.chapter?.getId);// Vérifiez la sortie dans la console du navigateur
        console.log(this.chapter?.getTitre);// Vérifiez la sortie dans la console du navigateur
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du chaptitre:', error);
      }
    );
    this.chapterService.getChapterbyId(1).subscribe(
      (chapter: ChapterModel[]) => {
        this.chapters = chapter;
        console.log(this.chapters);// Vérifiez la sortie dans la console du navigateur
        console.log(typeof this.chapters);// Vérifiez la sortie dans la console du navigateur
        console.log(this.chapters[0].getId);// Vérifiez la sortie dans la console du navigateur
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du chaptitre:', error);
      }
    );
  }
  loadChapter2(): void {
    this.chapterService.getChapter(1).pipe(
      map(chapter => chapter as ChapterModel) // Conversion en ChapterModel
    ).subscribe(
      (chapter: ChapterModel | undefined) => {
        this.chapter = chapter;
        console.log(this.chapter);
        console.log(this.chapter?.getId);
        console.log(this.chapter?.getTitre);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des verbes:', error);
      }
    );
  }
}
