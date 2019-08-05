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

    // define movement of panels
    // var wipeAnimation = new TimelineMax()
        
    //     .fromTo("section.panel#panel2", 1, {x: "100%"}, {x: "-100%", ease: Linear.easeNone})  // in from left
    //     .fromTo("section.panel#panel3", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    //     .fromTo("section.panel.bordeaux", 1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
    //     .fromTo("section.panel.gray", 1, {x: "120%"}, {x: "0%", ease: Linear.easeNone}) // in from top
    //     .fromTo("section.panel.blueviolet", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
    //     .fromTo("section.panel.lightcoral", 1, {x: "100%", y: "100%"}, {x: "0%", ease: Linear.easeNone, y: "0%", ease: Linear.easeNone}); // in from top

    // // create scene to pin and link animation
    // new ScrollMagic.Scene({
    //         triggerElement: "#pinContainer",
    //         triggerHook: "onLeave",
    //         duration: 9000
    //     })
    //     .setPin("#pinContainer")
    //     .setTween(wipeAnimation)
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);




    // build tween
	// 	var parallaxtween = new TimelineMax ()
    //     .add([
    //         TweenMax.to("#pinContainer #panel1", 1, {backgroundPosition: "40% 0", ease: Linear.easeNone}),
    //         TweenMax.to("#pinContainer #panel2", 1, {backgroundPosition: "500% 0", ease: Linear.easeNone}),
    //         TweenMax.to("#pinContainer #panel3", 1, {backgroundPosition: "225% 0", ease: Linear.easeNone})
    //     ]);

    // // build scene
    // var scene = new ScrollMagic.Scene(
    //             {
    //                 duration: 2000, 
    //                 offset: 0
    //             })
    //                 .setTween(parallaxtween)
    //                 .setPin("#pinContainer")
    //                 .addIndicators() // add indicators (requires plugin)
    //                 .addTo(controller);    

    // function deslocarTela(offset, elemento, deslocaClassName) {
    //     new ScrollMagic.Scene({
    //         duration: 5000,    // the scene should last for a scroll distance of 100px
    //         offset: offset    // start this scene after scrolling for 50px
    //         })
    //         .setTween(TweenMax.to(elemento, 1, {className: '+=' + deslocaClassName}))
    //         .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
    //         .removeClassToggle(true)
    //         .on('end', function (event) {
    //             document.querySelector(elemento).style.transform = `translate(calc(100vw * -2),0)`
    //         })
    //         .addTo(controller);
    // }

    
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

    new ScrollMagic.Scene({
        duration: 700,    // the scene should last for a scroll distance of 100px
        offset: 10000    // start this scene after scrolling for 50px
        })
        .setTween(TweenMax.to(".contato", 1, {className: "+=show-contato"}))
        .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
        .removeClassToggle(true)
        .addTo(controller);
    
    // deslocarTela(100, '.largura', "desloca-parte1")
    // deslocarTela(5000, '.largura', "desloca-parte2")
    deslocarTela(100, 5000, 0, '-200vw', 0, 0)
    deslocarTela(5000, 1000, '-200vw', '-200vw', 0, '-100vh')
    deslocarTela(6700, 4000, '-200vw', '-400vw', '-100vh', '-100vh')


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

        //anda para a direita
        //build scene
        function esconder (offset) {
            new ScrollMagic.Scene({
                duration: 100,    // the scene should last for a scroll distance of 100px
                offset: offset    // start this scene after scrolling for 50px
                })
                .setTween(TweenMax.to(".personagem", 1, {className: "+=hidePersonagem"}))
                .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
                .removeClassToggle(true)
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


        //movHorizontal(10, '10%', '80%')

        movVertical(1200, '80%', '50%')
        movVertical(1400, '50%', '80%')
        
        movVertical(1700, '80%', '50%')
        movVertical(1900, '50%', '80%')

        movVertical(2200, '80%', '50%')
        movVertical(2400, '50%', '80%')

        movVertical(3700, '80%', '50%')
        movVertical(4400, '50%', '80%')
                    
        //movHorizontal(2600, '40%', '80%')
        
        movVertical(6700, '80%', '60%')
        
        movVertical(7000, '60%', '40%')

        movVertical(7300, '40%', '20%')

        movVertical(7600, '20%', '10%')

        movHorizontal(7800, '10%', '50%')
        movVertical(8000, '10%', '80%')

        esconder(8400)
        //movHorizontal(5200, '80%', '10%')

        // pula(200)
        // document.querySelector('.personagem').classList.remove('personagem-up')
        // desce(260)
        // document.querySelector('.personagem').classList.remove('personagem-down')

        // pula(350)
        // desce(410)

        // pula(500)
        // desce(560)




        //teste email desenho
        var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
                values: [
                    {x:0, y:0},
                    {x:300 - $(window).width(), y:0}, 
                    {x:$(window).width()/1.5 - $(window).width(), y:-80}, 
                    {x:$(window).width() - $(window).width()/1.5, y:$(window).height()/4-$(window).height()},
                    {x:$(window).width()-300, y:$(window).height()-200}
                ]
			}
        };
        



        
            new ScrollMagic.Scene({
                duration: 100,    // the scene should last for a scroll distance of 100px
                offset: 9000    // start this scene after scrolling for 50px
                })
                .setTween(TweenMax.to("#target", 1, {className: "+=showTarget"}))
                .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
                .removeClassToggle(true)
                .addTo(controller);
        


		
		// create tween
		var emailtween = new TimelineMax()
			.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({
            duration: 900,    // the scene should last for a scroll distance of 100px
            offset: 9000    // start this scene after scrolling for 50px
            })
						.setPin("#target")
						.setTween(emailtween)
						.addIndicators('teste') // add indicators (requires plugin)
						.addTo(controller);

});

