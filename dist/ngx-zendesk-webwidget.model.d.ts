export declare abstract class NgxZendeskWebwidgetConfig {
    lazyLoad: boolean;
    timeOut: number;
    injectionTag: string;
    abstract accountUrl: string;
    abstract callback(zE: any): any;
}
