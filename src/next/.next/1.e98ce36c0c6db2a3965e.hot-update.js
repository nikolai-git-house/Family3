webpackHotUpdate(1,{

/***/ "../../node_modules/react-apollo/react-apollo.browser.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__("../../node_modules/react-dom/server.browser.js"), __webpack_require__("../../node_modules/apollo-client/index.js"), __webpack_require__("../../node_modules/prop-types/index.js"), __webpack_require__("../../node_modules/react/index.js")) :
    typeof define === 'function' && define.amd ? define(['exports', 'react-dom/server', 'apollo-client', 'prop-types', 'react'], factory) :
    (factory((global['react-apollo'] = {}),global.server,global.apolloClient,global.PropTypes,global.React));
}(this, (function (exports,server,apolloClient,PropTypes,React) { 'use strict';

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var Trie = (function () {
        function Trie() {
            this.children = null;
            this.added = false;
        }
        Trie.prototype.has = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            var node = this;
            return keys.every(function (key) {
                var child = node.children && node.children.get(key);
                return !!(child && (node = child));
            }) && node.added;
        };
        Trie.prototype.add = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            var node = this;
            keys.forEach(function (key) {
                var map = node.children || (node.children = new Map);
                var child = map.get(key);
                if (child) {
                    node = child;
                }
                else {
                    map.set(key, node = new Trie());
                }
            });
            node.added = true;
        };
        return Trie;
    }());
    var RenderPromises = (function () {
        function RenderPromises() {
            this.queryPromises = new Map();
            this.queryGraveyard = new Trie();
        }
        RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
            var _a = queryInstance.props, query = _a.query, variables = _a.variables;
            if (!this.queryGraveyard.has(query, JSON.stringify(variables))) {
                this.queryPromises.set(queryInstance, new Promise(function (resolve) {
                    resolve(queryInstance.fetchData());
                }));
                return null;
            }
            return finish();
        };
        RenderPromises.prototype.hasPromises = function () {
            return this.queryPromises.size > 0;
        };
        RenderPromises.prototype.consumeAndAwaitPromises = function () {
            var _this = this;
            var promises = [];
            this.queryPromises.forEach(function (promise, queryInstance) {
                var _a = queryInstance.props, query = _a.query, variables = _a.variables;
                _this.queryGraveyard.add(query, JSON.stringify(variables));
                promises.push(promise);
            });
            this.queryPromises.clear();
            return Promise.all(promises);
        };
        return RenderPromises;
    }());
    function getDataFromTree(tree, context) {
        if (context === void 0) { context = {}; }
        return getMarkupFromTree({
            tree: tree,
            context: context,
            renderFunction: server.renderToStaticMarkup,
        });
    }
    function getMarkupFromTree(_a) {
        var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? server.renderToStaticMarkup : _c;
        var renderPromises = new RenderPromises();
        var RenderPromisesProvider = (function (_super) {
            __extends(RenderPromisesProvider, _super);
            function RenderPromisesProvider() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RenderPromisesProvider.prototype.getChildContext = function () {
                return __assign({}, context, { renderPromises: renderPromises });
            };
            RenderPromisesProvider.prototype.render = function () {
                return tree;
            };
            RenderPromisesProvider.childContextTypes = {
                renderPromises: PropTypes.object,
            };
            return RenderPromisesProvider;
        }(React.Component));
        Object.keys(context).forEach(function (key) {
            RenderPromisesProvider.childContextTypes[key] = PropTypes.any;
        });
        function process() {
            var html = renderFunction(React.createElement(RenderPromisesProvider));
            return renderPromises.hasPromises()
                ? renderPromises.consumeAndAwaitPromises().then(process)
                : html;
        }
        return Promise.resolve().then(process);
    }

    var invariant = __webpack_require__("../../node_modules/invariant/browser.js");
    var ApolloConsumer = function (props, context) {
        invariant(!!context.client, "Could not find \"client\" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>");
        return props.children(context.client);
    };
    ApolloConsumer.contextTypes = {
        client: PropTypes.object.isRequired,
    };
    ApolloConsumer.propTypes = {
        children: PropTypes.func.isRequired,
    };

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var invariant$1 = __webpack_require__("../../node_modules/invariant/browser.js");
    var ApolloProvider = (function (_super) {
        __extends$1(ApolloProvider, _super);
        function ApolloProvider(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.operations = new Map();
            invariant$1(props.client, 'ApolloProvider was not passed a client instance. Make ' +
                'sure you pass in your client via the "client" prop.');
            if (!props.client.__operations_cache__) {
                props.client.__operations_cache__ = _this.operations;
            }
            return _this;
        }
        ApolloProvider.prototype.getChildContext = function () {
            return {
                client: this.props.client,
                operations: this.props.client.__operations_cache__,
            };
        };
        ApolloProvider.prototype.render = function () {
            return this.props.children;
        };
        ApolloProvider.propTypes = {
            client: PropTypes.object.isRequired,
            children: PropTypes.node.isRequired,
        };
        ApolloProvider.childContextTypes = {
            client: PropTypes.object.isRequired,
            operations: PropTypes.object,
        };
        return ApolloProvider;
    }(React.Component));

    var invariant$2 = __webpack_require__("../../node_modules/invariant/browser.js");
    var DocumentType;
    (function (DocumentType) {
        DocumentType[DocumentType["Query"] = 0] = "Query";
        DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
        DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
    })(DocumentType || (DocumentType = {}));
    var cache = new Map();
    function parser(document) {
        var cached = cache.get(document);
        if (cached)
            return cached;
        var variables, type, name;
        invariant$2(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
            "DocumentNode. You may need to use 'graphql-tag' or another method " +
            "to convert your operation into a document");
        var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
        var queries = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'query'; });
        var mutations = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'mutation'; });
        var subscriptions = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'subscription'; });
        invariant$2(!fragments.length || (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
            "You must include a query, subscription or mutation as well");
        invariant$2(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
            (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
            ("subscriptions and " + mutations.length + " mutations. ") +
            "You can use 'compose' to join multiple operation types to a component");
        type = queries.length ? DocumentType.Query : DocumentType.Mutation;
        if (!queries.length && !mutations.length)
            type = DocumentType.Subscription;
        var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
        invariant$2(definitions.length === 1, "react-apollo only supports one defintion per HOC. " + document + " had " +
            (definitions.length + " definitions. ") +
            "You can use 'compose' to join multiple operation types to a component");
        var definition = definitions[0];
        variables = definition.variableDefinitions || [];
        if (definition.name && definition.name.kind === 'Name') {
            name = definition.name.value;
        }
        else {
            name = 'data';
        }
        var payload = { name: name, type: type, variables: variables };
        cache.set(document, payload);
        return payload;
    }

    var invariant$3 = __webpack_require__("../../node_modules/invariant/browser.js");
    function getClient(props, context) {
        var client = props.client || context.client;
        invariant$3(!!client, 'Could not find "client" in the context or passed in as a prop. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via props.');
        return client;
    }

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$1 = (undefined && undefined.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    var __rest = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var shallowEqual = __webpack_require__("../../node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js");
    var invariant$4 = __webpack_require__("../../node_modules/invariant/browser.js");
    function compact(obj) {
        return Object.keys(obj).reduce(function (acc, key) {
            if (obj[key] !== undefined) {
                acc[key] = obj[key];
            }
            return acc;
        }, {});
    }
    function observableQueryFields(observable) {
        var fields = {
            variables: observable.variables,
            refetch: observable.refetch.bind(observable),
            fetchMore: observable.fetchMore.bind(observable),
            updateQuery: observable.updateQuery.bind(observable),
            startPolling: observable.startPolling.bind(observable),
            stopPolling: observable.stopPolling.bind(observable),
            subscribeToMore: observable.subscribeToMore.bind(observable),
        };
        return fields;
    }
    var Query = (function (_super) {
        __extends$2(Query, _super);
        function Query(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.previousData = {};
            _this.hasMounted = false;
            _this.startQuerySubscription = function () {
                if (_this.querySubscription)
                    return;
                var initial = _this.getQueryResult();
                _this.querySubscription = _this.queryObservable.subscribe({
                    next: function (_a) {
                        var data = _a.data;
                        if (initial && initial.networkStatus === 7 && shallowEqual(initial.data, data)) {
                            initial = undefined;
                            return;
                        }
                        initial = undefined;
                        _this.updateCurrentData();
                    },
                    error: function (error) {
                        _this.resubscribeToQuery();
                        if (!error.hasOwnProperty('graphQLErrors'))
                            throw error;
                        _this.updateCurrentData();
                    },
                });
            };
            _this.removeQuerySubscription = function () {
                if (_this.querySubscription) {
                    _this.querySubscription.unsubscribe();
                    delete _this.querySubscription;
                }
            };
            _this.updateCurrentData = function () {
                if (_this.hasMounted)
                    _this.forceUpdate();
            };
            _this.getQueryResult = function () {
                var data = { data: Object.create(null) };
                Object.assign(data, observableQueryFields(_this.queryObservable));
                if (_this.props.skip) {
                    data = __assign$1({}, data, { data: undefined, error: undefined, loading: false });
                }
                else {
                    var currentResult = _this.queryObservable.currentResult();
                    var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
                    var error = currentResult.error;
                    if (errors && errors.length > 0) {
                        error = new apolloClient.ApolloError({ graphQLErrors: errors });
                    }
                    Object.assign(data, { loading: loading, networkStatus: networkStatus, error: error });
                    if (loading) {
                        Object.assign(data.data, _this.previousData, currentResult.data);
                    }
                    else if (error) {
                        Object.assign(data, {
                            data: (_this.queryObservable.getLastResult() || {}).data,
                        });
                    }
                    else {
                        var fetchPolicy = _this.queryObservable.options.fetchPolicy;
                        var partialRefetch = _this.props.partialRefetch;
                        if (partialRefetch &&
                            Object.keys(currentResult.data).length === 0 &&
                            partial &&
                            fetchPolicy !== 'cache-only') {
                            Object.assign(data, { loading: true, networkStatus: apolloClient.NetworkStatus.loading });
                            data.refetch();
                            return data;
                        }
                        Object.assign(data.data, currentResult.data);
                        _this.previousData = currentResult.data;
                    }
                }
                if (!_this.querySubscription) {
                    var oldRefetch_1 = data.refetch;
                    data.refetch = function (args) {
                        if (_this.querySubscription) {
                            return oldRefetch_1(args);
                        }
                        else {
                            return new Promise(function (r, f) {
                                _this.refetcherQueue = { resolve: r, reject: f, args: args };
                            });
                        }
                    };
                }
                data.client = _this.client;
                return data;
            };
            _this.client = getClient(props, context);
            _this.initializeQueryObservable(props);
            return _this;
        }
        Query.prototype.fetchData = function () {
            if (this.props.skip)
                return false;
            var _a = this.props, children = _a.children, ssr = _a.ssr, displayName = _a.displayName, skip = _a.skip, client = _a.client, onCompleted = _a.onCompleted, onError = _a.onError, partialRefetch = _a.partialRefetch, opts = __rest(_a, ["children", "ssr", "displayName", "skip", "client", "onCompleted", "onError", "partialRefetch"]);
            var fetchPolicy = opts.fetchPolicy;
            if (ssr === false)
                return false;
            if (fetchPolicy === 'network-only' || fetchPolicy === 'cache-and-network') {
                fetchPolicy = 'cache-first';
            }
            var observable = this.client.watchQuery(__assign$1({}, opts, { fetchPolicy: fetchPolicy }));
            var result = this.queryObservable.currentResult();
            return result.loading ? observable.result() : false;
        };
        Query.prototype.componentDidMount = function () {
            this.hasMounted = true;
            if (this.props.skip)
                return;
            this.startQuerySubscription();
            if (this.refetcherQueue) {
                var _a = this.refetcherQueue, args = _a.args, resolve = _a.resolve, reject = _a.reject;
                this.queryObservable.refetch(args)
                    .then(resolve)
                    .catch(reject);
            }
        };
        Query.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            if (nextProps.skip && !this.props.skip) {
                this.removeQuerySubscription();
                return;
            }
            var nextClient = getClient(nextProps, nextContext);
            if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
                return;
            }
            if (this.client !== nextClient) {
                this.client = nextClient;
                this.removeQuerySubscription();
                this.queryObservable = null;
                this.previousData = {};
                this.updateQuery(nextProps);
            }
            if (this.props.query !== nextProps.query) {
                this.removeQuerySubscription();
            }
            this.updateQuery(nextProps);
            if (nextProps.skip)
                return;
            this.startQuerySubscription();
        };
        Query.prototype.componentWillUnmount = function () {
            this.removeQuerySubscription();
            this.hasMounted = false;
        };
        Query.prototype.componentDidUpdate = function () {
            var _a = this.props, onCompleted = _a.onCompleted, onError = _a.onError;
            if (onCompleted || onError) {
                var currentResult = this.queryObservable.currentResult();
                var loading = currentResult.loading, error = currentResult.error, data = currentResult.data;
                if (onCompleted && !loading && !error) {
                    onCompleted(data);
                }
                else if (onError && !loading && error) {
                    onError(error);
                }
            }
        };
        Query.prototype.render = function () {
            var _this = this;
            var context = this.context;
            var finish = function () { return _this.props.children(_this.getQueryResult()); };
            if (context && context.renderPromises) {
                return context.renderPromises.addQueryPromise(this, finish);
            }
            return finish();
        };
        Query.prototype.extractOptsFromProps = function (props) {
            var variables = props.variables, pollInterval = props.pollInterval, fetchPolicy = props.fetchPolicy, errorPolicy = props.errorPolicy, notifyOnNetworkStatusChange = props.notifyOnNetworkStatusChange, query = props.query, _a = props.displayName, displayName = _a === void 0 ? 'Query' : _a, _b = props.context, context = _b === void 0 ? {} : _b;
            this.operation = parser(query);
            invariant$4(this.operation.type === DocumentType.Query, "The <Query /> component requires a graphql query, but got a " + (this.operation.type === DocumentType.Mutation ? 'mutation' : 'subscription') + ".");
            return compact({
                variables: variables,
                pollInterval: pollInterval,
                query: query,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
                notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
                metadata: { reactComponent: { displayName: displayName } },
                context: context,
            });
        };
        Query.prototype.initializeQueryObservable = function (props) {
            var opts = this.extractOptsFromProps(props);
            this.setOperations(opts);
            this.queryObservable = this.client.watchQuery(opts);
        };
        Query.prototype.setOperations = function (props) {
            if (this.context.operations) {
                this.context.operations.set(this.operation.name, {
                    query: props.query,
                    variables: props.variables,
                });
            }
        };
        Query.prototype.updateQuery = function (props) {
            if (!this.queryObservable) {
                this.initializeQueryObservable(props);
            }
            else {
                this.setOperations(props);
            }
            this.queryObservable.setOptions(this.extractOptsFromProps(props))
                .catch(function () { return null; });
        };
        Query.prototype.resubscribeToQuery = function () {
            this.removeQuerySubscription();
            var lastError = this.queryObservable.getLastError();
            var lastResult = this.queryObservable.getLastResult();
            this.queryObservable.resetLastResults();
            this.startQuerySubscription();
            Object.assign(this.queryObservable, { lastError: lastError, lastResult: lastResult });
        };
        Query.contextTypes = {
            client: PropTypes.object,
            operations: PropTypes.object,
            renderPromises: PropTypes.object,
        };
        Query.propTypes = {
            client: PropTypes.object,
            children: PropTypes.func.isRequired,
            fetchPolicy: PropTypes.string,
            notifyOnNetworkStatusChange: PropTypes.bool,
            onCompleted: PropTypes.func,
            onError: PropTypes.func,
            pollInterval: PropTypes.number,
            query: PropTypes.object.isRequired,
            variables: PropTypes.object,
            ssr: PropTypes.bool,
            partialRefetch: PropTypes.bool,
        };
        return Query;
    }(React.Component));

    var __extends$3 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$2 = (undefined && undefined.__assign) || function () {
        __assign$2 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    var invariant$5 = __webpack_require__("../../node_modules/invariant/browser.js");
    var shallowEqual$1 = __webpack_require__("../../node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js");
    var initialState = {
        loading: false,
        called: false,
        error: undefined,
        data: undefined,
    };
    var Mutation = (function (_super) {
        __extends$3(Mutation, _super);
        function Mutation(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.hasMounted = false;
            _this.runMutation = function (options) {
                if (options === void 0) { options = {}; }
                _this.onMutationStart();
                var mutationId = _this.generateNewMutationId();
                return _this.mutate(options)
                    .then(function (response) {
                    _this.onMutationCompleted(response, mutationId);
                    return response;
                })
                    .catch(function (e) {
                    _this.onMutationError(e, mutationId);
                    if (!_this.props.onError)
                        throw e;
                });
            };
            _this.mutate = function (options) {
                var _a = _this.props, mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c;
                var mutateOptions = __assign$2({}, options);
                var refetchQueries = mutateOptions.refetchQueries || _this.props.refetchQueries;
                if (refetchQueries && refetchQueries.length && Array.isArray(refetchQueries)) {
                    refetchQueries = refetchQueries.map(function (x) {
                        if (typeof x === 'string' && _this.context.operations)
                            return _this.context.operations.get(x) || x;
                        return x;
                    });
                    delete mutateOptions.refetchQueries;
                }
                var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
                delete mutateOptions.variables;
                return _this.client.mutate(__assign$2({ mutation: mutation,
                    optimisticResponse: optimisticResponse,
                    refetchQueries: refetchQueries,
                    awaitRefetchQueries: awaitRefetchQueries,
                    update: update,
                    context: context, variables: mutateVariables }, mutateOptions));
            };
            _this.onMutationStart = function () {
                if (!_this.state.loading && !_this.props.ignoreResults) {
                    _this.setState({
                        loading: true,
                        error: undefined,
                        data: undefined,
                        called: true,
                    });
                }
            };
            _this.onMutationCompleted = function (response, mutationId) {
                if (_this.hasMounted === false) {
                    return;
                }
                var _a = _this.props, onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
                var data = response.data, errors = response.errors;
                var error = errors && errors.length > 0 ? new apolloClient.ApolloError({ graphQLErrors: errors }) : undefined;
                var callOncomplete = function () { return (onCompleted ? onCompleted(data) : null); };
                if (_this.isMostRecentMutation(mutationId) && !ignoreResults) {
                    _this.setState({ loading: false, data: data, error: error }, callOncomplete);
                }
                else {
                    callOncomplete();
                }
            };
            _this.onMutationError = function (error, mutationId) {
                if (_this.hasMounted === false) {
                    return;
                }
                var onError = _this.props.onError;
                var callOnError = function () { return (onError ? onError(error) : null); };
                if (_this.isMostRecentMutation(mutationId)) {
                    _this.setState({ loading: false, error: error }, callOnError);
                }
                else {
                    callOnError();
                }
            };
            _this.generateNewMutationId = function () {
                _this.mostRecentMutationId = _this.mostRecentMutationId + 1;
                return _this.mostRecentMutationId;
            };
            _this.isMostRecentMutation = function (mutationId) {
                return _this.mostRecentMutationId === mutationId;
            };
            _this.verifyDocumentIsMutation = function (mutation) {
                var operation = parser(mutation);
                invariant$5(operation.type === DocumentType.Mutation, "The <Mutation /> component requires a graphql mutation, but got a " + (operation.type === DocumentType.Query ? 'query' : 'subscription') + ".");
            };
            _this.client = getClient(props, context);
            _this.verifyDocumentIsMutation(props.mutation);
            _this.mostRecentMutationId = 0;
            _this.state = initialState;
            return _this;
        }
        Mutation.prototype.componentDidMount = function () {
            this.hasMounted = true;
        };
        Mutation.prototype.componentWillUnmount = function () {
            this.hasMounted = false;
        };
        Mutation.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            var nextClient = getClient(nextProps, nextContext);
            if (shallowEqual$1(this.props, nextProps) && this.client === nextClient) {
                return;
            }
            if (this.props.mutation !== nextProps.mutation) {
                this.verifyDocumentIsMutation(nextProps.mutation);
            }
            if (this.client !== nextClient) {
                this.client = nextClient;
                this.setState(initialState);
            }
        };
        Mutation.prototype.render = function () {
            var children = this.props.children;
            var _a = this.state, loading = _a.loading, data = _a.data, error = _a.error, called = _a.called;
            var result = {
                called: called,
                loading: loading,
                data: data,
                error: error,
                client: this.client,
            };
            return children(this.runMutation, result);
        };
        Mutation.contextTypes = {
            client: PropTypes.object.isRequired,
            operations: PropTypes.object,
        };
        Mutation.propTypes = {
            mutation: PropTypes.object.isRequired,
            variables: PropTypes.object,
            optimisticResponse: PropTypes.object,
            refetchQueries: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
                PropTypes.func,
            ]),
            awaitRefetchQueries: PropTypes.bool,
            update: PropTypes.func,
            children: PropTypes.func.isRequired,
            onCompleted: PropTypes.func,
            onError: PropTypes.func,
        };
        return Mutation;
    }(React.Component));

    var __extends$4 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var shallowEqual$2 = __webpack_require__("../../node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js");
    var invariant$6 = __webpack_require__("../../node_modules/invariant/browser.js");
    var Subscription = (function (_super) {
        __extends$4(Subscription, _super);
        function Subscription(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.initialize = function (props) {
                if (_this.queryObservable)
                    return;
                _this.queryObservable = _this.client.subscribe({
                    query: props.subscription,
                    variables: props.variables,
                    fetchPolicy: props.fetchPolicy,
                });
            };
            _this.startSubscription = function () {
                if (_this.querySubscription)
                    return;
                _this.querySubscription = _this.queryObservable.subscribe({
                    next: _this.updateCurrentData,
                    error: _this.updateError,
                });
            };
            _this.getInitialState = function () { return ({
                loading: true,
                error: undefined,
                data: undefined,
            }); };
            _this.updateCurrentData = function (result) {
                var _a = _this, client = _a.client, onSubscriptionData = _a.props.onSubscriptionData;
                if (onSubscriptionData)
                    onSubscriptionData({ client: client, subscriptionData: result });
                _this.setState({
                    data: result.data,
                    loading: false,
                    error: undefined,
                });
            };
            _this.updateError = function (error) {
                _this.setState({
                    error: error,
                    loading: false,
                });
            };
            _this.endSubscription = function () {
                if (_this.querySubscription) {
                    _this.querySubscription.unsubscribe();
                    delete _this.querySubscription;
                }
            };
            _this.client = getClient(props, context);
            _this.initialize(props);
            _this.state = _this.getInitialState();
            return _this;
        }
        Subscription.prototype.componentDidMount = function () {
            this.startSubscription();
        };
        Subscription.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            var nextClient = getClient(nextProps, nextContext);
            if (shallowEqual$2(this.props.variables, nextProps.variables) &&
                this.client === nextClient &&
                this.props.subscription === nextProps.subscription) {
                return;
            }
            var shouldResubscribe = nextProps.shouldResubscribe;
            if (typeof shouldResubscribe === 'function') {
                shouldResubscribe = !!shouldResubscribe(this.props, nextProps);
            }
            var shouldNotResubscribe = shouldResubscribe === false;
            if (this.client !== nextClient) {
                this.client = nextClient;
            }
            if (!shouldNotResubscribe) {
                this.endSubscription();
                delete this.queryObservable;
                this.initialize(nextProps);
                this.startSubscription();
                this.setState(this.getInitialState());
                return;
            }
            this.initialize(nextProps);
            this.startSubscription();
        };
        Subscription.prototype.componentWillUnmount = function () {
            this.endSubscription();
        };
        Subscription.prototype.render = function () {
            var renderFn = this.props.children;
            if (!renderFn)
                return null;
            var result = Object.assign({}, this.state, {
                variables: this.props.variables,
            });
            return renderFn(result);
        };
        Subscription.contextTypes = {
            client: PropTypes.object.isRequired,
        };
        Subscription.propTypes = {
            subscription: PropTypes.object.isRequired,
            variables: PropTypes.object,
            children: PropTypes.func,
            onSubscriptionData: PropTypes.func,
            shouldResubscribe: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        };
        return Subscription;
    }(React.Component));

    var __extends$5 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var invariant$7 = __webpack_require__("../../node_modules/invariant/browser.js");
    var defaultMapPropsToOptions = function () { return ({}); };
    var defaultMapPropsToSkip = function () { return false; };
    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    function calculateVariablesFromProps(operation, props, graphQLDisplayName, wrapperName) {
        var variables = {};
        for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
            var _b = _a[_i], variable = _b.variable, type = _b.type;
            if (!variable.name || !variable.name.value)
                continue;
            var variableName = variable.name.value;
            var variableProp = props[variableName];
            if (typeof variableProp !== 'undefined') {
                variables[variableName] = variableProp;
                continue;
            }
            if (type.kind !== 'NonNullType') {
                variables[variableName] = null;
                continue;
            }
            if (operation.type === DocumentType.Mutation)
                return;
            invariant$7(typeof variableProp !== 'undefined', "The operation '" + operation.name + "' wrapping '" + wrapperName + "' " +
                ("is expecting a variable: '" + variable.name.value + "' but it was not found in the props ") +
                ("passed to '" + graphQLDisplayName + "'"));
        }
        return variables;
    }
    var GraphQLBase = (function (_super) {
        __extends$5(GraphQLBase, _super);
        function GraphQLBase(props) {
            var _this = _super.call(this, props) || this;
            _this.withRef = false;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        GraphQLBase.prototype.getWrappedInstance = function () {
            invariant$7(this.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        GraphQLBase.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        return GraphQLBase;
    }(React.Component));

    var __extends$6 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$3 = (undefined && undefined.__assign) || function () {
        __assign$3 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$3.apply(this, arguments);
    };
    var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var hoistNonReactStatics = __webpack_require__("../../node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function query(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function') {
            mapPropsToOptions = function () { return options; };
        }
        var mapPropsToSkip = skip;
        if (typeof mapPropsToSkip !== 'function') {
            mapPropsToSkip = function () { return skip; };
        }
        var lastResultProps;
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$6(GraphQL, _super);
                function GraphQL() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GraphQL.prototype.render = function () {
                    var _this = this;
                    var props = this.props;
                    var shouldSkip = mapPropsToSkip(props);
                    var opts = shouldSkip ? Object.create(null) : __assign$3({}, mapPropsToOptions(props));
                    if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Query, __assign$3({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document, warnUnhandledError: true }), function (_a) {
                        var _ = _a.client, data = _a.data, r = __rest$1(_a, ["client", "data"]);
                        var _b, _c;
                        if (operationOptions.withRef) {
                            _this.withRef = true;
                            props = Object.assign({}, props, {
                                ref: _this.setWrappedInstance,
                            });
                        }
                        if (shouldSkip)
                            return React.createElement(WrappedComponent, __assign$3({}, props));
                        var result = Object.assign(r, data || {});
                        var name = operationOptions.name || 'data';
                        var childProps = (_b = {}, _b[name] = result, _b);
                        if (operationOptions.props) {
                            var newResult = (_c = {},
                                _c[name] = result,
                                _c.ownProps = props,
                                _c);
                            lastResultProps = operationOptions.props(newResult, lastResultProps);
                            childProps = lastResultProps;
                        }
                        return React.createElement(WrappedComponent, __assign$3({}, props, childProps));
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics(GraphQL, WrappedComponent, {});
        };
    }

    var __extends$7 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$4 = (undefined && undefined.__assign) || function () {
        __assign$4 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$4.apply(this, arguments);
    };
    var hoistNonReactStatics$1 = __webpack_require__("../../node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function mutation(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function')
            mapPropsToOptions = function () { return options; };
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$7(GraphQL, _super);
                function GraphQL() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GraphQL.prototype.render = function () {
                    var props = this.props;
                    var opts = mapPropsToOptions(props);
                    if (operationOptions.withRef) {
                        this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: this.setWrappedInstance,
                        });
                    }
                    if (!opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Mutation, __assign$4({}, opts, { mutation: document, ignoreResults: true }), function (mutate, _result) {
                        var _a, _b;
                        var name = operationOptions.name || 'mutate';
                        var childProps = (_a = {}, _a[name] = mutate, _a);
                        if (operationOptions.props) {
                            var newResult = (_b = {},
                                _b[name] = mutate,
                                _b.ownProps = props,
                                _b);
                            childProps = operationOptions.props(newResult);
                        }
                        return React.createElement(WrappedComponent, __assign$4({}, props, childProps));
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics$1(GraphQL, WrappedComponent, {});
        };
    }

    var __extends$8 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$5 = (undefined && undefined.__assign) || function () {
        __assign$5 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$5.apply(this, arguments);
    };
    var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var hoistNonReactStatics$2 = __webpack_require__("../../node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function subscribe(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function')
            mapPropsToOptions = function () { return options; };
        var mapPropsToSkip = skip;
        if (typeof mapPropsToSkip !== 'function')
            mapPropsToSkip = function () { return skip; };
        var lastResultProps;
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$8(GraphQL, _super);
                function GraphQL(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = { resubscribe: false };
                    return _this;
                }
                GraphQL.prototype.componentWillReceiveProps = function (nextProps) {
                    if (!shouldResubscribe)
                        return;
                    this.setState({
                        resubscribe: shouldResubscribe(this.props, nextProps),
                    });
                };
                GraphQL.prototype.render = function () {
                    var _this = this;
                    var props = this.props;
                    var shouldSkip = mapPropsToSkip(props);
                    var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);
                    if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Subscription, __assign$5({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                        var data = _a.data, r = __rest$2(_a, ["data"]);
                        var _b, _c;
                        if (operationOptions.withRef) {
                            _this.withRef = true;
                            props = Object.assign({}, props, {
                                ref: _this.setWrappedInstance,
                            });
                        }
                        if (shouldSkip)
                            return React.createElement(WrappedComponent, __assign$5({}, props));
                        var result = Object.assign(r, data || {});
                        var name = operationOptions.name || 'data';
                        var childProps = (_b = {}, _b[name] = result, _b);
                        if (operationOptions.props) {
                            var newResult = (_c = {},
                                _c[name] = result,
                                _c.ownProps = props,
                                _c);
                            lastResultProps = operationOptions.props(newResult, lastResultProps);
                            childProps = lastResultProps;
                        }
                        return React.createElement(WrappedComponent, __assign$5({}, props, childProps));
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics$2(GraphQL, WrappedComponent, {});
        };
    }

    function graphql(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        switch (parser(document).type) {
            case DocumentType.Mutation:
                return mutation(document, operationOptions);
            case DocumentType.Subscription:
                return subscribe(document, operationOptions);
            case DocumentType.Query:
            default:
                return query(document, operationOptions);
        }
    }

    var __extends$9 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$6 = (undefined && undefined.__assign) || function () {
        __assign$6 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$6.apply(this, arguments);
    };
    var invariant$8 = __webpack_require__("../../node_modules/invariant/browser.js");
    var hoistNonReactStatics$3 = __webpack_require__("../../node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function getDisplayName$1(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    function withApollo(WrappedComponent, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
        var WithApollo = (function (_super) {
            __extends$9(WithApollo, _super);
            function WithApollo(props) {
                var _this = _super.call(this, props) || this;
                _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                return _this;
            }
            WithApollo.prototype.getWrappedInstance = function () {
                invariant$8(operationOptions.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
                return this.wrappedInstance;
            };
            WithApollo.prototype.setWrappedInstance = function (ref) {
                this.wrappedInstance = ref;
            };
            WithApollo.prototype.render = function () {
                var _this = this;
                return (React.createElement(ApolloConsumer, null, function (client) {
                    var props = Object.assign({}, _this.props, {
                        client: client,
                        ref: operationOptions.withRef ? _this.setWrappedInstance : undefined,
                    });
                    return React.createElement(WrappedComponent, __assign$6({}, props));
                }));
            };
            WithApollo.displayName = withDisplayName;
            WithApollo.WrappedComponent = WrappedComponent;
            return WithApollo;
        }(React.Component));
        return hoistNonReactStatics$3(WithApollo, WrappedComponent, {});
    }

    function getProps(element) {
        return element.props || element.attributes;
    }
    function isReactElement(element) {
        return !!element.type;
    }
    function isComponentClass(Comp) {
        return Comp.prototype && (Comp.prototype.render || Comp.prototype.isReactComponent);
    }
    function providesChildContext(instance) {
        return !!instance.getChildContext;
    }
    function walkTree(element, context, visitor, newContext) {
        if (newContext === void 0) { newContext = new Map(); }
        if (!element) {
            return;
        }
        if (Array.isArray(element)) {
            element.forEach(function (item) { return walkTree(item, context, visitor, newContext); });
            return;
        }
        if (isReactElement(element)) {
            if (typeof element.type === 'function') {
                var Comp = element.type;
                var props = Object.assign({}, Comp.defaultProps, getProps(element));
                var childContext_1 = context;
                var child = void 0;
                if (isComponentClass(Comp)) {
                    var instance_1 = new Comp(props, context);
                    Object.defineProperty(instance_1, 'props', {
                        value: instance_1.props || props,
                    });
                    instance_1.context = instance_1.context || context;
                    instance_1.state = instance_1.state || null;
                    instance_1.setState = function (newState) {
                        if (typeof newState === 'function') {
                            newState = newState(instance_1.state, instance_1.props, instance_1.context);
                        }
                        instance_1.state = Object.assign({}, instance_1.state, newState);
                    };
                    if (Comp.getDerivedStateFromProps) {
                        var result = Comp.getDerivedStateFromProps(instance_1.props, instance_1.state);
                        if (result !== null) {
                            instance_1.state = Object.assign({}, instance_1.state, result);
                        }
                    }
                    else if (instance_1.UNSAFE_componentWillMount) {
                        instance_1.UNSAFE_componentWillMount();
                    }
                    else if (instance_1.componentWillMount) {
                        instance_1.componentWillMount();
                    }
                    if (providesChildContext(instance_1)) {
                        childContext_1 = Object.assign({}, context, instance_1.getChildContext());
                    }
                    if (visitor(element, instance_1, newContext, context, childContext_1) === false) {
                        return;
                    }
                    child = instance_1.render();
                }
                else {
                    if (visitor(element, null, newContext, context) === false) {
                        return;
                    }
                    child = Comp(props, context);
                }
                if (child) {
                    if (Array.isArray(child)) {
                        child.forEach(function (item) { return walkTree(item, childContext_1, visitor, newContext); });
                    }
                    else {
                        walkTree(child, childContext_1, visitor, newContext);
                    }
                }
            }
            else if (element.type._context || element.type.Consumer) {
                if (visitor(element, null, newContext, context) === false) {
                    return;
                }
                var child = void 0;
                if (!!element.type._context) {
                    newContext = new Map(newContext);
                    newContext.set(element.type, element.props.value);
                    child = element.props.children;
                }
                else {
                    var value = element.type._currentValue;
                    if (newContext.has(element.type.Provider)) {
                        value = newContext.get(element.type.Provider);
                    }
                    child = element.props.children(value);
                }
                if (child) {
                    if (Array.isArray(child)) {
                        child.forEach(function (item) { return walkTree(item, context, visitor, newContext); });
                    }
                    else {
                        walkTree(child, context, visitor, newContext);
                    }
                }
            }
            else {
                if (visitor(element, null, newContext, context) === false) {
                    return;
                }
                if (element.props && element.props.children) {
                    React.Children.forEach(element.props.children, function (child) {
                        if (child) {
                            walkTree(child, context, visitor, newContext);
                        }
                    });
                }
            }
        }
        else if (typeof element === 'string' || typeof element === 'number') {
            visitor(element, null, newContext, context);
        }
    }

    var compose = __webpack_require__("../../node_modules/lodash.flowright/index.js");

    exports.compose = compose;
    exports.getDataFromTree = getDataFromTree;
    exports.ApolloConsumer = ApolloConsumer;
    exports.ApolloProvider = ApolloProvider;
    exports.Query = Query;
    exports.Mutation = Mutation;
    exports.Subscription = Subscription;
    exports.graphql = graphql;
    exports.withApollo = withApollo;
    exports.RenderPromises = RenderPromises;
    exports.getMarkupFromTree = getMarkupFromTree;
    exports.walkTree = walkTree;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-apollo.browser.umd.js.map


/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("../../node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__("./components/Icons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppContext__ = __webpack_require__("./components/AppContext.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Footer.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var socialmediaIcons = {
  fb: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons__["c" /* IconFacebook */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }),
  ig: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons__["d" /* IconInstagram */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }),
  yt: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons__["o" /* IconYoutube */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }),
  ok: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons__["f" /* IconOdnoklassniki */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }),
  vk: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons__["n" /* IconVkontakte */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, function (_ref) {
    var _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "sub"
    }, options.subscribe && options.subscribe.code && options.subscribe && options.subscribe.code.form && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
      action: options.subscribe.code.form.action,
      method: options.subscribe.code.form.method,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
      container: true,
      centered: true,
      hug: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, options.subscribe.code.tags.map(function (tag, i) {
      switch (tag.attrs.type) {
        case 'hidden':
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", _extends({
            key: i
          }, tag.attrs, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + (tag.attrs.className != null && tag.attrs.className || "")
          }));

        case 'text':
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
            key: i,
            xs: "1/1",
            md: "auto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "box"
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", _extends({}, tag.attrs, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + (tag.attrs.className != null && tag.attrs.className || "")
          }))));

        case 'submit':
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
            key: i,
            xs: "1/1",
            md: "auto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "box btn"
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]])
          }, tag.attrs.value)));

        default:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", _extends({
            key: i
          }, tag.attrs, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + (tag.attrs.className != null && tag.attrs.className || "")
          }));
      }
    })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "info"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "box"
    }, "\xA9 \u041E\u041E\u041E \"\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435\" 2017-2018. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
      container: true,
      centered: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
      xs: "1/1",
      md: "auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "box"
    }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\xA0+7\xA0985\xA0054\xA054\xA063")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
      xs: "1/1",
      md: "auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "box"
    }, "e-mail:\xA0", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: "mailto:info@family3.ru",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]])
    }, "info@family3.ru")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "socialbox"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frow__["a" /* default */], {
      container: true,
      centered: true,
      hug: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }, options.social && options.social.items && options.social.items.map(function (_ref2, i) {
      var name = _ref2.name,
          link = _ref2.link;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        key: i,
        href: link,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "link"
      }, socialmediaIcons[name]);
    }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]]) + " " + "bottom-box"
    }, "Created by ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: "https://specidea.uk",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1375566798", [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]]])
    }, "Specidea"))));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1375566798",
    css: ".sub.__jsx-style-dynamic-selector a,.info.__jsx-style-dynamic-selector a,.sub.__jsx-style-dynamic-selector a:visited,.info.__jsx-style-dynamic-selector a:visited{color:#fff;}input[type=text].__jsx-style-dynamic-selector{border:1px solid #fff;border-radius:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";background:none;color:#fff;font-size:0.83333rem;line-height:2.28;padding:0 0.75rem;width:40%;min-width:11.85rem;}input[type=text].__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#fff;text-align:center;}input[type=text].__jsx-style-dynamic-selector::-moz-placeholder{color:#fff;text-align:center;}input[type=text].__jsx-style-dynamic-selector:-ms-input-placeholder{color:#fff;text-align:center;}input[type=text].__jsx-style-dynamic-selector::placeholder{color:#fff;text-align:center;}button.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, ";color:#fff;border:none;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, ";padding:0 1.2rem;width:40%;min-width:11.85rem;font-size:1rem;line-height:2;}.sub.__jsx-style-dynamic-selector{background-color:#999;padding-top:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), ";padding-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), ";}.sub.__jsx-style-dynamic-selector .box.__jsx-style-dynamic-selector{text-align:center;padding:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), " 15px;}.info.__jsx-style-dynamic-selector .box.__jsx-style-dynamic-selector{text-align:center;padding:0 4px;}.info.__jsx-style-dynamic-selector{padding-top:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), ";padding-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), ";background-color:#737373;color:#fff;text-align:center;}.info.__jsx-style-dynamic-selector .link.__jsx-style-dynamic-selector{display:inline-block;margin:0 0.33333rem;}.info.__jsx-style-dynamic-selector .link.__jsx-style-dynamic-selector svg{width:28px;height:28px;fill:#fff;}.info.__jsx-style-dynamic-selector .socialbox.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), ";}.bottom-box.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), ";}@media (min-width:992px){input[type=text].__jsx-style-dynamic-selector{border-radius:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, ";font-size:0.77778rem;line-height:2;max-width:11.85rem;width:100%;}input[type=text].__jsx-style-dynamic-selector::-webkit-input-placeholder{text-align:left;}input[type=text].__jsx-style-dynamic-selector::-moz-placeholder{text-align:left;}input[type=text].__jsx-style-dynamic-selector:-ms-input-placeholder{text-align:left;}input[type=text].__jsx-style-dynamic-selector::placeholder{text-align:left;}button.__jsx-style-dynamic-selector{width:auto;font-size:0.77778rem;line-height:2.2;}.sub.__jsx-style-dynamic-selector{padding-top:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), ";padding-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), ";}.info.__jsx-style-dynamic-selector{padding-top:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), ";padding-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), ";}.info.__jsx-style-dynamic-selector .box.__jsx-style-dynamic-selector{text-align:center;padding:0.16667rem 4px;}.info.__jsx-style-dynamic-selector .link.__jsx-style-dynamic-selector{margin:0 0.38889rem;}.info.__jsx-style-dynamic-selector .link.__jsx-style-dynamic-selector svg{width:48px;height:48px;fill:#fff;}.sub.__jsx-style-dynamic-selector .btn.__jsx-style-dynamic-selector{margin-top:0;}.info.__jsx-style-dynamic-selector .socialbox.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25), ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFYyxBQUlrQixBQUlXLEFBWVgsQUFLbUMsQUFZeEIsQUFNSixBQUtBLEFBS3VCLEFBUXBCLEFBS1YsQUFNNkIsQUFJQSxBQUtNLEFBUTVCLEFBSUwsQUFNK0IsQUFLQSxBQUt4QixBQUtFLEFBSVQsQUFNRSxBQUk0QixXQTNIN0MsQUFnQm9CLEFBOENOLEFBMkJXLEFBeUJULEVBTWQsR0FuQ0EsRUE5QzBDLEFBSzVCLEFBNkRXLEVBS3pCLENBckRvQixDQXJEdUIsQUE2QkYsQ0E4Qi9CLEFBb0RFLE1BbEdkLEdBNEJBLEFBNkNvQixDQTFCcEIsQUFvREUsT0FoREYsQUFJQSxDQXZCOEMsQUFTOUMsQUFnREUsQUFrQkEsQ0E3QitDLEFBS0EsRUF2QnhCLEVBeERaLEVBc0VYLFNBckVZLEdBa0JkLEdBTjhDLEVBN0I1QixBQXlFQSxJQXZEMkIsVUF3RHRCLEVBekVWLElBNENjLEVBOEN6QixBQUtBLEtBOUZxQixNQXlFUixTQTdDZixFQThDRSxDQTlCVyxFQTNCTSxDQWhCQSxRQTRDQyxRQTNCUixDQWhCUSxTQWlCQyxBQTJCckIsU0EzQ1ksVUFDUyxBQWdCSixlQUNELElBaEJoQixVQWlCQSIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgSWNvbkZhY2Vib29rLCBJY29uSW5zdGFncmFtLCBJY29uWW91dHViZSwgSWNvbk9kbm9rbGFzc25pa2ksIEljb25Wa29udGFrdGUgfSBmcm9tICcuL0ljb25zJ1xuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL0FwcENvbnRleHQnXG5cbmNvbnN0IHNvY2lhbG1lZGlhSWNvbnMgPSB7XG4gIGZiOiA8SWNvbkZhY2Vib29rLz4sXG4gIGlnOiA8SWNvbkluc3RhZ3JhbS8+LFxuICB5dDogPEljb25Zb3V0dWJlLz4sXG4gIG9rOiA8SWNvbk9kbm9rbGFzc25pa2kvPixcbiAgdms6IDxJY29uVmtvbnRha3RlLz4sXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IDxmb290ZXI+XG4gIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyBvcHRpb25zID0ge30gfSkgPT4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViXCI+XG4gICAgICAgIHsob3B0aW9ucy5zdWJzY3JpYmUgJiYgb3B0aW9ucy5zdWJzY3JpYmUuY29kZSAmJiBvcHRpb25zLnN1YnNjcmliZSAmJiBvcHRpb25zLnN1YnNjcmliZS5jb2RlLmZvcm0pICYmIDxmb3JtIGFjdGlvbj17b3B0aW9ucy5zdWJzY3JpYmUuY29kZS5mb3JtLmFjdGlvbn0gbWV0aG9kPXtvcHRpb25zLnN1YnNjcmliZS5jb2RlLmZvcm0ubWV0aG9kfT5cbiAgICAgICAgICA8RnJvdyBjb250YWluZXIgY2VudGVyZWQgaHVnPlxuICAgICAgICAgICAge29wdGlvbnMuc3Vic2NyaWJlLmNvZGUudGFncy5tYXAoKHRhZywgaSkgPT4ge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRhZy5hdHRycy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGlkZGVuJzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoPGlucHV0IGtleT17aX0gey4uLnRhZy5hdHRyc30vPilcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcm93IGtleT17aX0geHM9XCIxLzFcIiBtZD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi50YWcuYXR0cnN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RnJvdyBrZXk9e2l9IHhzPVwiMS8xXCIgbWQ9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57dGFnLmF0dHJzLnZhbHVlfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zyb3c+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoPGlucHV0IGtleT17aX0gey4uLnRhZy5hdHRyc30vPilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICA8L2Zvcm0+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICDCqSDQntCe0J4gXCLQodC+0LfQstC10LfQtNC40LVcIiAyMDE3LTIwMTguINCS0YHQtSDQv9GA0LDQstCwINC30LDRidC40YnQtdC90YsuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RnJvdyBjb250YWluZXIgY2VudGVyZWQ+XG4gICAgICAgICAgPEZyb3cgeHM9XCIxLzFcIiBtZD1cImF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+0KLQtdC70LXRhNC+0L06Jm5ic3A7KzcmbmJzcDs5ODUmbmJzcDswNTQmbmJzcDs1NCZuYnNwOzYzPC9kaXY+XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICAgIDxGcm93IHhzPVwiMS8xXCIgbWQ9XCJhdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5lLW1haWw6Jm5ic3A7PGEgaHJlZj1cIm1haWx0bzppbmZvQGZhbWlseTMucnVcIj5pbmZvQGZhbWlseTMucnU8L2E+PC9kaXY+XG4gICAgICAgICAgPC9Gcm93PlxuICAgICAgICA8L0Zyb3c+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsYm94XCI+XG4gICAgICAgICAgPEZyb3cgY29udGFpbmVyIGNlbnRlcmVkIGh1Zz5cbiAgICAgICAgICAgIHsob3B0aW9ucy5zb2NpYWwgJiYgb3B0aW9ucy5zb2NpYWwuaXRlbXMpICYmIG9wdGlvbnMuc29jaWFsLml0ZW1zLm1hcCgoeyBuYW1lLCBsaW5rIH0sIGkpID0+IDxhIGtleT17aX0gY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPntzb2NpYWxtZWRpYUljb25zW25hbWVdfTwvYT4pfVxuICAgICAgICAgIDwvRnJvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJveFwiPlxuICAgICAgICAgIENyZWF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vc3BlY2lkZWEudWtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TcGVjaWRlYTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApfTwvQXBwQ29udGV4dC5Db25zdW1lcj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5zdWIgOmdsb2JhbChhKSwgLmluZm8gOmdsb2JhbChhKSxcbiAgICAuc3ViIDpnbG9iYWwoYTp2aXNpdGVkKSwgLmluZm8gOmdsb2JhbChhOnZpc2l0ZWQpIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7VGhlbWUueHMuYm9yZGVyUmFkaXVzLmRlZmF1bHR9O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAwLjgzMzMzcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuMjg7XG4gICAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgbWluLXdpZHRoOiAxMS44NXJlbTtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtUaGVtZS5jb2xvcnMuYWNjZW50fTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtUaGVtZS54cy5ib3JkZXJSYWRpdXMuZGVmYXVsdH07XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBtaW4td2lkdGg6IDExLjg1cmVtO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgfVxuXG4gICAgLnN1YiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICAgICAgcGFkZGluZy10b3A6ICR7IFRoZW1lLnhzLnZyKDAuNzUpIH07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC43NSkgfTtcbiAgICB9XG5cbiAgICAuc3ViIC5ib3gge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogJHsgVGhlbWUueHMudnIoMC4yNSl9IDE1cHg7XG4gICAgfVxuXG4gICAgLmluZm8gLmJveCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICBwYWRkaW5nLXRvcDogJHsgVGhlbWUueHMudnIoMSkgfTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbmZvIC5saW5rIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMCAwLjMzMzMzcmVtO1xuICAgIH1cblxuICAgIC5pbmZvIC5saW5rIDpnbG9iYWwoc3ZnKSB7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGZpbGw6ICNmZmY7XG4gICAgfVxuXG4gICAgLmluZm8gLnNvY2lhbGJveCB7XG4gICAgICBtYXJnaW4tdG9wOiAkeyBUaGVtZS54cy52cigxKSB9O1xuICAgIH1cblxuICAgIC5ib3R0b20tYm94IHtcbiAgICAgIG1hcmdpbi10b3A6ICR7IFRoZW1lLnhzLnZyKDEpIH07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtUaGVtZS5tZC5ib3JkZXJSYWRpdXMuZGVmYXVsdH07XG4gICAgICAgIGZvbnQtc2l6ZTogMC43Nzc3OHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgIG1heC13aWR0aDogMTEuODVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDAuNzc3NzhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI7XG4gICAgICB9XG5cbiAgICAgIC5zdWIge1xuICAgICAgICBwYWRkaW5nLXRvcDogJHsgVGhlbWUubWQudnIoMC45MTY2NykgfTsgLyogYmFzZWxpbmUgZ3JpZCBhbGlnbm1lbnQgKi9cbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuMzMzMzMpIH07XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICR7IFRoZW1lLm1kLnZyKDEuNSkgfTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDEuODMzMzMpIH07XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIC5ib3gge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuMTY2NjdyZW0gNHB4O1xuICAgICAgfVxuXG4gICAgICAuaW5mbyAubGluayB7XG4gICAgICAgIG1hcmdpbjogMCAwLjM4ODg5cmVtO1xuICAgICAgfVxuXG4gICAgICAuaW5mbyAubGluayA6Z2xvYmFsKHN2Zykge1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuc3ViIC5idG4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICAuaW5mbyAuc29jaWFsYm94IHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHsgVGhlbWUubWQudnIoMS4yNSkgfTtcbiAgICAgIH1cbiAgICB9XG4gIGB9PC9zdHlsZT5cbjwvZm9vdGVyPlxuIl19 */\n/*@ sourceURL=src/next/components/Footer.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(0.25), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.borderRadius.default, __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(0.91667), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.33333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.5), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.83333), __WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].md.vr(1.25)]
  }));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export YaSearch */
