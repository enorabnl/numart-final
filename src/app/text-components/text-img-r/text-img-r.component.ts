import {Component, Input} from '@angular/core';
import {SubSubChapterModel} from "../../model/SubSubChapter.model";

@Component({
  selector: 'app-text-img-r',
  templateUrl: './text-img-r.component.html',
  styleUrls: ['./text-img-r.component.scss']
})
export class TextImgRComponent {
  @Input() subSubChapter!: SubSubChapterModel;
}
