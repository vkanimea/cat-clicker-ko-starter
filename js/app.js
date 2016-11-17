var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg')
  this.nicknames = ko.observableArray(['tub', 'tab', 'tubby', 'T-bone' ]);
  this.levels = ko.computed( function() {
     var clicks = this.clickCount();
     var levels;
     if (clicks < 10) {
            levels = 'Infant';
     }
     else if  (clicks <  20 )  {
            levels = "Teen";
     }
     else {
            levels = "Adult";
     }
     return levels;

    },this);
}

var ViewModel = function() {
   var self = this;
   this.currCat =  ko.observable(new Cat());

  this.incrementCounter = function() {
     self.clickCount(self.clickCount() + 1);
  };

}


ko.applyBindings (new ViewModel());
