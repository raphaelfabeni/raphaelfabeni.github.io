var changeColor = {

  init(btn, hold, arrColors) {
    this.prepare(btn, hold, arrColors);
    this.bind();
    this.render();
  },

  prepare(btn, hold, arrColors) {
    this.elements = {};
    this.elements.btnColor = btn || document.getElementById('color');
    this.elements.holdColor = hold || document.getElementById('hold');

    this.colors = arrColors || ['default', 'gray', 'brown', 'blue', 'purple'];
    this.state = this.getInitialState();
  },

  getInitialState() {
    let localColor = this.hasLocalColor();
    return {
      currentColor: (localColor) ? localColor : this.getColor()
    };
  },

  getColor() {
    return this.elements.holdColor.getAttribute('data-color');
  },

  randomColor() {
    let random  = this.colors[ Math.floor(Math.random() * this.colors.length)],
        exclude = this.getColor();

    if(random === exclude) {
      this.randomColor(); 
    } else {
      return random;
    }
  },

  setState() {
    this.state.currentColor = this.randomColor();
  },

  setLocal() {
    localStorage.setItem('userColor', this.state.currentColor);
  },

  hasLocalColor() {
    return localStorage.getItem('userColor');
  },

  bind() {
    this.elements.btnColor.addEventListener('click', function() {
      console.log(this);
      this.setState();
      this.render();
      this.setLocal();
    }.bind(this));
  },

  render() {
    this.elements.holdColor.setAttribute('data-color', this.state.currentColor); 
  }
};