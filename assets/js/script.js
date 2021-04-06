
$.getJSON("https://www.dnd5eapi.co/api/classes/ranger/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".nameranger").append(name);
    $(".proficiencies").append(proficiencies);


    }

);


$.getJSON("https://www.dnd5eapi.co/api/classes/bard/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namebard").append(name);
    $(".proficiencies").append(proficiencies);


    }

);


$.getJSON("https://www.dnd5eapi.co/api/classes/barbarian/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namebarbarian").append(name);
    $(".proficiencies").append(proficiencies);


    }

);

$.getJSON("https://www.dnd5eapi.co/api/classes/cleric/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namecleric").append(name);
    $(".proficiencies").append(proficiencies);


    }

);


$.getJSON("https://www.dnd5eapi.co/api/classes/druid/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namedruid").append(name);
    $(".proficiencies").append(proficiencies);


    }

);

$.getJSON("https://www.dnd5eapi.co/api/classes/fighter/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namefighter").append(name);
    $(".proficiencies").append(proficiencies);


    }

);

$.getJSON("https://www.dnd5eapi.co/api/classes/monk/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namemonk").append(name);
    $(".proficiencies").append(proficiencies);


    }

);

$.getJSON("https://www.dnd5eapi.co/api/classes/paladin/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namepaladin").append(name);
    $(".proficiencies").append(proficiencies);


    }

);
$.getJSON("https://www.dnd5eapi.co/api/classes/rogue/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namerogue").append(name);
    $(".proficiencies").append(proficiencies);


    }

);
$.getJSON("https://www.dnd5eapi.co/api/classes/sorcerer/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namesorcerer").append(name);
    $(".proficiencies").append(proficiencies);


    }

);
$.getJSON("https://www.dnd5eapi.co/api/classes/warlock/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namewarlock").append(name);
    $(".proficiencies").append(proficiencies);


    }

);

$.getJSON("https://www.dnd5eapi.co/api/classes/wizard/", function(data){

    console.log(data);

    var name = data.name;

    var proficiencies = data.proficiencies[0].name;
    

    $(".namewizard").append(name);
    $(".proficiencies").append(proficiencies);


    }

);







