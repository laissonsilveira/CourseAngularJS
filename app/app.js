(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [{
        name: "Dodecahedron", price: 2.95, description: "bla bla bla bla bla", canPurchase: true
    }, {
        name: "Pentagonal Gem", price: 5.95, description: "lek lek lek lek", canPurchase: false
    }];
})();