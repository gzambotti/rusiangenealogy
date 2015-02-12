dojo.ready(function () {
  // to do -- try to create the pulldown automaticaly right now the array has to be updated if data changes 
  var husbandArray =  ["Adalbert of Babenberg", "Almos of Hungary", "Andrej Volodimerič", "Andrew of Hungary", 
  "Baškord of the Polovcians", "Béla I of Hungary", "Béla II of Hungary", "Bolesław \"the Tall\" of Poland", 
  "Bolesław II of Poland", "Bolesław III of Poland", "Bolesław IV of Poland", "Boris Kolomanovič", "Brjačeslav Davidič", 
  "Casimir \"the Restorer\" of Poland", "Cuno of Beichlingen", "Edward \"the Exile\" of England", "Eric Emune of Denmark", 
  "Erling Skaki of Norway", "Géza II of Hungary", "Glěb Jurevič", "Glěb Rostislavič", "Glěb Vseslavič", 
  "Gunther Count of Keffenberg", "Harald \"Hardrada\" Sigurtharsson of Norway", "Henry I Capet", 
  "Henry III \"the Long\" of Stade", "Henry IV of the German Empire", "Hugh of Vermandois", 
  "Iakus of Miechów", "Izjaslav Jaroslavič", "Izjaslav M′stislavič", "Jaropolk Izjaslavič", 
  "Jaropolk Izjaslavič", "Jaropolk Svjatoslavič", "Jaropolk Volodimerič", "Jaroslav \"Mudryj\" Volodimerič", 
  "Jaroslav Svjatopolčič", "Jaroslav Svjatopolčič", "Jaroslav Svjatopolčič", "Jaroslav Volodimerkovič", 
  "Jurij \"Dolgorukij\" Volodimerič", "Jurij Jaroslavič", "Knud Lavard Ericsson", "Koloman of Hungary", 
  "Ladislaus of Hungary", "Leo Diogenes of Byzantium", "M′stislav Harald Volodimerič", 
  "M′stislav Harald Volodimerič", "M′stislav Jurevič", "Magnus \"the Blind\" Sigurdsson of Norway", 
  "Malcolm III of Scotland", "Mieszko II of Poland", "Mieszko of Poland", "N. N. of Byzantium", "Olav Sveinsson", 
  "Oleg Svjatoslavič", "Oleg Svjatoslavič", "Philip of France", "Philip of France", "Piotr Wlostowic", 
  "Raoul de Crepy", "Rogvolod Borisič", "Roman Rostislavič", "Roman Volodimerič", "Rostislav Glěbovič", 
  "Rostislav Volodimerič", "Salomon of Hungary", "Sigurd \"the Crusader\" of Norway", "Soběslav of Bohemia", 
  "Stig Whiteskin of Denmark", "Svjatopolk M′stislavič", "Svjatoslav Jaroslavič", "Svjatoslav Ol′govič", 
  "Svjatoslav Volodimerič", "Svjatoslav Vsevolodič", "Volodimer Davidič", "Volodimer Monomax Vsevolodič", 
  "Volodimer Svjatoslavič", "Volodimer Svjatoslavič", "Volodimer Svjatoslavič", "Volodimer Svjatoslavič", 
  "Volodimer Svjatoslavič", "Volodimer Vsevolodič", "Volodimerko Volodarič", "Vratislav II of Bohemia", 
  "Vratislav II of Bohemia", "Vratislav of Bohemia", "Vsevolod \"Big Nest\" Jurevič", "Vsevolod \"Big Nest\" Jurevič", 
  "Vsevolod Jaroslavič", "Vsevolod Ol′govič", "Vsevolod Svjatoslavič", "Vsevolodko Davidič", "Władysław Herman", 
  "Władysław Herman", "Władysław II of Poland"]

  /*$.ajax("http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genhusbandwife/MapServer/0/query?where=OBJECTID>0&outFields=HusbandNam&orderByFields=HusbandNam&f=pjson",
      { dataType: "jsonp" }
      ).done(function ( data ) {        
        var foo = [];
        $.each( data.features, function( i, item ) {                    
          //var optionFrom = $('<option />').val(item.attributes.YZ_LABEL).text(item.attributes.YZ_LABEL);
          //$("#dropDownFrom").append(optionFrom);
           
          foo.push(item.attributes.HusbandNam)

        });
        console.log(foo)
        $.each(foo, function(val, text) {
          //$('select option:contains("Adalbert of Babenberg")').prop('selected',true);
          console.log(text) 
          $('#dropDownCountry').append( $('<option></option>').val(text).html(text));
        });         
  });*/
  
  $.each(husbandArray, function(val, text) {
    $('select option:contains("Adalbert of Babenberg")').prop('selected',true);
    $('#dropDownCountry').append( $('<option></option>').val(text).html(text));
  });
  
  $('.dropdown-toggle').dropdown();
  $('.selectpicker').selectpicker();

  $("#about").click(function(e){
    $("#aboutModal").modal("show"); 
    $("body").css("margin-right","0px");
    $(".navbar").css("margin-right","0px");          
  });

   

});

