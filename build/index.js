"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const routes = (0, express_1.default)();
exports.routes = routes;
const shelters_routes_1 = require("./routes/shelters.routes");
routes.use("/shelters", shelters_routes_1.sheltersRoutes);
