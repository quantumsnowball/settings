// ==UserScript==
// @name Poe Chat Width
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Change poe.com chat div width
// @match https://poe.com/*
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        // restore default context menu
        document.querySelectorAll('[class^=ChatMessage_messageRow]')
            .forEach(row => row.addEventListener('contextmenu', e => e.stopPropagation()));
        // Define the new CSS style you want to apply
        const newStyle = `
        /* font size */
        @media screen and (max-width: 800px) {
            a[class^=PageWithSidebarNavItem_newNavItem] {
                font-size: var(--font-size-small);
                padding: var(--spacing-small);
            }
            div[class^=Message_botMessageBubble], [class^=MarkdownCodeBlock_preTag] {
                font-size: var(--font-size-small);
            }
        }

        /* full width chat area */
        aside[class^=NewPageWithSidebarLayout_leftSidebar] {
            flex: 0;
            min-width: unset;
        }
        div[class^=NewPageWithSidebarLayout_centeredPage] {
            overflow-x: hidden;
            max-width: unset;
        }
        section[class^=NewPageWithSidebarLayout_mainSectionWrapper] {
            overflow-x: hidden;
        }
        div[class^=NewPageWithSidebarLayout_mainSection] {
            flex: 1 1 100%;
            max-width: unset;
        }

        /* full width message bubble */
        div[class^=Message_botMessageBubble] {
            max-width: unset;
            margin-right: 0;
        }

        /* code block horizontal scrollable */
        [class^=MarkdownCodeBlock_preTag] {
            overflow-x: auto !important;
        }
        [class^=MarkdownCodeBlock_codeTag] {
            white-space: pre !important;
        }
    `;

        // Create a new style element and append it to the document head
        const styleElement = document.createElement('style');
        styleElement.innerText = newStyle;
        document.head.appendChild(styleElement);

    }, 1000);
})();
