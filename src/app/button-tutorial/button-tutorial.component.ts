import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'kb-button-tutorial',
  templateUrl: './button-tutorial.component.html',
  styleUrls: ['./button-tutorial.component.css']
})
export class ButtonTutorialComponent implements OnInit {
  changeButtonsToBlue(): void {
    console.log("To blue clicked!");
    var buttons = document.getElementById('kendo-btn-grp-1').children;
    // Can't get this to work. This is different from specifing look="flat" in .html.
    document.getElementById('kendo-btn-grp-1').setAttribute("ng-reflect-look", "flat");
    var btnArray = Array.from(buttons);
    btnArray.forEach(btn => {
      btn.setAttribute("style", "color: blue");
    })
  }

  changeButtonsToBrown(): void {
    console.log("To brown clicked!");
    var buttons = document.getElementById('kendo-btn-grp-1').children;
    var btnArray = Array.from(buttons);
    btnArray.forEach(btn => {
      btn.setAttribute("style", "color: brown");
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
