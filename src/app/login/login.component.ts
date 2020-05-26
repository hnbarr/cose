import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: string = 'login';
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  
  }

}
