/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../GitHub/app-module/lib/SPAInitializer.js":
/*!*****************************************************!*\
  !*** ../../GitHub/app-module/lib/SPAInitializer.js ***!
  \*****************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SPAInitializer)\n/* harmony export */ });\n/* harmony import */ var _route_Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route/Router.js */ \"../../GitHub/app-module/lib/route/Router.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_route_Router_js__WEBPACK_IMPORTED_MODULE_0__]);\n_route_Router_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass SPAInitializer {\n    static INITIAL_PATH_KEY = \"initialPath\";\n    static init() {\n        const initialPath = sessionStorage[this.INITIAL_PATH_KEY];\n        if (initialPath) {\n            _route_Router_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goWithoutHistory(initialPath);\n            sessionStorage.removeItem(this.INITIAL_PATH_KEY);\n        }\n    }\n}\n//# sourceMappingURL=SPAInitializer.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/SPAInitializer.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/dom/AppRoot.js":
/*!**************************************************!*\
  !*** ../../GitHub/app-module/lib/dom/AppRoot.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom.js */ \"../../GitHub/app-module/lib/dom/Dom.js\");\n/* harmony import */ var _HTMLElementEventManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLElementEventManager.js */ \"../../GitHub/app-module/lib/dom/HTMLElementEventManager.js\");\n\n\nclass AppRoot extends _Dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    windowEventManager = new _HTMLElementEventManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window);\n    documentEventListeners = new _HTMLElementEventManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document);\n    constructor() {\n        super(document.body);\n    }\n    on(eventName, eventHandler) {\n        if ((\"on\" + eventName) in window) {\n            this.windowEventManager.addEvent(eventName, eventHandler);\n            return this;\n        }\n        if ((\"on\" + eventName) in document) {\n            this.documentEventListeners.addEvent(eventName, eventHandler);\n            return this;\n        }\n        return super.on(eventName, eventHandler);\n    }\n    once(eventName, eventHandler) {\n        if ((\"on\" + eventName) in window) {\n            this.windowEventManager.addOnceEvent(eventName, eventHandler);\n            return this;\n        }\n        if ((\"on\" + eventName) in document) {\n            this.documentEventListeners.addOnceEvent(eventName, eventHandler);\n            return this;\n        }\n        return super.once(eventName, eventHandler);\n    }\n    off(eventName, eventHandler) {\n        if ((\"on\" + eventName) in window) {\n            this.windowEventManager.removeEvent(eventName, eventHandler);\n            return this;\n        }\n        if ((\"on\" + eventName) in document) {\n            this.documentEventListeners.removeEvent(eventName, eventHandler);\n            return this;\n        }\n        return super.off(eventName, eventHandler);\n    }\n    hasEvent(eventName) {\n        if ((\"on\" + eventName) in window) {\n            return this.windowEventManager.hasEvent(eventName);\n        }\n        if ((\"on\" + eventName) in document) {\n            return this.documentEventListeners.hasEvent(eventName);\n        }\n        return super.hasEvent(eventName);\n    }\n    emit(eventName, ...args) {\n        if ((\"on\" + eventName) in window) {\n            const event = new Event(eventName);\n            window.dispatchEvent(event);\n            return Promise.resolve([]);\n        }\n        if ((\"on\" + eventName) in document) {\n            const event = new Event(eventName);\n            document.dispatchEvent(event);\n            return Promise.resolve([]);\n        }\n        return super.emit(eventName, ...args);\n    }\n    bind(target, eventName, eventHandler) {\n        return super.bind(target, eventName, eventHandler);\n    }\n    remove() {\n        this.windowEventManager.remove();\n        this.documentEventListeners.remove();\n        delete this.windowEventManager;\n        delete this.documentEventListeners;\n        super.remove();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AppRoot());\n//# sourceMappingURL=AppRoot.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/dom/AppRoot.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/dom/Dom.js":
/*!**********************************************!*\
  !*** ../../GitHub/app-module/lib/dom/Dom.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _createElementBySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElementBySelector.js */ \"../../GitHub/app-module/lib/dom/createElementBySelector.js\");\n/* harmony import */ var _HTMLElementEventManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTMLElementEventManager.js */ \"../../GitHub/app-module/lib/dom/HTMLElementEventManager.js\");\n\n\n\nclass Dom extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventNode {\n    htmlElement;\n    htmlElementEventManager;\n    constructor(elementOrSelector, ...children) {\n        super();\n        this.htmlElement = elementOrSelector instanceof Element\n            ? elementOrSelector\n            : (0,_createElementBySelector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elementOrSelector ?? \"\");\n        this.htmlElementEventManager = new _HTMLElementEventManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.htmlElement);\n        this.append(...children);\n    }\n    prependText(text) {\n        if (this.htmlElement instanceof HTMLTextAreaElement) {\n            this.htmlElement.value = text + this.htmlElement.value;\n        }\n        else {\n            const fragment = document.createDocumentFragment();\n            text.split(\"\\n\").forEach((line, index) => {\n                if (index > 0)\n                    fragment.appendChild(document.createElement(\"br\"));\n                fragment.appendChild(document.createTextNode(line));\n            });\n            this.htmlElement.prepend(fragment);\n        }\n        return this;\n    }\n    appendText(text) {\n        if (this.htmlElement instanceof HTMLTextAreaElement) {\n            this.htmlElement.value += text;\n        }\n        else {\n            const fragment = document.createDocumentFragment();\n            text.split(\"\\n\").forEach((line, index) => {\n                if (index > 0)\n                    fragment.appendChild(document.createElement(\"br\"));\n                fragment.appendChild(document.createTextNode(line));\n            });\n            this.htmlElement.appendChild(fragment);\n        }\n        return this;\n    }\n    prepend(...children) {\n        for (const child of children) {\n            if (child === undefined)\n                continue;\n            else if (child instanceof Dom)\n                child.appendTo(this, 0);\n            else if (typeof child === \"string\")\n                this.prependText(child);\n            else {\n                Object.assign(this.htmlElement, child);\n                if (child.style)\n                    this.style(child.style);\n            }\n        }\n        return this;\n    }\n    append(...children) {\n        for (const child of children) {\n            if (child === undefined)\n                continue;\n            else if (child instanceof Dom)\n                child.appendTo(this);\n            else if (typeof child === \"string\")\n                this.appendText(child);\n            else {\n                Object.assign(this.htmlElement, child);\n                if (child.style)\n                    this.style(child.style);\n            }\n        }\n        return this;\n    }\n    isVisible() {\n        if (this.parent) {\n            return this.parent.isVisible() ||\n                this.parent.htmlElement === document.body;\n        }\n        return false;\n    }\n    notifyVisibility() {\n        this.emit(\"visible\");\n        this.children.forEach((child) => child.notifyVisibility());\n    }\n    appendTo(parent, index) {\n        if (index === undefined || index >= parent.htmlElement.childNodes.length) {\n            parent.htmlElement.appendChild(this.htmlElement);\n        }\n        else {\n            const referenceNode = parent.htmlElement.childNodes[index];\n            parent.htmlElement.insertBefore(this.htmlElement, referenceNode);\n        }\n        super.appendTo(parent, index);\n        if (this.isVisible())\n            this.notifyVisibility();\n        return this;\n    }\n    clear(...except) {\n        super.clear(...except);\n        if (this.children.length === 0)\n            this.htmlElement.innerHTML = \"\";\n        return this;\n    }\n    set text(text) {\n        this.clear();\n        if (text)\n            this.appendText(text);\n    }\n    get text() {\n        return this.htmlElement.textContent ?? \"\";\n    }\n    on(eventName, eventHandler) {\n        if ((\"on\" + eventName) in this.htmlElement) {\n            this.htmlElementEventManager.addEvent(eventName, eventHandler);\n            return this;\n        }\n        return super.on(eventName, eventHandler);\n    }\n    once(eventName, eventHandler) {\n        if ((\"on\" + eventName) in this.htmlElement) {\n            this.htmlElementEventManager.addOnceEvent(eventName, eventHandler);\n            return this;\n        }\n        return super.once(eventName, eventHandler);\n    }\n    hasEvent(eventName) {\n        if ((\"on\" + eventName) in this.htmlElement) {\n            return this.htmlElementEventManager.hasEvent(eventName);\n        }\n        return super.hasEvent(eventName);\n    }\n    off(eventName, eventHandler) {\n        if ((\"on\" + eventName) in this.htmlElement) {\n            this.htmlElementEventManager.removeEvent(eventName, eventHandler);\n            return this;\n        }\n        return super.off(eventName, eventHandler);\n    }\n    emit(eventName, ...args) {\n        if ((\"on\" + eventName) in this.htmlElement) {\n            const event = new Event(eventName);\n            this.htmlElement.dispatchEvent(event);\n            return Promise.resolve([]);\n        }\n        return super.emit(eventName, ...args);\n    }\n    bind(target, eventName, eventHandler) {\n        return super.bind(target, eventName, eventHandler);\n    }\n    addClass(...classNames) {\n        this.htmlElement.classList.add(...classNames);\n        return this;\n    }\n    hasClass(className) {\n        return this.htmlElement.classList.contains(className);\n    }\n    removeClass(...classNames) {\n        this.htmlElement.classList.remove(...classNames);\n        return this;\n    }\n    style(styles) {\n        if (typeof styles === \"string\") {\n            return this.htmlElement.style.getPropertyValue(styles);\n        }\n        else {\n            Object.assign(this.htmlElement.style, styles);\n            return this;\n        }\n    }\n    calculateRect() {\n        return this.htmlElement.getBoundingClientRect();\n    }\n    clone() {\n        return new Dom(this.htmlElement.cloneNode(true));\n    }\n    remove() {\n        if (this.isRemoved())\n            throw new Error(\"Dom already removed\");\n        this.htmlElement.remove();\n        this.htmlElementEventManager.remove();\n        delete this.htmlElementEventManager;\n        super.remove();\n    }\n}\n//# sourceMappingURL=Dom.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/dom/Dom.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/dom/HTMLElementEventManager.js":
