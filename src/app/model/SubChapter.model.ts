import { SubSubChapterModel } from "./SubSubChapter.model";

export class SubChapterModel {
  constructor(
    public titre: string,
    public subSubChapters: SubSubChapterModel[]
  ) {}


}
