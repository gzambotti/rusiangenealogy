// Giovanni Zambotti - g.zambotti@gmail.com -- 5/15/2015

//'use strict';

var husbandArray =  ['Adalbert of Babenberg','Almos of Hungary','Andrei Volodimerich','Andrew of Hungary','Bashkord of the Polovtsy','Bela I of Hungary'
,'Bela II of Hungary','Boleslaw \"the Tall\" of Poland','Boleslaw II of Poland','Boleslaw III of Poland','Boleslaw IV of Poland'
,'Boris Kolomanovich','Briacheslav Davidich','Casimir \"the Restorer\" of Poland','Cuno of Beichlingen'
,'Edward \"the Exile\" of England','Eric Emune of Denmark','Erling Skaki of Norway','Geza II of Hungary','Gleb Iurevich'
,'Gleb Rostislavich','Gleb Vseslavich','Gunther Count of Keffenberg','Harald \"Hardrada\" Sigurtharsson of Norway'
,'Henry I Capet','Henry III \"the Long\" of Stade','Henry IV of the German Empire','Hugh of Vermandois'
,'Iakus of Mekhov','Iaropolk Iziaslavich','Iaropolk Sviatoslavich','Iaropolk Volodimerich','Iaroslav \"Mudryi\" Volodimerich'
,'Iaroslav Sviatopolchich','Iaroslav Vladimirkovich','Iurii \"Dolgorukii\" Volodimerich','Iurii Iaroslavich'
,'Iziaslav Iaroslavich','Iziaslav Mstislavich','Knud Lavard Ericsson','Koloman of Hungary','Ladislaus of Hungary'
,'Leo Diogenes of Byzantium','Magnus \"the Blind\" Sigurdsson of Norway','Malcolm III of Scotland'
,'Mieszko II of Poland','Mieszko of Poland','Mstislav Harald Volodimerich','Mstislav Iurevich'
,'N. N. of Byzantium','Olav Sveinsson','Oleg Sviatoslavich','Philip of France','Piotr Wlostowic'
,'Raoul de Crepy','Rogvolod Borisich','Roman Rostislavich','Roman Volodimerich','Rostislav Glebovich','Rostislav Volodimerich'
,'Salomon of Hungary','Sigurd \"the Crusader\" of Norway','Sobeslav of Bohemia','Stig Whiteskin of Denmark','Sviatopolk Mstislavich'
,'Sviatoslav Iaroslavich','Sviatoslav Olgovich','Sviatoslav Volodimerich','Sviatoslav Vsevolodich','Vladimir Monomakh Vsevolodich'
,'Vladimirko Volodarich','Volodimer Davidich','Volodimer Sviatoslavich','Volodimer Vsevolodich','Vratislav II of Bohemia'
,'Vratislav of Bohemia','Vsevolod \"Big Nest\" Iurevich','Vsevolod Iaroslavich','Vsevolod Olgovich','Vsevolod Sviatoslavich'
,'Vsevolodko Davidich','Wladyslaw Herman','Wladyslaw II of Poland',
'Adelaide, daughter of Almos of Hungary','Adele of Vermandois','Adelheid, daughter of Andrew of Hungary','Agafia Iaroslavna'
,'Agafija Rostislavna','Agafija Volodimerovna','Agnes of the German Empire','Anastasia Iaroslavna'
,'Anna \"Porphyrogenita\" of Byzantium','Anna Iaroslavna','Bertha of Holland','Bertrada of Anjou','Bulgar Woman','Cunigunda of the German Empire','Dobronega-Maria Volodimerovna','Elena, daughter of the ruler of the Ossetians','Elisabeth Iaroslavna','Evfimiia Volodimerovna'
,'Evfrosiniia Mstislavna','Evpraksia Vsevolodovna','First Czech woman of Bohemia','Gertrude of Poland','Greek nun of Byzantium'
,'Gyda Haroldsdottir','Hedwig, daughter of Almos of Hungary','Ingeborg Mstislavna','Ingigerd of Norway','Ingigerd of Sweden','Jelena daughter of Uros I of Serbia','Judith, daughter of Henry III of the German Empire','Judith, daughter of Vratislav II of Bohemia'
,'Kristin Ingesdottir of Sweden','Kristin Knudsdottir of Denmark','Kristin Sigurdsdottir of Norway'
,'Lanka daughter of Bela I of Hungary','Malfrid Mstislavna','Margaret of England'
,'Margret Knudsdottir','Maria Mstislavna','Maria of Ossetia','Maria Sviatopolkovna','Maria Sviatoslavna'
,'Maria Volodimerovna','Monomaxina','N. N. \"Evdoksia\" Iziaslavna','N. N. \"Olga\" Iurevna','N. N. \"Premislava\" Volodimerovna'
,'N. N. Andreevna','N. N. Glebovna','N. N. Iaropolkovna','N. N. Iziaslavna','N. N. Jurevna','N. N. Komnena'
,'N. N. Mstislavna','N. N. of Moravia','N. N. Petrovna of Poland','N. N. Rostislavna','N. N. Sviatoslavna'
,'N. N. Vasilkovna','N. N. Volodarovna','N. N. Vsevolodkovna','N. N., daughter of Khan Aepa'
,'N. N., daughter of Koloman','N. N., daughter of Mstislav Volodimerich','N. N., daughter of the Tsar of Abkhaz'
,'N. N., grandaughter of Tugorkhan of the Polovcians','Oda of Stade','Peredslava Sviatopolkovna'
,'Petrovna Mikhailovitsa','Richeza of Poland','Richeza of the German Empire','Rogned\'','Sbyslava Sviatopolkovna'
,'Second Czech woman of Bohemia','Sofia Iaroslavna','Sviatoslava of Poland','Unknown daughter of Dmitrii Zavidich','Unknown daughter of Ladislaus of Hungary','Unknown Daughter of Mieszko II of Poland','Unknown daughter of Wladyslaw Herman of Poland','Vierchoslava Mstislavna','Vysheslava Sviatoslavna','Zvenislava Vsevolodovna'
];
  