/*!******************************************************************!*\
  !*** ../../GitHub/app-module/lib/dom/HTMLElementEventManager.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HTMLElementEventManager)\n/* harmony export */ });\nclass HTMLElementEventManager {\n    htmlElement;\n    events = {};\n    constructor(htmlElement) {\n        this.htmlElement = htmlElement;\n    }\n    addEvent(eventName, eventHandler) {\n        if (!this.events[eventName])\n            this.events[eventName] = [];\n        this.events[eventName].push({\n            eventHandler,\n            eventHandlerWrapper: eventHandler,\n        });\n        this.htmlElement.addEventListener(eventName, eventHandler);\n    }\n    addOnceEvent(eventName, eventHandler) {\n        if (!this.events[eventName])\n            this.events[eventName] = [];\n        const eventHandlerWrapper = ((...args) => {\n            const result = eventHandler(...args);\n            this.removeEvent(eventName, eventHandler);\n            return result;\n        });\n        this.events[eventName].push({\n            eventHandler,\n            eventHandlerWrapper,\n        });\n        this.htmlElement.addEventListener(eventName, eventHandlerWrapper);\n    }\n    hasEvent(eventName) {\n        const events = this.events[eventName];\n        if (!events)\n            return false;\n        return events.length > 0;\n    }\n    removeEvent(eventName, eventHandler) {\n        const events = this.events[eventName];\n        const eventHandlerWrappers = [];\n        if (!events)\n            return;\n        if (!eventHandler) {\n            for (const { eventHandlerWrapper } of events) {\n                eventHandlerWrappers.push(eventHandlerWrapper);\n            }\n            delete this.events[eventName];\n        }\n        else {\n            const index = events.findIndex((h) => h.eventHandler === eventHandler);\n            if (index !== -1) {\n                const { eventHandlerWrapper } = events[index];\n                eventHandlerWrappers.push(eventHandlerWrapper);\n                events.splice(index, 1);\n            }\n            if (events.length === 0)\n                delete this.events[eventName];\n        }\n        for (const eventHandlerWrapper of eventHandlerWrappers) {\n            this.htmlElement.removeEventListener(eventName, eventHandlerWrapper);\n        }\n    }\n    remove() {\n        if (!this.events)\n            throw new Error(\"This manager is already removed\");\n        for (const eventName in Object.keys(this.events)) {\n            const events = this.events[eventName];\n            if (events) {\n                for (const { eventHandlerWrapper } of events) {\n                    this.htmlElement.removeEventListener(eventName, eventHandlerWrapper);\n                }\n            }\n        }\n        delete this.events;\n    }\n}\n//# sourceMappingURL=HTMLElementEventManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/dom/HTMLElementEventManager.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/dom/createElementBySelector.js":
/*!******************************************************************!*\
  !*** ../../GitHub/app-module/lib/dom/createElementBySelector.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElementBySelector)\n/* harmony export */ });\nfunction createElementBySelector(selector) {\n    const parts = (selector || \"div\").split(/([#.])/);\n    const tagName = parts[0] || \"div\";\n    const element = document.createElement(tagName);\n    let currentType = \"\";\n    for (let i = 1; i < parts.length; i += 2) {\n        currentType = parts[i];\n        const value = parts[i + 1];\n        if (currentType === \"#\")\n            element.id = value;\n        else if (currentType === \".\")\n            element.classList.add(value);\n    }\n    return element;\n}\n//# sourceMappingURL=createElementBySelector.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/dom/createElementBySelector.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/dom/el.js":
/*!*********************************************!*\
  !*** ../../GitHub/app-module/lib/dom/el.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ el)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_universal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/universal-page */ \"../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/index.js\");\n/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dom.js */ \"../../GitHub/app-module/lib/dom/Dom.js\");\n\n\nfunction el(elementOrSelector, ...children) {\n    return new _Dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](elementOrSelector, ...children);\n}\n_commonmodule_universal_page__WEBPACK_IMPORTED_MODULE_0__.el.impl = el;\n_commonmodule_universal_page__WEBPACK_IMPORTED_MODULE_0__.html.impl = (htmlContent) => {\n    const parser = new DOMParser();\n    const doc = parser.parseFromString(htmlContent, \"text/html\");\n    return new _Dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](doc.body.firstChild);\n};\n//# sourceMappingURL=el.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/dom/el.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/i18n/I18nMessageManager.js":
/*!**************************************************************!*\
  !*** ../../GitHub/app-module/lib/i18n/I18nMessageManager.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass I18nMessageManager {\n    messages = {};\n    addMessage(language, key, message) {\n        if (!this.messages[language]) {\n            this.messages[language] = {};\n        }\n        this.messages[language][key] = message;\n    }\n    addMessages(language, messages) {\n        if (!this.messages[language]) {\n            this.messages[language] = {};\n        }\n        this.messages[language] = { ...this.messages[language], ...messages };\n    }\n    addMessagesBulk(messages) {\n        for (const [language, messageDictionary] of Object.entries(messages)) {\n            if (!this.messages[language]) {\n                this.messages[language] = {};\n            }\n            this.messages[language] = {\n                ...this.messages[language],\n                ...messageDictionary,\n            };\n        }\n    }\n    getMessage(language, key) {\n        const path = key.split(\".\");\n        let current = this.messages[language];\n        if (!current) {\n            console.error(`Language \"${language}\" not exists.`);\n            return \"\";\n        }\n        for (const segment of path) {\n            if (current[segment] === undefined) {\n                console.error(`Message key \"${key}\" not exists in language \"${language}\".`);\n                return \"\";\n            }\n            current = current[segment];\n        }\n        if (typeof current !== \"string\") {\n            console.error(`The value for \"${key}\" is not a string.`);\n            return \"\";\n        }\n        return current;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new I18nMessageManager());\n//# sourceMappingURL=I18nMessageManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/i18n/I18nMessageManager.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/i18n/msg.js":
/*!***********************************************!*\
  !*** ../../GitHub/app-module/lib/i18n/msg.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ msg)\n/* harmony export */ });\n/* harmony import */ var _utils_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Browser.js */ \"../../GitHub/app-module/lib/utils/Browser.js\");\n/* harmony import */ var _I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./I18nMessageManager.js */ \"../../GitHub/app-module/lib/i18n/I18nMessageManager.js\");\n\n\nfunction msg(key, params) {\n    const message = _I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMessage(_utils_Browser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].languageCode, key);\n    if (!params)\n        return message;\n    return message.replace(/%\\{(\\w+)\\}/g, (match, paramKey) => {\n        const replacement = params[paramKey];\n        return replacement !== undefined ? String(replacement) : match;\n    });\n}\n//# sourceMappingURL=msg.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/i18n/msg.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/index.js":
/*!********************************************!*\
  !*** ../../GitHub/app-module/lib/index.js ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppRoot: () => (/* reexport safe */ _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   AudioBufferLoader: () => (/* reexport safe */ _loaders_AudioBufferLoader_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   AudioContextManager: () => (/* reexport safe */ _sound_AudioContextManager_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   AuthTokenManager: () => (/* reexport safe */ _store_AuthTokenManager_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]),\n/* harmony export */   BackgroundMusic: () => (/* reexport safe */ _sound_BackgroundMusic_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   Browser: () => (/* reexport safe */ _utils_Browser_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"]),\n/* harmony export */   Dom: () => (/* reexport safe */ _dom_Dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   DomUtils: () => (/* reexport safe */ _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"]),\n/* harmony export */   FontLoader: () => (/* reexport safe */ _loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   I18nMessageManager: () => (/* reexport safe */ _i18n_I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   ImageOptimizer: () => (/* reexport safe */ _utils_ImageOptimizer_js__WEBPACK_IMPORTED_MODULE_22__[\"default\"]),\n/* harmony export */   RandomSoundLooper: () => (/* reexport safe */ _sound_RandomSoundLooper_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   Router: () => (/* reexport safe */ _route_Router_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   SPAInitializer: () => (/* reexport safe */ _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n/* harmony export */   Sound: () => (/* reexport safe */ _sound_Sound_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   SoundEffectPlayer: () => (/* reexport safe */ _sound_SoundEffectPlayer_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   Store: () => (/* reexport safe */ _store_Store_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]),\n/* harmony export */   StyleUtils: () => (/* reexport safe */ _utils_StyleUtils_js__WEBPACK_IMPORTED_MODULE_23__[\"default\"]),\n/* harmony export */   Theme: () => (/* reexport safe */ _theme_Theme_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]),\n/* harmony export */   ThemeManager: () => (/* reexport safe */ _theme_ThemeManager_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"]),\n/* harmony export */   View: () => (/* reexport safe */ _route_View_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   VolumeManager: () => (/* reexport safe */ _sound_VolumeManager_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n/* harmony export */   WebSocketClient: () => (/* reexport safe */ _websocket_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"]),\n/* harmony export */   el: () => (/* reexport safe */ _dom_el_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   msg: () => (/* reexport safe */ _i18n_msg_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/AppRoot.js */ \"../../GitHub/app-module/lib/dom/AppRoot.js\");\n/* harmony import */ var _dom_Dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Dom.js */ \"../../GitHub/app-module/lib/dom/Dom.js\");\n/* harmony import */ var _dom_el_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/el.js */ \"../../GitHub/app-module/lib/dom/el.js\");\n/* harmony import */ var _i18n_I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/I18nMessageManager.js */ \"../../GitHub/app-module/lib/i18n/I18nMessageManager.js\");\n/* harmony import */ var _i18n_msg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/msg.js */ \"../../GitHub/app-module/lib/i18n/msg.js\");\n/* harmony import */ var _loaders_AudioBufferLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/AudioBufferLoader.js */ \"../../GitHub/app-module/lib/loaders/AudioBufferLoader.js\");\n/* harmony import */ var _loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/FontLoader.js */ \"../../GitHub/app-module/lib/loaders/FontLoader.js\");\n/* harmony import */ var _route_Router_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route/Router.js */ \"../../GitHub/app-module/lib/route/Router.js\");\n/* harmony import */ var _route_View_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route/View.js */ \"../../GitHub/app-module/lib/route/View.js\");\n/* harmony import */ var _sound_AudioContextManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sound/AudioContextManager.js */ \"../../GitHub/app-module/lib/sound/AudioContextManager.js\");\n/* harmony import */ var _sound_BackgroundMusic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sound/BackgroundMusic.js */ \"../../GitHub/app-module/lib/sound/BackgroundMusic.js\");\n/* harmony import */ var _sound_RandomSoundLooper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sound/RandomSoundLooper.js */ \"../../GitHub/app-module/lib/sound/RandomSoundLooper.js\");\n/* harmony import */ var _sound_Sound_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sound/Sound.js */ \"../../GitHub/app-module/lib/sound/Sound.js\");\n/* harmony import */ var _sound_SoundEffectPlayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sound/SoundEffectPlayer.js */ \"../../GitHub/app-module/lib/sound/SoundEffectPlayer.js\");\n/* harmony import */ var _sound_VolumeManager_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sound/VolumeManager.js */ \"../../GitHub/app-module/lib/sound/VolumeManager.js\");\n/* harmony import */ var _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SPAInitializer.js */ \"../../GitHub/app-module/lib/SPAInitializer.js\");\n/* harmony import */ var _store_AuthTokenManager_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/AuthTokenManager.js */ \"../../GitHub/app-module/lib/store/AuthTokenManager.js\");\n/* harmony import */ var _store_Store_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/Store.js */ \"../../GitHub/app-module/lib/store/Store.js\");\n/* harmony import */ var _theme_Theme_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/Theme.js */ \"../../GitHub/app-module/lib/theme/Theme.js\");\n/* harmony import */ var _theme_ThemeManager_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/ThemeManager.js */ \"../../GitHub/app-module/lib/theme/ThemeManager.js\");\n/* harmony import */ var _utils_Browser_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/Browser.js */ \"../../GitHub/app-module/lib/utils/Browser.js\");\n/* harmony import */ var _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/DomUtils.js */ \"../../GitHub/app-module/lib/utils/DomUtils.js\");\n/* harmony import */ var _utils_ImageOptimizer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/ImageOptimizer.js */ \"../../GitHub/app-module/lib/utils/ImageOptimizer.js\");\n/* harmony import */ var _utils_StyleUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/StyleUtils.js */ \"../../GitHub/app-module/lib/utils/StyleUtils.js\");\n/* harmony import */ var _websocket_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./websocket/WebSocketClient.js */ \"../../GitHub/app-module/lib/websocket/WebSocketClient.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_route_Router_js__WEBPACK_IMPORTED_MODULE_7__, _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_15__]);\n([_route_Router_js__WEBPACK_IMPORTED_MODULE_7__, _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/index.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/loaders/AudioBufferLoader.js":
/*!****************************************************************!*\
  !*** ../../GitHub/app-module/lib/loaders/AudioBufferLoader.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _sound_AudioContextManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sound/AudioContextManager.js */ \"../../GitHub/app-module/lib/sound/AudioContextManager.js\");\n\n\nclass AudioBufferLoader extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.ResourceLoader {\n    async loadResource(src) {\n        const loadPromise = (async () => {\n            const response = await fetch(src);\n            if (!response.ok)\n                throw new Error(`Failed to load audio data: ${src}`);\n            const arrayBuffer = await response.arrayBuffer();\n            const audioBuffer = await _sound_AudioContextManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAudioContext()\n                .decodeAudioData(arrayBuffer);\n            this.pendingLoads.delete(src);\n            if (this.isResourceInUse(src)) {\n                if (this.resources.has(src)) {\n                    throw new Error(`Audio buffer already exists: ${src}`);\n                }\n                else {\n                    this.resources.set(src, audioBuffer);\n                    return audioBuffer;\n                }\n            }\n            else {\n                return undefined;\n            }\n        })();\n        this.pendingLoads.set(src, loadPromise);\n        return await loadPromise;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AudioBufferLoader());\n//# sourceMappingURL=AudioBufferLoader.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/loaders/AudioBufferLoader.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/loaders/FontLoader.js":
/*!*********************************************************!*\
  !*** ../../GitHub/app-module/lib/loaders/FontLoader.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n\nclass FontLoader extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.ResourceLoader {\n    async loadResource(fontName) {\n        const loadPromise = (async () => {\n            if (\"fonts\" in document) {\n                await document.fonts.load(`1em ${fontName}`);\n                await document.fonts.ready;\n            }\n            else {\n                const span = window.document.createElement(\"span\");\n                span.style.fontFamily = \"sans-serif\";\n                span.style.position = \"absolute\";\n                span.style.visibility = \"hidden\";\n                span.style.fontSize = \"72px\";\n                span.textContent = \"FontCheck\";\n                window.document.body.appendChild(span);\n                const initialWidth = span.offsetWidth;\n                span.style.fontFamily = `${fontName}, sans-serif`;\n                await new Promise((resolve) => {\n                    const checkInterval = setInterval(() => {\n                        if (span.offsetWidth !== initialWidth) {\n                            clearInterval(checkInterval);\n                            document.body.removeChild(span);\n                            resolve();\n                        }\n                    }, 100);\n                });\n            }\n            this.pendingLoads.delete(fontName);\n            return true;\n        })();\n        this.pendingLoads.set(fontName, loadPromise);\n        return await loadPromise;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FontLoader());\n//# sourceMappingURL=FontLoader.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/loaders/FontLoader.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/route/Router.js":
/*!***************************************************!*\
  !*** ../../GitHub/app-module/lib/route/Router.js ***!
  \***************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/AppRoot.js */ \"../../GitHub/app-module/lib/dom/AppRoot.js\");\n\n\nif (!window.URLPattern) {\n    await __webpack_require__.e(/*! import() */ \"vendors-GitHub_app-module_node_modules_urlpattern-polyfill_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! urlpattern-polyfill */ \"../../GitHub/app-module/node_modules/urlpattern-polyfill/index.js\"));\n}\nclass Router extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    prefix = \"\";\n    routes = [];\n    isViewOpening = false;\n    activeViews = [];\n    constructor() {\n        super();\n        _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(\"popstate\", (event) => this.updateActiveViews(event.state));\n    }\n    openView(View, data) {\n        this.isViewOpening = true;\n        const view = new View();\n        view.changeData(data);\n        this.activeViews.push(view);\n        this.isViewOpening = false;\n    }\n    add(pathname, View, exclude) {\n        const pathnames = Array.isArray(pathname) ? pathname : [pathname];\n        const urlPatterns = pathnames.map((path) => new URLPattern({ pathname: `${this.prefix}${path}` }));\n        const excludePatterns = Array.isArray(exclude)\n            ? exclude.map((path) => new URLPattern({ pathname: `${this.prefix}${path}` }))\n            : [new URLPattern({ pathname: `${this.prefix}${exclude}` })];\n        this.routes.push({ urlPatterns, excludePatterns, View });\n        const urlPatternParams = urlPatterns.find((pattern) => pattern.test({ pathname: location.pathname }))?.exec({ pathname: location.pathname })?.pathname.groups;\n        const excludePatternParams = excludePatterns.find((pattern) => pattern.test({ pathname: location.pathname }))?.exec({ pathname: location.pathname })?.pathname.groups;\n        if (urlPatternParams && !excludePatternParams) {\n            this.openView(View, urlPatternParams);\n        }\n        return this;\n    }\n    updateActiveViews(data) {\n        for (const route of this.routes) {\n            const openingView = this.activeViews.find((view) => view instanceof route.View);\n            const urlPatternParams = route.urlPatterns.find((pattern) => pattern.test({ pathname: location.pathname }))?.exec({ pathname: location.pathname })?.pathname.groups;\n            const excludePatternParams = route.excludePatterns.find((pattern) => pattern.test({ pathname: location.pathname }))?.exec({ pathname: location.pathname })?.pathname.groups;\n            if (urlPatternParams) {\n                if (data)\n                    Object.assign(data, urlPatternParams);\n                else\n                    data = urlPatternParams;\n            }\n            delete data?.[\"0\"];\n            if (urlPatternParams && !excludePatternParams) {\n                openingView\n                    ? openingView.changeData(data)\n                    : this.openView(route.View, data);\n            }\n            else if (openingView) {\n                openingView.close();\n                _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.ArrayUtils.pull(this.activeViews, openingView);\n            }\n        }\n    }\n    performNavigation(pathname, data, replace) {\n        replace\n            ? history.replaceState(undefined, \"\", `${this.prefix}${pathname}`)\n            : history.pushState(undefined, \"\", `${this.prefix}${pathname}`);\n        this.emit(\"routeChanged\", pathname, data);\n        this.updateActiveViews(data);\n        window.scrollTo(0, 0);\n    }\n    go(pathname, data) {\n        if (location.pathname !== `${this.prefix}${pathname}`) {\n            if (this.isViewOpening) {\n                setTimeout(() => this.performNavigation(pathname, data, false), 0);\n            }\n            else {\n                this.performNavigation(pathname, data, false);\n            }\n        }\n    }\n    goWithoutHistory(pathname, data) {\n        if (location.pathname !== `${this.prefix}${pathname}`) {\n            if (this.isViewOpening) {\n                setTimeout(() => this.performNavigation(pathname, data, true), 0);\n            }\n            else {\n                this.performNavigation(pathname, data, true);\n            }\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Router());\n//# sourceMappingURL=Router.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/route/Router.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/route/View.js":
/*!*************************************************!*\
  !*** ../../GitHub/app-module/lib/route/View.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\nclass View {\n    eventListeners = new Map();\n    container;\n    changeData(data) { }\n    addViewManagedEvent(target, eventName, listener) {\n        if (!this.eventListeners.has(target)) {\n            this.eventListeners.set(target, new Map());\n        }\n        const targetListeners = this.eventListeners.get(target);\n        targetListeners.set(eventName, listener);\n        target.on(eventName, listener);\n        return this;\n    }\n    removeAllEvents() {\n        for (const [target, listeners] of this.eventListeners) {\n            for (const [eventName, listener] of listeners) {\n                target.off(eventName, listener);\n            }\n        }\n        this.eventListeners.clear();\n    }\n    close() {\n        this.removeAllEvents();\n        if (this.container && this.container.isRemoved() !== true) {\n            this.container.remove();\n        }\n    }\n}\n//# sourceMappingURL=View.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/route/View.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/sound/AudioContextManager.js":
/*!****************************************************************!*\
  !*** ../../GitHub/app-module/lib/sound/AudioContextManager.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/AppRoot.js */ \"../../GitHub/app-module/lib/dom/AppRoot.js\");\n\nconst canPlayOgg = new Audio().canPlayType(\"audio/ogg\") !== \"\";\nconst audioContext = new (window.AudioContext || window.webkitAudioContext)();\n_dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"mousedown\", () => audioContext.resume());\n_dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"touchend\", () => audioContext.resume());\nclass AudioContextManager {\n    canPlayOgg() {\n        return canPlayOgg;\n    }\n    getAudioContext() {\n        return audioContext;\n    }\n    async getAvailableAudioContext() {\n        if (audioContext.state === \"suspended\") {\n            await audioContext.resume();\n        }\n        return audioContext;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AudioContextManager());\n//# sourceMappingURL=AudioContextManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/sound/AudioContextManager.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/sound/BackgroundMusic.js":
/*!************************************************************!*\
  !*** ../../GitHub/app-module/lib/sound/BackgroundMusic.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BackgroundMusic)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/AppRoot.js */ \"../../GitHub/app-module/lib/dom/AppRoot.js\");\n/* harmony import */ var _utils_Browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Browser.js */ \"../../GitHub/app-module/lib/utils/Browser.js\");\n/* harmony import */ var _AudioContextManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudioContextManager.js */ \"../../GitHub/app-module/lib/sound/AudioContextManager.js\");\n/* harmony import */ var _Sound_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sound.js */ \"../../GitHub/app-module/lib/sound/Sound.js\");\n/* harmony import */ var _VolumeManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VolumeManager.js */ \"../../GitHub/app-module/lib/sound/VolumeManager.js\");\n\n\n\n\n\n\nclass BackgroundMusic extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    sounds = [];\n    currentSound;\n    currentIndex = -1;\n    constructor(sources) {\n        super();\n        if (!Array.isArray(sources))\n            sources = [sources];\n        for (const src of sources) {\n            const url = _AudioContextManager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].canPlayOgg() && src.ogg\n                ? src.ogg\n                : src.mp3;\n            const sound = new _Sound_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](url, _VolumeManager_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].backgroundMusicVolume);\n            sound.on(\"ended\", this.handleSoundEnded);\n            this.sounds.push(sound);\n        }\n        if (_utils_Browser_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isMobileDevice()) {\n            _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this, \"visibilitychange\", () => {\n                if (this.currentSound)\n                    document.hidden ? this.pause() : this.play();\n            });\n        }\n        _VolumeManager_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].on(\"backgroundMusicVolumeChanged\", (volume) => {\n            for (const sound of this.sounds) {\n                sound.volume = volume;\n            }\n        });\n    }\n    getRandomTrack() {\n        if (this.sounds.length <= 1) {\n            return this.sounds[0];\n        }\n        let newIndex;\n        do {\n            newIndex = _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.IntegerUtils.random(0, this.sounds.length - 1);\n        } while (newIndex === this.currentIndex);\n        this.currentIndex = newIndex;\n        return this.sounds[newIndex];\n    }\n    handleSoundEnded = () => {\n        this.currentSound?.stop();\n        this.currentSound = this.getRandomTrack();\n        this.currentSound.play();\n    };\n    play() {\n        if (!this.currentSound)\n            this.currentSound = this.getRandomTrack();\n        this.currentSound.play();\n        return this;\n    }\n    pause() {\n        this.currentSound?.pause();\n        return this;\n    }\n    stop() {\n        this.currentSound?.stop();\n        this.currentSound = undefined;\n        this.currentIndex = -1;\n        return this;\n    }\n    remove() {\n        for (const sound of this.sounds) {\n            sound.remove();\n        }\n        super.remove();\n    }\n}\n//# sourceMappingURL=BackgroundMusic.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/sound/BackgroundMusic.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/sound/RandomSoundLooper.js":
/*!**************************************************************!*\
  !*** ../../GitHub/app-module/lib/sound/RandomSoundLooper.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RandomSoundLooper)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/AppRoot.js */ \"../../GitHub/app-module/lib/dom/AppRoot.js\");\n/* harmony import */ var _utils_Browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Browser.js */ \"../../GitHub/app-module/lib/utils/Browser.js\");\n/* harmony import */ var _Sound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sound.js */ \"../../GitHub/app-module/lib/sound/Sound.js\");\n\n\n\n\nclass RandomSoundLooper extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    _volume;\n    sounds = [];\n    currentSound;\n    constructor(sources, _volume = 0.8) {\n        super();\n        this._volume = _volume;\n        for (const src of sources) {\n            const sound = new _Sound_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](src, _volume);\n            sound.on(\"ended\", this.handleSoundEnded);\n            this.sounds.push(sound);\n        }\n        if (_utils_Browser_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isMobileDevice()) {\n            _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this, \"visibilitychange\", () => {\n                document.hidden ? this.pause() : this.play();\n            });\n        }\n    }\n    getRandomSound() {\n        if (this.sounds.length <= 1)\n            return this.sounds[0];\n        return this.sounds[_commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.IntegerUtils.random(0, this.sounds.length - 1)];\n    }\n    handleSoundEnded = () => {\n        this.currentSound?.stop();\n        this.currentSound = this.getRandomSound();\n        this.currentSound.play();\n    };\n    play() {\n        if (!this.currentSound) {\n            this.currentSound = this.getRandomSound();\n        }\n        this.currentSound.play();\n        return this;\n    }\n    pause() {\n        this.currentSound?.pause();\n        return this;\n    }\n    stop() {\n        this.currentSound?.stop();\n        this.currentSound = undefined;\n        return this;\n    }\n    set volume(volume) {\n        this._volume = volume;\n        for (const sound of this.sounds) {\n            sound.volume = volume;\n        }\n    }\n    get volume() {\n        return this.currentSound ? this.currentSound.volume : this._volume;\n    }\n    remove() {\n        for (const sound of this.sounds) {\n            sound.remove();\n        }\n        super.remove();\n    }\n}\n//# sourceMappingURL=RandomSoundLooper.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/sound/RandomSoundLooper.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/sound/Sound.js":
/*!**************************************************!*\
  !*** ../../GitHub/app-module/lib/sound/Sound.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sound)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _loaders_AudioBufferLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loaders/AudioBufferLoader.js */ \"../../GitHub/app-module/lib/loaders/AudioBufferLoader.js\");\n/* harmony import */ var _utils_Browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Browser.js */ \"../../GitHub/app-module/lib/utils/Browser.js\");\n/* harmony import */ var _AudioContextManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudioContextManager.js */ \"../../GitHub/app-module/lib/sound/AudioContextManager.js\");\n\n\n\n\nclass Sound extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    src;\n    _volume;\n    loop;\n    isPlaying = false;\n    isPaused = false;\n    loadAudioPromise;\n    audioBuffer;\n    audioContext;\n    gainNode;\n    source;\n    startTime = 0;\n    pauseTime = 0;\n    offset = 0;\n    isAudioInitialized = false;\n    constructor(src, _volume = 0.8, loop = false) {\n        super();\n        this.src = src;\n        this._volume = _volume;\n        this.loop = loop;\n        this.loadAudioPromise = this.loadAudio();\n    }\n    async loadAudio() {\n        this.audioBuffer = await _loaders_AudioBufferLoader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].load(this.src);\n    }\n    async initializeAudio() {\n        if (!this.audioBuffer)\n            await this.loadAudioPromise;\n        if (!this.isPlaying)\n            return;\n        if (!this.audioContext) {\n            this.audioContext = await _AudioContextManager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAvailableAudioContext();\n        }\n        if (!this.isPlaying)\n            return;\n        if (!this.gainNode) {\n            this.gainNode = this.audioContext.createGain();\n            this.gainNode.gain.value = this._volume;\n            this.gainNode.connect(this.audioContext.destination);\n        }\n        this.source = this.audioContext.createBufferSource();\n        this.source.buffer = this.audioBuffer;\n        this.source.loop = this.loop;\n        this.source.connect(this.gainNode);\n        this.source.start(0, this.offset);\n        this.startTime = this.audioContext.currentTime;\n        this.source.onended = () => {\n            if (!this.isPaused) {\n                const isPlaying = this.isPlaying;\n                if (!this.loop)\n                    this.stop();\n                if (isPlaying)\n                    this.emit(\"ended\");\n            }\n        };\n        this.isAudioInitialized = true;\n    }\n    play() {\n        if (_utils_Browser_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isMobileDevice() && !_utils_Browser_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isPageVisible()) {\n            return this;\n        }\n        if (this.isPlaying)\n            this.stop();\n        if (!this.isPaused)\n            this.offset = 0;\n        this.isPlaying = true;\n        this.isPaused = false;\n        this.initializeAudio();\n        return this;\n    }\n    stopSource() {\n        if (this.source) {\n            this.source.stop();\n            this.source.disconnect();\n            this.source = undefined;\n        }\n    }\n    pause() {\n        if (this.isPlaying && !this.isPaused) {\n            if (this.audioContext) {\n                this.pauseTime = this.audioContext.currentTime;\n                this.offset += this.pauseTime - this.startTime;\n            }\n            this.isPaused = true;\n            this.isPlaying = false;\n            this.stopSource();\n        }\n        return this;\n    }\n    stop() {\n        this.isPlaying = false;\n        this.isPaused = false;\n        this.offset = 0;\n        this.stopSource();\n        return this;\n    }\n    set volume(volume) {\n        this._volume = Math.max(0, Math.min(1, volume));\n        if (this.gainNode) {\n            this.gainNode.gain.value = this._volume;\n        }\n    }\n    get volume() {\n        return this._volume;\n    }\n    remove() {\n        this.stop();\n        if (this.gainNode) {\n            this.gainNode.disconnect();\n            this.gainNode = undefined;\n        }\n        this.audioBuffer = undefined;\n        this.audioContext = undefined;\n        _loaders_AudioBufferLoader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].release(this.src);\n        super.remove();\n    }\n}\n//# sourceMappingURL=Sound.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/sound/Sound.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/sound/SoundEffectPlayer.js":
/*!**************************************************************!*\
  !*** ../../GitHub/app-module/lib/sound/SoundEffectPlayer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _Sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sound.js */ \"../../GitHub/app-module/lib/sound/Sound.js\");\n/* harmony import */ var _VolumeManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VolumeManager.js */ \"../../GitHub/app-module/lib/sound/VolumeManager.js\");\n\n\n\nclass SoundEffectPlayer {\n    playingSounds = [];\n    constructor() {\n        _VolumeManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"soundEffectVolumeChanged\", (volume) => {\n            for (const sound of this.playingSounds) {\n                sound.volume = volume;\n            }\n        });\n    }\n    play(urls) {\n        if (!Array.isArray(urls))\n            urls = [urls];\n        const url = urls[_commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.IntegerUtils.random(0, urls.length - 1)];\n        const sound = new _Sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](url, _VolumeManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].soundEffectVolume)\n            .play()\n            .on(\"ended\", () => {\n            sound.remove();\n            _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.ArrayUtils.pull(this.playingSounds, sound);\n        });\n        this.playingSounds.push(sound);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SoundEffectPlayer());\n//# sourceMappingURL=SoundEffectPlayer.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/sound/SoundEffectPlayer.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/sound/VolumeManager.js":
/*!**********************************************************!*\
  !*** ../../GitHub/app-module/lib/sound/VolumeManager.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _store_Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Store.js */ \"../../GitHub/app-module/lib/store/Store.js\");\n\n\nclass VolumeManager extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    store = new _store_Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"volume-manager\");\n    get backgroundMusicVolume() {\n        return this.store.get(\"backgroundMusicVolume\") ?? 0.5;\n    }\n    set backgroundMusicVolume(volume) {\n        this.store.setPermanent(\"backgroundMusicVolume\", volume);\n        this.emit(\"backgroundMusicVolumeChanged\", volume);\n    }\n    get soundEffectVolume() {\n        return this.store.get(\"soundEffectVolume\") ?? 0.8;\n    }\n    set soundEffectVolume(volume) {\n        this.store.setPermanent(\"soundEffectVolume\", volume);\n        this.emit(\"soundEffectVolumeChanged\", volume);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new VolumeManager());\n//# sourceMappingURL=VolumeManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/sound/VolumeManager.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/store/AuthTokenManager.js":
/*!*************************************************************!*\
  !*** ../../GitHub/app-module/lib/store/AuthTokenManager.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthTokenManager)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store.js */ \"../../GitHub/app-module/lib/store/Store.js\");\n\n\nclass AuthTokenManager extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    store;\n    constructor(storeName) {\n        super();\n        this.store = new _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](storeName);\n    }\n    get token() {\n        return this.store.get(\"token\");\n    }\n    set token(value) {\n        value\n            ? this.store.setPermanent(\"token\", value)\n            : this.store.remove(\"token\");\n        this.emit(\"tokenChanged\", ...[value]);\n    }\n}\n//# sourceMappingURL=AuthTokenManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/store/AuthTokenManager.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/store/Store.js":
/*!**************************************************!*\
  !*** ../../GitHub/app-module/lib/store/Store.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n\nclass Store {\n    prefix;\n    static getStorage(permanent) {\n        return permanent ? localStorage : sessionStorage;\n    }\n    static isStorageAvailable() {\n        try {\n            const testKey = \"__test__\";\n            sessionStorage.setItem(testKey, \"test\");\n            sessionStorage.removeItem(testKey);\n            return true;\n        }\n        catch (e) {\n            return false;\n        }\n    }\n    constructor(name) {\n        if (!_commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.StringUtils.isKebabCase(name)) {\n            throw new Error(\"Name must be in kebab-case format (lowercase and hyphens only).\");\n        }\n        this.prefix = `${name}/`;\n    }\n    getFullKey(key) {\n        return this.prefix + key;\n    }\n    static isQuotaExceededError(e) {\n        return e instanceof DOMException && (e.code === 22 ||\n            e.code === 1014 ||\n            e.name === \"QuotaExceededError\" ||\n            e.name === \"NS_ERROR_DOM_QUOTA_REACHED\");\n    }\n    setValue(key, value, permanent) {\n        const storage = Store.getStorage(permanent);\n        const fullKey = this.getFullKey(key);\n        try {\n            storage.setItem(fullKey, JSON.stringify(value));\n        }\n        catch (e) {\n            if (Store.isQuotaExceededError(e)) {\n                storage.clear();\n                location.reload();\n            }\n            else {\n                throw e;\n            }\n        }\n    }\n    setTemporary(key, value) {\n        this.setValue(key, value, false);\n    }\n    setPermanent(key, value) {\n        this.setValue(key, value, true);\n    }\n    get(key) {\n        const fullKey = this.getFullKey(key);\n        const value = sessionStorage.getItem(fullKey) ??\n            localStorage.getItem(fullKey);\n        if (value === null)\n            return undefined;\n        try {\n            return _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.JsonUtils.parseWithUndefined(value);\n        }\n        catch (e) {\n            console.error(`Failed to parse ${fullKey}: ${value}`);\n            console.error(e);\n        }\n    }\n    getAll() {\n        const result = {};\n        const processStorage = (storage) => {\n            for (let i = 0; i < storage.length; i++) {\n                const key = storage.key(i);\n                if (key?.startsWith(this.prefix)) {\n                    const value = storage.getItem(key);\n                    if (value !== null) {\n                        const parsedKey = key.slice(this.prefix.length);\n                        try {\n                            result[parsedKey] = _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.JsonUtils.parseWithUndefined(value);\n                        }\n                        catch (e) {\n                            console.error(`Failed to parse ${key}: ${value}`);\n                            console.error(e);\n                        }\n                    }\n                }\n            }\n        };\n        processStorage(sessionStorage);\n        processStorage(localStorage);\n        return result;\n    }\n    isPermanent(key) {\n        return localStorage.getItem(this.getFullKey(key)) !== null;\n    }\n    remove(...keys) {\n        keys.forEach((key) => {\n            const fullKey = this.getFullKey(key);\n            sessionStorage.removeItem(fullKey);\n            localStorage.removeItem(fullKey);\n        });\n    }\n    clear() {\n        [sessionStorage, localStorage].forEach((storage) => {\n            for (let i = storage.length - 1; i >= 0; i--) {\n                const key = storage.key(i);\n                if (key?.startsWith(this.prefix)) {\n                    storage.removeItem(key);\n                }\n            }\n        });\n    }\n}\n//# sourceMappingURL=Store.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/store/Store.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/theme/Theme.js":
/*!**************************************************!*\
  !*** ../../GitHub/app-module/lib/theme/Theme.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Theme;\n(function (Theme) {\n    Theme[\"Auto\"] = \"auto\";\n    Theme[\"Dark\"] = \"dark\";\n    Theme[\"Light\"] = \"light\";\n})(Theme || (Theme = {}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceMappingURL=Theme.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/theme/Theme.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/theme/ThemeManager.js":
/*!*********************************************************!*\
  !*** ../../GitHub/app-module/lib/theme/ThemeManager.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_Store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Store.js */ \"../../GitHub/app-module/lib/store/Store.js\");\n/* harmony import */ var _utils_Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Browser.js */ \"../../GitHub/app-module/lib/utils/Browser.js\");\n/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme.js */ \"../../GitHub/app-module/lib/theme/Theme.js\");\n\n\n\nclass ThemeManager {\n    store = new _store_Store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"theme-manager\");\n    init() {\n        this.theme = this.theme;\n    }\n    get theme() {\n        const theme = this.store.get(\"theme\");\n        return theme === undefined ? _Theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Auto : theme;\n    }\n    set theme(theme) {\n        this.store.setPermanent(\"theme\", theme);\n        document.documentElement.setAttribute(\"data-theme\", this.getShowingTheme());\n    }\n    getShowingTheme() {\n        const theme = this.theme;\n        return theme === _Theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Auto\n            ? (_utils_Browser_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isDarkMode() === true ? _Theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Dark : _Theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Light)\n            : theme;\n    }\n    toggleTheme() {\n        this.theme = this.getShowingTheme() === _Theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Dark\n            ? _Theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Light\n            : _Theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Dark;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ThemeManager());\n//# sourceMappingURL=ThemeManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/theme/ThemeManager.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/utils/Browser.js":
/*!****************************************************!*\
  !*** ../../GitHub/app-module/lib/utils/Browser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/AppRoot.js */ \"../../GitHub/app-module/lib/dom/AppRoot.js\");\n/* harmony import */ var _store_Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Store.js */ \"../../GitHub/app-module/lib/store/Store.js\");\n\n\nclass Browser {\n    _isAndroid;\n    _isIOS;\n    _isPageVisible = !document.hidden;\n    store = new _store_Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"browser-info\");\n    constructor() {\n        _dom_AppRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"visibilitychange\", () => this._isPageVisible = !document.hidden);\n    }\n    isAndroid() {\n        return this._isAndroid ??\n            (this._isAndroid = /Android/i.test(navigator.userAgent));\n    }\n    isIOS() {\n        return this._isIOS ??\n            (this._isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent));\n    }\n    isMobileDevice() {\n        return this.isAndroid() || this.isIOS();\n    }\n    isPageVisible() {\n        return this._isPageVisible;\n    }\n    hasPageFocus() {\n        return document.hasFocus();\n    }\n    isDarkMode() {\n        return window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n    }\n    normalizeLanguageCode(lang) {\n        const [mainLang, region] = lang.toLowerCase().split(\"-\");\n        if (mainLang === \"zh\") {\n            return region === \"tw\" || region === \"hk\" ? \"zh-TW\" : \"zh-CN\";\n        }\n        return mainLang;\n    }\n    get languageCode() {\n        const storedLang = this.store.get(\"lang\");\n        if (storedLang)\n            return storedLang;\n        const fullLang = navigator.language ||\n            (navigator.languages && navigator.languages[0]) || \"en-US\";\n        return this.normalizeLanguageCode(fullLang);\n    }\n    set languageCode(lang) {\n        this.store.setPermanent(\"lang\", this.normalizeLanguageCode(lang));\n    }\n    async share(data) {\n        if (navigator.share) {\n            try {\n                await navigator.share(data);\n            }\n            catch (error) {\n                console.error(\"Error sharing:\", error);\n            }\n        }\n        else {\n            try {\n                await navigator.clipboard.writeText(data.url);\n                alert(\"Link copied to clipboard.\");\n            }\n            catch (error) {\n                console.error(\"Error copying to clipboard:\", error);\n                alert(\"Sharing not supported on this browser.\");\n            }\n        }\n    }\n    async download(url) {\n        const response = await fetch(url);\n        const blob = await response.blob();\n        const objectUrl = URL.createObjectURL(blob);\n        const a = document.createElement(\"a\");\n        a.href = objectUrl;\n        a.download = url;\n        document.body.appendChild(a);\n        a.click();\n        document.body.removeChild(a);\n        URL.revokeObjectURL(objectUrl);\n    }\n    enterFullscreen(dom) {\n        dom.htmlElement.requestFullscreen();\n    }\n    isFullscreen() {\n        return Boolean(document.fullscreenElement);\n    }\n    exitFullscreen() {\n        document.exitFullscreen();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Browser());\n//# sourceMappingURL=Browser.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/utils/Browser.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/utils/DomUtils.js":
/*!*****************************************************!*\
  !*** ../../GitHub/app-module/lib/utils/DomUtils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomUtils)\n/* harmony export */ });\n/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browser.js */ \"../../GitHub/app-module/lib/utils/Browser.js\");\n\nconst LONG_PRESS_DURATION = 500;\nclass DomUtils {\n    static simulateContextMenuOnIOS(dom, handler) {\n        let longPressTimer;\n        dom.style({ \"-webkit-user-select\": \"none\", \"user-select\": \"none\" });\n        const startLongPress = (event) => {\n            const touch = event.touches[0];\n            const simulatedEvent = new MouseEvent(\"contextmenu\", {\n                bubbles: true,\n                cancelable: true,\n                view: window,\n                clientX: touch?.clientX ?? 0,\n                clientY: touch?.clientY ?? 0,\n            });\n            longPressTimer = window.setTimeout(() => handler(simulatedEvent), LONG_PRESS_DURATION);\n        };\n        const cancelLongPress = () => {\n            clearTimeout(longPressTimer);\n        };\n        dom\n            .on(\"touchstart\", startLongPress)\n            .on(\"touchend\", cancelLongPress)\n            .on(\"touchmove\", cancelLongPress);\n    }\n    static enhanceWithContextMenu(dom, handler) {\n        if (_Browser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isIOS()) {\n            this.simulateContextMenuOnIOS(dom, handler);\n        }\n        else {\n            dom.on(\"contextmenu\", (event) => {\n                event.preventDefault();\n                handler(event);\n            });\n        }\n    }\n}\n//# sourceMappingURL=DomUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/utils/DomUtils.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/utils/ImageOptimizer.js":
/*!***********************************************************!*\
  !*** ../../GitHub/app-module/lib/utils/ImageOptimizer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageOptimizer)\n/* harmony export */ });\nclass ImageOptimizer {\n    static MAGIC_NUMBERS = {\n        GIF: [0x47, 0x49, 0x46],\n        GRAPHIC_CONTROL_EXTENSION: [0x21, 0xF9, 0x04],\n    };\n    static DEFAULT_OPTIONS = {\n        contentType: \"image/jpeg\",\n        extension: \"jpg\",\n        quality: 0.8,\n    };\n    static readFileAsBuffer(file) {\n        return new Promise((resolve, reject) => {\n            const reader = new FileReader();\n            reader.onload = () => resolve(new Uint8Array(reader.result));\n            reader.onerror = () => reject(new Error(\"Failed to read file\"));\n            reader.readAsArrayBuffer(file);\n        });\n    }\n    static readFileAsDataURL(file) {\n        return new Promise((resolve, reject) => {\n            const reader = new FileReader();\n            reader.onload = (e) => resolve(e.target?.result);\n            reader.onerror = () => reject(new Error(\"Failed to read file\"));\n            reader.readAsDataURL(file);\n        });\n    }\n    static loadImage(dataUrl) {\n        return new Promise((resolve, reject) => {\n            const img = new Image();\n            img.onload = () => resolve(img);\n            img.onerror = () => reject(new Error(\"Failed to load image\"));\n            img.src = dataUrl;\n        });\n    }\n    static isGifFormat(buffer) {\n        return this.MAGIC_NUMBERS.GIF.every((byte, index) => buffer[index] === byte);\n    }\n    static containsMultipleFrames(buffer) {\n        let frameCount = 0;\n        for (let i = 0; i < buffer.length - this.MAGIC_NUMBERS.GRAPHIC_CONTROL_EXTENSION.length; i++) {\n            const isFrameMarker = this.MAGIC_NUMBERS.GRAPHIC_CONTROL_EXTENSION.every((byte, offset) => buffer[i + offset] === byte);\n            if (isFrameMarker) {\n                frameCount++;\n                if (frameCount > 1)\n                    return true;\n            }\n        }\n        return false;\n    }\n    static async isAnimatedGif(file) {\n        try {\n            const buffer = await this.readFileAsBuffer(file);\n            if (!this.isGifFormat(buffer)) {\n                throw new Error(\"Invalid GIF format\");\n            }\n            return this.containsMultipleFrames(buffer);\n        }\n        catch (error) {\n            throw new Error(`Failed to analyze GIF: ${error.message}`);\n        }\n    }\n    static calculateOptimalDimensions(originalDimensions, targetDimensions) {\n        const { width: origWidth, height: origHeight } = originalDimensions;\n        const { width: targetWidth, height: targetHeight } = targetDimensions;\n        if (origWidth <= targetWidth && origHeight <= targetHeight) {\n            return { width: origWidth, height: origHeight };\n        }\n        const scaleFactor = Math.min(targetWidth / origWidth, targetHeight / origHeight);\n        return {\n            width: Math.round(origWidth * scaleFactor),\n            height: Math.round(origHeight * scaleFactor),\n        };\n    }\n    static async optimizeImageUsingCanvas(image, dimensions) {\n        const canvas = document.createElement(\"canvas\");\n        const ctx = canvas.getContext(\"2d\");\n        if (!ctx) {\n            throw new Error(\"Failed to get canvas context\");\n        }\n        canvas.width = dimensions.width;\n        canvas.height = dimensions.height;\n        ctx.drawImage(image, 0, 0, dimensions.width, dimensions.height);\n        return new Promise((resolve, reject) => {\n            canvas.toBlob((blob) => {\n                if (blob)\n                    resolve(blob);\n                else\n                    reject(new Error(\"Canvas to Blob conversion failed\"));\n            }, this.DEFAULT_OPTIONS.contentType, this.DEFAULT_OPTIONS.quality);\n        });\n    }\n    static async optimizeImage(file, maxWidth, maxHeight) {\n        if (!file.type.startsWith(\"image/\")) {\n            throw new Error(\"The provided file is not an image.\");\n        }\n        if (file.type === \"image/gif\") {\n            const isAnimated = await this.isAnimatedGif(file);\n            if (isAnimated) {\n                throw new Error(\"Animated GIFs are not compressed.\");\n            }\n        }\n        const dataUrl = await this.readFileAsDataURL(file);\n        const image = await this.loadImage(dataUrl);\n        const optimalDimensions = this.calculateOptimalDimensions({ width: image.width, height: image.height }, { width: maxWidth, height: maxHeight });\n        const optimizedBlob = await this.optimizeImageUsingCanvas(image, optimalDimensions);\n        if (optimizedBlob.size >= file.size) {\n            return file;\n        }\n        const newFileName = file.name.replace(/\\.[^.]+$/, `.${this.DEFAULT_OPTIONS.extension}`);\n        return new File([optimizedBlob], newFileName, {\n            type: this.DEFAULT_OPTIONS.contentType,\n        });\n    }\n}\n//# sourceMappingURL=ImageOptimizer.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/utils/ImageOptimizer.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/utils/StyleUtils.js":
/*!*******************************************************!*\
  !*** ../../GitHub/app-module/lib/utils/StyleUtils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StyleUtils)\n/* harmony export */ });\nclass StyleUtils {\n    static applyTextStroke(dom, width, color) {\n        let shadow = \"\";\n        for (let i = -width; i <= width; i++) {\n            for (let j = -width; j <= width; j++) {\n                if (i !== 0 || j !== 0) {\n                    shadow += `${i}px ${j}px 0 ${color},`;\n                }\n            }\n        }\n        shadow = shadow.slice(0, -1);\n        dom.style({ textShadow: shadow });\n    }\n}\n//# sourceMappingURL=StyleUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/utils/StyleUtils.js?");

/***/ }),

/***/ "../../GitHub/app-module/lib/websocket/WebSocketClient.js":
/*!****************************************************************!*\
  !*** ../../GitHub/app-module/lib/websocket/WebSocketClient.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WebSocketClient)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/ts */ \"../../GitHub/ts-module/lib/index.js\");\n\nclass WebSocketClient extends _commonmodule_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    url;\n    socket;\n    messageHandlers = [];\n    isConnected() {\n        return this.socket !== undefined;\n    }\n    constructor(url) {\n        super();\n        this.url = url;\n        this.connect();\n    }\n    connect() {\n        const socket = new WebSocket(this.url);\n        socket.onopen = () => {\n            this.socket = socket;\n            this.emit(\"connect\");\n        };\n        socket.onmessage = (event) => {\n            for (const handler of this.messageHandlers) {\n                handler(event.data);\n            }\n        };\n        socket.onclose = () => {\n            this.socket = undefined;\n            this.emit(\"disconnect\");\n            setTimeout(() => this.connect(), 1000);\n        };\n    }\n    send(data) {\n        if (!this.socket)\n            throw new Error(\"Socket is not connected\");\n        this.socket.send(data);\n    }\n    onMessage(handler) {\n        this.messageHandlers.push(handler);\n    }\n}\n//# sourceMappingURL=WebSocketClient.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/lib/websocket/WebSocketClient.js?");

/***/ }),

