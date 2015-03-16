var ChangeColor = function(button, hold) {
    this.button = button;
    this.hold = hold;
    this.colors = ['default', 'gray', 'brown', 'blue', 'purple'];

    this.init();
};

// Returns the attribute data-color of hold element
ChangeColor.prototype.getColor = function() {
    return this.hold.getAttribute('data-color');
};

// Sort a random value for match a new item of array
ChangeColor.prototype.randomColor = function(group, excludeColor) {
    var rand = Math.floor(Math.random() * group.length);
    if(group[rand] === excludeColor) {
        this.randomColor(group, excludeColor);
    } else {
        return group[rand];
    }
};

// Apply the new color in data-color attribute
ChangeColor.prototype.applyColor = function() {
    var currentColor = this.getColor(),
        newColor = this.randomColor(this.colors, currentColor);

    this.hold.setAttribute('data-color', newColor);
};

// Starts the component
ChangeColor.prototype.init = function() {
    var that = this;
    this.button.addEventListener('click', function() {
        that.applyColor();
    }, false);
};