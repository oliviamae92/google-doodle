// Store 3 images
var img0 = '../img/PokeBall.png';
var img1 = '../img/GreatBaLL.png';
var img2 = '../img/UltraBall.png';
var img3 = '../img/MasterBall.png';
// Get random number
var max = 3;
var numRand = Math.floor(Math.random() * max);
console.log(numRand);
// Display randomized images
var numRand = Math.floor(Math.random() * max);
$('#random').attr('src', eval('img' + numRand));
var numRand = Math.floor(Math.random() * max);
$('#random2').attr('src', eval('img' + numRand));