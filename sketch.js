let homeIndex = ["1", "0", "0"];
let lecturesIndex = ["1", "0", "1"];
let assignmentsIndex = ["2", "0", "1"];
let code = [];
let page = location.hash;

let home;
let lectures;
let assignments;

function preload(){
  // put preload code here
}

function setup() {
  home = select("#home");
  lectures = select("#lectures");
  assignments = select("#assignments");

  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  noStroke();
  background(0);
  colorMode(RGB, 8);

  lectures.hide();
  assignments.hide();
}

function draw() {
  // ciao.hide();

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

  if ( JSON.stringify(code) == JSON.stringify(homeIndex) ) {
    history.pushState(null, null, '#');
    print("HOME");
    code = [];
    print(code);

    home.show();
    lectures.hide();
    assignments.hide();
    return true;
  }

  if ( JSON.stringify(code) == JSON.stringify(lecturesIndex) ) {
    history.pushState(null, null, '#lectures');
    print("LECTURES");
    code = [];
    print(code);

    home.hide();
    lectures.show();
    assignments.hide();
    return true;
  }

  if ( JSON.stringify(code) == JSON.stringify(assignmentsIndex) ) {
    history.pushState(null, null, '#assignments');
    print("ASSIGNMENTS");
    code = [];
    print(code);

    home.hide();
    lectures.hide();
    assignments.show();
    return true;
  }

  if ( code.length > 2 ) {
    code = [];
  }
}
