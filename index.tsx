/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import definePlugin from "@utils/types";

const SoundBoardIcon = "hide-mute-soundboard-icon";

const CSS = `
[class*="voiceCallWrapper"] [class*="statusContainer"]:has(path[d^="M3.86 8.86"]) {
    display: none !important;
}

[class*="voiceCallWrapper"] :has(> [class*="statusContainer"] path[d^="M3.86 8.86"]) [class*="callAvatarMask"] foreignObject {
    mask: url(#svg-mask-avatar-default) !important;
}

[class*="experimentOverlayTitle"] > svg:has(path[d^="M3.86 8.86"]),
[class*="experimentOverlayTitle"] > [class*="titleIcon"]:has(path[d^="M3.86 8.86"]) {
    display: none !important;
}

[class*="experimentOverlayTitle"]:has(path[d^="M3.86 8.86"]):not(:has([class*="overlayTitleText"])) {
    display: none !important;
}

svg:has(path[d^="M3.86 8.86"]) {
    display: none !important;
}
`;

export default definePlugin({
    name: "HideMuteSoundboardIcon",
    description: "Hides the muted soundboard icon everywhere",
    authors: [{ name: "D1ktor", id: 850281722188791808n }, { name: "nux", id: 821384225584447528n }],

    start() {
        if (document.getElementById(SoundBoardIcon)) return;
        const style = document.createElement("style");
        style.id = SoundBoardIcon;
        style.textContent = CSS;
        document.head.appendChild(style);
    },

    stop() {
        document.getElementById(SoundBoardIcon)?.remove();
    }
});