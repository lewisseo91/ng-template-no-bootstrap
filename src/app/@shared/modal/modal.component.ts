import { Component, OnInit, AfterViewInit, OnDestroy, ComponentRef, Type, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from './insertion.directive';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly _onClose = new Subject<any>();

  public componentRef: ComponentRef<any>
  public childComponentType: Type<any>
  public onClose = this._onClose.asObservable();
  
  // add this:
  @ViewChild(InsertionDirective)
  insertionPoint: InsertionDirective

  // and this:
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    ) {}

  ngOnInit() {}
  
  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
