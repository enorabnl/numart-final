import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TextShortComponent } from './text-components/text-short/text-short.component';
import { TextImgRComponent } from './text-components/text-img-r/text-img-r.component';
import { TextImgLComponent } from './text-components/text-img-l/text-img-l.component';
import { ImgComponent } from './text-components/img/img.component';
import { TextLongComponent } from './text-components/text-long/text-long.component';
import { ChapterComponent } from './chapter/chapter.component';
import {ChapterService} from "./chapter/chapter.service";
import { HttpClientModule } from '@angular/common/http';
import { TextComponentComponent } from './text-components/text-component/text-component.component';
import { SketchComponent } from './text-components/sketch/sketch.component';
import { ImgHomeComponent } from './img-home/img-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    TextShortComponent,
    TextImgRComponent,
    TextImgLComponent,
    ImgComponent,
    TextLongComponent,
    ChapterComponent,
    TextComponentComponent,
    SketchComponent,
    ImgHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ChapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
