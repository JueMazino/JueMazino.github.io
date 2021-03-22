
$.getJSON("https://www.dnd5eapi.co/api/classes/ranger/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    


    $(".name").append(name);
    $(".proficiencies").append(proficiencies);





    }

);