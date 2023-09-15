import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private titleService: Title){
    this.titleService.setTitle("Contact")
    }


  inputs: string[] = ['Name', 'Age', 'Email', 'Password'];

  test(e: any) {
    if (e.target.value != '') {
      e.target.nextElementSibling.style.top = '-85px';
    } else {
      e.target.nextElementSibling.style.top = '-50px';
    }
  }





  ngOnInit(): void {

  }
}