/* unused harmony export Search */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("../../node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("../../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppContext__ = __webpack_require__("./components/AppContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WPLink__ = __webpack_require__("./components/WPLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icons__ = __webpack_require__("./components/Icons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DesktopMenu__ = __webpack_require__("./components/DesktopMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MobileMenu__ = __webpack_require__("./components/MobileMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FilterSlotFill__ = __webpack_require__("./components/FilterSlotFill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_utils__ = __webpack_require__("./lib/utils.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Header.js";












var YaSearch = function YaSearch() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: "\n<div class=\"ya-site-form ya-site-form_inited_no\" onclick=\"return {'action':'http://f3.dev.specidea.uk/search/','arrow':false,'bg':'transparent','fontsize':16,'fg':'#000000','language':'ru','logo':'ww','publicname':'Yandex Site Search #2327836','suggest':true,'target':'_self','tld':'ru','type':3,'usebigdictionary':true,'searchid':2327836,'input_fg':'#e4e4e4','input_bg':'#ec6b58','input_fontStyle':'normal','input_fontWeight':'normal','input_placeholder':'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441','input_placeholderColor':'#e4e4e4','input_borderColor':'#e4e4e4'}\"><form action=\"https://yandex.ru/search/site/\" method=\"get\" target=\"_self\" accept-charset=\"utf-8\"><input type=\"hidden\" name=\"searchid\" value=\"2327836\"/><input type=\"hidden\" name=\"l10n\" value=\"ru\"/><input type=\"hidden\" name=\"reqenc\" value=\"\"/><input type=\"search\" name=\"text\" value=\"\"/><input type=\"submit\" value=\"\u041D\u0430\u0439\u0442\u0438\"/></form></div><style type=\"text/css\">.ya-page_js_yes .ya-site-form_inited_no { display: none; }</style><script type=\"text/javascript\">(function(w,d,c){var s=d.createElement('script'),h=d.getElementsByTagName('script')[0],e=d.documentElement;if((' '+e.className+' ').indexOf(' ya-page_js_yes ')===-1){e.className+=' ya-page_js_yes';}s.type='text/javascript';s.async=true;s.charset='utf-8';s.src=(d.location.protocol==='https:'?'https:':'http:')+'//site.yandex.net/v2.0/js/all.js';h.parentNode.insertBefore(s,h);(w[c]||(w[c]=[])).push(function(){Ya.Site.Form.init()})})(window,document,'yandex_site_callbacks');</script>\n      "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-2485634531" + " " + "search"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2485634531",
    css: ".search.jsx-2485634531{padding:0 1.33333rem;margin-top:-0.27778rem;margin-bottom:-0.27778rem;position:relative;}.search.jsx-2485634531 table{width:400px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHZ0MsQUFPRSxxQkFOQSxFQU96QixxQkFONEIsMEJBQ1Isa0JBQ3BCIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBDb250ZXh0J1xuXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IFdQTGluayBmcm9tICcuL1dQTGluaydcbmltcG9ydCB7IExvZ29GYW1pbHlUcmVlLCBMb2dvRmFtaWx5VHJlZUNoYW5uZWwsIExvZ29GYW1pbHlUaW1lLCBJY29uU2VhcmNoIH0gZnJvbSAnLi9JY29ucydcbmltcG9ydCB7IERlc2t0b3BNYWluTWVudSwgRGVza3RvcFN1Yk1lbnUgfSBmcm9tICcuL0Rlc2t0b3BNZW51J1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9Nb2JpbGVNZW51J1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlclNsb3RGaWxsJ1xuaW1wb3J0IHsgZ290b1dQUm91dGUgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBZYVNlYXJjaCA9ICgpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGBcbjxkaXYgY2xhc3M9XCJ5YS1zaXRlLWZvcm0geWEtc2l0ZS1mb3JtX2luaXRlZF9ub1wiIG9uY2xpY2s9XCJyZXR1cm4geydhY3Rpb24nOidodHRwOi8vZjMuZGV2LnNwZWNpZGVhLnVrL3NlYXJjaC8nLCdhcnJvdyc6ZmFsc2UsJ2JnJzondHJhbnNwYXJlbnQnLCdmb250c2l6ZSc6MTYsJ2ZnJzonIzAwMDAwMCcsJ2xhbmd1YWdlJzoncnUnLCdsb2dvJzond3cnLCdwdWJsaWNuYW1lJzonWWFuZGV4IFNpdGUgU2VhcmNoICMyMzI3ODM2Jywnc3VnZ2VzdCc6dHJ1ZSwndGFyZ2V0JzonX3NlbGYnLCd0bGQnOidydScsJ3R5cGUnOjMsJ3VzZWJpZ2RpY3Rpb25hcnknOnRydWUsJ3NlYXJjaGlkJzoyMzI3ODM2LCdpbnB1dF9mZyc6JyNlNGU0ZTQnLCdpbnB1dF9iZyc6JyNlYzZiNTgnLCdpbnB1dF9mb250U3R5bGUnOidub3JtYWwnLCdpbnB1dF9mb250V2VpZ2h0Jzonbm9ybWFsJywnaW5wdXRfcGxhY2Vob2xkZXInOifQktCy0LXQtNC40YLQtSDQv9C+0LjRgdC60L7QstGL0Lkg0LfQsNC/0YDQvtGBJywnaW5wdXRfcGxhY2Vob2xkZXJDb2xvcic6JyNlNGU0ZTQnLCdpbnB1dF9ib3JkZXJDb2xvcic6JyNlNGU0ZTQnfVwiPjxmb3JtIGFjdGlvbj1cImh0dHBzOi8veWFuZGV4LnJ1L3NlYXJjaC9zaXRlL1wiIG1ldGhvZD1cImdldFwiIHRhcmdldD1cIl9zZWxmXCIgYWNjZXB0LWNoYXJzZXQ9XCJ1dGYtOFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNlYXJjaGlkXCIgdmFsdWU9XCIyMzI3ODM2XCIvPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImwxMG5cIiB2YWx1ZT1cInJ1XCIvPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlcWVuY1wiIHZhbHVlPVwiXCIvPjxpbnB1dCB0eXBlPVwic2VhcmNoXCIgbmFtZT1cInRleHRcIiB2YWx1ZT1cIlwiLz48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J3QsNC50YLQuFwiLz48L2Zvcm0+PC9kaXY+PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPi55YS1wYWdlX2pzX3llcyAueWEtc2l0ZS1mb3JtX2luaXRlZF9ubyB7IGRpc3BsYXk6IG5vbmU7IH08L3N0eWxlPjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPihmdW5jdGlvbih3LGQsYyl7dmFyIHM9ZC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSxoPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdLGU9ZC5kb2N1bWVudEVsZW1lbnQ7aWYoKCcgJytlLmNsYXNzTmFtZSsnICcpLmluZGV4T2YoJyB5YS1wYWdlX2pzX3llcyAnKT09PS0xKXtlLmNsYXNzTmFtZSs9JyB5YS1wYWdlX2pzX3llcyc7fXMudHlwZT0ndGV4dC9qYXZhc2NyaXB0JztzLmFzeW5jPXRydWU7cy5jaGFyc2V0PSd1dGYtOCc7cy5zcmM9KGQubG9jYXRpb24ucHJvdG9jb2w9PT0naHR0cHM6Jz8naHR0cHM6JzonaHR0cDonKSsnLy9zaXRlLnlhbmRleC5uZXQvdjIuMC9qcy9hbGwuanMnO2gucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocyxoKTsod1tjXXx8KHdbY109W10pKS5wdXNoKGZ1bmN0aW9uKCl7WWEuU2l0ZS5Gb3JtLmluaXQoKX0pfSkod2luZG93LGRvY3VtZW50LCd5YW5kZXhfc2l0ZV9jYWxsYmFja3MnKTs8L3NjcmlwdD5cbiAgICAgIGB9fS8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMS4zMzMzM3JlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNzc3OHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC4yNzc3OHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoIDpnbG9iYWwodGFibGUpIHtcbiAgICAgICAgICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuPC9GcmFnbWVudD5cbiAgKVxuXG5leHBvcnQgY29uc3QgU2VhcmNoID0gd2l0aFJvdXRlcigoeyByb3V0ZXIsIHZhcmlhbnQgPSBcImRlZmF1bHRcIn0pID0+IHtcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4vLyA/c2VhcmNoaWQ9MjMyNzgzNiZ0ZXh0PdC80LDQvNCwJndlYj0wXG4gIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtgc2VhcmNoICR7IHZhcmlhbnQgfWB9PlxuICAgIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyBuYW1lZFdQIH0pID0+IChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9C+0LjRgdC60L7QstGL0Lkg0LfQsNC/0YDQvtGBXCIgZGVmYXVsdFZhbHVlPXtyb3V0ZXIucXVlcnkudGV4dCB8fCAnJ30gcmVmPXtpbnB1dFJlZn0gb25LZXlVcD17KGUpID0+IHtcbiAgICAgICAgICBlLmtleUNvZGUgPT09IDEzICYmIGdvdG9XUFJvdXRlKHt3cDogbmFtZWRXUCgnc2VhcmNoJyksIGZyYWdtZW50OiB7c2VhcmNoaWQ6IDIzMjk3OTMsIHdlYjogMCwgdGV4dDogaW5wdXRSZWYuY3VycmVudC52YWx1ZX19KVxuICAgICAgICB9fSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGdvdG9XUFJvdXRlKHt3cDogbmFtZWRXUCgnc2VhcmNoJyksIGZyYWdtZW50OiB7c2VhcmNoaWQ6IDIzMjk3OTMsIHdlYjogMCwgdGV4dDogaW5wdXRSZWYuY3VycmVudC52YWx1ZX19KVxuICAgICAgICB9fT48SWNvblNlYXJjaC8+PC9idXR0b24+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWFyY2gge1xuICAgICAgICBwYWRkaW5nOiAwIDEuMzMzMzNyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjI3Nzc4cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC4yNzc3OHJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICBwYWRkaW5nOiAwLjc3N3JlbSAyLjMzMzMzcmVtIDAuNzc3cmVtIDEuMzMzMzNyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmJ0biB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaCA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNHB4KTtcbiAgICAgICAgcmlnaHQ6IGNhbGMoMS4zMzMzM3JlbSArIDEuNDQzNXJlbSAtIDE0cHgpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG5cbiAgICAgIC5kZWZhdWx0IGlucHV0IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAuZGVmYXVsdCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI2U0ZTRlNDtcbiAgICAgIH1cbiAgICAgIC5kZWZhdWx0IDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5ob21lcGFnZSBpbnB1dCB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgLmhvbWVwYWdlIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xuICAgICAgfVxuICAgICAgLmhvbWVwYWdlIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX0pXG5cbmV4cG9ydCBkZWZhdWx0ICh7Zmlyc3RQYWdlID0gZmFsc2UsIG1haW5NZW51ID0gW10sIHN1Yk1lbnUgPSBbXSwgdmFyaWFudCA9IGZpcnN0UGFnZSA/IFwiaG9tZXBhZ2VcIiA6IFwiZGVmYXVsdFwiIH0pID0+IHtcbiAgcmV0dXJuICg8aGVhZGVyPlxuICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlciAke3ZhcmlhbnR9YH0+XG4gICAgPEZyb3cgY29udGFpbmVyIHJvdz1cImJldHdlZW5cIiBpdGVtcz1cImVuZFwiPlxuICAgICAgPEFwcENvbnRleHQuQ29uc3VtZXI+eyh7IG5hbWVkV1AsIGdldExvZ28gfSkgPT4ge1xuICAgICAgICBjb25zdCBMb2dvID0gTG9nb0ZhbWlseVRyZWVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyb3cgc2hyaW5rPXsxfSBodWc+XG4gICAgICAgIHtmaXJzdFBhZ2UgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPjxMb2dvRmFtaWx5VHJlZSAvPjwvZGl2PlxuICAgICAgICAgIDpcbiAgICAgICAgICA8V1BMaW5rIHdwPXtuYW1lZFdQKFwiaG9tZXBhZ2VcIil9PjxhIGNsYXNzTmFtZT1cImxvZ29cIj48TG9nby8+PC9hPjwvV1BMaW5rPlxuICAgICAgICB9XG4gICAgICAgIDwvRnJvdz5cbiAgICAgICl9fTwvQXBwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIDxGcm93IGdyb3c9ezEwMH0gdmlzaWJsZT17W1wibWRcIiwgXCJsZ1wiXX0gaHVnPlxuICAgICAgICA8U2VhcmNoIHZhcmlhbnQ9e3ZhcmlhbnR9Lz5cbiAgICAgIDwvRnJvdz5cbiAgICAgIDxGcm93IGdyb3c9ezF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lXCI+KzcmbmJzcDs5ODUmbmJzcDswNTQmbmJzcDs1NCZuYnNwOzYzPC9kaXY+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8RnJvdyBzaHJpbms9ezF9IG15c2VsZj1cImNlbnRlclwiIHZpc2libGU9e1tcInhzXCIsIFwic21cIl19IGh1Zz5cbiAgICAgICAgPE1vYmlsZU1lbnUgbWFpbk1lbnU9e21haW5NZW51fS8+XG4gICAgICA8L0Zyb3c+XG4gICAgPC9Gcm93PlxuICAgIDxGcm93IGNvbnRhaW5lciByb3c9XCJiZXR3ZWVuXCIgaXRlbXM9XCJlbmRcIiBjbGFzc05hbWU9XCJoaWRkZW4teHMgaGlkZGVuLXNtXCIgbm93cmFwPlxuICAgICAgPEZyb3cgZ3Jvdz17MX0+XG4gICAgICAgIDxEZXNrdG9wTWFpbk1lbnUgbWVudT17bWFpbk1lbnV9IC8+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8RnJvdyBzaHJpbms9ezF9PlxuICAgICAgICA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgPFdQTGluayB3cD17bmFtZWRXUChcInByb2R1Y3RzLmNsdWJcIil9PjxhPjxMb2dvRmFtaWx5VGltZSBoZWlnaHQ9ezU1fSBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW46ICcycHggMTZweCAtMnB4IDAnfX0gLz48L2E+PC9XUExpbms+XG4gICAgICAgICAgICA8V1BMaW5rIHdwPXtuYW1lZFdQKFwicHJvZHVjdHMuY2hhbm5lbFwiKX0+PGE+PExvZ29GYW1pbHlUcmVlQ2hhbm5lbCBoZWlnaHQ9ezQwfSBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0vPjwvYT48L1dQTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICA8L0Zyb3c+XG4gICAgPC9Gcm93PlxuICA8L2Rpdj5cbiAgPEZpbHRlci5TbG90Lz5cbiAgPERlc2t0b3BTdWJNZW51IHN1Ym1lbnU9e3N1Yk1lbnV9Lz5cbiAgPHN0eWxlIGpzeD57YFxuICAgIGhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnBob25lIDpnbG9iYWwoYSkge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nLXRvcDogJHsgVGhlbWUueHMudnIoMC43NSl9O1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoJHsgVGhlbWUueHMudnIoMSl9IC0gNXB4KTtcbiAgICB9XG5cbiAgICAubG9nbyA6Z2xvYmFsKHN2Zykge1xuICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgIGhlaWdodDogNzRweDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgICAgLyogNTVweDsgKi9cbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDVweDsgKi9cbiAgICB9XG5cbiAgICAucGhvbmUge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgLmxvZ28tc2Vjb25kYXJ5IHtcbiAgICAgIG1hcmdpbi10b3A6ICR7IFRoZW1lLm1kLnZyKDAuMjUpIH07XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG5cbiAgICAuZGVmYXVsdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgfVxuICAgIC5kZWZhdWx0IDpnbG9iYWwoc3ZnKSB7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgIH1cbiAgICAuZGVmYXVsdCAucGhvbmUge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmRlZmF1bHQgLmxvZ28tc2Vjb25kYXJ5IDpnbG9iYWwoc3ZnKSB7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgIH1cblxuICAgIC5kZWZhdWx0IC50b3AtbWVudS1hY3RpdmUge1xuICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICB9XG5cblxuXG4gICAgLmhvbWVwYWdlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgfVxuICAgIC5ob21lcGFnZSA6Z2xvYmFsKHN2Zykge1xuICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgIH1cbiAgICAuaG9tZXBhZ2UgLnBob25lIHtcbiAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgfVxuXG4gICAgLmhvbWVwYWdlIC5sb2dvLXNlY29uZGFyeSA6Z2xvYmFsKHN2Zykge1xuICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgIH1cblxuICAgIC5ob21lcGFnZSAudG9wLW1lbnUtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAkeyBUaGVtZS5tZC52cigxLjc1KX07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjk0NDQ0cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgfVxuXG4gICAgICAubG9nbyA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBoZWlnaHQ6IDExOHB4OyAvKiA5NXB4OyAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjNweCk7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yM3B4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2hlYWRlcj4pfVxuIl19 */\n/*@ sourceURL=src/next/components/Header.js */"
  }));
};
var Search = Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(function (_ref) {
  var router = _ref.router,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant;
  var inputRef = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef(); // ?searchid=2327836&text=мама&web=0

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3759747975", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent]]]) + " " + "search ".concat(variant)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, function (_ref2) {
    var namedWP = _ref2.namedWP;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
      type: "text",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",
      defaultValue: router.query.text || '',
      ref: inputRef,
      onKeyUp: function onKeyUp(e) {
        e.keyCode === 13 && Object(__WEBPACK_IMPORTED_MODULE_11__lib_utils__["d" /* gotoWPRoute */])({
          wp: namedWP('search'),
          fragment: {
            searchid: 2329793,
            web: 0,
            text: inputRef.current.value
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3759747975", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      onClick: function onClick() {
        Object(__WEBPACK_IMPORTED_MODULE_11__lib_utils__["d" /* gotoWPRoute */])({
          wp: namedWP('search'),
          fragment: {
            searchid: 2329793,
            web: 0,
            text: inputRef.current.value
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3759747975", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent]]]) + " " + "btn"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["g" /* IconSearch */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    })));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3759747975",
    css: ".search.__jsx-style-dynamic-selector{padding:0 1.33333rem;margin-top:-0.27778rem;margin-bottom:-0.27778rem;position:relative;}input.__jsx-style-dynamic-selector{border:1px solid #e4e4e4;padding:0.777rem 2.33333rem 0.777rem 1.33333rem;width:100%;background:none;color:#333;}.btn.__jsx-style-dynamic-selector{border:none;background:none;padding:0;}.search.__jsx-style-dynamic-selector svg{position:absolute;top:calc(50% - 14px);right:calc(1.33333rem + 1.4435rem - 14px);display:inline-block;width:28px;height:28px;cursor:pointer;}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#999;}input.__jsx-style-dynamic-selector::-moz-placeholder{color:#999;}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#999;}input.__jsx-style-dynamic-selector::placeholder{color:#999;}.default.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{color:#fff;}.default.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#e4e4e4;}.default.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-moz-placeholder{color:#e4e4e4;}.default.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#e4e4e4;}.default.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::placeholder{color:#e4e4e4;}.default.__jsx-style-dynamic-selector svg{fill:#fff;}.homepage.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{color:#000;}.homepage.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#e4e4e4;}.homepage.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-moz-placeholder{color:#e4e4e4;}.homepage.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#e4e4e4;}.homepage.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::placeholder{color:#e4e4e4;}.homepage.__jsx-style-dynamic-selector svg{fill:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEZ0IsQUFHOEIsQUFNSSxBQVFiLEFBTU0sQUFVUCxBQUlBLEFBR0csQUFHSixBQUlDLEFBR0csQUFHb0IsVUFUcEMsQ0FWQSxBQUlBLEFBVUEsQ0E5QmtCLEVBdUJsQixBQVVBLElBM0J1QixHQXBCRSxJQU15QixHQVN0QyxNQW1DWixJQWxDQSxDQUs0QyxLQXBCaEIsMEJBQ1IsR0FLUCxRQWVVLEdBZEwsSUFMbEIsWUFNYSxFQWNBLFNBYmIsRUFjYyxZQUNHLGVBQ2pCIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL015Q29tcHV0ZXIvTXlXb3JrL2ZhbWlseTMtZWRnZS1idWciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBDb250ZXh0J1xuXG5pbXBvcnQgRnJvdyBmcm9tICcuL0Zyb3cnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IFdQTGluayBmcm9tICcuL1dQTGluaydcbmltcG9ydCB7IExvZ29GYW1pbHlUcmVlLCBMb2dvRmFtaWx5VHJlZUNoYW5uZWwsIExvZ29GYW1pbHlUaW1lLCBJY29uU2VhcmNoIH0gZnJvbSAnLi9JY29ucydcbmltcG9ydCB7IERlc2t0b3BNYWluTWVudSwgRGVza3RvcFN1Yk1lbnUgfSBmcm9tICcuL0Rlc2t0b3BNZW51J1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9Nb2JpbGVNZW51J1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlclNsb3RGaWxsJ1xuaW1wb3J0IHsgZ290b1dQUm91dGUgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBZYVNlYXJjaCA9ICgpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGBcbjxkaXYgY2xhc3M9XCJ5YS1zaXRlLWZvcm0geWEtc2l0ZS1mb3JtX2luaXRlZF9ub1wiIG9uY2xpY2s9XCJyZXR1cm4geydhY3Rpb24nOidodHRwOi8vZjMuZGV2LnNwZWNpZGVhLnVrL3NlYXJjaC8nLCdhcnJvdyc6ZmFsc2UsJ2JnJzondHJhbnNwYXJlbnQnLCdmb250c2l6ZSc6MTYsJ2ZnJzonIzAwMDAwMCcsJ2xhbmd1YWdlJzoncnUnLCdsb2dvJzond3cnLCdwdWJsaWNuYW1lJzonWWFuZGV4IFNpdGUgU2VhcmNoICMyMzI3ODM2Jywnc3VnZ2VzdCc6dHJ1ZSwndGFyZ2V0JzonX3NlbGYnLCd0bGQnOidydScsJ3R5cGUnOjMsJ3VzZWJpZ2RpY3Rpb25hcnknOnRydWUsJ3NlYXJjaGlkJzoyMzI3ODM2LCdpbnB1dF9mZyc6JyNlNGU0ZTQnLCdpbnB1dF9iZyc6JyNlYzZiNTgnLCdpbnB1dF9mb250U3R5bGUnOidub3JtYWwnLCdpbnB1dF9mb250V2VpZ2h0Jzonbm9ybWFsJywnaW5wdXRfcGxhY2Vob2xkZXInOifQktCy0LXQtNC40YLQtSDQv9C+0LjRgdC60L7QstGL0Lkg0LfQsNC/0YDQvtGBJywnaW5wdXRfcGxhY2Vob2xkZXJDb2xvcic6JyNlNGU0ZTQnLCdpbnB1dF9ib3JkZXJDb2xvcic6JyNlNGU0ZTQnfVwiPjxmb3JtIGFjdGlvbj1cImh0dHBzOi8veWFuZGV4LnJ1L3NlYXJjaC9zaXRlL1wiIG1ldGhvZD1cImdldFwiIHRhcmdldD1cIl9zZWxmXCIgYWNjZXB0LWNoYXJzZXQ9XCJ1dGYtOFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNlYXJjaGlkXCIgdmFsdWU9XCIyMzI3ODM2XCIvPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImwxMG5cIiB2YWx1ZT1cInJ1XCIvPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlcWVuY1wiIHZhbHVlPVwiXCIvPjxpbnB1dCB0eXBlPVwic2VhcmNoXCIgbmFtZT1cInRleHRcIiB2YWx1ZT1cIlwiLz48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J3QsNC50YLQuFwiLz48L2Zvcm0+PC9kaXY+PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPi55YS1wYWdlX2pzX3llcyAueWEtc2l0ZS1mb3JtX2luaXRlZF9ubyB7IGRpc3BsYXk6IG5vbmU7IH08L3N0eWxlPjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPihmdW5jdGlvbih3LGQsYyl7dmFyIHM9ZC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSxoPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdLGU9ZC5kb2N1bWVudEVsZW1lbnQ7aWYoKCcgJytlLmNsYXNzTmFtZSsnICcpLmluZGV4T2YoJyB5YS1wYWdlX2pzX3llcyAnKT09PS0xKXtlLmNsYXNzTmFtZSs9JyB5YS1wYWdlX2pzX3llcyc7fXMudHlwZT0ndGV4dC9qYXZhc2NyaXB0JztzLmFzeW5jPXRydWU7cy5jaGFyc2V0PSd1dGYtOCc7cy5zcmM9KGQubG9jYXRpb24ucHJvdG9jb2w9PT0naHR0cHM6Jz8naHR0cHM6JzonaHR0cDonKSsnLy9zaXRlLnlhbmRleC5uZXQvdjIuMC9qcy9hbGwuanMnO2gucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocyxoKTsod1tjXXx8KHdbY109W10pKS5wdXNoKGZ1bmN0aW9uKCl7WWEuU2l0ZS5Gb3JtLmluaXQoKX0pfSkod2luZG93LGRvY3VtZW50LCd5YW5kZXhfc2l0ZV9jYWxsYmFja3MnKTs8L3NjcmlwdD5cbiAgICAgIGB9fS8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMS4zMzMzM3JlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNzc3OHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC4yNzc3OHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoIDpnbG9iYWwodGFibGUpIHtcbiAgICAgICAgICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuPC9GcmFnbWVudD5cbiAgKVxuXG5leHBvcnQgY29uc3QgU2VhcmNoID0gd2l0aFJvdXRlcigoeyByb3V0ZXIsIHZhcmlhbnQgPSBcImRlZmF1bHRcIn0pID0+IHtcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4vLyA/c2VhcmNoaWQ9MjMyNzgzNiZ0ZXh0PdC80LDQvNCwJndlYj0wXG4gIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtgc2VhcmNoICR7IHZhcmlhbnQgfWB9PlxuICAgIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyBuYW1lZFdQIH0pID0+IChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9C+0LjRgdC60L7QstGL0Lkg0LfQsNC/0YDQvtGBXCIgZGVmYXVsdFZhbHVlPXtyb3V0ZXIucXVlcnkudGV4dCB8fCAnJ30gcmVmPXtpbnB1dFJlZn0gb25LZXlVcD17KGUpID0+IHtcbiAgICAgICAgICBlLmtleUNvZGUgPT09IDEzICYmIGdvdG9XUFJvdXRlKHt3cDogbmFtZWRXUCgnc2VhcmNoJyksIGZyYWdtZW50OiB7c2VhcmNoaWQ6IDIzMjk3OTMsIHdlYjogMCwgdGV4dDogaW5wdXRSZWYuY3VycmVudC52YWx1ZX19KVxuICAgICAgICB9fSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGdvdG9XUFJvdXRlKHt3cDogbmFtZWRXUCgnc2VhcmNoJyksIGZyYWdtZW50OiB7c2VhcmNoaWQ6IDIzMjk3OTMsIHdlYjogMCwgdGV4dDogaW5wdXRSZWYuY3VycmVudC52YWx1ZX19KVxuICAgICAgICB9fT48SWNvblNlYXJjaC8+PC9idXR0b24+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWFyY2gge1xuICAgICAgICBwYWRkaW5nOiAwIDEuMzMzMzNyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjI3Nzc4cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC4yNzc3OHJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICBwYWRkaW5nOiAwLjc3N3JlbSAyLjMzMzMzcmVtIDAuNzc3cmVtIDEuMzMzMzNyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmJ0biB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaCA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNHB4KTtcbiAgICAgICAgcmlnaHQ6IGNhbGMoMS4zMzMzM3JlbSArIDEuNDQzNXJlbSAtIDE0cHgpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG5cbiAgICAgIC5kZWZhdWx0IGlucHV0IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAuZGVmYXVsdCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI2U0ZTRlNDtcbiAgICAgIH1cbiAgICAgIC5kZWZhdWx0IDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5ob21lcGFnZSBpbnB1dCB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgLmhvbWVwYWdlIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xuICAgICAgfVxuICAgICAgLmhvbWVwYWdlIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGZpbGw6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX0pXG5cbmV4cG9ydCBkZWZhdWx0ICh7Zmlyc3RQYWdlID0gZmFsc2UsIG1haW5NZW51ID0gW10sIHN1Yk1lbnUgPSBbXSwgdmFyaWFudCA9IGZpcnN0UGFnZSA/IFwiaG9tZXBhZ2VcIiA6IFwiZGVmYXVsdFwiIH0pID0+IHtcbiAgcmV0dXJuICg8aGVhZGVyPlxuICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlciAke3ZhcmlhbnR9YH0+XG4gICAgPEZyb3cgY29udGFpbmVyIHJvdz1cImJldHdlZW5cIiBpdGVtcz1cImVuZFwiPlxuICAgICAgPEFwcENvbnRleHQuQ29uc3VtZXI+eyh7IG5hbWVkV1AsIGdldExvZ28gfSkgPT4ge1xuICAgICAgICBjb25zdCBMb2dvID0gTG9nb0ZhbWlseVRyZWVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyb3cgc2hyaW5rPXsxfSBodWc+XG4gICAgICAgIHtmaXJzdFBhZ2UgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPjxMb2dvRmFtaWx5VHJlZSAvPjwvZGl2PlxuICAgICAgICAgIDpcbiAgICAgICAgICA8V1BMaW5rIHdwPXtuYW1lZFdQKFwiaG9tZXBhZ2VcIil9PjxhIGNsYXNzTmFtZT1cImxvZ29cIj48TG9nby8+PC9hPjwvV1BMaW5rPlxuICAgICAgICB9XG4gICAgICAgIDwvRnJvdz5cbiAgICAgICl9fTwvQXBwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIDxGcm93IGdyb3c9ezEwMH0gdmlzaWJsZT17W1wibWRcIiwgXCJsZ1wiXX0gaHVnPlxuICAgICAgICA8U2VhcmNoIHZhcmlhbnQ9e3ZhcmlhbnR9Lz5cbiAgICAgIDwvRnJvdz5cbiAgICAgIDxGcm93IGdyb3c9ezF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lXCI+KzcmbmJzcDs5ODUmbmJzcDswNTQmbmJzcDs1NCZuYnNwOzYzPC9kaXY+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8RnJvdyBzaHJpbms9ezF9IG15c2VsZj1cImNlbnRlclwiIHZpc2libGU9e1tcInhzXCIsIFwic21cIl19IGh1Zz5cbiAgICAgICAgPE1vYmlsZU1lbnUgbWFpbk1lbnU9e21haW5NZW51fS8+XG4gICAgICA8L0Zyb3c+XG4gICAgPC9Gcm93PlxuICAgIDxGcm93IGNvbnRhaW5lciByb3c9XCJiZXR3ZWVuXCIgaXRlbXM9XCJlbmRcIiBjbGFzc05hbWU9XCJoaWRkZW4teHMgaGlkZGVuLXNtXCIgbm93cmFwPlxuICAgICAgPEZyb3cgZ3Jvdz17MX0+XG4gICAgICAgIDxEZXNrdG9wTWFpbk1lbnUgbWVudT17bWFpbk1lbnV9IC8+XG4gICAgICA8L0Zyb3c+XG4gICAgICA8RnJvdyBzaHJpbms9ezF9PlxuICAgICAgICA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgPFdQTGluayB3cD17bmFtZWRXUChcInByb2R1Y3RzLmNsdWJcIil9PjxhPjxMb2dvRmFtaWx5VGltZSBoZWlnaHQ9ezU1fSBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW46ICcycHggMTZweCAtMnB4IDAnfX0gLz48L2E+PC9XUExpbms+XG4gICAgICAgICAgICA8V1BMaW5rIHdwPXtuYW1lZFdQKFwicHJvZHVjdHMuY2hhbm5lbFwiKX0+PGE+PExvZ29GYW1pbHlUcmVlQ2hhbm5lbCBoZWlnaHQ9ezQwfSBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0vPjwvYT48L1dQTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICA8L0Zyb3c+XG4gICAgPC9Gcm93PlxuICA8L2Rpdj5cbiAgPEZpbHRlci5TbG90Lz5cbiAgPERlc2t0b3BTdWJNZW51IHN1Ym1lbnU9e3N1Yk1lbnV9Lz5cbiAgPHN0eWxlIGpzeD57YFxuICAgIGhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnBob25lIDpnbG9iYWwoYSkge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nLXRvcDogJHsgVGhlbWUueHMudnIoMC43NSl9O1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoJHsgVGhlbWUueHMudnIoMSl9IC0gNXB4KTtcbiAgICB9XG5cbiAgICAubG9nbyA6Z2xvYmFsKHN2Zykge1xuICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgIGhlaWdodDogNzRweDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgICAgLyogNTVweDsgKi9cbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDVweDsgKi9cbiAgICB9XG5cbiAgICAucGhvbmUge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgLmxvZ28tc2Vjb25kYXJ5IHtcbiAgICAgIG1hcmdpbi10b3A6ICR7IFRoZW1lLm1kLnZyKDAuMjUpIH07XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuXG5cbiAgICAuZGVmYXVsdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgfVxuICAgIC5kZWZhdWx0IDpnbG9iYWwoc3ZnKSB7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgIH1cbiAgICAuZGVmYXVsdCAucGhvbmUge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmRlZmF1bHQgLmxvZ28tc2Vjb25kYXJ5IDpnbG9iYWwoc3ZnKSB7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgIH1cblxuICAgIC5kZWZhdWx0IC50b3AtbWVudS1hY3RpdmUge1xuICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICB9XG5cblxuXG4gICAgLmhvbWVwYWdlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgfVxuICAgIC5ob21lcGFnZSA6Z2xvYmFsKHN2Zykge1xuICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgIH1cbiAgICAuaG9tZXBhZ2UgLnBob25lIHtcbiAgICAgIGNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgfVxuXG4gICAgLmhvbWVwYWdlIC5sb2dvLXNlY29uZGFyeSA6Z2xvYmFsKHN2Zykge1xuICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgIH1cblxuICAgIC5ob21lcGFnZSAudG9wLW1lbnUtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAkeyBUaGVtZS5tZC52cigxLjc1KX07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjk0NDQ0cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS5tZC52cigwLjc1KSB9O1xuICAgICAgfVxuXG4gICAgICAubG9nbyA6Z2xvYmFsKHN2Zykge1xuICAgICAgICBoZWlnaHQ6IDExOHB4OyAvKiA5NXB4OyAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjNweCk7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yM3B4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2hlYWRlcj4pfVxuIl19 */\n/*@ sourceURL=src/next/components/Header.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent]
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (function (_ref3) {
  var _ref3$firstPage = _ref3.firstPage,
      firstPage = _ref3$firstPage === void 0 ? false : _ref3$firstPage,
      _ref3$mainMenu = _ref3.mainMenu,
      mainMenu = _ref3$mainMenu === void 0 ? [] : _ref3$mainMenu,
      _ref3$subMenu = _ref3.subMenu,
      subMenu = _ref3$subMenu === void 0 ? [] : _ref3$subMenu,
      _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? firstPage ? "homepage" : "default" : _ref3$variant;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]]) + " " + "header ".concat(variant)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    row: "between",
    items: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, function (_ref4) {
    var namedWP = _ref4.namedWP,
        getLogo = _ref4.getLogo;
    var Logo = __WEBPACK_IMPORTED_MODULE_7__Icons__["r" /* LogoFamilyTree */];
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
      shrink: 1,
      hug: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      }
    }, firstPage ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]]) + " " + "logo"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["r" /* LogoFamilyTree */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      }
    })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WPLink__["a" /* default */], {
      wp: namedWP("homepage"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]]) + " " + "logo"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Logo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      }
    }))));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    grow: 100,
    visible: ["md", "lg"],
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Search, {
    variant: variant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    grow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]]) + " " + "phone"
  }, "+7\xA0985\xA0054\xA054\xA063")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    shrink: 1,
    myself: "center",
    visible: ["xs", "sm"],
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__MobileMenu__["a" /* default */], {
    mainMenu: mainMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    container: true,
    row: "between",
    items: "end",
    className: "hidden-xs hidden-sm",
    nowrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    grow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__DesktopMenu__["a" /* DesktopMainMenu */], {
    menu: mainMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Frow__["a" /* default */], {
    shrink: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, function (_ref5) {
    var namedWP = _ref5.namedWP;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]]) + " " + "logo-secondary"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WPLink__["a" /* default */], {
      wp: namedWP("products.club"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["q" /* LogoFamilyTime */], {
      height: 55,
      style: {
        display: 'inline-block',
        margin: '2px 16px -2px 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      }
    }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WPLink__["a" /* default */], {
      wp: namedWP("products.channel"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["972423177", [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]]])
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["s" /* LogoFamilyTreeChannel */], {
      height: 40,
      style: {
        display: 'inline-block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      }
    }))));
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__FilterSlotFill__["a" /* default */].Slot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__DesktopMenu__["b" /* DesktopSubMenu */], {
    submenu: subMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "972423177",
    css: "header.__jsx-style-dynamic-selector{position:relative;}.phone.__jsx-style-dynamic-selector a{color:#fff;}.header.__jsx-style-dynamic-selector{padding-top:".concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), ";padding-bottom:calc(").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), " - 5px);}.logo.__jsx-style-dynamic-selector svg{margin-top:-2px;height:74px;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);}.phone.__jsx-style-dynamic-selector{font-size:1.5rem;text-align:center;color:#fff;font-weight:300;}.logo-secondary.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), ";white-space:nowrap;}.default.__jsx-style-dynamic-selector{background-color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, ";}.default.__jsx-style-dynamic-selector svg{fill:#fff;}.default.__jsx-style-dynamic-selector .phone.__jsx-style-dynamic-selector{color:#fff;}.default.__jsx-style-dynamic-selector .logo-secondary.__jsx-style-dynamic-selector svg{fill:#fff;}.default.__jsx-style-dynamic-selector .top-menu-active.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, ";}.homepage.__jsx-style-dynamic-selector{background-color:none;}.homepage.__jsx-style-dynamic-selector svg{fill:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, ";}.homepage.__jsx-style-dynamic-selector .phone.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, ";}.homepage.__jsx-style-dynamic-selector .logo-secondary.__jsx-style-dynamic-selector svg{fill:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, ";}.homepage.__jsx-style-dynamic-selector .top-menu-active.__jsx-style-dynamic-selector{color:#fff;}@media (min-width:992px){.header.__jsx-style-dynamic-selector{padding-top:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), ";padding-bottom:0.94444rem;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75), ";}.logo.__jsx-style-dynamic-selector svg{height:118px;-webkit-transform:translateY(23px);-ms-transform:translateY(23px);transform:translateY(23px);margin-top:-23px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9KYyxBQUd5QixBQUlQLEFBSThCLEFBS3pCLEFBUUMsQUFPdUIsQUFPTSxBQUdwQyxBQUdDLEFBSUQsQUFJeUIsQUFNYixBQUdZLEFBR0MsQUFJRCxBQUl2QixBQUtnQyxBQU01QixVQXpDakIsQUFPQSxDQXpDQSxBQXFDQSxBQTRCQSxFQVcrQixHQW5FakIsQ0FRTSxDQXJCcEIsSUF1REEsTUF6QzRCLE1BNEM1QixBQU9BLENBM0NhLEFBMkJiLEFBWUEsS0FqQ3FCLENBcEJxQyxBQWtFNUIsS0FuRFosQUFZbEIsYUFOQSxHQUxBLEtBbUQrQyw4QkFsRS9DLFNBd0VnQyxJQUw5QixRQTNERixnQkFpRUUiLCJmaWxlIjoic3JjL25leHQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRleHQnXG5cbmltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgV1BMaW5rIGZyb20gJy4vV1BMaW5rJ1xuaW1wb3J0IHsgTG9nb0ZhbWlseVRyZWUsIExvZ29GYW1pbHlUcmVlQ2hhbm5lbCwgTG9nb0ZhbWlseVRpbWUsIEljb25TZWFyY2ggfSBmcm9tICcuL0ljb25zJ1xuaW1wb3J0IHsgRGVza3RvcE1haW5NZW51LCBEZXNrdG9wU3ViTWVudSB9IGZyb20gJy4vRGVza3RvcE1lbnUnXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL01vYmlsZU1lbnUnXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyU2xvdEZpbGwnXG5pbXBvcnQgeyBnb3RvV1BSb3V0ZSB9IGZyb20gJy4uL2xpYi91dGlscydcblxuZXhwb3J0IGNvbnN0IFlhU2VhcmNoID0gKCkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYFxuPGRpdiBjbGFzcz1cInlhLXNpdGUtZm9ybSB5YS1zaXRlLWZvcm1faW5pdGVkX25vXCIgb25jbGljaz1cInJldHVybiB7J2FjdGlvbic6J2h0dHA6Ly9mMy5kZXYuc3BlY2lkZWEudWsvc2VhcmNoLycsJ2Fycm93JzpmYWxzZSwnYmcnOid0cmFuc3BhcmVudCcsJ2ZvbnRzaXplJzoxNiwnZmcnOicjMDAwMDAwJywnbGFuZ3VhZ2UnOidydScsJ2xvZ28nOid3dycsJ3B1YmxpY25hbWUnOidZYW5kZXggU2l0ZSBTZWFyY2ggIzIzMjc4MzYnLCdzdWdnZXN0Jzp0cnVlLCd0YXJnZXQnOidfc2VsZicsJ3RsZCc6J3J1JywndHlwZSc6MywndXNlYmlnZGljdGlvbmFyeSc6dHJ1ZSwnc2VhcmNoaWQnOjIzMjc4MzYsJ2lucHV0X2ZnJzonI2U0ZTRlNCcsJ2lucHV0X2JnJzonI2VjNmI1OCcsJ2lucHV0X2ZvbnRTdHlsZSc6J25vcm1hbCcsJ2lucHV0X2ZvbnRXZWlnaHQnOidub3JtYWwnLCdpbnB1dF9wbGFjZWhvbGRlcic6J9CS0LLQtdC00LjRgtC1INC/0L7QuNGB0LrQvtCy0YvQuSDQt9Cw0L/RgNC+0YEnLCdpbnB1dF9wbGFjZWhvbGRlckNvbG9yJzonI2U0ZTRlNCcsJ2lucHV0X2JvcmRlckNvbG9yJzonI2U0ZTRlNCd9XCI+PGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly95YW5kZXgucnUvc2VhcmNoL3NpdGUvXCIgbWV0aG9kPVwiZ2V0XCIgdGFyZ2V0PVwiX3NlbGZcIiBhY2NlcHQtY2hhcnNldD1cInV0Zi04XCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2VhcmNoaWRcIiB2YWx1ZT1cIjIzMjc4MzZcIi8+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibDEwblwiIHZhbHVlPVwicnVcIi8+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVxZW5jXCIgdmFsdWU9XCJcIi8+PGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwidGV4dFwiIHZhbHVlPVwiXCIvPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQndCw0LnRgtC4XCIvPjwvZm9ybT48L2Rpdj48c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+LnlhLXBhZ2VfanNfeWVzIC55YS1zaXRlLWZvcm1faW5pdGVkX25vIHsgZGlzcGxheTogbm9uZTsgfTwvc3R5bGU+PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+KGZ1bmN0aW9uKHcsZCxjKXt2YXIgcz1kLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLGg9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0sZT1kLmRvY3VtZW50RWxlbWVudDtpZigoJyAnK2UuY2xhc3NOYW1lKycgJykuaW5kZXhPZignIHlhLXBhZ2VfanNfeWVzICcpPT09LTEpe2UuY2xhc3NOYW1lKz0nIHlhLXBhZ2VfanNfeWVzJzt9cy50eXBlPSd0ZXh0L2phdmFzY3JpcHQnO3MuYXN5bmM9dHJ1ZTtzLmNoYXJzZXQ9J3V0Zi04JztzLnNyYz0oZC5sb2NhdGlvbi5wcm90b2NvbD09PSdodHRwczonPydodHRwczonOidodHRwOicpKycvL3NpdGUueWFuZGV4Lm5ldC92Mi4wL2pzL2FsbC5qcyc7aC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzLGgpOyh3W2NdfHwod1tjXT1bXSkpLnB1c2goZnVuY3Rpb24oKXtZYS5TaXRlLkZvcm0uaW5pdCgpfSl9KSh3aW5kb3csZG9jdW1lbnQsJ3lhbmRleF9zaXRlX2NhbGxiYWNrcycpOzwvc2NyaXB0PlxuICAgICAgYH19Lz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxLjMzMzMzcmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjI3Nzc4cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjI3Nzc4cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2ggOmdsb2JhbCh0YWJsZSkge1xuICAgICAgICAgIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG48L0ZyYWdtZW50PlxuICApXG5cbmV4cG9ydCBjb25zdCBTZWFyY2ggPSB3aXRoUm91dGVyKCh7IHJvdXRlciwgdmFyaWFudCA9IFwiZGVmYXVsdFwifSkgPT4ge1xuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbi8vID9zZWFyY2hpZD0yMzI3ODM2JnRleHQ90LzQsNC80LAmd2ViPTBcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9e2BzZWFyY2ggJHsgdmFyaWFudCB9YH0+XG4gICAgPEFwcENvbnRleHQuQ29uc3VtZXI+eyh7IG5hbWVkV1AgfSkgPT4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0L7QuNGB0LrQvtCy0YvQuSDQt9Cw0L/RgNC+0YFcIiBkZWZhdWx0VmFsdWU9e3JvdXRlci5xdWVyeS50ZXh0IHx8ICcnfSByZWY9e2lucHV0UmVmfSBvbktleVVwPXsoZSkgPT4ge1xuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgZ290b1dQUm91dGUoe3dwOiBuYW1lZFdQKCdzZWFyY2gnKSwgZnJhZ21lbnQ6IHtzZWFyY2hpZDogMjMyOTc5Mywgd2ViOiAwLCB0ZXh0OiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlfX0pXG4gICAgICAgIH19IC8+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZ290b1dQUm91dGUoe3dwOiBuYW1lZFdQKCdzZWFyY2gnKSwgZnJhZ21lbnQ6IHtzZWFyY2hpZDogMjMyOTc5Mywgd2ViOiAwLCB0ZXh0OiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlfX0pXG4gICAgICAgIH19PjxJY29uU2VhcmNoLz48L2J1dHRvbj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNlYXJjaCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMS4zMzMzM3JlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuMjc3NzhyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjI3Nzc4cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgIHBhZGRpbmc6IDAuNzc3cmVtIDIuMzMzMzNyZW0gMC43NzdyZW0gMS4zMzMzM3JlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuXG4gICAgICAuYnRuIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xuICAgICAgICByaWdodDogY2FsYygxLjMzMzMzcmVtICsgMS40NDM1cmVtIC0gMTRweCk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cblxuICAgICAgLmRlZmF1bHQgaW5wdXQge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5kZWZhdWx0IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xuICAgICAgfVxuICAgICAgLmRlZmF1bHQgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLmhvbWVwYWdlIGlucHV0IHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgICAuaG9tZXBhZ2UgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XG4gICAgICB9XG4gICAgICAuaG9tZXBhZ2UgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgZmlsbDogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pfSlcblxuZXhwb3J0IGRlZmF1bHQgKHtmaXJzdFBhZ2UgPSBmYWxzZSwgbWFpbk1lbnUgPSBbXSwgc3ViTWVudSA9IFtdLCB2YXJpYW50ID0gZmlyc3RQYWdlID8gXCJob21lcGFnZVwiIDogXCJkZWZhdWx0XCIgfSkgPT4ge1xuICByZXR1cm4gKDxoZWFkZXI+XG4gIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyICR7dmFyaWFudH1gfT5cbiAgICA8RnJvdyBjb250YWluZXIgcm93PVwiYmV0d2VlblwiIGl0ZW1zPVwiZW5kXCI+XG4gICAgICA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCwgZ2V0TG9nbyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IExvZ28gPSBMb2dvRmFtaWx5VHJlZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8RnJvdyBzaHJpbms9ezF9IGh1Zz5cbiAgICAgICAge2ZpcnN0UGFnZSA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PExvZ29GYW1pbHlUcmVlIC8+PC9kaXY+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxXUExpbmsgd3A9e25hbWVkV1AoXCJob21lcGFnZVwiKX0+PGEgY2xhc3NOYW1lPVwibG9nb1wiPjxMb2dvLz48L2E+PC9XUExpbms+XG4gICAgICAgIH1cbiAgICAgICAgPC9Gcm93PlxuICAgICAgKX19PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgPEZyb3cgZ3Jvdz17MTAwfSB2aXNpYmxlPXtbXCJtZFwiLCBcImxnXCJdfSBodWc+XG4gICAgICAgIDxTZWFyY2ggdmFyaWFudD17dmFyaWFudH0vPlxuICAgICAgPC9Gcm93PlxuICAgICAgPEZyb3cgZ3Jvdz17MX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmVcIj4rNyZuYnNwOzk4NSZuYnNwOzA1NCZuYnNwOzU0Jm5ic3A7NjM8L2Rpdj5cbiAgICAgIDwvRnJvdz5cbiAgICAgIDxGcm93IHNocmluaz17MX0gbXlzZWxmPVwiY2VudGVyXCIgdmlzaWJsZT17W1wieHNcIiwgXCJzbVwiXX0gaHVnPlxuICAgICAgICA8TW9iaWxlTWVudSBtYWluTWVudT17bWFpbk1lbnV9Lz5cbiAgICAgIDwvRnJvdz5cbiAgICA8L0Zyb3c+XG4gICAgPEZyb3cgY29udGFpbmVyIHJvdz1cImJldHdlZW5cIiBpdGVtcz1cImVuZFwiIGNsYXNzTmFtZT1cImhpZGRlbi14cyBoaWRkZW4tc21cIiBub3dyYXA+XG4gICAgICA8RnJvdyBncm93PXsxfT5cbiAgICAgICAgPERlc2t0b3BNYWluTWVudSBtZW51PXttYWluTWVudX0gLz5cbiAgICAgIDwvRnJvdz5cbiAgICAgIDxGcm93IHNocmluaz17MX0+XG4gICAgICAgIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyBuYW1lZFdQIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICA8V1BMaW5rIHdwPXtuYW1lZFdQKFwicHJvZHVjdHMuY2x1YlwiKX0+PGE+PExvZ29GYW1pbHlUaW1lIGhlaWdodD17NTV9IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbjogJzJweCAxNnB4IC0ycHggMCd9fSAvPjwvYT48L1dQTGluaz5cbiAgICAgICAgICAgIDxXUExpbmsgd3A9e25hbWVkV1AoXCJwcm9kdWN0cy5jaGFubmVsXCIpfT48YT48TG9nb0ZhbWlseVRyZWVDaGFubmVsIGhlaWdodD17NDB9IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fS8+PC9hPjwvV1BMaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfTwvQXBwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIDwvRnJvdz5cbiAgICA8L0Zyb3c+XG4gIDwvZGl2PlxuICA8RmlsdGVyLlNsb3QvPlxuICA8RGVza3RvcFN1Yk1lbnUgc3VibWVudT17c3ViTWVudX0vPlxuICA8c3R5bGUganN4PntgXG4gICAgaGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAucGhvbmUgOmdsb2JhbChhKSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAkeyBUaGVtZS54cy52cigwLjc1KX07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygkeyBUaGVtZS54cy52cigxKX0gLSA1cHgpO1xuICAgIH1cblxuICAgIC5sb2dvIDpnbG9iYWwoc3ZnKSB7XG4gICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgaGVpZ2h0OiA3NHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gICAgICAvKiA1NXB4OyAqL1xuICAgICAgLyogbWFyZ2luLWJvdHRvbTogNXB4OyAqL1xuICAgIH1cblxuICAgIC5waG9uZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG5cbiAgICAubG9nby1zZWNvbmRhcnkge1xuICAgICAgbWFyZ2luLXRvcDogJHsgVGhlbWUubWQudnIoMC4yNSkgfTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG5cblxuICAgIC5kZWZhdWx0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICB9XG4gICAgLmRlZmF1bHQgOmdsb2JhbChzdmcpIHtcbiAgICAgIGZpbGw6ICNmZmY7XG4gICAgfVxuICAgIC5kZWZhdWx0IC5waG9uZSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuZGVmYXVsdCAubG9nby1zZWNvbmRhcnkgOmdsb2JhbChzdmcpIHtcbiAgICAgIGZpbGw6ICNmZmY7XG4gICAgfVxuXG4gICAgLmRlZmF1bHQgLnRvcC1tZW51LWFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgIH1cblxuXG5cbiAgICAuaG9tZXBhZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICB9XG4gICAgLmhvbWVwYWdlIDpnbG9iYWwoc3ZnKSB7XG4gICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgfVxuICAgIC5ob21lcGFnZSAucGhvbmUge1xuICAgICAgY29sb3I6ICR7IFRoZW1lLmNvbG9ycy5hY2NlbnQgfTtcbiAgICB9XG5cbiAgICAuaG9tZXBhZ2UgLmxvZ28tc2Vjb25kYXJ5IDpnbG9iYWwoc3ZnKSB7XG4gICAgICBmaWxsOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgfVxuXG4gICAgLmhvbWVwYWdlIC50b3AtbWVudS1hY3RpdmUge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICR7IFRoZW1lLm1kLnZyKDEuNzUpfTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOTQ0NDRyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLm1kLnZyKDAuNzUpIH07XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgIGhlaWdodDogMTE4cHg7IC8qIDk1cHg7ICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyM3B4KTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIzcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIGB9PC9zdHlsZT5cbjwvaGVhZGVyPil9XG4iXX0= */\n/*@ sourceURL=src/next/components/Header.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].xs.vr(1), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.25), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(1.75), __WEBPACK_IMPORTED_MODULE_5__styles_theme__["a" /* default */].md.vr(0.75)]
  }));
});

