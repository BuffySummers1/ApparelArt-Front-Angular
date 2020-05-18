import { Component, OnInit } from '@angular/core';
import { ShapeService } from 'src/app/shared/service/shape.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss']
})
export class ShapeListComponent implements OnInit {

  
  shapes = []

  constructor(
    private shapeService: ShapeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.shapeService.getShapes()
    .subscribe(
      (data => {console.log(data);
      this.shapes = data})
    );
 
  }
  deleteShape(id) {
    this.shapeService.deleteShape(id).subscribe();
    this.shapes = this.shapes.filter(element => element.id !== id);
  }

}