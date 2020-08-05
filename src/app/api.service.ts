import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?country=pl&apiKey=8c68956f9c9a4dd083bff723b32b56fe"
    );
  }
}
