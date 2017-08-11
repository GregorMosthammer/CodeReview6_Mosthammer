var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(title, author, genre, publisher, rating, imgSrc) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.rating = rating;
        this.imgSrc = imgSrc;
    }
    Vehicle.prototype.render = function () {
        var writeOut = '<li>' + 'Title ' + this.title + '</li>';
        writeOut += '<li>' + 'Author  ' + this.author + '</li>';
        writeOut += '<li>' + 'Genre ' + this.genre + '</li>';
        writeOut += '<li>' + 'Publisher ' + this.publisher + '</li>';
        return writeOut;
    };
    Vehicle.prototype.getImgSrc = function () {
        return this.imgSrc;
    };
    Vehicle.prototype.getProducer = function () {
        return this.title;
    };
    return Vehicle;
}());
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie(title, author, genre, publisher, rating, imgSrc) {
        return _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
    }
    Movie.prototype.render = function () {
        var writeOut = "<div class=\"row MovieStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 MovieStyle\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>'; //to get the star
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Movie;
}(Vehicle));
var Cd = (function (_super) {
    __extends(Cd, _super);
    function Cd(title, author, genre, publisher, rating, imgSrc) {
        return _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
    }
    Cd.prototype.render = function () {
        var writeOut = "<div class=\"row CdStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Cd;
}(Vehicle));
var Comic = (function (_super) {
    __extends(Comic, _super);
    function Comic(title, author, genre, publisher, rating, imgSrc) {
        return _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
    }
    Comic.prototype.render = function () {
        var writeOut = "<div class=\"row ComicStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Comic;
}(Vehicle));
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre, publisher, rating, imgSrc) {
        return _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
    }
    Book.prototype.render = function () {
        var writeOut = "<div class=\"row BookStyle\">";
        writeOut += "<div class=\"col-lg-6 col-mg-6 col-sm-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Book;
}(Vehicle));
var Seller = (function () {
    function Seller(testArray) {
        this.vehiclesArray = testArray;
        this.vehicleCounterMap = new Map();
    }
    Seller.prototype.showArray = function () {
        console.log(this.vehiclesArray);
    };
    Seller.prototype.renderAll = function () {
        for (var i = 0; i < this.vehiclesArray.length; i++) {
            document.getElementById('vehicleList').innerHTML += this.vehiclesArray[i].render();
        }
    };
    Seller.prototype.countTypeOfVehicles = function () {
        this.vehicleCounterMap.set('Cars', 0);
        this.vehicleCounterMap.set('Motorbikes', 0);
        this.vehicleCounterMap.set('Bus', 0);
        this.vehicleCounterMap.set('Trucks', 0);
        for (var i = 0; i < this.vehiclesArray.length; i++) {
            if (this.vehiclesArray[i] instanceof Car) {
                var val = this.vehicleCounterMap.get('Cars') + 1;
                this.vehicleCounterMap.set('Cars', val);
            }
            if (this.vehiclesArray[i] instanceof Motorbike) {
                var val = this.vehicleCounterMap.get('Motorbikes') + 1;
                this.vehicleCounterMap.set('Motorbikes', val);
            }
            if (this.vehiclesArray[i] instanceof Bus) {
                var val = this.vehicleCounterMap.get('Bus') + 1;
                this.vehicleCounterMap.set('Bus', val);
            }
            if (this.vehiclesArray[i] instanceof Truck) {
                var val = this.vehicleCounterMap.get('Trucks') + 1;
                this.vehicleCounterMap.set('Trucks', val);
            }
        }
        console.log(this.vehicleCounterMap);
    };
    return Seller;
}());
