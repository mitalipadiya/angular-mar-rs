import {Component, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-manage-verticals',
  templateUrl: './manage-verticals.component.html',
  styleUrls: ['./manage-verticals.component.scss']
})
export class ManageVerticalsComponent implements OnInit{
  verticals = [];
  dataType = 'vertical';
  btnType = 'Add';
  public theBoundDeleteCallback: Function;
  public theBoundSaveCallback: Function;
  public theBoundEditCallback: Function;
  constructor(
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.getVerticals();
    this.theBoundDeleteCallback = this.onDeleteCallback.bind(this);
    this.theBoundSaveCallback = this.onSubmitCallback.bind(this);
    this.theBoundEditCallback = this.onEditCallback.bind(this);
  }
  onSubmitCallback(form): void {
    this.adminService.addVertical(form.value).subscribe(
      data => { this.verticals = this.adminService.addAtStart(this.verticals, data); },
    err => { console.log(err); });
  }
  getVerticals(): void{
    this.adminService.getVerticals().subscribe(data => this.verticals = data);
  }
  onDeleteCallback(item): void {
    this.adminService.deleteVertical(item).subscribe(
      data => { if (!data){ this.verticals = this.adminService.deleteFromArray(this.verticals, item); } },
      err => { console.log(err); }
    );
  }
  onEditCallback(form): void {
    const selectedVertical = form.value;
    this.adminService.editVertical(selectedVertical).subscribe(
      data => {
        this.verticals = this.adminService.editElementInArray(this.verticals, selectedVertical);
      }
    );
  }
}
