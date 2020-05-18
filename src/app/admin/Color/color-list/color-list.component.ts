import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/shared/service/color.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {
  colors = []

  constructor(
    private colorService: ColorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.colorService.getColors()
    .subscribe(
      (data => {console.log(data);
      this.colors = data})
    );
 
  }
  deleteColor(id) {
    this.colorService.deleteColor(id).subscribe();
    this.colors = this.colors.filter(element => element.id !== id);
  }

}
