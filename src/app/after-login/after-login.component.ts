import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {
  constructor(private router : Router){}
  ngOnInit(): void {
      
  }

  createDiary(){
    this.router.navigate(['dashboard']);

  }
  SearchDiary(){
    this.router.navigate(['preview']);

  }
}
