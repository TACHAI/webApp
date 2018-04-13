import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  constructor(private router: Router) { }
  goChildren() {
    this.router.navigate(['eChild']);
  }
  ngOnInit() {
  }

}
