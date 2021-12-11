$(document).ready(function() {
    $('#autoWidth1, #autoWidth2').lightSlider({
        autoWidth:true,
        loop: true,
        keyPress: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        active: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        },
       
    });
    
    var name = document.querySelector('h1');
    var movietype = document.querySelector('#type-movie');
    var moviedetails = document.querySelector('#movie-details');
    var btn = document.querySelector('#mybtn');
    var start = document.getElementById('start');
    start.focus();
    start.style.transform = 'translateY(-10px)';
    start.style.transition = 'all ease 0.2s';
    

    function dotheneedful(sibling) {
    if (sibling != null) {
    start.focus();
    start.style.transform = '';
    start.style.transition = '';
    sibling.focus();
    sibling.style.transform = 'translateY(-10px)';
    sibling.style.transition = 'all ease 0.2s';
    
    start = sibling;
    
  }
}

        document.onkeydown = checkKey;

        function checkKey(e) {
            e = e || window.event;
            if (e.keyCode == '38') {
            // up arrow
            var idx = start.cellIndex;
            var nextrow = start.parentElement.previousElementSibling;
             if (nextrow != null) {
            var sibling = nextrow.cells[idx];
            dotheneedful(sibling);
            changeData1();
        }
            } else if (e.keyCode == '40') {
            // down arrow
            var idx = start.cellIndex;
            var nextrow = start.parentElement.nextElementSibling;
            if (nextrow != null) {
            var sibling = nextrow.cells[idx];
            dotheneedful(sibling);
            changeData2();
        }
        } else if (e.keyCode == '37') {
            // left arrow
            var sibling = start.previousElementSibling;
            dotheneedful(sibling);
            changeData3();
        } else if (e.keyCode == '39') {
            // right arrow
            var sibling = start.nextElementSibling;
            dotheneedful(sibling);
            changeData4();
         }else if (e.keyCode == '13') {
            e.preventDefault();
            document.getElementById("mybtn").click();
            
        
        }
    }
    
    function changeData1() {
        name.innerText = "Sooryavanshi (2021) - Hindi";
        movietype.innerText = "2021|ACTION, DRAMA, COMEDY, ROMANCE";
        moviedetails = "Mumbai as rocked by 14 back to back blasts which changed the image of city forever Kabir Shroff managed to solve the case within two days but feels guilty that master mind Omar Hafeez and Billal eloped from the city.Omar Hafeez over the years planted many attacks in the country and formed a sleeper cell network lead by his son Riyaz Hafeez.Years later Riyaz's fake identity is traced in Jaisalmer where a team lead by DCP Veer Sooryavanshi goes to arrest him with arrest of Riyaz underworld gets shaken and Omar asks Bilal to return to India.Sooryavanshi finds from Kabir that in 1993 1000 ton RDX came in the city out which 400 ton RDX was used and 600 ton still lies no where and only person who as the idea of this is Bilal.Soorya is going to a tough ";


    }
    function changeData2() {
        name.innerText = "Spider-Man: Across the Spider-Verse - Part One (2022)";
        movietype.innerText = "2022|ACTION, ROMANCE";
        moviedetails = "The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun. Tensions between these city-states boil over with the creation of hextech a way for any person to control magical energy in Piltover, and in Zaun, a new drug called shimmer transforms humans into monsters. The rivalry between the cities splits families and friends as Arcane brings life to the relationships that shape some of League of Legends' famous champions including Vi, Jinx, Caitlyn, Jayce and Viktor.";


    }
    function changeData3() {
        name.innerText = "Spider-Man: Across the Spider-Verse - Part One (2022)";
        movietype.innerText = "2022|ACTION, ROMANCE";
        moviedetails = "The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun. Tensions between these city-states boil over with the creation of hextech a way for any person to control magical energy in Piltover, and in Zaun, a new drug called shimmer transforms humans into monsters. The rivalry between the cities splits families and friends as Arcane brings life to the relationships that shape some of League of Legends' famous champions including Vi, Jinx, Caitlyn, Jayce and Viktor.";


    }
    function changeData4() {
        name.innerText = "Squid Game - Part One (2021)";
        movietype.innerText = "2021|ACTION, ROMANCE";
        moviedetails = "The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun. Tensions between these city-states boil over with the creation of hextech a way for any person to control magical energy in Piltover, and in Zaun, a new drug called shimmer transforms humans into monsters. The rivalry between the cities splits families and friends as Arcane brings life to the relationships that shape some of League of Legends' famous champions including Vi, Jinx, Caitlyn, Jayce and Viktor.";


    }
  
   

    

      
  });