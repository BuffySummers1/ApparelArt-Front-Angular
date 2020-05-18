import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SizeService } from 'src/app/shared/service/size.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-size-edit',
  templateUrl: './size-edit.component.html',
  styleUrls: ['./size-edit.component.scss']
})
export class SizeEditComponent implements OnInit {
  size;
  id: number;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private sizeService: SizeService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.route.params
  .subscribe(params => this.id = params.id);
}
  

  ngOnInit(): void {
    this.getSizeDetail(this.id);
    this.form = new FormGroup({
    name: new FormControl ('', [Validators.required, Validators.maxLength(100)])
  });
  

}

// Get the Size
getSizeDetail(id: number) {
  this.sizeService.getSizeDetail(id)
  .subscribe( data => {
    this.form.patchValue({
          name: data.name
        });
    });
}

onSubmit() {
  this.sizeService.editSize(this.form.value, this.id)
      .subscribe(size => {
        this.router.navigate(['/admin/size']);
      });
  }


}
