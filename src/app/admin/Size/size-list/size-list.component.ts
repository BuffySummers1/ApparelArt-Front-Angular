import { Component, OnInit } from '@angular/core';
import { SizeService } from 'src/app/shared/service/size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrls: ['./size-list.component.scss']
})
export class SizeListComponent implements OnInit {

  sizes = []

  constructor(
    private sizeService: SizeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sizeService.getSizes()
    .subscribe(
      (data => {console.log(data);
      this.sizes = data})
    );
 
  }
  deleteSize(id) {
    this.sizeService.deleteSize(id).subscribe();
    this.sizes = this.sizes.filter(element => element.id !== id);
  }

}