/***/ }),

/***/ "./components/Icons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_facebook_svg_sprite__ = __webpack_require__("./images/facebook.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_instagram_svg_sprite__ = __webpack_require__("./images/instagram.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_odnoklassniki_svg_sprite__ = __webpack_require__("./images/odnoklassniki.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_vk_svg_sprite__ = __webpack_require__("./images/vk.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_youtube_svg_sprite__ = __webpack_require__("./images/youtube.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_menu_svg_sprite__ = __webpack_require__("./images/menu.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_close_rounded_svg_sprite__ = __webpack_require__("./images/close-rounded.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_magnify_svg_sprite__ = __webpack_require__("./images/magnify.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_sliders_svg_sprite__ = __webpack_require__("./images/sliders.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_plus_svg_sprite__ = __webpack_require__("./images/plus.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_minus_svg_sprite__ = __webpack_require__("./images/minus.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_badge_discount_svg_sprite__ = __webpack_require__("./images/badge-discount.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_badge_free_svg_sprite__ = __webpack_require__("./images/badge-free.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_logo_ft_svg_sprite__ = __webpack_require__("./images/logo-ft.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_logo_ftc_svg_sprite__ = __webpack_require__("./images/logo-ftc.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_logo_ftt_svg_sprite__ = __webpack_require__("./images/logo-ftt.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_load_more_svg_sprite__ = __webpack_require__("./images/load-more.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_circle_arrow_left_svg_sprite__ = __webpack_require__("./images/circle-arrow-left.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__images_circle_arrow_right_svg_sprite__ = __webpack_require__("./images/circle-arrow-right.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__images_arrow_left_solid_svg_sprite__ = __webpack_require__("./images/arrow-left-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__images_arrow_right_solid_svg_sprite__ = __webpack_require__("./images/arrow-right-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__images_angle_left_solid_svg_sprite__ = __webpack_require__("./images/angle-left-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__images_angle_right_solid_svg_sprite__ = __webpack_require__("./images/angle-right-solid.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__images_facebook_square_brands_svg_sprite__ = __webpack_require__("./images/facebook-square-brands.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__images_twitter_square_brands_svg_sprite__ = __webpack_require__("./images/twitter-square-brands.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__images_vk_square_brands_svg_sprite__ = __webpack_require__("./images/vk-square-brands.svg?sprite");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__images_odnoklassniki_square_brands_svg_sprite__ = __webpack_require__("./images/odnoklassniki-square-brands.svg?sprite");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__images_facebook_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__images_instagram_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__images_odnoklassniki_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__images_vk_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__images_youtube_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__images_menu_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__images_close_rounded_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__images_magnify_svg_sprite__["a"]; });
/* unused harmony reexport IconSliders */
/* unused harmony reexport IconPlus */
/* unused harmony reexport IconMinus */
/* unused harmony reexport BadgeDiscount */
/* unused harmony reexport BadgeFree */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_13__images_logo_ft_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_14__images_logo_ftc_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_15__images_logo_ftt_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_16__images_load_more_svg_sprite__["a"]; });
/* unused harmony reexport IconCircleArrowLeft */
/* unused harmony reexport IconCircleArrowRight */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_19__images_arrow_left_solid_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_20__images_arrow_right_solid_svg_sprite__["a"]; });
/* unused harmony reexport IconAngleArrowLeft */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_22__images_angle_right_solid_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_23__images_facebook_square_brands_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_24__images_twitter_square_brands_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_25__images_vk_square_brands_svg_sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_26__images_odnoklassniki_square_brands_svg_sprite__["a"]; });
// import React from 'react'
// import Theme from '../styles/theme'


 // import IconTwitter from '../images/twitter.svg?sprite'



























/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Layout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("../../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("../../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppContext__ = __webpack_require__("./components/AppContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Frow__ = __webpack_require__("./components/Frow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_utils__ = __webpack_require__("./lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FilterSlotFill__ = __webpack_require__("./components/FilterSlotFill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AdFullWidth__ = __webpack_require__("./components/AdFullWidth.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/Layout.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n          query OptionsQuery {\n            options @rest(type: \"Options\", path: \"/acf/v3/options/options\") {\n              acf\n            }\n          }\n        "]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    query globalInfoQuery {\n      mainMenu @rest(type: \"MainMenuItem\", path: \"/wp-api-menus/v2/menu-locations/main-menu\") {\n        url\n        title\n        attr\n        classes\n        object_id\n        object\n        template\n        main_id\n        children {\n          url\n          title\n          attr\n          classes\n          parent\n          object_id\n          object\n          template\n          main_id\n        }\n      }\n\n      routingMenu @rest(type: \"RoutingMenuItem\", path: \"/wp-api-menus/v2/menu-locations/routing-menu\") {\n        url\n        title\n        object_id\n        object\n        template\n        main_id\n      }\n    }\n  "]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }












var Layout = function Layout(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AppContext__["a" /* default */].Provider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__FilterSlotFill__["a" /* default */].Provider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
    query: __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, function (_ref2) {
    var data = _ref2.data;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AppContext__["a" /* default */].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, function (_ref3) {
      var setOptions = _ref3.setOptions;
      data && data.options && setOptions(data.options.acf);
    });
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Frow__["a" /* default */], {
    container: true,
    column: true,
    justify: "between",
    className: "sitebox",
    hug: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LayoutHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Frow__["a" /* default */], {
    grow: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, children)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }))));
};
var LayoutHeader = Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(function (_ref4) {
  var firstPage = _ref4.firstPage,
      router = _ref4.router;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
    query: __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, function (dataProps) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AppContext__["a" /* default */].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    }, function (_ref5) {
      var setRoutingMenu = _ref5.setRoutingMenu,
          setMainMenu = _ref5.setMainMenu,
          options = _ref5.options;
      setRoutingMenu(dataProps.data.routingMenu);
      setMainMenu(dataProps.data.mainMenu);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, options.banner && options.banner.show && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__AdFullWidth__["a" /* default */], {
        desktop: Object(__WEBPACK_IMPORTED_MODULE_6__lib_utils__["a" /* acfImage */])(options.banner.desktop, 'original'),
        mobile: Object(__WEBPACK_IMPORTED_MODULE_6__lib_utils__["a" /* acfImage */])(options.banner.mobile, 'original'),
        url: options.banner.link ? options.banner.link.url : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Header__["a" /* default */], {
        firstPage: router.asPath === '/',
        mainMenu: dataProps.data.mainMenu,
        subMenu: dataProps.data.mainMenu.filter(function (item) {
          return router.asPath.substr(0, item.url.length) === item.url;
        }).map(function (item) {
          return item.children;
        }).pop() || [],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }));
    });
  });
});
/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/MobileMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("../../node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("../../node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("../../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group__ = __webpack_require__("../../node_modules/react-transition-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WPLink__ = __webpack_require__("./components/WPLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_theme__ = __webpack_require__("./styles/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icons__ = __webpack_require__("./components/Icons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_utils__ = __webpack_require__("./lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_AppContext__ = __webpack_require__("./components/AppContext.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/MobileMenu.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

 // import Frow from './Frow'





var MobileSearch = Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(function (_ref) {
  var router = _ref.router,
      _onClick = _ref.onClick;
  var inputRef = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef();
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_AppContext__["a" /* default */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, function (_ref2) {
    var namedWP = _ref2.namedWP;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3637871488", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5)]]]) + " " + "search"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
      type: "text",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",
      defaultValue: router.query.text || '',
      ref: inputRef,
      onKeyUp: function onKeyUp(e) {
        e.keyCode === 13 && Object(__WEBPACK_IMPORTED_MODULE_8__lib_utils__["d" /* gotoWPRoute */])({
          wp: namedWP('search'),
          fragment: {
            searchid: 2329793,
            web: 0,
            text: inputRef.current.value
          }
        });
        e.keyCode === 13 && _onClick(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3637871488", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5)]]])
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
      onClick: function onClick(e) {
        Object(__WEBPACK_IMPORTED_MODULE_8__lib_utils__["d" /* gotoWPRoute */])({
          wp: namedWP('search'),
          fragment: {
            searchid: 2329793,
            web: 0,
            text: inputRef.current.value
          }
        });

        _onClick(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3637871488", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5)]]]) + " " + "btn"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["g" /* IconSearch */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    })));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3637871488",
    css: "button.__jsx-style-dynamic-selector{border:none;background:none;padding:0;margin:0;}.search.__jsx-style-dynamic-selector{position:relative;margin-bottom:".concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), ";}.search.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{border:none;border-radius:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius, ";padding:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), " 2.66666rem ").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), " 1.33333rem;width:100%;background:#f95c3c;color:#fff;}.search.__jsx-style-dynamic-selector svg{position:absolute;top:calc(50% - 8px);right:calc(1.33333rem - 8px);display:inline-block;width:16px;height:16px;cursor:pointer;}.search.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#f0f0f0;}.search.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::-moz-placeholder{color:#f0f0f0;}.search.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#f0f0f0;}.search.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector::placeholder{color:#f0f0f0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvTW9iaWxlTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmtCLEFBR3VCLEFBT00sQUFJTixBQVNNLEFBVUosWUE3QkUsQUFXMkIsRUFtQjdDLElBdkI2QyxBQWF2QixVQW5CVixVQUNELEFBbUJvQixTQWxCL0IsUUFTMEYsTUFKMUYsTUFjdUIscUJBQ1YsV0FDQyxZQUNHLGVBQ2pCLGlCQWJhLFdBQ1EsbUJBQ1IsV0FDYiIsImZpbGUiOiJzcmMvbmV4dC9jb21wb25lbnRzL01vYmlsZU1lbnUuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvTXlDb21wdXRlci9NeVdvcmsvZmFtaWx5My1lZGdlLWJ1ZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuLy8gaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tICdib2R5LXNjcm9sbC1sb2NrJ1xuaW1wb3J0IFdQTGluayBmcm9tICcuL1dQTGluaydcbi8vIGltcG9ydCBGcm93IGZyb20gJy4vRnJvdydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBMb2dvRmFtaWx5VGltZSwgTG9nb0ZhbWlseVRyZWVDaGFubmVsLCBJY29uTWVudSwgSWNvbkNsb3NlLCBJY29uU2VhcmNoIH0gZnJvbSAnLi9JY29ucydcbmltcG9ydCB7IGdvdG9XUFJvdXRlIH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBDb250ZXh0J1xuXG5jb25zdCBNb2JpbGVTZWFyY2ggPSB3aXRoUm91dGVyKCh7IHJvdXRlciwgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9C+0LjRgdC60L7QstGL0Lkg0LfQsNC/0YDQvtGBXCIgZGVmYXVsdFZhbHVlPXtyb3V0ZXIucXVlcnkudGV4dCB8fCAnJ30gcmVmPXtpbnB1dFJlZn0gb25LZXlVcD17KGUpID0+IHtcbiAgICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgZ290b1dQUm91dGUoe3dwOiBuYW1lZFdQKCdzZWFyY2gnKSwgZnJhZ21lbnQ6IHtzZWFyY2hpZDogMjMyOTc5Mywgd2ViOiAwLCB0ZXh0OiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlfX0pXG4gICAgICAgICAgICBlLmtleUNvZGUgPT09IDEzICYmIG9uQ2xpY2soZSlcbiAgICAgICAgICB9fSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGdvdG9XUFJvdXRlKHt3cDogbmFtZWRXUCgnc2VhcmNoJyksIGZyYWdtZW50OiB7c2VhcmNoaWQ6IDIzMjk3OTMsIHdlYjogMCwgdGV4dDogaW5wdXRSZWYuY3VycmVudC52YWx1ZX19KVxuICAgICAgICAgICAgb25DbGljayhlKVxuICAgICAgICAgIH19PjxJY29uU2VhcmNoLz48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfTwvQXBwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxLjUpIH07XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaCBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7IFRoZW1lLnhzLmJvcmRlclJhZGl1cyB9O1xuICAgICAgICAgIHBhZGRpbmc6ICR7IFRoZW1lLnhzLnZyKDAuNSkgfSAyLjY2NjY2cmVtICR7IFRoZW1lLnhzLnZyKDAuNSkgfSAxLjMzMzMzcmVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOTVjM2M7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSA4cHgpO1xuICAgICAgICAgIHJpZ2h0OiBjYWxjKDEuMzMzMzNyZW0gLSA4cHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAjZjBmMGYwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbil9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZU1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgfVxuXG4gIHNjcm9sbFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgb3BlblRhcHBlZCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSlcbiAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDB2aCdcbiAgICAvLyBkaXNhYmxlQm9keVNjcm9sbCgpXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiBkaXNhYmxlQm9keVNjcm9sbCh0aGlzLnNjcm9sbFJlZi5jdXJyZW50KSwgNTAwKVxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2codGhpcy5zY3JvbGxSZWYpLCAxNTAwKVxuICB9XG5cbiAgY2xvc2VUYXBwZWQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50VGFyZ2V0JywgZS5jdXJyZW50VGFyZ2V0LCAndGFyZ2V0JywgZS50YXJnZXQpXG4gICAgaWYoZS5jdXJyZW50VGFyZ2V0ID09PSBlLnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicgfHwgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnIHx8IGUuY3VycmVudFRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScpIHtcbiAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIC8vIGVuYWJsZUJvZHlTY3JvbGwodGhpcy5zY3JvbGxSZWYuY3VycmVudClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1haW5NZW51ID0gW10gfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtb3BlblwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub3BlblRhcHBlZH0+PEljb25NZW51Lz48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgaW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgY2xhc3NOYW1lcz1cIm1vYmlsZS1tZW51XCJcbiAgICAgICAgdGltZW91dD17NDAwfVxuICAgICAgICBtb3VudE9uRW50ZXJcbiAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+e1xuICAgICAgICAoc3RhdGUpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51XCIgb25DbGljaz17dGhpcy5jbG9zZVRhcHBlZH0+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrQ2FwdHVyZT17dGhpcy5jbG9zZVRhcHBlZH0+PEljb25DbG9zZS8+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiIHJlZj17dGhpcy5zY3JvbGxSZWZ9PlxuICAgICAgICAgICAgICAgIDxNb2JpbGVTZWFyY2ggb25DbGljaz17dGhpcy5jbG9zZVRhcHBlZH0vPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9C+0LjRgdC60L7QstGL0Lkg0LfQsNC/0YDQvtGBXCIvPjxJY29uU2VhcmNoLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgIDx1bD57XG4gICAgICAgICAgICAgICAgICAgIG1haW5NZW51LmZpbHRlcihpdGVtID0+IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdoaWRkZW4nKSA9PT0gLTEpLm1hcCgoaXRlbSwgaSkgPT4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFdQTGluayBrZXk9e2l9IHdwPXtpdGVtfT48YT57aXRlbS50aXRsZX08L2E+PC9XUExpbms+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4gJiYgPHVsIGNsYXNzTmFtZT1cInN1Yi1uYXZcIj57XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZpbHRlcihpdGVtID0+IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdoaWRkZW4nKSA9PT0gLTEpLm1hcCgoc3ViSXRlbSwgaikgPT4gPGxpIGtleT17an0+PFdQTGluayB3cD17c3ViSXRlbX0+PGE+e3N1Ykl0ZW0udGl0bGV9PC9hPjwvV1BMaW5rPjwvbGk+KVxuICAgICAgICAgICAgICAgICAgICAgIH08L3VsPn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH08L3VsPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3QtdXNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT7QodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80Lg8L2gxPlxuICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cInRlbDorNzk4NTA1NDU0NjNcIj4rNyZuYnNwOzk4NSZuYnNwOzA1NCZuYnNwOzU0Jm5ic3A7NjM8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8QXBwQ29udGV4dC5Db25zdW1lcj57KHsgbmFtZWRXUCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8V1BMaW5rIHdwPXtuYW1lZFdQKFwicHJvZHVjdHMuY2x1YlwiKX0+PGEgb25DbGlja0NhcHR1cmU9e3RoaXMuY2xvc2VUYXBwZWR9PjxMb2dvRmFtaWx5VGltZSBoZWlnaHQ9ezQyfSBzdHlsZT17e2ZpbGw6ICcjZmZmJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpblJpZ2h0OiAxNn19IC8+PC9hPjwvV1BMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDxXUExpbmsgd3A9e25hbWVkV1AoXCJwcm9kdWN0cy5jaGFubmVsXCIpfT48YSBvbkNsaWNrQ2FwdHVyZT17dGhpcy5jbG9zZVRhcHBlZH0+PExvZ29GYW1pbHlUcmVlQ2hhbm5lbCBoZWlnaHQ9ezM4fSBzdHlsZT17e2ZpbGw6ICcjZmZmJywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fS8+PC9hPjwvV1BMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9saWN5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFdQTGluayB3cD17bmFtZWRXUChcInByaXZhY3lcIil9PjxhPtCf0L7Qu9C40YLQuNC60LAg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPjwvV1BMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICl9PC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtb3BlbiA6Z2xvYmFsKHN2ZyksXG4gICAgICAgIC5tZW51LWNsb3NlIDpnbG9iYWwoc3ZnKSB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtY2xvc2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygkeyBUaGVtZS54cy52cigwLjc1KX0gKyAxNXB4KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1tZW51IHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1lbnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLW1lbnUtZW50ZXItYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLW1lbnUtZW50ZXItZG9uZSxcbiAgICAgICAgLm1vYmlsZS1tZW51LWV4aXQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLW1lbnUtZXhpdC1hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JvbGwge1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtICR7IFRoZW1lLnhzLnZyKDEuNSl9IC0gMTVweCAtIDI0cHgpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1tZW51ID4gc2VjdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgVGhlbWUuY29sb3JzLmFjY2VudCB9O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzLjc1cmVtO1xuICAgICAgICAgIHotaW5kZXg6IDEwMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1lbnRlciA+IHNlY3Rpb24ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLW1lbnUtZW50ZXItYWN0aXZlID4gc2VjdGlvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLW1lbnUtZW50ZXItZG9uZSA+IHNlY3Rpb24sXG4gICAgICAgIC5tb2JpbGUtbWVudS1leGl0ID4gc2VjdGlvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1leGl0LWFjdGl2ZSA+IHNlY3Rpb24ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLW1lbnUgbmF2IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxLjUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLW1lbnUgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLW1lbnUgbmF2IGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zMzMzM3JlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtbWVudSAuc3ViLW5hdiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1tZW51IC5zdWItbmF2IGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LXVzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtdXMgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zMzMzM3JlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMC41KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtdXMgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1zZWNvbmRhcnkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEuNzUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAucG9saWN5IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigxLjc1KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGljeSBhIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICB9XG59XG4iXX0= */\n/*@ sourceURL=src/next/components/MobileMenu.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.borderRadius, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5)]
  }));
});

var MobileMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileMenu, _Component);

  function MobileMenu() {
    var _ref3;

    var _temp, _this;

    _classCallCheck(this, MobileMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref3 = MobileMenu.__proto__ || Object.getPrototypeOf(MobileMenu)).call.apply(_ref3, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "scrollRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "openTapped", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          open: true
        }); // document.body.style.overflow = 'hidden'
        // document.body.style.height = '100vh'
        // disableBodyScroll()
        // setTimeout(() => disableBodyScroll(this.scrollRef.current), 500)
        // setTimeout(() => console.log(this.scrollRef), 1500)

      }
    }), Object.defineProperty(_assertThisInitialized(_this), "closeTapped", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log('currentTarget', e.currentTarget, 'target', e.target);

        if (e.currentTarget === e.target || e.currentTarget.nodeName.toLowerCase() === 'button' || e.target.nodeName.toLowerCase() === 'a' || e.currentTarget.nodeName.toLowerCase() === 'a') {
          // e.stopPropagation()
          // enableBodyScroll(this.scrollRef.current)
          _this.setState({
            open: false
          });
        }
      }
    }), _temp));
  }

  _createClass(MobileMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props$mainMenu = this.props.mainMenu,
          mainMenu = _props$mainMenu === void 0 ? [] : _props$mainMenu;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "menu-open"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.openTapped,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["e" /* IconMenu */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_transition_group__["CSSTransition"], {
        "in": this.state.open,
        classNames: "mobile-menu",
        timeout: 400,
        mountOnEnter: true,
        unmountOnExit: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, function (state) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onClick: _this2.closeTapped,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "mobile-menu"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "menu-close"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          onClickCapture: _this2.closeTapped,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["b" /* IconClose */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          ref: _this2.scrollRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "scroll"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MobileSearch, {
          onClick: _this2.closeTapped,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
        }, mainMenu.filter(function (item) {
          return item.classes.indexOf('hidden') === -1;
        }).map(function (item, i) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WPLink__["a" /* default */], {
            key: i,
            wp: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
          }, item.title)), item.children && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "sub-nav"
          }, item.children.filter(function (item) {
            return item.classes.indexOf('hidden') === -1;
          }).map(function (subItem, j) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
              key: j,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WPLink__["a" /* default */], {
              wp: subItem,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
            }, subItem.title)));
          })));
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "contact-us"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
        }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "tel:+79850545463",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
        }, "+7\xA0985\xA0054\xA054\xA063"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_AppContext__["a" /* default */].Consumer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, function (_ref4) {
          var namedWP = _ref4.namedWP;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "logo-secondary"
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WPLink__["a" /* default */], {
            wp: namedWP("products.club"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
            onClickCapture: _this2.closeTapped,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["q" /* LogoFamilyTime */], {
            height: 42,
            style: {
              fill: '#fff',
              display: 'inline-block',
              marginRight: 16
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WPLink__["a" /* default */], {
            wp: namedWP("products.channel"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
            onClickCapture: _this2.closeTapped,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons__["s" /* LogoFamilyTreeChannel */], {
            height: 38,
            style: {
              fill: '#fff',
              display: 'inline-block'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            }
          })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]]) + " " + "policy"
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WPLink__["a" /* default */], {
            wp: namedWP("privacy"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3322085511", [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]]])
          }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))));
        }))));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3322085511",
        css: "h1.__jsx-style-dynamic-selector{color:#fff;}button.__jsx-style-dynamic-selector{border:none;background:none;padding:0;margin:0;}a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;}.menu-open.__jsx-style-dynamic-selector svg,.menu-close.__jsx-style-dynamic-selector svg{width:24px;height:24px;cursor:pointer;fill:#fff;}.menu-close.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-top:calc(".concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), " + 15px);margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), ";}.mobile-menu.__jsx-style-dynamic-selector{position:fixed;top:0;bottom:0;left:0;right:0;z-index:10000;}.mobile-menu-enter.__jsx-style-dynamic-selector{background-color:rgba(0,0,0,0);}.mobile-menu-enter-active.__jsx-style-dynamic-selector{background-color:rgba(0,0,0,0.5);-webkit-transition:all 300ms linear;transition:all 300ms linear;}.mobile-menu-enter-done.__jsx-style-dynamic-selector,.mobile-menu-exit.__jsx-style-dynamic-selector{background-color:rgba(0,0,0,0.5);}.mobile-menu-exit-active.__jsx-style-dynamic-selector{background-color:rgba(0,0,0,0);-webkit-transition:all 300ms linear;transition:all 300ms linear;}.scroll.__jsx-style-dynamic-selector{overflow-y:auto;max-height:calc(100vh - ").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), " - 15px - 24px);padding-bottom:80px;}.mobile-menu.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;right:0;color:#fff;background-color:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, ";padding-right:15px;padding-left:3.75rem;z-index:10100;}.mobile-menu-enter.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.mobile-menu-enter-active.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transition:all 300ms ease-out;transition:all 300ms ease-out;}.mobile-menu-enter-done.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector,.mobile-menu-exit.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-transform:none;-ms-transform:none;transform:none;}.mobile-menu-exit-active.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:all 300ms ease-out;transition:all 300ms ease-out;}.mobile-menu.__jsx-style-dynamic-selector nav.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), ";}.mobile-menu.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}.mobile-menu.__jsx-style-dynamic-selector nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:block;font-size:1.33333rem;font-weight:normal;color:#fff;text-transform:uppercase;line-height:1.8;}.mobile-menu.__jsx-style-dynamic-selector .sub-nav.__jsx-style-dynamic-selector{padding-left:2rem;}.mobile-menu.__jsx-style-dynamic-selector .sub-nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:1rem;line-height:2;}.contact-us.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), ";}.contact-us.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:1.33333rem;font-weight:normal;text-transform:uppercase;padding:0;margin:0;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), ";}.contact-us.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:1.33333rem;font-weight:300;}.logo-secondary.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), ";}.policy.__jsx-style-dynamic-selector{margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), ";}.policy.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{text-transform:uppercase;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXh0L2NvbXBvbmVudHMvTW9iaWxlTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSmtCLEFBR3NCLEFBSUMsQUFPRCxBQU1BLEFBT0UsQUFRRSxBQVFtQixBQUdFLEFBS0EsQUFHRixBQUtsQixBQU1FLEFBV1MsQUFHSCxBQUtULEFBR1ksQUFLZ0IsQUFJM0IsQUFNRixBQVNJLEFBSUgsQUFLNEIsQUFJdEIsQUFTQSxBQUtzQixBQUlBLEFBSWxCLFdBOUkzQixBQVd1QixBQU1ULENBYkksRUErRkssQ0FuRWYsQUFnRlEsQ0F4RHNELEFBcUMzRCxFQS9CSCxBQThDUixHQTNFVyxBQXdGVSxBQVNILEVBaEhELENBNkNOLENBK0JDLEFBaURDLEdBMUlELENBNEdaLENBL0VTLENBTVQsQUFXOEIsRUFSQSxBQUs5QixBQWdCVSxFQStCVixBQUtxQixDQTRDckIsQ0E3R1UsQUFnR1YsQ0E3SFcsQUFhQyxFQXVHZSxDQXpEZCxFQXdCYixBQTRCQSxBQWtCQSxBQUlBLEVBdkdnQixFQTdCaEIsQ0FhQSxJQThDZ0QsRUFtQ25DLEdBcEJiLEVBNUNBLEVBekJBLElBMEYyQixBQXFCZixTQW5HYSxDQW9HZCxTQW5FVyxBQW1CVSxBQWlEYSxNQXRCM0IsR0E5QmxCLEFBV2dDLEVBaENoQyxFQVJBLENBdUJxQixNQVRyQixFQThDQSxXQXBDdUIsVUEwRHZCLFdBekRnQixjQUNoQixBQU9BLFNBUUEsc0JBNUQyQixpR0FDNkIsc0RBQ1gsMkNBQzdDIiwiZmlsZSI6InNyYy9uZXh0L2NvbXBvbmVudHMvTW9iaWxlTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NeUNvbXB1dGVyL015V29yay9mYW1pbHkzLWVkZ2UtYnVnIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG4vLyBpbXBvcnQgeyBkaXNhYmxlQm9keVNjcm9sbCwgZW5hYmxlQm9keVNjcm9sbCB9IGZyb20gJ2JvZHktc2Nyb2xsLWxvY2snXG5pbXBvcnQgV1BMaW5rIGZyb20gJy4vV1BMaW5rJ1xuLy8gaW1wb3J0IEZyb3cgZnJvbSAnLi9Gcm93J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IExvZ29GYW1pbHlUaW1lLCBMb2dvRmFtaWx5VHJlZUNoYW5uZWwsIEljb25NZW51LCBJY29uQ2xvc2UsIEljb25TZWFyY2ggfSBmcm9tICcuL0ljb25zJ1xuaW1wb3J0IHsgZ290b1dQUm91dGUgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRleHQnXG5cbmNvbnN0IE1vYmlsZVNlYXJjaCA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyBuYW1lZFdQIH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0L7QuNGB0LrQvtCy0YvQuSDQt9Cw0L/RgNC+0YFcIiBkZWZhdWx0VmFsdWU9e3JvdXRlci5xdWVyeS50ZXh0IHx8ICcnfSByZWY9e2lucHV0UmVmfSBvbktleVVwPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5rZXlDb2RlID09PSAxMyAmJiBnb3RvV1BSb3V0ZSh7d3A6IG5hbWVkV1AoJ3NlYXJjaCcpLCBmcmFnbWVudDoge3NlYXJjaGlkOiAyMzI5NzkzLCB3ZWI6IDAsIHRleHQ6IGlucHV0UmVmLmN1cnJlbnQudmFsdWV9fSlcbiAgICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgb25DbGljayhlKVxuICAgICAgICAgIH19IC8+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZ290b1dQUm91dGUoe3dwOiBuYW1lZFdQKCdzZWFyY2gnKSwgZnJhZ21lbnQ6IHtzZWFyY2hpZDogMjMyOTc5Mywgd2ViOiAwLCB0ZXh0OiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlfX0pXG4gICAgICAgICAgICBvbkNsaWNrKGUpXG4gICAgICAgICAgfX0+PEljb25TZWFyY2gvPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9PC9BcHBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEuNSkgfTtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoIGlucHV0IHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHsgVGhlbWUueHMuYm9yZGVyUmFkaXVzIH07XG4gICAgICAgICAgcGFkZGluZzogJHsgVGhlbWUueHMudnIoMC41KSB9IDIuNjY2NjZyZW0gJHsgVGhlbWUueHMudnIoMC41KSB9IDEuMzMzMzNyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y5NWMzYztcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2ggOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDhweCk7XG4gICAgICAgICAgcmlnaHQ6IGNhbGMoMS4zMzMzM3JlbSAtIDhweCk7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6ICNmMGYwZjA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuKX0pXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICB9XG5cbiAgc2Nyb2xsUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICBvcGVuVGFwcGVkID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xuICAgIC8vIGRpc2FibGVCb2R5U2Nyb2xsKClcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IGRpc2FibGVCb2R5U2Nyb2xsKHRoaXMuc2Nyb2xsUmVmLmN1cnJlbnQpLCA1MDApXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbFJlZiksIDE1MDApXG4gIH1cblxuICBjbG9zZVRhcHBlZCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnRUYXJnZXQnLCBlLmN1cnJlbnRUYXJnZXQsICd0YXJnZXQnLCBlLnRhcmdldClcbiAgICBpZihlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJyB8fCBlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgfHwgZS5jdXJyZW50VGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgLy8gZW5hYmxlQm9keVNjcm9sbCh0aGlzLnNjcm9sbFJlZi5jdXJyZW50KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWFpbk1lbnUgPSBbXSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1vcGVuXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vcGVuVGFwcGVkfT48SWNvbk1lbnUvPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBpbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICBjbGFzc05hbWVzPVwibW9iaWxlLW1lbnVcIlxuICAgICAgICB0aW1lb3V0PXs0MDB9XG4gICAgICAgIG1vdW50T25FbnRlclxuICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID57XG4gICAgICAgIChzdGF0ZSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnVcIiBvbkNsaWNrPXt0aGlzLmNsb3NlVGFwcGVkfT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2tDYXB0dXJlPXt0aGlzLmNsb3NlVGFwcGVkfT48SWNvbkNsb3NlLz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsXCIgcmVmPXt0aGlzLnNjcm9sbFJlZn0+XG4gICAgICAgICAgICAgICAgPE1vYmlsZVNlYXJjaCBvbkNsaWNrPXt0aGlzLmNsb3NlVGFwcGVkfS8+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0L7QuNGB0LrQvtCy0YvQuSDQt9Cw0L/RgNC+0YFcIi8+PEljb25TZWFyY2gvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgPHVsPntcbiAgICAgICAgICAgICAgICAgICAgbWFpbk1lbnUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2hpZGRlbicpID09PSAtMSkubWFwKChpdGVtLCBpKSA9PiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8V1BMaW5rIGtleT17aX0gd3A9e2l0ZW19PjxhPntpdGVtLnRpdGxlfTwvYT48L1dQTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbiAmJiA8dWwgY2xhc3NOYW1lPVwic3ViLW5hdlwiPntcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2hpZGRlbicpID09PSAtMSkubWFwKChzdWJJdGVtLCBqKSA9PiA8bGkga2V5PXtqfT48V1BMaW5rIHdwPXtzdWJJdGVtfT48YT57c3ViSXRlbS50aXRsZX08L2E+PC9XUExpbms+PC9saT4pXG4gICAgICAgICAgICAgICAgICAgICAgfTwvdWw+fVxuICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICAgICAgfTwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdC11c1wiPlxuICAgICAgICAgICAgICAgICAgPGgxPtCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuDwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwidGVsOis3OTg1MDU0NTQ2M1wiPis3Jm5ic3A7OTg1Jm5ic3A7MDU0Jm5ic3A7NTQmbmJzcDs2MzwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxBcHBDb250ZXh0LkNvbnN1bWVyPnsoeyBuYW1lZFdQIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxXUExpbmsgd3A9e25hbWVkV1AoXCJwcm9kdWN0cy5jbHViXCIpfT48YSBvbkNsaWNrQ2FwdHVyZT17dGhpcy5jbG9zZVRhcHBlZH0+PExvZ29GYW1pbHlUaW1lIGhlaWdodD17NDJ9IHN0eWxlPXt7ZmlsbDogJyNmZmYnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luUmlnaHQ6IDE2fX0gLz48L2E+PC9XUExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPFdQTGluayB3cD17bmFtZWRXUChcInByb2R1Y3RzLmNoYW5uZWxcIil9PjxhIG9uQ2xpY2tDYXB0dXJlPXt0aGlzLmNsb3NlVGFwcGVkfT48TG9nb0ZhbWlseVRyZWVDaGFubmVsIGhlaWdodD17Mzh9IHN0eWxlPXt7ZmlsbDogJyNmZmYnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319Lz48L2E+PC9XUExpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb2xpY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8V1BMaW5rIHdwPXtuYW1lZFdQKFwicHJpdmFjeVwiKX0+PGE+0J/QvtC70LjRgtC40LrQsCDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+PC9XUExpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX08L0FwcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKX08L0NTU1RyYW5zaXRpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1vcGVuIDpnbG9iYWwoc3ZnKSxcbiAgICAgICAgLm1lbnUtY2xvc2UgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jbG9zZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKCR7IFRoZW1lLnhzLnZyKDAuNzUpfSArIDE1cHgpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDAuNzUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLW1lbnUge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLm1vYmlsZS1tZW51LWVudGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1lbnRlci1hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1lbnRlci1kb25lLFxuICAgICAgICAubW9iaWxlLW1lbnUtZXhpdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1leGl0LWFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcm9sbCB7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHsgVGhlbWUueHMudnIoMS41KX0gLSAxNXB4IC0gMjRweCk7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLW1lbnUgPiBzZWN0aW9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBUaGVtZS5jb2xvcnMuYWNjZW50IH07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMuNzVyZW07XG4gICAgICAgICAgei1pbmRleDogMTAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLm1vYmlsZS1tZW51LWVudGVyID4gc2VjdGlvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1lbnRlci1hY3RpdmUgPiBzZWN0aW9uIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbWVudS1lbnRlci1kb25lID4gc2VjdGlvbixcbiAgICAgICAgLm1vYmlsZS1tZW51LWV4aXQgPiBzZWN0aW9uIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1vYmlsZS1tZW51LWV4aXQtYWN0aXZlID4gc2VjdGlvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtbWVudSBuYXYge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEuNSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtbWVudSB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtbWVudSBuYXYgYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1tZW51IC5zdWItbmF2IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLW1lbnUgLnN1Yi1uYXYgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtdXMge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEuNzUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC11cyBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyBUaGVtZS54cy52cigwLjUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC11cyBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMzMzMzNyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLXNlY29uZGFyeSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsgVGhlbWUueHMudnIoMS43NSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb2xpY3kge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7IFRoZW1lLnhzLnZyKDEuNzUpIH07XG4gICAgICAgIH1cblxuICAgICAgICAucG9saWN5IGEge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=src/next/components/MobileMenu.js */"),
        dynamic: [__WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].colors.accent, __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(0.5), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75), __WEBPACK_IMPORTED_MODULE_6__styles_theme__["a" /* default */].xs.vr(1.75)]
      }));
    }
  }]);

  return MobileMenu;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/WPLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("../../node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__("../../node_modules/qs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__("./lib/utils.js");
var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/components/WPLink.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var wp = _ref.wp,
      children = _ref.children;
  // console.log('WPLink', wp)
  // console.log({ template: wp.template || wp.page_template || '', type: wp.object || wp.type, id: wp.object_id || wp.id, main_id: wp.acf.main_id || null })
  var wpLink = wp && (wp.link || wp.url || wp.post_link) || ''; // console.log(wpLink)

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: wp ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["e" /* mapToPage */])(wp, wp.query || {}) : {},
    as: wp ? "".concat(wpLink.substr(-6) === '/index' ? wpLink.substr(0, wpLink.length - 5) : wpLink).concat(wp.query ? '?' + __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(wp.query) : '') : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, children);
});

