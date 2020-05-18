import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/shared/service/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  
  tags = []

  constructor(
    private tagService: TagService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.tagService.getTags()
    .subscribe(
      (data => {console.log(data);
      this.tags = data})
    );
 
  }
  deleteTag(id) {
    this.tagService.deleteTag(id).subscribe();
    this.tags = this.tags.filter(element => element.id !== id);
  }

}