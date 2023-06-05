import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ChapterComponent} from "../chapter/chapter.component";
import {ChapterService} from "../chapter/chapter.service";
import {ChapterModel} from "../model/Chapter.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  chapters : ChapterModel[]=[];
  constructor(private chapterService:ChapterService) {}
  ngOnInit():void{
    this.loadChapters();
  }
  loadChapters():void{
    this.chapterService.getChapters().subscribe(
      (chapters: ChapterModel[])=>{
        this.chapters=chapters;
      },
      (error:any)=>{
        console.error('Erreur lors de la récupération des chapitres:',error);
      }
    );
  }

  onTitleClick(chapterId:number):void{
    this.chapterService.getChapter(chapterId).subscribe(
      (chapter)=>{
        //Mettre à jour chapitre actuel
      },
      (error)=>{
        console.error('Erreur lors du chargement du chapitre :',error);
      }
    )
  }
  getChapters():ChapterModel[]{
    return this.chapters;
  }


}
