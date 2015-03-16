describe('ChangeColor', function() {

  var buttonColor,
      hold,
      changeColor,
      storedColor,
      colorArray,
      newColor;

  beforeEach(function() {
    
    // Create elements
    buttonColor = document.createElement('button');
    hold = document.createElement('div');
    colorArray = ['default', 'gray', 'brown', 'blue', 'purple'];

    // Apply attributes in elements
    hold.setAttribute('data-color', 'default');

    // Starts the ChangeColor component
    changeColor = new ChangeColor(buttonColor, hold);

    // Spies
    spyOn(changeColor, 'getColor').and.callThrough();
    spyOn(changeColor, 'randomColor').and.callThrough();
    spyOn(changeColor, 'applyColor').and.callThrough();

    // Methods
    storedColor = changeColor.getColor();
    newColor = changeColor.randomColor(colorArray, storedColor);
    changeColor.applyColor();

  });

  afterEach(function() {

    // Reset the data-color attribute
    hold.setAttribute('data-color', 'default');

  });

  it('tracks the getColor method', function() {
    expect(changeColor.getColor).toHaveBeenCalled();
  });

  it('should be default color in data-color attribute', function() {
    expect(storedColor).toEqual('default');
  });

  it('should track the randomColor method', function() {
    expect(changeColor.randomColor).toHaveBeenCalled();
  });

  it('should track the correct parameters for randomColor method', function() {
    expect(changeColor.randomColor).toHaveBeenCalledWith(colorArray, 'default');
  });

  it('should return a color different from current', function() {
    expect(newColor).not.toEqual('default');
  });

  it('should track the applyColor method', function() {
    expect(changeColor.applyColor).toHaveBeenCalled();
  });

  it('should returns a different color in data-color attribute after the applyColor', function() {
    expect(changeColor.getColor).not.toEqual('default');
  });

  
});