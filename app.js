const images = 
[   'https://i.imgur.com/KeoqUOw.png' ,
    'https://i.imgur.com/dMUWt67.jpg' ,
    'https://i.imgur.com/JyvdXWP.png' ,
    'https://i.imgur.com/lUWVQIR.png' ,
    'https://i.imgur.com/uZJWLKm.png' ,
    'https://i.imgur.com/FszVw3V.png' ,
    'https://i.imgur.com/7uuo6Ei.png' 
];

const displayImage = () => {
    const picBut = $('<button>').addClass('randomImager').appendTo('#link-buttons').text('Change Background');
    $(picBut).on('click', () => {
        const randomImg = Math.floor(Math.random() * 7);
        const picUrl = images[randomImg];
        $('body').css('background-image', `url(${picUrl})`);
    })
    
}


function gitlink() {
    const $gitBut = $('<button>').addClass('links').attr('id', 'github').appendTo('#link-buttons').text('Github');
    $('#github').on('click', () => {
        window.location.href = 'https://github.com/';
    })
}

function linkedin() {
    const $linkBut = $('<button>').addClass('links').attr('id', 'linkedin').appendTo('#link-buttons').text('LinkedIn');
    $('#linkedin').on('click', () => {
        window.location.href = 'https://www.linkedin.com/in/kamaljit-singh-64311a1a7/';
    })
}

function projectToggle() {
    // Get all project divs
    // const projectDivs = $('.project-div');

    // projectDivs.each(function(projectDiv) {
    //     console.log(this);
    //     $(this).on('click', function() {
    //         $(this).children().children('.description').css('display', 'block');
    //     });
    // })

    $('.project-div').on('click', function() {
        $('.description').hide(); // Hide all descriptions
    
        const description = $(this).find('.description');
        description.fadeIn(); // Show the clicked description
      });
}

function changeColor() {
    const boxes = $('.project-div');

   // Add hover event listener to each box
    boxes.hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );
}

function viewResume() {
    $('#resumeBut').click(
        function () {
            $('#resume-img').toggle();
        }
    );
}

function viewResume2 () {

    $('#resumeBut').click(
        function () {
            $('#resume').addClass('clicked');
        },
        function () {
            $('#resume').removeClass('clicked');
         }
    )
}

/*
    hover over project div and change color
    button on page where home page background changes
    clicking shows the description for project div - convert to jquery
    add in resume page
    readme
*/



$(() => {
    gitlink();
    linkedin();
    projectToggle();
    displayImage();
    changeColor();
    viewResume();
});