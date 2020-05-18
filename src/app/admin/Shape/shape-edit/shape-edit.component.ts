import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ShapeService } from 'src/app/shared/service/shape.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shape-edit',
  templateUrl: './shape-edit.component.html',
  styleUrls: ['./shape-edit.component.scss']
})
export class ShapeEditComponent implements OnInit {

  
  shape;
  id: number;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private shapeService: ShapeService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.route.params
  .subscribe(params => this.id = params.id);
}
  

  ngOnInit(): void {
    this.getShapeDetail(this.id);
    this.form = new FormGroup({
    name: new FormControl()
  });
  

}

// Get the Shape
getShapeDetail(id: number) {
  this.shapeService.getShapeDetail(id)
  .subscribe( data => {
    this.form.patchValue({
          name: data.name
        });
    });
}

onSubmit() {
  this.shapeService.editShape(this.form.value, this.id)
      .subscribe(shape => {
        this.router.navigate(['/admin/shape']);
      });
  }


}