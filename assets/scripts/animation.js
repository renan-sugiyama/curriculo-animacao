// anime({
//     targets: 'div',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
//   });

$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();
    // var controller = new ScrollMagic.Controller({vertical: false});
 
    function deslocarTela (offset, duration, posXInicial, posXFinal, posYInicial, posYFinal) {
        new ScrollMagic.Scene({
            // triggerElement: "#painel1",
            // triggerHook: "onEnter", // show, when scrolled 10% into view
                        duration: duration, // scroll duration
                        offset: offset //scroll start
                    })
                    .setTween(new TimelineMax()
                        .from(".largura", 0, {transform: `translate(${posXInicial},${posYInicial})`})
                    .to(".largura", 1.5, {transform: `translate(${posXFinal},${posYFinal})`, delay: 0}))
                    .addIndicators({name: "GSAP"}) // add indicators (requires plugin)
                    // .on('end', function(){
                    //     document.querySelector('.largura').style.transform = `translate(calc(${posXInicial}),${posYInicial})`
                    // })
                    .addTo(controller);
    }

    function movHorizontal (offset, posInicial, posFinal) {
        new ScrollMagic.Scene({
            // triggerElement: "#painel1",
            // triggerHook: "onEnter", // show, when scrolled 10% into view
                        duration: 1000, // scroll duration
                        offset: offset //scroll start
                    })
                    .setTween(new TimelineMax()
                        .from(".personagem", 0, {left: posInicial})
                        .to(".personagem", 1.5, {left: posFinal, delay: 0}))
                    .addIndicators({name: "GSAP"}) // add indicators (requires plugin)
                    .on('start', function(){
                        document.querySelector('.personagem').style.left = posInicial;
                    })
                    .addTo(controller);
    }

    function movVertical (offset, posInicial, posFinal) {
        let myTween = new TimelineMax()
        .from(".personagem", 0, {top: posInicial})
        .to(".personagem", 1.5, {top: posFinal, delay: 0})

        new ScrollMagic.Scene({
                    // triggerElement: "#painel1",
                    // triggerHook: "onEnter", // show, when scrolled 10% into view
                                duration: 200, // scroll duration
                                offset: offset //scroll start
                            })
                            .setTween(myTween)
                            .addIndicators({name: "GSAP sobe"}) // add indicators (requires plugin)
                            .on('start', function (event) {
                                document.querySelector('.personagem').style.top = posInicial;
                                console.log(document.querySelector('.personagem').style.top)
                            })
                            .addTo(controller);
    }

    function toggleClass (offset, duration, target, className) {
        new ScrollMagic.Scene({
            duration: duration,    // the scene should last for a scroll distance of 100px
            offset: offset    // start this scene after scrolling for 50px
            })
            .setTween(TweenMax.to(target, 1, {className: "+=" + className}))
            .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
            .removeClassToggle(true)
            .addTo(controller);
    }
    






    //teste email desenho
    var flightpath = {
        entry : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:0, y:0},
                {x:$(window).width()*1.2 - $(window).width(), y:0}, 
                {x:$(window).width()*1.5 - $(window).width(), y:-80}, 
                {x:$(window).width() - $(window).width()/1.2, y:0},
                {x:0, y:$(window).height()-$(window).height()/2},
                {x:$(window).width() - $(window).width()/1.1, y:$(window).height()/1.5-$(window).height()},
                {x:$(window).width() - $(window).width()/2, y:-$(window).height()-800},
                {x:$(window).width(), y:-$(window).height()-200}
            ]
        }
    };
    

    
    // create tween
    var emailtween = new TimelineMax()
        .add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}));

    // build scene
    var scene = new ScrollMagic.Scene({
        duration: 2000,    // the scene should last for a scroll distance of 100px
        offset: 9000    // start this scene after scrolling for 50px
        })
                    .setPin("#target")
                    .setTween(emailtween)
                    .addIndicators('teste') // add indicators (requires plugin)
                    .addTo(controller);
                    



