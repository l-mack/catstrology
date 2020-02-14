// Catstroloy app 

    const catstrology ={};

        // catstrology array 

        catstrology.signs = [
            {
                name: 'capricorn',
                dateFrom: '22/12',
                dateTo: '19/01',
                endDate: '119',
                image: 'capricorn.png',
                imageCat: 'capricornCat.png',
                descript: 'Hey it’s your boss, welcome to their world, hope you like serving them. Persistent to the core, if they want something: They. Will. Have. It. Be it a door opened late at night or attention right here right now, it will be theirs. Loving and loyal you’ll enjoy their rein over you.',
                attribution: 'Capricorn Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'aquarius',
                dateFrom: '20/01',
                dateTo: '18/02',
                endDate: '218',
                image: 'aquarius.png',
                imageCat: 'aquariusCat.png',
                descript: 'Aquarian cats can’t be normal.  Even for cats, these creatures are weird.  They probably have you face-palming on the regular, saying things like, “did you really just eat that?!" Redefining what it means to be “quirky” Aquarian felines are full of surprises. Teach them to fetch, if any cat is likely to pick it up, it’s an aqua-kitty.',
                attribution: 'Aquarius Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'pisces',
                dateFrom: '19/02',
                dateTo: '20/03',
                endDate: '320',
                image: 'pisces.png',
                imageCat: 'piscesCat.png',
                descript: 'This is the cat that seems to know when you’re upset and will come lay on your lap.  Pieces cats have a calm demeanour, not demanding too much attention their active imagination keeps them entertained. They can be found dreaming or otherwise in their own world, clearly existing in another dimension.',
                attribution: 'Pisces Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'aries',
                dateFrom: '21/03',
                dateTo: '19/04',
                endDate: '419',
                image: 'aries.png',
                imageCat: 'ariesCat.png',
                descript: 'Always hangry, these bossy busy bodies are always moving.  Their fiery energy makes them avid hunters, and I’m betting they leave lots of “gifts” for you.  Be sure to give them lots of play time and maybe they’ll think about snuggling you for a bit.',
                attribution: 'Aries Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'taurus',
                dateFrom: '20/04',
                dateTo: '20/05',
                endDate: '520',
                image: 'taurus.png',
                imageCat: 'taurusCat.png',
                descript: 'Feeding time is all the time for these stalky fur balls. They love food and tasty treats. Avid nappers and often enjoy long luxurious pets, except when they don’t, and they be sure to let you know.',
                attribution: 'Taurus Cat by Denis Sazhin from the Noun Project'
            },
            {
                name: 'gemini',
                dateFrom: '21/05',
                dateTo: '20/06',
                endDate: '620',
                image: 'gemini.png',
                imageCat: 'geminiCat.png',
                descript: 'Talk-itty talk talk Gemini cats have a lot to say. A meow for every mood and energy for days. Their bizarre behaviour probably keeps you guessing, chasing shadows, stealing from your purse, playing games at 4am… Never a dull day with a Gemini fur baby!',
                attribution: 'Gemini Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'cancer',
                dateFrom: '21/06',
                dateTo: '22/07',
                endDate: '722',
                image: 'cancer.png', 
                imageCat: 'cancerCat.png',
                descript: 'Hide and seekers of the kitty zodiac, cancer cats like to find little hide away spots for peace and quiet.  Very affectionate and loving to their family.  Easily overwhelmed they can be timid and shy around new comers. Let them come to you when they’re ready.',
                attribution: 'Cancer Cat by Denis Sazhin from the Noun Project',

            },
            {
                name: 'leo',
                dateFrom: '07/23',
                dateTo: '22/08',
                endDate: '822',
                image: 'leo.png',
                imageCat: 'leoCat.png',
                descript: '“What are you doing and why aren’t you paying attention to me???” Leo cats are the centre of their own universe, and they’re assuming the centre of yours’s too. They live for affection and attention and if they don’t get it, you’ll be sure to hear about it (maybe they’ll shred the toilet paper or leave a “gift” on your bed).',
                attribution: 'Leo Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'virgo',
                dateFrom: '23/08',
                dateTo: '22/09',
                endDate: '922',
                image: 'virgo.png',
                imageCat: 'virgoCat.png',
                descript: 'Picky and particular, Virgo cats like what they like and don’t what they don’t. They probably have preference for very clean food bowels and litters, but are tidy cats to take care of in turn. Once you find the food they like, best to just stick with it for both of your respective sanity’s sake. Avid groomers they take a lot of care in keeping clean and neat.',
            },
            {
                name: 'libra',
                dateFrom: '23/09',
                dateTo: '22/10',
                endDate: '1022',
                image: 'libra.png',
                imageCat: 'libraCat.png',
                descript: 'The socialites of kitty land, Libra cats do best with a kitty friend in their home to keep them company.  Never shy Libra kitties wanna know you, and your friends too, bouncing from lap to lap for all the attention and affection a room has to offer.',
                attribution: 'Libra Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'scorpio',
                dateFrom: '23/10',
                dateTo: '21/11',
                endDate: '1122',
                image: 'scorpio.png',
                imageCat: 'scorpioCat.png',
                descript: 'These mysterious and intense felines are mood AF. They will not come when you call, might rub on your leg one minute and turn around and bite your ankle the next. They are known to get jealous if you’re found giving affection to another cat so don’t turn your back on these feisty fur demons… maybe sleep with one eye open.',
                attribution: 'Scorpio Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'sagittarius',
                dateFrom: '22/11',
                dateTo: '21/12',
                endDate: '1221',
                image: 'sagittarius.png',
                imageCat: 'sagittariusCat.png',
                descript: 'Wanderers and explorers, Sagittarius kitties are on the move. Endlessly curious, these cats will get into every nook and cranny looking for excitement. A little reckless, they’ve been known to nock overs valuables in pursuit of an adventure.',
                attribution: 'Sagittarius Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'capricorn',
                dateFrom: '22/12',
                dateTo: '19/01',
                endDate: '1231',
                image: 'capricorn.png',
                imageCat: 'capricornCat.png',
                descript: 'HHey it’s your boss, welcome to their world, hope you like serving them. Persistent to the core, if they want something: They. Will. Have. It. Be it a door opened late at night or attention right here right now, it will be theirs. Loving and loyal you’ll enjoy their rein over you. ',
                attribution: 'Capricorn Cat by Denis Sazhin from the Noun Project',
            }
        ];

    // display object name, img and description 

    catstrology.displayResults = function(){    

        // capture user inputs in variables

        const userInputDay = $('#dayEntry').val();

        const userInputMonth = $('#monthEntry').val();
            
        // concat month and day inputs into a string 
        const userInput = parseInt(userInputMonth+userInputDay);

        // compare userInput to signs array
        const result = catstrology.signs.find(sign => sign.endDate >= userInput);

        // append results 
        const signInfo = Object.values(result);
        const htmlToAppend = `
        <div class="imgCont">
            <img src="./assets/signsCats/${signInfo[5]}" alt="${signInfo[0]} cat cartoon">
            </div>
        <div class="signTextbox">
            <h4>${signInfo[0]}</h4>
            <p>${signInfo[6]}</p>
        </div>
        `;
        $('.resultsFlex').html(htmlToAppend);
        };

        // display all feature 
        catstrology.displayAllFeatures = function(){
            const resultDisplayAll = catstrology.signs.filter(sign => sign.endDate <= 1221);
            resultDisplayAll.forEach(function (sign){
                const htmlToAppend =`
                    <div class = "displayAllFlex">
                        <div class="imgCont">
                        <img src="./assets/signsCats/${sign.imageCat}" alt="${sign.name} cat cartoon">
                        </div>
                        <div class="signTextbox">
                            <h4>${sign.name}</h4>
                            <p>${sign.descript}</p>
                        </div>
                    </div>
                    `;
            $('.displayAllGrid').append(htmlToAppend);
        });
    };

    // events 
    catstrology.events = function(){

        // form submission 
        $('form').on('submit', function(e){
            e.preventDefault();
            catstrology.displayResults();
        })

        // display all 
        $('.displayAll').on('click', function (){
            let e = $(this);
            if (e.text() == e.data('text-swap')){
                e.text(e.data('text-original'));
                $('body').removeClass('displayAllFeat');
                $('.displayAllGrid').slideUp();
                $('.displayAllGrid').empty();
                $('main').slideDown();
                $('header').slideDown();
            }else{
                e.data('text-original', e.text());
                e.text(e.data('text-swap'));
                $('body').addClass('displayAllFeat');
                catstrology.displayAllFeatures()
                $('.displayAllGrid').slideDown();
                $('main').slideUp();
                $('header').slideUp();
            }
        });
    };

    // init
    catstrology.init = function(){
        catstrology.events();    

    };

// document ready 
    $(function() {
        catstrology.init();
});
