import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChapterModel } from "../model/Chapter.model";
import { map, find } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private chapters: ChapterModel[] = [];
  private chapter! :ChapterModel | undefined ;

  constructor(private http: HttpClient) { }

  getChapters(): Observable<ChapterModel[]> {
    // Charger les données du fichier JSON en utilisant HttpClient
    //return this.http.get<ChapterModel[]>('assets/data/chapters.json');
    return this.http.get<ChapterModel[]>('assets/data/chapters.json').pipe(
      map(chapters => chapters)
    );
  }

  getChapter(id: number): Observable<ChapterModel | undefined> {
    // Charger les données du fichier JSON en utilisant HttpClient

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

  getChapterbyId(id: number | undefined){
    return this.http.get<ChapterModel[]>('assets/data/chapters.json').pipe(map((produits: ChapterModel[]) =>
      produits.filter((unProduit: ChapterModel) => unProduit.id === 1)))
  }

}
