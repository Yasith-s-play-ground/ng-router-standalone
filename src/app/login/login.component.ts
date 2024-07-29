import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // inject router service
  private routerService: Router = inject(Router);

  login(txtUsername: HTMLInputElement, txtPassword: HTMLInputElement) {
    const username = txtUsername.value;
    const password = txtPassword.value;

    if (username === 'admin' && password === 'admin') {
      // Navigate to main
      this.routerService.navigateByUrl('/main');
      //add logged key value pair to storage
      localStorage.setItem('logged', "true");
    } else {
      //remove logged key value pair if username, password are incorrect
      localStorage.removeItem('logged');
      alert("Invalid Username or Password");
      txtUsername.focus();
      txtUsername.select();
    }
  }

}
