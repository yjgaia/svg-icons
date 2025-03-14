import { SvgIcon } from "@common-module/app-components";

export default class ResetZoomIcon extends SvgIcon {
  constructor() {
    super(
      ".reset-zoom",
      "0 -960 960 960",
      '<path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm400 0v-80h160v-160h80v160q0 33-23.5 56.5T760-120H600ZM120-600v-160q0-33 23.5-56.5T200-840h160v80H200v160h-80Zm640 0v-160H600v-80h160q33 0 56.5 23.5T840-760v160h-80Z"/>',
    );
  }
}
