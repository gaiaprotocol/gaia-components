import { AppRoot, el, View } from "@commonmodule/app";
import { Button } from "@commonmodule/app-components";
import { WalletModuleConfig, WalletSessionManager } from "@commonmodule/wallet";
import { WalletLoginConfig, WalletLoginManager, } from "@commonmodule/wallet-login";
import { mainnet } from "@wagmi/core/chains";
export default class WalletComponents extends View {
    constructor() {
        super();
        WalletModuleConfig.init({
            chains: [mainnet],
            walletConnectProjectId: "919e5d733ded08f1cff0b83b1efef92c",
        });
        WalletLoginConfig.init({
            apiBaseURL: "TODO: Set your API base URL",
            chains: [mainnet],
            walletConnectProjectId: "919e5d733ded08f1cff0b83b1efef92c",
        });
        this.container = el(".showcase-view.wallet-components-view", el("h1", "Wallet Components")).appendTo(AppRoot);
        this.container.append(el(".button-container", new Button({
            title: "Connect Wallet",
            onPress: () => WalletSessionManager.connect(),
        }), new Button({
            title: "Login with Wallet",
            onPress: () => WalletLoginManager.login(),
        })));
    }
}
//# sourceMappingURL=WalletComponents.js.map