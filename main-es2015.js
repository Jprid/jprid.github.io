(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.service */ "./src/app/page.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return [a0]; };
function AppComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class AppComponent {
    constructor(service) {
        this.service = service;
        this.header = 'John M. Pridmore';
        this.title = 'J.M.P.';
        this.titles = this.service.getTitles();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [[1, "navigation-outer"], [1, "navigation"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n    margin-top: 2px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 10%;\r\n    font-family: 'Lato', sans-serif;\r\n    text-indent: 3ch;\r\n    color: #43a8fa;\r\n    font-weight: 400;\r\n }\r\n\r\n.navigation[_ngcontent-%COMP%] {\r\n    justify-content: right;\r\n    height: 100%;\r\n}\r\n\r\n.navigation-outer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    min-height: 50px;\r\n    border-bottom: 2px solid red;\r\n    align-items: center;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    font-size: larger;\r\n    justify-content: flex-end;\r\n    -webkit-margin-before: 0;\r\n            margin-block-start: 0;\r\n    margin-right: 2ch;\r\n    text-align: center;\r\n    height: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\r\n    margin-top: 2.5px;\r\n    -webkit-text-decoration: None;\r\n            text-decoration: None;\r\n    height: 25px;\r\n    padding: 0% 1% 1%;\r\n    color: inherit;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    \r\n    \r\n    color: #004ffc;\r\n    border-left: 1mm ridge #004ffc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHdCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDZEQUE2RDtJQUM3RCxjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWluZGVudDogM2NoO1xyXG4gICAgY29sb3I6ICM0M2E4ZmE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gfVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tb3V0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmF2aWdhdGlvbiA+IGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMmNoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5hLCBhOnZpc2l0ZWQge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IE5vbmU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwJSAxJSAxJTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiA+IGE6aG92ZXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzZjNmQ2ZDsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6ICAxcHggMXB4IDFweCAxcHggcmdiYSgxMzgsIDEzNCwgMTI4LCAwLjgzNik7ICovXHJcbiAgICBjb2xvcjogIzAwNGZmYztcclxuICAgIGJvcmRlci1sZWZ0OiAxbW0gcmlkZ2UgIzAwNGZmYztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");


const appRoutes = [
    { path: ':key', component: _page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"] },
    { path: '', redirectTo: 'About', pathMatch: 'full' }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/page.service.ts":
/*!*********************************!*\
  !*** ./src/app/page.service.ts ***!
  \*********************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageService {
    constructor() {
        this.links = [{
                'Key': 'About',
                'Body': `John Pridmore is a Full-Stack Software Engineer with a focus on highly-distributed, low-latency systems.`,
            },
            {
                'Key': 'Projects',
                'Body': `https://github.com/meganpecho/VendMeUpAutomated Vending Machine
      Automated vending machine on the Ethereum blockchain. 
      https://github.com/Jprid/Dynamic-Field-ValidatorDynamic Field Validator
      Asynchronously accesses JSON API endpoint to collect list of customers through use of multiprocessing library. Compares customers against requirements for each field of customer information.
      
      https://github.com/nansta/CSC394-SeniorProjectGraduation Path Scheduler
      Finds shortest path to graduation for masters students at DePaul under constraints. Added boolean expression tree and scraper modules. 
      
      https://github.com/Jprid/SpaceGraphGame
      
      Space Graph Game
      Finds path from one point in space (NxN array representing the "map" of space) to another, avoiding obstacles on the way. 
      
      Dynamic Memory System
      64-byte aligned heap for dynamic memory allocation. 4x faster than the memory system inherently used by C++.
      
      Particle System
      Refactored legacy code that draws toliet paper roll unravelling in order to optimize performance. Code draws the particles of a toilet paper roll as it unravels. Optimizations made program run 7.82x faster. 
      `
            },
            {
                'Key': 'Contact',
                'Body': "Email: Johnpridmore.lit@gmail.com <br> LinkedIn: Jprid<br>Github: Jprid<br>"
            }
        ];
    }
    getTitles() {
        return this.links.map((item) => item.Key);
    }
    getContent(key) {
        let retVal = this.links.find((item) => item.Key === key);
        // console.log(retVal)
        if (retVal === undefined) {
            return "CONTENT NOT FOUND";
        }
        return retVal.Body;
    }
    handleContactPage(key) {
        let content = this.getContent(key);
        return this.separate(content, '<br>');
    }
    // paragraph here denoting an arbitrarily large chunk of sentences
    formatContentAsArbitrarilyLargeChunksOfSentences(key) {
        if (key === 'Contact') {
            return this.handleContactPage(key);
        }
        let content = this.getContent(key);
        return this.separateIntoParagraphs(content);
    }
    separate(content, splitter) {
        const paragraphs = content.split(splitter);
        console.log(paragraphs);
        return paragraphs;
    }
    separateIntoParagraphs(content, max = 5, splitter = '\.') {
        let paragraphs = [];
        let subParagraphs = [];
        let index = 0;
        let contents = content.split(splitter);
        if (contents.length <= max) {
            paragraphs.push(content);
        }
        else {
            contents.forEach((sentence) => {
                if (index >= max) {
                    paragraphs.push(subParagraphs.join(''));
                    subParagraphs = [];
                    index = 0;
                }
                subParagraphs.push(`${sentence}.`);
                index += 1;
            });
        }
        return paragraphs;
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(); };
PageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageService, factory: PageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page.service */ "./src/app/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0, a1) { return { "bulleted-list": a0, "contact-info": a1 }; };
function PageComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.key === "Projects", ctx_r0.key === "Contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r1, "\n");
} }
class PageComponent {
    constructor(pageService, activatedRout) {
        this.pageService = pageService;
        this.activatedRout = activatedRout;
        this.key = '';
    }
    ngOnInit() {
        this.activatedRout.paramMap.subscribe(params => {
            this.key = params.get('key');
            this.contents = this.pageService.formatContentAsArbitrarilyLargeChunksOfSentences(this.key);
            console.log(this.contents);
        });
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_p_0_Template, 2, 5, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex: 1 auto;\r\n    flex-direction: column;\r\n    min-height: 100px;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin-top: 1%;\r\n    align-items: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto', sans-serif;\r\n    -webkit-margin-after: 0;\r\n            margin-block-end: 0;\r\n    -webkit-margin-before: 0px;\r\n            margin-block-start: 0px;\r\n    margin-left:  2%;\r\n    margin-right:  2%;\r\n    text-indent: 2ch;\r\n    line-height: 5ch;\r\n    font-size: large;\r\n    background-color: #6c6d6d;\r\n    border-left:  2mm solid #004ffc;\r\n    padding-left: 1ch;\r\n    padding-right: 1ch;\r\n    \r\n    min-width: 300px;\r\n    text-align: center;\r\n    max-width: 75%;\r\n}\r\n\r\np.bulleted-list[_ngcontent-%COMP%] {\r\n    -webkit-margin-before: 2%;\r\n            margin-block-start: 2%;\r\n}\r\n\r\np.contact-info[_ngcontent-%COMP%] {\r\n    -webkit-margin-before: 2%;\r\n            margin-block-start: 2%;\r\n}\r\n\r\np[_ngcontent-%COMP%]:hover {\r\n    \r\n    border-right:  2mm ridge #004ffc;\r\n    margin-left: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsdUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6ICAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogIDIlO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDJjaDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1Y2g7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNmQ2ZDtcclxuICAgIGJvcmRlci1sZWZ0OiAgMm1tIHNvbGlkICMwMDRmZmM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFjaDtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDIwMHB4OyAqL1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG59XHJcblxyXG5wLmJ1bGxldGVkLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyJTtcclxufVxyXG5cclxucC5jb250YWN0LWluZm8ge1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyJTtcclxufVxyXG5cclxucDpob3ZlciB7XHJcbiAgICAvKiBib3gtc2hhZG93OiAgMHB4IDFweCAyLjVweCBibGFuY2hlZGFsbW9uZDsgKi9cclxuICAgIGJvcmRlci1yaWdodDogIDJtbSByaWRnZSAjMDA0ZmZjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page',
                templateUrl: './page.component.html',
                styleUrls: ['./page.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Programming\GithubPage\personal-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map