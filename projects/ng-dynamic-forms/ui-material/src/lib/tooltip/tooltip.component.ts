import { Component, Input, ViewChild, ElementRef, ViewEncapsulation } from "@angular/core";
import { TemplatePortalDirective } from "@angular/cdk/portal";
import { OverlayRef, Overlay, OverlayConfig, ConnectionPositionPair, CdkOverlayOrigin } from "@angular/cdk/overlay";

@Component({
  selector: "ng-dynamic-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NgDynamicTooltipComponent
{
  @Input()
  set message(message: string) {
    this._message = message != null ? `${message}`.trim() : null;
    if (this._message) {
      this.show = true;
    }
    else {
      this.show = false;
    }

    this.showTooltip = false;
    this.closeTooltipDisplay();
  }

  get message() {
    return this._message;
  }

  _message: string;

  show: boolean = false;

  showTooltip: boolean = false;

  @ViewChild("portalTemplate", { static: false }) portalTemplate: TemplatePortalDirective;

  @ViewChild(CdkOverlayOrigin, { static: false }) _overlayOrigin: CdkOverlayOrigin;

  private overlayRef: OverlayRef;

  constructor(
    public overlay: Overlay,
    public element: ElementRef
  ) { }

  ngOnInit(): void {
    window.addEventListener("scroll", this.scroll, true);
  }

  scroll = (event: any): void => {
    this.closeTooltipDisplay();
  };

  toggleTooltip() {
    this.showTooltip = !this.showTooltip;

    if (this.showTooltip) {
      this.openTooltipDisplay();
    }
    else {
      this.closeTooltipDisplay();
    }
  }

  openTooltipDisplay() {
    this.showTooltip = true;

    if (this.overlayRef) {
      this.overlayRef.detach();
    }

    const strategy = this.overlay.position()
    .flexibleConnectedTo(this._overlayOrigin.elementRef)
    .withPositions(this.getPositions())
    .withFlexibleDimensions(false)
    .withPush(false);

    const config = new OverlayConfig({positionStrategy: strategy});

    this.overlayRef = this.overlay.create(config);

    this.overlayRef.attach(this.portalTemplate);
  }

  closeTooltipDisplay() {
    this.showTooltip = false;
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: "center",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      },
      {
        originX: "center",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "center",
        originY: "top",
        overlayX: "end",
        overlayY: "bottom"
      },
      {
        originX: "center",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
      },
    ];
  }

  ngOnDestroy(): void {
    this.closeTooltipDisplay();
    window.removeEventListener("scroll", this.scroll, true);
  }
}
