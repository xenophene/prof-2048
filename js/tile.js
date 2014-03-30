function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.display          = this.getDisplayImage() || 3;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.getDisplayImage = function () {
  var image_map = {
    2: 'bagchi.jpg',
  };
  return '<img src="http://www.cse.iitd.ac.in/images/faculty/' +
      image_map[this.value] + '" class="image"/>';
};

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
