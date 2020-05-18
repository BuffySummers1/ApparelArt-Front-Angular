import { Component, OnInit } from '@angular/core';
import { GenderService } from 'src/app/shared/service/gender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.scss']
})
export class GenderListComponent implements OnInit {

  genders = []

  constructor(
    private genderService: GenderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.genderService.getGenders()
    .subscribe(
      (data => {console.log(data);
      this.genders = data})
    );
 
  }
  deleteGender(id) {
    this.genderService.deleteGender(id).subscribe();
    this.genders = this.genders.filter(element => element.id !== id);
  }

}