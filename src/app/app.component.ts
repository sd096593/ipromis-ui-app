
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';           // ✅ ADD THIS
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],               // ✅ ADD RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ipromis-ui-app';
}

