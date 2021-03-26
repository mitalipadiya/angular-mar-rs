import {ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef} from '@angular/core';
import {ModalComponent} from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  viewRefs = new Map<ViewContainerRef, ComponentRef<ModalComponent>>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  createModal(id: string, header: string, viewContainerRef: ViewContainerRef, component, data, submitCallback:Function ): void {
    if (this.viewRefs.has(viewContainerRef)) {
      viewContainerRef.clear();
      this.viewRefs.delete(viewContainerRef);
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ModalComponent).modalId = id;
    (componentRef.instance as ModalComponent).header = header;
    (componentRef.instance as ModalComponent).component = component;
    (componentRef.instance as ModalComponent).submitCallback = submitCallback;
    (componentRef.instance as ModalComponent).data = data;

    this.viewRefs.set(viewContainerRef, componentRef);
  }
}
