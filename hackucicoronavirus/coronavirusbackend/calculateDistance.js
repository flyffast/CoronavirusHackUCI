const GoogleDistanceApi = require('google-distance-api');
const options = {
  key: 'AIzaSyCIHgIFR3jiqBY2XiWlgqqDn4EjPWcTrrA',
  origins: ['Error, CA, USA'],
  //origins: ['51.5033640,-0.1276250'],
  destinations: ['New York, NY, USA']
}
/* 1/28/20
Several people have been infected with the Wuhan coronavirus in the US -- 
including a man in his 30s in Washington state; a Chicago woman in her 60s; a
 man in his 50s in Orange County, California, a patient in Los Angeles County; 
 and a fifth in Arizona. All had recently traveled to Wuhan, the epicenter of the outbreak*/ 
options.destinations[0] = 'Orange County, CA, USA'; //https://www.cnn.com/2020/01/26/us/coronavirus-orange-county/index.html
options.destinations[1] = 'Los Angeles, CA, USA';
options.destinations[2] = 'Chicago, IL, USA';
options.destinations[3] = 'Tempe, AZ, USA'; //https://www.azcentral.com/story/news/local/arizona-health/2020/01/31/coronavirus-arizona-chinese-students-asu-wuhan-sars-disease-researchers/4617839002/
options.destinations[4] = 'Snohomish County, WA, USA';//https://www.spokesman.com/stories/2020/jan/31/washington-state-coronavirus-patient-treated-with-/
options.destinations[5] = 'Santa Clara County, CA, USA';//https://www.latimes.com/california/story/2020-01-31/all-195-americans-who-fled-coronavirus-in-china-under-quarantine-at-california-base

let outBreakCount = 6;
let calcCity ="";

