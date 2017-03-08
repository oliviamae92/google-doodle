// Store 3 images
var img0 = 'https://raw.githubusercontent.com/oliviamae92/google-doodle/master/img/MasterBall.png';
var img1 = 'https://raw.githubusercontent.com/oliviamae92/google-doodle/master/img/GreatBall.png';
var img2 = 'https://raw.githubusercontent.com/oliviamae92/google-doodle/master/img/Pokeball.png';
var img3 = 'https://raw.githubusercontent.com/oliviamae92/google-doodle/master/img/UltraBall.png';
// Get random number
var max = 3;
var numRand = Math.floor(Math.random() * max);
console.log(numRand);
// Display randomized images
var numRand = Math.floor(Math.random() * max);
$('#random').attr('src', eval('img' + numRand));
var numRand = Math.floor(Math.random() * max);
$('#random2').attr('src', eval('img' + numRand));