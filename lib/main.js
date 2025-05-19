import { Router } from "@commonmodule/app";
import { AppComponents } from "@commonmodule/component-showcase";
import { AppCompConfig } from "@commonmodule/app-components";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";
AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
Router
    .add("/app-components", AppComponents);
//# sourceMappingURL=main.js.map