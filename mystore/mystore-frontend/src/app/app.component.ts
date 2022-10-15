import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  total:number = 0
  cartTotal(total:number) {
    this.total = total

//    console.log(this.total)
  }
}
