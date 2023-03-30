/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AppConfig.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfig = void 0;
class AppConfig {
    static get MONGO_DB_LOCAL_URI() { return 'mongodb://localhost:27017/biosimulations'; }
    ;
    static get MONGO_DB_LOCAL_URI_NDJ18() { return 'mongodb://127.0.0.1:27017/biosimulations'; }
    ;
}
exports.AppConfig = AppConfig;


/***/ }),

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const app_controller_1 = __webpack_require__("./src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./src/app/app.service.ts");
const AppConfig_1 = __webpack_require__("./src/AppConfig.ts");
const data_module_1 = __webpack_require__("./src/data/data.module.ts");
const users_module_1 = __webpack_require__("./src/users/users.module.ts");
const simulators_module_1 = __webpack_require__("./src/simulators/simulators.module.ts");
const projects_module_1 = __webpack_require__("./src/projects/projects.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(AppConfig_1.AppConfig.MONGO_DB_LOCAL_URI_NDJ18),
            data_module_1.DataModule,
            users_module_1.UsersModule,
            simulators_module_1.SimulatorsModule,
            projects_module_1.ProjectsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to data-api!' };
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./src/data/data.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const data_service_1 = __webpack_require__("./src/data/data.service.ts");
let DataController = class DataController {
    constructor(dataService) {
        this.dataService = dataService;
        // add
    }
    addItem(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.dataService.addNewItem(value);
            if (result.stat == "failed") {
                return {
                    msg: 'Data item addition failed ',
                };
            }
            else {
                return {
                    msg: 'Data item successfully added',
                };
            }
        });
    }
    getItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ownerId = "placeholder1234";
            const results = yield this.dataService.getItems(ownerId);
            return results;
        });
    }
}; // ./End class DataController
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "addItem", null);
tslib_1.__decorate([
    (0, common_1.Post)('/items')
    // (@Body('ownerId') ownerId: string)
    ,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "getItems", null);
DataController = tslib_1.__decorate([
    (0, common_1.Controller)('data'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" ? _a : Object])
], DataController);
exports.DataController = DataController;


/***/ }),

/***/ "./src/data/data.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataItemSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const MONGO = tslib_1.__importStar(__webpack_require__("mongoose"));
exports.DataItemSchema = new MONGO.Schema({
    itemId: { type: String },
    name: { type: String, required: "Enter a  name" },
    description: {
        type: String,
        required: "Enter description"
    },
    ownerId: { type: String },
    createdDate: {
        type: Date,
        default: Date.now
    }
}, { collection: "my_items" });


/***/ }),

/***/ "./src/data/data.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const data_service_1 = __webpack_require__("./src/data/data.service.ts");
const data_controller_1 = __webpack_require__("./src/data/data.controller.ts");
const data_model_1 = __webpack_require__("./src/data/data.model.ts");
let DataModule = class DataModule {
};
DataModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "dataItem", schema: data_model_1.DataItemSchema }]),
        ],
        controllers: [data_controller_1.DataController],
        providers: [data_service_1.DataService],
        exports: [data_service_1.DataService],
    })
], DataModule);
exports.DataModule = DataModule;


/***/ }),

/***/ "./src/data/data.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let DataService = class DataService {
    // collection: 'my_items',
    constructor(dataModel) {
        this.dataModel = dataModel;
        // add code for constructor
    }
    addNewItem(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newItem = new this.dataModel({ value });
            const result = { stat: 'OK', values: {} };
            yield newItem.save((err) => {
                if (err) {
                    result.stat = "failed";
                    result.values = err;
                    console.log("Save to DB error: " + err);
                    return (result);
                }
                else {
                    // this will execute after the function returns ...
                    console.log("New Item added successfully");
                    result.stat = "success";
                    result.values = "New Item added successfully";
                    return (result);
                }
            });
        });
    }
    // find all the items for the ownerId
    getItems(ownerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = { stat: 'OK', values: {} };
            let replyJSON;
            console.log("Get Data items requested ");
            const values = yield this.dataModel.find({ "ownerId": ownerId });
            console.log("Got items back I think:");
            // let see them
            console.log(JSON.stringify(values));
            return values;
        });
    }
};
DataService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('dataItem')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], DataService);
exports.DataService = DataService;


/***/ }),

/***/ "./src/projects/project.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectDataSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const MONGO = tslib_1.__importStar(__webpack_require__("mongoose"));
exports.ProjectDataSchema = new MONGO.Schema({
    id: { type: String },
    name: { type: String },
    simulationRun: { type: Object },
    owner: { type: Object },
    created: Date,
    updated: Date,
}, { collection: "projects" });


/***/ }),

/***/ "./src/projects/projects.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const projects_service_1 = __webpack_require__("./src/projects/projects.service.ts");
let ProjectsController = class ProjectsController {
    constructor(projectService) {
        this.projectService = projectService;
        // add code if needed
    }
    getItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.projectService.getItems();
            return results;
        });
    }
}; // ./ProjectsController
tslib_1.__decorate([
    (0, common_1.Post)('/items'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsController.prototype, "getItems", null);
ProjectsController = tslib_1.__decorate([
    (0, common_1.Controller)('projects'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof projects_service_1.ProjectsService !== "undefined" && projects_service_1.ProjectsService) === "function" ? _a : Object])
], ProjectsController);
exports.ProjectsController = ProjectsController;


/***/ }),

