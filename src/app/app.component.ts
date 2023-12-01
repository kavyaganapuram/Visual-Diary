import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cloudinary} from '@cloudinary/url-gen'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}
  title = 'Diary';

  ngOnInit() {
    const cld = new Cloudinary({cloud: {cloudName: 'dgmtxiw45'}});
  }


  Nav_entry() {
    console.log("navigating")
    this.router.navigate(['entry']);
  }
  
}
