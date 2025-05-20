import { Router } from "@commonmodule/app";
import { AppComponents, RichTextEditorView, SocialComponents, SVGIconsView, WalletComponents, } from "@commonmodule/component-showcase";
import { GaiaUIPreset } from "@gaiaprotocol/ui-preset";
import Home from "./Home.js";
GaiaUIPreset.init();
Router
    .add("/", Home)
    .add("/app-components", AppComponents)
    .add("/social-components", SocialComponents)
    .add("/wallet-components", WalletComponents)
    .add("/rich-text-editor", RichTextEditorView)
    .add("/svg-icons", SVGIconsView);
//# sourceMappingURL=main.js.map