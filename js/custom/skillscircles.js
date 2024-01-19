const dataset = [3.5, 3.5, 1, 1.5, 0.5];

const colors = ['#f1a836', '#082144', '#F5C272', '#394d69', '#394d69'];
const texts = ['HTML', 'CSS', 'JS', 'PHP', 'SQL'];


const width = document.querySelector('.circles-container').offsetWidth;
const height = document.querySelector('.circles-container').offsetHeight;
const minOfWH = Math.min(width, height) / 2;
const initialAnimDelay = 300;
const arcAnimDelay = 150;
const arcAnimDur = 3000;
const secDur = 1600;
const secIndividualdelay = 150;

let radius;

// calculate minimum of width and height to set chart radius
if (minOfWH > 200) {
  radius = 240;
} else {
  radius = minOfWH;
}

// append svg
let svg = d3.select('.circles-container').append('svg').
attr({
  'width': width,
  'height': height,
  'class': 'pieChart' }).

append('g');

svg.attr({
  'transform': `translate(${width / 2}, ${height / 2})` });


// for drawing slices
let arc = d3.svg.arc().
outerRadius(radius * 0.55).
innerRadius(radius * 0.75);

// for labels and polylines
let outerArc = d3.svg.arc().
innerRadius(radius * 0.85).
outerRadius(radius * 0.85);

// d3 color generator
// let c10 = d3.scale.category10();

let pie = d3.layout.pie().
value(d => d);

let draw = function () {

  svg.append("g").attr("class", "lines");
  svg.append("g").attr("class", "slices");
  svg.append("g").attr("class", "labels");


  // define slice
  let slice = svg.select('.slices').
  datum(dataset).
  selectAll('path').
  data(pie);
  slice.
  enter().append('path').
  attr({
    'fill': (d, i) => colors[i],
    'd': arc,
    'stroke-width': '25px',
    'transform': (d, i) => 'rotate(-180, 0, 0)',
    'id': (d, i) => 'path' + [i+1]
    }).

  style('opacity', 0).
  transition().
  delay((d, i) => i * arcAnimDelay + initialAnimDelay).
  duration(arcAnimDur).
  ease('elastic').
  style('opacity', 1).
  attr('transform', 'rotate(0,0,0)');


    $(document).ready(function() { 
        $(function(){
            $.each(new Array(6), function(k){
                $('#path' + k).hover((function(k){
                        return function() {
                            $('#inner-circle' + k).css('opacity', '1');
                        }
                    })(k),
                    (function(k){
                        return function() {
                            $('#inner-circle' + k).css('opacity', '0');
                        }
                    })(k)
                );
            });
        });
    });

  slice.transition().
  delay((d, i) => arcAnimDur + i * secIndividualdelay).
  duration(secDur).
  attr('stroke-width', '5px');

  let midAngle = d => d.startAngle + (d.endAngle - d.startAngle) / 2;

  let text = svg.select(".labels").selectAll("text").
  data(pie(dataset));

  text.enter().
  append('text').
  attr('dy', '0.35em').

  style("opacity", 0).
  style('fill', (d, i) => colors[i]).
  text((d, i) => texts[i]).
  attr('transform', d => {
    // calculate outerArc centroid for 'this' slice
    let pos = outerArc.centroid(d);
    // define left and right alignment of text labels 							
    pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
    return `translate(${pos})`;
  }).
  style('text-anchor', d => midAngle(d) < Math.PI ? "start" : "end").
  transition().
  delay((d, i) => arcAnimDur + i * secIndividualdelay).
  duration(secDur).
  style('opacity', 1);

  let polyline = svg.select(".lines").selectAll("polyline").
  data(pie(dataset));

  polyline.enter().
  append("polyline").
  style("opacity", 0.5).
  attr('points', d => {
    let pos = outerArc.centroid(d);
    pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
    return [arc.centroid(d), arc.centroid(d), arc.centroid(d)];
  }).
  transition().
  duration(secDur).
  delay((d, i) => arcAnimDur + i * secIndividualdelay).
  attr('points', d => {
    let pos = outerArc.centroid(d);
    pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
    return [arc.centroid(d), outerArc.centroid(d), pos];
  });
};



// const Circles = document.querySelectorAll('.circles-container');

// observerCircles = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       setTimeout(() => {
//         draw();
//       }, 600);
//     } else {
//     }
//   });
// });

// Circles.forEach(image => {
//     observerCircles.observe(image);
// });



let button = document.querySelector('#reset');

let replay = () => {

  d3.selectAll('.slices').transition().ease('back').duration(500).delay(0).style('opacity', 0).attr('transform', 'translate(0, 50)').remove();
  d3.selectAll('.lines').transition().ease('back').duration(500).delay(100).style('opacity', 0).attr('transform', 'translate(0, 50)').remove();
  d3.selectAll('.labels').transition().ease('back').duration(500).delay(200).style('opacity', 0).attr('transform', 'translate(0, 50)').remove();


  setTimeout(draw, 800);

};