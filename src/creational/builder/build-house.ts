class Room {
  constructor(public description: string = 'Build a room in house') {}
}

class Garage {
  constructor(public description: string = 'Build a garage in house') {}
}

class Garden {
  constructor(public description: string = 'Build a garden in house') {}
}

//
interface RoomBuilderInterface {
  buildBathroom(): RoomBuilderInterface;

  buildBedroom(): RoomBuilderInterface;

  build(): RoomBuilderInterface;
}

class RoomBuilder implements RoomBuilderInterface {
  private room: Room;

  constructor() {
    this.room = new Room();
  }

  public build() {
    console.log('RoomBuilder: ', this.room.description);
    return this.buildBathroom().buildBedroom();
  }

  buildBathroom() {
    console.log('RoomBuilder: Build a bath room');
    return this;
  }

  buildBedroom() {
    console.log('RoomBuilder: Build a bead room');
    return this;
  }
}

interface GardenBuilderInterface {
  plantTree(): GardenBuilderInterface;

  buildFence(): GardenBuilderInterface;

  build(): GardenBuilderInterface;
}

class GardenBuilder implements GardenBuilderInterface {
  private garage: Garage;

  constructor() {
    this.garage = new Garage();
  }

  public build() {
    console.log('GardenBuilder: ', this.garage.description);
    return this.plantTree().buildFence();
  }

  plantTree() {
    console.log('GardenBuilder: Create a plat tree');
    return this;
  }

  buildFence() {
    console.log('GardenBuilder: Build a fence');
    return this;
  }
}

interface GarageBuilderInterface {
  packingSpace(): GarageBuilderInterface;

  carWash(): GarageBuilderInterface;

  build(): GarageBuilderInterface;
}

class GarageBuilder implements GarageBuilderInterface {
  private garage: Garage;

  constructor() {
    this.garage = new Garage();
  }

  public build() {
    console.log('GarageBuilder: ', this.garage.description);
    return this.packingSpace().carWash();
  }

  packingSpace() {
    console.log('GarageBuilder: Build a packing space');
    return this;
  }

  carWash() {
    console.log('GarageBuilder: Build a car wash');
    return this;
  }
}

interface HouseInterface {
  room: RoomBuilderInterface | null;
  garden: GardenBuilderInterface | null;
  garage: GarageBuilderInterface | null;
}

class House implements HouseInterface {
  room: RoomBuilderInterface | null = null;
  garden: GardenBuilderInterface | null = null;
  garage: GarageBuilderInterface | null = null;
}

class HouseBuilder {
  private readonly house: House;

  constructor() {
    this.house = new House();
  }

  buildRoom(room: RoomBuilderInterface) {
    this.house.room = room.build();
    return this;
  }

  buildGarden(garden: GardenBuilderInterface) {
    this.house.garden = garden.build();
    return this;
  }

  buildGarage(garage: GarageBuilderInterface) {
    this.house.garage = garage.build();
    return this;
  }

  build(): House {
    console.log('HouseBuilder: Build a house completed');
    return this.house;
  }
}

class ConstructionOrder {
  buildHouse() {
    const house = new HouseBuilder();

    const room = new RoomBuilder();
    const garden = new GardenBuilder();
    const garage = new GarageBuilder();

    return house.buildRoom(room).buildGarage(garage).buildGarden(garden).build();
  }
}

const constructor = new ConstructionOrder();
constructor.buildHouse();
