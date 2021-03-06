import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-danger is-bold">
      <div class="hero-body">
        <p class="title">
          Andrew Amado
        </p>
        <p class="subtitle">
          UCF CS Grad, Software Engineer, Artist.
        </p>
      </div>
    </section>

    <app-about></app-about>
  `,
  styles: [`
    .hero
    {
      background-image: url("/assets/img/background_home.jpg") !important;
      background-size: cover;
      background-position: center center;
      margin-bottom: 20px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
