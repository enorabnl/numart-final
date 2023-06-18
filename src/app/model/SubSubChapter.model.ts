export class SubSubChapterModel {
  constructor(
    public id: number,
    public imageURL: string,
    public sketchURL:string,
    public sketchChemin:string,
    public description: string,
    public type: string
  ) {}

  // Getter pour l'attribut id
  get getId(): number {
    return this.id;
  }

  // Setter pour l'attribut id
  set setId(id: number) {
    this.id = id;
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
  //Getter pour l'attribut sketchURL
  get getSketchURL(){
    return this.sketchURL;
  }
  // Setter pour l'attribut sketchURL
  set setSketchURL(sketchURL: string) {
    this.sketchURL = sketchURL;
  }
  //Getter pour l'attribut sketchChemin
  get getSketchChemin(){
    return this.sketchChemin;
  }
  // Setter pour l'attribut sketchChemin
  set setsketchChemin(sketchChemin: string) {
    this.sketchChemin = sketchChemin;
  }
}
