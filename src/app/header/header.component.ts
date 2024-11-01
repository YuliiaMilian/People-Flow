import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'ngt-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MegaMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: string = '';
  @ContentChild('projectedTitle', { static: false }) projectedTitle!: ElementRef;
  @ContentChild('projectedParagraph', { static: false }) projectedParagraph!: ElementRef;

  changeText(newText: string) {
    this.title = newText;
  }

  ngAfterContentInit() {
    if (this.projectedTitle && this.projectedParagraph) {
      console.log('Title:', this.projectedTitle.nativeElement.innerText);
      console.log('Projected:', this.projectedParagraph.nativeElement.innerText);
    }

    this.projectedTitle.nativeElement.textContent = 'New title';
    this.projectedParagraph.nativeElement.textContent = 'New paragraph';
  }


  constructor(private router: Router) {}

  onLogin(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['/login-page']);
  }


  items: MegaMenuItem[] = [
    {
      label: 'Why People Flow?',
      items: [
        [{ label: 'Understanding People Flow' }],
        [{ label: 'Impact on Productivity' }],
        [{ label: 'Challenges in People Flow' }],
        [{ label: 'Real-World Examples' }],
      ],
    },
    {
      label: 'Our Platform',
      items: [
        [{ label: 'Overview of Our Features' }],
        [{ label: 'Integration Options' }],
        [{ label: 'User Testimonials' }],
        [{ label: 'Platform Updates' }],
      ],
    },
    {
      label: 'Help & Support',
      items: [
        [{ label: 'FAQs' }],
        [{ label: 'Contact Support' }],
        [{ label: 'Live Chat' }],
        [{ label: 'Support Documentation' }],
      ],
    },
    {
      label: 'Feedback',
      items: [
        [{ label: 'Submit Your Feedback' }],
        [{ label: 'Feedback Process' }],
        [{ label: 'Read Customer Feedback' }],
        [{ label: 'Feedback FAQs' }],
      ],
    },
    {
      label: 'Contact Us',
      items: [
        [{ label: 'Contact Form' }],
        [{ label: 'Office Locations' }],
        [{ label: 'Business Hours' }],
        [{ label: 'Follow Us' }],
      ],
    },
  ];
}
