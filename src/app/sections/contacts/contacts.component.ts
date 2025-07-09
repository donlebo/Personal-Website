import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared-lib/components/button/button.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  goUp(): void {
    const footerElement = document.getElementById('app');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
