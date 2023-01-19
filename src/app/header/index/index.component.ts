import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  contactForm: FormGroup | any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pnumber: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log('valid?', this.contactForm.valid);
    console.log('fname', this.contactForm.value.name);
    console.log('email', this.contactForm.value.email);
    console.log('pnumber', this.contactForm.value.pnumber);
  }
}
