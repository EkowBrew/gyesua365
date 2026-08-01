/*=====================================================
    GIRLFRIEND DAY WEBSITE
    SCRIPT.JS

    PART 1
    FOUNDATION + ANIMATIONS
======================================================*/



/*=====================================================
    WAIT FOR PAGE LOAD
======================================================*/


document.addEventListener(
    "DOMContentLoaded",
    () => {


        console.log(
            "❤️ Gyesua Love Website Loaded"
        );


        initializeWebsite();


    }
);





/*=====================================================
    INITIALIZE WEBSITE
======================================================*/


function initializeWebsite(){


    hideLoader();


    enableSmoothScrolling();


    initializeScrollReveal();


    navbarEffect();


    createFloatingHearts();


}





/*=====================================================
    LOADER
======================================================*/


function hideLoader(){


    const loader = document.querySelector(
        ".loader"
    );


    if(loader){


        setTimeout(()=>{


            loader.style.display="none";


        },2500);


    }


}





/*=====================================================
    SMOOTH SCROLLING
======================================================*/


function enableSmoothScrolling(){


    const links =
    document.querySelectorAll(
        "a[href^='#']"
    );


    links.forEach(link=>{


        link.addEventListener(
            "click",
            function(e){


                const target =
                document.querySelector(
                    this.getAttribute("href")
                );


                if(target){


                    e.preventDefault();


                    target.scrollIntoView({

                        behavior:"smooth"

                    });


                }


            }
        );


    });


}





/*=====================================================
    SCROLL REVEAL ANIMATION
======================================================*/


function initializeScrollReveal(){


    const elements =
    document.querySelectorAll(
        `
        section,
        .gallery-card,
        .promise-card,
        .fact-card,
        .reason-card,
        .timeline-item,
        .video-card
        `
    );



    const observer =
    new IntersectionObserver(

        entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add(
                        "show"
                    );


                    observer.unobserve(
                        entry.target
                    );


                }


            });


        },


        {

            threshold:0.15

        }


    );



    elements.forEach(element=>{


        element.classList.add(
            "hidden"
        );


        observer.observe(
            element
        );


    });


}







/*=====================================================
    NAVBAR EFFECT
======================================================*/


function navbarEffect(){


    const header =
    document.querySelector(
        "header"
    );


    if(!header) return;



    window.addEventListener(
        "scroll",
        ()=>{


            if(window.scrollY > 80){


                header.classList.add(
                    "scrolled"
                );


            }

            else{


                header.classList.remove(
                    "scrolled"
                );


            }


        }
    );


}







/*=====================================================
    FLOATING HEARTS BACKGROUND
======================================================*/


function createFloatingHearts(){


    const container =
    document.querySelector(
        "body"
    );


    if(!container)
    return;



    setInterval(()=>{


        const heart =
        document.createElement(
            "div"
        );


        heart.className =
        "floating-heart-particle";



        heart.innerHTML =
        [
            "❤️",
            "💕",
            "💗",
            "🌸",
            "✨"
        ]
        [
            Math.floor(
                Math.random()*5
            )
        ];




        heart.style.left =
        Math.random()*100 + "%";



        heart.style.animationDuration =
        (
            5 +
            Math.random()*5
        )
        +"s";



        heart.style.fontSize =
        (
            15 +
            Math.random()*30
        )
        +"px";



        container.appendChild(
            heart
        );



        setTimeout(()=>{


            heart.remove();


        },10000);



    },1200);



}





/*=====================================================
    BUTTON RIPPLE EFFECT
======================================================*/


const buttons =
document.querySelectorAll(
    "button"
);



buttons.forEach(button=>{


    button.addEventListener(
        "click",
        function(e){


            const ripple =
            document.createElement(
                "span"
            );


            ripple.className =
            "ripple";



            this.appendChild(
                ripple
            );



            setTimeout(()=>{


                ripple.remove();


            },600);



        }
    );


});

/*=====================================================
    JAVASCRIPT PART 2
    COUNTERS + COUNTDOWN + MEDIA
======================================================*/





/*=====================================================
    RELATIONSHIP COUNTER
======================================================*/


