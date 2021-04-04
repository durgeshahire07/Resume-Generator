$('document').ready(function(){
    $('#profile').click()
    $('#profile').click(function(){
        console.log("h")
        $('#education').css("color",'black');
        $('#profile').css("color","red");
        $('#work').css("color",'black');
        $('#skill').css("color",'black');
        $('#project').css("color",'black');
        $('#award').css("color",'black');
        $('#personal-info').show();
        $('#education-info').hide();
        $('#work-info').hide();
        $('#skill-info').hide();
        $('#project-info').hide();
        $('#award-info').hide();
    })

    $('#education').click(function(){
        $('#education').css("color",'red');
        $('#profile').css("color","black");
        $('#work').css("color",'black');
        $('#skill').css("color",'black');
        $('#project').css("color",'black');
        $('#award').css("color",'black');
        $('#personal-info').hide();
        $('#education-info').show();
        $('#work-info').hide();
        $('#skill-info').hide();
        $('#project-info').hide();
        $('#award-info').hide();
    })

    $('#work').click(function(){
        $('#education').css("color",'black');
        $('#profile').css("color","black");
        $('#work').css("color",'red');
        $('#skill').css("color",'black');
        $('#project').css("color",'black');
        $('#award').css("color",'black');
        $('#work-info').show();
        $('#education-info').hide();
        $('#personal-info').hide();
        $('#skill-info').hide();
        $('#project-info').hide();
        $('#award-info').hide();
    })

    $('#skill').click(function(){
        $('#education').css("color",'black');
        $('#profile').css("color","black");
        $('#work').css("color",'black');
        $('#skill').css("color",'red');
        $('#project').css("color",'black');
        $('#award').css("color",'black');
        $('#skill-info').show();
        $('#education-info').hide();
        $('#personal-info').hide();
        $('#work-info').hide();
        $('#project-info').hide();
        $('#award-info').hide();
        
    })

    $('#project').click(function(){
        $('#education').css("color",'black');
        $('#profile').css("color","black");
        $('#work').css("color",'black');
        $('#skill').css("color",'black');
        $('#project').css("color",'red');
        $('#award').css("color",'black');
        $('#project-info').show();
        $('#education-info').hide();
        $('#personal-info').hide();
        $('#work-info').hide();
        $('#skill-info').hide();
        $('#award-info').hide();
    })

    $('#award').click(function(){
        $('#education').css("color",'black');
        $('#profile').css("color","black");
        $('#work').css("color",'black');
        $('#skill').css("color",'black');
        $('#project').css("color",'black');
        $('#award').css("color",'red');
        $('#award-info').show();
        $('#education-info').hide();
        $('#personal-info').hide();
        $('#work-info').hide();
        $('#project-info').hide();
        $('#skill-info').hide();
    })

    


});