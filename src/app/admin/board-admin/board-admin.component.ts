import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/auth/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  navElements = [
    { name: 'Users', link: './users' },
    { name: 'Verticals', link: './verticals' },
    { name: 'Geo Locations', link: './geo' }
  ];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