function startRelationshipCounter(){


    /*
        CHANGE THIS DATE
        TO YOUR ACTUAL START DATE
    */


    const relationshipDate =
    new Date(
        "2025-01-01"
    );



    const years =
    document.getElementById(
        "years"
    );


    const months =
    document.getElementById(
        "months"
    );


    const days =
    document.getElementById(
        "days"
    );


    const hours =
    document.getElementById(
        "hours"
    );



    if(
        !years ||
        !months ||
        !days ||
        !hours
    ){

        return;

    }




    function updateCounter(){


        const now =
        new Date();



        let difference =
        now - relationshipDate;



        const totalHours =
        Math.floor(
            difference /
            (1000*60*60)
        );



        const totalDays =
        Math.floor(
            totalHours / 24
        );



        const totalMonths =
        Math.floor(
            totalDays / 30
        );



        const totalYears =
        Math.floor(
            totalMonths / 12
        );



        years.innerHTML =
        totalYears;



        months.innerHTML =
        totalMonths % 12;



        days.innerHTML =
        totalDays % 30;



        hours.innerHTML =
        totalHours % 24;



    }



    updateCounter();



    setInterval(
        updateCounter,
        3600000
    );


}







/*=====================================================
    GIRLFRIEND DAY COUNTDOWN
======================================================*/


function girlfriendDayCountdown(){



    const countdown =
    document.getElementById(
        "girlfriendCountdown"
    );



    if(!countdown)
    return;




    function updateCountdown(){


        const current =
        new Date();



        let year =
        current.getFullYear();



        let target =
        new Date(
            `${year}-08-01 00:00:00`
        );



        /*
          If the day has passed,
          move to next year
        */


        if(current > target){


            target =
            new Date(
                `${year+1}-08-01 00:00:00`
            );


        }



        const difference =
        target - current;




        const days =
        Math.floor(
            difference /
            (1000*60*60*24)
        );



        const hours =
        Math.floor(
            difference /
            (1000*60*60)
        ) % 24;



        const minutes =
        Math.floor(
            difference /
            (1000*60)
        ) % 60;



        const seconds =
        Math.floor(
            difference /
            1000
        ) % 60;




        countdown.innerHTML =

        `
        ${days} Days 
        ${hours} Hours
        ${minutes} Minutes
        ${seconds} Seconds
        `;



    }




    updateCountdown();



    setInterval(
        updateCountdown,
        1000
    );



}








/*=====================================================
    VIDEO OPTIMIZATION
======================================================*/


function initializeVideos(){



    const videos =
    document.querySelectorAll(
        "video"
    );



    videos.forEach(video=>{


        video.addEventListener(
            "mouseenter",
            ()=>{


                video.play();



            }
        );



        video.addEventListener(
            "mouseleave",
            ()=>{


                /*
                  Keeps autoplay running
                */


                video.play();



            }
        );



        video.muted=true;



    });



}







/*=====================================================
    MUSIC PLAYER
======================================================*/


function initializeMusic(){



    const music =
    document.getElementById(
        "loveSong"
    );



    if(!music)
    return;



    music.volume =
    0.4;



    music.addEventListener(
        "play",
        ()=>{


            document.body.classList.add(
                "music-playing"
            );


        }
    );



    music.addEventListener(
        "pause",
        ()=>{


            document.body.classList.remove(
                "music-playing"
            );


        }
    );



}







/*=====================================================
    LOVE FACT ANIMATION
======================================================*/


function animateLoveFacts(){



    const cards =
    document.querySelectorAll(
        ".fact-card"
    );



    cards.forEach(
        (card,index)=>{


            card.style.animationDelay =
            `${index * .2}s`;



        }
    );



}







/*=====================================================
    NUMBER COUNT ANIMATION
======================================================*/


function animateNumbers(){



    const numbers =
    document.querySelectorAll(
        ".counter-box h1"
    );



    numbers.forEach(
        number=>{


            const finalValue =
            parseInt(
                number.innerHTML
            );



            let start=0;



            const timer =
            setInterval(()=>{


                start++;



                number.innerHTML =
                start;



                if(start >= finalValue){


                    clearInterval(timer);


                }



            },40);



        }
    );



}







