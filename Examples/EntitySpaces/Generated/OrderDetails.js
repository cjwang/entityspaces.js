﻿/* File Created: December 22, 2011 */

(function (es) { //myNS = "myNameSpace" ... for example purposes

    if (typeof (es) === undefined) {
        throw "Please Load EntitySpaces.Core First";
    }

    es.objects.OrderDetails = es.defineEntity(function () {

        // core columns
        this.OrderID = ko.observable();
        this.ProductID = ko.observable();
        this.UnitPrice = ko.observable();
        this.Quantity = ko.observable();
        this.Discount = ko.observable();

        // extended colulmns
        this.esExtendedData;
    });

    //#region Routing

    es.objects.OrderDetails.prototype.routes = {
        commit: { method: 'PUT', url: 'OrderDetails_Save', response: 'entity' },
        loadByPrimaryKey: { method: 'GET', url: 'OrderDetails_LoadByPrimaryKey', response: 'entity', synchronous: true }
    };

    //#endregion
} (window.es, window.myNS));

(function (es) {

    es.objects.OrderDetailsCollection = es.defineCollection('OrderDetailsCollection', 'OrderDetails');

    //#region Routing

    es.objects.OrderDetailsCollection.prototype.routes = {
        commit: { method: 'PUT', url: 'OrdersCollection_Save', response: 'collection' },
        loadAll: { method: 'GET', url: 'OrdersCollection_LoadAll', response: 'collection', synchronous: true }
    };

    //#endregion
} (window.es));