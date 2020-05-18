import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Gender } from 'src/app/shared/model/Gender';
import { Router } from '@angular/router';
import { GenderService } from 'src/app/shared/service/gender.service';

@Component({
  selector: 'app-gender-add',
  templateUrl: './gender-add.component.html',
  styleUrls: ['./gender-add.component.scss']
})
export class GenderAddComponent implements OnInit {
  form: FormGroup;
  genders = [];

  constructor(
    private formBuilder: FormBuilder,
    private genderService: GenderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const gender = this.form.value as Gender;
      console.log('gender est là ?')

      this.genderService.addGender(gender)
      .subscribe(
        (data: Gender) => {
          this.router.navigate(['admin/gender/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }
  deleteGender(id) {
    this.genderService.deleteGender(id).subscribe();
    this.genders = this.genders.filter(element => element.id !== id);
  }
}