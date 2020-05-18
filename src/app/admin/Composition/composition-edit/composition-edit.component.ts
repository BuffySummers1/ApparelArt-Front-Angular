import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CompositionService } from 'src/app/shared/service/composition.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composition-edit',
  templateUrl: './composition-edit.component.html',
  styleUrls: ['./composition-edit.component.scss']
})
export class CompositionEditComponent implements OnInit {
 
  composition;
  id: number;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private compositionService: CompositionService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.route.params
  .subscribe(params => this.id = params.id);
}
  

  ngOnInit(): void {
    this.getCompositionDetail(this.id);
    this.form = new FormGroup({
    name: new FormControl()
  });
  

}

// Get the Composition
getCompositionDetail(id: number) {
  this.compositionService.getCompositionDetail(id)
  .subscribe( data => {
    this.form.patchValue({
          name: data.name
        });
    });
}

onSubmit() {
  this.compositionService.editComposition(this.form.value, this.id)
      .subscribe(composition => {
        this.router.navigate(['/admin/composition']);
      });
  }


}
