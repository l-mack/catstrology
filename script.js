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
                descript: 'something',
                attribution: 'Capricorn Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'aquarius',
                dateFrom: '20/01',
                dateTo: '18/02',
                endDate: '218',
                image: 'aquarius.png',
                imageCat: 'aquariusCat.png',
                descript: 'something',
                attribution: 'Aquarius Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'pisces',
                dateFrom: '19/02',
                dateTo: '20/03',
                endDate: '320',
                image: 'pisces.png',
                imageCat: 'piscesCat.png',
                descript: 'something',
                attribution: 'Pisces Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'aries',
                dateFrom: '21/03',
                dateTo: '19/04',
                endDate: '419',
                image: 'aries.png',
                imageCat: 'ariesCat.png',
                descript: 'something',
                attribution: 'Aries Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'taurus',
                dateFrom: '20/04',
                dateTo: '20/05',
                endDate: '520',
                image: 'taurus.png',
                imageCat: 'taurusCat.png',
                descript: 'something',
                attribution: 'Taurus Cat by Denis Sazhin from the Noun Project'
            },
            {
                name: 'gemini',
                dateFrom: '21/05',
                dateTo: '20/06',
                endDate: '620',
                image: 'gemini.png',
                imageCat: 'geminiCat.png',
                descript: 'something',
                attribution: 'Gemini Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'cancer',
                dateFrom: '21/06',
                dateTo: '22/07',
                endDate: '722',
                image: 'cancer.png', 
                imageCat: 'cancerCat.png',
                descript: 'something',
                attribution: 'Cancer Cat by Denis Sazhin from the Noun Project',

            },
            {
                name: 'leo',
                dateFrom: '07/23',
                dateTo: '22/08',
                endDate: '822',
                image: 'leo.png',
                imageCat: 'leoCat.png',
                descript: 'something',
                attribution: 'Leo Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'virgo',
                dateFrom: '23/08',
                dateTo: '22/09',
                endDate: '922',
                image: 'virgo.png',
                imageCat: 'virgoCat.png',
                descript: 'something',
                attribution: 'Virgo Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'libra',
                dateFrom: '23/09',
                dateTo: '22/10',
                endDate: '1022',
                image: 'libra.png',
                imageCat: 'libraCat.png',
                descript: 'something',
                attribution: 'Libra Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'scorpio',
                dateFrom: '23/10',
                dateTo: '21/11',
                endDate: '1122',
                image: 'scorpio.png',
                imageCat: 'scorpioCat.png',
                descript: 'something',
                attribution: 'Scorpio Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'sagittarius',
                dateFrom: '22/11',
                dateTo: '21/12',
                endDate: '1221',
                image: 'sagittarius.png',
                imageCat: 'sagittariusCat.png',
                descript: 'something',
                attribution: 'Sagittarius Cat by Denis Sazhin from the Noun Project',
            },
            {
                name: 'capricorn',
                dateFrom: '22/12',
                dateTo: '19/01',
                endDate: '1231',
                image: 'capricorn.png',
                imageCat: 'capricornCat.png',
                descript: 'something',
                attribution: 'Capricorn Cat by Denis Sazhin from the Noun Project',
            }
        ];

    catstrology.months = 
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    // display object name, img and description 

    catstrology.displayResults = function(){    

        // capture user inputs in variables

        const userInputDay = $('#dayEntry').val();

        const userInputMonth = $('#monthEntry').val();

        // convert userInputMonth to number 
        if ($.inArray(userInputMonth, catstrology.months) !== -1);{
            const monthNum = (catstrology.months.indexOf(userInputMonth)+1);      
            
            // concat month and day inputs into a string 
            const userInput = monthNum+userInputDay;

    // compare userInput to signs array
        const result = catstrology.signs.find(sign => sign.endDate >= userInput);
        console.log(result);

        const signInfo = Object.values(result);
        const htmlToAppend = `
        <div class="imgCont">
        <img src="${signInfo[4]}" alt="astrology sign symbol">
        </div>
        <div class="signTextbox"></div>
            <h4>${signInfo[0]}</h4>
            <p>${signInfo[5]}</p>
        `;
        $('.resultsFlex').html(htmlToAppend);

        }
    };



    catstrology.events = function(){

        // Bind event listener to form submission 

        $('form').on('submit', function(e){
            e.preventDefault();

            catstrology.displayResults();

        })

        $('.resultsFlex').empty();

    };

    catstrology.init = function(){

    catstrology.events();    

    };

// document ready 
    $(function() {
        catstrology.init();

});
