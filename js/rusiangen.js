// Giovanni Zambotti - g.zambotti@gmail.com -- 2/24/2015

// HusbandPla LIKE 'R%'  OR WifePlace LIKE 'R%'
//'use strict';

var husbandArray =  ["Adalbert of Babenberg", "Almos of Hungary", "Andrej Volodimerič", "Andrew of Hungary", 
  "Baškord of the Polovcians", "Béla I of Hungary", "Béla II of Hungary", "Bolesław \"the Tall\" of Poland", 
  "Bolesław II of Poland", "Bolesław III of Poland", "Bolesław IV of Poland", "Boris Kolomanovič", "Brjačeslav Davidič", 
  "Casimir \"the Restorer\" of Poland", "Cuno of Beichlingen", "Edward \"the Exile\" of England", "Eric Emune of Denmark", 
  "Erling Skaki of Norway", "Géza II of Hungary", "Glěb Jurevič", "Glěb Rostislavič", "Glěb Vseslavič", 
  "Gunther Count of Keffenberg", "Harald \"Hardrada\" Sigurtharsson of Norway", "Henry I Capet", 
  "Henry III \"the Long\" of Stade", "Henry IV of the German Empire", "Hugh of Vermandois", 
  "Iakus of Miechów", "Izjaslav Jaroslavič", "Izjaslav M′stislavič", "Jaropolk Izjaslavič", "Jaropolk Svjatoslavič", 
  "Jaropolk Volodimerič", "Jaroslav \"Mudryj\" Volodimerič", "Jaroslav Svjatopolčič", "Jaroslav Volodimerkovič", 
  "Jurij \"Dolgorukij\" Volodimerič", "Jurij Jaroslavič", "Knud Lavard Ericsson", "Koloman of Hungary", 
  "Ladislaus of Hungary", "Leo Diogenes of Byzantium", "M′stislav Harald Volodimerič", 
  "M′stislav Jurevič", "Magnus \"the Blind\" Sigurdsson of Norway", 
  "Malcolm III of Scotland", "Mieszko II of Poland", "Mieszko of Poland", "N. N. of Byzantium", "Olav Sveinsson", 
  "Oleg Svjatoslavič", "Philip of France", "Piotr Wlostowic", 
  "Raoul de Crepy", "Rogvolod Borisič", "Roman Rostislavič", "Roman Volodimerič", "Rostislav Glěbovič", 
  "Rostislav Volodimerič", "Salomon of Hungary", "Sigurd \"the Crusader\" of Norway", "Soběslav of Bohemia", 
  "Stig Whiteskin of Denmark", "Svjatopolk M′stislavič", "Svjatoslav Jaroslavič", "Svjatoslav Ol′govič", 
  "Svjatoslav Volodimerič", "Svjatoslav Vsevolodič", "Volodimer Davidič", "Volodimer Monomax Vsevolodič", 
  "Volodimer Svjatoslavič", "Volodimer Vsevolodič", "Volodimerko Volodarič", "Vratislav II of Bohemia", 
  "Vratislav of Bohemia", "Vsevolod \"Big Nest\" Jurevič", 
  "Vsevolod Jaroslavič", "Vsevolod Ol′govič", "Vsevolod Svjatoslavič", "Vsevolodko Davidič", "Władysław Herman", "Władysław II of Poland"];
  
  var placesArray = ["Bamberg","Bilhorod","Bryansk","Busk","Chernihiv","Constantinople","Cracow","Denmark","Dorohobuzh","Edinburgh","Esztergom",
  "Gniezno","Halych","Kyiv","London","Mainz","Minsk","Norway","Novgorod","Novhorod-Sivers\'kyi",
  "Paris","Pereyaslav","Polack","Polovtsy","Przemyśl","Ryazan","Schleswig","Smolensk","Turov","Vermandois","Vladimir-Suzdal","Volodymyr"];

