import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  contactForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pnumber: ['', [Validators.required]],
    });

    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value);
    });
  }

  jumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit() {
    console.log('valid?', this.contactForm.valid);
    console.log('fname', this.contactForm.value.name);
    console.log('email', this.contactForm.value.email);
    console.log('pnumber', this.contactForm.value.pnumber);
  }
}
