import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorService } from 'src/app/shared/service/color.service';

@Component({
  selector: 'app-color-edit',
  templateUrl: './color-edit.component.html',
  styleUrls: ['./color-edit.component.scss']
})
export class ColorEditComponent implements OnInit {
  
  color;
  id: number;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.route.params
  .subscribe(params => this.id = params.id);
}
  

  ngOnInit(): void {
    this.getColorDetail(this.id);
    this.form = new FormGroup({
    name: new FormControl()
  });
  

}

// Get the Color
getColorDetail(id: number) {
  this.colorService.getColorDetail(id)
  .subscribe( data => {
    this.form.patchValue({
          name: data.name
        });
    });
}

onSubmit() {
  this.colorService.editColor(this.form.value, this.id)
      .subscribe(color => {
        this.router.navigate(['/admin/color']);
      });
  }


}