/*=====================================================
    RUN PART 2 FUNCTIONS
======================================================*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        startRelationshipCounter();


        girlfriendDayCountdown();


        initializeVideos();


        initializeMusic();


        animateLoveFacts();


    }
);

/*=====================================================
    JAVASCRIPT PART 3
    INTERACTIVE LOVE FEATURES
======================================================*/





/*=====================================================
    LOVE ENVELOPE OPENING
======================================================*/


function initializeEnvelope(){



    const envelope =
    document.getElementById(
        "envelope"
    );


    const letter =
    document.getElementById(
        "letterContent"
    );



    if(
        !envelope ||
        !letter
    ){

        return;

    }





    envelope.addEventListener(
        "click",
        ()=>{


            envelope.classList.toggle(
                "open"
            );



            letter.classList.add(
                "show"
            );



            letter.innerHTML =

            `

            <h2>
            My Dear Gyesua ❤️
            </h2>


            <p>
            I created this little website
            because you deserve something
            that shows how special you are.
            </p>


            <p>
            Every smile, every conversation,
            and every memory with you means
            more than words can explain.
            </p>


            <p>
            Thank you for being part of my life.
            I hope this reminds you how loved
            and appreciated you are.
            </p>


            <h3>
            Forever grateful ❤️
            </h3>

            `;



        }
    );



}







/*=====================================================
    GIFT BOX OPENING
======================================================*/


function initializeGiftBox(){



    const gift =
    document.getElementById(
        "giftBox"
    );



    const message =
    document.getElementById(
        "giftMessage"
    );



    if(
        !gift ||
        !message
    ){

        return;

    }





    gift.addEventListener(
        "click",
        ()=>{


            gift.classList.add(
                "open"
            );



            message.classList.add(
                "show"
            );



            createMiniHearts();



        }
    );


}







/*=====================================================
    MEMORY BOOK SYSTEM
======================================================*/


function initializeMemoryBook(){



    const pages =
    document.querySelectorAll(
        ".memory-page"
    );



    const next =
    document.getElementById(
        "nextPage"
    );



    const previous =
    document.getElementById(
        "prevPage"
    );



    if(
        pages.length===0
    ){

        return;

    }





    let currentPage=0;



    function showPage(index){



        pages.forEach(
            page=>{


                page.classList.remove(
                    "active"
                );


            }
        );



        pages[index].classList.add(
            "active"
        );



    }





    if(next){


        next.addEventListener(
            "click",
            ()=>{


                currentPage++;



                if(
                    currentPage >= pages.length
                ){

                    currentPage=0;

                }



                showPage(
                    currentPage
                );



            }
        );


    }







    if(previous){


        previous.addEventListener(
            "click",
            ()=>{


                currentPage--;



                if(
                    currentPage < 0
                ){

                    currentPage =
                    pages.length-1;

                }



                showPage(
                    currentPage
                );



            }
        );


    }





}







/*=====================================================
    SECRET FLOWER NOTES
======================================================*/


function initializeSecretNotes(){



    const flowers =
    document.querySelectorAll(
        ".flower-note"
    );



    const box =
    document.getElementById(
        "noteBox"
    );



    if(
        flowers.length===0 ||
        !box
    ){

        return;

    }





    const messages = [


        "You make ordinary moments feel magical ❤️",


        "Your smile is one of my favourite things 🌸",


        "I appreciate every little thing about you 💕",


        "Thank you for bringing happiness into my life 🌹",


        "You will always have a special place in my heart ✨"


    ];





    flowers.forEach(
        (flower,index)=>{


            flower.addEventListener(
                "click",
                ()=>{


                    box.innerHTML =
                    messages[index];



                    box.classList.add(
                        "show"
                    );



                    createMiniHearts();



                }
            );


        }
    );



}








/*=====================================================
    MINI HEART EFFECT
======================================================*/


