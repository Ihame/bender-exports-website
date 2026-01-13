(function ($) {
    "use strict";

    // Modern Spinner with fade effect
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 500);
    };
    spinner();
    
    
    // Initiate WOW.js for scroll animations
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }).init();

    // Enhanced Sticky Navbar with smooth transition
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
            $('.navbar').css('transition', 'all 0.3s ease');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover with animation
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass).stop(true, true).fadeIn(200);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass).stop(true, true).fadeOut(200);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Enhanced Facts counter with animation
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
    
    // Enhanced Back to top button with smooth scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow').css('display', 'flex');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Enhanced Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Enhanced Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });

    // Parallax Effect for Carousel Images
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        var parallax = $('.carousel-item img');
        var speed = scrolled * 0.5;
        parallax.css('transform', 'translateY(' + speed + 'px)');
    });

    // Smooth Scroll for Anchor Links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000, 'easeInOutExpo');
                return false;
            }
        }
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Image Lazy Loading Enhancement
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    }

    // Add floating animation to elements
    $('.float-animation').each(function() {
        $(this).css('animation-delay', Math.random() * 2 + 's');
    });

    // Enhanced Carousel Controls
    $('.carousel').on('slide.bs.carousel', function () {
        $('.carousel-item').removeClass('active');
    });

    // Add ripple effect to buttons
    $('.btn').on('click', function(e) {
        var ripple = $('<span class="ripple"></span>');
        var rect = this.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);
        var x = e.clientX - rect.left - size / 2;
        var y = e.clientY - rect.top - size / 2;
        
        ripple.css({
            width: size,
            height: size,
            left: x,
            top: y
        });
        
        $(this).append(ripple);
        
        setTimeout(function() {
            ripple.remove();
        }, 600);
    });

    // Add CSS for ripple effect
    if (!$('#ripple-style').length) {
        $('<style id="ripple-style">')
            .text(`
                .btn {
                    position: relative;
                    overflow: hidden;
                }
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s ease-out;
                    pointer-events: none;
                }
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `)
            .appendTo('head');
    }

    // Add scroll progress indicator
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var scrollPercent = (scrollTop / docHeight) * 100;
        
        if (!$('#scroll-progress').length) {
            $('body').append('<div id="scroll-progress"></div>');
            $('#scroll-progress').css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'width': '0%',
                'height': '4px',
                'background': 'linear-gradient(135deg, #34AD54 0%, #06A3DA 100%)',
                'z-index': '9999',
                'transition': 'width 0.1s ease-out',
                'box-shadow': '0 2px 10px rgba(52, 173, 84, 0.5)'
            });
        }
        
        $('#scroll-progress').css('width', scrollPercent + '%');
    });

    // Add typing effect to hero text (optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Enhanced form validation with animations
    $('form').on('submit', function(e) {
        var form = $(this);
        var isValid = true;
        
        form.find('input[required], textarea[required]').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('is-invalid');
                $(this).css('animation', 'shake 0.5s');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            setTimeout(function() {
                form.find('.is-invalid').css('animation', '');
            }, 500);
        }
    });

    // Add shake animation CSS
    if (!$('#shake-style').length) {
        $('<style id="shake-style">')
            .text(`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }
            `)
            .appendTo('head');
    }

    // Add page transition effect
    $(document).ready(function() {
        $('body').addClass('page-transition');
    });

    // Enhanced hover effects for service items
    $('.service-item').hover(
        function() {
            $(this).find('.service-icon').addClass('animated pulse');
        },
        function() {
            $(this).find('.service-icon').removeClass('animated pulse');
        }
    );

    // Add smooth reveal animation on scroll
    function revealOnScroll() {
        $('.reveal-on-scroll').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('revealed');
            }
        });
    }

    $(window).on('scroll', revealOnScroll);
    revealOnScroll();

    // Add CSS for reveal animation
    if (!$('#reveal-style').length) {
        $('<style id="reveal-style">')
            .text(`
                .reveal-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s ease-out;
                }
                .reveal-on-scroll.revealed {
                    opacity: 1;
                    transform: translateY(0);
                }
            `)
            .appendTo('head');
    }

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll events
    const debouncedScroll = debounce(function() {
        // Scroll-based animations here
    }, 10);

    $(window).on('scroll', debouncedScroll);

    // Add loading animation for images
    $('img').on('load', function() {
        $(this).addClass('loaded');
    }).each(function() {
        if (this.complete) {
            $(this).trigger('load');
        }
    });

    console.log('Bender Exports - Modern Website Initialized Successfully! 🚀');

})(jQuery);
