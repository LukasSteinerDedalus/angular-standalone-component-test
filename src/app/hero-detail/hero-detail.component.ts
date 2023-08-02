import { Component, Input, NgModule } from '@angular/core';
import { Hero } from '../hero';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule],
})
export class HeroDetailComponent {

  @Input() hero : Hero | undefined;

}
