import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  // selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title: string = 'register';
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
  }

}