function createMiniHearts(){



    for(
        let i=0;
        i<15;
        i++
    ){


        const heart =
        document.createElement(
            "div"
        );



        heart.innerHTML =
        "❤️";



        heart.className =
        "mini-heart";



        heart.style.left =
        Math.random()*100+"%";



        document.body.appendChild(
            heart
        );



        setTimeout(
            ()=>{


                heart.remove();


            },
            3000
        );



    }



}







/*=====================================================
    RUN PART 3
======================================================*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        initializeEnvelope();


        initializeGiftBox();


        initializeMemoryBook();


        initializeSecretNotes();


    }
);

/*=====================================================
    JAVASCRIPT PART 4
    FINAL EFFECTS + CELEBRATION
======================================================*/





/*=====================================================
    CELEBRATION BUTTON
======================================================*/


function initializeCelebration(){


    const button =
    document.getElementById(
        "celebrateBtn"
    );



    if(!button)
    return;




    button.addEventListener(
        "click",
        ()=>{


            createConfetti();


            createMiniHearts();


            button.innerHTML =
            "Forever & Always ❤️";



            button.classList.add(
                "celebrating"
            );



        }
    );


}







/*=====================================================
    CONFETTI SYSTEM
======================================================*/


function createConfetti(){



    const colors = [

        "❤️",

        "💕",

        "🌸",

        "✨",

        "💖",

        "🌹"

    ];




    for(
        let i=0;
        i<80;
        i++
    ){



        const piece =
        document.createElement(
            "div"
        );



        piece.className =
        "confetti-piece";



        piece.innerHTML =
        colors[
            Math.floor(
                Math.random()
                *
                colors.length
            )
        ];



        piece.style.left =
        Math.random()*100+"vw";



        piece.style.animationDuration =
        (
            2+
            Math.random()*3
        )
        +"s";



        piece.style.fontSize =
        (
            15+
            Math.random()*25
        )
        +"px";



        document.body.appendChild(
            piece
        );



        setTimeout(
            ()=>{


                piece.remove();



            },
            5000
        );



    }


}







/*=====================================================
    100 REASONS CARD INTERACTION
======================================================*/


function initializeReasons(){



    const cards =
    document.querySelectorAll(
        ".reason-card"
    );



    cards.forEach(
        card=>{


            card.addEventListener(
                "click",
                ()=>{


                    card.classList.toggle(
                        "selected"
                    );



                    createMiniHearts();



                }
            );



        }
    );



}







/*=====================================================
    LOVE MESSAGE RANDOMIZER
======================================================*/


function randomLoveMessage(){



    const messages=[


        "You are my favourite notification ❤️",


        "Life feels better with you 🌸",


        "Your happiness matters to me 💕",


        "Every memory with you is precious ✨",


        "You make my world brighter 🌹"


    ];



    const cards =
    document.querySelectorAll(
        ".love-random"
    );



    cards.forEach(
        card=>{


            card.innerHTML =
            messages[
                Math.floor(
                    Math.random()
                    *
                    messages.length
                )
            ];


        }
    );


}







/*=====================================================
    BACKGROUND SPARKLES
======================================================*/


function createSparkles(){



    setInterval(
        ()=>{


            const sparkle =
            document.createElement(
                "div"
            );



            sparkle.className =
            "sparkle";



            sparkle.innerHTML =
            "✨";



            sparkle.style.left =
            Math.random()*100+"%";



            sparkle.style.top =
            Math.random()*100+"%";



            document.body.appendChild(
                sparkle
            );



            setTimeout(
                ()=>{


                    sparkle.remove();


                },
                4000
            );



        },
        1500
    );



}







/*=====================================================
    OPTIONAL MUSIC CELEBRATION
======================================================*/


function celebrationMusic(){



    const music =
    document.getElementById(
        "loveSong"
    );



    const button =
    document.getElementById(
        "celebrateBtn"
    );



    if(
        !music ||
        !button
    )
    return;



    button.addEventListener(
        "click",
        ()=>{


            music.play()
            .catch(()=>{


                console.log(
                    "Music requires user interaction"
                );


            });



        }
    );


}







/*=====================================================
    FINAL WEBSITE INITIALIZATION
======================================================*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        initializeCelebration();


        initializeReasons();


        randomLoveMessage();


        createSparkles();


        celebrationMusic();



    }
);