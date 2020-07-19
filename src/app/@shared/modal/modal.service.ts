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

@Injectable({
  providedIn: ModalModule,
})
export class ModalService {
  modalComponentRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  private appendModalComponentToBody() {
    const modalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = modalComponentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // const customElem = (this.componentFactoryResolver.resolveComponentFactory(ModalComponent).create(this.injector).hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // customElem.appendChild(domElem);
    document.body.appendChild(domElem);

    this.modalComponentRef = componentRef;
  }

  private removeModalComponentFromBody() {
    this.appRef.detachView(this.modalComponentRef.hostView);
    this.modalComponentRef.destroy();
  }

  public open(componentType: Type<any>) {
    // componentType: Type<any>
    this.appendModalComponentToBody();

    this.modalComponentRef.instance.childComponentType = componentType;
  }

  public close() {
    this.removeModalComponentFromBody();
  }
}
