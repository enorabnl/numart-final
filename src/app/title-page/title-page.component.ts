import { Component,OnInit } from '@angular/core';
import {HeadCardModel} from "../model/head-card.modele";

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit{
  card1!:HeadCardModel;
  card2!:HeadCardModel;
  card3!:HeadCardModel;
  ngOnInit() {
    this.card1=new HeadCardModel("https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg","Card1");
    this.card2=new HeadCardModel("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg","Card2");
    this.card3=new HeadCardModel("https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=","Card3");

  }
}