/***/ }),

/***/ "./images/angle-right-solid.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "angle-right-solid--sprite",
  "use": "angle-right-solid--sprite-usage",
  "viewBox": "0 0 216 330",
  "content": "<symbol viewBox=\"0 0 216 330\" xmlns=\"http://www.w3.org/2000/svg\" id=\"angle-right-solid--sprite\">\n  <path d=\"M 204.256 182 L 68.256 318 C 58.856 327.4 43.656 327.4 34.356 318 L 11.756 295.4 C 2.356 286 2.356 270.8 11.756 261.5 L 108.156 165.1 L 11.756 68.7 C 2.356 59.3 2.356 44.1 11.756 34.8 L 34.256 12 C 43.656 2.6 58.856 2.6 68.156 12 L 204.156 148 C 213.656 157.4 213.656 172.6 204.256 182 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/arrow-left-solid.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "arrow-left-solid--sprite",
  "use": "arrow-left-solid--sprite-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"arrow-left-solid--sprite\">\n  <path d=\"M 289.525 445.1 L 267.325 467.3 C 257.925 476.7 242.725 476.7 233.425 467.3 L 39.025 273 C 29.625 263.6 29.625 248.4 39.025 239.1 L 233.425 44.7 C 242.825 35.3 258.025 35.3 267.325 44.7 L 289.525 66.9 C 299.025 76.4 298.825 91.9 289.125 101.2 L 168.625 216 L 456.025 216 C 469.325 216 480.025 226.7 480.025 240 L 480.025 272 C 480.025 285.3 469.325 296 456.025 296 L 168.625 296 L 289.125 410.8 C 298.925 420.1 299.125 435.6 289.525 445.1 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/arrow-right-solid.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "arrow-right-solid--sprite",
  "use": "arrow-right-solid--sprite-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"arrow-right-solid--sprite\">\n  <path d=\"M 222.475 66.9 L 244.675 44.7 C 254.075 35.3 269.275 35.3 278.575 44.7 L 472.975 239 C 482.375 248.4 482.375 263.6 472.975 272.9 L 278.575 467.3 C 269.175 476.7 253.975 476.7 244.675 467.3 L 222.475 445.1 C 212.975 435.6 213.175 420.1 222.875 410.8 L 343.375 296 L 55.975 296 C 42.675 296 31.975 285.3 31.975 272 L 31.975 240 C 31.975 226.7 42.675 216 55.975 216 L 343.375 216 L 222.875 101.2 C 213.075 91.9 212.875 76.4 222.475 66.9 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/facebook-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "facebook-square-brands--sprite",
  "use": "facebook-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"facebook-square-brands--sprite\"><path d=\"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/load-more.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "load-more--sprite",
  "use": "load-more--sprite-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" id=\"load-more--sprite\">\n  <path d=\"M 15.006 3 L 10.006 6 L 10.006 4 C 10.004 4 10.002 4 10 4 C 6.686 4 4 6.686 4 10 C 4 13.314 6.686 16 10 16 C 13.309 16 15.992 13.322 16 10.014 L 18 10.014 C 17.992 14.426 14.413 18 10 18 C 5.582 18 2 14.418 2 10 C 2 5.582 5.582 2 10 2 C 10.002 2 10.004 2 10.006 2 L 10.006 0 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/odnoklassniki-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "odnoklassniki-square-brands--sprite",
  "use": "odnoklassniki-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"odnoklassniki-square-brands--sprite\"><path d=\"M184.2 177.1c0-22.1 17.9-40 39.8-40s39.8 17.9 39.8 40c0 22-17.9 39.8-39.8 39.8s-39.8-17.9-39.8-39.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-305.1 97.1c0 44.6 36.4 80.9 81.1 80.9s81.1-36.2 81.1-80.9c0-44.8-36.4-81.1-81.1-81.1s-81.1 36.2-81.1 81.1zm174.5 90.7c-4.6-9.1-17.3-16.8-34.1-3.6 0 0-22.7 18-59.3 18s-59.3-18-59.3-18c-16.8-13.2-29.5-5.5-34.1 3.6-7.9 16.1 1.1 23.7 21.4 37 17.3 11.1 41.2 15.2 56.6 16.8l-12.9 12.9c-18.2 18-35.5 35.5-47.7 47.7-17.6 17.6 10.7 45.8 28.4 28.6l47.7-47.9c18.2 18.2 35.7 35.7 47.7 47.9 17.6 17.2 46-10.7 28.6-28.6l-47.7-47.7-13-12.9c15.5-1.6 39.1-5.9 56.2-16.8 20.4-13.3 29.3-21 21.5-37z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/twitter-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "twitter-square-brands--sprite",
  "use": "twitter-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"twitter-square-brands--sprite\"><path d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z\" /></symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./images/vk-square-brands.svg?sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__ = __webpack_require__("../../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build__);

    
    
    

    const symbol = new __WEBPACK_IMPORTED_MODULE_1_svg_baker_runtime_browser_symbol___default.a({
  "id": "vk-square-brands--sprite",
  "use": "vk-square-brands--sprite-usage",
  "viewBox": "0 0 448 512",
  "content": "<symbol viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"vk-square-brands--sprite\">\n  <path d=\"M 448 80 L 448 432 C 448 458.5 426.5 480 400 480 L 48 480 C 21.5 480 0 458.5 0 432 L 0 80 C 0 53.5 21.5 32 48 32 L 400 32 C 426.5 32 448 53.5 448 80 Z M 397.14 162.851 C 399.632 154.432 397.14 148.235 385.151 148.235 L 345.48 148.235 C 335.377 148.235 330.73 153.556 328.238 159.483 C 328.238 159.483 308.031 208.719 279.474 240.644 C 270.246 249.872 266.003 252.835 260.951 252.835 C 258.459 252.835 254.62 249.872 254.62 241.452 L 254.62 162.851 C 254.62 152.748 251.791 148.235 243.439 148.235 L 181.07 148.235 C 174.739 148.235 170.967 152.95 170.967 157.328 C 170.967 166.892 185.246 169.115 186.728 196.056 L 186.728 254.519 C 186.728 267.316 184.438 269.674 179.386 269.674 C 165.915 269.674 133.182 220.236 113.784 163.659 C 109.877 152.68 106.038 148.235 95.868 148.235 L 56.196 148.235 C 44.881 148.235 42.591 153.556 42.591 159.483 C 42.591 169.99 56.062 222.189 105.297 291.159 C 138.098 338.239 184.303 363.766 226.332 363.766 C 251.589 363.766 254.687 358.109 254.687 348.342 C 254.687 303.35 252.397 299.107 265.06 299.107 C 270.92 299.107 281.023 302.071 304.596 324.769 C 331.538 351.71 335.983 363.766 351.07 363.766 L 390.742 363.766 C 402.057 363.766 407.782 358.109 404.482 346.928 C 396.938 323.422 345.952 275.062 343.662 271.829 C 337.802 264.285 339.486 260.918 343.662 254.182 C 343.729 254.115 392.156 185.953 397.14 162.851 Z\" />\n</symbol>"
});
    __WEBPACK_IMPORTED_MODULE_2_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);

    const SvgSpriteIcon = function SvgSpriteIcon(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        Object.assign({
          viewBox: symbol.viewBox,
        }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'use',
          {
            xlinkHref: '#' + symbol.id,
          }
        )
      );
    };

    SvgSpriteIcon.viewBox = symbol.viewBox;
    SvgSpriteIcon.id = symbol.id;
    SvgSpriteIcon.content = symbol.content;
    SvgSpriteIcon.url = symbol.url;
    SvgSpriteIcon.toString = symbol.toString;

    /* harmony default export */ __webpack_exports__["a"] = (SvgSpriteIcon);
  

