import { Component, OnInit, Input } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  @Input() public username: string;
  @Input() public password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  sendForm(){
    this.authService.login(this.username,this.password).subscribe(token => {
      console.log("Exito", token);
      localStorage.setItem('access_token',token.token)
      this.router.navigate(['/']);
    });
  }

}
