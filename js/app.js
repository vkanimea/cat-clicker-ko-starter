var initalCats = [
   {
     clickCount : 0,
     name :  'Tabby',
     imgSrc : 'img/1.jpg',
     nicknames : 'TabTab'
   },
   {
     clickCount : 0,
     name :  'Tiger',
     imgSrc : 'img/2.jpg',
     nicknames : 'T-Bone'
   },
   {
     clickCount : 0,
     name :  'Scaredy',
     imgSrc : 'img/3.jpg',
     nicknames : 'Mr T'
   },
   {
     clickCount : 0,
     name :  'Shadow',
     imgSrc : 'img/4.jpg',
     nicknames : 'TibY'
   },
   {
     clickCount : 0,
     name :  'Mickey',
     imgSrc : 'img/5.jpg',
     nicknames : 'zzzzz'
   }
]

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc)
  this.nicknames = ko.observable(data.nicknames);

  this.levels = ko.computed( function() {
     var clicks = this.clickCount();
     var levels;
     if (clicks < 10) {
            levels = 'You are still an Infant';
     }
     else if  (clicks <  20 )  {
            levels = "Wow a Teen Now";
     }
     else {
            levels = "Now you are an Adult";
     }
     return levels;

    },this);
}

var ViewModel = function() {
   var self = this;

   this.catList = ko.observableArray([]);

    initalCats.forEach(function(data) {
     self.catList.push( new Cat (data) );
   });


   this.currCat =  ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
     this.clickCount(this.clickCount() + 1);
  };

}


ko.applyBindings (new ViewModel());