/***/ }),

/***/ "./lib/adjustProductPrices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils__ = __webpack_require__("./lib/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var adjustDiscounts = function adjustDiscounts(discounts) {
  var today = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return discounts.map(function (discount) {
    var from = new Date(discount.from);
    from.setHours(0, 0, 0, 0);
    var to = new Date(discount.to);
    to.setHours(23, 59, 59, 999);
    var price = Number(discount.price);
    var formattedPrice = price === 0 ? 'Бесплатно' : __WEBPACK_IMPORTED_MODULE_0__lib_utils__["h" /* priceFormatter */].format(price);
    var formattedFrom = Object(__WEBPACK_IMPORTED_MODULE_0__lib_utils__["c" /* formatDate */])(from, __WEBPACK_IMPORTED_MODULE_0__lib_utils__["b" /* dateFormatter */]);
    var formattedTo = Object(__WEBPACK_IMPORTED_MODULE_0__lib_utils__["c" /* formatDate */])(to, __WEBPACK_IMPORTED_MODULE_0__lib_utils__["b" /* dateFormatter */]);
    return _objectSpread({}, discount, {
      from: {
        value: from,
        formatted: formattedFrom
      },
      to: {
        value: to,
        formatted: formattedTo
      },
      price: {
        value: price,
        formatted: formattedPrice
      }
    });
  }).sort(function (l, r) {
    var fromDelta = l.from - r.from;
    return fromDelta !== 0 ? fromDelta : l.to - r.to;
  }).map(function (discount) {
    if (today > discount.to.value) {
      //discount in past
      return _objectSpread({}, discount, {
        status: 'past'
      });
    } else if (today < discount.from.value) {
      //discount in future
      return _objectSpread({}, discount, {
        status: 'future'
      });
    } else {
      return _objectSpread({}, discount, {
        status: 'active'
      });
    }
  });
};

