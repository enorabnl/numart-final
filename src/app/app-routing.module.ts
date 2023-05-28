import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {ChapterComponent} from "./chapter/chapter.component";

const routes: Routes = [
  {path : 'chapter/:id',component : ChapterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
