abstract class Vehicle {
  title:string;
  author:string;
  genre:string;
  publisher:string;
  rating:number;
  imgSrc:string;
  constructor(title:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
    this.rating = rating;
    this.imgSrc = imgSrc;


  }
  render():string{

          let writeOut:string = '<li>' + 'Title ' + this.title + '</li>';
          writeOut += '<li>' + 'Author  ' + this.author + '</li>';
          writeOut += '<li>' + 'Genre ' + this.genre + '</li>';
          writeOut += '<li>' + 'Publisher ' + this.publisher + '</li>';
    return writeOut;
  }
  getImgSrc():string{
    return this.imgSrc;
  }
  getProducer():string{
    return this.title;
  }
  }



class Movie extends Vehicle{

  constructor(title:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);

  }
  render():string{
    let writeOut:string = "<div class=\"row MovieStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6 MovieStyle\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>' //to get the star
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }




}

class Cd extends Vehicle{
  constructor(title:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);
  }
  render():string{
    let writeOut:string = "<div class=\"row CdStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>'
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }



}

class Comic extends Vehicle{
  constructor(title:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);

  }
  render():string{
    let writeOut:string = "<div class=\"row ComicStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>'
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }

}

class Book extends Vehicle{

  constructor(title:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);

  }
  render():string{
    let writeOut:string = "<div class=\"row BookStyle\">";
    writeOut += "<div class=\"col-lg-6 col-mg-6 col-sm-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>' 
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }


}

class Seller{
  vehiclesArray:Array<Vehicle>;
  firstMovie:Vehicle;
  secondMovie:Vehicle;
  firstCd:Vehicle;
  secondCd:Vehicle;
  firstComic:Vehicle;
  secondComic:Vehicle;
  firstBook:Vehicle;
  secondBook:Vehicle;
  newCar:Vehicle;
  vehicleCounterMap:Map<String,number>;
  constructor(testArray:Array<Vehicle>){
  this.vehiclesArray =testArray;
  this.vehicleCounterMap = new Map<String,number>();
  }
  showArray(){
    console.log(this.vehiclesArray);
  }
  renderAll(){
    for(let i= 0;i<this.vehiclesArray.length;i++){
      document.getElementById('vehicleList').innerHTML += this.vehiclesArray[i].render();
    }
  }
  countTypeOfVehicles(){
    this.vehicleCounterMap.set('Cars',0);
    this.vehicleCounterMap.set('Motorbikes',0);
    this.vehicleCounterMap.set('Bus',0);
    this.vehicleCounterMap.set('Trucks',0);
    for(let i= 0;i<this.vehiclesArray.length;i++){
      if(this.vehiclesArray[i] instanceof Car){
        let val:number = this.vehicleCounterMap.get('Cars')+1;
        this.vehicleCounterMap.set('Cars',val);
      }
      if(this.vehiclesArray[i] instanceof Motorbike){
        let val:number = this.vehicleCounterMap.get('Motorbikes')+1;
        this.vehicleCounterMap.set('Motorbikes',val);

      }
      if(this.vehiclesArray[i] instanceof Bus){
        let val:number = this.vehicleCounterMap.get('Bus')+1;
        this.vehicleCounterMap.set('Bus',val);

      }
      if(this.vehiclesArray[i] instanceof Truck){
        let val:number = this.vehicleCounterMap.get('Trucks')+1;
        this.vehicleCounterMap.set('Trucks',val);
      }
    }
    console.log(this.vehicleCounterMap);
  }



}
