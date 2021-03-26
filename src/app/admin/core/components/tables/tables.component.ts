import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {ConfirmationDialogService} from '../../services/confirmation-dialog.service';
import {VerticalsFormComponent} from '../../../manage-verticals/verticals-form/verticals-form.component';
import {ModalService} from '../../../../core/modules/modal/modal.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  private _data: any;
  headings = [];
  searchTerm: string;
  page = 1;
  pageSize = 4;
  collectionSize: number;
  allData = [];
  @Input() dataType: string;
  @Input() deleteCallback: Function;
  @Input() editCallback: Function;
  @Input() set data(value) {
    this._data = value;
  }
  get data(): any {
    return this._data;
  }
  constructor(
    private confirmationDialogService: ConfirmationDialogService,
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    if (this.data && this.data.length){
      this.allData = [...this.data];
      this.collectionSize = this.data.length;
      this.headings = Object.keys(this.data[0]).filter(el => el !== 'id');
    }
  }

  onDelete(item): void {
    // @ts-ignore
    this.confirmationDialogService.confirm(`${this.dataType} Deletion`, `Are you sure you want to delete ${item.name} ${this.dataType}?`)
      .then((confirmed) => {
        if (confirmed){
          this.deleteCallback(item);
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  search(value: string): void {
    this.data = this.allData.filter((val) => val.name.toLowerCase().includes(value));
    this.collectionSize = this.data.length;
  }
  onEdit(item): void {
    const sendData = { btnType: 'Edit', isModal: true, saveCallback: this.editCallback };
    // @ts-ignore
    sendData[this.dataType] =  item;
    this.modalService.createModal(
      'sample-modal',
      '',
      this.viewContainerRef,
      VerticalsFormComponent,
      sendData, this.editCallback);
  }
}
