const GoogleDistanceApi = require('google-distance-api');
const options = {
  key: 'AIzaSyCIHgIFR3jiqBY2XiWlgqqDn4EjPWcTrrA',
  origins: ['Irvine, CA, USA'],
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
var methods = {
  distance: function(location) {
    const data  = GoogleDistanceApi.distance(options, (err, data) => {
        options.origins[0] = location;
        if(err) {
            return console.log(err);
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

        return miles;

    });

}
};

exports.data = methods;
