export default class ServiceLocator {
    private static services: Map<string, Record<string, any>> = new Map();

    static registerService(serviceName: string, instance: Record<string, any>): void {
        console.log('ServiceLocator - registerService: %s, %s', serviceName, instance)
        ServiceLocator.services.set(serviceName, instance)
    }

    static getService<T>(serviceName: string): T {
        const service = ServiceLocator.services.get(serviceName) as T
        // console.log('ServiceLocator - getService: %s', service)
        if (!service) {
            throw new Error("Service not registered.");
        }
        return service;
    }

}