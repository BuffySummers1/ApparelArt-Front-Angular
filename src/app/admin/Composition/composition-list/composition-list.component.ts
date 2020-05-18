import { Component, OnInit } from '@angular/core';
import { CompositionService } from 'src/app/shared/service/composition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.scss']
})
export class CompositionListComponent implements OnInit {

  compositions = []

  constructor(
    private compositionService: CompositionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.compositionService.getCompositions()
    .subscribe(
      (data => {console.log(data);
      this.compositions = data})
    );
 
  }
  deleteComposition(id) {
    this.compositionService.deleteComposition(id).subscribe();
    this.compositions = this.compositions.filter(element => element.id !== id);
  }

}