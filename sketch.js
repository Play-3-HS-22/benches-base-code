
let benches = []

var projection = d3
  .geoMercator()
  .center([8.3090, 47.0502])
  .translate([400, 400])
  .scale(300000)


function preload() {
  benches = loadJSON('SITZBANK_SITZBANK.json')
}

function setup() {
  createCanvas(800, 800);

  console.log(benches);

}

function draw() {
  background(220);
}
