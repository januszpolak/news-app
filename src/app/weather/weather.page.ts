import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.page.html",
  styleUrls: ["./weather.page.scss"],
})
export class WeatherPage implements OnInit {
  data: any;
  desc: any;
  constructor(private http: ApiService) {
    this.loadWeather();
  }

  loadWeather() {
    this.http.getWeather().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      this.desc = this.data.weather[0].description;
      console.log(this.desc);
    });
  }

  ngOnInit() {}
}
