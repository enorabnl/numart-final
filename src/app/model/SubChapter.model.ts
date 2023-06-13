import { SubSubChapterModel } from "./SubSubChapter.model";

export class SubChapterModel {
  constructor(
    public id: number,
    public titre: string,
    public subSubChapters: SubSubChapterModel[]
  ) {}

  // Getter pour l'attribut id
  get getId(): number {
    return this.id;
  }

  // Setter pour l'attribut id
  set setId(id: number) {
    this.id = id;
  }

  // Getter pour l'attribut titre
  get getTitre(): string {
    return this.titre;
  }

  // Setter pour l'attribut titre
  set setTitre(titre: string) {
    this.titre = titre;
  }
  // Getter pour l'attribut subChapters
  get getSubSubChapters(): SubSubChapterModel[] {
    return this.subSubChapters;
  }

  // Setter pour l'attribut subChapters
  set setSubSubChapters(subSubChapters: SubSubChapterModel[]) {
    this.subSubChapters = subSubChapters;
  }

}
