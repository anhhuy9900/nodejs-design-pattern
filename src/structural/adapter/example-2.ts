interface IReport {
  createReport(): string;
}

/**
 * If the service is private , we can't change it because many exist code using it
 * and we have to change many places
 */
class ServiceReport implements IServiceReport {
  // The report only generate for XML file
  generateReport() {
    return 'The report has been created with XML file';
  }
}

interface IServiceReport {
  generateReport(): string;
}

class CreateReport implements IReport {
  service: IServiceReport;

  constructor(service: IServiceReport) {
    this.service = service;
  }

  createReport() {
    return this.service.generateReport();
  }
}

const report = new CreateReport(new ServiceReport());
report.createReport();

/**
 * When we need to extra the new feature with generate report for multiple resources
 * For now, we should create new adapter to generate report for multiple resource like JSON, EXCEL etc that it's not affected to old features
 */
class ReportAdapter implements IReport {
  service: IServiceReport;

  constructor(service: IServiceReport) {
    this.service = service;
  }

  createReport() {
    return this.service.generateReport();
  }
}

class JSONServiceReport implements IServiceReport {
  generateReport() {
    return 'The report has been created with JSON file';
  }
}

class ExcelServiceReport implements IServiceReport {
  generateReport() {
    return 'The report has been created with Excel file';
  }
}

/**
 * Now we can generate the report with multiple resources
 */

const serviceReport = new CreateReport(new ServiceReport());
console.log(serviceReport.createReport());

const jsonReport = new ReportAdapter(new JSONServiceReport());
console.log(jsonReport.createReport());

const excelReport = new ReportAdapter(new ExcelServiceReport());
console.log(excelReport.createReport());
