import { Component, OnInit } from '@angular/core';
import { ChapterService } from './chapter.service';
import { ChapterModel } from '../model/Chapter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})export class ChapterComponent implements OnInit {
  currentChapter: ChapterModel | undefined;

  constructor(private activatedRoute: ActivatedRoute, private chapterService: ChapterService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.chapterService.setCurrentChapterId(id); // Définir l'ID du chapitre actuel
      this.loadChapter();
    });
  }

  loadChapter(): void {
    const currentChapterId = this.chapterService.getCurrentChapterId();
    this.chapterService.getChapter(currentChapterId).subscribe(
      (chapter: ChapterModel | undefined) => {
        this.currentChapter = chapter;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du chapitre:', error);
      }
    );
  }
}