/***/ "../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/el.js":
/*!***********************************************************************************!*\
  !*** ../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/el.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ el)\n/* harmony export */ });\nfunction el(selector, ...children) {\n    return el.impl(selector, ...children);\n}\nel.impl = (elementOrSelector, ...children) => {\n    throw new Error(\"Not implemented\");\n};\n//# sourceMappingURL=el.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/el.js?");

/***/ }),

/***/ "../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/html.js":
/*!*************************************************************************************!*\
  !*** ../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/html.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ html)\n/* harmony export */ });\nfunction html(htmlContent) {\n    return html.impl(htmlContent);\n}\nhtml.impl = (htmlContent) => {\n    throw new Error(\"Not implemented\");\n};\n//# sourceMappingURL=html.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/html.js?");

/***/ }),

/***/ "../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/index.js":
/*!**************************************************************************************!*\
  !*** ../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   el: () => (/* reexport safe */ _el_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   html: () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _el_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el.js */ \"../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/el.js\");\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.js */ \"../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/html.js\");\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../../GitHub/app-module/node_modules/@commonmodule/universal-page/lib/index.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/communication/MessageChannelManager.js":
/*!*************************************************************************!*\
  !*** ../../GitHub/ts-module/lib/communication/MessageChannelManager.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MessageChannelManager)\n/* harmony export */ });\nconst RESPONSE_CHANNEL = \"__response\";\nconst RESPONSE_ACTION = \"return\";\nconst ERROR_ACTION = \"error\";\nclass MessageChannelManager {\n    client;\n    channelHandlers = {};\n    requestCounter = 0;\n    pendingRequests = new Map();\n    constructor(client) {\n        this.client = client;\n        client.onMessage((rawMessage) => this.handleIncomingMessage(rawMessage));\n    }\n    on(channel, action, handler) {\n        if (!this.channelHandlers[channel]) {\n            this.channelHandlers[channel] = {};\n        }\n        const actionHandlers = this.channelHandlers[channel];\n        if (!actionHandlers[action])\n            actionHandlers[action] = [];\n        actionHandlers[action].push(handler);\n        return this;\n    }\n    off(channel, action, handler) {\n        const channelActions = this.channelHandlers[channel];\n        if (!channelActions)\n            return this;\n        const actionHandlers = channelActions[action];\n        if (!actionHandlers)\n            return this;\n        if (!handler) {\n            delete channelActions[action];\n        }\n        else {\n            const index = actionHandlers.indexOf(handler);\n            if (index !== -1) {\n                actionHandlers.splice(index, 1);\n            }\n            if (actionHandlers.length === 0) {\n                delete channelActions[action];\n            }\n        }\n        if (Object.keys(channelActions).length === 0) {\n            delete this.channelHandlers[channel];\n        }\n        return this;\n    }\n    send(channel, action, ...args) {\n        const message = { channel, action, args };\n        this.client.send(JSON.stringify(message));\n    }\n    request(channel, action, ...args) {\n        const requestId = `req_${++this.requestCounter}`;\n        const message = { channel, action, args, requestId };\n        return new Promise((resolve, reject) => {\n            this.pendingRequests.set(requestId, { resolve, reject });\n            this.client.send(JSON.stringify(message));\n        });\n    }\n    emit(message) {\n        const { channel, action, args } = message;\n        const channelActions = this.channelHandlers[channel];\n        const actionHandlers = channelActions?.[action];\n        if (!actionHandlers)\n            return [];\n        return actionHandlers.map((handler) => handler(...args));\n    }\n    async handleIncomingMessage(rawMessage) {\n        try {\n            const message = JSON.parse(rawMessage);\n            if (!message.channel || !message.action) {\n                console.warn(\"Invalid message format: Missing channel or action\", rawMessage);\n                return;\n            }\n            if (message.channel === RESPONSE_CHANNEL) {\n                this.processResponse(message);\n            }\n            else {\n                await this.processRequest(message);\n            }\n        }\n        catch (error) {\n            console.error(\"Failed to parse message:\", rawMessage, error);\n        }\n    }\n    processResponse(message) {\n        const { requestId, action, args } = message;\n        if (!requestId)\n            return;\n        const pendingRequest = this.pendingRequests.get(requestId);\n        if (!pendingRequest)\n            return;\n        if (action === RESPONSE_ACTION) {\n            pendingRequest.resolve(args[0]);\n        }\n        else if (action === ERROR_ACTION) {\n            pendingRequest.reject(args[0]);\n        }\n        this.pendingRequests.delete(requestId);\n    }\n    async processRequest(message) {\n        const { requestId } = message;\n        const results = this.emit(message);\n        if (requestId && results.length > 0) {\n            const result = results[0];\n            const responseMessage = {\n                channel: RESPONSE_CHANNEL,\n                action: RESPONSE_ACTION,\n                args: result instanceof Promise ? [await result] : [result],\n                requestId,\n            };\n            this.client.send(JSON.stringify(responseMessage));\n        }\n    }\n}\n//# sourceMappingURL=MessageChannelManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/communication/MessageChannelManager.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/event/EventContainer.js":
