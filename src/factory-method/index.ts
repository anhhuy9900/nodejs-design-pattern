/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Export class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class CreatorExportFactory {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract factoryExport(): Export;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public exportData(): string {
        const exportObj = this.factoryExport();
        return 'Export data from : ' + exportObj.export();
    }
}

/**
 * The Export interface declares the operations that all concrete products must
 * implement.
 */
interface Export {
    export(): string;
}


/**
 * Concrete Export provide various implementations of the Export interface.
 */
class ExportDataJson implements Export {
    public export(): string {
        return 'Export Json';
    }
}

/**
 * Concrete Export provide various implementations of the Export interface.
 */
class ExportDataHTML implements Export {
    public export(): string {
        return 'Export HTML';
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting export's type.
 */
class ConcreteExportJson extends CreatorExportFactory {
    public factoryExport(): Export {
        return new ExportJson();
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting export's type.
 */
class ConcreteExportHTML extends CreatorExportFactory {
    public factoryExport(): Export {
        return new ExportHTML();
    }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
const exportData = function(type: string) {
    switch (type) {
        case 'json':
            const creator = new ConcreteExportJson();
            console.log(creator.exportData());
            break;
        case 'html':
            const creator2 = new ConcreteExportHTML();
            console.log(creator2.exportData());
            break;
    }
}
exportData('json');

const exportData2 = function(exportObj: CreatorExportFactory) {
    console.log(exportObj.exportData());
}
exportData2(new ConcreteExportHTML());
exportData2(new ConcreteExportJson());
