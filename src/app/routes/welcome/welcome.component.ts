import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  test;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  get(name) {
    this.http.get(`http://111.231.51.74/api/hello/${name}`).subscribe(data => {
      this.test = data;
    });
  }
}
