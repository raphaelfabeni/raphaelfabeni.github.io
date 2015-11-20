var changeColor = {

  init: function(btn, hold, arrColors) {
    this.prepare(btn, hold, arrColors);
    this.bind();
    this.render();
  },

  prepare: function(btn, hold, arrColors) {
    this.elements = {};
    this.elements.btnColor = btn || document.getElementById('color');
    this.elements.holdColor = hold || document.getElementById('hold');

    this.colors = arrColors || ['default', 'gray', 'brown', 'blue', 'purple'];
    this.state = this.getInitialState();
  },

  getInitialState: function() {
    var localColor = this.hasLocalColor();
    return {
      currentColor: (localColor) ? localColor : this.getColor()
    };
  },

  getColor: function() {
    return this.elements.holdColor.getAttribute('data-color');
  },

  randomColor: function() {
    var random  = this.colors[ Math.floor(Math.random() * this.colors.length)],
        exclude = this.getColor();

    if(random === exclude) {
      this.randomColor(); 
    } else {
      return random;
    }
  },

  setState: function() {
    this.state.currentColor = this.randomColor();
  },

  setLocal: function() {
    localStorage.setItem('userColor', this.state.currentColor);
  },

  hasLocalColor: function() {
    return localStorage.getItem('userColor');
  },

  bind: function() {
    this.elements.btnColor.addEventListener('click', function() {
      this.setState();
      this.render();
      this.setLocal();
    }.bind(this));
  },

  render: function() {
    this.elements.holdColor.setAttribute('data-color', this.state.currentColor); 
  }
};