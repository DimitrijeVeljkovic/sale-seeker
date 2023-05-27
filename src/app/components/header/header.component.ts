import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public get shouldShowNavigation() {
    return !['/', '/home-page'].includes(this._router.url);
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
