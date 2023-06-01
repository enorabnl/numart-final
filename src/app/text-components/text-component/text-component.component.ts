import { Component, Input } from '@angular/core';
import { SubChapterModel } from "../../model/SubChapter.model";

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.scss']
})
export class TextComponentComponent {
  @Input() subChapter!: SubChapterModel;
}
