import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipmentchild',
  templateUrl: './equipmentchild.component.html',
  styleUrls: ['./equipmentchild.component.scss']
})
export class EquipmentchildComponent implements OnInit {

  constructor(private router: Router) { }
  goDevice() {
    this.router.navigate(['device']);
  }
  ngOnInit() {
  }

}
