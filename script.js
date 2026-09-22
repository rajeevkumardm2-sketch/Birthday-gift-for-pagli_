/* ==========================================
   KAJU BIRTHDAY WEBSITE
   ========================================== */


/* =========================
   ELEMENTS
========================= */

const openBtn =
  document.getElementById("openBtn");

const giftButton =
  document.getElementById("giftButton");

const heartMessage =
  document.getElementById("heartMessage");

const replay =
  document.getElementById("replay");

const music =
  document.getElementById("bgMusic");

const toast =
  document.getElementById("toast");

const kitkatRain =
  document.getElementById("kitkatRain");

const hearts =
  document.getElementById("hearts");

const stars =
  document.getElementById("stars");


/* =========================
   STARS
========================= */

function createStars(){

  for(let i=0;i<90;i++){

    const star =
      document.createElement("div");

    star.className="star";

    star.style.left =
      Math.random()*100+"%";

    star.style.top =
      Math.random()*100+"%";

    star.style.animationDelay =
      Math.random()*3+"s";

    star.style.transform =
      `scale(${Math.random()*1.8+.4})`;

    stars.appendChild(star);

  }

}

createStars();


/* =========================
   KITKAT RAIN
========================= */

function createKitKat(){

  const item =
    document.createElement("div");

  item.className="kitkat";

  /*
     Emoji based KitKat rain.
     This works without external images.
  */

  item.innerHTML="🍫";

  item.style.left =
    Math.random()*100+"vw";

  item.style.fontSize =
    (15 + Math.random()*18)+"px";

  const duration =
    5 + Math.random()*6;

  item.style.animationDuration =
    duration+"s";

  item.style.opacity =
    .35 + Math.random()*.5;

  kitkatRain.appendChild(item);


  setTimeout(()=>{

    item.remove();

  },(duration+1)*1000);

}


/* Start KitKat rainfall */

let kitkatInterval =
  setInterval(
    createKitKat,
    500
  );


/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

  const heart =
    document.createElement("div");

  heart.className=
    "floatingHeart";

  heart.innerHTML =
    ["♡","♥","❤","💕"][Math.floor(
      Math.random()*4
    )];

  heart.style.left =
    Math.random()*100+"vw";

  heart.style.fontSize =
    (15+Math.random()*25)+"px";

  const duration =
    5+Math.random()*5;

  heart.style.animationDuration =
    duration+"s";

  hearts.appendChild(heart);


  setTimeout(()=>{

    heart.remove();

  },(duration+1)*1000);

}


setInterval(
  createHeart,
  850
);


/* =========================
   MUSIC
========================= */

openBtn.addEventListener(
  "click",
  ()=>{

    music.volume=.35;

    music.play().catch(
      ()=>{}
    );

    document.querySelector(
      ".section"
    ).scrollIntoView({
      behavior:"smooth"
    });

    celebration(
      25
    );

  }
);


/* =========================
   GIFT
========================= */

giftButton.addEventListener(
  "click",
  ()=>{

    heartMessage.classList.remove(
      "hidden"
    );

    giftButton.style.display =
      "none";

    music.volume=.45;

    celebration(
      100
    );

    showToast();

    heartMessage.scrollIntoView({
      behavior:"smooth",
      block:"center"
    });

  }
);


/* =========================
   CONFETTI
========================= */

function celebration(amount){

  const symbols=[
    "❤️",
    "💗",
    "✨",
    "💕",
    "🍫",
    "🎉",
    "🌸"
  ];

  for(let i=0;i<amount;i++){

    const piece =
      document.createElement("div");

    piece.style.position="fixed";

    piece.style.left =
      Math.random()*100+"vw";

    piece.style.top =
      "-30px";

    piece.style.zIndex="200";

    piece.style.pointerEvents="none";

    piece.style.fontSize =
      (12+Math.random()*22)+"px";

    piece.innerHTML =
      symbols[
        Math.floor(
          Math.random()*symbols.length
        )
      ];

    const duration =
      2+Math.random()*3;

    piece.animate(
      [
        {
          transform:"translateY(0) rotate(0)",
          opacity:1
        },
        {
          transform:
            `translateY(110vh)
             rotate(${Math.random()*900}deg)`,
          opacity:0
        }
      ],
      {
        duration:
          duration*1000,

        easing:"cubic-bezier(.2,.7,.4,1)"
      }
    );

    document.body.appendChild(
      piece
    );

    setTimeout(
      ()=>piece.remove(),
      duration*1000+100
    );

  }

}


/* =========================
   TOAST
========================= */

function showToast(){

  toast.classList.add(
    "show"
  );

  setTimeout(
    ()=>{
      toast.classList.remove(
        "show"
      );
    },
    3500
  );

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const observer =
  new IntersectionObserver(
    entries=>{

      entries.forEach(
        entry=>{

          if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform=
              "translateY(0)";

          }

        }
      );

    },
    {
      threshold:.15
    }
  );


revealElements.forEach(
  element=>{

    element.style.opacity="0";

    element.style.transform=
      "translateY(35px)";

    element.style.transition=
      "opacity .9s ease, transform .9s ease";

    observer.observe(
      element
    );

  }
);


/* =========================
   REPLAY
========================= */

replay.addEventListener(
  "click",
  ()=>{

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

    music.currentTime=0;

    music.play().catch(
      ()=>{}
    );

    celebration(
      60
    );

  }
);


/* =========================
   SPECIAL FINAL EFFECT
========================= */

const finalSection =
  document.querySelector(
    ".final"
  );


const finalObserver =
  new IntersectionObserver(
    entries=>{

      entries.forEach(
        entry=>{

          if(entry.isIntersecting){

            celebration(
              90
            );

          }

        }
      );

    },
    {
      threshold:.5
    }
  );


finalObserver.observe(
  finalSection
);


/* =========================
   EXTRA KITKAT BURST
========================= */

function kitkatBurst(){

  for(let i=0;i<30;i++){

    const item =
      document.createElement("div");

    item.innerHTML="🍫";

    item.style.position="fixed";

    item.style.left="50%";

    item.style.top="50%";

    item.style.fontSize =
      "22px";

    item.style.zIndex="150";

    item.style.pointerEvents="none";

    document.body.appendChild(
      item
    );


    const x =
      (Math.random()-.5)*700;

    const y =
      (Math.random()-.5)*700;


    item.animate(
      [
        {
          transform:
            "translate(-50%,-50%) scale(.5)",
          opacity:1
        },

        {
          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            rotate(720deg)
            scale(1.2)`,

          opacity:0
        }
      ],
      {
        duration:
          1500+Math.random()*1000,

        easing:"cubic-bezier(.2,.7,.3,1)"
      }
    );


    setTimeout(
      ()=>item.remove(),
      2600
    );

  }

}


/* Gift click = KitKat burst */

giftButton.addEventListener(
  "click",
  kitkatBurst
);


/* =========================
   END
========================= */