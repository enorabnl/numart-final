import {Component, Input} from '@angular/core';
import {SubSubChapterModel} from "../../model/SubSubChapter.model";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() subSubChapter!: SubSubChapterModel;}
