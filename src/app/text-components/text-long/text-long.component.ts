import { Component, Input, OnInit } from '@angular/core';
import {SubSubChapterModel} from "../../model/SubSubChapter.model";

@Component({
  selector: 'app-text-long',
  templateUrl: './text-long.component.html',
  styleUrls: ['./text-long.component.scss']
})
export class TextLongComponent implements OnInit {

  partie1!: string;
  partie2!: string;
  partie3!: string;
  @Input() subSubChapter!: SubSubChapterModel;
  ngOnInit(): void {
    this.splitTextIntoThreeParts();
  }

  splitTextIntoThreeParts() {
    const text = this.subSubChapter.description;
    const words = text.split(' '); // Séparation du texte en mots

    const partLength = Math.floor(words.length / 3); // Nombre de mots par partie

    // Construction des trois parties en utilisant le nombre de mots souhaité
    this.partie1 = words.slice(0, partLength).join(' ');
    this.partie2 = words.slice(partLength, partLength * 2).join(' ');
    this.partie3 = words.slice(partLength * 2).join(' ');
  }

}
