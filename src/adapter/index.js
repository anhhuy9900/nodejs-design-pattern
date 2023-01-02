var __extends = (this && this.__extends) || (function () {
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
var OrderPayment = /** @class */ (function () {
    function OrderPayment() {
    }
    OrderPayment.prototype.toBuy = function () {
        return 'Buy a product from payment normal method save data';
    };
    return OrderPayment;
}());
var buy = new OrderPayment();
console.log(buy.toBuy());
/**
 * Service Pay pal
 */
var ServicePayPal = /** @class */ (function () {
    function ServicePayPal() {
    }
    ServicePayPal.prototype.buy = function () {
        return 'Buy a product from payment pay pal service';
    };
    return ServicePayPal;
}());
var AdapterPayment = /** @class */ (function (_super) {
    __extends(AdapterPayment, _super);
    function AdapterPayment(paymentPayPal) {
        var _this = _super.call(this) || this;
        _this.paymentPayPal = paymentPayPal;
        return _this;
    }
    AdapterPayment.prototype.toBuy = function () {
        var buyPayPal = this.paymentPayPal.buy();
        console.log(buyPayPal);
        return _super.prototype.toBuy.call(this);
    };
    return AdapterPayment;
}(OrderPayment));
var newPayment = new AdapterPayment(new ServicePayPal);
console.log('##### Adapter ####');
console.log(newPayment.toBuy());
