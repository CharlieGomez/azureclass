import { Component, OnInit, Input } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Input() profile: any;

  ngOnInit(): void {
  }

}
