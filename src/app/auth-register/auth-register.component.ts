import { Component, OnInit, Input } from '@angular/core';
import { AuthService} from '../auth.service'

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  @Input() public username: string;
  @Input() public password1: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  sendForm(){
    this.authService.register(this.username,this.password1).subscribe(token => console.log("Exito", token));
  }

}