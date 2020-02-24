const slider = document.getElementById('slides--inner'),
      main = document.getElementById('main'),
      height = window.inndeHeight || document.documentElement.clientHeight || body.clientHeight;

main.style.height = height + 'px';

let counter = 1,
    timer = setInterval(() => {

  let offset;

  if (counter == 4) {
    offset = 0;
    counter = 1;
  } else {
    offset = counter*100;
    counter++;
  }
  slider.style.right = offset + '%';

}, 8000);