var adjustFullPrice = function adjustFullPrice(discounts, full_price) {
  var today = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var isActiveDiscounts = discounts.filter(function (discount) {
    return discount.status === 'active';
  }).length > 0;
  var maxFutureDate = discounts.filter(function (discount) {
    return today <= discount.to.value;
  }).map(function (discount) {
    return new Date(discount.to.value.getTime() + 1);
  }).reduce(function (result, current) {
    return current;
  }, null);
  var price = Number(full_price);
  var formattedPrice = price === 0 ? 'Бесплатно' : __WEBPACK_IMPORTED_MODULE_0__lib_utils__["h" /* priceFormatter */].format(price);
  return {
    price: {
      value: price,
      formatted: formattedPrice
    },
    status: isActiveDiscounts ? 'future' : 'active',
    from: maxFutureDate === null ? null : {
      value: maxFutureDate,
      formatted: __WEBPACK_IMPORTED_MODULE_0__lib_utils__["b" /* dateFormatter */].format(maxFutureDate)
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (function (prices) {
  var discounts = adjustDiscounts(prices.discounts || []);
  var full_price = adjustFullPrice(discounts, prices.full_price);
  return _objectSpread({}, prices, {
    discounts: discounts,
    full_price: full_price
  });
});

/***/ }),

/***/ "./lib/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mapToPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acfImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return priceFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dateFormatter; });
/* unused harmony export dateFormatterFull */
/* unused harmony export timeFormatter */
/* unused harmony export linkToProductsList */
/* unused harmony export linkToPostsList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pluralize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onFetchMore; });
/* unused harmony export updateCurrentRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return gotoWPRoute; });
/* harmony export (immutable) */ __webpack_exports__["i"] = stringMatchAll;
/* unused harmony export scheduleOrPeriod */
/* unused harmony export YA_COUNTER */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("../../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__("../../node_modules/qs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var mapToPage = __webpack_require__("../server/map-to-page.js");


var acfImage = function acfImage(image) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'original';
  return image && image.sizes ? {
    file: size === 'original' ? image.url : image.sizes[size],
    width: size === 'original' ? image.width : image.sizes["".concat(size, "-width")],
    height: size === 'original' ? image.height : image.sizes["".concat(size, "-height")]
  } : {};
};
var priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
var dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit'
});
var dateFormatterFull = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});
var timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  timeZone: 'UTC',
  hour: 'numeric',
  minute: '2-digit'
}); // export const pluralRules = new Intl.PluralRules("ru-RU")

