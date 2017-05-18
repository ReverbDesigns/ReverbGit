 $(function(){ // on dom ready

$('#cy').cytoscape({
  layout: {
    name: 'cose',
    padding: 10
  },
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 80, 20, 60)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
      .selector('node.web')
       .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 40, 40, 40)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
       .selector('node.an')
       .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 40, 40, 40)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'source-arrow-shape': 'none',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'none'
      })
      .selector('edge.feed')
      .css({
        'line-style': 'dashed',
        'source-arrow-shape': 'triangle-backcurve'
      })
      .selector('edge.feed2')
      .css({
        'line-style': 'dashed',
        'source-arrow-shape': 'triangle-backcurve'
      })
      .selector('edge.feed3')
      .css({
        'line-style': 'dashed',
        'target-arrow-shape': 'triangle-backcurve'
      })
      .selector('edge.none')
       .css({
        'line-style': 'dashed',
        'width': '.1em',
        'source-arrow-shape': 'none'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: {
    nodes: [
      { data: { id: 'w', name: 'Website', weight: 65, faveColor: '#b735d8', faveShape: 'triangle' }, classes: 'web' },
      { data: { id: 'a', name: 'Analytics', weight: 45, faveColor: '#ee852e', faveShape: 'ellipse' }, classes: 'an' },
      { data: { id: 'd', name: 'Audience', weight: 45, faveColor: '#e5e847', faveShape: 'vee' }, classes: 'web' },
      { data: { id: 'r', name: 'Reverb Designs', weight: 75, faveColor: '#4deecc', faveShape: 'octagon' }, classes: 'web' },
      { data: { id: 'c', name: 'Client', weight: 70, faveColor: '#3a9aec', faveShape: 'rectangle' }, classes: 'web' },
    ],
    edges: [
      { data: { source: 'w', target: 'd', faveColor: '#b735d8', strength: 75 }, classes: 'feed2' },
      { data: { source: 'w', target: 'r', faveColor: '#6FB1FC', strength: 70 } },
      { data: { source: 'w', target: 'c', faveColor: '#b735d8', strength: 80 }, classes: 'none' },
      { data: { source: 'w', target: 'd', faveColor: '#e5e847', strength: 70 }, classes: 'none' },
     
      { data: { source: 'a', target: 'w', faveColor: '#ee852e', strength: 85 }, classes: 'feed2' },
      { data: { source: 'a', target: 'r', faveColor: '#EDA1ED', strength: 60 }, classes: 'questionable' },
      
      { data: { source: 'r', target: 'w', faveColor: '#4deecc', strength: 100 }, classes: 'none' },
      { data: { source: 'r', target: 'a', faveColor: '#ee852e', strength: 60 }, classes: 'feed' },
      { data: { source: 'r', target: 'c', faveColor: '#309c86', strength: 70 }, classes: 'none' },
      
      { data: { source: 'c', target: 'w', faveColor: '#3a9aec', strength: 70 } },
      { data: { source: 'c', target: 'd', faveColor: '#ced13d', strength: 70 }, classes: 'none' },
      
      { data: { source: 'd', target: 'w', faveColor: '#6FB1FC', strength: 70 } },
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});

}); // on dom ready