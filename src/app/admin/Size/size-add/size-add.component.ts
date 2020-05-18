import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SizeService } from 'src/app/shared/service/size.service';
import { Router } from '@angular/router';
import { Size } from 'src/app/shared/model/Size';

@Component({
  selector: 'app-size-add',
  templateUrl: './size-add.component.html',
  styleUrls: ['./size-add.component.scss']
})
export class SizeAddComponent implements OnInit {

  form: FormGroup;
  sizes = [];

  constructor(
    private formBuilder: FormBuilder,
    private sizeService: SizeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const size = this.form.value as Size;
      console.log('couleur est là ?')

      this.sizeService.addSize(size)
      .subscribe(
        (data: Size) => {
          this.router.navigate(['admin/size/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }
  deleteSize(id) {
    this.sizeService.deleteSize(id).subscribe();
    this.sizes = this.sizes.filter(element => element.id !== id);
  }
}