import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-verticals-form',
  templateUrl: './verticals-form.component.html',
  styleUrls: ['./verticals-form.component.scss']
})
export class VerticalsFormComponent implements OnInit {
  @Input() btnType: string;
  @Input() saveCallback: Function;
  verticalsForm: FormGroup;
  categories = ['Tech', 'Non-Tech'];
  vertical = {id: '', name: '', category: ''};
  isModal = false;

  ngOnInit(): void {
    this.verticalsForm = new FormGroup({
      id: new FormControl(this.vertical.id),
      name: new FormControl(this.vertical.name, [Validators.required]),
      category: new FormControl(this.vertical.category, [Validators.required])
    });
    this.verticalsForm.controls['category'].setValue(this.categories[0], {onlySelf: true});
  }
  get name(): AbstractControl { return this.verticalsForm.get('name'); }
  onSubmit(): void {
    this.saveCallback(this.verticalsForm);
    this.verticalsForm.reset({id: '', name: '', category: 'Tech'});
  }
}
