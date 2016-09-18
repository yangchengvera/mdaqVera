var tradeWindows = [
    {
        "client": "Client A",
        "windows": [
         {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
        {
             "skip": 2,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         }
        ]
    },
    
    {
        "client": "Client B",
        "windows": [
         {
             "skip": 2,
             "start_time": 7,
             "end_time": 14
         },
        {
             "skip": 1,
             "start_time": 7,
             "end_time": 14
         },
            {
             "skip": 0,
             "start_time": 7,
             "end_time": 14
         },
            {
             "skip": 0,
             "start_time": 7,
             "end_time": 14
         }
        ]
    },
    {
        "client": "Client C",
        "windows": [
         {
             "skip": 0,
             "start_time": 10,
             "end_time": 15
         },
        {
             "skip": 0,
             "start_time": 10,
             "end_time": 15
         },
            {
             "skip": 4,
             "start_time": 10,
             "end_time": 15
         },
            {
             "skip": 0,
             "start_time": 10,
             "end_time": 15
         }
        ]
    },
    {
        "client": "Client D",
        "windows": [
         {
             "skip": 0,
             "start_time": 4,
             "end_time": 10
         },
        {
             "skip": 6,
             "start_time": 4,
             "end_time": 10
         },
            {
             "skip": 0,
             "start_time": 4,
             "end_time": 10
         },
            {
             "skip": 0,
             "start_time": 4,
             "end_time": 10
         }
        ]
    },
    {
        "client": "Client E",
        "windows": [
         {
             "skip": 3,
             "start_time": 9,
             "end_time": 18
         },
        {
             "skip": 2,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 2,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         }
        ]
    },
    {
        "client": "Client F",
        "windows": [
         {
             "skip": 4,
             "start_time": 9,
             "end_time": 18
         },
        {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         }
        ]
    },
    {
        "client": "Client G",
        "windows": [
         {
             "skip": 4,
             "start_time": 9,
             "end_time": 18
         },
        {
             "skip": 4,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 6,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         }
        ]
    },
    {
        "client": "Client H",
        "windows": [
         {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
        {
             "skip": 2,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         }
        ]
    },
    {
        "client": "Client I",
        "windows": [
         {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
        {
             "skip": 2,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         }
        ]
    },
    {
        "client": "Client J",
        "windows": [
         {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
        {
             "skip": 2,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         },
            {
             "skip": 0,
             "start_time": 9,
             "end_time": 18
         }
        ]
    }
]

var currencyH = [
    {
        "month": 8,
        "date": 16
    }
]

var countryH = [
    {
        "month": 8,
        "date": 20
    }
]

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];


function daysInMonth(month,year) {
    return new Date(year, month+1, 0).getDate();
}

var nowDate = new Date();

var ch = nowDate.getHours();
var cm = nowDate.getMinutes();
    
var cleft = ch * 20 + (cm / 60 * 20);

function showHideTimeBar(){
    if ($('.date-day-list .date-day:first-child()').hasClass('active')) {
        $('.chart-main .client-list').addClass('show-time-bar');
    } else {
        $('.chart-main .client-list').removeClass('show-time-bar');
    }
}


$(document).ready(function(){
    
    $('.calendardatepicker').datetimepicker({
        format: 'MMM D, YYYY',
        date: new Date()
    });
    
    $('head').append($('<style>.chart-main .client-list.show-time-bar:after {visibility: visible; left: '+ cleft + 'px; }</style>'));
        
    
   for (i = 0; i < tradeWindows.length; i++) {
       var ctw = tradeWindows[i];

   } 
    
    // generate months
    
    for (i=0; i< 4; i++ ){
        var nd = nowDate.getMonth()+i;
        var monthName = monthNames[nd];
        var year = nowDate.getFullYear();
        $('.chart-main .header-year').append('<div class="month-year" data-month="'+ nd +'" data-year="'+ year +'"><div class="month-year-text">'+ monthName +' '+ year + '</div><div class="date-day-list"></div></div>');
        

        if (i==0) {
            var todayDate = nowDate.getDate();

            for (j = todayDate; j <= daysInMonth(nd, year); j++) {
                $('.month-year[data-month="'+ nd +'"] .date-day-list').append('<div class="date-day"><div class="date-day-text"><div class="date">'+ j +'</div></div><div class="time-list"></div></div>');
            }
        } else {
            for (j = 1; j <= daysInMonth(nd, year); j++) {
                $('.month-year[data-month="'+ nd +'"] .date-day-list').append('<div class="date-day"><div class="date-day-text"><div class="date">'+ j +'</div></div><div class="time-list"></div></div>');
            }
        }
        
    }
    
    // Setup time of day
    $('.month-year:first-child() .date-day:first-child()').addClass('active');
    $('.time-list').append('<div class="time"><div class="time-text">0:00</div></div><div class="time"><div class="time-text">6:00</div></div><div class="time"><div class="time-text">12:00</div></div><div class="time"><div class="time-text">18:00</div></div><div class="time"><div class="time-text">24:00</div></div>');
    
    // Setup chart containers
    
    for (i = 0; i < tradeWindows.length; i++) {
        
        $('.chart-main .client-list').append('<div class="client-charts"></div>');
        
        
    }
    
    var days = $('.date-day').length;
    
    for(j = 0; j < days; j++) {
        $('.client-charts').append('<div class="trading-window-list"></div>');
    }
    
    $('.trading-window-list:first-child()').addClass('active');
    
    
    // Add trading windows
    
    for(i=0; i<tradeWindows.length; i++) {
        var window = tradeWindows[i];
        var cname = window.client;
        $('.chart-left .client-list').append('<div class="client-name"><span>'+ cname +'</span></div>');
        
        var cwindows = window.windows;
        
        var windowTotalLength = 0;
        
        for(j=0; j<cwindows.length; j++) {
            windowTotalLength += cwindows[j].skip + 1;
        }
        
        var totalSkip = 0;
        
        for(j=0; j<cwindows.length; j++) {
            totalSkip += cwindows[j].skip + 1;
            
            var st = cwindows[j].start_time;
            var et = cwindows[j].end_time;
            
            var marginLeft = st * 20;
            var width = (et - st) * 20;
            
            $('.chart-main .client-charts:nth-child('+ (i+1) +') .trading-window-list:nth-child('+ windowTotalLength +'n+'+ totalSkip +')').append('<div class="trading-window-day"></div>');
            $('.chart-main .client-charts:nth-child('+ (i+1) +') .trading-window-list:nth-child('+ windowTotalLength +'n+'+ totalSkip +')').append('<div class="trading-window-time" style="margin-left: '+ marginLeft +'px; width:'+ width +'px"><div class="start-time">'+ st +':00</div><div class="end-time">'+ et +':00</div></div>');
        }
    }    
    
    $('.client-name').on('click', function(){
        
        var row = $('.client-name').index($(this));
        console.log(row);
        $('.client-name, .client-charts').removeClass('active');
        $('.client-name:nth-child('+ (row+1) +')').addClass('active');
        $('.client-charts:nth-child('+ (row+1) +')').addClass('active');
    });
    
    $('.date-day').on('click', function(){
       
        var dIndex = $('.date-day').index($(this));
        
        $('.date-day').removeClass('active');
        $(this).addClass('active');
        
        $('.trading-window-list').removeClass('active');
        $('.client-charts .trading-window-list:nth-child('+ (dIndex+1) +')').addClass('active');
        showHideTimeBar();
                
    });
    
    showHideTimeBar();


});


