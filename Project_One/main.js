// Loading
$(window).on(
    'load',function(event) {
        $('body').removeClass('preloading');
        $('.load').delay(3000).fadeOut('fast');
    }
);


// Loading
function sayHello() {
    alert('Chào mừng bạn đến với Stacks IT ! Bấm OK để tiếp tục');
  }
  setTimeout(sayHello, 4000);

var i =0;
var imgs = [];
var time = 10000;

// Img list
imgs[0] = './img/Images/img0.jpg';
imgs[1] = './img/Images/img1.jpg';
imgs[2] = './img/Images/img2.jpg';
imgs[3] = './img/Images/img5.jpg';
imgs[4] = './img/Images/img4.jpg';
imgs[5] = './img/Images/img6.jpg';
imgs[6] = './img/Images/img7.jpg';
imgs[7] = './img/Images/img8.jpg';
imgs[8] = './img/Images/img9.jpg';
imgs[9] = './img/Images/img10.jpg';
imgs[10] = './img/Images/img11.jpg';
imgs[11] = './img/Images/img12.jpg';
imgs[12] = './img/Images/img13.jpg';
imgs[13] = './img/Images/img14.jpg';
imgs[14] = './img/Images/img15.jpg';
imgs[15] = './img/Images/img16.jpg';
imgs[16] = './img/Images/img17.jpg';
imgs[17] = './img/Images/img18.jpg';
imgs[18] = './img/Images/img19.jpg';
imgs[19] = './img/Images/img20.jpg';
imgs[20] = './img/Images/img21.jpg';
imgs[21] = './img/Images/img22.jpg';
imgs[22] = './img/Images/img23.jpg';
imgs[23] = './img/Images/img24.jpg';
imgs[24] = './img/Images/img25.jpg';
// Change img
function changeImg() {
    document.slide.src = imgs[i];
    if(i < imgs.length - 1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload = changeImg;
