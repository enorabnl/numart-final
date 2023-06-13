import {Component, Input} from '@angular/core';
import {SubSubChapterModel} from "../../model/SubSubChapter.model";

@Component({
  selector: 'app-text-img-l',
  templateUrl: './text-img-l.component.html',
  styleUrls: ['./text-img-l.component.scss']
})
export class TextImgLComponent {
  @Input() subSubChapter!: SubSubChapterModel;
}
