import {Component, Input} from '@angular/core';
import {SubSubChapterModel} from "../../model/SubSubChapter.model";

@Component({
  selector: 'app-text-short',
  templateUrl: './text-short.component.html',
  styleUrls: ['./text-short.component.scss']
})
export class TextShortComponent {
  @Input() subSubChapter!: SubSubChapterModel;
}
