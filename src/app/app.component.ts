import { Component, OnInit  } from '@angular/core';
import { serviceList } from './services/serviceList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Store';
  constructor(private _serviceList: serviceList) { }

  ngOnInit() {
  }
}
