import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.page.html",
  styleUrls: ["./weather.page.scss"],
})
export class WeatherPage implements OnInit {
  data: any;
  description: any;
  temp: any;

  constructor(private http: ApiService) {
    this.loadWeather();
  }

  loadWeather() {
    this.http.getWeather().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      this.description = this.data.weather[0].main;
      console.log(this.description);

      this.temp = this.data.main.temp.toFixed(1);
    });
  }

  ngOnInit() {}
}