var placesArray = ["Abkhazia","Amsterdam","Anjou","Bamberg","Bilhorod","Bryansk","Bulgar","Busk","Byzantium","Chernihiv","Constantinople","Cracow","Denmark","Dorohobuzh","Edinburgh","England","Esztergom","France","German Empire","Gniezno","Halych","Hungary","Kyiv","London","Mainz","Minsk"
,"Norway","Novgorod","Novhorod","Sivers\'kyi","Ossetia","Paris","Peremyshl","Pereyaslav","Polack","Poland","Polovtsy","Raska","Rus\'"
,"Ryazan","Schleswig","Scotland","Serbia","Smolensk","Stockholm","Sweden","Turov","Vermandois","Vladimir","Suzdal","Volodymyr","Vyshhorod"];

dojo.ready(function () {  
  
  $(window).load(function(){$('#aboutModal').modal('show');});
  // modal open at window load
  $.each(husbandArray, function(val, text) {$('#dropDownCountry').append( $('<option></option>').val(text).html(text));});
  $.each(placesArray, function(val, text) {$('#dropDownPlace').append( $('<option></option>').val(text).html(text));});
  
  // keep dropdown menu open until a second click is performed
  $('div.dropdown-menu').on('click', function(event) {event.stopPropagation();});

  $('.selectpicker').selectpicker({container: 'body'});

  $('body').on('click', function(event) {
    var target = $(event.target);
    if (target.parents('.bootstrap-select').length) {
      event.stopPropagation();
      $('.bootstrap-select.open').removeClass('open');
    }
  }); 

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.selectpicker').selectpicker('mobile');
  }
  else{$('.selectpicker').selectpicker();}  
  
  $("#about").click(function(e){
    $("#aboutModal").modal("show"); 
    $("body").css("margin-right","0px");
    $(".navbar").css("margin-right","0px");          
  });
  
});

var map, featureLayer;
var basemapURL = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genbasemap/MapServer";
var placeLayer = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genhusbandwife/MapServer/0";
var husbandwifeLayer = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genhusbandwife/MapServer/1";
var countryLayer = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genhusbandwife/MapServer/2";


