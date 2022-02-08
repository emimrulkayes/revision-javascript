const firstTitle = document.getElementById('first-title');
firstTitle.style.color = 'white';
firstTitle.style.textAlign = 'center';
firstTitle.style.background = 'gray'
firstTitle.style.fontSize = '30px'
firstTitle.style.padding = '20px'
firstTitle.style.margin = '0px'

const secondTitle = document.getElementById('second-title');
secondTitle.style.color = 'red';
secondTitle.style.textAlign = 'center';
secondTitle.style.background = 'gray'
secondTitle.style.fontSize = '30px'
secondTitle.style.padding = '20px'
secondTitle.style.margin = '0px'

const thirdTitle = document.getElementById('third-title');
thirdTitle.style.color = 'green';
thirdTitle.style.textAlign = 'center';
thirdTitle.style.background = 'gray'
thirdTitle.style.fontSize = '30px'
thirdTitle.style.padding = '20px'
thirdTitle.style.margin = '0px'

const forthTitle = document.getElementById('forth-title');
forthTitle.style.color = 'red';
forthTitle.style.textAlign = 'center';
forthTitle.style.background = 'gray'
forthTitle.style.fontSize = '30px'
forthTitle.style.padding = '20px'
forthTitle.style.margin = '0px'


const blogs = document.getElementsByClassName('blog');
for (const blog of blogs) {
    console.log(blog)
    blog.style.border = '2px solid orange';
    blog.style.marginBottom = '50px';
    blog.style.padding = '15px'
}

// create element add by javascript 
// const li = document.createElement('li');
// li.innerText = 'Awelome Blog 5'
// const ul = document.getElementById('blog-list');
// ul.appendChild(li);

// Change Background Color red with even handler
function makeRed() {
    document.body.style.background = 'red';
}
// Change Background Color green with even handler
function makeGreen() {
    document.body.style.background = 'green';
}
// Change Background Color blue with even handler
const blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.background = 'blue';
}

// Handle event with Anonymus function 
const yellowBtn = document.getElementById('yellow-btn');
yellowBtn.onclick = function() { // ফাংশনের নাম না থাকলে তাকে এননিমাস ফাংশন বলে । 
    document.body.style.backgroundColor = 'yellow';
}

// Handle by add event listener
const coralBtn = document.getElementById('coral-btn');
coralBtn.addEventListener('click', makeLightCoral);

function makeLightCoral() {
    document.body.style.background = '#F08080'
}

// addEventListener
const hotPink = document.getElementById('hot-pink-btn');
hotPink.addEventListener('click', function() {
    document.body.style.background = 'hotpink'
})

// add Event Listener
const lightSalmon = document.getElementById('salmon-btn');
lightSalmon.addEventListener('click', function() {
    document.body.style.background = 'LightSalmon';
})

// Direct Shortcut add Event Listener
document.getElementById('khaki-btn').addEventListener('click', function() {
    document.body.style.background = 'DarkKhaki';
})