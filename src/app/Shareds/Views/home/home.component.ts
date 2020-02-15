import { Component, OnInit, ViewChild, HostListener, Input, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() zIndex: number = 2;
  @ViewChild('ItemSubmenu') ItemSubmenu: ElementRef;
  formdata = new FormGroup({
    uname: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
    passwd: new FormControl("")
  });
  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data)
  {

  }
  CheckButton() {
    this.ItemSubmenu.nativeElement.classList.toggle('show')
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    var ele = <Element>event.target;
    if (!ele.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("submenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

}
