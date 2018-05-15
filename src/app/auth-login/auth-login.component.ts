import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  @Input() public username: string;
  @Input() public password: string;

  constructor() { }

  ngOnInit() {
  }

  sendForm(){
    console.log(this.username,this.password)
  }

}
