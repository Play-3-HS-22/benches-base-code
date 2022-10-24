
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

  // transfrom the coordinates from LV95 to WGS84
  for (let i = 0; i < benches.features.length; i++) {
    let bench = benches.features[i]
    let coordinates = bench.geometry.coordinates

    // conversion using this script https://gist.github.com/loleg/06ad3db0cbbfadb200be7fc0b1451c35
    let wgs84 = fromLV95(coordinates);

    // console.log(wgs84)
    bench.geometry.coordinates = wgs84
  }


  console.log(benches)

  // save benches as json
  // saveJSON(benches, 'SITZBANK_SITZBANK_WGS84.json')


}

function draw() {
  background(220);

  for (let i = 0; i < benches.features.length; i++) {
    let bench = benches.features[i]
    let coordinates = bench.geometry.coordinates
    let pos = projection(coordinates)
    ellipse(pos[0], pos[1], 10, 10)
  }
}
