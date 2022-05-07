let selectedVisualizer = 'sphere';

document.addEventListener('click', function(event) {

  if (event.target.dataset.visualizer != undefined) { // if the attribute exists...
    selectedVisualizer = event.target.dataset.visualizer;
    console.log(selectedVisualizer);
  }

});