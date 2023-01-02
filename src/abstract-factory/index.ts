interface HandleDataFactory {
     exportData(): Export;
     importData(): Import;
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
class ExportJson implements Export {
    public export(): string {
        return 'Export Json';
    }
}

/**
 * Concrete Export provide various implementations of the Export interface.
 */
class ExportHTML implements Export {
    public export(): string {
        return 'Export HTML';
    }
}

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Export class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class CreatorExport {
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
        const obj = this.factoryExport();
        return 'Export data from : ' + obj.export();
    }
}

/**
 * The Import interface declares the operations that all concrete products must
 * implement.
 */
interface Import {
    import(): string;
}


/**
 * Concrete Import provide various implementations of the Export interface.
 */
class ImportJson implements Import {
    public import(): string {
        return 'Import Json';
    }
}

/**
 * Concrete Import provide various implementations of the Export interface.
 */
class ImportHTML implements Import {
    public import(): string {
        return 'Import HTML';
    }
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
class FactoryProduceUserA implements HandleDataFactory {
    public importData(): Import {
        return new ImportHTML();
    }

    public exportData(): Export {
        return new ExportHTML();
    }
}

class FactoryProduceUserB implements HandleDataFactory {
    public importData(): Import {
        return new ImportJson();
    }

    public exportData(): Export {
        return new ExportJson();
    }
}

function produceAbstractFactoryDemo(produce: HandleDataFactory, user: string) {
    console.log("Action handle data with factory : " + user);
    console.log(produce.importData().import());
    console.log(produce.exportData().export());
}
produceAbstractFactoryDemo(new FactoryProduceUserA, 'user A');
produceAbstractFactoryDemo(new FactoryProduceUserB, 'user B');

