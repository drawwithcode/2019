let home = ["1", "0", "0"];
let lectures = ["1", "0", "1"];
let code = [];
let page = location.hash;

function preload(){
  // put preload code here
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  noStroke();
  background(0);
  colorMode(RGB, 8);

  print(lectures);

  $("#assignments").hide();
}

function draw() {
  for (var x = 0; x < width/2; x += 6) {

    for (var y = 0; y < height/2; y += 6){
      var col = random(0,9);
      fill(col);
      // line bwlow eliminates the lines(stroke) around the boxes (0)
      strokeWeight(0);
      // shape and one dimension
      rect(x, y, 6, 6);
      rect(x+width/2, y, 6, 6);
      rect(x, y+height/2, 6, 6);
      rect(x+width/2, y+height/2, 6, 6);
    }
  }
}

function keyTyped() {
  append(code, key);
  $(".channel").html(code);
  print(code);

  if ( JSON.stringify(code) == JSON.stringify(home) ) {
    history.pushState(null, null, '#');
    print("HOME");
    code = [];
    print(code);

    $("#assignments").hide();
    $("#home").show();
    return true;
  }

  if ( JSON.stringify(code) == JSON.stringify(lectures) ) {
    history.pushState(null, null, '#lectures');
    print("LECTURES");
    code = [];
    print(code);

    $("#home").hide();
    $("#assignments").show();
    return true;
  }

  if ( code.length > 2 ) {
    code = [];
  }
}
