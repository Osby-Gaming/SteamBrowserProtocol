import SteamBrowserProtocol from "../dist/esm/SteamBrowserProtocol";
import open from 'open';

const url = SteamBrowserProtocol.launch("730", true);
await open(url);
console.log(url);