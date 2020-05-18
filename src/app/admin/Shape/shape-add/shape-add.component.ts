import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShapeService } from 'src/app/shared/service/shape.service';
import { Router } from '@angular/router';
import { Shape } from 'src/app/shared/model/Shape';

@Component({
  selector: 'app-shape-add',
  templateUrl: './shape-add.component.html',
  styleUrls: ['./shape-add.component.scss']
})
export class ShapeAddComponent implements OnInit {

  form: FormGroup;
  shapes = [];

  constructor(
    private formBuilder: FormBuilder,
    private shapeService: ShapeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const shape = this.form.value as Shape;
      console.log('shape est là ?')

      this.shapeService.addShape(shape)
      .subscribe(
        (data: Shape) => {
          this.router.navigate(['admin/shape/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }
  deleteShape(id) {
    this.shapeService.deleteShape(id).subscribe();
    this.shapes = this.shapes.filter(element => element.id !== id);
  }
}
