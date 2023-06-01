import {Component, Input} from '@angular/core';
import {SubChapterModel} from "../../model/SubChapter.model";

@Component({
  selector: 'app-text-short',
  templateUrl: './text-short.component.html',
  styleUrls: ['./text-short.component.scss']
})
export class TextShortComponent {
  @Input() subChapter!: SubChapterModel;
}
