  var names = ['Kity', 'Alex', 'Kate'];
  var times = ['1200', '2000', '3200'];


  var CLOUD_Y = 50;
  var CLOUD_X = 100;
  var CLOUD_WIDTH = 520;
  var CLOUD_HEIGHT = 270;
  var GAP = 10;
  var FONT_GAP = 15;
  var TEXT_WIDTH = 50;
  var BAR_HEIGHT = 20;
  var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH -  GAP;


  var renderCloud = function(ctx, x, y, color){
   ctx.fillStyle = color;
   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

for (var i = 0; i < names.length; i++) {
  ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
}
  // ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  // ctx.fillRect(110, 20, 528, 265);

  // ctx.fillStyle = '#fff';
  // ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  // ctx.fillText('You win !!!' 0, 16);
};



//  events

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

// setupOpen.addEventListener('click', function () {
//   setup.classList.remove('hidden');

//   document.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 27) {
//       setup.classList.add('hidden');
//     }
//   });
// });

// setupOpen.addEventListener('keydown', function(evt) {
//   if (evt.keyCode === 13) {
//     setup.classList.remove('hidden');
//   }
// });

// setupClose.addEventListener('click' function() {
//   setup.classList.add('hidden');
// });

// setupClose.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 13) {
//     setup.classList.add('hidden')
//   }
// });

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

// sfasfsaf
