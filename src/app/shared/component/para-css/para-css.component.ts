import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-para-css',
  templateUrl: './para-css.component.html',
  styleUrls: ['./para-css.component.scss']
})
export class ParaCssComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    // this.toLowerCase.nativeElement.value
  }
  val  : string = ''
  onClick(eve : Event){
    this.val = (eve.target as HTMLInputElement).value
  }
  val2 : string = ''
  onUpper(eve : Event){
    this.val2 = (eve.target as HTMLInputElement).value
  }

}
