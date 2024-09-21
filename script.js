window.addEventListener('load', () => {
    AOS.init({
        duration: 1000
    });
    
    Fancybox.bind()

    var nfts = document.querySelectorAll('.nft-item');

    function slider(el){
        var id = Number(el.dataset.id);
        var leftStep;
        var rightStep;
        var backStep;
        nfts.forEach((nft) => {
            nft.classList.remove('nft-left');
            nft.classList.remove('nft-back');
            nft.classList.remove('nft-active');
            nft.classList.remove('nft-right');
        })
        el.classList.add('nft-active');
        if(id == 1){
            leftStep = -3;
            rightStep = -1;
            backStep = -2;
        }
        else if(id == 2){
            leftStep = 1;
            rightStep = -1;
            backStep = -2;
        }
        else if(id == 3){
            leftStep = 1;
            rightStep = -1;
            backStep = 2;
        }
        else{
            leftStep = 1;
            rightStep = 3;
            backStep = 2;
        }
        document.querySelector('[data-id="' +(Number(id) - leftStep) + '"]').classList.add('nft-left')
        document.querySelector('[data-id="' +(Number(id) - backStep) + '"]').classList.add('nft-back')
        document.querySelector('[data-id="' +(Number(id) - rightStep) + '"]').classList.add('nft-right')
    }

    nfts.forEach((el) => {
        el.addEventListener('click', () => {
            slider(el);
        })
    })

    document.querySelector('#nft .arrow-left').addEventListener('click', () => {
        var nft = document.querySelector('.nft-left');
        slider(nft);
    })
    document.querySelector('#nft .arrow-right').addEventListener('click', () => {
        var nft = document.querySelector('.nft-right');
        slider(nft);
    })
    document.querySelectorAll('.question').forEach((el) => {
        el.addEventListener('click', () => {
            var id = el.dataset.question;
            document.querySelector('[data-infoblock="' + id + '"]').classList.add('active');
        })
    })
    document.querySelectorAll('.close').forEach((el) => {
        el.addEventListener('click', () => {
            el.parentNode.classList.remove('active')
        })
    })

    const screens = new Swiper('.screens-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.screens-right',
            prevEl: '.screens-left'
        },
        initialSlide: 1,
    })

    const screens2 = new Swiper('.screens-2-slider', {
        slidesPerView: 1,
        pagination: {
            el: '.screens-2-pagination',
            clickable: true
        }
    })

})