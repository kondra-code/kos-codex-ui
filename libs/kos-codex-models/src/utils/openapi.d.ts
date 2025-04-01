export interface paths {
    "/api/kos/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of known regions (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a4f2be01-1943-47fc-8b6f-8154257e6c3f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/regions/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return available unit systems and time / date formats. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e23b09b7-dcf7-4cdc-93ac-e284bd9c459c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/ingredients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of all currently known ingredients by sourceId. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["cc55a218-800a-4b3d-b704-915688a2070d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/ingredients/sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of all currently known sources. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/pumpEvents/replaceLine/{holder}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Indicate that the lines associated with holder have been replaced. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The holder associated with the replaced line. */
                    holder: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/pumpEvents/replacePump/{pump}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Indicate that the specified pump has been replaced. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The pump that has been replaced. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/openapi/{*baseUrl}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns OpenAPI docs for all endpoints below the specified base URL. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description All endpoints below this baseUrl are returned. */
                    baseUrl: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/octet-stream": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/node": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the resolved node manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["18cc2fb1-450c-4d8d-b70a-a720779b95c9"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/device": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the resolved device manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["464fd484-a8f7-4110-a1c9-d5cc5a482d15"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the software info description of the active manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14cd5395-fc97-46fa-af0b-6e6fae9334af"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/read/float/{boardPath}/{index}/{subIndex}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a float from the specified subnode. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/read/int/{boardPath}/{index}/{subIndex}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read an int from the specified subnode. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return CAN hardware stats. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a64cb519-08f0-4a8d-9811-ac2392eb58b6"];
                    };
                };
            };
        };
        put?: never;
        /** Reset the CAN hardware stats. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/stats/raw": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return raw CAN hardware stats (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a64cb519-08f0-4a8d-9811-ac2392eb58b6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/byte/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write a byte to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/short/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write a short to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/float/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write a fload to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/int/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write an int to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/diagnostics/{pump}/pressureTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform pressure test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1913d3cf-699a-4cf8-9001-8f328e80fccd"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/diagnostics/{pump}/opennessTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform valve openness test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["7ecad2c0-8085-4bcb-a14f-ba62edc3db65"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/diagnostics/{pump}/flowTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform flow test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1913d3cf-699a-4cf8-9001-8f328e80fccd"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/diagnostics/{pump}/electricalTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform electrical test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["b6862d7b-42d6-41a4-b17e-66acd772f3c3"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/rotateAll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Rotate all log streams on all nodes. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/streams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of log streams on the specified node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/subscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Subscribe to the specified stream. This enables real-time log events for the stream. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to subscribe to. */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/unsubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unsubscribe to the specified stream. This disables real-time log events for the stream. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to unsubscribe from. */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/blocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return block meta data for the specified stream. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to fetch block data from. */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["21b51f63-50f9-4c3c-b39e-aed80392a9be"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/blocks/{blockId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the log data for the specified block. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to fetch block data from. */
                    stream: string;
                    /** @description Block to return. */
                    blockId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["dd916644-cb37-4139-8988-9ad88f098a84"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/rotate/{stream}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Rotate the specified log stream on all nodes. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Log stream to rotate */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/overrides": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["25a02feb-c36e-4f7a-9659-01c6de1a2f85"];
                    };
                };
            };
        };
        put?: never;
        /** Create or update an override (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["3973bfd8-b1e8-4650-a96a-724a9648c320"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove an override (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["3973bfd8-b1e8-4650-a96a-724a9648c320"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return schema data about all known config data. This describes the structure of every known
         *     ConfigBean. This is used by kOS Studio tools. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["8a76e482-e8d5-4893-b05b-5023664d6fe9"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/schema/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return schema data about the ConfigBean identified by the handle path. This describes
         *     the structure of the config bean for use by tools in kOS Studio. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["46979ebf-ef8b-4393-9874-e24da9384be9"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the ConfigBean associated with the specified handle path. This is actual
         *     configuration object in memory and reflects the actual configuration values
         *     visible to the associated bean. This only works for beans that exist on this node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to a bean containing a configuration. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["67add266-22ca-4c60-9065-1e4b532ab08c"];
                    };
                };
            };
        };
        put?: never;
        /** Update the ConfigBean associated with the specified handle path. This will update
         *     the actual configuration object in memory as well as update the database to persist
         *     the changes so they will be applied on reboot.
         *
         *     If a value is set to the default value then the new value will not be stored in
         *     the database and any previous value will be removed. This allows changes in default
         *     values to be made in future release without having the old defaults locked into the
         *     database.
         *
         *     Whether an object reacts in real time to changes in the configuration is up to the
         *     implementation of the bean. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to a bean configuration to update. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["59053dc4-1fe6-428a-8191-c8acb83622e7"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["31fa1b94-5c77-4171-a72e-730eb3ffc769"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/details/{options}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return configuration details from all available ConfigSources. This will return both
         *     default values and override values for all handle paths known by all sources. This is
         *     useful for tooling and for inspecting what changes have been persisted in the config
         *     service.
         *
         *     A stock kOS install defines default values as the initial values of a config bean as
         *     set in the bean constructor with any values from system xml files loaded on top.
         *     Override values are any changes applied via endpoints which are persisted in the database.
         *
         *     As it is also possible to insert new ConfigSources into the config service which can
         *     have higher priority than other sources, this is also useful to see what the effective
         *     default and override values are for the active sources. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Bitwise OR of options that identify the data to return: 1=bean, 2=overrides,
                     *     4=defaults, 8=schema */
                    options: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["940ca2ef-d833-4caf-9d33-ed3f8a622539"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/details/{path}/{options}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the config details for the specified handle path. See /details for a
         *     description of config details. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to return config details for. */
                    path: string;
                    /** @description Bitwise OR of options that identify the data to return: 1=bean, 2=overrides,
                     *     4=defaults, 8=schema */
                    options: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["940ca2ef-d833-4caf-9d33-ed3f8a622539"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update multiple ConfigBeans in a single call. See /{path} for details about the
         *     update process. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["2865c4a1-5e66-4a52-a8f8-98fb775f5834"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["31fa1b94-5c77-4171-a72e-730eb3ffc769"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/value/merged/{scopedPath}/{attr}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return merged value of the scoped config bean attribute. This merges all
         *     scopes up from the specified scope starting scope. By specifying a nodeId
         *     scope, you get the same values that the node would actually see. By using
         *     a higher level scope, you can see the merged value for that scope which
         *     is useful for debugging and for settings compliance. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                    /** @description Name of attribute to return */
                    attr: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["f6029e83-2f98-4ba3-bdca-f4f619c8302c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/value/{scopedPath}/{attr}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return value of the scoped config bean attribute. This merges defaults and overrides
         *     but only for the scope specified in the path. This is useful for examining just a
         *     single value at a single scope in the scope stack. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                    /** @description Name of attribute to return */
                    attr: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["f6029e83-2f98-4ba3-bdca-f4f619c8302c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/defaults/{scopedPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the defaults for a particular scoped path. This is only defaults in
         *     the specified scope. Useful for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/merged/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return merged values for the specified path using the default scope of the node.
         *     This most closely resembles how config beans are set on this node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/overrides/{scopedPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the overrides for a particular scoped path. This is only overrides
         *     in the specified scope. Useful for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the device definition. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["bd136631-6b85-452f-a469-697fca260210"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/assemblies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the device assemblies. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["bd136631-6b85-452f-a469-697fca260210"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/serialNumber": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the serial number of the device. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/serialNumber/{serialNum}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the serial number of the device. This may fail if the serial number provider is not ready yet. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The new serial number for the device. */
                    serialNum: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/localization/context/{*path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the context with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1fb4e897-d2b0-4676-b141-0afb583864aa"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/localization/contexts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of registered contexts. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["52045cb6-a077-41bb-94ad-8091020dd054"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/ice/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of availble ice types (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/ice/type/{path}/{type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the ice type for the specified ice agitator. This will set the type as well as apply
         *     all the default settings for that type to the agitator configuration. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the ice agitator. */
                    path: string;
                    /** @description Ice type for the agitator. */
                    type: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/update/install": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Install the specified manifest on the specified device. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["75b45e46-79fb-40dc-86bc-133dc4f59714"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4664e31d-17ff-49d8-9805-60cbbb987578"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/update/available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the available updates across all available storage devices. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["24fe5e52-a73b-42a1-a2a0-46ebcb85553e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/service-example": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all available service-example. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["34a17778-949d-458c-adc0-f208ca3491c6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/service-example/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve all the trouble id's listed in the request body. ServiceExample marked as
         *     resolvable can generally execute logic that will resolve the underlying issue without
         *     the caller needing any knowledge or details of the underlying process. It a trouble
         *     is successfully resolved it will be removed from the list, otherwise it will remain
         *     in the list. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["83b9c76e-1fc4-4a78-ba4b-77dc35ecebbc"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4664e31d-17ff-49d8-9805-60cbbb987578"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/service-example/resolve/{troubleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve the specified trouble. ServiceExample marked as resolvable can generally
         *     execute logic that will resolve the underlying issue without the caller needing any
         *     knowledge or details of the underlying process. It a trouble is successfully resolved
         *     it will be removed from the list, otherwise it will remain in the list. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trouble to resolve. */
                    troubleId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4664e31d-17ff-49d8-9805-60cbbb987578"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/service-example/{troubleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the specified trouble. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trouble to return. */
                    troubleId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["897486e6-4638-44c4-a5ab-48a97fbd2190"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/traces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available future traces. Every future captures a trace of events that
         *     allow the future to be analyzed. A future can also declare itself a child of another future
         *     in which case the trace for the child future becomes a child of the parent trace which
         *     ensures that parent traces can be analyzed with full context. The future service maintains
         *     a limited queue of traces and this endpoint returns the contents of the queue. This
         *     only includes the trace objects which describe structure and existence but no events.
         *     Use the events endpoint to fetch the event list for any future in the trace
         *
         *     As trace data is held in a queue, new traces will cause existing traces to be removed
         *     which means event data may not be available some time after this endpoint reports
         *     the existence of the trace. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e76a61ff-6490-42e6-9312-6dcc85b12bf6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/traces/{traceId}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the events for the specified trace. Since traces are held in a queue in future service
         *     it's possible that new traces have pushed previous traces out of the queue and the events are
         *     no longer available.
         *
         *     Event data contains both timestamps and an index. While the timestamps are ms resolution,
         *     this may not be sufficient to determine event order. The index is global across every
         *     trace event and should be used to determine the order of events. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trace to return events for. */
                    traceId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2781b7af-db6a-47c1-8def-a842c02ca8ba"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/{futureId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the specified future if not already completed. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the future to cancel. */
                    futureId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/date": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the date. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["d095136b-a2f7-44fb-ba4a-65087debb800"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/timezone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the timezone. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
                    };
                };
            };
        };
        put?: never;
        /** Set the timezone. (v1.0) */
        post: {
            parameters: {
                query?: {
                    /** @description The new linux timezone. */
                    tz?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/time": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the time. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["1cc17eb6-5158-490d-bdda-1c1fbbf655a1"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/container/{pump}/{reason}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a sold out trouble for the container attached to the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle for the pump. */
                    pump: string;
                    /** @description Reason for the trouble. */
                    reason: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/slice/{pump}/{reason}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a sold out trouble for the container attached to the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle for the pump. */
                    pump: string;
                    /** @description Reason for the trouble. */
                    reason: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/service-example": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all existing SoldOutAware service-example. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa3acf9c-34f8-4dd3-8159-a016b0dfdc7e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/db": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the sold out data from the database. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e717daa7-73e1-40d6-8ae6-ee0c9eaed6f3"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all metrics in the system. This should only be used for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a97f2468-621e-40e1-ab83-bb15acc40616"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/names": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of all global metrics. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named global metrics object. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9719e24a-03ad-436e-a73b-610dfe41a1fc"];
                    };
                };
            };
        };
        put?: never;
        /** Create / reset the named global metrics object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to create / reset. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the named global metrics object. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to remove. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{nozzle}/names": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of all metrics for the nozzle. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{nozzle}/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named metrics object for the nozzle. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9719e24a-03ad-436e-a73b-610dfe41a1fc"];
                    };
                };
            };
        };
        put?: never;
        /** Create / reset the named metrics object for the nozzle. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to create / reset. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the named metrics object for the nozzle. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to remove. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/descriptor/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the entire descriptor for the HandleAware object with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return the descriptor for. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/descriptor/{path}/{dotted}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the entire descriptor for the HandleAware object with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return the descriptor for. */
                    path: string;
                    /** @description Dotted notation subset of the descriptor to return. */
                    dotted: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fuelGauges/{holder}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the fuel gauge for the holder. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the holder with the fuel gauge. */
                    holder: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["46e5bf03-3631-4879-9ece-b85ada551947"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fuelGauges/{holder}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set fuel gauge to the specified value. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the holder with the fuel gauge. */
                    holder: string;
                    /** @description Value of the fuel gauge. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/state/paths": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the paths of all registered state beans. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/state/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the state bean with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the state bean to return. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["3049ef9b-a35e-4c31-ad72-4d621b3ed293"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of log groups on this node (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/overrides/{nodeType}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database for the specified nodeType. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Node type to return overrides for. */
                    nodeType: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["25a02feb-c36e-4f7a-9659-01c6de1a2f85"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/overrides/{nodeType}/{typePrefix}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database for the specified nodeType and type prefix (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Node type to return overrides for. */
                    nodeType: string;
                    /** @description Override type prefix to return. */
                    typePrefix: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["25a02feb-c36e-4f7a-9659-01c6de1a2f85"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of all defined handle paths. Handles use weak references to their associated
         *     beans which means that handles may exist for some time after the associated bean is
         *     no longer accessible or garbage collected. This endpoint exists primarily as a debugging
         *     resource and should not be used as the primary source of information about what objects
         *     actually exist in the system. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a HandleView-constrained view of the bean associated with the handle path. By marking
         *     various properties of HandleAware objects with HandleView, this endpoint can be used to
         *     provide some visibility into internal state for use in testing and debugging. This data should
         *     not be used for any production function, as the data returned is not guaranteed to be stable
         *     over time due to the purpose of this being debugging data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/{path}/{view}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a named view-constrained view of the bean associated with the handle path. By marking
         *     various properties of HandleAware objects with specified view, this endpoint can be used to
         *     provide a specific view of a given bean graph. Custom views can be registered with HandleService
         *     for use with this endpoint. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return. */
                    path: string;
                    /** @description Name of the view to apply to the bean. */
                    view: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of available named views for use with /{path}/{view} endpoint. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the current download. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/cancel/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the active download for the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/resume/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resume the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/paused": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of the paused downloaders. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/pause/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pause the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/artifacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the current list of artifacts in the active OTA session. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["697fb9dc-942a-4de4-a442-266e5911bdc0"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/cartridges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of installed cartridges. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e195e2e9-db09-46f8-b156-fbd4c3757476"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/cartridges/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the cartridge with the specified id. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the cartridge to return. */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e0a711d7-e48b-4c10-8531-14e076df53b7"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/insertion/filters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the filters in the chain. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9b90e3d1-cd77-424c-90e4-8ab82c5e2399"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/cms/screens/context/{*path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the context with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["00b06f24-cbe7-4284-95e8-2d1af3f4c042"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/cms/screens/contexts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of registered contexts. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["67336c3e-e772-4112-93bd-da1dd17fbe32"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reboot the entire device. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reboot the specified node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/blockedManifests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of blocked manifests for the specified node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** Clear the list of blocked manifests on the specified node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/blockedManifests/{manifestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add the specified manifestId to the blocked list on the specified node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description The manifestId to add to the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the specified manifestId from the blocked list on the specified node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description The manifestId to remove from the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/blockedManifests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of blocked manifest ids. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/blockedManifests/{manifestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add the specified manifestId to the blocked list on the primary node, which will cause a rollback if active. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The manifestId to add to the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the specified manifestId from the blocked list on the primary node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The manifestId to remove from the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/calibrate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform calibrate pour on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1913d3cf-699a-4cf8-9001-8f328e80fccd"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/preCalibrate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform pre-calibrate pour on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1913d3cf-699a-4cf8-9001-8f328e80fccd"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/verify/{calVolume}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform verify pour on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                    /** @description The volume poured during calibration in ml. */
                    calVolume: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1913d3cf-699a-4cf8-9001-8f328e80fccd"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/baseline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the baseline calibration for the pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["95a488d9-5507-4097-8088-55551de98e0a"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/baseline/{value}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the baseline calibration for the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                    /** @description The calibration value. */
                    value: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/complete/{calVolume}/{verifyVolume}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Confirm the verify volume poured. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                    /** @description The volume poured during calibration in ml. */
                    calVolume: number;
                    /** @description The volume poured during verification in ml. */
                    verifyVolume: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/storage/devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the available storage devices. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["37b0b8fb-b66f-426c-9609-d554550faf9d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/network/interfaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available network interfaces. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["52dac4ab-6bef-4ab3-9531-48634b3b71f8"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return available browser instances. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["0002a0a8-bb67-4346-a372-0bba240212a3"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/redirect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Redirect to the url in the request param. Used internally for redirect based navigation. (v1.0) */
        get: {
            parameters: {
                query?: {
                    /** @description The url to redirect to. */
                    url?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/{nodeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the url for the browser associated with the specified nodeId and null name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description NodeId of the browser to update. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["a7344e26-a8fa-4e22-81ab-f67faf89df4c"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/{nodeId}/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the url for the browser associated with the specified nodeId and name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description NodeId of the browser to update. */
                    nodeId: string;
                    /** @description Name of the browser on the node. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["a7344e26-a8fa-4e22-81ab-f67faf89df4c"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/intent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Navigate using the supplied BrowserIntent object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["525d3e58-ba52-4598-9b3b-4d9683e2b6c1"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Navigate using the supplied BrowserUrl object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["30564d42-affe-4824-a368-4473b8b93a3e"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of sources viewed using HandleView. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e5c05a39-625c-4f21-a94d-8847de075996"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all critical data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e72be939-2346-4df6-b425-3fe62429123f"];
                    };
                };
            };
        };
        put?: never;
        /** Set all critical data at once. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["e72be939-2346-4df6-b425-3fe62429123f"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/data/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named critical data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e72be939-2346-4df6-b425-3fe62429123f"];
                    };
                };
            };
        };
        put?: never;
        /** Set the named critical data. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to set. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["e72be939-2346-4df6-b425-3fe62429123f"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Delete the named critical data. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to delete. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/brandset/nutrition/{bevId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the nutrition info for the specified beverageId at the specified volume. This returns
         *     nutrition data for the preferred recipe of the specified beverage. This is not necessarily the
         *     recipe that will be used to pour. (v1.0) */
        get: {
            parameters: {
                query?: {
                    /** @description Reqeust param that is comma separated list of volumes. */
                    volumes?: components["schemas"]["113fdae8-a751-4ca2-96bc-67b64d960d1f"];
                };
                header?: never;
                path: {
                    /** @description The beverageId to return nutrition data for. */
                    bevId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9cfb289a-8c41-4a2f-b23f-8669eeefe0e3"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/brandset/grantProperties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the grant properties currently in effect. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
                    };
                };
            };
        };
        put?: never;
        /** Set the grant properties to use with the active brandset. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/report/{board}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return calibration report for the specified board. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the board to return the report for. */
                    board: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["c4376d20-d76a-422e-8efd-4990092a23e9"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return calibration data for the specified pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["f82fd811-107e-40ce-be90-ba9af657c035"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/running/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the running calibration value of the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The calibration value in range of [26..42>. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/code/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set pump baseline and running calibration using the code on the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The code from the sticker on the pump. */
                    code: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/baseline/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the baseline calibration value of the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The calibration value in range of [26..42>. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/both/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the running and baseline calibration value of the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The calibration value in range of [26..42>. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns all existing ingredient assigments. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["3a3b87c6-b104-4872-98be-4dda8175e1dd"];
                    };
                };
            };
        };
        put?: never;
        /** Create a new ingredient assignment for the specified holder. If an existing
         *     assignment exists for the holder, it will be removed as part of adding the
         *     new mapping. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["03541966-4e6f-4265-8aef-b1db0afe3855"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["03541966-4e6f-4265-8aef-b1db0afe3855"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/assignments/{holderPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete an existing ingredient mapping for the specified holder. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path for the holder */
                    holderPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vfs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the structure of the VFS. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ff05ded6-34c3-4638-99ac-4bdc751b366c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/system/codex/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add and item to the list (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["76172dcc-794b-4b3e-a29a-2149b67549c5"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/system/codex/modify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Modify an item from the list (v1.0) */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["76172dcc-794b-4b3e-a29a-2149b67549c5"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/system/codex/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of objects. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["47ee207d-9352-4995-9749-bb3f4055ddad"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/system/codex/remove/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** remove an item from the list (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The object id to remove */
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "2bb37fa5-a00b-4fb8-8c15-7d929b29fca0": unknown;
        "6fed1708-0bf3-4fac-9819-3d32fb3ea065": {
            nodeName?: string;
            optional?: boolean;
            nodeType?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["ad3be887-8b61-4527-bec7-dc6618ff537f"];
            primary?: boolean;
        };
        "75b45e46-79fb-40dc-86bc-133dc4f59714": {
            manifestId?: string;
            deviceId?: string;
        };
        "ad3a069d-de35-430f-958f-8b5b1e0628c8": {
            /** Format: int64 */
            runStartTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.commons.util.concurrent.future.trace.FutureTrace>) */
            children?: components["schemas"]["d5a5f252-944a-4db3-b45d-53768c19e551"];
            /** Format: int64 */
            createTime?: number;
            /** Format: int64 */
            runEndTime?: number;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["dde3a133-acfd-4f97-8013-cc3b6f6c1e0b"];
            name?: string;
            /** Format: int64 */
            endTime?: number;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            parentId?: number;
        };
        "67add266-22ca-4c60-9065-1e4b532ab08c": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.commons.core.service.config.ConfigBeanListener>) */
            listeners?: components["schemas"]["a6c17b60-e77a-467d-bce0-669934a3115b"];
        };
        "9719e24a-03ad-436e-a73b-610dfe41a1fc": {
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            /** Format: date-time */
            creationDate?: string;
            locked?: boolean;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["74f32049-ad75-4180-a502-bddedde37c74"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["74f32049-ad75-4180-a502-bddedde37c74"];
        };
        /** @description (typeName=com.tccc.kos.commons.core.service.config.BeanChanges) */
        "f65b49a3-624a-47e1-9487-0102afcbb3dd": components["schemas"]["9b24a400-435d-463c-baae-8651755c323e"];
        /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
        "80a74f53-a312-4df8-9e49-dcbc8d5880b4": components["schemas"]["199de109-cd08-4bc8-b9bc-4aa2446fa29e"];
        /** @description (typeName=com.tccc.kos.ext.cms.service.screen.ScreenContext) */
        "67336c3e-e772-4112-93bd-da1dd17fbe32": components["schemas"]["00b06f24-cbe7-4284-95e8-2d1af3f4c042"];
        "7949f26e-b589-4ffa-bf59-c8eff21c9be2": {
            /** Format: double */
            volume?: number;
        };
        "940ca2ef-d833-4caf-9d33-ed3f8a622539": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            scopeNames?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails>) */
            details?: components["schemas"]["5b6a64b4-f15d-4c53-b22e-0c603f1d33bc"];
        };
        "f8dcd546-6ce4-4731-8006-e7d7f7b140c2": unknown;
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext) */
        "52045cb6-a077-41bb-94ad-8091020dd054": components["schemas"]["1fb4e897-d2b0-4676-b141-0afb583864aa"];
        "f38a5afe-40b6-4636-99c7-97e1fbc1f5d8": unknown;
        "c0551018-324d-44a9-b71a-c27a15df048e": {
            /** @description (typeName=com.tccc.kos.commons.manifest.ManifestArtifact) */
            artifact?: components["schemas"]["7d1d8afd-1119-49f1-b2ce-786e121a072d"];
            identifier?: string;
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["4bcb1740-7c2b-4f53-a448-92f4f16b2596"];
        };
        "ff05ded6-34c3-4638-99ac-4bdc751b366c": unknown;
        "a5fc3a7f-9be8-4aa9-907e-b3596f2836f3": {
            color?: string;
            /** Format: int32 */
            rank?: number;
            actionRole?: string;
            visibleRole?: string;
        };
        "38930e57-3a0a-4893-8574-c3751e785968": {
            /** Format: int32 */
            arbitrationLost?: number;
            /** Format: int32 */
            busError?: number;
            /** Format: int32 */
            errorWarning?: number;
            /** Format: int32 */
            errorPassive?: number;
            /** Format: int32 */
            restarts?: number;
            /** Format: int32 */
            busOff?: number;
        };
        "464fd484-a8f7-4110-a1c9-d5cc5a482d15": {
            incomplete?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedDeviceManifest$ManifestInfo>) */
            manifestInfoChain?: components["schemas"]["f4ae7e94-183e-45e9-9474-8f6f7510ec79"];
            /** @description (typeName=com.tccc.kos.commons.manifest.DeviceManifest) */
            deviceManifest?: components["schemas"]["bce1055e-705f-4613-84e3-dac1a6e76292"];
            manifestId?: string;
        };
        "fb73a4a3-0878-4250-8b24-4adf8bf984ae": components["schemas"]["c0551018-324d-44a9-b71a-c27a15df048e"][];
        "b30637ec-7f12-4c0f-b550-2c7b43eb5b7e": {
            /** @description (typeName=com.tccc.kos.commons.manifest.chained.ChainedManifest) */
            chainedManifest?: components["schemas"]["d34d6337-be7b-4a64-9c93-dc00b80d1213"];
            type?: string;
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["4bcb1740-7c2b-4f53-a448-92f4f16b2596"];
        };
        "b71af7b6-67ff-4394-bb7d-21c284c37643": unknown;
        "0699dea6-973c-47a1-9996-efff5ce8aac0": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo>) */
            locales?: components["schemas"]["4b7eb9c0-706a-42ec-a623-c2a1bda89401"];
        };
        "a4f2be01-1943-47fc-8b6f-8154257e6c3f": components["schemas"]["62a44d5f-6faf-4531-b5f4-8b18c99be9bd"][];
        "d34d6337-be7b-4a64-9c93-dc00b80d1213": {
            deviceType?: string;
            nextManifestId?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installArtifacts?: components["schemas"]["199de109-cd08-4bc8-b9bc-4aa2446fa29e"];
            name?: string;
            manifestType?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installLayers?: components["schemas"]["199de109-cd08-4bc8-b9bc-4aa2446fa29e"];
            /** Format: int32 */
            version?: number;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
            /** @description (typeName=java.util.Map<java.lang.String, java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>>) */
            sections?: components["schemas"]["80a74f53-a312-4df8-9e49-dcbc8d5880b4"];
        };
        "bd136631-6b85-452f-a469-697fca260210": {
            serialNumber?: string;
            name?: string;
            nodeId?: string;
        };
        "372e4ecd-cb72-4d67-acb8-6bdd503c8eba": {
            id?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.util.units.Unit>) */
            units?: components["schemas"]["d7f47312-da8a-4e53-913a-3cab49e5ba79"];
        };
        "9b90e3d1-cd77-424c-90e4-8ab82c5e2399": components["schemas"]["6b15cb3a-840d-4840-803d-5be8523aef2e"][];
        "8672b586-25b8-4d65-aea2-950f29100a53": string[];
        "46979ebf-ef8b-4393-9874-e24da9384be9": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema>) */
            schema?: components["schemas"]["4e972486-d774-4a5a-91d3-e80ef34aa982"];
            /** @description (typeName=java.util.List<java.lang.String>) */
            paths?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
        };
        "3a3b87c6-b104-4872-98be-4dda8175e1dd": components["schemas"]["03541966-4e6f-4265-8aef-b1db0afe3855"][];
        "f1a23481-de91-4e43-b987-1898639859e3": {
            configured?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.EthernetDetails) */
            ethernet?: components["schemas"]["5816119f-ad42-4d9e-8c57-23416ded3043"];
            /** @description (typeName=com.tccc.kos.core.service.network.beans.WifiDetails) */
            wifi?: components["schemas"]["1d24f76d-eb0e-44ad-8572-d56b3d436918"];
            hwaddress?: string;
            name?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.Ip4Settings) */
            ip4settings?: components["schemas"]["5fd336d8-6757-4c68-bbbf-aa509d045410"];
            type?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.NetworkInterfaceCategory) */
            category?: components["schemas"]["1eaf416f-2288-4c39-9a21-f2a28fa0e7e2"];
            /** Format: int32 */
            nmdevicestate?: number;
            /** Format: int32 */
            mtu?: number;
        };
        /** @description (typeName=java.util.Collection<? extends com.tccc.kos.ext.dispense.service.ingredient.BaseIngredient>) */
        "cc55a218-800a-4b3d-b704-915688a2070d": components["schemas"]["f6c060ef-f30a-45e0-97cd-8cd0d6eefe3e"];
        "3bec46ac-fe31-4905-b2d5-701580edb7c6": {
            /** @description (typeName=java.lang.Object[]) */
            values?: components["schemas"]["5f49107e-2f86-433d-8220-c3453f51e50d"];
            /** @description (typeName=java.lang.Class<? extends com.tccc.kos.commons.core.service.config.options.ConfigOptions>) */
            optionsClass?: components["schemas"]["e92390c6-6b9f-4b1d-8081-16a538dac19f"];
            format?: string;
            /** @description (typeName=com.tccc.kos.commons.core.service.config.options.ConfigOptions) */
            options?: components["schemas"]["355def72-1e6b-4e8a-9803-b8857c8914d8"];
            type?: string;
            desc?: string;
        };
        "1d24f76d-eb0e-44ad-8572-d56b3d436918": {
            /** Format: int32 */
            apFlags?: number;
            bssid?: string;
            /** Format: int32 */
            wpaFlags?: number;
            /** Format: int32 */
            bitrate?: number;
            ssid?: string;
            /** Format: int32 */
            signal?: number;
            /** Format: int32 */
            rsnFlags?: number;
            /** Format: int32 */
            lastSeenAgo?: number;
            /** Format: int32 */
            frequency?: number;
        };
        "bf7b9173-74b6-46d6-ac67-24db49a7434b": {
            /** Format: double */
            initGauge?: number;
            /** Format: int64 */
            createTime?: number;
            /** Format: int32 */
            slicePos?: number;
            /** Format: double */
            softGauge?: number;
            containerId?: string;
            /** Format: double */
            maxGauge?: number;
            /** Format: double */
            hardGauge?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "ca0eaf0d-4395-4d26-8b71-96080540ff37": unknown;
        "7ecad2c0-8085-4bcb-a14f-ba62edc3db65": unknown;
        "133312c7-9320-430b-bda8-8f9afcaeec6c": components["schemas"]["c0551018-324d-44a9-b71a-c27a15df048e"][];
        "d956df72-e508-4f23-974d-1c5b10fb82a2": {
            browserName?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["ad3be887-8b61-4527-bec7-dc6618ff537f"];
        };
        /** @description (typeName=com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema) */
        "4e972486-d774-4a5a-91d3-e80ef34aa982": components["schemas"]["3bec46ac-fe31-4905-b2d5-701580edb7c6"];
        "a64cb519-08f0-4a8d-9811-ac2392eb58b6": {
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$LinkStats) */
            linkStats?: components["schemas"]["f6dd6705-cefe-4804-929e-2edd49f22b37"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$DeviceStats) */
            deviceStats?: components["schemas"]["38930e57-3a0a-4893-8574-c3751e785968"];
            /** Format: int32 */
            state?: number;
            /** Format: int32 */
            txError?: number;
            /** Format: int32 */
            rxError?: number;
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace) */
        "10cb8cd7-bc47-4266-ae2d-67a3e5e9640a": components["schemas"]["0699dea6-973c-47a1-9996-efff5ce8aac0"];
        "e195e2e9-db09-46f8-b156-fbd4c3757476": components["schemas"]["e0a711d7-e48b-4c10-8531-14e076df53b7"][];
        "ebaaba3a-e9d8-4667-93af-37e20a9f20fb": {
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
            scope?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            overrides?: components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
        };
        "a8b2e330-a543-4636-a641-ef0fcd40b61b": {
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.device.ManifestNodeInfo>) */
            nodes?: components["schemas"]["50be7bc6-69d7-4821-a97e-0b963c8f8e2c"];
            /** @description (typeName=java.util.Set<java.lang.String>) */
            nodeTypes?: components["schemas"]["47877870-d40b-4656-83a4-6024bb7a65e2"];
        };
        "eb68e3fe-7ce8-45e0-a644-f4fb4a4cfe94": components["schemas"]["313f02ff-bdc1-42f0-a604-f92c0fdaaef5"][];
        "ce934a8d-5f7a-4dc8-b433-3a0ea9c1ad99": unknown;
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "74f32049-ad75-4180-a502-bddedde37c74": components["schemas"]["e7248e5f-50d1-4a4e-9133-eb4c2abbbb51"];
        "1cc17eb6-5158-490d-bdda-1c1fbbf655a1": {
            /** Format: int32 */
            sec?: number;
            /** Format: int32 */
            min?: number;
            /** Format: int32 */
            hour?: number;
        };
        "697fb9dc-942a-4de4-a442-266e5911bdc0": components["schemas"]["019297b6-b1e7-4d3c-aea8-f1fe547fb43e"][];
        "35a54bb0-e3fc-4828-a756-bd81ce685f78": unknown;
        "c4376d20-d76a-422e-8efd-4990092a23e9": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibrationReport$PumpReport>) */
            pumps?: components["schemas"]["e6b44e74-2efc-4875-90da-f5f5df97bab2"];
            boardPath?: string;
        };
        "84f44139-1d24-4470-88f8-f473ff2ea319": {
            default?: boolean;
            measure?: string;
            /** Format: double */
            offset?: number;
            /** Format: int32 */
            decimals?: number;
            name?: string;
            /** Format: double */
            scale?: number;
            alias?: string;
        };
        "199de109-cd08-4bc8-b9bc-4aa2446fa29e": components["schemas"]["1f376839-f8a2-4ecc-835c-452107da13be"][];
        "18f1b9b8-c103-40b7-b80e-ab76c7184cc3": components["schemas"]["92ecb4fa-b673-413e-8bec-6ee39e7304ee"][];
        "90cc8819-96ad-4ec9-abbe-a009b05028cf": {
            /** @description (typeName=byte[]) */
            criticalData?: components["schemas"]["f38a5afe-40b6-4636-99c7-97e1fbc1f5d8"];
            /** Format: double */
            sourceWeight?: number;
            /** Format: int32 */
            sourceMaxLength?: number;
            criticalDataReady?: boolean;
        };
        "c838268a-1af8-4181-8769-aae29771fc4a": {
            /** Format: int64 */
            totalBytes?: number;
            /** Format: int64 */
            freeBytes?: number;
        };
        "71744a6f-dcbf-401b-a4a8-35cfc4cd12b9": components["schemas"]["59d47519-4542-4b8d-8414-95f5126394ac"][];
        "355def72-1e6b-4e8a-9803-b8857c8914d8": {
            type?: string;
        };
        "1f376839-f8a2-4ecc-835c-452107da13be": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            name?: string;
            version?: string;
            hash?: string;
        };
        "31fa1b94-5c77-4171-a72e-730eb3ffc769": {
            tracker?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.BeanChanges>) */
            beanChanges?: components["schemas"]["f65b49a3-624a-47e1-9487-0102afcbb3dd"];
        };
        "62a44d5f-6faf-4531-b5f4-8b18c99be9bd": {
            country?: string;
            timeFormatId?: string;
            hidden?: boolean;
            unitSystemId?: string;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            timeZones?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
            dateFormatId?: string;
        };
        "897486e6-4638-44c4-a5ab-48a97fbd2190": {
            reason?: string;
            /** Format: date-time */
            createTime?: string;
            resolvable?: boolean;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            ifaces?: components["schemas"]["8672b586-25b8-4d65-aea2-950f29100a53"];
            /** Format: int32 */
            id?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["ca9451f7-bcc7-4369-a176-ae2310789760"];
            type?: string;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            tags?: components["schemas"]["8672b586-25b8-4d65-aea2-950f29100a53"];
            /** @description (typeName=com.tccc.kos.commons.core.service.trouble.TroubleInfo) */
            info?: components["schemas"]["a5fc3a7f-9be8-4aa9-907e-b3596f2836f3"];
            group?: string;
        };
        "00b06f24-cbe7-4284-95e8-2d1af3f4c042": {
            path?: string;
            basePath?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.cms.service.screen.Screen>) */
            screens?: components["schemas"]["eaf5df74-2955-4a64-90eb-115fe6fe5c42"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["059e4275-fecd-40af-8e9e-608fc7244377"];
            type?: string;
        };
        "47877870-d40b-4656-83a4-6024bb7a65e2": string[];
        "525d3e58-ba52-4598-9b3b-4d9683e2b6c1": {
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["d956df72-e508-4f23-974d-1c5b10fb82a2"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            properties?: components["schemas"]["59053dc4-1fe6-428a-8191-c8acb83622e7"];
        };
        "e0a711d7-e48b-4c10-8531-14e076df53b7": {
            /** Format: int64 */
            insertTime?: number;
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.rfid.freestyle.FreestyleRfidTag) */
            rfidTag?: components["schemas"]["b267c290-a541-4ffb-bd7c-d2e2fc1beb4f"];
            id?: string;
            /** @description (typeName=java.lang.String[]) */
            ingredientIds?: components["schemas"]["1a4448ad-02b0-46c3-89b4-f0c11358d837"];
            locked?: boolean;
            intrinsic?: boolean;
            soldOut?: boolean;
            /** Format: date-time */
            piercedDate?: string;
            mark?: string;
        };
        "40479d28-a2d3-4444-9623-7f42807137ea": {
            /** Format: double */
            running?: number;
            noStorage?: boolean;
            /** Format: double */
            baseline?: number;
            calibrated?: boolean;
        };
        "da64a2cb-af94-473f-930f-8a3d598fa1ba": string;
        "019297b6-b1e7-4d3c-aea8-f1fe547fb43e": {
            /** @description (typeName=com.tccc.kos.commons.manifest.BaseManifestArtifact) */
            artifactInfo?: components["schemas"]["1f376839-f8a2-4ecc-835c-452107da13be"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.core.primary.service.ota.OTADownloadRequest>) */
            requests?: components["schemas"]["8dd252cd-7959-40ec-be08-2748402f3099"];
            error?: string;
            done?: boolean;
            /** @description (typeName=com.tccc.kos.core.primary.service.ota.OTAArtifact$Status) */
            status?: components["schemas"]["2bb37fa5-a00b-4fb8-8c15-7d929b29fca0"];
        };
        "ca9451f7-bcc7-4369-a176-ae2310789760": unknown;
        "59d47519-4542-4b8d-8414-95f5126394ac": {
            /** Format: double */
            volume?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume$RoundedValue>) */
            values?: components["schemas"]["6e8f5e99-6c40-438d-830c-5a8fcae3c6e4"];
        };
        "52dac4ab-6bef-4ab3-9531-48634b3b71f8": components["schemas"]["f1a23481-de91-4e43-b987-1898639859e3"][];
        "b267c290-a541-4ffb-bd7c-d2e2fc1beb4f": {
            /** Format: int32 */
            tagVersion?: number;
            /** Format: double */
            fuelGauge?: number;
            /** Format: int32 */
            width?: number;
            /** Format: int32 */
            plantCode?: number;
            uin?: string;
            /** Format: int64 */
            id?: number;
            /** Format: date-time */
            piercedDate?: string;
            enjoyByDateStr?: string;
            /** Format: int32 */
            cartridgeNum?: number;
        };
        "d7f47312-da8a-4e53-913a-3cab49e5ba79": components["schemas"]["84f44139-1d24-4470-88f8-f473ff2ea319"][];
        "e6851d20-cd1a-4f18-933e-5f5dc98091d8": components["schemas"]["8352c7c7-bb7f-4009-a4d7-88a2720fa22b"][];
        "34a17778-949d-458c-adc0-f208ca3491c6": components["schemas"]["897486e6-4638-44c4-a5ab-48a97fbd2190"][];
        "37b0b8fb-b66f-426c-9609-d554550faf9d": components["schemas"]["e73981e5-e58f-48d1-8465-19165fc3f041"][];
        "e23b09b7-dcf7-4cdc-93ac-e284bd9c459c": {
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.date.DateFormat>) */
            dateFormats?: components["schemas"]["eb68e3fe-7ce8-45e0-a644-f4fb4a4cfe94"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.units.UnitSystem>) */
            unitSystems?: components["schemas"]["a7cb0e3e-6aab-4dad-880b-cb49126034fa"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.time.TimeFormat>) */
            timeFormats?: components["schemas"]["f85213f6-19c2-442d-951d-78d6544a652e"];
        };
        "a7cb0e3e-6aab-4dad-880b-cb49126034fa": components["schemas"]["372e4ecd-cb72-4d67-acb8-6bdd503c8eba"][];
        "f6c060ef-f30a-45e0-97cd-8cd0d6eefe3e": components["schemas"]["ddcab4e9-5e5b-40e6-8933-4c669c9bb71f"][];
        "1eaf416f-2288-4c39-9a21-f2a28fa0e7e2": unknown;
        "8dd252cd-7959-40ec-be08-2748402f3099": components["schemas"]["0f352e1b-4077-4eda-8e2a-fd6ab6b2266f"][];
        "3973bfd8-b1e8-4650-a96a-724a9648c320": {
            level?: string;
            name?: string;
            type?: string;
            nodeType?: string;
        };
        "d4b984b3-7805-49d3-bc34-9ced35a16560": {
            empty?: boolean;
        };
        "43dc11a4-05e0-434f-bc10-7f5f6fd038c8": {
            summary?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            details?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
        };
        "03541966-4e6f-4265-8aef-b1db0afe3855": {
            ingredientId?: string;
            holderPath?: string;
            /** Format: int64 */
            createTime?: number;
            factoryJson?: string;
            error?: string;
            containerId?: string;
        };
        "8a76e482-e8d5-4893-b05b-5023664d6fe9": components["schemas"]["46979ebf-ef8b-4393-9874-e24da9384be9"][];
        /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics>) */
        "a97f2468-621e-40e1-ab83-bb15acc40616": components["schemas"]["9225c3cc-5ffd-488d-961a-73c9cab8aebc"];
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics) */
        "9225c3cc-5ffd-488d-961a-73c9cab8aebc": components["schemas"]["da3e710e-fede-48f5-a0ac-55a757dd4ae0"];
        "f4ae7e94-183e-45e9-9474-8f6f7510ec79": components["schemas"]["b30637ec-7f12-4c0f-b550-2c7b43eb5b7e"][];
        "2781b7af-db6a-47c1-8def-a842c02ca8ba": components["schemas"]["e7b7fd76-c939-4fc6-aeb2-335e9c231ed5"][];
        "a6c17b60-e77a-467d-bce0-669934a3115b": components["schemas"]["b71af7b6-67ff-4394-bb7d-21c284c37643"][];
        "6c3d8ef0-1a8e-472a-bc9b-d9e0abf2fdfa": components["schemas"]["43dc11a4-05e0-434f-bc10-7f5f6fd038c8"][];
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "91e1b09b-32d6-4daa-bef6-a6541e5dc938": components["schemas"]["7949f26e-b589-4ffa-bf59-c8eff21c9be2"];
        "e5f1d384-5cf5-41e9-8153-dd139a5c364c": {
            displayValue?: string;
            units?: string;
            type?: string;
        };
        "e7b7fd76-c939-4fc6-aeb2-335e9c231ed5": {
            ex?: string;
            /** Format: date-time */
            time?: string;
            /** Format: int32 */
            idx?: number;
            type?: string;
        };
        "50be7bc6-69d7-4821-a97e-0b963c8f8e2c": components["schemas"]["6fed1708-0bf3-4fac-9819-3d32fb3ea065"][];
        "dde3a133-acfd-4f97-8013-cc3b6f6c1e0b": {
            cancel?: boolean;
            fail?: boolean;
            abort?: boolean;
            success?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureEvent) */
            futureEvent?: components["schemas"]["60efa16c-4375-4283-a9a8-92011e18f276"];
            terminate?: boolean;
            done?: boolean;
        };
        "2d2252fa-0dae-42da-a412-5407de65f609": {
            /** Format: int64 */
            createTime?: number;
            /** Format: int32 */
            slicePos?: number;
            containerId?: string;
            /** Format: int32 */
            soldOutCount?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "16dcd91a-4b4d-4a37-a79a-f1ad0edb92f0": {
            parent?: string;
            /** @description (typeName=java.io.File) */
            parentFile?: components["schemas"]["16dcd91a-4b4d-4a37-a79a-f1ad0edb92f0"];
            hidden?: boolean;
            /** Format: int64 */
            freeSpace?: number;
            /** Format: int64 */
            totalSpace?: number;
            /** Format: int64 */
            usableSpace?: number;
            /** @description (typeName=java.io.File) */
            canonicalFile?: components["schemas"]["16dcd91a-4b4d-4a37-a79a-f1ad0edb92f0"];
            directory?: boolean;
            path?: string;
            /** @description (typeName=java.io.File) */
            absoluteFile?: components["schemas"]["16dcd91a-4b4d-4a37-a79a-f1ad0edb92f0"];
            file?: boolean;
            absolute?: boolean;
            name?: string;
            canonicalPath?: string;
            absolutePath?: string;
        };
        "d095136b-a2f7-44fb-ba4a-65087debb800": {
            /** Format: int32 */
            month?: number;
            /** Format: int32 */
            year?: number;
            /** Format: int32 */
            day?: number;
        };
        "f94c4d2e-46dd-4e80-931f-3d2b2923be30": {
            name?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["b8e498c6-bfd0-4bd0-9c12-0611c5b1b0be"];
        };
        "45594c61-b5cc-4bad-a9ab-24e409be9903": {
            /** @description (typeName=java.util.List<com.tccc.kos.core.primary.service.update.UpdateInfo$Note>) */
            notes?: components["schemas"]["6c3d8ef0-1a8e-472a-bc9b-d9e0abf2fdfa"];
            blocked?: boolean;
            /** Format: int64 */
            createTime?: number;
            active?: boolean;
            manifestId?: string;
            deviceId?: string;
        };
        "47ee207d-9352-4995-9749-bb3f4055ddad": components["schemas"]["76172dcc-794b-4b3e-a29a-2149b67549c5"][];
        "a7344e26-a8fa-4e22-81ab-f67faf89df4c": {
            redirect?: boolean;
            url?: string;
        };
        "e92390c6-6b9f-4b1d-8081-16a538dac19f": unknown;
        "e6b44e74-2efc-4875-90da-f5f5df97bab2": components["schemas"]["f82fd811-107e-40ce-be90-ba9af657c035"][];
        "1913d3cf-699a-4cf8-9001-8f328e80fccd": unknown;
        "99e5ed5a-8a78-48dd-8477-fba4a9d9f155": unknown;
        "ddcab4e9-5e5b-40e6-8933-4c669c9bb71f": {
            sourceId?: string;
            name?: string;
            id?: string;
            type?: string;
        };
        "7005698e-1e0f-43f5-a957-2ffde0366619": {
            vfsPath?: string;
            endDate?: string;
            /** Format: int32 */
            videoLoops?: number;
            /** Format: int32 */
            width?: number;
            name?: string;
            screenType?: string;
            /** Format: int64 */
            buildDate?: number;
            /** Format: int32 */
            priority?: number;
            /** Format: int32 */
            imageDisplaySec?: number;
            contentType?: string;
            startDate?: string;
            /** Format: int32 */
            height?: number;
        };
        "3beaf6a3-94d9-4bdf-8627-738bc51c421c": {
            defaultLocale?: string;
            file?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            fallbacks?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
            kabId?: string;
        };
        "162ce0dd-5f26-4365-86b1-9f64b29eb0b8": components["schemas"]["ebaaba3a-e9d8-4667-93af-37e20a9f20fb"][];
        "8b39e333-b522-44fa-9721-27b82db9ff4f": components["schemas"]["497213af-c05f-497c-a13d-25e1351fb0aa"][];
        "46e5bf03-3631-4879-9ece-b85ada551947": {
            visible?: boolean;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.fuelgauge.FuelGaugeData) */
            data?: components["schemas"]["bf7b9173-74b6-46d6-ac67-24db49a7434b"];
        };
        "dd916644-cb37-4139-8988-9ad88f098a84": {
            stream?: string;
            /** Format: int32 */
            startLineNum?: number;
            /** Format: int64 */
            startTime?: number;
            /** Format: int32 */
            blockNum?: number;
            /** Format: int64 */
            endTime?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            lines?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
            nodeId?: string;
            /** Format: int32 */
            endLineNum?: number;
            /** Format: int32 */
            lineCount?: number;
        };
        "5816119f-ad42-4d9e-8c57-23416ded3043": {
            carrier?: boolean;
            duplex?: string;
            /** Format: int32 */
            speed?: number;
        };
        "a8cde2da-5a7d-4e72-b3f5-47b0c547bda0": string[];
        "d5a5f252-944a-4db3-b45d-53768c19e551": components["schemas"]["ad3a069d-de35-430f-958f-8b5b1e0628c8"][];
        "f6029e83-2f98-4ba3-bdca-f4f619c8302c": {
            valid?: boolean;
            value?: string;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "2865c4a1-5e66-4a52-a8f8-98fb775f5834": components["schemas"]["dd371b77-6f32-4972-ba2b-945256b14c96"][];
        "3049ef9b-a35e-4c31-ad72-4d621b3ed293": {
            path?: string;
            name?: string;
        };
        "83b9c76e-1fc4-4a78-ba4b-77dc35ecebbc": number[];
        "4e04aac1-ce1b-40d8-bfcd-26bee13770ee": {
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigSchema) */
            schema?: components["schemas"]["46979ebf-ef8b-4393-9874-e24da9384be9"];
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails$ScopeData>) */
            scopes?: components["schemas"]["162ce0dd-5f26-4365-86b1-9f64b29eb0b8"];
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigBean) */
            bean?: components["schemas"]["67add266-22ca-4c60-9065-1e4b532ab08c"];
        };
        "60efa16c-4375-4283-a9a8-92011e18f276": unknown;
        "88d1d33d-8e82-42a2-908e-fd170228c039": components["schemas"]["f94c4d2e-46dd-4e80-931f-3d2b2923be30"][];
        "4bcb1740-7c2b-4f53-a448-92f4f16b2596": {
            mfgAuthority?: string;
            /** @description (typeName=com.tccc.kos.commons.util.Mode) */
            mode?: components["schemas"]["ca0eaf0d-4395-4d26-8b71-96080540ff37"];
            identifier?: string;
            vendorAuthority?: string;
            /** @description (typeName=java.io.File) */
            file?: components["schemas"]["16dcd91a-4b4d-4a37-a79a-f1ad0edb92f0"];
            /** Format: int32 */
            size?: number;
            /** Format: int64 */
            createTime?: number;
            name?: string;
            tag?: string;
            type?: string;
            version?: string;
            /** Format: date-time */
            createDate?: string;
        };
        "53907d25-d17c-4322-b84d-4fdf6447f437": unknown;
        "24fe5e52-a73b-42a1-a2a0-46ebcb85553e": components["schemas"]["45594c61-b5cc-4bad-a9ab-24e409be9903"][];
        "0002a0a8-bb67-4346-a372-0bba240212a3": components["schemas"]["a771dd3f-f5db-43fd-a062-1caf3f6fe377"][];
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo) */
        "4b7eb9c0-706a-42ec-a623-c2a1bda89401": components["schemas"]["3beaf6a3-94d9-4bdf-8627-738bc51c421c"];
        "fed97f36-2f6f-43eb-b763-74225a8d0815": components["schemas"]["99e5ed5a-8a78-48dd-8477-fba4a9d9f155"][];
        "59053dc4-1fe6-428a-8191-c8acb83622e7": Record<string, never>;
        "7bf1c3c8-a5a6-4cfd-b5c5-324fe993dd8d": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["35a54bb0-e3fc-4828-a756-bd81ce685f78"];
            data?: Record<string, never>;
        };
        "e76a61ff-6490-42e6-9312-6dcc85b12bf6": components["schemas"]["ad3a069d-de35-430f-958f-8b5b1e0628c8"][];
        "f6dd6705-cefe-4804-929e-2edd49f22b37": {
            /** Format: int32 */
            rxPackets?: number;
            /** Format: int32 */
            txErrors?: number;
            /** Format: int64 */
            rxBytes?: number;
            /** Format: int64 */
            txBytes?: number;
            /** Format: int32 */
            txPackets?: number;
            /** Format: int32 */
            txDropped?: number;
            /** Format: int32 */
            rxErrors?: number;
            /** Format: int32 */
            rxDropped?: number;
            /** Format: int32 */
            rxOverErrors?: number;
        };
        "e5c05a39-625c-4f21-a94d-8847de075996": components["schemas"]["90cc8819-96ad-4ec9-abbe-a009b05028cf"][];
        "f82fd811-107e-40ce-be90-ba9af657c035": {
            pumpPath?: string;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            pumpCal?: components["schemas"]["40479d28-a2d3-4444-9623-7f42807137ea"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            storageCal?: components["schemas"]["40479d28-a2d3-4444-9623-7f42807137ea"];
        };
        "5b6a64b4-f15d-4c53-b22e-0c603f1d33bc": components["schemas"]["4e04aac1-ce1b-40d8-bfcd-26bee13770ee"][];
        "eaf5df74-2955-4a64-90eb-115fe6fe5c42": components["schemas"]["7005698e-1e0f-43f5-a957-2ffde0366619"][];
        "f85213f6-19c2-442d-951d-78d6544a652e": components["schemas"]["432f4ef5-9fb9-49c9-a558-de59d7531627"][];
        "be14df5e-bc83-4fdd-8e81-d97dc2ae57e6": string[];
        "e7248e5f-50d1-4a4e-9133-eb4c2abbbb51": unknown;
        "e73981e5-e58f-48d1-8465-19165fc3f041": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.core.service.udev.storage.StorageMountListener>) */
            listeners?: components["schemas"]["fed97f36-2f6f-43eb-b763-74225a8d0815"];
            removed?: boolean;
            vendor?: string;
            /** @description (typeName=java.io.File) */
            mountDir?: components["schemas"]["16dcd91a-4b4d-4a37-a79a-f1ad0edb92f0"];
            model?: string;
            label?: string;
            id?: string;
            /** Format: int64 */
            runTimeMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["ad3be887-8b61-4527-bec7-dc6618ff537f"];
            syspath?: string;
            /** @description (typeName=com.tccc.kos.core.service.udev.storage.StorageInfo) */
            storageInfo?: components["schemas"]["c838268a-1af8-4181-8769-aae29771fc4a"];
            local?: boolean;
        };
        "6e8f5e99-6c40-438d-830c-5a8fcae3c6e4": components["schemas"]["e5f1d384-5cf5-41e9-8153-dd139a5c364c"][];
        "8102cd22-5b2b-46c2-864b-33ff054d0b5e": components["schemas"]["7d1d8afd-1119-49f1-b2ce-786e121a072d"][];
        "e717daa7-73e1-40d6-8ae6-ee0c9eaed6f3": components["schemas"]["2d2252fa-0dae-42da-a412-5407de65f609"][];
        "6b15cb3a-840d-4840-803d-5be8523aef2e": {
            /** Format: double */
            position?: number;
            /** Format: double */
            group?: number;
        };
        "b8e498c6-bfd0-4bd0-9c12-0611c5b1b0be": components["schemas"]["7d1d8afd-1119-49f1-b2ce-786e121a072d"][];
        "5f49107e-2f86-433d-8220-c3453f51e50d": unknown;
        "1fb4e897-d2b0-4676-b141-0afb583864aa": {
            path?: string;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            locales?: components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
            basePath?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["059e4275-fecd-40af-8e9e-608fc7244377"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace>) */
            namespaces?: components["schemas"]["10cb8cd7-bc47-4266-ae2d-67a3e5e9640a"];
        };
        "fa3acf9c-34f8-4dd3-8159-a016b0dfdc7e": components["schemas"]["897486e6-4638-44c4-a5ab-48a97fbd2190"][];
        "432f4ef5-9fb9-49c9-a558-de59d7531627": {
            ampm?: boolean;
            format?: string;
            id?: string;
        };
        "14cd5395-fc97-46fa-af0b-6e6fae9334af": {
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.core.service.manifest.NodeSoftwareInfo>) */
            nodes?: components["schemas"]["d4b984b3-7805-49d3-bc34-9ced35a16560"];
        };
        "25a02feb-c36e-4f7a-9659-01c6de1a2f85": components["schemas"]["3973bfd8-b1e8-4650-a96a-724a9648c320"][];
        /** Format: float */
        "95a488d9-5507-4097-8088-55551de98e0a": number;
        "30564d42-affe-4824-a368-4473b8b93a3e": {
            redirect?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["d956df72-e508-4f23-974d-1c5b10fb82a2"];
            url?: string;
        };
        "76172dcc-794b-4b3e-a29a-2149b67549c5": {
            /** Format: int32 */
            id?: number;
            desc?: string;
        };
        "e72be939-2346-4df6-b425-3fe62429123f": {
            integralNumber?: boolean;
            double?: boolean;
            valueNode?: boolean;
            floatingPointNumber?: boolean;
            bigInteger?: boolean;
            float?: boolean;
            /** @description (typeName=com.fasterxml.jackson.databind.node.JsonNodeType) */
            nodeType?: components["schemas"]["f8dcd546-6ce4-4731-8006-e7d7f7b140c2"];
            int?: boolean;
            long?: boolean;
            textual?: boolean;
            empty?: boolean;
            missingNode?: boolean;
            pojo?: boolean;
            number?: boolean;
            boolean?: boolean;
            null?: boolean;
            array?: boolean;
            binary?: boolean;
            containerNode?: boolean;
            short?: boolean;
            bigDecimal?: boolean;
            object?: boolean;
        };
        "5ed64857-204b-426c-a0c7-8474739e1747": {
            kmfJson?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            layers?: components["schemas"]["b8e498c6-bfd0-4bd0-9c12-0611c5b1b0be"];
            kosVersion?: string;
            nodeType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestSection>) */
            sections?: components["schemas"]["88d1d33d-8e82-42a2-908e-fd170228c039"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["b8e498c6-bfd0-4bd0-9c12-0611c5b1b0be"];
        };
        "9b24a400-435d-463c-baae-8651755c323e": {
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            scopedChanges?: components["schemas"]["8b39e333-b522-44fa-9721-27b82db9ff4f"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            changes?: components["schemas"]["8b39e333-b522-44fa-9721-27b82db9ff4f"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$Error>) */
            errors?: components["schemas"]["18f1b9b8-c103-40b7-b80e-ab76c7184cc3"];
        };
        "21b51f63-50f9-4c3c-b39e-aed80392a9be": components["schemas"]["dd916644-cb37-4139-8988-9ad88f098a84"][];
        "7d1d8afd-1119-49f1-b2ce-786e121a072d": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            hash?: string;
        };
        "dd371b77-6f32-4972-ba2b-945256b14c96": {
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            values?: components["schemas"]["59053dc4-1fe6-428a-8191-c8acb83622e7"];
            scope?: string;
            replace?: boolean;
        };
        "b6862d7b-42d6-41a4-b17e-66acd772f3c3": string;
        "313f02ff-bdc1-42f0-a604-f92c0fdaaef5": {
            format?: string;
            id?: string;
            order?: string;
        };
        "da3e710e-fede-48f5-a0ac-55a757dd4ae0": {
            /** Format: int64 */
            lastChangedTimeMono?: number;
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            ingredientIds?: components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
            /** Format: date-time */
            creationDate?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["91e1b09b-32d6-4daa-bef6-a6541e5dc938"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["91e1b09b-32d6-4daa-bef6-a6541e5dc938"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            pumpPaths?: components["schemas"]["be14df5e-bc83-4fdd-8e81-d97dc2ae57e6"];
            removed?: boolean;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            locked?: boolean;
        };
        "a771dd3f-f5db-43fd-a062-1caf3f6fe377": {
            defaultHost?: string;
            lastUrl?: string;
            online?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            id?: components["schemas"]["ce934a8d-5f7a-4dc8-b433-3a0ea9c1ad99"];
        };
        "5fd336d8-6757-4c68-bbbf-aa509d045410": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            addressprefixlist?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
            address?: string;
            method?: string;
            /** Format: int32 */
            prefix?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            dnslist?: components["schemas"]["a8cde2da-5a7d-4e72-b3f5-47b0c547bda0"];
            gateway?: string;
        };
        "18cc2fb1-450c-4d8d-b70a-a720779b95c9": {
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.manifest.NodeManifest) */
            nodeManifest?: components["schemas"]["5ed64857-204b-426c-a0c7-8474739e1747"];
            /** @description (typeName=java.util.Set<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            layers?: components["schemas"]["fb73a4a3-0878-4250-8b24-4adf8bf984ae"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.manifest.ManifestArtifact>) */
            missingArtifacts?: components["schemas"]["8102cd22-5b2b-46c2-864b-33ff054d0b5e"];
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestSection>) */
            sections?: components["schemas"]["e6851d20-cd1a-4f18-933e-5f5dc98091d8"];
        };
        "bce1055e-705f-4613-84e3-dac1a6e76292": {
            deviceType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
            /** @description (typeName=com.tccc.kos.commons.manifest.device.ManifestDeviceInfo) */
            deviceInfo?: components["schemas"]["a8b2e330-a543-4636-a641-ef0fcd40b61b"];
        };
        "92ecb4fa-b673-413e-8bec-6ee39e7304ee": {
            val?: string;
            reason?: string;
            attr?: string;
        };
        "9cfb289a-8c41-4a2f-b23f-8669eeefe0e3": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume>) */
            volumes?: components["schemas"]["71744a6f-dcbf-401b-a4a8-35cfc4cd12b9"];
            error?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            labels?: components["schemas"]["da64a2cb-af94-473f-930f-8a3d598fa1ba"];
        };
        "497213af-c05f-497c-a13d-25e1351fb0aa": {
            scope?: string;
            attr?: string;
            previousValue?: string;
            currentValue?: string;
        };
        "4664e31d-17ff-49d8-9805-60cbbb987578": {
            reason?: string;
            note?: string;
            /** @description (typeName=com.tccc.kos.commons.util.ReasonData) */
            reasonData?: components["schemas"]["7bf1c3c8-a5a6-4cfd-b5c5-324fe993dd8d"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureWork) */
            rootFuture?: components["schemas"]["4664e31d-17ff-49d8-9805-60cbbb987578"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["dde3a133-acfd-4f97-8013-cc3b6f6c1e0b"];
            tracker?: string;
            /** Format: int64 */
            remainingTimeMs?: number;
            name?: string;
            /** Format: int32 */
            progress?: number;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            abortAbandonedTimeoutMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["059e4275-fecd-40af-8e9e-608fc7244377"];
        };
        "059e4275-fecd-40af-8e9e-608fc7244377": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["35a54bb0-e3fc-4828-a756-bd81ce685f78"];
            data?: Record<string, never>;
        };
        "113fdae8-a751-4ca2-96bc-67b64d960d1f": components["schemas"]["53907d25-d17c-4322-b84d-4fdf6447f437"][];
        "8352c7c7-bb7f-4009-a4d7-88a2720fa22b": {
            name?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            artifacts?: components["schemas"]["133312c7-9320-430b-bda8-8f9afcaeec6c"];
        };
        "ad3be887-8b61-4527-bec7-dc6618ff537f": {
            nodeName?: string;
            hostname?: string;
            id?: string;
            nodeType?: string;
        };
        "0f352e1b-4077-4eda-8e2a-fd6ab6b2266f": {
            downloaderActive?: boolean;
            kabId?: string;
            downloaderName?: string;
            lastErrorReason?: string;
            /** Format: int32 */
            fileNotFoundCount?: number;
            /** Format: int32 */
            errorCount?: number;
            /** Format: int32 */
            currentSize?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "1a4448ad-02b0-46c3-89b4-f0c11358d837": unknown;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
