import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
  articles: any;

  constructor(private http: ApiService) {
    this.loadNews();
  }
  loadNews() {
    this.http.getNews().subscribe((news) => {
      this.articles = news;
      console.log(this.articles);
    });
  }

  ngOnInit() {}
}
