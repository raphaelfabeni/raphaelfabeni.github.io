describe('change color', function() {

  var btnColor,
      holdColor,
      colors,
      tempColor,
      defaultColor,
      newColor,
      stateColor,
      initialLocal,
      initialState;

  beforeEach(function() {

    // Create elements
    btnColor  = document.createElement('button');
    holdColor = document.createElement('div');
    colors    = ['default', 'gray', 'brown', 'blue', 'purple'];

    // Apply attributes in elements
    holdColor.setAttribute('data-color', 'default');

    // Starts the component
    changeColor.init(btnColor, holdColor, colors);

    // Spies
    spyOn(changeColor, 'getColor').and.callThrough();
    spyOn(changeColor, 'randomColor').and.callThrough();
    spyOn(changeColor, 'hasLocalColor').and.callThrough();
    spyOn(changeColor, 'getInitialState').and.callThrough();

    spyOn(changeColor, 'render').and.callThrough();
    spyOn(changeColor, 'setLocal').and.callThrough();

    // Store some default values for methods
    defaultColor = changeColor.getColor();
    newColor     = changeColor.randomColor();
    initialState = changeColor.getInitialState();
    initialLocal = changeColor.hasLocalColor();
  });

  afterEach(function() {

    // Remove the localStorage item userColor
    localStorage.removeItem('userColor');

    changeColor.state.currentColor = 'default';

    // Reset the data-color attribute
    holdColor.setAttribute('data-color', 'default');

  });

  it('should start with default data-color attr in body', function() {
    expect(holdColor.getAttribute('data-color')).toEqual('default');
  });

  it('should getColor method return the correct value', function() {
    expect(defaultColor).toEqual('default');
  });

  it('should track the getColor method', function() {
    expect(changeColor.getColor).toHaveBeenCalled();
  });

  it('should track the randomColor method', function() {
    expect(changeColor.randomColor).toHaveBeenCalled();
  });

  it('should return a color different from current', function() {
    expect(newColor).not.toEqual('default');
  });

  it('should return the default color for initial currentColor property of state object', function() {
    expect(initialState.currentColor).toEqual('default');
  });

  it('should track the hasLocalColor method', function() {
    expect(changeColor.hasLocalColor).toHaveBeenCalled();
  });

  it('should return null for initial localStorage item userColor', function() {
    expect(initialLocal).toBeNull();
  });

  it('shoud store/update userColor item in localStorage', function() {
    changeColor.setLocal(newColor);
    var newLocal = changeColor.hasLocalColor();
    expect(newLocal).toBeTruthy();
  });

  it('should update store/update userColor item in localStorage with the correct color', function() {
    changeColor.state.currentColor = 'red';
    changeColor.setLocal();
    expect(localStorage.getItem('userColor')).toEqual('red');  
  });

  it('should return the currentColor property of state object different from default', function() {
    changeColor.setState();
    expect(changeColor.state.currentColor).not.toEqual('default');
  });

  it('should track the getInitialState method', function() {
    expect(changeColor.getInitialState).toHaveBeenCalled();
  });

  it('should body has a new data-color attr after the methods', function() {
    changeColor.setState();
    changeColor.render();
    expect(holdColor.getAttribute('data-color')).not.toEqual('default');
  });

  it('should run the render method after the click', function() {
    btnColor.click();
    expect(changeColor.render).toHaveBeenCalled();
  });

  it('should run the setLocal method after the click', function() {
    btnColor.click();
    expect(changeColor.setLocal).toHaveBeenCalled();
  });
  
});