import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ColorService } from 'src/app/shared/service/color.service';
import { Router } from '@angular/router';
import { Color } from 'src/app/shared/model/Color';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.scss']
})
export class ColorAddComponent implements OnInit {
  form: FormGroup;
  colors = [];

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const color = this.form.value as Color;
      console.log('et la couleur est là ?')

      this.colorService.addColor(color)
      .subscribe(
        (data: Color) => {
          this.router.navigate(['admin/color/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }
  deleteColor(id) {
    this.colorService.deleteColor(id).subscribe();
    this.colors = this.colors.filter(element => element.id !== id);
  }
}

