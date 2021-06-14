import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

import { NgDynamicTooltipComponent } from "./tooltip.component";
import { NgDynamicTooltipDirective } from "./tooltip.directive";

@NgModule({
  declarations: [
    NgDynamicTooltipComponent,
    NgDynamicTooltipDirective
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    // CDK
    OverlayModule,
    PortalModule,
  ],
  exports: [
    NgDynamicTooltipComponent,
    NgDynamicTooltipDirective
  ]
})
export class NgDynamicTooltipModule { }
