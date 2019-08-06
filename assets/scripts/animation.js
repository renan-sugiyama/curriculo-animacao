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
 
    function deslocarTela (offset, duration, posXInicial, posXFinal) {
        new ScrollMagic.Scene({
            // triggerElement: "#painel1",
            // triggerHook: "onEnter", // show, when scrolled 10% into view
                        duration: duration, // scroll duration
                        offset: offset //scroll start
                    })
                    .setTween(new TimelineMax()
                    .from(".largura", 0, {transform: `translate(${posXInicial}, 0)`})
                    .to(".largura", 1.5, {transform: `translate(${posXFinal},0)`, delay: 0}))
                    .addIndicators({name: "GSAP"}) // add indicators (requires plugin)
                    .on('start', function(){
                        document.querySelector('.largura').style.transform = `translate(${posXInicial},0)`
                    })
                    
                    .addTo(controller);
    }

    function movHorizontal (offset, posInicial, posFinal, duration = 1000) {
        new ScrollMagic.Scene({
            // triggerElement: "#painel1",
            // triggerHook: "onEnter", // show, when scrolled 10% into view
                        duration: duration, // scroll duration
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

    function toggleClass (offset, duration, target, className, add = '+') {
        new ScrollMagic.Scene({
            duration: duration,    // the scene should last for a scroll distance of 100px
            offset: offset    // start this scene after scrolling for 50px
            })
            .setTween(TweenMax.to(target, 1, {className: `${add}=` + className}))
            .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
            .removeClassToggle(true)
            .addTo(controller);
    }
    

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

    deslocarTela(100, 5000, 0, '-200vw')
    movHorizontal(0, '10%', '25%')
    toggleClass(0, 1, ".sol img", 'show')
    toggleClass(0, 100, ".panel1 .text-intro", 'text-intro-anima')
    toggleClass(600, 100, ".panel2 .text-intro", 'text-intro-anima')

    animaSprite(0, 1300)
    animaJumpSprite(1300, 200)
    
    movVertical(1300, '70%', '50%')
    movVertical(1500, '50%', '70%')
    toggleClass(1500, 50, ".panel2 .tijolo1", 'html5Skill')
    
    animaSprite(1700, 1800)
    animaJumpSprite(1800, 200)

    movVertical(1800, '70%', '50%')
    movVertical(2000, '50%', '70%')
    toggleClass(2000, 50, ".panel2 .tijolo2", 'css3Skill')

    animaSprite(2200, 2300)
    animaJumpSprite(2300, 200)

    movVertical(2300, '70%', '50%')
    movVertical(2500, '50%', '70%')
    toggleClass(2500, 50, ".panel2 .tijolo3", 'javascriptSkill')

    animaSprite(2700, 3800)
    animaJumpSprite(3800, 200)

    movVertical(3800, '70%', '50%')
    movVertical(4700, '50%', '70%')
    
    toggleClass(5000, 1, '.sol img', 'hide')
    toggleClass(5000, 1, '.panel3-escurecer', 'escurecerPainel-1')
    toggleClass(5100, 1, '.panel3-escurecer', 'escurecerPainel-2')
    toggleClass(5200, 1, '.panel3-escurecer', 'escurecerPainel-3')
    toggleClass(5300, 1, '.panel3-escurecer', 'escurecerPainel-4')
    toggleClass(5400, 1, '.panel3-escurecer', 'escurecerPainel-5')
    
    movVertical(5000, '50%', '80%')
    toggleClass(5000, 200, ".personagem", 'hide')
    movVertical(5400, '80%', '0%')
    
    deslocarTela(5500, 5000, '-200vw', '-300vw')
    toggleClass(11000, 1, '.lua img', 'show')
    
    movHorizontal(11000, '25%', '15%')
    toggleClass(11500, 100, ".panel4 .text-intro", 'text-intro-anima')
    
    toggleClass(11000, 1, '.tela-escura-efeito', 'escurecerPainel-5')
    toggleClass(11300, 1, '.tela-escura-efeito', 'escurecerPainel-4')
    toggleClass(11600, 1, '.tela-escura-efeito', 'escurecerPainel-3')
    toggleClass(11900, 1, '.tela-escura-efeito', 'escurecerPainel-2')
    toggleClass(12200, 1, '.tela-escura-efeito', 'escurecerPainel-1')
    toggleClass(12500, 1, '.tela-escura-efeito', 'escurecerPainel-0')

    toggleClass(11300, 1, '.tela-escura-efeito', 'escurecerPainel-5', '-')
    toggleClass(11600, 1, '.tela-escura-efeito', 'escurecerPainel-4', '-')
    toggleClass(11900, 1, '.tela-escura-efeito', 'escurecerPainel-3', '-')
    toggleClass(12200, 1, '.tela-escura-efeito', 'escurecerPainel-2', '-')
    toggleClass(12500, 1, '.tela-escura-efeito', 'escurecerPainel-1', '-')

    movVertical(12200, '0%', '20%')
    movVertical(12400, '20%', '40%')
    movVertical(12600, '40%', '70%')
    toggleClass(12000, 100, ".personagem", 'hide', '-')

    deslocarTela(13000, 15000, '-300vw', '-600vw')

    animaSprite(13000, 13100)
    animaJumpSprite(13300, 500)

    movVertical(13300, '70%', '58%')

    animaJumpSprite(13700, 600)

    movVertical(13700, '58%', '40%')
    toggleClass(13900, 200, ".panel4 .tijolo1", 'frameSkill-hide')

    animaJumpSprite(14300, 600)

    movVertical(14300, '40%', '20%')
    toggleClass(14500, 200, ".panel4 .tijolo2", 'frameSkill-hide')

    animaJumpSprite(15000, 1000)

    movVertical(15000, '20%', '10%')
    toggleClass(15200, 200, ".panel4 .tijolo3", 'frameSkill-hide')

    movVertical(15800, '10%', '40%')
    movVertical(16000, '40%', '70%')
    animaSprite(16300, 1000)
    animaSprite(17300, 1000)
    animaSprite(18300, 1000)
    

    toggleClass(18000, 200, ".personagem", 'hide')

    toggleClass(18500, 100, ".panel6 .text-intro", 'text-intro-anima')
    toggleClass(18000, 1, ".portfolio-card-1", 'rodaCartao')
    toggleClass(18400, 1, ".portfolio-card-2", 'rodaCartao')
    toggleClass(18800, 1, ".portfolio-card-3", 'rodaCartao')
    toggleClass(19200, 1, ".portfolio-card-4", 'rodaCartao')
    movHorizontal(25500, "15%", '110%', 3000)

    toggleClass(25600, 100, ".personagem", 'hide', '-')
    animaSprite(25700, 1000)
    animaSprite(26700, 1000)
    animaSprite(27700, 1000)
    toggleClass(26000, 100, 'img[alt="whatsapp"]', 'show')
    toggleClass(26100, 100, 'img[alt="linkedin"]', 'show')
    toggleClass(26200, 100, 'img[alt="github"]', 'show')
    toggleClass(26300, 100, 'img[alt="facebook"]', 'show')
    toggleClass(26500, 100, '.form-contato', 'showForm')

    
    


        

});

