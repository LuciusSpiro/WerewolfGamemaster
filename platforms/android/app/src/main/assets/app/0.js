(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/item-detail/item-detail.component.ts");




var routes = [
    { path: "default", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "item/:id", component: _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <Label class=\"action-bar-title\" text=\"Home\"></Label>\r\n</ActionBar>\r\n\r\n<GridLayout class=\"page page-content\">\r\n    <ListView [items]=\"items\" class=\"list-group\">\r\n        <ng-template let-item=\"item\">\r\n            <Label [nsRouterLink]=\"['../item', item.id]\" [text]=\"item.name\" class=\"list-group-item\"></Label>\r\n        </ng-template>\r\n    </ListView>\r\n</GridLayout>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/data.service.ts");


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_itemService) {
        this._itemService = _itemService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items = this._itemService.getItems();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/home/item-detail/item-detail.component.ts");





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__["ItemDetailComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
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

/***/ }),

/***/ "./app/home/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton (tap)=\"onBackTap()\" android.systemIcon=\"ic_menu_back\"></NavigationButton>\r\n    <Label class=\"action-bar-title\" [text]=\"item.name\"></Label>\r\n</ActionBar>\r\n\r\n<GridLayout>\r\n    <Label class=\"m-10 h3\" verticalAlignment=\"top\" [text]=\"item.description\"></Label>\r\n</GridLayout>"

/***/ }),

/***/ "./app/home/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/data.service.ts");




var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(_data, _route, _routerExtensions) {
        this._data = _data;
        this._route = _route;
        this._routerExtensions = _routerExtensions;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
    };
    ItemDetailComponent.prototype.onBackTap = function () {
        this._routerExtensions.back();
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ItemDetail",
            template: __webpack_require__("./app/home/item-detail/item-detail.component.html")
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var DataService = /** @class */ (function () {
    function DataService() {
        this.items = new Array({
            id: 1,
            name: "Item 1",
            description: "Description for Item 1"
        }, {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2"
        }, {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3"
        }, {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4"
        }, {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5"
        }, {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6"
        }, {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7"
        }, {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8"
        }, {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9"
        }, {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10"
        }, {
            id: 11,
            name: "Item 11",
            description: "Description for Item 11"
        }, {
            id: 12,
            name: "Item 12",
            description: "Description for Item 12"
        }, {
            id: 13,
            name: "Item 13",
            description: "Description for Item 13"
        }, {
            id: 14,
            name: "Item 14",
            description: "Description for Item 14"
        }, {
            id: 15,
            name: "Item 15",
            description: "Description for Item 15"
        }, {
            id: 16,
            name: "Item 16",
            description: "Description for Item 16"
        });
    }
    DataService.prototype.getItems = function () {
        return this.items;
    };
    DataService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFDeUI7QUFFMUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0ZBQW1CLEVBQUU7Q0FDdkQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEI5QiwyYzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2M7QUFPaEU7SUFHSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBSSxD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Z0VBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBNEZ2QjtJQUFELGtCQUFDO0NBQUE7QUE1RnVCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgdGV4dD1cXFwiSG9tZVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZSBwYWdlLWNvbnRlbnRcXFwiPlxcclxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaXRlbXNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2l0ZW0nLCBpdGVtLmlkXVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICA8L0xpc3RWaWV3PlxcclxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIElEYXRhSXRlbSB9IGZyb20gXCIuLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtczogQXJyYXk8SURhdGFJdGVtPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pdGVtU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtU2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBIb21lUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uICh0YXApPVxcXCJvbkJhY2tUYXAoKVxcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJhY3Rpb24tYmFyLXRpdGxlXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwIGgzXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxyXFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIElEYXRhSXRlbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkl0ZW1EZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbTogSURhdGFJdGVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2RhdGE6IERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLl9kYXRhLmdldEl0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja1RhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFJdGVtIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA3XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogOSxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMCxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDEwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDEwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxMlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMyxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDEzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDEzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDE0LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTUsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxNixcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDE2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDE2XCJcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IElEYXRhSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClbMF07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==