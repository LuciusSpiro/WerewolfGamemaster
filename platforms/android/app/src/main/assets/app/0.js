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

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Home\"></Label>\n</ActionBar>\n\n<GridLayout class=\"page page-content\">\n    <ListView [items]=\"items\" class=\"list-group\">\n        <ng-template let-item=\"item\">\n            <Label [nsRouterLink]=\"['../item', item.id]\" [text]=\"item.name\" class=\"list-group-item\"></Label>\n        </ng-template>\n    </ListView>\n</GridLayout>"

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

module.exports = "<ActionBar class=\"action-bar\">\n    <NavigationButton (tap)=\"onBackTap()\" android.systemIcon=\"ic_menu_back\"></NavigationButton>\n    <Label class=\"action-bar-title\" [text]=\"item.name\"></Label>\n</ActionBar>\n\n<GridLayout>\n    <Label class=\"m-10 h3\" verticalAlignment=\"top\" [text]=\"item.description\"></Label>\n</GridLayout>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFDeUI7QUFFMUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0ZBQW1CLEVBQUU7Q0FDdkQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEI5Qix1Yjs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2M7QUFPaEU7SUFHSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBSSxD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Z0VBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBNEZ2QjtJQUFELGtCQUFDO0NBQUE7QUE1RnVCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiZGVmYXVsdFwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJhY3Rpb24tYmFyLXRpdGxlXFxcIiB0ZXh0PVxcXCJIb21lXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCI+XFxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJpdGVtc1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgW25zUm91dGVyTGlua109XFxcIlsnLi4vaXRlbScsIGl0ZW0uaWRdXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIElEYXRhSXRlbSB9IGZyb20gXCIuLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaXRlbVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5faXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiAodGFwKT1cXFwib25CYWNrVGFwKClcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYWN0aW9uLWJhci10aXRsZVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMCBoM1xcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBJRGF0YUl0ZW0gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJJdGVtRGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogSURhdGFJdGVtO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2RhdGE6IERhdGFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5fZGF0YS5nZXRJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBvbkJhY2tUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gNFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gNFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA2XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA2XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gN1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gN1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDhcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA5XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDEwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxMVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDEyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEzLFxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDEzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxM1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxNCxcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxNFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTUsXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDE1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDE2LFxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDE2XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxNlwiXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IElEYXRhSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=