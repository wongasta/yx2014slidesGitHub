// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'lib/js/classList.js', condition: function () {
            return !document.body.classList;
        } },
        { src: 'plugin/markdown/marked.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: 'plugin/markdown/markdown.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function () {
            hljs.initHighlightingOnLoad();
        } },
        { src: 'plugin/zoom-js/zoom.js', async: true, condition: function () {
            return !!document.body.classList;
        } },
        { src: 'plugin/notes/notes.js', async: true, condition: function () {
            return !!document.body.classList;
        } }
    ]
})

Reveal.addEventListener('fragmentshown', function (event) {
    switch($(event.fragment).data('fragid')){
        case 'intro1':
            $(event.fragment).parent().find('.mainHeaders').css({'top': '-50px'});
            break;
        case 'aboutText':
            var tempColor = $(event.fragment).data('colorchange')
            myModule.findBgDiv($(event.fragment), 2).css({'background-color':tempColor});
            break;
        case 'moreabouttext':
            var tempColor = $(event.fragment).data('colorchange')
            myModule.findBgDiv($(event.fragment), 14).css({'background-color':tempColor});
    }

});

Reveal.addEventListener( 'slidechanged', function( event ) {
    console.log($(event.currentSlide).attr('id'));
    switch($(event.currentSlide).attr('id')){
        case 'shanghai':

    }

} );

//Put all your image url in an array
var myImages = ['lib/images/bgs/shanghai.jpg', 'lib/images/bgs/kyoto.jpg', 'lib/images/bgs/houston.jpg', 'lib/images/bgs/austin.jpg','lib/images/bgs/hongkong.jpg', 'lib/images/bgs/office.jpg'];


var myModule={
    findBgDiv: function(currentElement, index){
        return currentElement.closest('#mainContainer').find('.backgrounds').find('div:nth-child('+index+')');
    }
};


$.loadImages(myImages, function(){
    console.log('all loaded');
    $('#loading').slideUp(500);
});