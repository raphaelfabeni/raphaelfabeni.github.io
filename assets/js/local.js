var DataColor = function(button, hold) {
    this.button = button;
    this.hold = hold;
    this.init();
};

// Gets the attribute for color
DataColor.prototype.getColor = function() {
    return this.hold.getAttribute('data-color');
};

// Simple store the color in localStorage
DataColor.prototype.storeColor = function(color) {
    localStorage.setItem('userColor', color);
};

// Starts the magic
DataColor.prototype.init = function() {
    this.applyColor();

    var that = this;
    this.button.addEventListener('click', function() {
        setTimeout(function() {
            that.storeColor(that.getColor());
        }, 500);
    }, false);
};

// If there is a item for userColor, so apply in the data-color
// attribute in hold element
DataColor.prototype.applyColor = function() {
    if(localStorage.getItem('userColor')) {
        var recoveredColor = localStorage.getItem('userColor');
        this.hold.setAttribute('data-color', recoveredColor);
    }
};
