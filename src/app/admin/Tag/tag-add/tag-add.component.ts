import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TagService } from 'src/app/shared/service/tag.service';
import { Router } from '@angular/router';
import { Tag } from 'src/app/shared/model/Tag';

@Component({
  selector: 'app-tag-add',
  templateUrl: './tag-add.component.html',
  styleUrls: ['./tag-add.component.scss']
})
export class TagAddComponent implements OnInit {

  
  form: FormGroup;
  tags = [];

  constructor(
    private formBuilder: FormBuilder,
    private tagService: TagService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const tag = this.form.value as Tag;
      console.log('couleur est là ?')

      this.tagService.addTag(tag)
      .subscribe(
        (data: Tag) => {
          this.router.navigate(['admin/tag/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }
  deleteTag(id) {
    this.tagService.deleteTag(id).subscribe();
    this.tags = this.tags.filter(element => element.id !== id);
  }
}