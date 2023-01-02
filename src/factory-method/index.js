var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CreatorExport = /** @class */ (function () {
    function CreatorExport() {
    }
    CreatorExport.prototype.exportData = function () {
        var exportObj = this.factoryExport();
        return 'Export data from : ' + exportObj["export"]();
    };
    return CreatorExport;
}());
var ExportJson = /** @class */ (function () {
    function ExportJson() {
    }
    ExportJson.prototype["export"] = function () {
        return 'Export Json';
    };
    return ExportJson;
}());
var ExportHTML = /** @class */ (function () {
    function ExportHTML() {
    }
    ExportHTML.prototype["export"] = function () {
        return 'Export HTML';
    };
    return ExportHTML;
}());
var ConcreteExportJson = /** @class */ (function (_super) {
    __extends(ConcreteExportJson, _super);
    function ConcreteExportJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteExportJson.prototype.factoryExport = function () {
        return new ExportJson();
    };
    return ConcreteExportJson;
}(CreatorExport));
var ConcreteExportHTML = /** @class */ (function (_super) {
    __extends(ConcreteExportHTML, _super);
    function ConcreteExportHTML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteExportHTML.prototype.factoryExport = function () {
        return new ExportHTML();
    };
    return ConcreteExportHTML;
}(CreatorExport));
var exportData = function (exportObj) {
    console.log(exportObj.exportData());
};
exportData(new ConcreteExportHTML());
exportData(new ConcreteExportJson());
