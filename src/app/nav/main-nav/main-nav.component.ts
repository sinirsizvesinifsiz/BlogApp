import { Component, OnInit } from '@angular/core';
import  {Route,NavigationEnd, Router} from '@angular/router';

enum MainPage
{
  home = 1,
  aboutme = 2,
  contact = 3

}
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  pageActive? : MainPage;
  constructor(private router:Router) {
    this.router.events.subscribe(x => {
      if(x instanceof NavigationEnd){
        if(x.url.indexOf("Anasayfa") > 0)
        {
          this.pageActive = MainPage.home;
        }
        else if(x.url.indexOf("hakkimizda") > 0)
        {
          this.pageActive = MainPage.aboutme;
        }
        else if(x.url.indexOf("iletisim") > 0)
        {
          this.pageActive = MainPage.contact;
        }
        else{
          this.pageActive = MainPage.home;
        }
      }

      }

    )





  }

  ngOnInit(): void {
  }

}
