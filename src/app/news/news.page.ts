import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
  data: any;

  constructor(private http: ApiService) {
    this.loadNews();
  }
  loadNews() {
    this.http.getNews().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnInit() {}
}
