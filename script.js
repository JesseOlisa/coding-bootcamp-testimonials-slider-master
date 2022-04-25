const reviews = [
    {
        id: 1,
        name: "Tanya Sinclair",
        role: "UX Engineer",
        img: "./images/image-tanya.jpg",
        imgAlt: "Tanya's Picture",
        comment: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    {
        id: 2,
        name: "John Tarkpor",
        role: "Junior Front-end Developer",
        img: "./images/image-john.jpg",
        imgAlt: "John's Picture",
        comment: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    }
];

// DECLARING VARIABLES
const reviewerName = document.getElementById('reviewer-name');
const reviewerJob = document.getElementById('reviewer-job');
const reviewerImage = document.getElementById('reviewer-img');
const reviewerComment = document.getElementById('reviewer-comment');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');



let currentReview = 0;

// LOAD CONTENT ON
window.addEventListener('DOMContentLoaded', ()=> {
   showReview();

});

//ADD EVENT LISTENER TO BUTTONS
//NEXT BUTTON 
nextBtn.addEventListener('click', ()=> {
    if(currentReview < reviews.length - 1) {
        currentReview++;
        showReview();
    }
    else {
        currentReview = 0;
        showReview();
    }
   
});

//NEXT BUTTON 
prevBtn.addEventListener('click', ()=> {
    if(currentReview > 0) {
        currentReview--;
        showReview();
    }
    else {
        currentReview = reviews.length - 1;
        showReview();
    }
   
});

// show content
let showReview = ()=>{
    let review = reviews[currentReview];
    reviewerName.textContent = review.name;
    reviewerJob.textContent = review.role;
    reviewerImage.src = review.img;
    reviewerImage.alt = review.imgAlt;
    reviewerComment.textContent = review.comment;
};