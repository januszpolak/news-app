import { Component } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  todayDate = Date.now();

  day = new Date().getDay();

  names: any;

  constructor(private http: ApiService) {
    this.loadNameDay();
  }

  loadNameDay() {
    this.http.getNameDay().subscribe((data) => {
      this.names = data;
      console.log(this.names.data.namedays.pl);
      this.names = this.names.data.namedays.pl;
    });
  }
}
