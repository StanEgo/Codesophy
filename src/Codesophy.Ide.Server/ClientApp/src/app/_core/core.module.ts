import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CookieModule } from "ngx-cookie";

import { SharedModule } from "../_shared/shared.module";
import { throwIfAlreadyLoaded } from "./module-import-guard";

// Components.
import * as fromComponents from "./components";

// Containers.
// import * as fromContainers from './containers';

// Services.
import * as fromServices from "./services";

@NgModule({
  imports: [
    CommonModule,
    CookieModule.forRoot(),
    SharedModule,
    RouterModule
  ],
  declarations: [
    // ...fromContainers.containers,
    ...fromComponents.components
  ],
  exports: [
    // ...fromContainers.containers,
    ...fromComponents.components
  ],
  providers: [
    ...fromServices.services,
  ],
  entryComponents: [
    ...fromComponents.entryComponents
  ]
})
export class CoreModule {
  constructor(@Optional()
              @SkipSelf()
                parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
