/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

    const icon =
        menuToggle.querySelector("i");


    if (
        navLinks.classList.contains(
            "mobile-active"
        )
    ) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Fermer le menu après un clic */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove(
                "mobile-active"
            );

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        });

    });



/* =====================================================
   ANNÉE AUTOMATIQUE
===================================================== */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* =====================================================
   ANIMATION AU SCROLL
===================================================== */

/*
   IntersectionObserver permet de détecter
   lorsqu'un élément entre dans la zone visible
   du navigateur.
*/

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   NAVIGATION ACTIVE
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.id;


                    navigationLinks.forEach(
                        link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                }

            });

        },

        {
            rootMargin:
                "-30% 0px -60% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



/* =====================================================
   EFFET CURSEUR
===================================================== */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* =====================================================
   EFFET TERMINAL
===================================================== */

const terminalCursor =
    document.querySelector(
        ".cursor"
    );


/*
   Petit effet supplémentaire :
   le curseur terminal clignote
   automatiquement grâce au CSS.
*/



/* =====================================================
   FORMULAIRE
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "form-message"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const subject =
            document.getElementById(
                "subject"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        /*
           Adresse qui recevra le message.
           À remplacer par ton adresse.
        */

        const destination =
            "ton.email@example.com";


        const body =
            `Bonjour,\n\n` +
            `Nom : ${name}\n` +
            `Email : ${email}\n\n` +
            `Message :\n${message}`;


        const mailto =
            `mailto:${destination}` +
            `?subject=${encodeURIComponent(
                subject
            )}` +
            `&body=${encodeURIComponent(
                body
            )}`;


        formMessage.textContent =
            "Ouverture de votre messagerie...";


        formMessage.style.color =
            "#00ff9d";


        window.location.href =
            mailto;

    }
);



/* =====================================================
   EFFET TYPING
===================================================== */

const terminalTitle =
    document.querySelector(
        ".terminal-title"
    );


const originalTitle =
    terminalTitle
        ? terminalTitle.textContent
        : "";


let titleIndex = 0;


/*
   Petit effet discret dans
   la barre du terminal.
*/

function terminalTyping() {

    if (!terminalTitle) return;


    terminalTitle.textContent =
        "";


    let index = 0;


    const interval =
        setInterval(() => {

            terminalTitle.textContent +=
                originalTitle[index];

            index++;


            if (
                index >=
                originalTitle.length
            ) {

                clearInterval(interval);

            }

        }, 45);

}


setTimeout(
    terminalTyping,
    1000
);



/* =====================================================
   PARALLAX TERMINAL
===================================================== */

const terminal =
    document.querySelector(
        ".terminal"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 950
        ) return;


        const x =
            (
                event.clientX /
                window.innerWidth
            ) - .5;


        const y =
            (
                event.clientY /
                window.innerHeight
            ) - .5;


        terminal.style.transform =
            `
            rotateY(${x * -5}deg)
            rotateX(${y * 3}deg)
            translateY(${y * -5}px)
            `;

    }
);