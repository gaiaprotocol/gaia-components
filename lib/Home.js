import { AppRoot, el, Router, View } from "@commonmodule/app";
import { Button, ButtonGroup, ButtonType } from "@commonmodule/app-components";
export default class Home extends View {
    constructor() {
        super();
        this.container = el(".showcase-view", el("h1", "Gaia Components"), new ButtonGroup(new Button({
            type: ButtonType.Outlined,
            title: "App Components",
            onPress: () => Router.go("/app-components"),
        }), new Button({
            type: ButtonType.Outlined,
            title: "Social Components",
            onPress: () => Router.go("/social-components"),
        }), new Button({
            type: ButtonType.Outlined,
            title: "Wallet Components",
            onPress: () => Router.go("/wallet-components"),
        }), new Button({
            type: ButtonType.Outlined,
            title: "Rich Text Editor",
            onPress: () => Router.go("/rich-text-editor"),
        }), new Button({
            type: ButtonType.Outlined,
            title: "SVG Icons",
            onPress: () => Router.go("/svg-icons"),
        }))).appendTo(AppRoot);
    }
}
//# sourceMappingURL=Home.js.map