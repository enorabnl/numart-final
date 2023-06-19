import {Component, Input} from '@angular/core';
import {SubSubChapterModel} from "../../model/SubSubChapter.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent {
  @Input() subSubChapter!: SubSubChapterModel;
  constructor(public sanitizer :DomSanitizer) {
  }
  getSafeURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.subSubChapter.URL);
  }
}
