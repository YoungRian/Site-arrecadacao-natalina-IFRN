/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});





$(document).ready(function(){
    var images = document.querySelectorAll('img')
    var imageData = []
    function replaceImage (node) {
      if (
        node.getAttribute('data-lazyload-replaced') ||
        (window.scrollY + window.innerHeight) <= node.offsetTop
      ) {
        return
      }
      var newImage = new Image()
      newImage.src = node.getAttribute('data-src')
      newImage.onload = (function (event) {
        setTimeout(function () {
          node.parentElement.replaceChild(newImage, node)      
        }, Math.random() * 2000 + 500)
      }).bind(this)
      
      node.setAttribute('data-lazyload-replaced', true)
    }
    document.addEventListener('scroll', function (event) {
      for (var i = 0, numImages = images.length; i < numImages; i++) {
        replaceImage(images[i])
      }
    })
    for (var i = 0, numImages = images.length; i < numImages; i++) {
      images[i].onload = function (event) {
        replaceImage(event.target)
      }
    }
});








$(document).ready(function(){
        
    //-- Click on terms and conditions
    $(".term").click(function(){
        var ctrl = $(this).find("i");
        if (ctrl.hasClass("fa-check-square-o")){
            ctrl.attr("class","fa fa-square-o");
        }else{
            ctrl.attr("class", "fa fa-check-square-o");
        }
    }) 

    $("input").blur(function(){
        if ($(this).val() != ""){
            $(this).parent().css({"color":"black"});
            $(this).css({"border-bottom":"1px solid silver","color":"gray"});                 
        }
    })
    
    //--- CONTINUE ---
    $("form > p > a").click(function(){
        //-- Detect terms and conditions
        var term = false;
        if ($(".term > i").hasClass('fa-check-square-o')){
            term = true;
        }
        
        //-- only example
        var user = {};
        user.name = $("input[name='name']").val();
        user.id = $("input[name='id']").val();
        user.phone = $("input[name='phone']").val();
        user.email = $("input[name='email']").val();
        user.term = term;

        //-- Validator            
        $("input").each(function(e, valor){
            var error = false;
            if ($(this).val() == ""){
                error = true;
            }
            if (error === true){
                //-- with errors
                $(this).parent().css({"color":"red"});
                $(this).css({"border-bottom":"1px solid red"});
            }else{
                //-- without errors
                $(this).parent().css({"color":"black"});
                $(this).css({"border-bottom":"1px solid silver","color":"gray"}); 
            }
        })

        //-- msg example
        $("body").append(JSON.stringify(user) + "<br>");
    })
})