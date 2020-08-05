import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";

import { Tab2PageRoutingModule } from "./tab2-routing.module";
import { NewsPageModule } from "../news/news.module";
import { NewsPage } from "../news/news.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    NewsPageModule,
  ],
  declarations: [Tab2Page, NewsPage],
})
export class Tab2PageModule {}
