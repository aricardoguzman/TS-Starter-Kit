export declare const fetchQuery: (url: string, method: string, body: any) => Promise<unknown>;
export declare const serviceCredentials: ({
    name: string;
    url: string;
    methods: {
        GET: never[];
        POST: never[];
        PUT: never[];
    };
    credentials: {
        service_id: string;
        password: string;
    };
} | {
    name: string;
    url: string;
    methods: {
        GET?: undefined;
        POST?: undefined;
        PUT?: undefined;
    };
    credentials?: undefined;
})[];
//# sourceMappingURL=request.d.ts.map