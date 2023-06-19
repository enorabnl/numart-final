import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {ChapterComponent} from "./chapter/chapter.component";
import {ImgHomeComponent} from "./img-home/img-home.component";

const routes: Routes = [
  {path: '', redirectTo : '/chapter/:1',pathMatch:'full'},
  {path : 'chapter/:id',component : ChapterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
