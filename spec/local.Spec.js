describe('DataColor', function() {

  var buttonColor,
      hold,
      local,
      dataColor,
      storedColor,
      newLocal;

  beforeEach(function() {

    // Create elements
    buttonColor = document.createElement('button');
    hold = document.createElement('div');
    local = localStorage.getItem('userColor');

    // Apply attributes in elements
    hold.setAttribute('data-color', 'default');

    // Starts the DataColor component
    dataColor = new DataColor(buttonColor, hold);

    // Spies
    spyOn(dataColor, 'getColor').and.callThrough();
    spyOn(dataColor, 'storeColor').and.callThrough();

    // Methods
    storedColor = dataColor.getColor();

    dataColor.storeColor('blue');
    newLocal = localStorage.getItem('userColor');

  });

  afterEach(function() {

    // Reset the data-color attribute
    hold.setAttribute('data-color', 'default');

    // Remove localStorage
    localStorage.removeItem('userColor');

  });

  it('should starts with default class in body', function() {
    expect(hold.getAttribute('data-color')).toEqual('default');
  });

  it('should have no localStorage', function() {
    expect(local).toBeNull();
  });

  it('tracks the getColor method', function() {
    expect(dataColor.getColor).toHaveBeenCalled();
  });

  it('gets the correct color from hold element', function() {
    expect(storedColor).toEqual('default');
  });

  it('tracks the storeColor method', function() {
    expect(dataColor.storeColor).toHaveBeenCalled();
  });

  it('tracks the storeColor method with the new color', function() {
    expect(dataColor.storeColor).toHaveBeenCalledWith('blue');
  });

  it('tracks the new localStorage item with the new color', function() {
    expect(newLocal).toEqual('blue');
  });

  it('should apply new color with applyColor method', function() {
    dataColor.storeColor('red');
    dataColor.applyColor();

    var localColor = localStorage.getItem('userColor');

    expect(hold.getAttribute('data-color')).toEqual('red');
    expect(localColor).toEqual('red');
  });

  it('should call the storeColor method after the click', function() {
    buttonColor.click();

    expect(dataColor.storeColor).toHaveBeenCalled();
  });

});
