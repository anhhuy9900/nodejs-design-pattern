interface DocumentHTML {
  getContent(): string;
}

interface Printer {
  print(document: Document): void;
}

interface Scan {
  scan(document: Document): void;
}

interface Fax {
  fax(document: Document): void;
}

class ProduceInformation implements Printer, Scan, Fax {
  print(document: Document): void {
    console.log('The Machine is printing');
  }

  scan(document: Document): void {
    console.log('The Machine is scanning');
  }

  fax(document: Document): void {
    console.log('The Machine is sedning a fax');
  }
}
