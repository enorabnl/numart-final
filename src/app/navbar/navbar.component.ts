import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ChapterComponent} from "../chapter/chapter.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router : Router) {
  }
  navigateToChapter(chapterId: number){
    this.router.navigate(['/chapter',chapterId]);
  }


}
