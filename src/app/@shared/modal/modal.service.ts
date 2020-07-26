import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalModule } from './modal.module';
import { ModalRef } from './modal-ref';

@Injectable({
  providedIn: ModalModule,
})
export class ModalService {
  modalComponentRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private modalRef: ModalRef,
  ) {}

  private appendModalComponentToBody() {

    const modalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = modalComponentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.modalComponentRef = componentRef;

    const sub = this.modalRef.afterClosed.subscribe(() => {
      this.removeModalComponentFromBody();
      sub.unsubscribe();
    })

    return this.modalRef;
  }

  private removeModalComponentFromBody() {
    this.appRef.detachView(this.modalComponentRef.hostView);
    this.modalComponentRef.destroy();
  }

  public open(componentType: Type<any>) {
    const modalRef = this.appendModalComponentToBody();

    this.modalComponentRef.instance.childComponentType = componentType;


    return modalRef;
  }

  // public close() {
  //   const sub = this.modalRef.afterClosed.subscribe(() => {
  //     this.removeModalComponentFromBody();
  //     sub.unsubscribe();
  //   })

  //   this.modalComponentRef.instance.onClose.subscribe(() => {
  //   });

  //   return this.modalRef;
  // }
}