/*!**********************************************************!*\
  !*** ../../GitHub/ts-module/lib/event/EventContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventContainer)\n/* harmony export */ });\n/* harmony import */ var _EventManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventManager.js */ \"../../GitHub/ts-module/lib/event/EventManager.js\");\n\nclass EventContainer {\n    eventManager = new _EventManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    on(eventName, eventHandler) {\n        this.eventManager.addEvent(eventName, eventHandler);\n        return this;\n    }\n    once(eventName, eventHandler) {\n        this.eventManager.addOnceEvent(eventName, eventHandler);\n        return this;\n    }\n    hasEvent(eventName) {\n        return this.eventManager.hasEvent(eventName);\n    }\n    off(eventName, eventHandler) {\n        this.eventManager.removeEvent(eventName, eventHandler);\n        return this;\n    }\n    emit(eventName, ...args) {\n        return this.eventManager.emit(eventName, ...args);\n    }\n    bind(target, eventName, eventHandler) {\n        this.eventManager.bind(target, eventName, eventHandler);\n        return this;\n    }\n    remove() {\n        this.eventManager.remove();\n        delete this.eventManager;\n    }\n}\n//# sourceMappingURL=EventContainer.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/event/EventContainer.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/event/EventManager.js":
/*!********************************************************!*\
  !*** ../../GitHub/ts-module/lib/event/EventManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventManager)\n/* harmony export */ });\nclass EventManager {\n    eventContainer;\n    events = {};\n    bindings = [];\n    constructor(eventContainer) {\n        this.eventContainer = eventContainer;\n    }\n    addEvent(eventName, eventHandler) {\n        if (!this.events[eventName])\n            this.events[eventName] = [];\n        this.events[eventName].push({ eventHandler });\n    }\n    addOnceEvent(eventName, eventHandler) {\n        if (!this.events[eventName])\n            this.events[eventName] = [];\n        this.events[eventName].push({ eventHandler, once: true });\n    }\n    hasEvent(eventName) {\n        const events = this.events[eventName];\n        if (!events)\n            return false;\n        return events.length > 0;\n    }\n    removeEvent(eventName, eventHandler) {\n        const events = this.events[eventName];\n        if (!events)\n            return;\n        if (!eventHandler)\n            delete this.events[eventName];\n        else {\n            const index = events.findIndex((h) => h.eventHandler === eventHandler);\n            if (index !== -1)\n                events.splice(index, 1);\n            if (events.length === 0)\n                delete this.events[eventName];\n        }\n    }\n    async emit(eventName, ...args) {\n        const events = this.events[eventName];\n        if (!events)\n            return [];\n        const results = [];\n        const promises = [];\n        for (const event of events) {\n            const result = event.eventHandler(...args);\n            if (event.once)\n                this.removeEvent(eventName, event.eventHandler);\n            if (result instanceof Promise)\n                promises.push(result);\n            else\n                results.push(result);\n        }\n        return results.concat(await Promise.all(promises));\n    }\n    bind(target, eventName, eventHandler) {\n        this.eventContainer.on(eventName, eventHandler);\n        const removeHandler = () => {\n            this.eventContainer.off(eventName, eventHandler);\n            const findIndex = this.bindings.findIndex((b) => b.target === target && b.eventName === eventName &&\n                b.eventHandler === eventHandler);\n            if (findIndex !== -1)\n                this.bindings.splice(findIndex, 1);\n        };\n        target.on(\"remove\", removeHandler);\n        this.bindings.push({\n            eventName: eventName,\n            target,\n            eventHandler,\n            removeHandler,\n        });\n    }\n    remove() {\n        if (!this.events)\n            throw new Error(\"This manager is already removed\");\n        this.emit(\"remove\");\n        delete this.events;\n        for (const binding of this.bindings) {\n            binding.target.off(\"remove\", binding.removeHandler);\n        }\n        delete this.bindings;\n    }\n}\n//# sourceMappingURL=EventManager.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/event/EventManager.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/index.js":
/*!*******************************************!*\
  !*** ../../GitHub/ts-module/lib/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArrayUtils: () => (/* reexport safe */ _utils_ArrayUtils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Debouncer: () => (/* reexport safe */ _utils_Debouncer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   EventContainer: () => (/* reexport safe */ _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   EventNode: () => (/* reexport safe */ _node_EventNode_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   IntegerUtils: () => (/* reexport safe */ _utils_IntegerUtils_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   JsonUtils: () => (/* reexport safe */ _utils_JsonUtils_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   MessageChannelManager: () => (/* reexport safe */ _communication_MessageChannelManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   ObjectUtils: () => (/* reexport safe */ _utils_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   RealUtils: () => (/* reexport safe */ _utils_RealUtils_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   ResourceLoader: () => (/* reexport safe */ _loaders_ResourceLoader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   StringUtils: () => (/* reexport safe */ _utils_StringUtils_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _communication_MessageChannelManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communication/MessageChannelManager.js */ \"../../GitHub/ts-module/lib/communication/MessageChannelManager.js\");\n/* harmony import */ var _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/EventContainer.js */ \"../../GitHub/ts-module/lib/event/EventContainer.js\");\n/* harmony import */ var _loaders_ResourceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/ResourceLoader.js */ \"../../GitHub/ts-module/lib/loaders/ResourceLoader.js\");\n/* harmony import */ var _node_EventNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node/EventNode.js */ \"../../GitHub/ts-module/lib/node/EventNode.js\");\n/* harmony import */ var _utils_ArrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/ArrayUtils.js */ \"../../GitHub/ts-module/lib/utils/ArrayUtils.js\");\n/* harmony import */ var _utils_Debouncer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/Debouncer.js */ \"../../GitHub/ts-module/lib/utils/Debouncer.js\");\n/* harmony import */ var _utils_IntegerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/IntegerUtils.js */ \"../../GitHub/ts-module/lib/utils/IntegerUtils.js\");\n/* harmony import */ var _utils_JsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/JsonUtils.js */ \"../../GitHub/ts-module/lib/utils/JsonUtils.js\");\n/* harmony import */ var _utils_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/ObjectUtils.js */ \"../../GitHub/ts-module/lib/utils/ObjectUtils.js\");\n/* harmony import */ var _utils_RealUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/RealUtils.js */ \"../../GitHub/ts-module/lib/utils/RealUtils.js\");\n/* harmony import */ var _utils_StringUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/StringUtils.js */ \"../../GitHub/ts-module/lib/utils/StringUtils.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/index.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/loaders/ResourceLoader.js":
/*!************************************************************!*\
  !*** ../../GitHub/ts-module/lib/loaders/ResourceLoader.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResourceLoader)\n/* harmony export */ });\nclass ResourceLoader {\n    resources = new Map();\n    pendingLoads = new Map();\n    refCount = new Map();\n    isResourceInUse(id) {\n        return this.refCount.has(id) && this.refCount.get(id) > 0;\n    }\n    cleanup(id, resource) {\n    }\n    incrementRefCount(id) {\n        this.refCount.set(id, (this.refCount.get(id) || 0) + 1);\n    }\n    async load(id, ...args) {\n        this.incrementRefCount(id);\n        if (this.resources.has(id))\n            return this.resources.get(id);\n        if (this.pendingLoads.has(id))\n            return await this.pendingLoads.get(id);\n        return await this.loadResource(id, ...args);\n    }\n    isLoaded(id) {\n        return this.resources.has(id);\n    }\n    release(id) {\n        const refCount = this.refCount.get(id);\n        if (refCount === undefined)\n            throw new Error(`Resource not found: ${id}`);\n        if (refCount === 1) {\n            this.refCount.delete(id);\n            const resource = this.resources.get(id);\n            if (resource) {\n                this.cleanup(id, resource);\n                this.resources.delete(id);\n            }\n        }\n        else {\n            this.refCount.set(id, refCount - 1);\n        }\n    }\n}\n//# sourceMappingURL=ResourceLoader.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/loaders/ResourceLoader.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/node/EventNode.js":
/*!****************************************************!*\
  !*** ../../GitHub/ts-module/lib/node/EventNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventNode)\n/* harmony export */ });\n/* harmony import */ var _event_EventManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/EventManager.js */ \"../../GitHub/ts-module/lib/event/EventManager.js\");\n/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.js */ \"../../GitHub/ts-module/lib/node/Node.js\");\n\n\nclass EventNode extends _Node_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    eventManager = new _event_EventManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    on(eventName, eventHandler) {\n        this.eventManager.addEvent(eventName, eventHandler);\n        return this;\n    }\n    once(eventName, eventHandler) {\n        this.eventManager.addOnceEvent(eventName, eventHandler);\n        return this;\n    }\n    hasEvent(eventName) {\n        return this.eventManager.hasEvent(eventName);\n    }\n    off(eventName, eventHandler) {\n        this.eventManager.removeEvent(eventName, eventHandler);\n        return this;\n    }\n    emit(eventName, ...args) {\n        return this.eventManager.emit(eventName, ...args);\n    }\n    bind(target, eventName, eventHandler) {\n        this.eventManager.bind(target, eventName, eventHandler);\n        return this;\n    }\n    remove() {\n        this.eventManager.remove();\n        delete this.eventManager;\n        super.remove();\n    }\n}\n//# sourceMappingURL=EventNode.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/node/EventNode.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/node/Node.js":
/*!***********************************************!*\
  !*** ../../GitHub/ts-module/lib/node/Node.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n    parent;\n    children = [];\n    isRemoved() {\n        return this.children === undefined;\n    }\n    appendTo(parent, index) {\n        if (this.isRemoved())\n            throw new Error(\"Node is removed\");\n        if (this.parent === parent) {\n            const currentIndex = this.parent.children.indexOf(this);\n            if (index !== undefined && index > currentIndex) {\n                index--;\n            }\n            this.parent.children.splice(currentIndex, 1);\n        }\n        else if (this.parent) {\n            this.remove();\n        }\n        this.parent = parent;\n        if (index !== undefined && index >= 0 && index < parent.children.length) {\n            parent.children.splice(index, 0, this);\n        }\n        else {\n            parent.children.push(this);\n        }\n        return this;\n    }\n    clear(...except) {\n        let i = 0;\n        while (this.children.length > except.length) {\n            const c = this.children[i];\n            !except.includes(c) ? c.remove() : i++;\n        }\n        return this;\n    }\n    remove() {\n        if (this.isRemoved())\n            throw new Error(\"Node is already removed\");\n        if (this.parent) {\n            const index = this.parent.children.indexOf(this);\n            if (index > -1)\n                this.parent.children.splice(index, 1);\n            this.parent = undefined;\n        }\n        this.clear();\n        delete this.children;\n    }\n}\n//# sourceMappingURL=Node.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/node/Node.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/utils/ArrayUtils.js":
/*!******************************************************!*\
  !*** ../../GitHub/ts-module/lib/utils/ArrayUtils.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArrayUtils)\n/* harmony export */ });\nclass ArrayUtils {\n    static pull(array, ...removeList) {\n        for (const remove of removeList) {\n            const index = array.indexOf(remove);\n            if (index !== -1)\n                array.splice(index, 1);\n        }\n    }\n}\n//# sourceMappingURL=ArrayUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/utils/ArrayUtils.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/utils/Debouncer.js":
/*!*****************************************************!*\
  !*** ../../GitHub/ts-module/lib/utils/Debouncer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Debouncer)\n/* harmony export */ });\nclass Debouncer {\n    delayMs;\n    callback;\n    timeoutId = null;\n    constructor(delayMs, callback) {\n        this.delayMs = delayMs;\n        this.callback = callback;\n        if (delayMs < 0) {\n            throw new Error(\"Delay must be a non-negative number\");\n        }\n    }\n    execute(...args) {\n        this.clearPendingExecution();\n        this.timeoutId = setTimeout(() => {\n            this.callback(...args);\n            this.timeoutId = null;\n        }, this.delayMs);\n    }\n    cancel() {\n        this.clearPendingExecution();\n    }\n    isPending() {\n        return this.timeoutId !== null;\n    }\n    clearPendingExecution() {\n        if (this.timeoutId) {\n            clearTimeout(this.timeoutId);\n            this.timeoutId = null;\n        }\n    }\n}\n//# sourceMappingURL=Debouncer.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/utils/Debouncer.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/utils/IntegerUtils.js":
/*!********************************************************!*\
  !*** ../../GitHub/ts-module/lib/utils/IntegerUtils.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IntegerUtils)\n/* harmony export */ });\nclass IntegerUtils {\n    static random(min, max) {\n        return Math.floor(Math.random() * (max - min + 1) + min);\n    }\n}\n//# sourceMappingURL=IntegerUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/utils/IntegerUtils.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/utils/JsonUtils.js":
/*!*****************************************************!*\
  !*** ../../GitHub/ts-module/lib/utils/JsonUtils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JsonUtils)\n/* harmony export */ });\nclass JsonUtils {\n    static parseWithUndefined(data) {\n        return JSON.parse(data, (_, v) => v === null ? undefined : v);\n    }\n}\n//# sourceMappingURL=JsonUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/utils/JsonUtils.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/utils/ObjectUtils.js":
/*!*******************************************************!*\
  !*** ../../GitHub/ts-module/lib/utils/ObjectUtils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ObjectUtils)\n/* harmony export */ });\nclass ObjectUtils {\n    static isEqual(obj1, obj2) {\n        if (obj1 === obj2) {\n            return true;\n        }\n        if (typeof obj1 !== \"object\" || obj1 === null ||\n            typeof obj2 !== \"object\" || obj2 === null) {\n            return false;\n        }\n        const keys1 = Object.keys(obj1);\n        const keys2 = Object.keys(obj2);\n        if (keys1.length !== keys2.length) {\n            return false;\n        }\n        for (const key of keys1) {\n            if (!keys2.includes(key) || !this.isEqual(obj1[key], obj2[key])) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n//# sourceMappingURL=ObjectUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/utils/ObjectUtils.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/utils/RealUtils.js":
/*!*****************************************************!*\
  !*** ../../GitHub/ts-module/lib/utils/RealUtils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RealUtils)\n/* harmony export */ });\nclass RealUtils {\n    static random(min, max) {\n        return Math.random() * (max - min + 1) + min;\n    }\n}\n//# sourceMappingURL=RealUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/utils/RealUtils.js?");

/***/ }),

/***/ "../../GitHub/ts-module/lib/utils/StringUtils.js":
/*!*******************************************************!*\
  !*** ../../GitHub/ts-module/lib/utils/StringUtils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StringUtils)\n/* harmony export */ });\nclass StringUtils {\n    static capitalize(input) {\n        const words = input.split(\" \");\n        const capitalizedWords = words.map((word) => {\n            if (word.length === 0)\n                return word;\n            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();\n        });\n        return capitalizedWords.join(\" \");\n    }\n    static isKebabCase(str) {\n        return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);\n    }\n    static formatNumberWithCommas(value, decimals) {\n        if (decimals === undefined || +(+value) > Number.MAX_SAFE_INTEGER) {\n            const parts = value.split(\".\");\n            parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n            return parts[1] === \"0\" ? parts[0] : parts.join(\".\");\n        }\n        else {\n            const parts = String(+(+value).toFixed(decimals)).split(\".\");\n            parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n            return parts.join(\".\");\n        }\n    }\n}\n//# sourceMappingURL=StringUtils.js.map\n\n//# sourceURL=webpack:///../../GitHub/ts-module/lib/utils/StringUtils.js?");

/***/ }),

