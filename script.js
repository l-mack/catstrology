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
                descript: '',
            },
            {
                name: 'aquarius',
                dateFrom: '20/01',
                dateTo: '18/02',
                endDate: '218',
                image: 'aquarius.png',
                descript: '',
            },
            {
                name: 'pisces',
                dateFrom: '19/02',
                dateTo: '20/03',
                endDate: '320',
                image: 'pisces.png',
                descript: '',
            },
            {
                name: 'aries',
                dateFrom: '21/03',
                dateTo: '19/04',
                endDate: '419',
                image: 'aries.png',
                descript: '',
            },
            {
                name: 'taurus',
                dateFrom: '20/04',
                dateTo: '20/05',
                endDate: '520',
                image: 'taurus.png',
                descript: '',
            },
            {
                name: 'gemini',
                dateFrom: '21/05',
                dateTo: '20/06',
                endDate: '620',
                image: 'gemini.png',
                descript: '',
            },
            {
                name: 'cancer',
                dateFrom: '21/06',
                dateTo: '22/07',
                endDate: '722',
                image: 'cancer.png', 
                descript: '',
            },
            {
                name: 'leo',
                dateFrom: '07/23',
                dateTo: '22/08',
                endDate: '822',
                image: 'leo.png',
                descript: '',
            },
            {
                name: 'virgo',
                dateFrom: '23/08',
                dateTo: '22/09',
                endDate: '922',
                image: 'virgo.png',
                descript: '',
            },
            {
                name: 'libra',
                dateFrom: '23/09',
                dateTo: '22/10',
                endDate: '1022',
                image: 'libra.png',
                descript: '',
            },
            {
                name: 'scorpio',
                dateFrom: '23/10',
                dateTo: '21/11',
                endDate: '1122',
                image: 'scorpio.png',
                descript: '',
            },
            {
                name: 'sagittarius',
                dateFrom: '22/11',
                dateTo: '21/12',
                endDate: '1221',
                image: 'sagittarius.png',
                descript: '',
            },
            {
                name: 'capricorn',
                dateFrom: '22/12',
                dateTo: '19/01',
                endDate: '1231',
                image: 'capricorn.png',
                descript: '',
            }
        ];

    catstrology.months = 
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    catstrology.events = function(){

        // Bind event listener to form submission event 

        $('form').on('submit', function(e){
            e.preventDefault();

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

                // console.log(result);
            }

        })
    };

// display object name, img and description 


    catstrology.init = function(){

    catstrology.events();    

    };

    $(function() {
        catstrology.init();

});


