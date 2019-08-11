webpackHotUpdate(1,{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVjtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsaUNBQWlDO2dCQUN2QyxRQUFRLEVBQUUsQ0FBQztnQkFDWCxHQUFHLEVBQUUsS0FBSztnQkFDVixJQUFJLEVBQUUsc0JBQXNCO2FBQy9CLEVBQUU7Z0JBRUMsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSw0Q0FBNEM7Z0JBQ2xELFFBQVEsRUFBRSxDQUFDO2dCQUNYLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSwyQkFBMkI7YUFDcEMsRUFBRTtnQkFDQyxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUseUVBQXlFO2dCQUMvRSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxHQUFHLEVBQUUsSUFBSTtnQkFDVCxJQUFJLEVBQUUsc0JBQXNCO2FBQy9CLEVBQUU7Z0JBQ0MsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLCtFQUErRTtnQkFDckYsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsSUFBSSxFQUFFLG1CQUFtQjthQUM1QjtTQUNKLENBQUM7SUFFRixDQUFDO0lBbkNRLGVBQWU7UUFMM0IsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBRWxCLG1FQUFzQztTQUN6QyxDQUFDOztPQUNXLGVBQWUsQ0FvQzNCO0lBQUQsc0JBQUM7Q0FBQTtBQXBDMkIiLCJmaWxlIjoiMS41ZTdiYTc1MDRlM2ZjYjQyNzg2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBLYXJ0ZSB9IGZyb20gXCIuL0thcnRlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNhcmRzOiBBcnJheTxLYXJ0ZT47XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgdGhpcy5jYXJkcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiV2Vyd29sZlwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIldlcnfDtmxmZSBmcmVzc2VuIGtsZWluZSBLaW5kZXIuXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAxLFxyXG4gICAgICAgICAgICBndXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXRoOiBcIn4vYXNzZXRzL3dlcndvbGYucG5nXCJcclxuICAgICAgICB9LCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lOiBcIkRvcmZiZXdvaG5lclwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRvcmZiZXdvaG5lciBow6RuZ2VuIHVuc2NodWxkaWdlIExldXRlIGF1Zi5cIixcclxuICAgICAgICAgICAgcG9zaXRpb246IDAsXHJcbiAgICAgICAgICAgIGd1dDogdHJ1ZSxcclxuICAgICAgICAgICAgcGF0aDogXCJ+L2Fzc2V0cy9kb3JmYmV3b2huZXIucG5nXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU2VoZXJpblwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRpZSBTZWhlcmluIGthbm4gcHJvIFJ1bmRlIGVpbmVuIFNwaWVsZXIgYXVmIGd1dCBvZGVyIGLDtnNlIHVudGVyc3VjaGVuLlwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogMyxcclxuICAgICAgICAgICAgZ3V0OiB0cnVlLFxyXG4gICAgICAgICAgICBwYXRoOiBcIn4vYXNzZXRzL3NlaGVyaW4ucG5nXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSGV4ZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRpZSBIZXhlIGthbm4gamV3ZWlscyBlaW5tYWxpZyBlaW5lbiBIZWlsdHJhbmsgdW5kIGVpbmVuIEdpZnR0cmFuayBlaW5zZXR6ZW4uXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAyLFxyXG4gICAgICAgICAgICBndXQ6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdGg6IFwifi9hc3NldHMvaGV4ZS5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9