import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngt-feedback-form',
  standalone: true,
  imports: [],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent {
  @Input() feedback: string = '';

  changeText(newText: string) {
    this.feedback = newText;
  }
}
