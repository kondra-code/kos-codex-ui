export interface paths {
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
                        "application/json": components["schemas"]["9e33719c-031e-43a1-a69a-7baf5a3203d3"];
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
                    "application/json": components["schemas"]["61de0895-4f27-48e2-8996-ceb65cea0821"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["61de0895-4f27-48e2-8996-ceb65cea0821"];
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
                        "application/json": components["schemas"]["e370aa43-21b8-444e-8358-8170961129f4"];
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
                        "application/json": components["schemas"]["4237d7ce-ef70-48c3-8ed9-cc4b179aeb01"];
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
                        "application/json": components["schemas"]["b81a5e9f-2d27-40b4-87dd-e51570607720"];
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
                        "application/json": components["schemas"]["b81a5e9f-2d27-40b4-87dd-e51570607720"];
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
                        "application/json": components["schemas"]["c1c745f6-e8ca-4036-9621-89749a31f64a"];
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
                        "application/json": components["schemas"]["bea126d8-d571-4384-9246-d5f9db97efba"];
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
                        "application/json": components["schemas"]["e7f01b11-b357-4216-bbde-d1c6fca9b8fa"];
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
                        "application/json": components["schemas"]["4de0e452-32e3-4d2d-b714-249d09c44964"];
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
                        "application/json": components["schemas"]["fa9ba227-d260-49bb-9d0b-874ca8e9179b"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["a74f861b-9f2e-4525-9995-15f0fe6a7cb5"];
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
                        "application/json": components["schemas"]["1499d23f-6f32-4d18-8a3c-e16cda981767"];
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
                        "application/json": components["schemas"]["effc8f0d-6b00-4f69-88cc-65b6d7712896"];
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
                    "application/json": components["schemas"]["3b272d0f-2a32-48ef-a6da-c17f1a982f9f"];
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
                    "application/json": components["schemas"]["3b272d0f-2a32-48ef-a6da-c17f1a982f9f"];
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
                        "application/json": components["schemas"]["d02e9e6a-9888-44e6-b5d7-131a6a535f4f"];
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
                        "application/json": components["schemas"]["19ac2274-3e49-4ebd-8105-e810e7bff0cd"];
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
                        "application/json": components["schemas"]["5b7cad3c-6351-4445-8baf-cb64c7a39785"];
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
                    "application/json": components["schemas"]["8b56adfb-42d7-4f0b-8f70-c1f29f5c825b"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4b7ae760-e4ef-4e9f-b05c-26627c748555"];
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
                        "application/json": components["schemas"]["ac40fb62-e235-4b28-a214-95e2a0a4f215"];
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
                        "application/json": components["schemas"]["ac40fb62-e235-4b28-a214-95e2a0a4f215"];
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
                    "application/json": components["schemas"]["06bc6940-fc8c-4ed4-a85d-1925524ff7eb"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4b7ae760-e4ef-4e9f-b05c-26627c748555"];
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
                        "application/json": components["schemas"]["46835236-29d9-4c24-a68c-fac9c07ca526"];
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
                        "application/json": components["schemas"]["46835236-29d9-4c24-a68c-fac9c07ca526"];
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
                        "application/json": components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
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
                        "application/json": components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
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
                        "application/json": components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
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
                        "application/json": components["schemas"]["5d3ccc62-58ba-4b29-9da1-e1c06461983f"];
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
                        "application/json": components["schemas"]["5d3ccc62-58ba-4b29-9da1-e1c06461983f"];
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
                        "application/json": components["schemas"]["5d3ccc62-58ba-4b29-9da1-e1c06461983f"];
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
                        "application/json": components["schemas"]["4dfeab80-0964-4731-968a-e5e878c9de42"];
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
                        "application/json": components["schemas"]["175caf39-dc2e-4958-9b74-09f282ffc9cb"];
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
                        "application/json": components["schemas"]["175caf39-dc2e-4958-9b74-09f282ffc9cb"];
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
                        "application/json": components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
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
                        "application/json": components["schemas"]["3126d0ad-f73b-4ceb-b002-987dd5a0a1cc"];
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
                        "application/json": components["schemas"]["7bc232e2-c56f-4821-a637-6ea686f18560"];
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
                    "application/json": components["schemas"]["dcc2f41b-1a99-4360-ac19-aaa418ca46ff"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a1480f86-5e3a-4bb8-943d-3dfb18f9d551"];
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
                        "application/json": components["schemas"]["9b8c1484-6138-4465-9ef0-7289dd72ba34"];
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
    "/api/kos/troubles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all available troubles. (v1.0) */
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
                        "application/json": components["schemas"]["c913561c-30c3-43b0-b7ef-4d7abeffa03c"];
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
    "/api/kos/troubles/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve all the trouble id's listed in the request body. Troubles marked as
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
                    "application/json": components["schemas"]["7ce32f30-aaad-414f-bf79-9ee4fcc3cb80"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a1480f86-5e3a-4bb8-943d-3dfb18f9d551"];
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
    "/api/kos/troubles/resolve/{troubleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve the specified trouble. Troubles marked as resolvable can generally
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
                        "application/json": components["schemas"]["a1480f86-5e3a-4bb8-943d-3dfb18f9d551"];
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
    "/api/kos/troubles/{troubleId}": {
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
                        "application/json": components["schemas"]["5c22ab84-f686-4258-a2bb-35a0938834a0"];
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
                        "application/json": components["schemas"]["e22f6c1c-b930-445f-a201-a8aa40981964"];
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
                        "application/json": components["schemas"]["456ef3c0-fe32-409f-907a-065ebad2a396"];
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
                        "application/json": components["schemas"]["d06829c6-6480-45db-833f-13d81c637f28"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["6ead8e04-3f4f-4787-8412-9b438b7b19b9"];
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
                    "application/json": components["schemas"]["51e08250-98bd-4617-ab0e-e7bb3103ef52"];
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
                        "application/json": components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
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
                    "application/json": components["schemas"]["6fd9ac53-e97c-49d8-a942-5b5648fbe315"];
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
    "/api/ext/dispense/soldOuts/troubles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all existing SoldOutAware troubles. (v1.0) */
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
                        "application/json": components["schemas"]["8966c9e5-d6c9-43ba-833e-aebbdea63a85"];
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
                        "application/json": components["schemas"]["340bebfa-6dcc-4232-a0f7-1462a243ee14"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["21dc1e7e-bf8f-4e34-80f6-884e5212a787"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["effc8f0d-6b00-4f69-88cc-65b6d7712896"];
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
                        "application/json": components["schemas"]["effc8f0d-6b00-4f69-88cc-65b6d7712896"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["5d3ccc62-58ba-4b29-9da1-e1c06461983f"];
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
                        "application/json": components["schemas"]["f6d782be-f09f-4e73-91e0-ce8921d2b6c8"];
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
                        "application/json": components["schemas"]["5d3ccc62-58ba-4b29-9da1-e1c06461983f"];
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
                        "application/json": components["schemas"]["10caf2dc-2be7-4f83-81ba-d994fe785568"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["2609b6fc-9268-41a4-a13b-95fbef2d58f1"];
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
                        "application/json": components["schemas"]["1f562673-1c0a-4016-8941-4b313af36a60"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["bfdddf3e-7759-4dcf-ab43-3e9822756373"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["bfdddf3e-7759-4dcf-ab43-3e9822756373"];
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
                        "application/json": components["schemas"]["1d319bfb-6d48-4643-abcd-b3127c9cd948"];
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
                        "application/json": components["schemas"]["6dead225-a413-4d8a-8fbd-7b41550105fd"];
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
                        "application/json": components["schemas"]["010b31ec-e5c8-4395-aac9-7577cc093363"];
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
                        "application/json": components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
                        "application/json": components["schemas"]["a701c4f1-92ff-446e-b5f4-ccff5014b0ca"];
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
                        "application/json": components["schemas"]["5c3028ac-9586-4a5b-8378-67f4dd2d7c2c"];
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
                        "application/json": components["schemas"]["16b44b02-78ae-4ab5-ac77-c957abe47ba9"];
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
                    "application/json": components["schemas"]["c332eb7a-99ae-448e-89ea-47c6133e51fd"];
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
                    "application/json": components["schemas"]["c332eb7a-99ae-448e-89ea-47c6133e51fd"];
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
                    "application/json": components["schemas"]["0de416e5-5989-49fb-ac45-f6e3ffe8fad2"];
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
                    "application/json": components["schemas"]["89b5f581-452e-4651-a757-d08ee66368df"];
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
                        "application/json": components["schemas"]["53732eb1-6424-4fbd-92b7-d7223968ae0e"];
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
                        "application/json": components["schemas"]["21db50a5-1b71-4b0c-8145-cc4a5f92bbb3"];
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
                    "application/json": components["schemas"]["21db50a5-1b71-4b0c-8145-cc4a5f92bbb3"];
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
                        "application/json": components["schemas"]["21db50a5-1b71-4b0c-8145-cc4a5f92bbb3"];
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
                    "application/json": components["schemas"]["21db50a5-1b71-4b0c-8145-cc4a5f92bbb3"];
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
                        "application/json": components["schemas"]["9be8683f-eb5c-42c6-b969-a19fac703142"];
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
                        "application/json": components["schemas"]["148ed800-89fb-47c4-8e52-c60407b2007b"];
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
                        "application/json": components["schemas"]["8275b0de-0ba6-4da1-865e-3a2108778a57"];
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
                        "application/json": components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
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
    "/api/system/codex/objects": {
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
                        "application/json": components["schemas"]["a95b8566-5242-46b3-9028-35100e97d9d6"];
                    };
                };
            };
        };
        put?: never;
        /** Add an item to the list (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["9123c893-c165-4f25-bc36-544e6348c9a2"];
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
    "/api/system/codex/objects/additional-data/{numOfItems}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Return the Future Work of Additional Data (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    numOfItems: number;
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
                        "application/json": components["schemas"]["a1480f86-5e3a-4bb8-943d-3dfb18f9d551"];
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
    "/api/system/codex/objects/{id}": {
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
                path: {
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
                    volumes?: components["schemas"]["42622045-f207-4762-9fb8-ce7e7c9bf215"];
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
                        "application/json": components["schemas"]["a6e821f4-523a-49ae-b916-307e1c604f3f"];
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
                        "application/json": components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
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
                    "application/json": components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "3cddc6a3-eb35-43fc-ad49-00660b6cd6af": {
            scope?: string;
            attr?: string;
            previousValue?: string;
            currentValue?: string;
        };
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "288e6ae0-adf9-4c2a-84f0-17f37f4ae09e": components["schemas"]["442068e6-e34a-4e7b-aede-6d6f3b2ed59d"];
        "ecf22302-2503-4aed-9fa5-843687018eea": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.core.service.udev.storage.StorageMountListener>) */
            listeners?: components["schemas"]["df055a54-3776-480a-95a6-5436241a47a7"];
            removed?: boolean;
            vendor?: string;
            /** @description (typeName=java.io.File) */
            mountDir?: components["schemas"]["a70ed2cd-d1d6-417c-bf2a-0efe344acc99"];
            model?: string;
            label?: string;
            id?: string;
            /** Format: int64 */
            runTimeMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["b2a542fc-3ebf-4132-ba44-2b8c8acf693c"];
            syspath?: string;
            /** @description (typeName=com.tccc.kos.core.service.udev.storage.StorageInfo) */
            storageInfo?: components["schemas"]["feba0d6d-c271-455d-ba2b-93e040e8ab22"];
            local?: boolean;
        };
        "13a65783-aeca-45b7-bceb-940222b07fb3": unknown;
        "4ac11d29-aee5-4d5b-b42b-6309f8b41c03": {
            /** @description (typeName=java.lang.Object[]) */
            values?: components["schemas"]["de2a26d4-b51c-4d5a-ab25-40de78f63cd9"];
            /** @description (typeName=java.lang.Class<? extends com.tccc.kos.commons.core.service.config.options.ConfigOptions>) */
            optionsClass?: components["schemas"]["b57c0bf2-20e9-46a6-9ece-a4bcf7c2c222"];
            format?: string;
            /** @description (typeName=com.tccc.kos.commons.core.service.config.options.ConfigOptions) */
            options?: components["schemas"]["e61a451a-86cf-4202-bb52-fa87cc5cde5d"];
            type?: string;
            desc?: string;
        };
        "21dc1e7e-bf8f-4e34-80f6-884e5212a787": {
            path?: string;
            name?: string;
        };
        "d02e9e6a-9888-44e6-b5d7-131a6a535f4f": components["schemas"]["19ac2274-3e49-4ebd-8105-e810e7bff0cd"][];
        "0e7e2a2c-20ab-4e00-85e9-fc53c58c2853": {
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
        "2609b6fc-9268-41a4-a13b-95fbef2d58f1": components["schemas"]["b3a9e47b-b1f8-4116-9894-295b15fdf36e"][];
        "2c8b7c13-9c2b-4793-bbe9-9565addf3a1c": unknown;
        "0de416e5-5989-49fb-ac45-f6e3ffe8fad2": {
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["6d138f12-f37e-4b53-abdb-c2ccf2164a8a"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            properties?: components["schemas"]["8b56adfb-42d7-4f0b-8f70-c1f29f5c825b"];
        };
        "456ef3c0-fe32-409f-907a-065ebad2a396": components["schemas"]["14993297-fa07-4fb3-ac62-56f39f60b9d8"][];
        "6dead225-a413-4d8a-8fbd-7b41550105fd": {
            /** Format: int64 */
            insertTime?: number;
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.rfid.freestyle.FreestyleRfidTag) */
            rfidTag?: components["schemas"]["ac0059b2-a2ea-4c5a-a593-52d5506fc65b"];
            id?: string;
            /** @description (typeName=java.lang.String[]) */
            ingredientIds?: components["schemas"]["13a65783-aeca-45b7-bceb-940222b07fb3"];
            locked?: boolean;
            intrinsic?: boolean;
            soldOut?: boolean;
            /** Format: date-time */
            piercedDate?: string;
            mark?: string;
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace) */
        "4fbca23b-e8dd-429b-a5b5-c0d28fe4957f": components["schemas"]["4f86614d-45ca-48c5-9575-10f28b5b49a0"];
        "419b048a-a15a-408f-ae55-dde5f0a0889b": components["schemas"]["a5049d3f-f6ca-411f-b3c6-821f4739058e"][];
        "9e33719c-031e-43a1-a69a-7baf5a3203d3": components["schemas"]["61de0895-4f27-48e2-8996-ceb65cea0821"][];
        "cfd5cb9b-df47-41b1-aff6-8bf5bca247ee": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            hash?: string;
        };
        "3fc5fd41-7c2d-47d1-ac1b-088b0fb059cc": {
            kmfJson?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            layers?: components["schemas"]["e1b3aa87-66a9-4add-b948-bf9688df3c15"];
            kosVersion?: string;
            nodeType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestSection>) */
            sections?: components["schemas"]["b8abfde0-fb0a-4efd-9124-0c4278178eb6"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["e1b3aa87-66a9-4add-b948-bf9688df3c15"];
        };
        "0c418aed-b2d1-4b5f-bfce-5f7fad12dbd1": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            name?: string;
            version?: string;
            hash?: string;
        };
        "ac0059b2-a2ea-4c5a-a593-52d5506fc65b": {
            /** Format: int32 */
            tagVersion?: number;
            /** Format: double */
            fuelGauge?: number;
            /** Format: int32 */
            width?: number;
            /** Format: int64 */
            id?: number;
            /** Format: int32 */
            plantCode?: number;
            uin?: string;
            /** Format: date-time */
            piercedDate?: string;
            enjoyByDateStr?: string;
            /** Format: int32 */
            cartridgeNum?: number;
        };
        "51e08250-98bd-4617-ab0e-e7bb3103ef52": {
            /** Format: int32 */
            month?: number;
            /** Format: int32 */
            year?: number;
            /** Format: int32 */
            day?: number;
        };
        "5bbf7f91-93ec-409a-8b0c-3cccfce4219d": {
            format?: string;
            id?: string;
            order?: string;
        };
        "6323e4bb-9a81-4ca6-b148-318b87644353": components["schemas"]["f70bc957-e470-432f-9356-d5f39d0de890"][];
        "cd535e99-2f29-4bb5-ad79-ea7671f036f2": {
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
        "cf804919-42f4-475a-81eb-1a46a14e3d35": unknown;
        "a544be6d-21e1-445a-a71c-09d9337cab6f": {
            name?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            artifacts?: components["schemas"]["c06be153-fdcf-471a-abc5-ecf8ef1539d2"];
        };
        /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
        "aa2ae7fc-bfe7-413c-b16f-8815da06c9e6": components["schemas"]["4a408a56-5bae-4f97-82b2-5c520b35f763"];
        "4b7ae760-e4ef-4e9f-b05c-26627c748555": {
            tracker?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.BeanChanges>) */
            beanChanges?: components["schemas"]["e4e14f7f-64b4-4c9b-b36d-373eb7a754b2"];
        };
        "4d62ba80-ae17-4520-9ea9-c68d63f9967a": {
            /** Format: double */
            running?: number;
            noStorage?: boolean;
            /** Format: double */
            baseline?: number;
            calibrated?: boolean;
        };
        "e61a451a-86cf-4202-bb52-fa87cc5cde5d": {
            type?: string;
        };
        "69022c98-b16d-498d-af35-ba6bb48173d2": {
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
        "471538f6-23cc-4afd-b551-7e910d9ffcc5": {
            color?: string;
            /** Format: int32 */
            rank?: number;
            actionRole?: string;
            visibleRole?: string;
        };
        "b6ac1c50-b7f5-49e6-9a6d-a3d9fb2dbaf7": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["29537709-71c2-45a6-9a66-9c343d7d5556"];
            data?: Record<string, never>;
        };
        "1d319bfb-6d48-4643-abcd-b3127c9cd948": components["schemas"]["6dead225-a413-4d8a-8fbd-7b41550105fd"][];
        "29537709-71c2-45a6-9a66-9c343d7d5556": unknown;
        "4f86614d-45ca-48c5-9575-10f28b5b49a0": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo>) */
            locales?: components["schemas"]["ee291a8c-cc50-4b6c-9f54-3e43eb89f039"];
        };
        "c332eb7a-99ae-448e-89ea-47c6133e51fd": {
            redirect?: boolean;
            url?: string;
        };
        "8d1c31f4-65cf-4784-84f4-7f8ac3903a41": {
            /** Format: int32 */
            slicePos?: number;
            /** Format: int64 */
            createTime?: number;
            containerId?: string;
            /** Format: int32 */
            soldOutCount?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "0034b7cd-f667-40a0-8121-d6aecef2d72d": string[];
        "a701c4f1-92ff-446e-b5f4-ccff5014b0ca": components["schemas"]["ecf22302-2503-4aed-9fa5-843687018eea"][];
        "a6e821f4-523a-49ae-b916-307e1c604f3f": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume>) */
            volumes?: components["schemas"]["003683e3-222c-4682-8e8c-5303e3c4d784"];
            error?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            labels?: components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
        };
        "47eb430b-84a1-4849-993d-dd146e8ab77d": {
            /** @description (typeName=com.tccc.kos.commons.manifest.ManifestArtifact) */
            artifact?: components["schemas"]["cfd5cb9b-df47-41b1-aff6-8bf5bca247ee"];
            identifier?: string;
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["694d0445-bdd6-4d8b-8a0b-056982cab77a"];
        };
        "effc8f0d-6b00-4f69-88cc-65b6d7712896": components["schemas"]["3b272d0f-2a32-48ef-a6da-c17f1a982f9f"][];
        "38f032c0-cf40-429f-811a-4de4eb7039bf": string[];
        "28190df0-4418-4a12-9d32-71e2b50d17bf": string[];
        "9be8683f-eb5c-42c6-b969-a19fac703142": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibrationReport$PumpReport>) */
            pumps?: components["schemas"]["c104fe89-bb81-4c15-ae53-b241dc9978ba"];
            boardPath?: string;
        };
        /** @description (typeName=com.tccc.kos.commons.core.service.config.BeanChanges) */
        "e4e14f7f-64b4-4c9b-b36d-373eb7a754b2": components["schemas"]["93f0bcbe-18fc-47de-928f-d4433c549499"];
        "8c6949e6-24ed-4792-a494-6b582a24e6e5": {
            /** Format: double */
            initGauge?: number;
            /** Format: int32 */
            slicePos?: number;
            /** Format: int64 */
            createTime?: number;
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
        "694d0445-bdd6-4d8b-8a0b-056982cab77a": {
            mfgAuthority?: string;
            /** @description (typeName=com.tccc.kos.commons.util.Mode) */
            mode?: components["schemas"]["9821e05f-ca55-4d0b-a446-25de253be668"];
            identifier?: string;
            vendorAuthority?: string;
            /** @description (typeName=java.io.File) */
            file?: components["schemas"]["a70ed2cd-d1d6-417c-bf2a-0efe344acc99"];
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
        "4237d7ce-ef70-48c3-8ed9-cc4b179aeb01": {
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.date.DateFormat>) */
            dateFormats?: components["schemas"]["d8983f4e-eebd-47a9-8d2b-ebc0eb68a30d"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.units.UnitSystem>) */
            unitSystems?: components["schemas"]["6323e4bb-9a81-4ca6-b148-318b87644353"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.time.TimeFormat>) */
            timeFormats?: components["schemas"]["314d69c9-57fd-4286-8dfe-5e434697feb9"];
        };
        "c7822a5c-023f-48bf-946c-578fcb3f5a9a": components["schemas"]["a544be6d-21e1-445a-a71c-09d9337cab6f"][];
        "bfdddf3e-7759-4dcf-ab43-3e9822756373": {
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
            byIngredients?: components["schemas"]["be1d796f-c56b-444a-899a-8ad1ec89b9fd"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["be1d796f-c56b-444a-899a-8ad1ec89b9fd"];
        };
        "25f6175d-4e92-48af-bb12-98dae6c67f7b": {
            empty?: boolean;
        };
        "b8abfde0-fb0a-4efd-9124-0c4278178eb6": components["schemas"]["70215390-23e2-440d-a665-9e35b0a30725"][];
        "a06dbe11-a85e-4274-a19b-487c13446505": {
            /** Format: double */
            position?: number;
            /** Format: double */
            group?: number;
        };
        "42622045-f207-4762-9fb8-ce7e7c9bf215": components["schemas"]["5816b275-4c70-4e7d-857c-940631facdad"][];
        "b81a5e9f-2d27-40b4-87dd-e51570607720": {
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$LinkStats) */
            linkStats?: components["schemas"]["69022c98-b16d-498d-af35-ba6bb48173d2"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$DeviceStats) */
            deviceStats?: components["schemas"]["cd535e99-2f29-4bb5-ad79-ea7671f036f2"];
            /** Format: int32 */
            state?: number;
            /** Format: int32 */
            txError?: number;
            /** Format: int32 */
            rxError?: number;
        };
        "ec1b35f2-489e-4b0f-93ef-e2fd071da3e9": components["schemas"]["895bd466-7e3f-49c5-a3c6-b89bd0380066"][];
        /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics>) */
        "1f562673-1c0a-4016-8941-4b313af36a60": components["schemas"]["57967f9d-5269-4b18-b675-1e2ca1277405"];
        "76346f5c-b579-4a64-896e-0543184dcc3a": {
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.device.ManifestNodeInfo>) */
            nodes?: components["schemas"]["e02a75df-4de8-41e3-9841-57c61646a6a6"];
            /** @description (typeName=java.util.Set<java.lang.String>) */
            nodeTypes?: components["schemas"]["28190df0-4418-4a12-9d32-71e2b50d17bf"];
        };
        "d584c20d-79dd-4be0-a437-d48ae15bab6c": components["schemas"]["854ab308-7123-43b8-a1be-39d08d8a5f7c"][];
        "d74ed601-956a-4df1-83bd-b0a60fac4770": {
            sourceId?: string;
            name?: string;
            id?: string;
            type?: string;
        };
        "7997b9ca-bc10-41e9-a65b-a19f988d72ee": {
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigSchema) */
            schema?: components["schemas"]["19ac2274-3e49-4ebd-8105-e810e7bff0cd"];
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails$ScopeData>) */
            scopes?: components["schemas"]["419b048a-a15a-408f-ae55-dde5f0a0889b"];
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigBean) */
            bean?: components["schemas"]["5b7cad3c-6351-4445-8baf-cb64c7a39785"];
        };
        "010b31ec-e5c8-4395-aac9-7577cc093363": components["schemas"]["a06dbe11-a85e-4274-a19b-487c13446505"][];
        "1d2c1318-6c8d-4f2f-b5c0-07e97a2aad31": components["schemas"]["9372b683-eb0f-4749-8183-fee5c50fe37e"][];
        "61de0895-4f27-48e2-8996-ceb65cea0821": {
            ingredientId?: string;
            holderPath?: string;
            /** Format: int64 */
            createTime?: number;
            factoryJson?: string;
            containerId?: string;
            error?: string;
        };
        "21db50a5-1b71-4b0c-8145-cc4a5f92bbb3": {
            integralNumber?: boolean;
            double?: boolean;
            valueNode?: boolean;
            floatingPointNumber?: boolean;
            bigInteger?: boolean;
            float?: boolean;
            /** @description (typeName=com.fasterxml.jackson.databind.node.JsonNodeType) */
            nodeType?: components["schemas"]["2c8b7c13-9c2b-4793-bbe9-9565addf3a1c"];
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
        "c3bf2d97-9885-4dce-a3cd-d5eabcae0d36": unknown;
        "d8983f4e-eebd-47a9-8d2b-ebc0eb68a30d": components["schemas"]["5bbf7f91-93ec-409a-8b0c-3cccfce4219d"][];
        "df459e95-8b61-4431-896d-ae8f0edb5e22": {
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
        "7ce32f30-aaad-414f-bf79-9ee4fcc3cb80": number[];
        "feba0d6d-c271-455d-ba2b-93e040e8ab22": {
            /** Format: int64 */
            totalBytes?: number;
            /** Format: int64 */
            freeBytes?: number;
        };
        "3b272d0f-2a32-48ef-a6da-c17f1a982f9f": {
            level?: string;
            name?: string;
            type?: string;
            nodeType?: string;
        };
        "148ed800-89fb-47c4-8e52-c60407b2007b": {
            pumpPath?: string;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            pumpCal?: components["schemas"]["4d62ba80-ae17-4520-9ea9-c68d63f9967a"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            storageCal?: components["schemas"]["4d62ba80-ae17-4520-9ea9-c68d63f9967a"];
        };
        "f70bc957-e470-432f-9356-d5f39d0de890": {
            id?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.util.units.Unit>) */
            units?: components["schemas"]["fe8c8400-582d-4f4c-b298-46eea0360e41"];
        };
        "c573ce7e-99c2-4bbe-b667-d1205879d219": {
            cancel?: boolean;
            fail?: boolean;
            abort?: boolean;
            success?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureEvent) */
            futureEvent?: components["schemas"]["c3bf2d97-9885-4dce-a3cd-d5eabcae0d36"];
            terminate?: boolean;
            done?: boolean;
        };
        "28861703-1a3a-4381-b7df-9e10c7149c9d": components["schemas"]["09ea553d-f395-4e05-bad0-0766eb63accb"][];
        "de2a26d4-b51c-4d5a-ab25-40de78f63cd9": unknown;
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "be1d796f-c56b-444a-899a-8ad1ec89b9fd": components["schemas"]["cf804919-42f4-475a-81eb-1a46a14e3d35"];
        "ea6dc370-5566-468c-b99f-0c76f39cbacf": components["schemas"]["df459e95-8b61-4431-896d-ae8f0edb5e22"][];
        "f173cd93-0db4-4f36-ab9a-1a6ce5d4637b": {
            /** @description (typeName=byte[]) */
            criticalData?: components["schemas"]["d650edb9-dc08-4295-835f-586b029815dc"];
            /** Format: double */
            sourceWeight?: number;
            /** Format: int32 */
            sourceMaxLength?: number;
            criticalDataReady?: boolean;
        };
        "a95b8566-5242-46b3-9028-35100e97d9d6": components["schemas"]["9123c893-c165-4f25-bc36-544e6348c9a2"][];
        "cd3a65ee-c02a-42df-b157-6a7b7106ef39": {
            /** Format: double */
            volume?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume$RoundedValue>) */
            values?: components["schemas"]["28861703-1a3a-4381-b7df-9e10c7149c9d"];
        };
        "fe8c8400-582d-4f4c-b298-46eea0360e41": components["schemas"]["0e7e2a2c-20ab-4e00-85e9-fc53c58c2853"][];
        "442068e6-e34a-4e7b-aede-6d6f3b2ed59d": {
            /** Format: double */
            volume?: number;
        };
        "d2e5b8fa-90e6-4ca8-8940-6b6fc33ed481": unknown;
        "b57c0bf2-20e9-46a6-9ece-a4bcf7c2c222": unknown;
        "5a443710-5723-44ab-98db-b5566a1b9106": {
            deviceType?: string;
            nextManifestId?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installArtifacts?: components["schemas"]["4a408a56-5bae-4f97-82b2-5c520b35f763"];
            name?: string;
            manifestType?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installLayers?: components["schemas"]["4a408a56-5bae-4f97-82b2-5c520b35f763"];
            /** Format: int32 */
            version?: number;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
            /** @description (typeName=java.util.Map<java.lang.String, java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>>) */
            sections?: components["schemas"]["aa2ae7fc-bfe7-413c-b16f-8815da06c9e6"];
        };
        "c1c745f6-e8ca-4036-9621-89749a31f64a": {
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.manifest.NodeManifest) */
            nodeManifest?: components["schemas"]["3fc5fd41-7c2d-47d1-ac1b-088b0fb059cc"];
            /** @description (typeName=java.util.Set<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            layers?: components["schemas"]["c50e1cd7-df6d-4074-be4d-bcd49a3f8d80"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.manifest.ManifestArtifact>) */
            missingArtifacts?: components["schemas"]["9a13f8f8-8b56-4f1d-8693-27dd7a82aacf"];
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestSection>) */
            sections?: components["schemas"]["c7822a5c-023f-48bf-946c-578fcb3f5a9a"];
        };
        "b3a9e47b-b1f8-4116-9894-295b15fdf36e": {
            /** @description (typeName=com.tccc.kos.commons.manifest.BaseManifestArtifact) */
            artifactInfo?: components["schemas"]["0c418aed-b2d1-4b5f-bfce-5f7fad12dbd1"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.core.primary.service.ota.OTADownloadRequest>) */
            requests?: components["schemas"]["ea6dc370-5566-468c-b99f-0c76f39cbacf"];
            error?: string;
            done?: boolean;
            /** @description (typeName=com.tccc.kos.core.primary.service.ota.OTAArtifact$Status) */
            status?: components["schemas"]["b7293629-eea9-468b-aecf-6a7608d2cd2d"];
        };
        "b8c1f8de-93bd-4371-89cd-ee11212bba91": {
            defaultHost?: string;
            lastUrl?: string;
            online?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            id?: components["schemas"]["81f5c678-d251-41bb-9636-75e618d483d4"];
        };
        "3e0b6fdf-d670-4078-8646-49deb966d15d": {
            vfsPath?: string;
            endDate?: string;
            /** Format: int32 */
            videoLoops?: number;
            name?: string;
            /** Format: int32 */
            width?: number;
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
        "a9f7c003-e077-475b-ac7f-0d46a66ef07d": {
            /** Format: int64 */
            lastChangedTimeMono?: number;
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            ingredientIds?: components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
            /** Format: date-time */
            creationDate?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["288e6ae0-adf9-4c2a-84f0-17f37f4ae09e"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["288e6ae0-adf9-4c2a-84f0-17f37f4ae09e"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            pumpPaths?: components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
            removed?: boolean;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            locked?: boolean;
        };
        "5d3ccc62-58ba-4b29-9da1-e1c06461983f": unknown;
        "73049cf5-2c7b-4861-bfb9-6593510737fa": {
            val?: string;
            reason?: string;
            attr?: string;
        };
        "130325e2-99b4-4d06-8f78-b85c55d73aa4": components["schemas"]["3e0b6fdf-d670-4078-8646-49deb966d15d"][];
        "9372b683-eb0f-4749-8183-fee5c50fe37e": unknown;
        "9123c893-c165-4f25-bc36-544e6348c9a2": {
            /** Format: int32 */
            id?: number;
            desc?: string;
        };
        "6d138f12-f37e-4b53-abdb-c2ccf2164a8a": {
            browserName?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["b2a542fc-3ebf-4132-ba44-2b8c8acf693c"];
        };
        "46835236-29d9-4c24-a68c-fac9c07ca526": {
            valid?: boolean;
            value?: string;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "70bfd5e1-0937-496c-81a5-d536a1fc824f": {
            /** @description (typeName=java.util.List<com.tccc.kos.core.primary.service.update.UpdateInfo$Note>) */
            notes?: components["schemas"]["d584c20d-79dd-4be0-a437-d48ae15bab6c"];
            blocked?: boolean;
            /** Format: int64 */
            createTime?: number;
            active?: boolean;
            manifestId?: string;
            deviceId?: string;
        };
        "d650edb9-dc08-4295-835f-586b029815dc": unknown;
        "06bc6940-fc8c-4ed4-a85d-1925524ff7eb": components["schemas"]["5ab722c0-909d-406f-9211-4b2fa1fa0694"][];
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo) */
        "ee291a8c-cc50-4b6c-9f54-3e43eb89f039": components["schemas"]["c1b93029-e916-47f9-810f-84b907850769"];
        /** @description (typeName=com.tccc.kos.ext.cms.service.screen.ScreenContext) */
        "fa9ba227-d260-49bb-9d0b-874ca8e9179b": components["schemas"]["4de0e452-32e3-4d2d-b714-249d09c44964"];
        "4434158c-d40a-40c6-8a97-e432e7d5ac00": {
            country?: string;
            timeFormatId?: string;
            hidden?: boolean;
            unitSystemId?: string;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            timeZones?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
            dateFormatId?: string;
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext) */
        "7bc232e2-c56f-4821-a637-6ea686f18560": components["schemas"]["3126d0ad-f73b-4ceb-b002-987dd5a0a1cc"];
        "9cd97ec6-72a6-4fba-8425-b3bebb4ecc99": {
            ampm?: boolean;
            format?: string;
            id?: string;
        };
        "89d270f3-7622-464c-8c99-1dfb2120773c": {
            carrier?: boolean;
            duplex?: string;
            /** Format: int32 */
            speed?: number;
        };
        "895bd466-7e3f-49c5-a3c6-b89bd0380066": {
            /** Format: int64 */
            runStartTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.commons.util.concurrent.future.trace.FutureTrace>) */
            children?: components["schemas"]["ec1b35f2-489e-4b0f-93ef-e2fd071da3e9"];
            /** Format: int64 */
            createTime?: number;
            /** Format: int64 */
            runEndTime?: number;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["c573ce7e-99c2-4bbe-b667-d1205879d219"];
            name?: string;
            /** Format: int32 */
            id?: number;
            /** Format: int64 */
            endTime?: number;
            /** Format: int32 */
            parentId?: number;
        };
        "8966c9e5-d6c9-43ba-833e-aebbdea63a85": components["schemas"]["5c22ab84-f686-4258-a2bb-35a0938834a0"][];
        "53732eb1-6424-4fbd-92b7-d7223968ae0e": components["schemas"]["f173cd93-0db4-4f36-ab9a-1a6ce5d4637b"][];
        "3126d0ad-f73b-4ceb-b002-987dd5a0a1cc": {
            path?: string;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            locales?: components["schemas"]["0034b7cd-f667-40a0-8121-d6aecef2d72d"];
            basePath?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["b6ac1c50-b7f5-49e6-9a6d-a3d9fb2dbaf7"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace>) */
            namespaces?: components["schemas"]["4fbca23b-e8dd-429b-a5b5-c0d28fe4957f"];
        };
        "9b8c1484-6138-4465-9ef0-7289dd72ba34": components["schemas"]["70bfd5e1-0937-496c-81a5-d536a1fc824f"][];
        "e02a75df-4de8-41e3-9841-57c61646a6a6": components["schemas"]["43d49be8-f9f8-4548-ac17-f26e1956570c"][];
        "2d6bdbb7-e1bd-45a4-903e-51c248c3d565": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            addressprefixlist?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
            address?: string;
            method?: string;
            /** Format: int32 */
            prefix?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            dnslist?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
            gateway?: string;
        };
        "5c3028ac-9586-4a5b-8378-67f4dd2d7c2c": components["schemas"]["82737546-68e5-4212-8538-d18c312d731f"][];
        "c06be153-fdcf-471a-abc5-ecf8ef1539d2": components["schemas"]["47eb430b-84a1-4849-993d-dd146e8ab77d"][];
        "5b7cad3c-6351-4445-8baf-cb64c7a39785": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.commons.core.service.config.ConfigBeanListener>) */
            listeners?: components["schemas"]["1d2c1318-6c8d-4f2f-b5c0-07e97a2aad31"];
        };
        "d7672c5c-1576-4fb0-b900-316f6fcc9ba0": {
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
        "19ac2274-3e49-4ebd-8105-e810e7bff0cd": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema>) */
            schema?: components["schemas"]["684983a0-2704-4836-b941-26b742cb6630"];
            /** @description (typeName=java.util.List<java.lang.String>) */
            paths?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
        };
        "8b56adfb-42d7-4f0b-8f70-c1f29f5c825b": Record<string, never>;
        "e22f6c1c-b930-445f-a201-a8aa40981964": components["schemas"]["895bd466-7e3f-49c5-a3c6-b89bd0380066"][];
        "82737546-68e5-4212-8538-d18c312d731f": {
            configured?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.EthernetDetails) */
            ethernet?: components["schemas"]["89d270f3-7622-464c-8c99-1dfb2120773c"];
            /** @description (typeName=com.tccc.kos.core.service.network.beans.WifiDetails) */
            wifi?: components["schemas"]["d7672c5c-1576-4fb0-b900-316f6fcc9ba0"];
            hwaddress?: string;
            name?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.Ip4Settings) */
            ip4settings?: components["schemas"]["2d6bdbb7-e1bd-45a4-903e-51c248c3d565"];
            type?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.NetworkInterfaceCategory) */
            category?: components["schemas"]["d2e5b8fa-90e6-4ca8-8940-6b6fc33ed481"];
            /** Format: int32 */
            nmdevicestate?: number;
            /** Format: int32 */
            mtu?: number;
        };
        "c1b93029-e916-47f9-810f-84b907850769": {
            defaultLocale?: string;
            file?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            fallbacks?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
            kabId?: string;
        };
        "df055a54-3776-480a-95a6-5436241a47a7": components["schemas"]["3a66fd16-d6e3-4684-8154-a77d61f6ddcf"][];
        "ac40fb62-e235-4b28-a214-95e2a0a4f215": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            scopeNames?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails>) */
            details?: components["schemas"]["fe2f3beb-8034-4aeb-8a3f-91ab78945416"];
        };
        "14993297-fa07-4fb3-ac62-56f39f60b9d8": {
            ex?: string;
            /** Format: date-time */
            time?: string;
            type?: string;
            /** Format: int32 */
            idx?: number;
        };
        "4a0695ea-142c-4955-8b52-a016df0c8cd0": string[];
        /** Format: float */
        "4dfeab80-0964-4731-968a-e5e878c9de42": number;
        "314d69c9-57fd-4286-8dfe-5e434697feb9": components["schemas"]["9cd97ec6-72a6-4fba-8425-b3bebb4ecc99"][];
        "1499d23f-6f32-4d18-8a3c-e16cda981767": {
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
            lines?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
            nodeId?: string;
            /** Format: int32 */
            endLineNum?: number;
            /** Format: int32 */
            lineCount?: number;
        };
        "b2a542fc-3ebf-4132-ba44-2b8c8acf693c": {
            nodeName?: string;
            hostname?: string;
            id?: string;
            nodeType?: string;
        };
        "16b44b02-78ae-4ab5-ac77-c957abe47ba9": components["schemas"]["b8c1f8de-93bd-4371-89cd-ee11212bba91"][];
        "93f0bcbe-18fc-47de-928f-d4433c549499": {
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            scopedChanges?: components["schemas"]["d115a0a3-faab-4b10-b0b9-f3d04a87ed1c"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            changes?: components["schemas"]["d115a0a3-faab-4b10-b0b9-f3d04a87ed1c"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$Error>) */
            errors?: components["schemas"]["eb4ed43a-d9f9-4041-9518-33fa8a5f3d38"];
        };
        "5ab722c0-909d-406f-9211-4b2fa1fa0694": {
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            values?: components["schemas"]["8b56adfb-42d7-4f0b-8f70-c1f29f5c825b"];
            scope?: string;
            replace?: boolean;
        };
        "9821e05f-ca55-4d0b-a446-25de253be668": unknown;
        "a5049d3f-f6ca-411f-b3c6-821f4739058e": {
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
            scope?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            overrides?: components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
        };
        "d06829c6-6480-45db-833f-13d81c637f28": {
            visible?: boolean;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.fuelgauge.FuelGaugeData) */
            data?: components["schemas"]["8c6949e6-24ed-4792-a494-6b582a24e6e5"];
        };
        "b7293629-eea9-468b-aecf-6a7608d2cd2d": unknown;
        "854ab308-7123-43b8-a1be-39d08d8a5f7c": {
            summary?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            details?: components["schemas"]["38f032c0-cf40-429f-811a-4de4eb7039bf"];
        };
        "4a408a56-5bae-4f97-82b2-5c520b35f763": components["schemas"]["0c418aed-b2d1-4b5f-bfce-5f7fad12dbd1"][];
        "5816b275-4c70-4e7d-857c-940631facdad": unknown;
        "fe2f3beb-8034-4aeb-8a3f-91ab78945416": components["schemas"]["7997b9ca-bc10-41e9-a65b-a19f988d72ee"][];
        "f45d3e0b-e3cb-4b75-bcb1-55f92fb17a4d": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["29537709-71c2-45a6-9a66-9c343d7d5556"];
            data?: Record<string, never>;
        };
        "43d49be8-f9f8-4548-ac17-f26e1956570c": {
            nodeName?: string;
            optional?: boolean;
            nodeType?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["b2a542fc-3ebf-4132-ba44-2b8c8acf693c"];
            primary?: boolean;
        };
        "6fd9ac53-e97c-49d8-a942-5b5648fbe315": {
            /** Format: int32 */
            sec?: number;
            /** Format: int32 */
            min?: number;
            /** Format: int32 */
            hour?: number;
        };
        "9a13f8f8-8b56-4f1d-8693-27dd7a82aacf": components["schemas"]["cfd5cb9b-df47-41b1-aff6-8bf5bca247ee"][];
        "09ea553d-f395-4e05-bad0-0766eb63accb": {
            displayValue?: string;
            units?: string;
            type?: string;
        };
        "d115a0a3-faab-4b10-b0b9-f3d04a87ed1c": components["schemas"]["3cddc6a3-eb35-43fc-ad49-00660b6cd6af"][];
        "f6d782be-f09f-4e73-91e0-ce8921d2b6c8": unknown;
        /** @description (typeName=java.util.Collection<? extends com.tccc.kos.ext.dispense.service.ingredient.BaseIngredient>) */
        "8275b0de-0ba6-4da1-865e-3a2108778a57": components["schemas"]["0e52b74e-4a63-456c-a8fb-93b687f23f9e"];
        "eb4ed43a-d9f9-4041-9518-33fa8a5f3d38": components["schemas"]["73049cf5-2c7b-4861-bfb9-6593510737fa"][];
        "a74f861b-9f2e-4525-9995-15f0fe6a7cb5": components["schemas"]["1499d23f-6f32-4d18-8a3c-e16cda981767"][];
        "c913561c-30c3-43b0-b7ef-4d7abeffa03c": components["schemas"]["5c22ab84-f686-4258-a2bb-35a0938834a0"][];
        "a70ed2cd-d1d6-417c-bf2a-0efe344acc99": {
            parent?: string;
            /** @description (typeName=java.io.File) */
            parentFile?: components["schemas"]["a70ed2cd-d1d6-417c-bf2a-0efe344acc99"];
            hidden?: boolean;
            /** Format: int64 */
            freeSpace?: number;
            /** Format: int64 */
            totalSpace?: number;
            /** Format: int64 */
            usableSpace?: number;
            /** @description (typeName=java.io.File) */
            canonicalFile?: components["schemas"]["a70ed2cd-d1d6-417c-bf2a-0efe344acc99"];
            directory?: boolean;
            path?: string;
            /** @description (typeName=java.io.File) */
            absoluteFile?: components["schemas"]["a70ed2cd-d1d6-417c-bf2a-0efe344acc99"];
            file?: boolean;
            absolute?: boolean;
            name?: string;
            canonicalPath?: string;
            absolutePath?: string;
        };
        "e7f01b11-b357-4216-bbde-d1c6fca9b8fa": {
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.core.service.manifest.NodeSoftwareInfo>) */
            nodes?: components["schemas"]["25f6175d-4e92-48af-bb12-98dae6c67f7b"];
        };
        "10caf2dc-2be7-4f83-81ba-d994fe785568": string;
        "afcd9eb4-3ada-4969-9af0-70cf1302a6d7": unknown;
        "175caf39-dc2e-4958-9b74-09f282ffc9cb": {
            serialNumber?: string;
            name?: string;
            nodeId?: string;
        };
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics) */
        "57967f9d-5269-4b18-b675-1e2ca1277405": components["schemas"]["a9f7c003-e077-475b-ac7f-0d46a66ef07d"];
        "6ead8e04-3f4f-4787-8412-9b438b7b19b9": unknown;
        "5c22ab84-f686-4258-a2bb-35a0938834a0": {
            reason?: string;
            /** Format: date-time */
            createTime?: string;
            resolvable?: boolean;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            ifaces?: components["schemas"]["4a0695ea-142c-4955-8b52-a016df0c8cd0"];
            /** Format: int32 */
            id?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["afcd9eb4-3ada-4969-9af0-70cf1302a6d7"];
            type?: string;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            tags?: components["schemas"]["4a0695ea-142c-4955-8b52-a016df0c8cd0"];
            /** @description (typeName=com.tccc.kos.commons.core.service.trouble.TroubleInfo) */
            info?: components["schemas"]["471538f6-23cc-4afd-b551-7e910d9ffcc5"];
            group?: string;
        };
        "003683e3-222c-4682-8e8c-5303e3c4d784": components["schemas"]["cd3a65ee-c02a-42df-b157-6a7b7106ef39"][];
        "c104fe89-bb81-4c15-ae53-b241dc9978ba": components["schemas"]["148ed800-89fb-47c4-8e52-c60407b2007b"][];
        "c50e1cd7-df6d-4074-be4d-bcd49a3f8d80": components["schemas"]["47eb430b-84a1-4849-993d-dd146e8ab77d"][];
        "70215390-23e2-440d-a665-9e35b0a30725": {
            name?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["e1b3aa87-66a9-4add-b948-bf9688df3c15"];
        };
        "db1c6c02-ea15-466a-8e1d-feb690e4beae": {
            deviceType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["e3827b48-bafc-4c54-a4b8-5bf6e2824d59"];
            /** @description (typeName=com.tccc.kos.commons.manifest.device.ManifestDeviceInfo) */
            deviceInfo?: components["schemas"]["76346f5c-b579-4a64-896e-0543184dcc3a"];
        };
        "4de0e452-32e3-4d2d-b714-249d09c44964": {
            path?: string;
            basePath?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.cms.service.screen.Screen>) */
            screens?: components["schemas"]["130325e2-99b4-4d06-8f78-b85c55d73aa4"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["b6ac1c50-b7f5-49e6-9a6d-a3d9fb2dbaf7"];
            type?: string;
        };
        "89b5f581-452e-4651-a757-d08ee66368df": {
            redirect?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["6d138f12-f37e-4b53-abdb-c2ccf2164a8a"];
            url?: string;
        };
        "3a66fd16-d6e3-4684-8154-a77d61f6ddcf": unknown;
        "dcc2f41b-1a99-4360-ac19-aaa418ca46ff": {
            manifestId?: string;
            deviceId?: string;
        };
        "a1480f86-5e3a-4bb8-943d-3dfb18f9d551": {
            reason?: string;
            note?: string;
            /** @description (typeName=com.tccc.kos.commons.util.ReasonData) */
            reasonData?: components["schemas"]["f45d3e0b-e3cb-4b75-bcb1-55f92fb17a4d"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureWork) */
            rootFuture?: components["schemas"]["a1480f86-5e3a-4bb8-943d-3dfb18f9d551"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["c573ce7e-99c2-4bbe-b667-d1205879d219"];
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
            clientData?: components["schemas"]["b6ac1c50-b7f5-49e6-9a6d-a3d9fb2dbaf7"];
        };
        "e370aa43-21b8-444e-8358-8170961129f4": components["schemas"]["4434158c-d40a-40c6-8a97-e432e7d5ac00"][];
        "bea126d8-d571-4384-9246-d5f9db97efba": {
            incomplete?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedDeviceManifest$ManifestInfo>) */
            manifestInfoChain?: components["schemas"]["0b087158-06a2-4e03-81e0-c34835daab72"];
            /** @description (typeName=com.tccc.kos.commons.manifest.DeviceManifest) */
            deviceManifest?: components["schemas"]["db1c6c02-ea15-466a-8e1d-feb690e4beae"];
            manifestId?: string;
        };
        "3b50fb51-973b-43d8-80ca-a933a0dfa37d": {
            type?: string;
            /** @description (typeName=com.tccc.kos.commons.manifest.chained.ChainedManifest) */
            chainedManifest?: components["schemas"]["5a443710-5723-44ab-98db-b5566a1b9106"];
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["694d0445-bdd6-4d8b-8a0b-056982cab77a"];
        };
        "81f5c678-d251-41bb-9636-75e618d483d4": unknown;
        "0e52b74e-4a63-456c-a8fb-93b687f23f9e": components["schemas"]["d74ed601-956a-4df1-83bd-b0a60fac4770"][];
        "340bebfa-6dcc-4232-a0f7-1462a243ee14": components["schemas"]["8d1c31f4-65cf-4784-84f4-7f8ac3903a41"][];
        "e1b3aa87-66a9-4add-b948-bf9688df3c15": components["schemas"]["cfd5cb9b-df47-41b1-aff6-8bf5bca247ee"][];
        "0b087158-06a2-4e03-81e0-c34835daab72": components["schemas"]["3b50fb51-973b-43d8-80ca-a933a0dfa37d"][];
        /** @description (typeName=com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema) */
        "684983a0-2704-4836-b941-26b742cb6630": components["schemas"]["4ac11d29-aee5-4d5b-b42b-6309f8b41c03"];
        "e3827b48-bafc-4c54-a4b8-5bf6e2824d59": string;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
