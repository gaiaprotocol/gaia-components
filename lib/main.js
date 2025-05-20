import { Router } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import { AppComponents, RichTextEditorView, SocialComponents, SVGIconsView, WalletComponents, } from "@commonmodule/component-showcase";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";
import Home from "./Home.js";
AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
Router
    .add("/", Home)
    .add("/app-components", AppComponents)
    .add("/social-components", SocialComponents)
    .add("/wallet-components", WalletComponents)
    .add("/rich-text-editor", RichTextEditorView)
    .add("/svg-icons", SVGIconsView);
//# sourceMappingURL=main.js.map