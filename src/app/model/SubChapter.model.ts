export class SubChapterModel {
  constructor(
    private id: number,
    private titre: string,
    private imageURL: string,
    private description: string,
    private type: string
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

  // Getter pour l'attribut imageURL
  get getImageURL(): string {
    return this.imageURL;
  }

  // Setter pour l'attribut imageURL
  set setImageURL(imageURL: string) {
    this.imageURL = imageURL;
  }

  // Getter pour l'attribut description
  get getDescription(): string {
    return this.description;
  }

  // Setter pour l'attribut description
  set setDescription(description: string) {
    this.description = description;
  }

  // Getter pour l'attribut type
  get getType(): string {
    return this.type;
  }

  // Setter pour l'attribut type
  set setType(type: string) {
    this.type = type;
  }
}
