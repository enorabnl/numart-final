import { Component, Input } from '@angular/core';
import {SubSubChapterModel} from "../../model/SubSubChapter.model";

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.scss']
})
export class TextComponentComponent {
  @Input() subSubChapter!: SubSubChapterModel;

}
