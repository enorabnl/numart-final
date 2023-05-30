import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadCardComponent } from './head-card/head-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { ArtFormComponent } from './art-form/art-form.component';
import { TextShortComponent } from './text-components/text-short/text-short.component';
import { TextImgRComponent } from './text-components/text-img-r/text-img-r.component';
import { TextImgLComponent } from './text-components/text-img-l/text-img-l.component';
import { ImgComponent } from './text-components/img/img.component';
import { ImgCarousselComponent } from './text-components/img-caroussel/img-caroussel.component';
import { TextLongComponent } from './text-components/text-long/text-long.component';
import { ChapterComponent } from './chapter/chapter.component';
import {ChapterService} from "./chapter/chapter.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadCardComponent,
    HeaderComponent,
    FooterComponent,
    TitlePageComponent,
    ArtFormComponent,
    TextShortComponent,
    TextImgRComponent,
    TextImgLComponent,
    ImgComponent,
    ImgCarousselComponent,
    TextLongComponent,
    ChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ChapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