var linkToProductsList = function linkToProductsList(product) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    template: product.pure_taxonomies.f3_product_category[0].slug,
    type: 'page',
    id: null,
    //28
    main_id: product.pure_taxonomies.f3_product_category[0].term_id,
    link: "/products/".concat(product.pure_taxonomies.f3_product_category[0].slug),
    query: query
  };
};
var linkToPostsList = function linkToPostsList(post) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    template: post.pure_taxonomies.categories[0].slug,
    type: 'page',
    id: null,
    //28
    main_id: post.pure_taxonomies.categories[0].term_id,
    link: "/".concat(post.pure_taxonomies.categories[0].slug),
    query: query
  };
};
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals
https://www.i18next.com/translation-function/plurals
 */

var pluralize = function pluralize(selectors) {
  return function (number) {
    var n = Math.abs(number);
    n %= 100;

    if (n >= 5 && n <= 20) {
      return selectors['many'];
    }

    n %= 10;

    if (n === 1) {
      return selectors['one'];
    }

    if (n >= 2 && n <= 4) {
      return selectors['few'];
    }

    return selectors['many'];
  };
};
var onFetchMore = function onFetchMore(fetchMore, offset, key) {
  return function () {
    console.log('onFetchMore key:', key);
    fetchMore({
      variables: {
        offset: offset
      },
      updateQuery: function updateQuery(prevResult, _ref) {
        var fetchMoreResult = _ref.fetchMoreResult;
        console.log('updateQuery prevResult:', prevResult, 'fetchMoreResult:', fetchMoreResult);
        return !fetchMoreResult ? prevResult : _objectSpread({}, prevResult, _defineProperty({}, key, _toConsumableArray(prevResult[key]).concat(_toConsumableArray(fetchMoreResult[key]))));
      }
    });
    updateCurrentRoute({
      internal: {
        offset: offset
      },
      replace: true
    });
  };
};
var updateCurrentRoute = function updateCurrentRoute(_ref2) {
  var _ref2$fragment = _ref2.fragment,
      fragment = _ref2$fragment === void 0 ? {} : _ref2$fragment,
      _ref2$internal = _ref2.internal,
      internal = _ref2$internal === void 0 ? {} : _ref2$internal,
      _ref2$replace = _ref2.replace,
      replace = _ref2$replace === void 0 ? false : _ref2$replace,
      _ref2$shallow = _ref2.shallow,
      shallow = _ref2$shallow === void 0 ? false : _ref2$shallow;

  if (!process.browser) {
    return;
  }

  var pathname = __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.pathname,
      query = __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.query,
      asPath = __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.asPath;

  var newQuery = _objectSpread({}, query, internal, fragment); // const {page_id, main_id, ...newAsQuery} = newQuery


  var newAsPath = asPath.split("?")[0];
  var newAsQuery = __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(fragment);
  __WEBPACK_IMPORTED_MODULE_1_next_router___default.a[replace ? "replace" : "push"]({
    pathname: pathname,
    query: newQuery
  }, "".concat(newAsPath).concat(newAsQuery ? '?' : '').concat(newAsQuery), {
    shallow: shallow
  });
};
var formatDate = function formatDate(date, formatter) {
  try {
    var theDate = new Date(date);
    return formatter.format(theDate);
  } catch (e) {
    return '';
  }
};
var gotoWPRoute = function gotoWPRoute(_ref3) {
  var wp = _ref3.wp,
      _ref3$fragment = _ref3.fragment,
      fragment = _ref3$fragment === void 0 ? {} : _ref3$fragment,
      _ref3$replace = _ref3.replace,
      replace = _ref3$replace === void 0 ? false : _ref3$replace,
      _ref3$shallow = _ref3.shallow,
      shallow = _ref3$shallow === void 0 ? false : _ref3$shallow;
  var wpLink = wp && (wp.link || wp.url || wp.post_link) || ''; // console.log('gotoWPRoute', mapToPage(wp, fragment))

  __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(mapToPage(wp, fragment), "".concat(wpLink, "?").concat(__WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(fragment)), {
    shallow: shallow
  });
};
function stringMatchAll(regex, input) {
  var _marked =
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(exec);

  function exec(regex, input) {
    var match;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function exec$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {
              _context.next = 8;
              break;
            }

            match = regex.exec(input);

            if (!(match === null)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("break", 8);

          case 4:
            _context.next = 6;
            return match;

          case 6:
            _context.next = 0;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  return _toConsumableArray(exec(regex, input));
}
var scheduleOrPeriod = function scheduleOrPeriod(product) {
  if (product.acf.period && product.acf.period[0]) {
    return [product.acf.period[0].date_start, product.acf.period[0].date_end];
  } else {
    return (product.acf.schedule || []).map(function (item) {
      return item.date;
    });
  }
};
var YA_COUNTER = 'yaCounter50284909';
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/with-apollo-client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_apollo__ = __webpack_require__("./lib/init-apollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("../../node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("../../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);

var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/lib/with-apollo-client.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




 // import propTypes from 'prop-types'

/* harmony default export */ __webpack_exports__["a"] = (function (App) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Apollo, _React$Component);

    _createClass(Apollo, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var Component, router, appProps, apolloState, apollo;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Component = ctx.Component, router = ctx.router;
                  appProps = {};

                  if (!App.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return App.getInitialProps(ctx);

                case 5:
                  appProps = _context.sent;

                case 6:
                  apolloState = {}; // Run all GraphQL queries in the component tree
                  // and extract the resulting data

                  apollo = Object(__WEBPACK_IMPORTED_MODULE_2__init_apollo__["a" /* default */])();
                  _context.prev = 8;
                  _context.next = 11;
                  return Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, _extends({}, appProps, {
                    Component: Component,
                    router: router,
                    apolloState: apolloState,
                    apolloClient: apollo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    }
                  })));

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](8);
                  // Prevent Apollo Client GraphQL errors from crashing SSR.
                  // Handle them in components via the data.error prop:
                  // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                  console.error('Error while running `getDataFromTree`', _context.t0);

                case 16:
                  if (!process.browser) {
                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    __WEBPACK_IMPORTED_MODULE_3_next_head___default.a.rewind(); // console.log(apollo.cache.extract())
                  } // Extract query data from the Apollo store


                  apolloState.data = apollo.cache.extract();
                  return _context.abrupt("return", _objectSpread({}, appProps, {
                    apolloState: apolloState
                  }));

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function Apollo(props) {
      var _this;

      _classCallCheck(this, Apollo);

      _this = _possibleConstructorReturn(this, (Apollo.__proto__ || Object.getPrototypeOf(Apollo)).call(this, props)); // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline

      _this.apolloClient = props.apolloClient || Object(__WEBPACK_IMPORTED_MODULE_2__init_apollo__["a" /* default */])(props.apolloState.data);
      return _this;
    }

    _createClass(Apollo, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, _extends({}, this.props, {
          apolloClient: this.apolloClient,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }));
      }
    }]);

    return Apollo;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'withApollo(App)'
  }), _temp;
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("../../node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("../../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_with_apollo_client__ = __webpack_require__("./lib/with-apollo-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_LoadingProgress__ = __webpack_require__("./components/LoadingProgress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_style_scss__ = __webpack_require__("./styles/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_style_scss__);

var _jsxFileName = "/Volumes/MyComputer/MyWork/family3-edge-bug/src/next/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









if (process.browser) {
  __webpack_require__("../../node_modules/intl/index.js");

  __webpack_require__("../../node_modules/intl/locale-data/jsonp/ru-RU.js");
}

var SiteApp =
/*#__PURE__*/
function (_App) {
  _inherits(SiteApp, _App);

  function SiteApp() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SiteApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SiteApp.__proto__ || Object.getPrototypeOf(SiteApp)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "setMenuToContext", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(main, routing) {}
    }), _temp));
  }

  _createClass(SiteApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          apolloClient = _props.apolloClient;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_LoadingProgress__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var Component, router, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref2.Component, router = _ref2.router, ctx = _ref2.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return SiteApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4__lib_with_apollo_client__["a" /* default */])(SiteApp));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../node_modules/process/browser.js"), __webpack_require__("../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.e98ce36c0c6db2a3965e.hot-update.js.map