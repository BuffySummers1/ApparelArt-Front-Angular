import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompositionService } from 'src/app/shared/service/composition.service';
import { Router } from '@angular/router';
import { Composition } from 'src/app/shared/model/Composition';

@Component({
  selector: 'app-composition-add',
  templateUrl: './composition-add.component.html',
  styleUrls: ['./composition-add.component.scss']
})
export class CompositionAddComponent implements OnInit {
  form: FormGroup;
  compositions = [];

  constructor(
    private formBuilder: FormBuilder,
    private compositionService: CompositionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const composition = this.form.value as Composition;
      console.log('compo ?')

      this.compositionService.addComposition(composition)
      .subscribe(
        (data: Composition) => {
          this.router.navigate(['admin/composition/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }
  deleteComposition(id) {
    this.compositionService.deleteComposition(id).subscribe();
    this.compositions = this.compositions.filter(element => element.id !== id);
  }
}