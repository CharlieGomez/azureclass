"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.httpTranslateLoader = exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var http_1 = require("@angular/common/http");
var ngx_gallery_9_1 = require("ngx-gallery-9");
var ng_select_1 = require("@ng-select/ng-select");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var navbar_component_1 = require("./components/shared/navbar/navbar.component");
var footer_component_1 = require("./components/shared/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var about_component_1 = require("./components/about/about.component");
var skill_component_1 = require("./components/skill/skill.component");
var experience_component_1 = require("./components/experience/experience.component");
var timeline_component_1 = require("./components/timeline/timeline.component");
var course_component_1 = require("./components/course/course.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                about_component_1.AboutComponent,
                skill_component_1.SkillComponent,
                experience_component_1.ExperienceComponent,
                timeline_component_1.TimelineComponent,
                course_component_1.CourseComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: httpTranslateLoader,
                        deps: [http_1.HttpClient]
                    }
                }),
                ngx_gallery_9_1.NgxGalleryModule,
                ng_select_1.NgSelectModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// AOT compilation support
function httpTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/translate/');
}
exports.httpTranslateLoader = httpTranslateLoader;
