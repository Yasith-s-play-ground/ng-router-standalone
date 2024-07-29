import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  private routerService: Router = inject(Router);

  logout() {
    /* remove logged key value pair from local storage */
    localStorage.removeItem("logged");
    /* redirect to login */
    this.routerService.navigateByUrl('/login');
  }
}
