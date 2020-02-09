// CAtstroloy app 

// catstrology array 

$(function() {

const catstrologySigns = [
    {
        name: 'aries',
        dateFrom: '21/03',
        dateTo: '19/04',
        endDate: '0419',
        image: 'aries.png',
        descript: '',
    },
    {
        name: 'taurus',
        dateFrom: '20/04',
        dateTo: '20/05',
        endDate: '0520',
        image: 'taurus.png',
        descript: '',
    },
    {
        name: 'gemini',
        dateFrom: '21/05',
        dateTo: '20/06',
        endDate: '0620',
        image: 'gemini.png',
        descript: '',
    },
    {
        name: 'cancer',
        dateFrom: '21/06',
        dateTo: '22/07',
        endDate: '0722',
        image: 'cancer.png', 
        descript: '',
    },
    {
        name: 'leo',
        dateFrom: '07/23',
        dateTo: '22/08',
        endDate: '0822',
        image: 'leo.png',
        descript: '',
    },
    {
        name: 'virgo',
        dateFrom: '23/08',
        dateTo: '22/09',
        endDate: '0922',
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
    },
    {
        name: 'capricorn',
        dateFrom: '22/12',
        dateTo: '19/01',
        endDate: '0119',
        image: 'capricorn.png',
        descript: '',
    },
    {
        name: 'aquarius',
        dateFrom: '20/01',
        dateTo: '18/02',
        endDate: '0218',
        image: 'aquarius.png',
        descript: '',
    },
    {
        name: 'pisces',
        dateFrom: '19/02',
        dateTo: '20/03',
        endDate: '0320',
        image: 'pisces.png',
        descript: '',
    },

];

// Bind event listener to form submission event 

$('form').on('submit', function(e){
    e.preventDefault();

    // capture user input in a variable

    const userDate = $('input').val();

    // compare userDate to dates in array 

    const result = catstrologySigns.find(({name}) => name === 'pisces');

    console.log(result);

})

});


// if inputDate is > dateFrom && < dateTo


// Loop across castrology array and display object name, img and description 