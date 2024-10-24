import { NgIf } from '@angular/common';
import { LetDeclaration } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'ngt-feedback-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, LetDirective],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss',
})
export class FeedbackFormComponent {
  @Input() feedback: string = '';

  changeText(newText: string) {
    this.feedback = newText;
  }

  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit() {
    alert('Message sent successfully!');
  }
}
