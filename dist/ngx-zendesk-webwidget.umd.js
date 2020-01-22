(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-zendesk-webwidget'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var NgxZendeskWebwidgetConfig = /** @class */ (function () {
    function NgxZendeskWebwidgetConfig() {
    }
    return NgxZendeskWebwidgetConfig;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getWindow() {
    return window;
}
var NgxZendeskWebwidgetService = /** @class */ (function () {
    function NgxZendeskWebwidgetService(ngxZendeskWebwidgetConfig) {
        this.ngxZendeskWebwidgetConfig = ngxZendeskWebwidgetConfig;
        this.initialized = false;
        if (!this.ngxZendeskWebwidgetConfig.accountUrl) {
            throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
        }
        this.window = getWindow();
        if (!this.ngxZendeskWebwidgetConfig.lazyLoad) {
            this.initZendesk(this.ngxZendeskWebwidgetConfig);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgxZendeskWebwidgetService.prototype.initZendesk = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var window = this.window;
        // tslint:disable
        window.zEmbed || (/**
         * @param {?} e
         * @param {?} t
         * @return {?}
         */
        function (e, t) {
            /** @type {?} */
            var n;
            /** @type {?} */
            var o;
            /** @type {?} */
            var d;
            /** @type {?} */
            var i;
            /** @type {?} */
            var s;
            /** @type {?} */
            var a = [];
            /** @type {?} */
            var tag = 'head';
            /** @type {?} */
            var r = document.createElement('iframe');
            try {
                tag = this.ngxZendeskWebwidgetConfig.injectionTag;
            }
            catch (e) {
                tag = 'head';
            }
            window.zEmbed = (/**
             * @return {?}
             */
            function () {
                a.push(arguments);
            }), window.zE = window.zE || window.zEmbed, r.src = 'javascript:false', r.title = '', r.style.cssText = 'display: none', document.getElementsByTagName(tag), d = d[d.length - 1], d.parentNode.insertBefore(r, d), i = r.contentWindow, s = i.document;
            try {
                o = s;
            }
            catch (e) {
                n = document.domain, r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);', o = s;
            }
            o.open()._l = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var e = this.createElement('script');
                n && (this.domain = n), e.id = 'js-iframe-async', e.src = 'https://assets.zendesk.com/embeddable_framework/main.js', this.t = +new Date, this.zendeskHost = config.accountUrl, this.zEQueue = a, this.body.appendChild(e);
            }), o.write('<body onload="document._l();">'), o.close();
        })();
        // tslint:enable
        return this.finishLoading();
    };
    /**
     * @private
     * @return {?}
     */
    NgxZendeskWebwidgetService.prototype.finishLoading = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var timeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.initialized = false;
                reject(Error('timeout'));
            }), _this.ngxZendeskWebwidgetConfig.timeOut || 30000);
            _this.window.zE((/**
             * @return {?}
             */
            function () {
                _this.ngxZendeskWebwidgetConfig.callback(_this.window.zE);
                _this.initialized = true;
                _this.zE = _this.window.zE;
                clearTimeout(timeout);
                resolve(true);
            }));
        }));
    };
    /**
     * @return {?}
     */
    NgxZendeskWebwidgetService.prototype.isInitialized = /**
     * @return {?}
     */
    function () {
        return this.initialized;
    };
    NgxZendeskWebwidgetService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    NgxZendeskWebwidgetService.ctorParameters = function () { return [
        { type: NgxZendeskWebwidgetConfig }
    ]; };
    return NgxZendeskWebwidgetService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxZendeskWebwidgetModule = /** @class */ (function () {
    function NgxZendeskWebwidgetModule() {
    }
    /**
     * @param {?} zendeskConfig
     * @return {?}
     */
    NgxZendeskWebwidgetModule.forRoot = /**
     * @param {?} zendeskConfig
     * @return {?}
     */
    function (zendeskConfig) {
        return {
            ngModule: NgxZendeskWebwidgetModule,
            providers: [
                { provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
                { provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
            ]
        };
    };
    NgxZendeskWebwidgetModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ]
                },] },
    ];
    return NgxZendeskWebwidgetModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-zendesk-webwidget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

exports.NgxZendeskWebwidgetModule = NgxZendeskWebwidgetModule;
exports.NgxZendeskWebwidgetService = NgxZendeskWebwidgetService;
exports.NgxZendeskWebwidgetConfig = NgxZendeskWebwidgetConfig;

Object.defineProperty(exports, '__esModule', { value: true });

})));
