import {subChapterModel} from "./subChapter.model";

export class ChapterModel {
  constructor(private id: number,
              private titre: string,
              private subChapters : subChapterModel[]) {
  }
}