// anima personagem
                   
    var imagesRun = [
        "./assets/imgs/sprites/personagem/Run1.png",
        "./assets/imgs/sprites/personagem/Run2.png",
        "./assets/imgs/sprites/personagem/Run3.png",
        "./assets/imgs/sprites/personagem/Run4.png",
        "./assets/imgs/sprites/personagem/Run5.png",
        "./assets/imgs/sprites/personagem/Run6.png",
        "./assets/imgs/sprites/personagem/Run7.png",
        "./assets/imgs/sprites/personagem/Run8.png",
        "./assets/imgs/sprites/personagem/Run9.png",
        "./assets/imgs/sprites/personagem/Run10.png",
        "./assets/imgs/sprites/personagem/Run11.png",
        "./assets/imgs/sprites/personagem/Run12.png",
        "./assets/imgs/sprites/personagem/Run13.png",
        "./assets/imgs/sprites/personagem/Run14.png",
        "./assets/imgs/sprites/personagem/Run15.png",
        
    ];

    var imagesJump = [
        "./assets/imgs/sprites/personagem/Jump1.png",
        "./assets/imgs/sprites/personagem/Jump2.png",
        "./assets/imgs/sprites/personagem/Jump3.png",
        "./assets/imgs/sprites/personagem/Jump4.png",
        "./assets/imgs/sprites/personagem/Jump5.png",
        "./assets/imgs/sprites/personagem/Jump6.png",
        "./assets/imgs/sprites/personagem/Jump7.png",
        "./assets/imgs/sprites/personagem/Jump8.png",
        "./assets/imgs/sprites/personagem/Jump9.png",
        "./assets/imgs/sprites/personagem/Jump10.png",
        "./assets/imgs/sprites/personagem/Jump11.png",
        "./assets/imgs/sprites/personagem/Jump12.png",
        "./assets/imgs/sprites/personagem/Jump13.png",
        "./assets/imgs/sprites/personagem/Jump14.png",
        "./assets/imgs/sprites/personagem/Jump15.png",
        
    ];
            
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};

    // create tween
    var personagemtween = TweenMax.to(obj, 0.5,
        {
            curImg: imagesRun.length - 1,	// animate propery curImg to number of imagesRun
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 1,									// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
                $("#personagem").attr("src", imagesRun[obj.curImg]); // set the image source
            }
        }
    );






    
            
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj2 = {curImg: 0};

    // create tween
    var personagemJumptween = TweenMax.to(obj2, 0.5,
        {
            curImg: imagesJump.length - 1,	// animate propery curImg to number of imagesJump
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 1,									// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
                $("#personagem").attr("src", imagesJump[obj2.curImg]); // set the image source
            }
        }
    );



   
    // build scene
    function animaSprite (offset, duration){
        new ScrollMagic.Scene({
            offset: offset, 
            duration: duration  
        })
        .setTween(personagemtween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }

    function animaJumpSprite (offset, duration){
        new ScrollMagic.Scene({
            offset: offset, 
            duration: duration  
        })
        .setTween(personagemJumptween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }



    deslocarTela(100, 5000, 0, '-200vw', 0, 0)
    deslocarTela(5000, 1000, '-200vw', '-200vw', 0, '-100vh')
    deslocarTela(6700, 4000, '-200vw', '-400vw', '-100vh', '-100vh')
    toggleClass(5400, 700, ".tela-escura-efeito", 'tela-escura-efeito-hide')
    //toggleClass(20000, 700, ".contato", 'show-contato')
    toggleClass(9000, 100, "#target", 'showTarget')
    
    movVertical(1200, '70%', '50%')
    movVertical(1400, '50%', '70%')
    toggleClass(1400, 100, ".parte1 .tijolo1", 'html5Skill')
    
    movVertical(1700, '70%', '50%')
    movVertical(1900, '50%', '70%')
    toggleClass(1900, 100, ".parte1 .tijolo2", 'css3Skill')

    movVertical(2200, '70%', '50%')
    movVertical(2400, '50%', '70%')
    toggleClass(2400, 100, ".parte1 .tijolo3", 'javascriptSkill')

    movVertical(3700, '70%', '50%')
    movVertical(4400, '50%', '70%')
                
    
    movVertical(6700, '70%', '60%')
    toggleClass(2400, 100, ".parte1 .tijolo3", 'javascriptSkill')
    
    movVertical(7000, '60%', '40%')
    toggleClass(7050, 200, ".parte2 .tijolo1", 'frameSkill-hide')

    movVertical(7300, '40%', '20%')
    toggleClass(7350, 200, ".parte2 .tijolo2", 'frameSkill-hide')

    movVertical(7600, '20%', '10%')
    toggleClass(7650, 200, ".parte2 .tijolo3", 'frameSkill-hide')

    movHorizontal(7800, '10%', '50%')
    movVertical(8000, '10%', '70%')

    toggleClass(8400, 100, ".personagem", 'hidePersonagem')

    animaSprite(0, 500)
    animaSprite(500, 500)
    animaSprite(1000, 200)
    animaJumpSprite(1200, 400)
    animaSprite(1600, 100)
    animaJumpSprite(1700, 400)
    animaSprite(2100, 100)
    animaJumpSprite(2200, 400)
    animaSprite(2500, 500)
    animaSprite(3000, 500)
    animaSprite(3500, 200)
    animaJumpSprite(3700, 1300)
    animaSprite(6500, 200)
    animaJumpSprite(6700, 250)
    animaJumpSprite(7000, 250)
    animaJumpSprite(7300, 250)
    animaJumpSprite(7600, 400)
    animaSprite(8200, 500)


        

});

