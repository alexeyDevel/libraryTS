"use strict";
System.register("ts/models/book/Interfaces", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/models/book/classes", [], function (exports_2, context_2) {
    "use strict";
    var uuid, Book, BooksRepository;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            uuid = require("uuid").v4;
            Book = class Book {
            };
            BooksRepository = class BooksRepository {
            };
        }
    };
});
