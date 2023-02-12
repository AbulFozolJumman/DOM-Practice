// Set All the h2 text color "lightblue"
const headings = document.getElementsByTagName('h2');
// console.log(headings);
for (const h2 of headings) {
    h2.style.color = "lightblue";
}

// Set the backpack section bg-tomato
document.getElementById("backpack").style.backgroundColor = "tomato";

// Set all the card's border radius to 30px
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = "30px";
}

// Write a function of console.log and use it as a click handler on logo
function consoleMessage() {
    console.log("Click handler added by function");
}

//  সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে ওয়েবসাইট থেকে রিমুভ হয়ে যায়
const buyNowBtn = document.getElementsByClassName('btn');
for (const btn of buyNowBtn) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
    });
}

// একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।
const emailInput = document.getElementById('exampleInputEmail1');
emailInput.addEventListener('keyup', function () {
    console.log()
    const submitBtn = document.getElementById('submit-btn');
    if (emailInput.value === 'email') {
        submitBtn.removeAttribute('disabled'); 
    }
    else{
        submitBtn.setAttribute('disabled', true);
    }
    
})

// Write a click handler, when mouseenter on a img, img will change 
const images = document.getElementsByTagName('img');
for (const image of images) {
    image.addEventListener('mouseenter', function () {
        image.setAttribute('src', 'user-1.png')
    })
}

// Make a click handler, when double click on the subscribe section empty space, it's bg color will change
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    const div = document.getElementById('subscribe-div');
    if (event.target !== div) {
        event.target.style.backgroundColor = 'red';
    }
});