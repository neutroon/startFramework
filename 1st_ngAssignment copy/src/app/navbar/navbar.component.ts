import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {

    const nav:any = document.querySelector('nav')
    globalThis.addEventListener('scroll', ()=> {
      if (globalThis.scrollY >= 40) {
        nav!.style.paddingTop = `0.32rem`;
        nav!.style.paddingBottom = `0.32rem`;
      }else{
        nav!.style.paddingTop = `1.5rem`;
        nav!.style.paddingBottom = `1.5rem`;
      }
    })

  }

}
