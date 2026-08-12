$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // contact form with formspree
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        const form = document.getElementById("contact-form");
        const formData = new FormData(form);

        fetch("https://formspree.io/f/mykooqan", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                document.getElementById("contact-form").reset();
                alert("Message sent successfully! I'll get back to you soon.");
            } else {
                alert("There was a problem sending your message. Please try again.");
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert("Error sending message. Please try again.");
        });
    });

    // skill tab filter
    $('.skill-tab').on('click', function () {
        $('.skill-tab').removeClass('active');
        $(this).addClass('active');

        let filter = $(this).attr('data-filter');

        if (filter === 'all') {
            $('.skill-card').stop(true, true).fadeIn(300);
        } else {
            $('.skill-card').each(function () {
                let cat = $(this).attr('data-category');
                if (cat && cat.includes(filter)) {
                    $(this).stop(true, true).fadeIn(300);
                } else {
                    $(this).stop(true, true).fadeOut(200);
                }
            });
        }
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Pramod Mahajan";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Data Science", "AI & Computer Vision", "Google Cloud", "frontend development", "cloud computing", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