/***/ "../component-showcase/lib/index.js":
/*!******************************************!*\
  !*** ../component-showcase/lib/index.js ***!
  \******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppComponents: () => (/* reexport safe */ _views_AppComponents_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _views_AppComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/AppComponents.js */ \"../component-showcase/lib/views/AppComponents.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_AppComponents_js__WEBPACK_IMPORTED_MODULE_0__]);\n_views_AppComponents_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n//# sourceMappingURL=index.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../component-showcase/lib/index.js?");

/***/ }),

/***/ "../component-showcase/lib/views/AppComponents.js":
/*!********************************************************!*\
  !*** ../component-showcase/lib/views/AppComponents.js ***!
  \********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppComponents)\n/* harmony export */ });\n/* harmony import */ var _commonmodule_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/app */ \"../../GitHub/app-module/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_commonmodule_app__WEBPACK_IMPORTED_MODULE_0__]);\n_commonmodule_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass AppComponents extends _commonmodule_app__WEBPACK_IMPORTED_MODULE_0__.View {\n    constructor() {\n        super();\n        this.container = (0,_commonmodule_app__WEBPACK_IMPORTED_MODULE_0__.el)(\".app-components-view\", \"App Components Showcase\")\n            .appendTo(_commonmodule_app__WEBPACK_IMPORTED_MODULE_0__.AppRoot);\n    }\n}\n//# sourceMappingURL=AppComponents.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../component-showcase/lib/views/AppComponents.js?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commonmodule_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commonmodule/app */ \"../../GitHub/app-module/lib/index.js\");\n/* harmony import */ var _commonmodule_component_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @commonmodule/component-showcase */ \"../component-showcase/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_commonmodule_app__WEBPACK_IMPORTED_MODULE_0__, _commonmodule_component_showcase__WEBPACK_IMPORTED_MODULE_1__]);\n([_commonmodule_app__WEBPACK_IMPORTED_MODULE_0__, _commonmodule_component_showcase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n_commonmodule_app__WEBPACK_IMPORTED_MODULE_0__.Router\n    .add(\"/app-components\", _commonmodule_component_showcase__WEBPACK_IMPORTED_MODULE_1__.AppComponents);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-dev.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;