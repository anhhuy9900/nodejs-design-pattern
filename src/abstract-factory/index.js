/**
 * Concrete Export provide various implementations of the Export interface.
 */
var ExportJson = /** @class */ (function () {
    function ExportJson() {
    }
    ExportJson.prototype["export"] = function () {
        return 'Export Json';
    };
    return ExportJson;
}());
/**
 * Concrete Export provide various implementations of the Export interface.
 */
var ExportHTML = /** @class */ (function () {
    function ExportHTML() {
    }
    ExportHTML.prototype["export"] = function () {
        return 'Export HTML';
    };
    return ExportHTML;
}());
/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Export class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
var CreatorExport = /** @class */ (function () {
    function CreatorExport() {
    }
    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    CreatorExport.prototype.exportData = function () {
        var obj = this.factoryExport();
        return 'Export data from : ' + obj["export"]();
    };
    return CreatorExport;
}());
/**
 * Concrete Import provide various implementations of the Export interface.
 */
var ImportJson = /** @class */ (function () {
    function ImportJson() {
    }
    ImportJson.prototype["import"] = function () {
        return 'Import Json';
    };
    return ImportJson;
}());
/**
 * Concrete Import provide various implementations of the Export interface.
 */
var ImportHTML = /** @class */ (function () {
    function ImportHTML() {
    }
    ImportHTML.prototype["import"] = function () {
        return 'Import HTML';
    };
    return ImportHTML;
}());
var FactoryProduceUserA = /** @class */ (function () {
    function FactoryProduceUserA() {
    }
    FactoryProduceUserA.prototype.importData = function () {
        return new ImportHTML();
    };
    FactoryProduceUserA.prototype.exportData = function () {
        return new ExportHTML();
    };
    return FactoryProduceUserA;
}());
var FactoryProduceUserB = /** @class */ (function () {
    function FactoryProduceUserB() {
    }
    FactoryProduceUserB.prototype.importData = function () {
        return new ImportJson();
    };
    FactoryProduceUserB.prototype.exportData = function () {
        return new ExportJson();
    };
    return FactoryProduceUserB;
}());
function produceAbstractFactoryDemo(produce, user) {
    console.log("Action handle data with factory : " + user);
    console.log(produce.importData()["import"]());
    console.log(produce.exportData()["export"]());
}
produceAbstractFactoryDemo(new FactoryProduceUserA, 'user A');
produceAbstractFactoryDemo(new FactoryProduceUserB, 'user B');
