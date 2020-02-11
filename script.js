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
                descript: 'something',
            },
            {
                name: 'aquarius',
                dateFrom: '20/01',
                dateTo: '18/02',
                endDate: '218',
                image: 'aquarius.png',
                descript: 'something',
            },
            {
                name: 'pisces',
                dateFrom: '19/02',
                dateTo: '20/03',
                endDate: '320',
                image: 'pisces.png',
                descript: 'something',
            },
            {
                name: 'aries',
                dateFrom: '21/03',
                dateTo: '19/04',
                endDate: '419',
                image: 'aries.png',
                descript: 'something',
            },
            {
                name: 'taurus',
                dateFrom: '20/04',
                dateTo: '20/05',
                endDate: '520',
                image: 'taurus.png',
                descript: 'something',
            },
            {
                name: 'gemini',
                dateFrom: '21/05',
                dateTo: '20/06',
                endDate: '620',
                image: 'gemini.png',
                descript: 'something',
            },
            {
                name: 'cancer',
                dateFrom: '21/06',
                dateTo: '22/07',
                endDate: '722',
                image: 'cancer.png', 
                descript: 'something',
            },
            {
                name: 'leo',
                dateFrom: '07/23',
                dateTo: '22/08',
                endDate: '822',
                image: 'leo.png',
                descript: 'something',
            },
            {
                name: 'virgo',
                dateFrom: '23/08',
                dateTo: '22/09',
                endDate: '922',
                image: 'virgo.png',
                descript: 'something',
            },
            {
                name: 'libra',
                dateFrom: '23/09',
                dateTo: '22/10',
                endDate: '1022',
                image: 'libra.png',
                descript: 'something',
            },
            {
                name: 'scorpio',
                dateFrom: '23/10',
                dateTo: '21/11',
                endDate: '1122',
                image: 'scorpio.png',
                descript: 'something',
            },
            {
                name: 'sagittarius',
                dateFrom: '22/11',
                dateTo: '21/12',
                endDate: '1221',
                image: 'sagittarius.png',
                descript: 'something',
            },
            {
                name: 'capricorn',
                dateFrom: '22/12',
                dateTo: '19/01',
                endDate: '1231',
                image: 'capricorn.png',
                descript: 'something',
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
