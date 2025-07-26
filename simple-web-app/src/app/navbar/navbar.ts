import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(lib: FaIconLibrary) {
    lib.addIcons(faCaretDown);
  }
  get userName(): string {
    return Math.round(Math.random()) === 0 ? 'Tony Hawk' : 'Bam Margera';
  }

  protected readonly faCaretDown = faCaretDown;
}
