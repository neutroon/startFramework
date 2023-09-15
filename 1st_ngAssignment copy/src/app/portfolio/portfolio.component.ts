import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle("Portfolio")
  }
  imgs: string[] = [
    './assets/imgs/poert1.png',
    './assets/imgs/poert2.png',
    './assets/imgs/poert3.png',
    './assets/imgs/poert1.png',
    './assets/imgs/poert2.png',
    './assets/imgs/poert3.png',
  ];

  toggle: boolean = true;
  imgSrc:string ='';

  toggleGallery(i:number = 0, event:Event): void {
    // this.imgSrc = this.imgs[i]

    const galleryImg = document.querySelector('img#gallImg');
    let isImgClicked = false;
    if (event.target == galleryImg) {
      isImgClicked = true;
    }
    // if img not clicked the condition will be true and toggle will be = true and gallery will d
    if (this.toggle == isImgClicked) {
      // if imgClicked then this condition will be false because toggle == false then nothing will happend and gallery will be display as it
      this.toggle = true;
    } else if (this.toggle == true) {
      this.toggle = false;
      this.imgSrc = this.imgs[i]
    }
  }
}
