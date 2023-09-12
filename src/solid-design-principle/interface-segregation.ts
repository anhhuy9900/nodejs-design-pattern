/**
 * ! Segregation means keeping things separated, and the Interface Segregation Principle is about separating the interfaces.
 * ! The principle states that many client-specific interfaces are better than one general-purpose interface
 */


/**
 * Firstly, we need to create interface for BuildHouse class, the interface we will breakdown step by steps to build a standard house
 */
interface StandardHouseInterface {
    createDesign(): void;
    concreting(): void;
    completedBuild(): void;
}

/**
 * Ad then we weill create the class to describe how to build a house
 */
class BuildHouse implements StandardHouseInterface {
    createDesign() {
        return 'Create the design before concreting';
    };
    concreting() {
        return 'Concreting after we have a draft design ';
    };

    completedBuild() {
        return 'Complete all phrases';
    }
}

/**
 * Fow use case we need to build a luxurious house and then we need add more some methods to response requirements from owner
 */
interface LuxuriousHouseInterface {
    buildPool(): void;
    buildParking(): void;
}

/**
 * The class used to build a luxurious house and included necessary methods to build a luxurious house
 * That mean's We need to create new an interface and extend StandardHouseInterface that the new LuxuriousHouseInterface includes some new methods able to create a luxurious house
 * ! Actually, we can add more some methods into StandardHouseInterface but it's not easy to read code and will affect to existing other features
 * ! And When we creates new interfaces includes some new methods , it'll easy to maintain and without affected to the base interface
 * ! it will corresponding with the "Interface Segregation" statement -> The principle states that many client-specific interfaces are better than one general-purpose interface
 */
class BuildLuxuriousHouse implements StandardHouseInterface, LuxuriousHouseInterface {
    createDesign() {
        return 'Create the design before concreting';
    };

    concreting() {
        return 'Concreting after we have a draft design ';
    };

    buildPool() {
        return 'Complete all phrases';
    }

    buildParking() {
        return 'Complete all phrases';
    }

    completedBuild() {
        return 'Complete all phrases';
    }
}