require(["esri/map", "application/bootstrapmap", "esri/layers/FeatureLayer", "esri/dijit/HomeButton","esri/dijit/Legend", "esri/graphic", "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/UniqueValueRenderer", "esri/renderers/SimpleRenderer",
  "esri/layers/ArcGISTiledMapServiceLayer", "esri/geometry/Point", "dojo/on", "esri/symbols/TextSymbol","esri/layers/LabelLayer", "esri/Color","dojo/domReady!"], 
  function(Map, BootstrapMap, FeatureLayer, HomeButton, Legend, Graphic, SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, UniqueValueRenderer, SimpleRenderer,
    ArcGISTiledMapServiceLayer, Point, on, TextSymbol, LabelLayer, Color) {   
    
    map = BootstrapMap.create("mapDiv",{center: [25, 53.4],zoom: 4, smartNavigation: true});
    var home = new HomeButton({map: map}, "HomeButton");
    home.startup();        
    
    var basemap = new ArcGISTiledMapServiceLayer(basemapURL);    
    
    dojo.connect(map, "onLoad", initOperationalLayersFirst);
    dojo.connect(map, "onLoad", initOperationalLayersSecond);
    dojo.connect(map, 'onZoomEnd', function() {      
      var maxOffset = calcOffset();
      featureLayer.setMaxAllowableOffset(maxOffset);
      console.log(map.getZoom())
      if(map.getZoom() < 4){map.setZoom(4);}
      if(map.getZoom() > 8){map.setZoom(8);}
    });    
    
    map.addLayer(basemap);

    var sCnty = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new esri.Color([152,152,152]), 1);
    var rsCnty = new UniqueValueRenderer(sCnty);    
    var featureCntyLayer = new FeatureLayer(countryLayer, {
          mode: FeatureLayer.MODE_SNAPSHOT,
          outFields: ["CNTRY_NAME"]
    });
    featureCntyLayer.setRenderer(rsCnty);

    var statesColor = new Color("#666");
    var statesLabel = new TextSymbol().setColor(statesColor);    
    statesLabel.font.setSize("8pt");
    statesLabel.font.setFamily("arial");
    statesLabel.font.setStyle("italic");

    var statesLabelRenderer = new SimpleRenderer(statesLabel);
    var labels = new LabelLayer({ id: "labels_cnty" });
    labels.addFeatureLayer(featureCntyLayer, statesLabelRenderer, "{CNTRY_NAME}");
    // add country layer    
    
    $('#checkboxCountries').click(function () {
      console.log(this.checked);
      if(this.checked == true){map.addLayer(featureCntyLayer);map.addLayer(labels);}
      else{map.removeLayer(featureCntyLayer);map.removeLayer(labels);}  
    });  

    function calcOffset() {return (map.extent.getWidth() / map.width);}

    function initOperationalLayersSecond(){
      var sPlace = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE,6,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, 
            new Color([237, 85, 101, 1]),1),new Color([237, 85, 101, 1]));
      var rsPlace = new UniqueValueRenderer(sPlace);    
      var featurePlaceLayer = new FeatureLayer(placeLayer, {
            mode: FeatureLayer.MODE_SNAPSHOT,
            outFields: ["name_stylesheet"]          
      });
      featurePlaceLayer.setRenderer(rsPlace);
                    
      map.addLayer(featurePlaceLayer);
      var placeColor = new Color("#ED5565");
      var placeLabel = new TextSymbol().setColor(placeColor).setOffset(-5,-17).setAlign(TextSymbol.ALIGN_START);
      //placeLabel.setHorizontalAlignment('right')      
      //placeLabel.setOffset(3,3);
      placeLabel.font.setSize("8pt");
      placeLabel.font.setFamily("arial");
      placeLabel.font.setStyle("italic");
      //placeLabel.font.setOffset(0,50);
      //placeLabel.setAngle(0);
      //placeLabel.setOffset(0,50);
      var placeLabelRenderer = new SimpleRenderer(placeLabel);
      var pLabels = new LabelLayer({ id: "labels_place" });
      pLabels.addFeatureLayer(featurePlaceLayer, placeLabelRenderer, "{name_stylesheet}");
      map.addLayer(pLabels);
      // add place layer  
    } 

    function initOperationalLayersFirst() {
        map.enableScrollWheelZoom();        
        var sls = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SHORTDOT,new esri.Color([80,80,80]), 2.5);
        var renderer = new UniqueValueRenderer(sls, "HusbandNam");
        featureLayer = new FeatureLayer(husbandwifeLayer, {
          id: "husband_graphic",
          mode: FeatureLayer.MODE_SNAPSHOT,
          maxAllowableOffset: calcOffset(),
          outFields: ["*"],
          supportsAdvancedQueries: true
        });      
        
        featureLayer.setRenderer(renderer);
        //featureLayer.setSelectionSymbol(fieldsSelectionSymbol);      
        featureLayer.setOpacity(.9);        
        map.addLayer(featureLayer);        

        dojo.connect(map, "onClick", function(e) {
          console.log(e.graphic)
          $('#dropDownPlace').selectpicker('val', 'Select a Place...');
          $('#dropDownCountry').selectpicker('val', 'Select a Name...');

          map.graphics.clear();
          var centerPoint = new esri.geometry.Point(e.mapPoint.x,e.mapPoint.y,e.mapPoint.spatialReference);
          var mapWidth = map.extent.getWidth();
          //Divide width in map units by width in pixels
          var pixelWidth = mapWidth/map.width;
          //Calculate a 10 pixel envelope width (5 pixel tolerance on each side)
          var tolerance = 10 * pixelWidth;
          //Build tolerance envelope and set it as the query geometry
          var queryExtent = new esri.geometry.Extent(1,1,tolerance,tolerance,e.mapPoint.spatialReference);
          queryExtent.geometry = queryExtent.centerAt(centerPoint);
          var select = featureLayer.selectFeatures(queryExtent, esri.layers.FeatureLayer.SELECTION_NEW);
          //console.log("query: ", query, select);
          select.then(function(features) {
              //map.infoWindow.setFeatures(features);                
              //map.infoWindow.setContent(features[0].attributes.HusbandNam)
              //map.infoWindow.show(e.mapPoint);
              //var t = features;
              if($(".alert").length > 0){
                for (var i = $(".alert").length - 1; i >= 0; i--) {
                  $(".alert")[i].remove();
                };
              }
              // remove alert if open
              var bootstrap_alert = function() {};
              for (var i = features.length - 1; i >= 0; i--) {
                //console.log("select features result: ", features[i].attributes.HusbandNam);                
                bootstrap_alert.info = function(message) {
                    $('#alert_placeholder').append('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
                }        
                bootstrap_alert.info("<ul class='alertCountryInfo'><li><b>Husband:</b> " + features[i].attributes.HusbandNam + "</li><li><b>Place:</b> " + features[i].attributes.HusbandPla + "</li><li><b>Wife:</b> " + features[i].attributes.WifeName + "</li><li><b>Place:</b> " + features[i].attributes.WifePlace + "</li><li><b>Year of Marriage:</b> " + features[i].attributes.YearofMarr + "</li><li><a href='" + features[i].attributes.HusbandPag + "' target=\"_blank\">http://genealogy.obdurodon.org</a></li></ul>");
                ;
                //this will automatically close the alert and remove this if the users doesnt close it in 5 secs
                //setTimeout(function() {$("div.alert").remove();}, 5000);
              };
              //console.log(features)

              if(features.length > 0){
                var husbandLine = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,0,.7]), 4);
                var gHusbandLine = new Graphic(features[0].geometry,husbandLine);
                map.graphics.add(gHusbandLine);
              }             
          }, function(err) {
            console.log("select features error: ", err);
          });
        });
    }
    
    // time slider 
    
    $(function () {
      $("#range").ionRangeSlider({
          hide_min_max: true,
          keyboard: true,
          min: 980,
          max: 1209,
          from: 980,
          to: 1209,
          type: 'double',
          step: 1,
          prefix: "",
          grid: true,
          grid_num: 6,
          prettify_enabled: false,          
          onFinish:function (data) {
            console.log(data.from);
            updateArray();
            featureLayer.setDefinitionExpression("year >= " + data.from+ "AND year <=" + data.to);
            var newHusbandArray = husbandArray;
            var newPlacesArray = placesArray;
            //console.log(newHusbandArray) 
            featureLayer.on("UpdateEnd", function(){
                var queryLayer = featureLayer.toJson();                   
                for (var i = queryLayer.featureSet.features.length - 1; i >= 0; i--) {            
                  console.log(queryLayer.featureSet.features[i].attributes.HusbandPla)
                  newHusbandArray = $.grep(newHusbandArray, function(value) {
                    return value != queryLayer.featureSet.features[i].attributes.HusbandNam && value != queryLayer.featureSet.features[i].attributes.WifeName;
                  });
                  newPlacesArray = $.grep(newPlacesArray, function(value) {
                    return value != queryLayer.featureSet.features[i].attributes.HusbandPla && value != queryLayer.featureSet.features[i].attributes.WifePlace
                    && value != queryLayer.featureSet.features[i].attributes.HusbandKing && value != queryLayer.featureSet.features[i].attributes.WifeKingdo;
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
          }
      });
    });
    // slider update data and menu once it stops -- old version
    /*
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
    */

    function updateArray(){
      for (var i = husbandArray.length - 1; i >= 0; i--) {            
        $('#dropDownCountry').children('option[value="'+ husbandArray[i] +'"]').show();            
      };
      for (var i = placesArray.length - 1; i >= 0; i--) {            
        $('#dropDownPlace').children('option[value="'+ placesArray[i] +'"]').show();            
      };
    } 
    // update the dropdwown list once is changed

    $('#dropDownCountry').on('change', function(){husbandSelection();$("div.alert").remove();$('#dropDownPlace').selectpicker('val', 'Select a Place...');});
    // looking for a change of the HUSBAND dropdown menu
    $('#dropDownPlace').on('change', function(){placeSelection();$("div.alert").remove();$('#dropDownCountry').selectpicker('val', 'Select a Name...');});
    // looking for a change of the PLACE dropdwon menu
    
    function husbandSelection(){
      map.graphics.clear();
      //var minY = document.getElementsByClassName('irs-from')[0].childNodes[0];
      //var maxY = document.getElementsByClassName('irs-to')[0].childNodes[0];       
      dojo.forEach(featureLayer.graphics, function(g) {                
        //if ( g.attributes.HusbandNam == $('select option:selected')[0].value && (g.attributes.Year >= minY && g.attributes.Year <= maxY)) {    
          if ( g.attributes.HusbandNam == $('select option:selected')[0].value || g.attributes.WifeName == $('select option:selected')[0].value) {    
          // to do change to real shape lenght
          //console.log(g.attributes);
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
          if (typeof(evt.graphic.attributes) != "undefined"){
            var bootstrap_alert = function() {};        
            bootstrap_alert.info = function(message) {
               $('#alert_placeholder').html('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
            }        
            bootstrap_alert.info("<ul class='alertCountryInfo'><li><b>Husband:</b> " + evt.graphic.attributes.HusbandNam + "</li><li><b>Place:</b> " + evt.graphic.attributes.HusbandPla + "</li><li><b>Wife:</b> " + evt.graphic.attributes.WifeName + "</li><li><b>Place:</b> " + evt.graphic.attributes.WifePlace + "</li><li><b>Year of Marriage:</b> " + evt.graphic.attributes.YearofMarr + "</li><li><a href='" + evt.graphic.attributes.HusbandPag + "' target=\"_blank\">http://genealogy.obdurodon.org</a></li></ul>");
          } 
        });                 
      });
    }

    function placeSelection(){
      map.graphics.clear();
      dojo.forEach(featureLayer.graphics, function(g) {        
        if ( g.attributes.HusbandPla == $('select option:selected')[1].value || g.attributes.WifePlace == $('select option:selected')[1].value 
            || g.attributes.HusbandKing == $('select option:selected')[1].value || g.attributes.WifeKingdo == $('select option:selected')[1].value) {    
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
          if (typeof(evt.graphic.attributes) != "undefined"){
          var bootstrap_alert = function() {};        
          bootstrap_alert.info = function(message) {
              $('#alert_placeholder').html('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
          }        
          bootstrap_alert.info("<ul class='alertCountryInfo'><li><b>Husband:</b> " + evt.graphic.attributes.HusbandNam + "</li><li><b>Place:</b> " + evt.graphic.attributes.HusbandPla + "</li><li><b>Wife:</b> " + evt.graphic.attributes.WifeName + "</li><li><b>Place:</b> " + evt.graphic.attributes.WifePlace + "</li><li><b>Year of Marriage:</b> " + evt.graphic.attributes.YearofMarr + "</li><li><a href='" + evt.graphic.attributes.HusbandPag + "' target=\"_blank\">http://genealogy.obdurodon.org</a></li></ul>");
          }
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

  

      