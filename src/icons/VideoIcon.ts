import { SvgIcon } from "@common-module/app-components";

export default class VideoIcon extends SvgIcon {
  constructor() {
    super(
      ".video",
      "0 -960 960 960",
      '<path d="m380-300 280-180-280-180v360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>',
    );
  }
}
