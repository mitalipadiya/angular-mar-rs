import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {IDynamicModalContent} from './dynamic-modal-content';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  showHeader  = false;
  header: string;
  modalId: string;
  component: any;
  modalElement: any;
  submitCallback: Function;
  data: any;

  @ViewChild('modalContent', {static: true, read: ViewContainerRef})
  viewContainerRef: ViewContainerRef;
  componentRef: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void{
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    Object.keys(this.data).forEach(e => {
      this.componentRef.instance[e] = this.data[e];
    });
  }

  ngAfterViewInit(): void {
    this.modalElement = $('#' + this.modalId);
    this.modalElement.modal('show');
  }

  onSubmit(): void {
    this.componentRef.instance.onSubmit();
    this.modalElement.modal('hide');
  }
}
