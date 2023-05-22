import { Component, Input } from '@angular/core';
import {HeadCardModel} from "../model/head-card.modele";

@Component({
  selector: 'app-head-card',
  templateUrl: './head-card.component.html',
  styleUrls: ['./head-card.component.scss']
})
export class HeadCardComponent {
  @Input() card!:HeadCardModel;

}
