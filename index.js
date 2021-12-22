"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = void 0;
var matomo_tracker_js_1 = __importDefault(require("@datapunt/matomo-tracker-js"));
var variables_1 = require("./environment/variables");
var urlBase = (function () {
    if (variables_1.env.ANALYTICS_ENDPOINT) {
        return variables_1.env.ANALYTICS_ENDPOINT;
    }
    throw new Error("No analytics endpoint defined in environment variables, please define REACT_APP_ANALYTICS_ENDPOINT");
})();
var siteId = (function () {
    if (variables_1.env.ANALYTICS_SITE_ID) {
        return Number(variables_1.env.ANALYTICS_SITE_ID);
    }
    throw new Error("No analytics site id defined in environment variables, please define REACT_APP_ANALYTICS_SITE_ID");
})();
exports.analytics = new matomo_tracker_js_1.default({
    urlBase: urlBase,
    siteId: siteId,
});
