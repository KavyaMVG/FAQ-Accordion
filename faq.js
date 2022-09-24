const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];


const mainDiv = document.querySelectorAll(".faq");
faqData.map((faq, idx) => {
  let ques = question(faq.question);
  mainDiv[idx].appendChild(ques);

  let ans = answer(faq.answer)
  mainDiv[idx].appendChild(ans)

  let btn = createBtn(ans);
  mainDiv[idx].appendChild(btn)
  ques.appendChild(btn);
})

function question(text){
  let h3 = document.createElement("h3")
  h3.innerHTML = text;
  h3.classList.add("faq_header")
  return h3;
}


function answer(text){
  let para = document.createElement("p")
  para.innerHTML = text;
  para.classList.add("faq");
  para.classList.add("hidden");
  return para;
}


function createBtn(ans){
  let btn = document.createElement("button")
  btn.innerText = "+";
  btn.classList.add("show_btn")
  btn.onclick = () => {
    btn.innerText = btn.innerText === "+" ? "-" : "+"; 
    ans.classList.toggle("hidden");
  }
  return btn;
}


