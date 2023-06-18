import { Component, OnInit } from '@angular/core';
import { ChapterService } from './chapter.service';
import { ChapterModel } from '../model/Chapter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  currentChapter: ChapterModel | undefined;
  private id: number;

  constructor(private activatedRoute: ActivatedRoute, private chapterService: ChapterService) {
    this.id = 0; // Initialisez l'ID à une valeur par défaut
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id']); // Récupérez l'ID de la route
      this.loadChapter();
    });
  }
  getCurrentChapterId():number{
    return this.id;
  }

  loadChapter(): void {
    this.chapterService.getChapter(this.id).subscribe(
      (chapter: ChapterModel | undefined) => {
        this.currentChapter = chapter;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du chapitre:', error);
      }
    );
  }
}