/***/ "./src/projects/projects.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const projects_service_1 = __webpack_require__("./src/projects/projects.service.ts");
const projects_controller_1 = __webpack_require__("./src/projects/projects.controller.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const project_model_1 = __webpack_require__("./src/projects/project.model.ts");
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "projectDataItem", schema: project_model_1.ProjectDataSchema }]),
        ],
        providers: [projects_service_1.ProjectsService],
        controllers: [projects_controller_1.ProjectsController],
        exports: [projects_service_1.ProjectsService],
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;


/***/ }),

/***/ "./src/projects/projects.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let ProjectsService = class ProjectsService {
    // collection: "biosim_projects"
    constructor(projectModel) {
        this.projectModel = projectModel;
        // add code for constructor
    }
    // find all the items for the ownerId
    getItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("Get project items requested ");
            const values = yield this.projectModel.find();
            // let see them
            // console.log(JSON.stringify(values));
            return values;
        });
    }
}; // ./ProjectsService
ProjectsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('projectDataItem')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ProjectsService);
exports.ProjectsService = ProjectsService;


/***/ }),

/***/ "./src/simulators/simulator.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimulatorDataSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const MONGO = tslib_1.__importStar(__webpack_require__("mongoose"));
exports.SimulatorDataSchema = new MONGO.Schema({
    id: { type: String },
    name: { type: String },
    description: { type: String },
}, { collection: "simulators" });


/***/ }),

/***/ "./src/simulators/simulators.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimulatorsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const simulators_service_1 = __webpack_require__("./src/simulators/simulators.service.ts");
let SimulatorsController = class SimulatorsController {
    constructor(simulatorsService) {
        this.simulatorsService = simulatorsService;
        // add
    }
    getItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.simulatorsService.getItems();
            return results;
        });
    }
}; // ./End class DataController
tslib_1.__decorate([
    (0, common_1.Post)('/items'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SimulatorsController.prototype, "getItems", null);
SimulatorsController = tslib_1.__decorate([
    (0, common_1.Controller)('simulators'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof simulators_service_1.SimulatorsService !== "undefined" && simulators_service_1.SimulatorsService) === "function" ? _a : Object])
], SimulatorsController);
exports.SimulatorsController = SimulatorsController;


/***/ }),

/***/ "./src/simulators/simulators.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimulatorsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const simulators_service_1 = __webpack_require__("./src/simulators/simulators.service.ts");
const simulators_controller_1 = __webpack_require__("./src/simulators/simulators.controller.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const simulator_model_1 = __webpack_require__("./src/simulators/simulator.model.ts");
let SimulatorsModule = class SimulatorsModule {
};
SimulatorsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "simulatorDataItem", schema: simulator_model_1.SimulatorDataSchema }]),
        ],
        providers: [simulators_service_1.SimulatorsService],
        controllers: [simulators_controller_1.SimulatorsController],
        exports: [simulators_service_1.SimulatorsService],
    })
], SimulatorsModule);
exports.SimulatorsModule = SimulatorsModule;


/***/ }),

/***/ "./src/simulators/simulators.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimulatorsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let SimulatorsService = class SimulatorsService {
    // collection: "biosim_db"
    constructor(simulatorModel) {
        this.simulatorModel = simulatorModel;
        // add code for constructor
    }
    // find all the items for the ownerId
    getItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("Get simulators items requested ");
            const values = yield this.simulatorModel.find();
            // let see them
            // console.log(JSON.stringify(values));
            return values;
        });
    }
}; // ./ends SimulatorsService
SimulatorsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('simulatorDataItem')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SimulatorsService);
exports.SimulatorsService = SimulatorsService;


/***/ }),

/***/ "./src/users/users.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./src/users/users.service.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    //post / signup
    addUser(userPassword, userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // const saltOrRounds = 10;
            // const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
            const result = yield this.usersService.insertUser(userName, userPassword);
            return {
                msg: 'User successfully registered',
                userId: result.id,
                userName: result.username
            };
        });
    }
    getUser(userPassword, userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.usersService.getUser(userName);
            return {
                msg: 'Got the User successfully ',
                userId: result.id,
                userName: result.username,
                userPassword: result.password
            };
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('/signup'),
    tslib_1.__param(0, (0, common_1.Body)('password')),
    tslib_1.__param(1, (0, common_1.Body)('username')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('/users'),
    tslib_1.__param(0, (0, common_1.Body)('password')),
    tslib_1.__param(1, (0, common_1.Body)('username')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./src/users/users.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const MONGO = tslib_1.__importStar(__webpack_require__("mongoose"));
exports.UserSchema = new MONGO.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });


/***/ }),

/***/ "./src/users/users.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const users_controller_1 = __webpack_require__("./src/users/users.controller.ts");
const users_model_1 = __webpack_require__("./src/users/users.model.ts");
const users_service_1 = __webpack_require__("./src/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "user", schema: users_model_1.UserSchema }])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/users/users.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    insertUser(userName, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const username = userName.toLowerCase();
            const newUser = new this.userModel({
                username,
                password,
            });
            yield newUser.save();
            return newUser;
        });
    }
    getUser(userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const username = userName.toLowerCase();
            const user = yield this.userModel.findOne({ username });
            return user;
        });
    }
};
UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('user')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        // setup swagger
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Biosim Simulators Data')
            .setDescription('Base for testing bcknd data api')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        const port = process.env.PORT || 3000;
        // enable CORS
        app.enableCors();
        // now, go listen
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map