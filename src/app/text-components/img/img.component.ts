import {Component, Input} from '@angular/core';
import {SubChapterModel} from "../../model/SubChapter.model";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() subChapter!: SubChapterModel;

}
