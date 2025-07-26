import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {TableForm} from './table-form/table-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, TableForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('simple-web-app');


  public doSomethingCool():void {
    console.log('do a kick flip')
  }

  public doSomethingElse():void {
    console.log('why are you tony hawk')
  }
}
