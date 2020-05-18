import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GenderService } from 'src/app/shared/service/gender.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gender-edit',
  templateUrl: './gender-edit.component.html',
  styleUrls: ['./gender-edit.component.scss']
})
export class GenderEditComponent implements OnInit {

  gender;
  id: number;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private genderService: GenderService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.route.params
  .subscribe(params => this.id = params.id);
}
  

  ngOnInit(): void {
    this.getGenderDetail(this.id);
    this.form = new FormGroup({
    name: new FormControl()
  });
  

}

// Get the Gender
getGenderDetail(id: number) {
  this.genderService.getGenderDetail(id)
  .subscribe( data => {
    this.form.patchValue({
          name: data.name
        });
    });
}

onSubmit() {
  this.genderService.editGender(this.form.value, this.id)
      .subscribe(gender => {
        this.router.navigate(['/admin/gender']);
      });
  }


}