var map, featureLayer, dialog, featureJSON, identifyTask, identifyParams, myOnClick_connect, tags, last_tags, graphicId;
var basemapURL = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genbasemap/MapServer";
var husbandwifeLayer = "http://cga2.cga.harvard.edu/arcgis/rest/services/rusgen/genhusbandwife/MapServer/0";

require(["esri/map", "application/bootstrapmap", "esri/layers/FeatureLayer", "esri/tasks/IdentifyTask", "esri/dijit/Legend", "esri/graphic", 
  "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/UniqueValueRenderer", "esri/tasks/IdentifyTask", "esri/tasks/IdentifyParameters",
  "esri/layers/ArcGISTiledMapServiceLayer", "esri/geometry/Point", "dojo/on", "dojo/domReady!"], 
  function(Map, BootstrapMap, FeatureLayer, IdentifyTask, Legend, Graphic, SimpleLineSymbol, SimpleFillSymbol, UniqueValueRenderer, 
    IdentifyTask, IdentifyParameters, ArcGISTiledMapServiceLayer, Point, on) {   
    
    map = BootstrapMap.create("mapDiv",{center: [25, 53.4],zoom: 5});
        
    var basemap = new ArcGISTiledMapServiceLayer(basemapURL);
    
    dojo.connect(map, "onLoad", initOperationalLayersFirst);
    //dojo.connect(map, "onLoad", mapReady);      
    dojo.connect(map, 'onZoomEnd', function() {
      maxOffset = calcOffset();
      featureLayer.setMaxAllowableOffset(maxOffset);
    });
    map.addLayer(basemap);

    function calcOffset() {
      return (map.extent.getWidth() / map.width);
    }    

    function initOperationalLayersFirst() {
      var sls = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SHORTDOT,new esri.Color([80,80,80]), 2);
      var renderer = new UniqueValueRenderer(sls, "HusbandNam");

      featureLayer = new FeatureLayer(husbandwifeLayer, {
        mode: FeatureLayer.MODE_ONDEMAND,
        maxAllowableOffset: calcOffset(),
        outFields: ["HusbandNam","Shape_Leng"],
        supportsAdvancedQueries: true
      });
    
      featureLayer.setRenderer(renderer);
      //featureLayer.setDefinitionExpression("Ctry1 = 'Austria'");
      featureLayer.setOpacity(.9);
      map.addLayer(featureLayer); 
      /*  
      // start dialog        
      var highlightSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,255]), 5);

      //close the dialog when the mouse leaves the highlight graphic
      map.on("load", function(){
        map.graphics.enableMouseEvents();
        map.graphics.on("mouse-out", closeDialog);          
      });
                
      //listen for when the onMouseOver event fires on the countiesGraphicsLayer
      //when fired, create a new graphic with the geometry from the event.graphic and add it to the maps graphics layer
      //featureLayer.on("mouse-over", function(evt){
      featureLayer.on("mouse-over", function(evt){      
        map.graphics.clear();       
        var highlightGraphic = new Graphic(evt.graphic.geometry,highlightSymbol);      
        var bootstrap_alert = function() {};        
        bootstrap_alert.info = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
        }
        bootstrap_alert.info("<ul class='alertCountryInfo'><li>From " + evt.graphic.attributes.Ctry2 + ": " +  numberWithCommas(evt.graphic.attributes.Migr_Stock) + "</li><br/><li>As Share of Total Stock: " + Math.round(evt.graphic.attributes.Share_of_Total_Stock*100)/100  + "%</li><br/><li>As Share of Total Population: " + Math.round(evt.graphic.attributes.Share_of_Total_Pop*100)/100 + "%</li></ul>");
        //window.setTimeout( function(){$(".alert").slideUp();}, 15000);
        map.graphics.add(highlightGraphic); 
      });
      graphicId = map.graphicsLayerIds;
      //console.log(graphicId)
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
            
    // look for a change on the pulldown menu
    $('#dropDownCountry').on('change', function(){      
      map.graphics.clear();
      closeDialog();    
      // remove all the graphics once a new selection is fire      
      if(map.graphicsLayerIds.length > 1){map.removeLayer(map.getLayer(map.graphicsLayerIds[1]));}

      var styleSelection = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new esri.Color([255,255,0,.8]), 4);
      var renderer = new UniqueValueRenderer(styleSelection, "HusbandNam");
           
      featureLayer = new FeatureLayer(husbandwifeLayer, {
        mode: FeatureLayer.MODE_SNAPSHOT,
        maxAllowableOffset: calcOffset(),
        outFields: ["*"]
      });
      
      //map.getLayer(map.graphicsLayerIds[1]).graphics[0].geometry.paths

      featureLayer.setDefinitionExpression("HusbandNam = '" + $('select option:selected').text() + "'");

      featureLayer.setRenderer(renderer);
      
      $('.selectpicker').selectpicker('refresh');
      $('select').attr('disabled','disabled');
      map.addLayer(featureLayer);
      //var obj = map.getLayer(map.graphicsLayerIds[1]).graphics;
      featureLayer.on("update-end", function(){        
        var selectLayer = featureLayer.toJson();
        var obj = selectLayer.featureSet.features;
        // loop the obj
        for (var prop in obj) {          
          if(obj[prop].geometry.paths.length == 0){
            console.log(obj[prop].attributes);
            xVal = obj[prop].attributes.HusbandX;
            yVal = obj[prop].attributes.HusbandY;
            var myattributes = { 
              HusbandNam: obj[prop].attributes.HusbandNam, 
              HusbandPla: obj[prop].attributes.HusbandPla, 
              HusbandPag: obj[prop].attributes.HusbandPag,
              WifeName: obj[prop].attributes.WifeName,
              WifePlace: obj[prop].attributes.WifePlace,
              YearofMarr: obj[prop].attributes.YearofMarr,

            };

            var husbandPoint = {"geometry":{"points":[[xVal, yVal]],"spatialReference":4326},"attributes":myattributes,"symbol":{"color":[255,255,0,185],
            "size":14,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle",
            "outline":{"color":[204,204,0,255],"width":2,"type":"esriSLS","style":"esriSLSSolid"}}};
            var gra = new Graphic(husbandPoint);
            map.graphics.add(gra);           
          }
        }
      });     

      $('select').prop('disabled', false);
      // start dialog        
      //listen for when the onMouseOver event fires on the husbandGraphicsLayer
      //when fired, create a new graphic with the geometry from the event.graphic and add it to the maps graphics layer       
      featureLayer.on("mouse-over", function(evt){       
        console.log(evt)
        //dojo.byId("current_map").innerHTML = "<ul><li>From " + evt.graphic.attributes.Ctry2 + ": " +  numberWithCommas(evt.graphic.attributes.Migr_Stock) + "</li><br/><li>As Share of Total Stock: " + Math.round(evt.graphic.attributes.Share_of_Total_Stock*100)/100  + "%</li><br/><li>As Share of Total Population: " + Math.round(evt.graphic.attributes.Share_of_Total_Pop*100)/100 + "%</li></ul>";
        var bootstrap_alert = function() {};        
        bootstrap_alert.info = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
        }        
        bootstrap_alert.info("<ul class='alertCountryInfo'><li><b>Husband:</b> " + evt.graphic.attributes.HusbandNam + "</li><li><b>Place:</b> " + evt.graphic.attributes.HusbandPla + "</li><li><b>Wife:</b> " + evt.graphic.attributes.WifeName + "</li><li><b>Place:</b> " + evt.graphic.attributes.WifePlace + "</li><li><b>Year of Marriage:</b> " + evt.graphic.attributes.YearofMarr + "</li><li><a href='" + evt.graphic.attributes.HusbandPag + "'>http://genealogy.obdurodon.org</a></li></ul>");
        
      });

      dojo.connect(map.graphics, "onMouseOver", function(evt) {
        var g = evt.graphic;
        console.log(evt)
        var bootstrap_alert = function() {};        
        bootstrap_alert.info = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert">&times</button><span>'+message+'</span></div>')
        }        
        bootstrap_alert.info("<ul class='alertCountryInfo'><li><b>Husband:</b> " + evt.graphic.attributes.HusbandNam + "</li><li><b>Place:</b> " + evt.graphic.attributes.HusbandPla + "</li><li><b>Wife:</b> " + evt.graphic.attributes.WifeName + "</li><li><b>Place:</b> " + evt.graphic.attributes.WifePlace + "</li><li><b>Year of Marriage:</b> " + evt.graphic.attributes.YearofMarr + "</li><li><a href='" + evt.graphic.attributes.HusbandPag + "'>http://genealogy.obdurodon.org</a></li></ul>");
    });

      
      
  });
    
  function closeDialog() {
    map.graphics.clear();
    //dijit.popup.close(dialog);
  }
      
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46421302-1', 'auto');
  ga('send', 'pageview');

});

  

      