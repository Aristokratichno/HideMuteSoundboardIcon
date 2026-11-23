/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
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