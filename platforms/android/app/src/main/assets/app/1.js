(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/kartenSpeicher/karten-speicher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KartenSpeicherService", function() { return KartenSpeicherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var KartenSpeicherService = /** @class */ (function () {
    function KartenSpeicherService() {
        this.alleKarten = [
            {
                name: "Dorfbewohner",
                text: "bla",
                position: 1,
                gut: true,
                path: "nix"
            },
            {
                name: "Werwolf",
                text: "bla",
                position: 5,
                gut: false,
                path: "nix"
            }
        ];
    }
    KartenSpeicherService.prototype.getAllCards = function () {
        return this.alleKarten;
    };
    KartenSpeicherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], KartenSpeicherService);
    return KartenSpeicherService;
}());



/***/ }),

/***/ "./app/search/search-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/search/search.component.ts");



var routes = [
    { path: "default", component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <Label class=\"action-bar-title\" text=\"Laufende Runde\"></Label>\r\n</ActionBar>\r\n\r\n\r\n<DockLayout class=\"wgm-gameList\">\r\n    <button class=\"btn btn-primary btn-active wgm-gameList__button\" text=\"Next\" (tap)=\"next()\"></button>\r\n\r\n    <FlexboxLayout class=\"wgm-gameList__list\">\r\n        <ListView [items]=\"karten\" class=\"list-group\">\r\n            <ng-template let-item=\"item\">\r\n                <StackLayout orientation=\"horizontal\" class=\"list-group-item\">\r\n                    <Label [text]='item.name'></Label>\r\n                </StackLayout>\r\n            </ng-template>\r\n        </ListView>\r\n    </FlexboxLayout>\r\n</DockLayout>"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kartenSpeicher_karten_speicher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/kartenSpeicher/karten-speicher.service.ts");


var SearchComponent = /** @class */ (function () {
    function SearchComponent(kartenSpeicher) {
        this.kartenSpeicher = kartenSpeicher;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.karten = this.kartenSpeicher.getAllCards();
        this.karten.sort(function (a1, a2) { return a1.position - a2.position; });
    };
    SearchComponent.prototype.next = function () {
        var first = this.karten.shift();
        this.karten.push(first);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _kartenSpeicher_karten_speicher_service__WEBPACK_IMPORTED_MODULE_1__["KartenSpeicherService"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __webpack_require__("./app/search/search.component.html")
        }),
        __metadata("design:paramtypes", [_kartenSpeicher_karten_speicher_service__WEBPACK_IMPORTED_MODULE_1__["KartenSpeicherService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/search/search.component.ts");




var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]
            ],
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], SearchModule);
    return SearchModule;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAva2FydGVuU3BlaWNoZXIva2FydGVuLXNwZWljaGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2gtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zZWFyY2gvc2VhcmNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFNM0M7SUFLRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxLQUFLO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2dCQUNYLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsS0FBSztnQkFDWCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxHQUFHLEVBQUUsS0FBSztnQkFDVixJQUFJLEVBQUUsS0FBSzthQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUExQlUscUJBQXFCO1FBSGpDLGdFQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLHFCQUFxQixDQTRCakM7SUFBRCw0QkFBQztDQUFBO0FBNUJpQzs7Ozs7Ozs7O0FDTmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVsQjtBQUVyRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlFQUFlLEVBQUU7Q0FDbEQsQ0FBQztBQU1GO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFKL0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZGhDLG11Qjs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNnQztBQVNsRjtJQUVJLHlCQUFvQixjQUFxQztRQUFyQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFFekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLEVBQUUsRUFBRSxJQUFLLFNBQUUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFabUMsNkZBQXFCOztJQUZoRCxlQUFlO1FBTDNCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUVsQixtRUFBc0M7U0FDekMsQ0FBQzt5Q0FHc0MsNkZBQXFCO09BRmhELGVBQWUsQ0FlM0I7SUFBRCxzQkFBQztDQUFBO0FBZjJCOzs7Ozs7Ozs7QUNWNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUVUO0FBQ1Q7QUFjckQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFaeEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLDBFQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDVixpRUFBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElrYXJ0ZW4gfSBmcm9tIFwiLi4vaW50ZXJmYWNlL2lLYXJ0ZW5cIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBLYXJ0ZW5TcGVpY2hlclNlcnZpY2Uge1xuXG4gIHRlc3Q6IEFycmF5PElrYXJ0ZW4+O1xuICBhbGxlS2FydGVuOiBBcnJheTxJa2FydGVuPjtcbiAgICAgICAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWxsZUthcnRlbiA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJEb3JmYmV3b2huZXJcIixcbiAgICAgICAgdGV4dDogXCJibGFcIixcbiAgICAgICAgcG9zaXRpb246IDEsXG4gICAgICAgIGd1dDogdHJ1ZSxcbiAgICAgICAgcGF0aDogXCJuaXhcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJXZXJ3b2xmXCIsXG4gICAgICAgIHRleHQ6IFwiYmxhXCIsXG4gICAgICAgIHBvc2l0aW9uOiA1LFxuICAgICAgICBndXQ6IGZhbHNlLFxuICAgICAgICBwYXRoOiBcIm5peFwiXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGdldEFsbENhcmRzKCk6IEFycmF5PElrYXJ0ZW4+IHtcbiAgICByZXR1cm4gdGhpcy5hbGxlS2FydGVuO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJkZWZhdWx0XCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJhY3Rpb24tYmFyLXRpdGxlXFxcIiB0ZXh0PVxcXCJMYXVmZW5kZSBSdW5kZVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHJcXG48RG9ja0xheW91dCBjbGFzcz1cXFwid2dtLWdhbWVMaXN0XFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmUgd2dtLWdhbWVMaXN0X19idXR0b25cXFwiIHRleHQ9XFxcIk5leHRcXFwiICh0YXApPVxcXCJuZXh0KClcXFwiPjwvYnV0dG9uPlxcclxcblxcclxcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwid2dtLWdhbWVMaXN0X19saXN0XFxcIj5cXHJcXG4gICAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJrYXJ0ZW5cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT0naXRlbS5uYW1lJz48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L0xpc3RWaWV3PlxcclxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuPC9Eb2NrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBLYXJ0ZW5TcGVpY2hlclNlcnZpY2UgfSBmcm9tIFwiLi4va2FydGVuU3BlaWNoZXIva2FydGVuLXNwZWljaGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSWthcnRlbiB9IGZyb20gXCIuLi9pbnRlcmZhY2UvaUthcnRlblwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU2VhcmNoXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAga2FydGVuOiBBcnJheTxJa2FydGVuPjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUga2FydGVuU3BlaWNoZXI6IEthcnRlblNwZWljaGVyU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMua2FydGVuID0gdGhpcy5rYXJ0ZW5TcGVpY2hlci5nZXRBbGxDYXJkcygpO1xyXG4gICAgICAgIHRoaXMua2FydGVuLnNvcnQoKGExLCBhMikgPT4gYTEucG9zaXRpb24gLSBhMi5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLmthcnRlbi5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMua2FydGVuLnB1c2goZmlyc3QpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTZWFyY2hSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==