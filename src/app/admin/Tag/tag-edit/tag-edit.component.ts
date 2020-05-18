import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TagService } from 'src/app/shared/service/tag.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.scss']
})
export class TagEditComponent implements OnInit {
  tag;
  id: number;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private tagService: TagService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.route.params
  .subscribe(params => this.id = params.id);
}
  

  ngOnInit(): void {
    this.getTagDetail(this.id);
    this.form = new FormGroup({
    name: new FormControl ('', [Validators.required, Validators.maxLength(100)])
  });
  

}

// Get the Tag
getTagDetail(id: number) {
  this.tagService.getTagDetail(id)
  .subscribe( data => {
    this.form.patchValue({
          name: data.name
        });
    });
}

onSubmit() {
  this.tagService.editTag(this.form.value, this.id)
      .subscribe(tag => {
        this.router.navigate(['/admin/tag']);
      });
  }


}