dojo.ready(function () {
  // to do -- try to create the pulldown automaticaly right now the array has to be updated if data changes 
  
  /*
  "Abkhazia","Amsterdam","Bamberg","Bilhorod","Bryansk","Bulgar","Busk","Chernihiv","Constantinople","Cracow",
  "Denmark","Dorohobuzh","Edinburgh","Esztergom","Gniezno","Halych","Kyiv","London","Mainz","Minsk","Norway","Novgorod",
  "Novhorod-Sivers\'kyi","Ossetia","Paris","Pereyaslav","Polack","Polovtsy","Przemyśl","Raska","Ryazan","Schleswig","Smolensk",
  "Stockholm","Turov","Vermandois","Vladimir-Suzdal","Volodymyr","Vyshhorod"
  */
  $.each(husbandArray, function(val, text) {
    //$('select option:contains("Adalbert of Babenberg")').prop('selected',true);
    $('#dropDownCountry').append( $('<option></option>').val(text).html(text));
  });

  $.each(placesArray, function(val, text) {
    //$('select option:contains("Abkhazia")').prop('selected',true);
    $('#dropDownPlace').append( $('<option></option>').val(text).html(text));
  });
  
  $('.dropdown-toggle').dropdown();
  $('.selectpicker').selectpicker();
  $("#hSlider").slider({});
  //var slider = new Slider('#ex2', {});
  

  $("#about").click(function(e){
    $("#aboutModal").modal("show"); 
    $("body").css("margin-right","0px");
    $(".navbar").css("margin-right","0px");          
  });
});

var map, featureLayer;
var basemapURL = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genbasemap/MapServer";
var husbandwifeLayer = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genhusbandwife/MapServer/0";

