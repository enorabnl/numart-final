import { SubChapterModel } from "./SubChapter.model";

export class ChapterModel {
  constructor(public id: number, public titre: string, public subChapters: SubChapterModel[]) {}

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
  get getSubChapters(): SubChapterModel[] {
    return this.subChapters;
  }

  // Setter pour l'attribut subChapters
  set setSubChapters(subChapters: SubChapterModel[]) {
    this.subChapters = subChapters;
  }
}
