'use strict';

var changeColor = {
  init: function init(btn, hold, arrColors) {
    this.prepare(btn, hold, arrColors);
    this.bind();
    this.render();
  },
  prepare: function prepare(btn, hold, arrColors) {
    this.elements = {};
    this.elements.btnColor = btn || document.getElementById('color');
    this.elements.holdColor = hold || document.getElementById('hold');

    this.colors = arrColors || ['default', 'gray', 'brown', 'blue', 'purple'];
    this.state = this.getInitialState();
  },
  getInitialState: function getInitialState() {
    var localColor = this.hasLocalColor();
    return {
      currentColor: localColor ? localColor : this.getColor()
    };
  },
  getColor: function getColor() {
    return this.elements.holdColor.getAttribute('data-color');
  },
  randomColor: function randomColor() {
    var random = this.colors[Math.floor(Math.random() * this.colors.length)],
        exclude = this.getColor();

    if (random === exclude) {
      this.randomColor();
    } else {
      return random;
    }
  },
  setState: function setState() {
    this.state.currentColor = this.randomColor();
  },
  setLocal: function setLocal() {
    localStorage.setItem('userColor', this.state.currentColor);
  },
  hasLocalColor: function hasLocalColor() {
    return localStorage.getItem('userColor');
  },
  bind: function bind() {
    var _this = this;

    this.elements.btnColor.addEventListener('click', function () {
      console.log(_this);
      _this.setState();
      _this.render();
      _this.setLocal();
    });
  },
  render: function render() {
    this.elements.holdColor.setAttribute('data-color', this.state.currentColor);
  }
};
//# sourceMappingURL=colors.js.map