require(["esri/map", "application/bootstrapmap", "esri/layers/FeatureLayer", "esri/dijit/Legend", "esri/graphic", 
  "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/UniqueValueRenderer",
  "esri/layers/ArcGISTiledMapServiceLayer", "esri/geometry/Point", "dojo/on", "dojo/domReady!"], 
  function(Map, BootstrapMap, FeatureLayer, Legend, Graphic, SimpleLineSymbol, SimpleFillSymbol, UniqueValueRenderer, ArcGISTiledMapServiceLayer, Point, on) {   
    
    map = BootstrapMap.create("mapDiv",{center: [25, 53.4],zoom: 5});        
    var basemap = new ArcGISTiledMapServiceLayer(basemapURL);    
    dojo.connect(map, "onLoad", initOperationalLayersFirst);
    dojo.connect(map, 'onZoomEnd', function() {      
      var maxOffset = calcOffset();
      featureLayer.setMaxAllowableOffset(maxOffset);      
    });
    
    
    
    map.addLayer(basemap);

    function calcOffset() {return (map.extent.getWidth() / map.width);} 

    function initOperationalLayersFirst() {
        var sls = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SHORTDOT,new esri.Color([80,80,80]), 2.5);
        var renderer = new UniqueValueRenderer(sls, "HusbandNam");
        featureLayer = new FeatureLayer(husbandwifeLayer, {
          mode: FeatureLayer.MODE_SNAPSHOT,
          maxAllowableOffset: calcOffset(),
          outFields: ["*"],
          supportsAdvancedQueries: true
        });      
        
        featureLayer.setRenderer(renderer);      
        featureLayer.setOpacity(.9);        
        map.addLayer(featureLayer);
        // to do improve the click tollerance
        featureLayer.on("click", function(evt){        
          $('select').val(evt.graphic.attributes.HusbandNam);
          $('.selectpicker').selectpicker('refresh');
          husbandSelection();       
        });
        /*        
        // create a legend    
        var legendDijit = new Legend({
          map: map,
          layerInfos: [{
            "defaultSymbol": false,
            "layer": featureLayer,
            "title": " "
              }]
            }, "legendDiv");
        legendDijit.startup();
        */    
    }
    
    // slider update data and menu once it stops
    $('#hSlider').slider().on('slideStop', function(evt){      
      hSlideQuery();
      var newHusbandArray = husbandArray;
      var newPlacesArray = placesArray;
      //console.log(newHusbandArray) 
      featureLayer.on("UpdateEnd", function(){
          var queryLayer = featureLayer.toJson();                   
          for (var i = queryLayer.featureSet.features.length - 1; i >= 0; i--) {            
            console.log(queryLayer.featureSet.features[i].attributes.HusbandPla)
            newHusbandArray = $.grep(newHusbandArray, function(value) {
              return value != queryLayer.featureSet.features[i].attributes.HusbandNam;
            });
            newPlacesArray = $.grep(newPlacesArray, function(value) {
              return value != queryLayer.featureSet.features[i].attributes.HusbandPla;
            });            
          };          
          for (var i = newHusbandArray.length - 1; i >= 0; i--) {            
            $('#dropDownCountry').children('option[value="'+ newHusbandArray[i] +'"]').hide();            
          };
          for (var i = newPlacesArray.length - 1; i >= 0; i--) {            
            $('#dropDownPlace').children('option[value="'+ newPlacesArray[i] +'"]').hide();            
          };
          
          $('.selectpicker').selectpicker('refresh')
        });      
    }); 
    
    function hSlideQuery(){ 
      updateArray();
      var minY = document.getElementsByClassName('tooltip-inner')[0].childNodes[0].nodeValue.split(" : ")[0];
      var maxY = document.getElementsByClassName('tooltip-inner')[0].childNodes[0].nodeValue.split(" : ")[1];
      //$("#sliderLabelRight").contents()[0].nodeValue = maxY;
      //$("#sliderLabelLeft").contents()[0].nodeValue = "Years: " + minY;
      $(".dropdown-toggle").contents()[1].nodeValue = " Years: " + minY + "-" + maxY;
      featureLayer.setDefinitionExpression("year >= " + minY+ "AND year <=" + maxY);            
    }

    function updateArray(){
      for (var i = husbandArray.length - 1; i >= 0; i--) {            
        $('#dropDownCountry').children('option[value="'+ husbandArray[i] +'"]').show();            
      };
      for (var i = placesArray.length - 1; i >= 0; i--) {            
        $('#dropDownPlace').children('option[value="'+ placesArray[i] +'"]').show();            
      };
    } 
    // update the dropdwown list once is changed

    $('#dropDownCountry').on('change', function(){husbandSelection();});
    // looking for a change of the HUSBAND dropdown menu
    $('#dropDownPlace').on('change', function(){placeSelection();});
    // looking for a change of the PLACE dropdwon menu
    function husbandSelection(){
      map.graphics.clear();
      var minY = document.getElementsByClassName('tooltip-inner')[0].childNodes[0].nodeValue.split(" : ")[0];
      var maxY = document.getElementsByClassName('tooltip-inner')[0].childNodes[0].nodeValue.split(" : ")[1]; 
      console.log(minY,maxY)
      dojo.forEach(featureLayer.graphics, function(g) {        
        if ( g.attributes.HusbandNam == $('select option:selected')[0].value && (g.attributes.year >= minY && g.attributes.year <= maxY)) {    
          // to do change to real shape lenght
          console.log(g.attributes);
          if(g.attributes.Shape_Length < 10){            
            // create the attributes for the graphic
            var circleAttributes = { 
              HusbandNam: g.attributes.HusbandNam, 
              HusbandPla: g.attributes.HusbandPla, 
              HusbandPag: g.attributes.HusbandPag,
              WifeName: g.attributes.WifeName,
              WifePlace: g.attributes.WifePlace,
              YearofMarr: g.attributes.YearofMarr,
            };
            var husbandPoint = {"geometry":{"points":[[g.attributes.HusbandX, g.attributes.HusbandY]],"spatialReference":4326},"attributes":circleAttributes,"symbol":{"color":[255,255,0,185],
            "size":14,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle",
            "outline":{"color":[204,225,0],"width":2,"type":"esriSLS","style":"esriSLSSolid"}}};

            var gHusbandPoint = new Graphic(husbandPoint);
            map.graphics.add(gHusbandPoint);           
          }
          else{
            var lineAttributes = { 
              HusbandNam: g.attributes.HusbandNam, 
              HusbandPla: g.attributes.HusbandPla, 
              HusbandPag: g.attributes.HusbandPag,
              WifeName: g.attributes.WifeName,
              WifePlace: g.attributes.WifePlace,
              YearofMarr: g.attributes.YearofMarr,
            };
            var husbandLine = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,0,.7]), 4);
            var gHusbandLine = new Graphic(g.geometry,husbandLine,lineAttributes);
            map.graphics.add(gHusbandLine); 
          }          
        }
        // dropdown HUSBAND function
        // mouse-over on graphic
        dojo.connect(map.graphics, "onMouseOver", function(evt) {          
          console.log(evt.graphic.attributes.HusbandNam)
          var bootstrap_alert = function() {};        
          bootstrap_alert.info = function(message) {
              $('#alert_placeholder').html('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
          }        
          bootstrap_alert.info("<ul class='alertCountryInfo'><li><b>Husband:</b> " + evt.graphic.attributes.HusbandNam + "</li><li><b>Place:</b> " + evt.graphic.attributes.HusbandPla + "</li><li><b>Wife:</b> " + evt.graphic.attributes.WifeName + "</li><li><b>Place:</b> " + evt.graphic.attributes.WifePlace + "</li><li><b>Year of Marriage:</b> " + evt.graphic.attributes.YearofMarr + "</li><li><a href='" + evt.graphic.attributes.HusbandPag + "' target=\"_blank\">http://genealogy.obdurodon.org</a></li></ul>");
        });          
      });
    }

    function placeSelection(){
      map.graphics.clear();
      dojo.forEach(featureLayer.graphics, function(g) {        
        if ( g.attributes.HusbandPla == $('select option:selected')[1].value || g.attributes.WifePlace == $('select option:selected')[1].value) {    
          // to do change to real shape lenght
          console.log(g.attributes);
          if(g.attributes.Shape_Length < 10){            
            // create the attributes for the graphic
            var circleAttributes = { 
              HusbandNam: g.attributes.HusbandNam, 
              HusbandPla: g.attributes.HusbandPla, 
              HusbandPag: g.attributes.HusbandPag,
              WifeName: g.attributes.WifeName,
              WifePlace: g.attributes.WifePlace,
              YearofMarr: g.attributes.YearofMarr,
            };
            var husbandPoint = {"geometry":{"points":[[g.attributes.HusbandX, g.attributes.HusbandY]],"spatialReference":4326},"attributes":circleAttributes,"symbol":{"color":[255,255,0,185],
            "size":14,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle",
            "outline":{"color":[204,225,0],"width":2,"type":"esriSLS","style":"esriSLSSolid"}}};

            var gHusbandPoint = new Graphic(husbandPoint);
            map.graphics.add(gHusbandPoint);           
          }
          else{
            var lineAttributes = { 
              HusbandNam: g.attributes.HusbandNam, 
              HusbandPla: g.attributes.HusbandPla, 
              HusbandPag: g.attributes.HusbandPag,
              WifeName: g.attributes.WifeName,
              WifePlace: g.attributes.WifePlace,
              YearofMarr: g.attributes.YearofMarr,
            };
            var husbandLine = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,0,.7]), 4);
            var gHusbandLine = new Graphic(g.geometry,husbandLine,lineAttributes);
            map.graphics.add(gHusbandLine); 
          }          
        }
        
        // mouse-over on graphic
        dojo.connect(map.graphics, "onMouseOver", function(evt) {          
          var bootstrap_alert = function() {};        
          bootstrap_alert.info = function(message) {
              $('#alert_placeholder').html('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
          }        
          bootstrap_alert.info("<ul class='alertCountryInfo'><li><b>Husband:</b> " + evt.graphic.attributes.HusbandNam + "</li><li><b>Place:</b> " + evt.graphic.attributes.HusbandPla + "</li><li><b>Wife:</b> " + evt.graphic.attributes.WifeName + "</li><li><b>Place:</b> " + evt.graphic.attributes.WifePlace + "</li><li><b>Year of Marriage:</b> " + evt.graphic.attributes.YearofMarr + "</li><li><a href='" + evt.graphic.attributes.HusbandPag + "' target=\"_blank\">http://genealogy.obdurodon.org</a></li></ul>");
        });          
      });
    }
    // dropdown WIFE function  
        

    function closeDialog() {map.graphics.clear();}
    
      
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-46421302-1', 'auto');
    ga('send', 'pageview');

});

  

      