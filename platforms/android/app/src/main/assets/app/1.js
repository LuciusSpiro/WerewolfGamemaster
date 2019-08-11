(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/browse/browse-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRoutingModule", function() { return BrowseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse.component.ts");



var routes = [
    { path: "default", component: _browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"] }
];
var BrowseRoutingModule = /** @class */ (function () {
    function BrowseRoutingModule() {
    }
    BrowseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], BrowseRoutingModule);
    return BrowseRoutingModule;
}());



/***/ }),

/***/ "./app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <Label class=\"action-bar-title\" text=\"Browse\"></Label>\r\n</ActionBar>\r\n\r\n<FlexboxLayout *ngFor=\"let card of cards\" width=\"300\" height=\"300\" backgroundColor=\"lightgray\">\r\n    <Image [src]=\"card.path\"  stretch=\"none\" width=\"50px\"></Image>\r\n  </FlexboxLayout>\r\n"

/***/ }),

/***/ "./app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
        // Use the component constructor to inject providers.
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.cards = [
            {
                name: "Werwolf",
                text: "Werwölfe fressen kleine Kinder.",
                position: 1,
                gut: false,
                path: "~/assets/werwolf.png"
            }, {
                name: "Dorfbewohner",
                text: "Dorfbewohner hängen unschuldige Leute auf.",
                position: 0,
                gut: true,
                path: "~/assets/dorfbewohner.png"
            }, {
                name: "Seherin",
                text: "Die Seherin kann pro Runde einen Spieler auf gut oder böse untersuchen.",
                position: 3,
                gut: true,
                path: "~/assets/seherin.png"
            }, {
                name: "Hexe",
                text: "Die Hexe kann jeweils einmalig einen Heiltrank und einen Gifttrank einsetzen.",
                position: 2,
                gut: true,
                path: "~/assets/hexe.png"
            }
        ];
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Browse",
            template: __webpack_require__("./app/browse/browse.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./app/browse/browse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseModule", function() { return BrowseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse-routing.module.ts");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/browse/browse.component.ts");




var BrowseModule = /** @class */ (function () {
    function BrowseModule() {
    }
    BrowseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__["BrowseRoutingModule"]
            ],
            declarations: [
                _browse_component__WEBPACK_IMPORTED_MODULE_3__["BrowseComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], BrowseModule);
    return BrowseModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Jyb3dzZS9icm93c2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRWxCO0FBRXJELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUVBQWUsRUFBRTtDQUNsRCxDQUFDO0FBTUY7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQUovQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkaEMsMFY7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVjtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsaUNBQWlDO2dCQUN2QyxRQUFRLEVBQUUsQ0FBQztnQkFDWCxHQUFHLEVBQUUsS0FBSztnQkFDVixJQUFJLEVBQUUsc0JBQXNCO2FBQy9CLEVBQUU7Z0JBRUMsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSw0Q0FBNEM7Z0JBQ2xELFFBQVEsRUFBRSxDQUFDO2dCQUNYLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSwyQkFBMkI7YUFDcEMsRUFBRTtnQkFDQyxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUseUVBQXlFO2dCQUMvRSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxHQUFHLEVBQUUsSUFBSTtnQkFDVCxJQUFJLEVBQUUsc0JBQXNCO2FBQy9CLEVBQUU7Z0JBQ0MsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLCtFQUErRTtnQkFDckYsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsSUFBSSxFQUFFLG1CQUFtQjthQUM1QjtTQUNKLENBQUM7SUFFRixDQUFDO0lBbkNRLGVBQWU7UUFMM0IsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBRWxCLG1FQUFzQztTQUN6QyxDQUFDOztPQUNXLGVBQWUsQ0FvQzNCO0lBQUQsc0JBQUM7Q0FBQTtBQXBDMkI7Ozs7Ozs7OztBQ1I1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFVDtBQUNUO0FBY3JEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBWnhCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QiwwRUFBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaUVBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIkJyb3dzZVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48RmxleGJveExheW91dCAqbmdGb3I9XFxcImxldCBjYXJkIG9mIGNhcmRzXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJsaWdodGdyYXlcXFwiPlxcclxcbiAgICA8SW1hZ2UgW3NyY109XFxcImNhcmQucGF0aFxcXCIgIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIHdpZHRoPVxcXCI1MHB4XFxcIj48L0ltYWdlPlxcclxcbiAgPC9GbGV4Ym94TGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBLYXJ0ZSB9IGZyb20gXCIuL0thcnRlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNhcmRzOiBBcnJheTxLYXJ0ZT47XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgdGhpcy5jYXJkcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiV2Vyd29sZlwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIldlcnfDtmxmZSBmcmVzc2VuIGtsZWluZSBLaW5kZXIuXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAxLFxyXG4gICAgICAgICAgICBndXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXRoOiBcIn4vYXNzZXRzL3dlcndvbGYucG5nXCJcclxuICAgICAgICB9LCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lOiBcIkRvcmZiZXdvaG5lclwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRvcmZiZXdvaG5lciBow6RuZ2VuIHVuc2NodWxkaWdlIExldXRlIGF1Zi5cIixcclxuICAgICAgICAgICAgcG9zaXRpb246IDAsXHJcbiAgICAgICAgICAgIGd1dDogdHJ1ZSxcclxuICAgICAgICAgICAgcGF0aDogXCJ+L2Fzc2V0cy9kb3JmYmV3b2huZXIucG5nXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU2VoZXJpblwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRpZSBTZWhlcmluIGthbm4gcHJvIFJ1bmRlIGVpbmVuIFNwaWVsZXIgYXVmIGd1dCBvZGVyIGLDtnNlIHVudGVyc3VjaGVuLlwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogMyxcclxuICAgICAgICAgICAgZ3V0OiB0cnVlLFxyXG4gICAgICAgICAgICBwYXRoOiBcIn4vYXNzZXRzL3NlaGVyaW4ucG5nXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSGV4ZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRpZSBIZXhlIGthbm4gamV3ZWlscyBlaW5tYWxpZyBlaW5lbiBIZWlsdHJhbmsgdW5kIGVpbmVuIEdpZnR0cmFuayBlaW5zZXR6ZW4uXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAyLFxyXG4gICAgICAgICAgICBndXQ6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdGg6IFwifi9hc3NldHMvaGV4ZS5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEJyb3dzZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9icm93c2Utcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSBcIi4vYnJvd3NlLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQnJvd3NlUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEJyb3dzZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VNb2R1bGUgeyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=