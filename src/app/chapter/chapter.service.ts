import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChapterModel } from "../model/Chapter.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private chapters: ChapterModel[] = [];
  private chapter! :ChapterModel | undefined ;
  private currentChapterId!: number;

  constructor(private http: HttpClient) { }

  public getChapters(): Observable<ChapterModel[]> {
    return this.http.get<ChapterModel[]>('assets/data/chapters.json');
  }

  getChapter(id: number): Observable<ChapterModel | undefined> {
    let data = this.http.get<ChapterModel[]>('assets/data/chapters.json').pipe(
      map(chapters => chapters.find(chapter => chapter.id === id))
    );
    data.subscribe(
      (chapter: ChapterModel | undefined) => {
        this.chapter = chapter
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du chaptitre:', error);
      }
    );
    return data;
  }



}
