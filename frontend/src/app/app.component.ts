import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PiattoComponentComponent } from "./components/piatto-component/piatto-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PiattoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
