$(window).on("scroll",function(){
    let position=$(this).scrollTop();

    
    if(position > 700){
        $("#scrollToTop").css("opacity", 1)
    }
    if(position < 700){
        $("#scrollToTop").css("opacity", 0)
    }

    // quand on scroll on execute la fonction
 window.onscroll = function () { myFunction() };

 // selectionner le header du html
 var header = document.getElementById("myHeader");

 // séléctionner la bar de nav en haut
 var sticky = header.offsetTop;

 //Ajoutez la classe sticky à l'en-tête lorsque l'on scrool et la supprimer quand on reviens en haut
 function myFunction() {
   if (window.pageYOffset > sticky) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 }

})

$(".prev").on("click",function(){    //premiére fonction est pour aller à gauche
    var idSlide=$(".active").attr("id") // On crée une variable pour afficher l'identifiant de la slide qui à comme class active
    console.log(idSlide)       //On affiche sur la console l'identifiant de la slide qui à comme class active

    if(idSlide==="1"){          //si sur la premiere page l'uttilisateur clique sur la flèche de gauche il est amener à la troisièmes page ainsi de suite pour les trois autres
        $("#1").removeClass("active")
        $("#2").removeClass("active")
        $("#3").removeClass("active")
        $("#4").addClass("active")// pour nous amener à la troisième page on enlève la classe active au deux autre et on l'ajoute à la page 4
    }else if(idSlide==="2"){
        $("#1").addClass("active")
        $("#2").removeClass("active")
        $("#3").removeClass("active")
        $("#4").removeClass("active")
    }else if(idSlide==="3"){
        $("#1").removeClass("active")
        $("#2").addClass("active")
        $("#3").removeClass("active")
        $("#4").removeClass("active")
    }else if(idSlide==="4"){
        $("#1").removeClass("active")
        $("#2").removeClass("active")
        $("#3").addClass("active")
        $("#4").removeClass("active")
    }

})
$(".next").on("click",function(){    // deuxièmes fonction est pour aller à droite 
    var idSlide=$(".active").attr("id")// On crée une variable pour afficher l'identifiant de la slide qui à comme class active
    console.log(idSlide)      //On affiche sur la console l'identifiant de la slide qui à comme class active

    if(idSlide==="1"){              // si sur la premiere page l'uttilisateur clique sur la flèche de droit il avance à la deuxième page ainsi de suite pour les trois autres
        $("#1").removeClass("active")
        $("#2").addClass("active")
        $("#3").removeClass("active")
        $("#4").removeClass("active") // pour nous amener à la deuxième page on enlève la classe active au deux autre et on l'ajoute à la page 2
    }else if(idSlide==="2"){
        $("#1").removeClass("active")
        $("#2").removeClass("active")
        $("#3").addClass("active")
        $("#4").removeClass("active")
    }else if(idSlide==="3"){
        $("#1").removeClass("active")
        $("#2").removeClass("active")
        $("#3").removeClass("active")
        $("#4").addClass("active")
    }else if(idSlide==="4"){
        $("#1").addClass("active")
        $("#2").removeClass("active")
        $("#3").removeClass("active")
        $("#4").removeClass("active")
    }

})

$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
 $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('scale-anm');
  $("#portfolio").fadeTo(300, 1);
}, 300); 
    
});
});



var map;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
icon: iconBase + 'parking_lot_maps.png'
});

function initMap() {
    var uluru = {lat: 44.8427497, lng: -0.5626916};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru
    });
  
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">ESD Bordeaux</h1>'+
        '<div id="bodyContent">'+
        '<p><b>école supérieure du digital</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';
  
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var image ={
        url: 'logo/icon.png',
        position: uluru ,
        map:map,
    }
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: image
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }   