var methods = {
  distance: function(location, twiml, res) {


    calcCity = location;
      options.origins[0] = location.slice(0, location.length);
    

    const data  = GoogleDistanceApi.distance(options, (err, data) => {
        
        if(err) {
          if(calcCity[1] != '0' &&
          calcCity[1] != '1' &&
          calcCity[1] != '2' &&
          calcCity[1] != '3' &&
          calcCity[1] != '4' &&
          calcCity[1].toUpperCase != 'T'&&
          calcCity[2].toUpperCase != 'W'&&
          calcCity[3].toUpperCase != 'I'&&
          calcCity[4].toUpperCase != 'L'&&
          calcCity[5].toUpperCase != 'L'&&
          calcCity[6].toUpperCase != 'I'&&
          calcCity[7].toUpperCase != 'O')
          {
            options.origins[0] = 'Error';
            //return console.log(err);
          }
            
        }
        
        let miles = [3];
        let blah= "";
      
        //console.log(data);
        for(i = 0; i < outBreakCount; i++)
        {
          //blah will contain integer of distance after converting string
          blah = data[i].distance;
          blah = blah.slice(0, blah.length-3);
          
          blah = blah.replace(/,/g, ""); //remove commas in numbers
          parseInt(blah, 10);
        
          miles[i] = 0;

          miles[i]=blah * 0.621371

          miles[i] = Math.round(miles[i]*100)/100.0;

        }
        var smallest = 1000000;
        let indexCitySmallest =0;
        //console.log(miles[0]);
        for(i = 0; i <outBreakCount; i++)
        {
          if(miles[i] < smallest)
          {
            smallest = miles[i];
            indexCitySmallest = i;
        
          }
          console.log(miles[i]);
        }
        test = smallest;
        console.log(options.origins[0]);
        console.log(smallest);
        console.log(options.destinations[indexCitySmallest]);

        if(options.origins[0][0] == 'E'&&
        options.origins[0][1] == 'r'&&
        options.origins[0][2] == 'r'&&
        options.origins[0][3] == 'o'&&
        options.origins[0][4] == 'r')
        {
          twiml.message("Error in processing, please try again...");
        }
        else
        {
        if(calcCity[0] == '#' && calcCity.length > 1)
        {
          if(calcCity[1] == '0') //not ready yet
          {
            twiml.message("List of options: \"#1\" for number Corona Virus Cases in US;" +
                                            " \"#2\" for link to CDC info;" + 
                                            " \"#3\" for link to WHO Twitter;" +
                                            " \"#4\" - \"#6\" for a surprise;");
          }
          else if(calcCity[1] == '1') //not ready yet
          {
            twiml.message(outBreakCount +" Total Cases of Corona Virus");
          }
          else if(calcCity[1] == '2') //not ready yet
          {
            twiml.message("Link to CDC: https://www.cdc.gov/coronavirus/2019-ncov/summary.html");
          }
          else if(calcCity[1] == '3') //not ready yet
          {
            twiml.message("Link to WHO Twitter: https://twitter.com/WHO?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
          }
          else if(calcCity[1] == '4') //not ready yet
          {
            twiml.message("/\\︵-︵/\\");
            twiml.message("|(◉)(◉)|");
            twiml.message("\\ ︶V︶ /");
            twiml.message("/↺↺↺↺\\");
            twiml.message("↺↺↺↺↺|");
            twiml.message("\\↺↺↺↺/");
            twiml.message("¯¯/\\¯/\\¯");
          }
          else if(calcCity[1] == '5') //not ready yet
          {
            twiml.message("▬▬▬.◙.▬▬▬");
            twiml.message(" ═▂▄▄▓▄▄▂");
            twiml.message("◢◤ █▀▀████▄▄▄▄◢◤");
            twiml.message("█▄▂█ █▄███▀▀▀▀▀▀▀╬");
            twiml.message("◥█████◤");
            twiml.message("══╩══╩═");
            twiml.message("╬═╬");
            twiml.message("╬═╬");
            twiml.message("╬═╬");
            twiml.message("╬═╬");
            twiml.message("╬═╬");
            twiml.message("╬═╬ ☻/");
            twiml.message("╬═╬/▌");
            twiml.message("╬═╬/");
          }
          else if(calcCity[1] == '6') //not ready yet
          {
            twiml.message("♜♞♝♚♛♝♞♜");
            twiml.message("♟♟♟♟♟♟♟♟");
            twiml.message("▓░▓░▓░▓░▓░▓░");
            twiml.message("░▓░▓░▓░▓░▓░▓");
            twiml.message("▓░▓░▓░▓░▓░▓░");
            twiml.message("░▓░▓░▓░▓░▓░▓");
            twiml.message("♙♙♙♙♙♙♙♙");
            twiml.message("♖♘♗♔♕♗♘♖");

          }
          else if(calcCity[1] == '7') //not ready yet
          {
            twiml.message("┊ ┊ ┊ ┊");
            twiml.message("┊ ┊ ┊ ✯");
            twiml.message("┊ ┊ ★");
            twiml.message("┊ ✯");
            twiml.message("★");
            twiml.message("Please Sponsor Us Twilio ;)");

          }
          else if(calcCity[1] == '8') //not ready yet
          {
            twiml.message("▒▒▒▒████████▒▒▒▒");
            twiml.message("▒██▒▒▒▒▒▒▒▒▒▒██▒");
            twiml.message("██▒▒██▒▒▒▒██▒▒██");
            twiml.message("██▒▒▒▒▒▒▒▒▒▒▒▒██");
            twiml.message("██▒▒██▒▒▒▒██▒▒██");
            twiml.message("▒██▒▒▒▒▒▒▒▒▒▒██▒");
            twiml.message("▒▒▒▒████████▒▒▒▒");

          }
          else{
            if(smallest < 15.0)
            {
              twiml.message( location.slice(1, location.length) + " is less than 15 miles away from the Corona Virus which is at: " 
                          + options.destinations[indexCitySmallest]  + ". Use \"#0\" to see more tools"/*messages*/);
            }
            else{
            twiml.message("The closest Corona Virus to " + location.slice(1, location.length) + " is at " + options.destinations[indexCitySmallest]
                              + " which is " + test + " miles away." + " Use \"#0\" to see more tools"/*messages*/);
            }
          }
        }
        else{
          if(smallest < 15.0)
          {
            twiml.message("You are less than 15 miles away from the Corona Virus which is at: " 
                        + options.destinations[indexCitySmallest] + 
                        " (This is according to your phone area code, accuracy may vary) "+
                         " If you want to specify a city(USA only), type using the format \"#cityname, State\" example: #Dallas, TX" + ". Use \"#0\" to see more tools"/*messages*/);
          }
          else{
          twiml.message("The closest Corona Virus is at " + options.destinations[indexCitySmallest]
                            + " which is " + test + 
                            " miles away (This is according to your phone area code, accuracy may vary)" +
                            " If you want to specify a city (USA only), type using the format \"#cityname, State\" ex: #Dallas, TX" + + ". Use \"#0\" to see more tools"/*messages*/);
          }
        }
      }
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());

        return smallest;


    });
    
    
    return data;
}
};

exports.data = methods;
