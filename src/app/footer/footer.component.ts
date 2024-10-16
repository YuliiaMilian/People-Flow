import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngt-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() footerText: string = '';

  changeText(newText: string) {
    this.footerText = newText;
  }
}
