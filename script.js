const fadeElements = document.querySelectorAll('.fadeUp');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });
},{
  threshold: 0.2
});

fadeElements.forEach((el,index)=>{

  el.style.transitionDelay = `${index * 0.1}s`;

  observer.observe(el);

});

/* 3D EFFECT */

VanillaTilt.init(document.querySelectorAll(".image3d"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

/* SEND MESSAGE */

function sendMessage(){
  alert("Pesan berhasil dikirim!");
}

/* recount text */

function openFolder(){
  document.getElementById("popup").classList.add("show");
}

function closeFolder(){
  document.getElementById("popup").classList.remove("show");
}