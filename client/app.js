
	function JTEObject(x,y,w,h,c,r,alpha,attr,cam,v,tags,locked,last,name){
		if(x==undefined){x=0;}
		if(y==undefined){y=0;}
		if(w==undefined){w=10;}
		if(h==undefined){h=10;}
		if(c==undefined){c=[0,0,0];}
		if(r==undefined){r=0;}
		if(alpha==undefined){alpha=1;}
		if(attr==undefined){attr=undefined;}
		if(cam==undefined){cam=true;}
		if(v==undefined){v=jte.view;}
		if(tags==undefined){tags=[""];}
		if(locked==undefined){locked=false;}
		if(last==undefined){last=-1;}
		if(name==undefined){name="Obj"+jte.objects.length;}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.c=c;
		this.r=r;
		this.alpha=alpha;

		this.attr=attr;

		this.cam=cam;
		this.view=v;
		this.tags=tags;

		this.locked=locked;
		this.last=last;
    
		this.name=name;

	}

	var jte={
		w:800,
		h:600,
		originalW:0,
		originalH:0,
		title:"Jetpack Game new",
		maximize:true,
		ratio:false,
		socket:true,
		fontSize:20,
		gridUnit:"10",
		path:"",

		objects:[],

		tileLayer:1000,
		tilesets:{},
		tiles:{},
		
		views:["Start","Fuelgame"],
		view:"Start",

		bg:[255,255,255,1],

		code:"",

		pR:1,

		initialize:function(){
			var obj=new JTEObject(390,180,390,40,[0,0,0],0,1,'{"text":"Skins:","size":24,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Obj398');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	//jt.camActive(false);
  
  
};obj.update=function(){	/*Update runs at the fps specified*/
  var player=jt.getObject("Player2");
  var client=jt.getObject("Client");  
  var skins=jt.getObjects(["Skin"]);
  
  for(var i=0;i<skins.length;i++){
   	var skin=skins[i];
    if(jt.mIn(skin)){
      jt.rect(skin.x,skin.y,skin.w,skin.h,[0,0,0,0.25]); 
     	if(jt.mPress(skin)){
        player.sprite=skin.tags[1]; 
        client.clientObj.sprite=skin.tags[1];
      }
    }
    
    if(player.sprite==skin.tags[1]){
     	jt.rectB(skin.x,skin.y,skin.w,skin.h,"black",0,2); 
    }
  }
  
  jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t//jt.camActive(false);","  ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  var player=jt.getObject(\"Player2\");","  var client=jt.getObject(\"Client\");  ","  var skins=jt.getObjects([\"Skin\"]);","  ","  for(var i=0;i<skins.length;i++){","   \tvar skin=skins[i];","    if(jt.mIn(skin)){","      jt.rect(skin.x,skin.y,skin.w,skin.h,[0,0,0,0.25]); ","     \tif(jt.mPress(skin)){","        player.sprite=skin.tags[1]; ","        client.clientObj.sprite=skin.tags[1];","      }","    }","    ","    if(player.sprite==skin.tags[1]){","     \tjt.rectB(skin.x,skin.y,skin.w,skin.h,\"black\",0,2); ","    }","  }","  ","  jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(-60,-4930,30,5530,[255,0,255],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'BorderY2');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1760,0,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Refill1');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(2000,-5000,40,5600,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj12');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,580,2000,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj152');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,-3610,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj335');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-3590,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj342');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-3880,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj351');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,-3920,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj352');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(80,-3960,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj353');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(80,-4010,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj354');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,600,2000,30,[255,0,255],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'BorderX2');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(-30,600,2060,40,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj28');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(-40,-4940,40,5580,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj307');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(350,520,60,60,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj12');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(410,500,20,80,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj166');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(10,480,170,2,[0,0,0],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj162');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(84,460,2,45,[0,0,0],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj161');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(180,460,2,45,[0,0,0],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj408');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(10,460,70,20,[0,0,0],0,1,'{"text":"Z Jump","size":16,"font":"Consolas"}',true,'Fuelgame','[""]',false,-1,'Obj160');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	if(jt.pConnected(0)){this.attr.text="A Jump"}else{this.attr.text="Z Jump"}
  
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\tif(jt.pConnected(0)){this.attr.text=\"A Jump\"}else{this.attr.text=\"Z Jump\"}","  ","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(10,490,70,20,[0,0,0],0,1,'{"text":"<- Left","size":16,"align":"center","font":"Consolas"}',true,'Fuelgame','[""]',false,-1,'Obj158');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(90,490,80,20,[0,0,0],0,1,'{"text":"-> Right","size":16,"align":"center","font":"Consolas"}',true,'Fuelgame','[""]',false,-1,'Obj169');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(90,460,80,20,[0,0,0],0,1,'{"text":"X Fly","size":16,"align":"center","font":"Consolas"}',true,'Fuelgame','[""]',false,-1,'Obj163');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(190,470,160,30,[0,0,0],0,1,'{"text":"C Drop fuel for other players !","size":16,"align":"center","font":"Consolas"}',true,'Fuelgame','[""]',false,-1,'Obj407');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(10,430,160,20,[0,0,0],0,1,'{"text":"Controls:","size":16,"align":"center","font":"Consolas"}',true,'Fuelgame','[""]',false,-1,'Obj158');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(880,340,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj154');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(430,540,170,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj153');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(120,560,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj13');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(460,520,60,20,[0,0,0],0,1,'{"text":"Refill","size":16,"align":"center","font":"Consolas"}',true,'Fuelgame','[""]',false,-1,'Obj165');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(260,540,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj15');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(800,300,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj171');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,300,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj172');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(980,-60,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj174');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(280,-620,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj173');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-700,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj175');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1660,-1010,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj176');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1200,-1400,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj177');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(660,-1400,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj178');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,-1310,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj179');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(120,-2200,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj186');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(500,-2360,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj206');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1000,-2620,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj210');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1120,-2620,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj222');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1600,-3260,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj229');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-3980,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj291');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1400,-3440,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj302');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(320,-3470,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj369');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1200,-4090,20,40,[255,0,255],0,1,'undefined',true,'Fuelgame','["Check"]',false,-1,'Obj383');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	//jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(560,420,40,120,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj16');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1760,20,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj17');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1000,300,40,80,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj22');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(840,340,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj24');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1120,340,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj25');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(800,-20,240,320,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj26');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1200,340,120,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj27');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,-540,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj29');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1490,0,130,310,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj31');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1600,340,80,240,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj32');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1760,340,140,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj32');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1940,260,60,120,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj33');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,160,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj34');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1680,340,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj36');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1290,-40,100,350,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj37');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1160,340,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj40');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1360,340,150,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj41');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1800,0,120,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj43');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,40,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj44');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1190,0,100,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj44');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(940,-60,20,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj46');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-180,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj47');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(60,-220,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj168');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(-330,510,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj491');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(140,-2140,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj190');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(520,-2300,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj197');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(860,-2420,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj207');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1060,-2620,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj208');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1260,-2580,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj218');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1220,-2460,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj358');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1300,-2380,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj359');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1420,-2380,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj360');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1540,-2380,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj361');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1180,-2580,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj214');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1460,-2580,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj220');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1520,-2620,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj221');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1560,-2760,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj219');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1560,-2940,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj225');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-3030,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj231');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1890,-3070,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj265');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1800,-3500,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj259');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1320,-3400,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj308');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1080,-3360,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj355');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(360,-3430,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj357');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(440,-3350,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj393');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(520,-3350,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj394');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1200,-3380,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj356');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1240,-3580,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj312');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1160,-3580,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj316');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1200,-3580,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj314');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1120,-3580,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj317');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1220,-3690,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj310');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1140,-3690,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj318');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1180,-3690,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj315');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1100,-3690,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj319');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1800,-3780,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj278');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1880,-3940,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj282');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1520,-4060,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj385');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-3110,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj268');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-3070,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj266');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1890,-2820,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj261');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1800,-2820,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj256');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1740,-2760,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj255');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1700,-2680,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj236');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-2600,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj237');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1700,-2280,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj243');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-2120,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj246');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-1800,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj287');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1770,-1520,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj391');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1940,-1520,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj392');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1800,-1900,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj288');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-2000,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj289');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-2240,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj248');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1800,-2320,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj247');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1840,-2540,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj249');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1700,-2440,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj239');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1660,-2520,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj238');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(960,-2460,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj212');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(460,-2100,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj196');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(80,-2040,40,40,[127,127,127],0,1,'{"img":"bumper"}',true,'Fuelgame','["Bumper"]',false,-1,'Obj193');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1000,-220,40,140,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj48');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(940,-80,60,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj50');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(760,-20,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj51');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(580,-20,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj52');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(660,-20,60,560,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj54');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,-60,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj55');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(180,-100,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj167');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(260,-20,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj57');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(140,-140,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj386');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,-520,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj59');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-300,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj60');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1020,-2600,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj189');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(110,-3500,50,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj339');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1420,-2920,20,100,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj217');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-2560,20,60,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj241');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-3180,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj272');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-3940,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj281');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1400,-3400,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj301');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1080,-3580,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj311');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1260,-4050,40,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj370');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1400,-3910,20,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj376');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1760,-1640,60,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj250');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(340,-2100,20,60,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj211');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-1250,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj201');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-420,20,120,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj62');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(500,-20,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj64');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(340,-20,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj457');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(180,-500,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj65');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(260,-580,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj66');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(300,-620,400,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj67');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(700,-620,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj68');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1140,-620,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj387');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1000,-80,40,60,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj71');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(420,-20,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj159');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-660,60,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj73');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-680,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj170');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1640,-970,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj232');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1180,-620,400,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj75');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1580,-620,100,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj76');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1980,-930,20,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj77');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1200,-1360,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj78');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1640,-660,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj79');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-660,20,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj81');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-970,140,290,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj82');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1640,-990,20,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj86');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1600,-1120,20,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj87');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1600,-3220,20,2100,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj88');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1400,-2920,20,100,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj215');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1400,-3380,40,460,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj223');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1080,-3560,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj309');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1280,-3560,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj325');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1100,-4050,160,360,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj338');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-4000,20,1440,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj224');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-4350,20,230,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj380');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1600,-4350,20,830,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj292');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-4020,180,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj279');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-4120,220,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj293');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-3940,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj280');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-3920,80,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj290');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-2500,20,700,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj242');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-2180,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj267');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1650,-2100,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj269');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1710,-3960,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj294');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1440,-3960,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj372');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1370,-3850,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj395');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1420,-3850,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj396');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1380,-3910,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj374');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1440,-4010,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj373');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1480,-4050,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj375');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1520,-4220,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj381');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1560,-4260,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj384');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1560,-4310,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj382');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-4350,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj397');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1560,-4180,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj379');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1300,-4050,20,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj371');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1260,-4030,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj378');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1380,-4770,40,860,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj377');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1710,-3830,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj298');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1680,-3670,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj295');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1650,-3510,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj297');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(990,-3580,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj322');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(630,-3620,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj329');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(810,-3600,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj323');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(450,-3640,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj330');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(900,-3590,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj320');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(540,-3630,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj331');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(720,-3610,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj324');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(360,-3650,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj332');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1650,-2000,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj285');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1680,-3800,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj299');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1650,-3640,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj304');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1560,-3510,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj305');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(270,-3660,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj333');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(160,-3500,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj337');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(90,-3500,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj340');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(90,-4030,90,530,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj341');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1710,-3700,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj303');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1680,-3540,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj306');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1740,-2050,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj270');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1740,-3990,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj296');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1740,-3860,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj300');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1740,-1950,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj284');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1740,-1850,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj283');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1720,-1580,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj362');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1840,-1580,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj363');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1680,-1580,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj367');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1640,-1580,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj368');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1880,-1580,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj364');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-1580,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj365');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1650,-1900,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj286');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(780,-2380,20,1180,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj92');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1180,-1360,20,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj93');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1000,-2580,180,1400,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj94');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(740,-620,400,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj95');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(800,-2380,20,1060,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj100');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(120,-2140,20,1000,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj102');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,-1270,20,130,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj103');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(800,-1320,20,20,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj105');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-720,20,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj104');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1950,-700,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj105');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1930,-780,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj106');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1940,-830,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj107');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1950,-870,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj108');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-910,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj109');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1980,-980,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj110');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1780,-990,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj234');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1470,-1220,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj111');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1510,-1180,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj112');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1430,-1260,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj109');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,-2720,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj251');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,-2880,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj257');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,-2800,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj254');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1900,-2960,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj258');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1940,-3040,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj264');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1930,-3420,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj260');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1890,-3520,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj262');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,-3620,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj263');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(940,-3630,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj321');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(580,-3670,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj334');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(760,-3650,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj327');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(400,-3690,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj336');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(600,-1400,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj111');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(300,-1190,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj113');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1060,-1170,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj112');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1160,-1170,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj113');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1010,-1170,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj180');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1110,-1170,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj114');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(400,-1260,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj115');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(200,-1120,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj117');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-1700,20,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj118');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(20,-2000,100,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj184');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,-2040,20,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj188');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-1940,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj187');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(140,-2100,60,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj192');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(300,-2040,60,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj194');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(120,-2160,50,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj191');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(300,-3430,60,1310,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj195');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(500,-2180,80,120,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj198');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(540,-2240,40,60,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj199');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(500,-2320,20,60,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj202');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(560,-2290,20,50,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj205');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(180,-2130,20,50,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj390');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(500,-2260,80,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj200');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(500,-2320,50,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj203');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(800,-2420,20,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj204');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1100,-2980,20,400,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj213');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1400,-2820,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj216');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-2860,80,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj271');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1460,-2940,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj233');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1420,-2580,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj230');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(740,-2380,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj209');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(240,-1070,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj185');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(620,-1320,80,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj388');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(920,-1200,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj183');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-1120,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj120');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(820,-1200,100,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj122');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-3220,160,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj227');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-3100,160,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj228');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-3300,80,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj273');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-3400,40,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj274');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1880,-3500,40,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj275');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1840,-3600,40,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj276');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1800,-3700,80,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj277');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(180,-4030,920,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj366');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-2980,160,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj235');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1740,-2360,40,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj240');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-2200,160,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj244');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1620,-1760,380,20,[0,0,255],0,1,'undefined',true,'Fuelgame','["Wall","Timed"]',false,-1,'Obj245');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1850,-4140,130,20,[0,0,0],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'End');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(660,-1360,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj124');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(700,-1280,40,40,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj389');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1850,-4290,10,50,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj125');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,-4270,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj126');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,-4290,20,10,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj127');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1860,-4250,20,10,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj128');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1890,-4290,10,50,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj129');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1950,-4290,10,50,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj130');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1970,-4280,10,30,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj131');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1920,-4260,10,20,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj132');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1930,-4290,10,50,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj133');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1910,-4280,10,20,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj134');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1900,-4290,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj135');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-4290,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj136');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1960,-4250,10,10,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj137');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1850,-4230,130,10,[127,127,127],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'Obj138');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(500,-1330,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj139');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(60,-1520,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj144');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1480,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj148');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(20,-1560,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj149');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,-3660,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj145');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,-3630,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj343');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(80,-3670,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj346');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,-3710,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj347');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(80,-3750,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj348');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,-3790,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj349');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-3830,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj350');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1950,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj313');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,-3510,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj146');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1800,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj326');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,-3560,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj147');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-3540,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj345');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1850,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj328');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(20,-1610,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj148');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(20,-1660,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj149');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-1270,40,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj147');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1330,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj148');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1380,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj149');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1430,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj150');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(60,-1760,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj151');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1900,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj152');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(150,-1120,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj153');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(100,-1120,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj458');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(50,-1120,10,10,[0,255,0],0,1,'undefined',true,'Fuelgame','["Fuel"]',false,-1,'Obj459');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(800,340,40,240,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj155');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1000,520,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj156');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1720,520,40,40,[0,255,0],0,1,'undefined',true,'Fuelgame','["Wall","Refill"]',false,-1,'Obj181');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(980,560,80,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj157');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(1700,560,80,20,[127,127,127],0,1,'undefined',true,'Fuelgame','["Wall"]',false,-1,'Obj182');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(-90,560,40,40,[0,0,255],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'TimedManager');/*You can put functions here*/
obj.timeds=[];
obj.timer=0;
obj.timerPhases=[30,45,75,90];
;
obj.setup=function(){	/*Setup runs once when the game starts*/
  this.alpha=0;
	this.timeds=jte.getObjects(["Timed"]);
   	 
  
};obj.update=function(){	/*Update runs at the fps specified*/
  var alpha=1;
  var appearing=false;
  this.timer++;
  if(this.timer>=this.timerPhases[3]){this.timer=0;}
  for(var i=0;i<this.timerPhases.length;i++){
   	 if(this.timer<this.timerPhases[i]){
       	if(i==1){
          alpha=(this.timerPhases[1]-this.timer)/(this.timerPhases[1]-this.timerPhases[0]);
        }
       if(i==2){
          alpha=0;
        }
       if(i==3){
         	appearing=true;
          alpha=(this.timer-this.timerPhases[2])/(this.timerPhases[3]-this.timerPhases[2]);
        }
      	break; 
     }
  }
  
  for(var i=0;i<this.timeds.length;i++){
   	 this.timeds[i].alpha=alpha;
      if(alpha==0){
				this.timeds[i].tags=["Timed"];
      }else{
        if(appearing){
          var p=jte.getObject("Player2")
          if(jt.cRect(this.timeds[i],p)){
        		p.y=this.timeds[i].y-p.h;
        	}
        }
        this.timeds[i].tags=["Wall","Timer"];
      }
  }
  
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/","obj.timeds=[];","obj.timer=0;","obj.timerPhases=[30,45,75,90];"];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","  this.alpha=0;","\tthis.timeds=jte.getObjects([\"Timed\"]);","   \t ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  var alpha=1;","  var appearing=false;","  this.timer++;","  if(this.timer>=this.timerPhases[3]){this.timer=0;}","  for(var i=0;i<this.timerPhases.length;i++){","   \t if(this.timer<this.timerPhases[i]){","       \tif(i==1){","          alpha=(this.timerPhases[1]-this.timer)/(this.timerPhases[1]-this.timerPhases[0]);","        }","       if(i==2){","          alpha=0;","        }","       if(i==3){","         \tappearing=true;","          alpha=(this.timer-this.timerPhases[2])/(this.timerPhases[3]-this.timerPhases[2]);","        }","      \tbreak; ","     }","  }","  ","  for(var i=0;i<this.timeds.length;i++){","   \t this.timeds[i].alpha=alpha;","      if(alpha==0){","\t\t\t\tthis.timeds[i].tags=[\"Timed\"];","      }else{","        if(appearing){","          var p=jte.getObject(\"Player2\")","          if(jt.cRect(this.timeds[i],p)){","        \t\tp.y=this.timeds[i].y-p.h;","        \t}","        }","        this.timeds[i].tags=[\"Wall\",\"Timer\"];","      }","  }","  ","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(-90,610,40,40,[255,127,0],0,1,'undefined',true,'Fuelgame','[""]',false,-1,'FuelManager');/*You can put functions here*/

obj.fuels=[];
obj.timerMax=120;
obj.rotationSpeed=3;
obj.fuelRatio=0.25;

obj.gotFuelMax=30;
obj.gotFuel=0;

obj.sendFuelMax=30;
obj.sendFuel=0;

obj.addFuel=function(x,y,dir){
  var client=jt.getObject("Client");
  client.clientObj.fuels.push({alpha:1,x:x,y:y,r:0,timer:360,vX:dir/2,vY:-1,w:10,h:10,c:[0,255,0]})
}

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	this.alpha=0;
  this.fuels=jte.getObjects(["Fuel"])
  for(var i=0;i<this.fuels.length;i++){
   		this.fuels[i].timer=0;     
  }
  
};obj.update=function(){	/*Update runs at the fps specified*/
  var p=jte.getObject("Player2");
  jt.alpha(1);
  
	for(var i=0;i<this.fuels.length;i++){
    if(this.fuels[i].timer>0){
      this.fuels[i].timer--;
      if(this.fuels[i].timer<=0){
       	this.fuels[i].tags=["Fuel"]; 
       	this.fuels[i].alpha=1;         
      }
    }else{
       this.fuels[i].r+=this.rotationSpeed;
      	var p=jte.getObject("Player2");
      	if(jt.cRect(p,this.fuels[i])){
          
         	this.fuels[i].timer=this.timerMax;
          this.fuels[i].alpha=0;
          p.fuel+=p.fuelMax*this.fuelRatio;
          if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}
          jt.stopPlay("refill")
        }
    }
  }
  
  var client=jt.getObject("Client");
  var fuels=[];
  var serverObjs=client.serverObjs;
  var keys=Object.keys(serverObjs);
  var len=Object.keys(serverObjs).length;
  var index=1;
  
  var walls=jt.getObjects(["Wall"]);

  jt.fontSize(14);
  for(var i=0;i<client.clientObj.fuels.length;i++){
    var fuel=client.clientObj.fuels[i];
    client.clientObj.fuels[i].timer--;
    client.clientObj.fuels[i].x+=fuel.vX;    
    client.clientObj.fuels[i].y+=fuel.vY;
    client.clientObj.fuels[i].vY+=0.05;
    client.clientObj.fuels[i].r+=this.rotationSpeed;
    fuels.push(client.clientObj.fuels[i]);
    jt.rect(fuel);
    if(jt.cRect(p,fuel) && fuel.timer<=360-this.gotFuelMax){
      client.clientObj.fuels.splice(i,1);
      i--;
      p.fuel+=p.fuelMax*this.fuelRatio;
      if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}
      jt.stopPlay("refill")
     	continue; 
    }
    if(client.clientObj.fuels[i].timer<=0){
      client.clientObj.fuels.splice(i,1);
       i--;
     	continue; 
    }
    
    for(var j=0;j<walls.length;j++){
      var wall=walls[j];
      if(jt.cRect(fuel,wall)){
        client.clientObj.fuels.splice(i,1);
        i--;
       	break; 
      }
    }
    
  }
  
  if(this.gotFuel>0){
  	this.gotFuel--;
  }
  
  if(this.sendFuel>0){
  	this.sendFuel--;
  }
  
  for (var i = 0; i < len; i++) {
    var other = serverObjs[keys[i]];
    var fuels=other.fuels;
    for(var j=0;j<fuels.length;j++){
      jt.rect(fuels[j]);
      if(this.gotFuel<=0){
        if(jt.cRect(p,fuels[j])){
          this.gotFuel=this.gotFuelMax 
          //emit
          //this.socket.on("accept",function(senderId){
            
          var padding=5;
          var obj={x:p.x-padding,y:p.y-padding,w:p.w+padding/2,h:p.h+padding/2};
    			jt.getObject("Client").socket.emit("gotFuel",keys[i],obj);
            
          p.fuel+=p.fuelMax*this.fuelRatio;
          if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}
          jt.stopPlay("refill")
        }
      }
    }
  }
  
  for(var i=0;i<this.fuels.length;i++){
    if(this.fuels[i].timer>0){
      this.fuels[i].timer--;
      if(this.fuels[i].timer<=0){
       	this.fuels[i].tags=["Fuel"]; 
       	this.fuels[i].alpha=1;         
      }
    }else{
       this.fuels[i].r+=this.rotationSpeed;
      	var p=jte.getObject("Player2");
      	if(jt.cRect(p,this.fuels[i])){
          jt.stopPlay("refill")
         	this.fuels[i].timer=this.timerMax;
          this.fuels[i].alpha=0;
          p.fuel+=p.fuelMax*this.fuelRatio;
          if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}
        }
    }
  }
  jt.alpha(1);
  
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/","","obj.fuels=[];","obj.timerMax=120;","obj.rotationSpeed=3;","obj.fuelRatio=0.25;","","obj.gotFuelMax=30;","obj.gotFuel=0;","","obj.sendFuelMax=30;","obj.sendFuel=0;","","obj.addFuel=function(x,y,dir){","  var client=jt.getObject(\"Client\");","  client.clientObj.fuels.push({alpha:1,x:x,y:y,r:0,timer:360,vX:dir/2,vY:-1,w:10,h:10,c:[0,255,0]})","}",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\tthis.alpha=0;","  this.fuels=jte.getObjects([\"Fuel\"])","  for(var i=0;i<this.fuels.length;i++){","   \t\tthis.fuels[i].timer=0;     ","  }","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  var p=jte.getObject(\"Player2\");","  jt.alpha(1);","  ","\tfor(var i=0;i<this.fuels.length;i++){","    if(this.fuels[i].timer>0){","      this.fuels[i].timer--;","      if(this.fuels[i].timer<=0){","       \tthis.fuels[i].tags=[\"Fuel\"]; ","       \tthis.fuels[i].alpha=1;         ","      }","    }else{","       this.fuels[i].r+=this.rotationSpeed;","      \tvar p=jte.getObject(\"Player2\");","      \tif(jt.cRect(p,this.fuels[i])){","          ","         \tthis.fuels[i].timer=this.timerMax;","          this.fuels[i].alpha=0;","          p.fuel+=p.fuelMax*this.fuelRatio;","          if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}","          jt.stopPlay(\"refill\")","        }","    }","  }","  ","  var client=jt.getObject(\"Client\");","  var fuels=[];","  var serverObjs=client.serverObjs;","  var keys=Object.keys(serverObjs);","  var len=Object.keys(serverObjs).length;","  var index=1;","  ","  var walls=jt.getObjects([\"Wall\"]);","","  jt.fontSize(14);","  for(var i=0;i<client.clientObj.fuels.length;i++){","    var fuel=client.clientObj.fuels[i];","    client.clientObj.fuels[i].timer--;","    client.clientObj.fuels[i].x+=fuel.vX;    ","    client.clientObj.fuels[i].y+=fuel.vY;","    client.clientObj.fuels[i].vY+=0.05;","    client.clientObj.fuels[i].r+=this.rotationSpeed;","    fuels.push(client.clientObj.fuels[i]);","    jt.rect(fuel);","    if(jt.cRect(p,fuel) && fuel.timer<=360-this.gotFuelMax){","      client.clientObj.fuels.splice(i,1);","      i--;","      p.fuel+=p.fuelMax*this.fuelRatio;","      if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}","      jt.stopPlay(\"refill\")","     \tcontinue; ","    }","    if(client.clientObj.fuels[i].timer<=0){","      client.clientObj.fuels.splice(i,1);","       i--;","     \tcontinue; ","    }","    ","    for(var j=0;j<walls.length;j++){","      var wall=walls[j];","      if(jt.cRect(fuel,wall)){","        client.clientObj.fuels.splice(i,1);","        i--;","       \tbreak; ","      }","    }","    ","  }","  ","  if(this.gotFuel>0){","  \tthis.gotFuel--;","  }","  ","  if(this.sendFuel>0){","  \tthis.sendFuel--;","  }","  ","  for (var i = 0; i < len; i++) {","    var other = serverObjs[keys[i]];","    var fuels=other.fuels;","    for(var j=0;j<fuels.length;j++){","      jt.rect(fuels[j]);","      if(this.gotFuel<=0){","        if(jt.cRect(p,fuels[j])){","          this.gotFuel=this.gotFuelMax ","          //emit","          //this.socket.on(\"accept\",function(senderId){","            ","          var padding=5;","          var obj={x:p.x-padding,y:p.y-padding,w:p.w+padding/2,h:p.h+padding/2};","    \t\t\tjt.getObject(\"Client\").socket.emit(\"gotFuel\",keys[i],obj);","            ","          p.fuel+=p.fuelMax*this.fuelRatio;","          if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}","          jt.stopPlay(\"refill\")","        }","      }","    }","  }","  ","  for(var i=0;i<this.fuels.length;i++){","    if(this.fuels[i].timer>0){","      this.fuels[i].timer--;","      if(this.fuels[i].timer<=0){","       \tthis.fuels[i].tags=[\"Fuel\"]; ","       \tthis.fuels[i].alpha=1;         ","      }","    }else{","       this.fuels[i].r+=this.rotationSpeed;","      \tvar p=jte.getObject(\"Player2\");","      \tif(jt.cRect(p,this.fuels[i])){","          jt.stopPlay(\"refill\")","         \tthis.fuels[i].timer=this.timerMax;","          this.fuels[i].alpha=0;","          p.fuel+=p.fuelMax*this.fuelRatio;","          if(p.fuel>p.fuelMax){p.fuel=p.fuelMax}","        }","    }","  }","  jt.alpha(1);","  ","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(60,10,110,20,[0,0,0],0,1,'undefined',false,'Fuelgame','[""]',false,-1,'Obj16');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(65,15,100,10,[255,0,0],0,1,'undefined',false,'Fuelgame','[""]',false,-1,'Fuelbar');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(10,10,70,30,[0,0,0],0,1,'{"text":"Fuel","size":20,"font":"Consolas"}',false,'Fuelgame','[""]',false,-1,'Obj164');/*You can put functions here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(590,10,200,20,[0,0,0],0,1,'{"text":"Time:","size":20,"align":"right","font":"Consolas"}',false,'Fuelgame','[""]',false,-1,'Time2');/*You can put functions here*/
obj.timer=0;
obj.sec=0;
obj.end=false;
obj.start=false;
;
obj.setup=function(){	/*Setup runs once when the game starts*/
	this.timer=0;
  this.sec=0;
  this.attr.text="Time: 0";
};obj.update=function(){	/*Update runs at the fps specified*/
  
  //check end in player object
  if(!this.end && this.start){
    this.timer++;
    if(this.timer>=60){
      this.timer=0;
      this.sec++;
      this.attr.text="Time: "+this.sec;
    }
  }
  
  
	
  
	jte.draw(this);
};obj.JTEcode=["/*You can put functions here*/","obj.timer=0;","obj.sec=0;","obj.end=false;","obj.start=false;"];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\tthis.timer=0;","  this.sec=0;","  this.attr.text=\"Time: 0\";"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  ","  //check end in player object","  if(!this.end && this.start){","    this.timer++;","    if(this.timer>=60){","      this.timer=0;","      this.sec++;","      this.attr.text=\"Time: \"+this.sec;","    }","  }","  ","  ","\t","  ","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(80,560,10,20,[0,0,0],0,1,'undefined',true,'Fuelgame','["Player"]',false,-1,'Player2');/*You can put functions here*/
obj.grav=0.4;
obj.speed=0.5;
obj.speedMax=2;
obj.jump=6;

obj.sprite="guy";

obj.vX=0;
obj.vY=0;
obj.maxVY=30;
obj.maxGravVY=8;
obj.frictionX=0.25;
obj.frictionXAir=0.2;
obj.bumperX=10;
obj.bumperY=10;

obj.addX=0;
obj.addY=0;

obj.dir=1;

obj.fallingBuffer=0;
obj.maxJumpBuffer=5;

obj.fuel=0;
obj.fuelMax=100;
obj.fuelRate=0;
obj.fuelUse=0.9;
obj.fuelForce=1;
obj.fuelRow=0;
obj.fuelRowMax=30;
obj.fuelYMax=2;

obj.camW=400;
obj.camH=300;
obj.camSmooth=0.25;

obj.moved=false;

obj.createFuel=function(x,y,dir){
  var part={};
  part.x=x+jt.random(this.w/4,this.w*3/4)-dir*this.w/4;
  part.y=y+this.h-4;
  part.w=5;
  part.h=5;
  part.wRate=-0.2;
  part.hRate=-0.2;      
  part.vX=jt.random(-0.4,0.4,0.1);
  part.vY=jt.random(0.5,2,0.1)
  var rC=jt.random(0,155,1);
  part.c=[jt.random(200,255,1),rC,rC]
  part.cRate=[-4,rC/3,rC/2];
  return part;
}
;
obj.setup=function(){	/*Setup runs once when the game starts*/
  jt.volume(0.2)
  //jt.stopPlay("descent");
  
	this.fuel=this.fuelMax;
  
  jt.cam().w=this.camW;
  jt.cam().h=this.camH;
  
  this.maxGravVY=this.jump+this.fuelForce;
  
  jt.debug(false);
};obj.update=function(){	/*Update runs at the fps specified*/
	//key check
  jt.alpha(1);
  var state="Walk";
  var left=jt.kCheck("left");
  var right=jt.kCheck("right");  
  var up=jt.kPress("z") || jt.pPress("a");
  var upCheck=jt.kCheck("x") || jt.pCheck("x");
  
  var drop=jt.kCheck("c") || jt.pCheck("b");
  
  if(jt.pConnected(0)){
    var pStick=jt.pAxes(0);

    if(pStick[0]<=-0.75){left=true;}
    if(pStick[0]>=0.75){right=true;}
  }
  
  //if(jt.kPress("r")){this.respawn()};
  
  //ground check
  var walls=jte.getObjects(["Wall"],jte.getView());
  var checks=jte.getObjects(["Check"],jte.getView());  
  var bumpers=jte.getObjects(["Bumper"],jte.getView());
  var kills=jte.getObjects(["Kill"],jte.getView());  
  
  
  //checkpoints
  if(jt.debug()){
    for(var i=0;i<20;i++){
      var plus=false;
      if(i>=10){
         plus=true;
      }
      var pressed=false;
      if(plus){
        if(jt.kPress((i-10)) && jt.kCheck("shift")){
          pressed=true; 
        }
      }else{
        if(jt.kPress(i) && !jt.kCheck("shift")){
          pressed=true; 
        }
      }
      if(pressed){
        if(i<checks.length){
          this.x=checks[i].x;
          this.y=checks[i].y;        
          this.vX=0;
          this.vY=0;     
          var endCamX=this.x+(this.w/2)-this.camW/2;
          var endCamY=this.y+(this.h/2)-this.camH/2;
          jt.cam().x=endCamX;
          jt.cam().y=endCamY;   
          jt.cam().w=this.camW;
          jt.cam().h=this.camH;        
        }
      }
    }
  }
  
  
  var cObj={x:this.x,y:this.y,w:this.w,h:this.h}
  
  cObj.y+=1;
  var ground=false;
  for(var i=0;i<walls.length;i++){
   	if(jt.cRect(cObj,walls[i])){
      ground=true; 
      if(walls[i].tags.indexOf("Refill")!=-1){
        if(this.fuel<this.fuelMax-1){jt.stopPlay("refill")}
        this.fuel=this.fuelMax; 
      }else if(walls[i].name=="End"){
        jte.getObject("Time2").end=true;
        jte.getObject("Time2").attr.text="Final time: "+jte.getObject("Time2").sec;
        jt.getObject("Client").clientObj.done=true;
      }
    }
  }
  cObj.y-=1;
 
  
  if(ground){
    this.fallingBuffer=0;
  }else{
    //falls
    this.fallingBuffer++;
    this.vY+=this.grav;
    if(this.vY>this.maxVY){this.vY=this.maxVY}
  }
  
  //jump
  if(up && this.fallingBuffer<=this.maxJumpBuffer){
    jt.stopPlay("jump2")
    this.vY=-this.jump;
    this.fallingBuffer=this.maxJumpBuffer+1;
    
  }
  
  if(jt.kPress("space") && jt.debug()){
   	this.vY=-20; 
    this.vX+=20*this.dir;
  }
  
  if(upCheck){
    if(this.fuel>=this.fuelUse){
      this.fuel-=this.fuelUse;
      if(this.vY>-this.fuelYMax){
        this.vY-=this.fuelForce;
        if(this.vY<-this.fuelYMax){
         	this.vY=-this.fuelYMax; 
        }
      }else{
        this.vY-=this.grav/2;
      }
      /*this.vY-=this.fuelForce;
      if(this.vY<-this.fuelYMax){
        if(this.vY<-this.fuelYMax-this.fuelForce){
          this.vY+=this.fuelForce;
          this.vY-=this.grav;
        }else{
          this.vY=-this.fuelYMax;
        }
      }*/
      if(jt.frames()%8==0 || this.fuelRow==0){
        jt.stopPlay("fire");
      }
      //jt.volume(1);
      this.fuelRow++;
      
      //add particles
      state="Fuel";
      var part=this.createFuel(this.x,this.y,this.dir)
      jt.addPart(part);
    }else{
     	this.fuelRow-=2;  
    }
  }else{
    this.fuelRow-=2; 
  }
  
  this.fuel+=this.fuelRate;
  
  var fuelManager=jt.getObject("FuelManager");
  
  if(drop && fuelManager.sendFuel<=0 && this.fuel>=this.fuelMax*fuelManager.fuelRatio){
    fuelManager.sendFuel=fuelManager.sendFuelMax;
    this.fuel-=this.fuelMax*fuelManager.fuelRatio;
    if(this.fuel<0){this.fuel=0}
    jt.stopPlay("refill")
    //Add fuel
    fuelManager.addFuel(this.x+this.w/2-5,this.y,this.dir);
  }
  
  this.fuel=jt.stay(this.fuel,0,this.fuelMax);
  
  //update fuel
  jte.getObject("Fuelbar").w=(this.fuel/this.fuelMax)*100;
  
  
  //apply horizontal speed
  var walking=false;
  var bDir=this.dir;
  var friction=this.frictionX;
  if(!ground){
   	friction=this.frictionXAir; 
  }
  if(this.vX>friction){this.vX-=friction}
  else if(this.vX<-friction){this.vX+=friction}  
  else{this.vX=0;}    
  
  if(left){
    if(this.vX>-this.speedMax){
      this.vX-=this.speed;
      if(this.vX<-this.speedMax){
       	this.vX=-this.speedMax; 
      }
    }
    
    this.dir=-1;
    walking=true;
  }
  if(right){
    if(this.vX<this.speedMax){
      this.vX+=this.speed;
      if(this.vX>this.speedMax){
       	this.vX=this.speedMax; 
      }
    }
    
    this.dir=1;
    walking=true;
  }
  if(left && right){this.dir=bDir;walking=false;}
  
  //killed?
  cObj.x+=this.vX;
  cObj.y+=this.vY;  
  for(var i=0;i<kills.length;i++){
   	if(jt.cRect(cObj,kills[i]) && !wall){
      	this.respawn();
     		break;
    }
  }
  //Check bumpers
  var bumper=false;
  for(var i=0;i<bumpers.length;i++){
    var circle={x:bumpers[i].x,y:bumpers[i].y,d:bumpers[i].w,c:[0,0,255,0.5]};
    jt.shape(circle)
   	if(jt.cRect(cObj,bumpers[i]) && !bumper){
      var circle={x:bumpers[i].x,y:bumpers[i].y,d:bumpers[i].w};
      var mX=cObj.x+cObj.w/2;
      var mY=cObj.y+cObj.h/2;
      var mCX=circle.x+circle.d/2;
      var mCY=circle.y+circle.d/2;
      
      if(jt.cRectCircle(cObj,circle)){
        jt.stopPlay("jump")
        bumper=true;
        if(mX<mCX-circle.d/3){
          //left
          this.addX=-this.bumperX;
        }else if(mX>mCX+circle.d/3){
          //right
          this.addX=this.bumperX
        }else{
         	this.addY=-this.bumperY;
        }
        if(mY<mCY-circle.d/3){
          //up
          this.addY=-this.bumperY;
        }else if(mY>mCY+circle.d/3){
          //down
          this.addY=this.bumperY;
        }
      }
    }
  }
  
  cObj.x-=this.vX;
  cObj.y-=this.vY; 
  
  
  if(this.addX!=0){
   	this.vX=this.addX 
    this.addX=0;
  }
  if(this.addY!=0){
   	this.vY=this.addY 
    this.addY=0;
  }
  
  //horizontal collisions 
  cObj.x+=this.vX;
  var wall=false;
  for(var i=0;i<walls.length;i++){
   	if(jt.cRect(cObj,walls[i]) && !wall){
     	wall=true;
      if(walls[i].tags.indexOf("Refill")!=-1){
        if(this.fuel<this.fuelMax-1){jt.stopPlay("refill")}
        this.fuel=this.fuelMax; 
      }

      if(this.vX>=0){
        this.x=walls[i].x-this.w;
        this.vX=0;
      }else{
        this.x=walls[i].x+walls[i].w;
        this.vX=0;
      }
    }
  }
  cObj.x-=this.vX;
  
  //stay in game
  var borderX=jte.getObject("BorderX2");
  this.x+=this.vX;
  if(this.x<borderX.x){this.x=borderX.x;}
  if(this.x+this.w>borderX.w){this.x=borderX.w-this.w;}  
  
  cObj.x=this.x;
  
  //vertical collisions
  cObj.y+=this.vY;
  wall=false;
  for(var i=0;i<walls.length;i++){
   	if(jt.cRect(cObj,walls[i]) && !wall){
     	wall=true;
      if(walls[i].tags.indexOf("Refill")!=-1){
        if(this.fuel<this.fuelMax-1){jt.stopPlay("refill")}
        this.fuel=this.fuelMax; 
      }

      if(this.vY>=0){
        this.y=walls[i].y-this.h;
        this.vY=0;
      }else{
        this.y=walls[i].y+walls[i].h;
        this.vY=0;
      }
      
    }
  }
  cObj.y-=this.vY;
  
  //stay in game
  var borderY=jte.getObject("BorderY2");
  this.y+=this.vY;
  if(this.y<borderY.y){this.y=borderY.y;}
  if(this.y+this.h>jt.h()){this.y=jt.h()-this.h;}  
  
  
  //time starting:
  if(!this.moved){
   	if(left || right){
     	jte.getObject("Time2").start=true;
      this.moved=true;
    }
  }
  
  //camera
  if(this.fuelRow>this.fuelRowMax){
   	this.fuelRow=this.fuelRowMax; 
  }
   if(this.fuelRow<0){
   	this.fuelRow=0; 
  }
  
  var camW=jt.lerp(this.camSmooth,jt.cam().w,this.camW+(this.fuelRow*2));
  var camH=jt.lerp(this.camSmooth,jt.cam().h,this.camH+(this.fuelRow*2)*0.75);
  
  //cam x
  var endCamX=this.x+(this.w/2)-camW/2;
  jt.cam().x=jt.lerp(this.camSmooth,jt.cam().x,endCamX);
  
  //cam y
  var endCamY=this.y+(this.h/2)-camH/2;
  jt.cam().y=jt.lerp(this.camSmooth,jt.cam().y,endCamY);

  jt.cam().w=camW;
  jt.cam().h=camH;  
  
	//jte.draw(this);
  //show fuel on top
  var fuelPercent=(this.fuel/this.fuelMax);
  fuelPercent=jt.stay(fuelPercent,0,1);
  var border=2;
  var w=30;
  var h=10;  
  jt.rect(this.x+this.w/2-w/2,this.y-this.h*0.75,w,h,"black")
  jt.rect(this.x+border+this.w/2-w/2,this.y-this.h*0.75+border,(w-border*2)*fuelPercent,h-border*2,"red")  
  
  if(this.dir==-1){
   	jt.scale(-1,1,this.x,this.y,this.w,this.h) 
  }
  if(ground){
    if(walking){
      jt.anim(this.sprite+"Walk",this.x,this.y,this.w,this.h)
    }else{
      state="Idle";
      jt.image(this.sprite+"Idle",this.x,this.y,this.w,this.h,)
    }
   	
  }else{
    if(state!="Fuel"){state="Air";}
    //state="Air";
    jt.image(this.sprite+"Air",this.x,this.y,this.w,this.h) 
  }
  
  if(this.dir==-1){
   	jt.scale(-1,1,this.x,this.y,this.w,this.h) 
  } 
  
  
  //Draw players
  var client=jt.getObject("Client");
  
  client.clientObj.x=this.x;
  client.clientObj.y=this.y;    
  client.clientObj.dir=this.dir;      
  client.clientObj.state=state;      
  client.clientObj.sprite=this.sprite;    
  client.clientObj.time=jte.getObject("Time2").sec;      
  client.clientObj.fuel=jt.round(this.fuel); 
  
  var serverObjs=client.serverObjs;
  var keys=Object.keys(serverObjs);
  var len=Object.keys(serverObjs).length;
  var index=1;

  jt.fontSize(14);
  jt.alpha(0.5);
  for (var i = 0; i < len; i++) {
    var other = serverObjs[keys[i]];
    
    var inCam=false;
    other.w=this.w;
    other.h=this.h;    
    var cam={x:jt.cam().x,y:jt.cam().y,w:jt.cam().w,h:jt.cam().h}
    if(jt.cRect(other,cam)){
      inCam=true;
    }
    
    var dist=jt.round(jt.distP(this.x,this.y,other.x,other.y));
    
    var otherInfo=dist+"px";
    if(inCam){
      otherInfo=other.fuel+"%";
    }
    if(other.done){
     	otherInfo="Done in "+other.time+"s"; 
    }
    
    var fuelRatio=jt.round(other.fuel/this.fuelMax,2);
    
    
    if(inCam){
      if(other.state=="Fuel"){
        other.state="Air"; 
        var part=this.createFuel(other.x,other.y,other.dir)
        part.alpha=0.5;
        jt.addPart(part);
      }

      if(other.dir==-1){
        jt.scale(-1,1,other.x,other.y,this.w,this.h) 
      }
      if(other.state=="Walk"){
        jt.anim(other.sprite+other.state,other.x,other.y,this.w,this.h)
      }else{
        jt.image(other.sprite+other.state,other.x,other.y,this.w,this.h)
      }


      if(other.dir==-1){
        jt.scale(-1,1,other.x,other.y,this.w,this.h) 
      }



      jt.text(other.name,other.x+this.w/2,other.y-jt.fontSize()*2,"black","center");
      jt.text(otherInfo,other.x+this.w/2,other.y-jt.fontSize(),"black","center");   
      jt.rect(other.x,other.y-jt.fontSize()-4,other.w*fuelRatio,2,"red");
      jt.rect(other.x+other.w,other.y-jt.fontSize()-4,1,2,"black");      
    }else{
      var angle=jt.angleP(this.x,this.y,other.x,other.y);
      
      var angleX=jt.angleX(angle);
      var angleY=jt.angleY(angle);
      
      var posX=this.x+angleX*(jt.cam().w/2-25)
      var posY=this.y+angleY*(jt.cam().h/2-25)    
      
      jt.text(other.name,posX,posY-jt.fontSize(),"black","center");
      jt.text(otherInfo,posX,posY,"black","center"); 
      
      jt.rect(posX-other.w/2,posY-4,other.w*fuelRatio,2,"red");
      jt.rect(posX+other.w/2,posY-4,1,2,"black"); 
      
      jt.image("arrow",posX-5,posY+jt.fontSize(),10,10,angle);
    }
  }
  jt.alpha(1);
  
  jt.drawPart();
  
};obj.JTEcode=["/*You can put functions here*/","obj.grav=0.4;","obj.speed=0.5;","obj.speedMax=2;","obj.jump=6;","","obj.sprite=\"guy\";","","obj.vX=0;","obj.vY=0;","obj.maxVY=30;","obj.maxGravVY=8;","obj.frictionX=0.25;","obj.frictionXAir=0.2;","obj.bumperX=10;","obj.bumperY=10;","","obj.addX=0;","obj.addY=0;","","obj.dir=1;","","obj.fallingBuffer=0;","obj.maxJumpBuffer=5;","","obj.fuel=0;","obj.fuelMax=100;","obj.fuelRate=0;","obj.fuelUse=0.9;","obj.fuelForce=1;","obj.fuelRow=0;","obj.fuelRowMax=30;","obj.fuelYMax=2;","","obj.camW=400;","obj.camH=300;","obj.camSmooth=0.25;","","obj.moved=false;","","obj.createFuel=function(x,y,dir){","  var part={};","  part.x=x+jt.random(this.w/4,this.w*3/4)-dir*this.w/4;","  part.y=y+this.h-4;","  part.w=5;","  part.h=5;","  part.wRate=-0.2;","  part.hRate=-0.2;      ","  part.vX=jt.random(-0.4,0.4,0.1);","  part.vY=jt.random(0.5,2,0.1)","  var rC=jt.random(0,155,1);","  part.c=[jt.random(200,255,1),rC,rC]","  part.cRate=[-4,rC/3,rC/2];","  return part;","}"];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","  jt.volume(0.2)","  //jt.stopPlay(\"descent\");","  ","\tthis.fuel=this.fuelMax;","  ","  jt.cam().w=this.camW;","  jt.cam().h=this.camH;","  ","  this.maxGravVY=this.jump+this.fuelForce;","  ","  jt.debug(false);"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t//key check","  jt.alpha(1);","  var state=\"Walk\";","  var left=jt.kCheck(\"left\");","  var right=jt.kCheck(\"right\");  ","  var up=jt.kPress(\"z\") || jt.pPress(\"a\");","  var upCheck=jt.kCheck(\"x\") || jt.pCheck(\"x\");","  ","  var drop=jt.kCheck(\"c\") || jt.pCheck(\"b\");","  ","  if(jt.pConnected(0)){","    var pStick=jt.pAxes(0);","","    if(pStick[0]<=-0.75){left=true;}","    if(pStick[0]>=0.75){right=true;}","  }","  ","  //if(jt.kPress(\"r\")){this.respawn()};","  ","  //ground check","  var walls=jte.getObjects([\"Wall\"],jte.getView());","  var checks=jte.getObjects([\"Check\"],jte.getView());  ","  var bumpers=jte.getObjects([\"Bumper\"],jte.getView());","  var kills=jte.getObjects([\"Kill\"],jte.getView());  ","  ","  ","  //checkpoints","  if(jt.debug()){","    for(var i=0;i<20;i++){","      var plus=false;","      if(i>=10){","         plus=true;","      }","      var pressed=false;","      if(plus){","        if(jt.kPress((i-10)) && jt.kCheck(\"shift\")){","          pressed=true; ","        }","      }else{","        if(jt.kPress(i) && !jt.kCheck(\"shift\")){","          pressed=true; ","        }","      }","      if(pressed){","        if(i<checks.length){","          this.x=checks[i].x;","          this.y=checks[i].y;        ","          this.vX=0;","          this.vY=0;     ","          var endCamX=this.x+(this.w/2)-this.camW/2;","          var endCamY=this.y+(this.h/2)-this.camH/2;","          jt.cam().x=endCamX;","          jt.cam().y=endCamY;   ","          jt.cam().w=this.camW;","          jt.cam().h=this.camH;        ","        }","      }","    }","  }","  ","  ","  var cObj={x:this.x,y:this.y,w:this.w,h:this.h}","  ","  cObj.y+=1;","  var ground=false;","  for(var i=0;i<walls.length;i++){","   \tif(jt.cRect(cObj,walls[i])){","      ground=true; ","      if(walls[i].tags.indexOf(\"Refill\")!=-1){","        if(this.fuel<this.fuelMax-1){jt.stopPlay(\"refill\")}","        this.fuel=this.fuelMax; ","      }else if(walls[i].name==\"End\"){","        jte.getObject(\"Time2\").end=true;","        jte.getObject(\"Time2\").attr.text=\"Final time: \"+jte.getObject(\"Time2\").sec;","        jt.getObject(\"Client\").clientObj.done=true;","      }","    }","  }","  cObj.y-=1;"," ","  ","  if(ground){","    this.fallingBuffer=0;","  }else{","    //falls","    this.fallingBuffer++;","    this.vY+=this.grav;","    if(this.vY>this.maxVY){this.vY=this.maxVY}","  }","  ","  //jump","  if(up && this.fallingBuffer<=this.maxJumpBuffer){","    jt.stopPlay(\"jump2\")","    this.vY=-this.jump;","    this.fallingBuffer=this.maxJumpBuffer+1;","    ","  }","  ","  if(jt.kPress(\"space\") && jt.debug()){","   \tthis.vY=-20; ","    this.vX+=20*this.dir;","  }","  ","  if(upCheck){","    if(this.fuel>=this.fuelUse){","      this.fuel-=this.fuelUse;","      if(this.vY>-this.fuelYMax){","        this.vY-=this.fuelForce;","        if(this.vY<-this.fuelYMax){","         \tthis.vY=-this.fuelYMax; ","        }","      }else{","        this.vY-=this.grav/2;","      }","      /*this.vY-=this.fuelForce;","      if(this.vY<-this.fuelYMax){","        if(this.vY<-this.fuelYMax-this.fuelForce){","          this.vY+=this.fuelForce;","          this.vY-=this.grav;","        }else{","          this.vY=-this.fuelYMax;","        }","      }*/","      if(jt.frames()%8==0 || this.fuelRow==0){","        jt.stopPlay(\"fire\");","      }","      //jt.volume(1);","      this.fuelRow++;","      ","      //add particles","      state=\"Fuel\";","      var part=this.createFuel(this.x,this.y,this.dir)","      jt.addPart(part);","    }else{","     \tthis.fuelRow-=2;  ","    }","  }else{","    this.fuelRow-=2; ","  }","  ","  this.fuel+=this.fuelRate;","  ","  var fuelManager=jt.getObject(\"FuelManager\");","  ","  if(drop && fuelManager.sendFuel<=0 && this.fuel>=this.fuelMax*fuelManager.fuelRatio){","    fuelManager.sendFuel=fuelManager.sendFuelMax;","    this.fuel-=this.fuelMax*fuelManager.fuelRatio;","    if(this.fuel<0){this.fuel=0}","    jt.stopPlay(\"refill\")","    //Add fuel","    fuelManager.addFuel(this.x+this.w/2-5,this.y,this.dir);","  }","  ","  this.fuel=jt.stay(this.fuel,0,this.fuelMax);","  ","  //update fuel","  jte.getObject(\"Fuelbar\").w=(this.fuel/this.fuelMax)*100;","  ","  ","  //apply horizontal speed","  var walking=false;","  var bDir=this.dir;","  var friction=this.frictionX;","  if(!ground){","   \tfriction=this.frictionXAir; ","  }","  if(this.vX>friction){this.vX-=friction}","  else if(this.vX<-friction){this.vX+=friction}  ","  else{this.vX=0;}    ","  ","  if(left){","    if(this.vX>-this.speedMax){","      this.vX-=this.speed;","      if(this.vX<-this.speedMax){","       \tthis.vX=-this.speedMax; ","      }","    }","    ","    this.dir=-1;","    walking=true;","  }","  if(right){","    if(this.vX<this.speedMax){","      this.vX+=this.speed;","      if(this.vX>this.speedMax){","       \tthis.vX=this.speedMax; ","      }","    }","    ","    this.dir=1;","    walking=true;","  }","  if(left && right){this.dir=bDir;walking=false;}","  ","  //killed?","  cObj.x+=this.vX;","  cObj.y+=this.vY;  ","  for(var i=0;i<kills.length;i++){","   \tif(jt.cRect(cObj,kills[i]) && !wall){","      \tthis.respawn();","     \t\tbreak;","    }","  }","  //Check bumpers","  var bumper=false;","  for(var i=0;i<bumpers.length;i++){","    var circle={x:bumpers[i].x,y:bumpers[i].y,d:bumpers[i].w,c:[0,0,255,0.5]};","    jt.shape(circle)","   \tif(jt.cRect(cObj,bumpers[i]) && !bumper){","      var circle={x:bumpers[i].x,y:bumpers[i].y,d:bumpers[i].w};","      var mX=cObj.x+cObj.w/2;","      var mY=cObj.y+cObj.h/2;","      var mCX=circle.x+circle.d/2;","      var mCY=circle.y+circle.d/2;","      ","      if(jt.cRectCircle(cObj,circle)){","        jt.stopPlay(\"jump\")","        bumper=true;","        if(mX<mCX-circle.d/3){","          //left","          this.addX=-this.bumperX;","        }else if(mX>mCX+circle.d/3){","          //right","          this.addX=this.bumperX","        }else{","         \tthis.addY=-this.bumperY;","        }","        if(mY<mCY-circle.d/3){","          //up","          this.addY=-this.bumperY;","        }else if(mY>mCY+circle.d/3){","          //down","          this.addY=this.bumperY;","        }","      }","    }","  }","  ","  cObj.x-=this.vX;","  cObj.y-=this.vY; ","  ","  ","  if(this.addX!=0){","   \tthis.vX=this.addX ","    this.addX=0;","  }","  if(this.addY!=0){","   \tthis.vY=this.addY ","    this.addY=0;","  }","  ","  //horizontal collisions ","  cObj.x+=this.vX;","  var wall=false;","  for(var i=0;i<walls.length;i++){","   \tif(jt.cRect(cObj,walls[i]) && !wall){","     \twall=true;","      if(walls[i].tags.indexOf(\"Refill\")!=-1){","        if(this.fuel<this.fuelMax-1){jt.stopPlay(\"refill\")}","        this.fuel=this.fuelMax; ","      }","","      if(this.vX>=0){","        this.x=walls[i].x-this.w;","        this.vX=0;","      }else{","        this.x=walls[i].x+walls[i].w;","        this.vX=0;","      }","    }","  }","  cObj.x-=this.vX;","  ","  //stay in game","  var borderX=jte.getObject(\"BorderX2\");","  this.x+=this.vX;","  if(this.x<borderX.x){this.x=borderX.x;}","  if(this.x+this.w>borderX.w){this.x=borderX.w-this.w;}  ","  ","  cObj.x=this.x;","  ","  //vertical collisions","  cObj.y+=this.vY;","  wall=false;","  for(var i=0;i<walls.length;i++){","   \tif(jt.cRect(cObj,walls[i]) && !wall){","     \twall=true;","      if(walls[i].tags.indexOf(\"Refill\")!=-1){","        if(this.fuel<this.fuelMax-1){jt.stopPlay(\"refill\")}","        this.fuel=this.fuelMax; ","      }","","      if(this.vY>=0){","        this.y=walls[i].y-this.h;","        this.vY=0;","      }else{","        this.y=walls[i].y+walls[i].h;","        this.vY=0;","      }","      ","    }","  }","  cObj.y-=this.vY;","  ","  //stay in game","  var borderY=jte.getObject(\"BorderY2\");","  this.y+=this.vY;","  if(this.y<borderY.y){this.y=borderY.y;}","  if(this.y+this.h>jt.h()){this.y=jt.h()-this.h;}  ","  ","  ","  //time starting:","  if(!this.moved){","   \tif(left || right){","     \tjte.getObject(\"Time2\").start=true;","      this.moved=true;","    }","  }","  ","  //camera","  if(this.fuelRow>this.fuelRowMax){","   \tthis.fuelRow=this.fuelRowMax; ","  }","   if(this.fuelRow<0){","   \tthis.fuelRow=0; ","  }","  ","  var camW=jt.lerp(this.camSmooth,jt.cam().w,this.camW+(this.fuelRow*2));","  var camH=jt.lerp(this.camSmooth,jt.cam().h,this.camH+(this.fuelRow*2)*0.75);","  ","  //cam x","  var endCamX=this.x+(this.w/2)-camW/2;","  jt.cam().x=jt.lerp(this.camSmooth,jt.cam().x,endCamX);","  ","  //cam y","  var endCamY=this.y+(this.h/2)-camH/2;","  jt.cam().y=jt.lerp(this.camSmooth,jt.cam().y,endCamY);","","  jt.cam().w=camW;","  jt.cam().h=camH;  ","  ","\t//jte.draw(this);","  //show fuel on top","  var fuelPercent=(this.fuel/this.fuelMax);","  fuelPercent=jt.stay(fuelPercent,0,1);","  var border=2;","  var w=30;","  var h=10;  ","  jt.rect(this.x+this.w/2-w/2,this.y-this.h*0.75,w,h,\"black\")","  jt.rect(this.x+border+this.w/2-w/2,this.y-this.h*0.75+border,(w-border*2)*fuelPercent,h-border*2,\"red\")  ","  ","  if(this.dir==-1){","   \tjt.scale(-1,1,this.x,this.y,this.w,this.h) ","  }","  if(ground){","    if(walking){","      jt.anim(this.sprite+\"Walk\",this.x,this.y,this.w,this.h)","    }else{","      state=\"Idle\";","      jt.image(this.sprite+\"Idle\",this.x,this.y,this.w,this.h,)","    }","   \t","  }else{","    if(state!=\"Fuel\"){state=\"Air\";}","    //state=\"Air\";","    jt.image(this.sprite+\"Air\",this.x,this.y,this.w,this.h) ","  }","  ","  if(this.dir==-1){","   \tjt.scale(-1,1,this.x,this.y,this.w,this.h) ","  } ","  ","  ","  //Draw players","  var client=jt.getObject(\"Client\");","  ","  client.clientObj.x=this.x;","  client.clientObj.y=this.y;    ","  client.clientObj.dir=this.dir;      ","  client.clientObj.state=state;      ","  client.clientObj.sprite=this.sprite;    ","  client.clientObj.time=jte.getObject(\"Time2\").sec;      ","  client.clientObj.fuel=jt.round(this.fuel); ","  ","  var serverObjs=client.serverObjs;","  var keys=Object.keys(serverObjs);","  var len=Object.keys(serverObjs).length;","  var index=1;","","  jt.fontSize(14);","  jt.alpha(0.5);","  for (var i = 0; i < len; i++) {","    var other = serverObjs[keys[i]];","    ","    var inCam=false;","    other.w=this.w;","    other.h=this.h;    ","    var cam={x:jt.cam().x,y:jt.cam().y,w:jt.cam().w,h:jt.cam().h}","    if(jt.cRect(other,cam)){","      inCam=true;","    }","    ","    var dist=jt.round(jt.distP(this.x,this.y,other.x,other.y));","    ","    var otherInfo=dist+\"px\";","    if(inCam){","      otherInfo=other.fuel+\"%\";","    }","    if(other.done){","     \totherInfo=\"Done in \"+other.time+\"s\"; ","    }","    ","    var fuelRatio=jt.round(other.fuel/this.fuelMax,2);","    ","    ","    if(inCam){","      if(other.state==\"Fuel\"){","        other.state=\"Air\"; ","        var part=this.createFuel(other.x,other.y,other.dir)","        part.alpha=0.5;","        jt.addPart(part);","      }","","      if(other.dir==-1){","        jt.scale(-1,1,other.x,other.y,this.w,this.h) ","      }","      if(other.state==\"Walk\"){","        jt.anim(other.sprite+other.state,other.x,other.y,this.w,this.h)","      }else{","        jt.image(other.sprite+other.state,other.x,other.y,this.w,this.h)","      }","","","      if(other.dir==-1){","        jt.scale(-1,1,other.x,other.y,this.w,this.h) ","      }","","","","      jt.text(other.name,other.x+this.w/2,other.y-jt.fontSize()*2,\"black\",\"center\");","      jt.text(otherInfo,other.x+this.w/2,other.y-jt.fontSize(),\"black\",\"center\");   ","      jt.rect(other.x,other.y-jt.fontSize()-4,other.w*fuelRatio,2,\"red\");","      jt.rect(other.x+other.w,other.y-jt.fontSize()-4,1,2,\"black\");      ","    }else{","      var angle=jt.angleP(this.x,this.y,other.x,other.y);","      ","      var angleX=jt.angleX(angle);","      var angleY=jt.angleY(angle);","      ","      var posX=this.x+angleX*(jt.cam().w/2-25)","      var posY=this.y+angleY*(jt.cam().h/2-25)    ","      ","      jt.text(other.name,posX,posY-jt.fontSize(),\"black\",\"center\");","      jt.text(otherInfo,posX,posY,\"black\",\"center\"); ","      ","      jt.rect(posX-other.w/2,posY-4,other.w*fuelRatio,2,\"red\");","      jt.rect(posX+other.w/2,posY-4,1,2,\"black\"); ","      ","      jt.image(\"arrow\",posX-5,posY+jt.fontSize(),10,10,angle);","    }","  }","  jt.alpha(1);","  ","  jt.drawPart();","  "];jte.objects.push(obj);var obj=new JTEObject(0,10,800,70,[0,0,0],0,1,'{"text":"Jetpack Journey","size":48,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Game2');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
  
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  ","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(200,-110,390,90,[127,127,127],0,1,'{"text":"Options","size":60,"align":"center","font":"Consolas"}',true,'','[""]',false,-1,'Options');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	jt.resize(800,600)
  jt.smoothing(false);
};obj.update=function(){	/*Update runs at the fps specified*/
	if(jt.kPress("escape")){
   	jte.setView("Start"); 
    jt.resize(800,600)
    jt.cam().x=0;
    jt.cam().y=0;    
    jt.cam().w=800;        
    jt.cam().h=600;            
  }
	//jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\tjt.resize(800,600)","  jt.smoothing(false);"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\tif(jt.kPress(\"escape\")){","   \tjte.setView(\"Start\"); ","    jt.resize(800,600)","    jt.cam().x=0;","    jt.cam().y=0;    ","    jt.cam().w=800;        ","    jt.cam().h=600;            ","  }","\t//jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(0,-90,240,70,[0,0,255],0,1,'{"text":"Client","size":64,"font":"Consolas","align":"left"}',true,'','[""]',false,-1,'Client');/*Attributes and methods go here*/
obj.socketId=undefined;

obj.fps=1000/30;

obj.clientObj={name:"",sprite:"",x:0,y:0,dir:1,fuel:0,time:0,state:"",done:false,playing:false,fuels:[]};
obj.serverObjs={};

obj.lobbies=[];

obj.updated=false;

obj.sent=false;
obj.sent2=false;
obj.inserted=false;

obj.highscores=[];

obj.updateCooldown=0;
obj.updateCooldownMax=2;

obj.started=undefined;
obj.playing=undefined;
obj.inviteSent=undefined;
obj.inviteReceived=undefined;

obj.playings=[];
obj.withs=[];
obj.received=[];
obj.receivedMax=[];

obj.isHost=false;
obj.host=undefined;

obj.index=0;

obj.socket = {
 	on:function(){
    
  },
  emit:function(){
    
  }
}

obj.connected=false;

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	if(window["io"]!==undefined){
    console.log("io exists");
    this.socket=io();
  }
  
  this.socket.on("connected",function(id,num){
    jt.getObject("Client").connected=true;
    jt.getObject("Client").socketId=id;    
    jt.getObject("Client").clientObj.name="Guest "+num;    
  });
  
  jt.mute(true);  
  
  this.pause=false;
  
  this.socket.on("getData",function(senderId,serverObj){
    jt.getObject("Client").serverObjs[senderId]=serverObj;
    jt.getObject("Client").updated=true;
    jt.getObject("Client").gotAData=true;
  })
  
  this.socket.on("chat message",function(msg,color){
    jt.getObject("Chat").messages.push(msg);
    jt.getObject("Chat").messagesC.push(color);    
  })
  
  this.socket.on("gotFuel",function(obj){
    var fuels=jt.getObject("Client").clientObj.fuels;
    for(var i=0;i<fuels.length;i++){
     	if(jt.cRect(fuels[i],obj)){
       	jt.getObject("Client").clientObj.fuels.splice(i,1);
        i--;
        continue;
      }
    }
  })
};obj.update=function(){	/*Update runs at the fps specified*/
  this.socket.on("disconnected",function(senderId){
    
    delete jt.getObject("Client").serverObjs[senderId];
  })
	
  if(this.updateCooldown<=0){
    
    if(this.connected){
      this.updateCooldown=this.updateCooldownMax;
      this.clientObj.playing=true;
      this.socket.emit("update",this.clientObj);
    }
  }else{
   	this.updateCooldown--; 
  }
  
	//jt.drawObject(this);
};obj.JTEcode=["/*Attributes and methods go here*/","obj.socketId=undefined;","","obj.fps=1000/30;","","obj.clientObj={name:\"\",sprite:\"\",x:0,y:0,dir:1,fuel:0,time:0,state:\"\",done:false,playing:false,fuels:[]};","obj.serverObjs={};","","obj.lobbies=[];","","obj.updated=false;","","obj.sent=false;","obj.sent2=false;","obj.inserted=false;","","obj.highscores=[];","","obj.updateCooldown=0;","obj.updateCooldownMax=2;","","obj.started=undefined;","obj.playing=undefined;","obj.inviteSent=undefined;","obj.inviteReceived=undefined;","","obj.playings=[];","obj.withs=[];","obj.received=[];","obj.receivedMax=[];","","obj.isHost=false;","obj.host=undefined;","","obj.index=0;","","obj.socket = {"," \ton:function(){","    ","  },","  emit:function(){","    ","  }","}","","obj.connected=false;",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\tif(window[\"io\"]!==undefined){","    console.log(\"io exists\");","    this.socket=io();","  }","  ","  this.socket.on(\"connected\",function(id,num){","    jt.getObject(\"Client\").connected=true;","    jt.getObject(\"Client\").socketId=id;    ","    jt.getObject(\"Client\").clientObj.name=\"Guest \"+num;    ","  });","  ","  jt.mute(true);  ","  ","  this.pause=false;","  ","  this.socket.on(\"getData\",function(senderId,serverObj){","    jt.getObject(\"Client\").serverObjs[senderId]=serverObj;","    jt.getObject(\"Client\").updated=true;","    jt.getObject(\"Client\").gotAData=true;","  })","  ","  this.socket.on(\"chat message\",function(msg,color){","    jt.getObject(\"Chat\").messages.push(msg);","    jt.getObject(\"Chat\").messagesC.push(color);    ","  })","  ","  this.socket.on(\"gotFuel\",function(obj){","    var fuels=jt.getObject(\"Client\").clientObj.fuels;","    for(var i=0;i<fuels.length;i++){","     \tif(jt.cRect(fuels[i],obj)){","       \tjt.getObject(\"Client\").clientObj.fuels.splice(i,1);","        i--;","        continue;","      }","    }","  })"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  this.socket.on(\"disconnected\",function(senderId){","    ","    delete jt.getObject(\"Client\").serverObjs[senderId];","  })","\t","  if(this.updateCooldown<=0){","    ","    if(this.connected){","      this.updateCooldown=this.updateCooldownMax;","      this.clientObj.playing=true;","      this.socket.emit(\"update\",this.clientObj);","    }","  }else{","   \tthis.updateCooldown--; ","  }","  ","\t//jt.drawObject(this);"];jte.objects.push(obj);var obj=new JTEObject(20,180,390,40,[0,0,0],0,1,'{"text":"Current username:","size":24,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Name');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	//jt.camActive(false);
  
  
};obj.update=function(){	/*Update runs at the fps specified*/
 	this.attr.text="Current username: "+jt.getObject("Client").clientObj.name;
  jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t//jt.camActive(false);","  ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/"," \tthis.attr.text=\"Current username: \"+jt.getObject(\"Client\").clientObj.name;","  jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(450,210,70,20,[0,0,0],0,1,'{"text":"Guy","size":16,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Obj403');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	//jt.camActive(false);
  
  
};obj.update=function(){	/*Update runs at the fps specified*/
  
  jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t//jt.camActive(false);","  ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  ","  jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(520,210,70,20,[0,0,0],0,1,'{"text":"Girl","size":16,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Obj404');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	//jt.camActive(false);
  
  
};obj.update=function(){	/*Update runs at the fps specified*/
  
  jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t//jt.camActive(false);","  ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  ","  jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(590,210,70,20,[0,0,0],0,1,'{"text":"Indiana","size":16,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Obj405');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	//jt.camActive(false);
  
  
};obj.update=function(){	/*Update runs at the fps specified*/
  
  jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t//jt.camActive(false);","  ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  ","  jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(660,210,70,20,[0,0,0],0,1,'{"text":"Miner","size":16,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Obj406');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	//jt.camActive(false);
  
  
};obj.update=function(){	/*Update runs at the fps specified*/
  
  jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t//jt.camActive(false);","  ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  ","  jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(200,440,390,40,[255,0,0],0,1,'{"text":"","size":24,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Error');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	//jt.camActive(false);
  
  
};obj.update=function(){	/*Update runs at the fps specified*/
 	//this.attr.text="Current username: "+jt.getObject("Client").playerName;
  jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t//jt.camActive(false);","  ","  "];obj.JTEupdate=["\t/*Update runs at the fps specified*/"," \t//this.attr.text=\"Current username: \"+jt.getObject(\"Client\").playerName;","  jte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,220,350,60,[127,127,127],0,1,'undefined',true,'Start','[""]',false,-1,'BtnChange');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
  if(jt.mIn(this)){
   	jte.getObject("BtnChange").c=[200,200,200]
  }else{
    jte.getObject("BtnChange").c=[127,127,127]
  }
  
  var keyboard=jte.getObject("keyboard");
  
  if(keyboard.finished){
    keyboard.finished=false;
     if(keyboard.str.trim()!=""){
    	jte.getObject("Client").clientObj.name=keyboard.str;
    }
  }
  
	if(jt.mPress(this) || jt.tPress(this)){
    keyboard.start("Write your username","");
  }
  
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","  if(jt.mIn(this)){","   \tjte.getObject(\"BtnChange\").c=[200,200,200]","  }else{","    jte.getObject(\"BtnChange\").c=[127,127,127]","  }","  ","  var keyboard=jte.getObject(\"keyboard\");","  ","  if(keyboard.finished){","    keyboard.finished=false;","     if(keyboard.str.trim()!=\"\"){","    \tjte.getObject(\"Client\").clientObj.name=keyboard.str;","    }","  }","  ","\tif(jt.mPress(this) || jt.tPress(this)){","    keyboard.start(\"Write your username\",\"\");","  }","  ","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,480,350,70,[127,127,127],0,1,'undefined',true,'Start','[""]',false,-1,'BtnConnect');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	if(jt.mIn(this)){
   	jte.getObject("BtnConnect").c=[200,200,200]
  }else{
    jte.getObject("BtnConnect").c=[127,127,127]
  }
	if(jt.mPress(this) || jt.tPress(this)){
    if(jt.getObject("Client").clientObj.name.trim()!=""){
      if(jt.mPress(this)){
        jte.setView("Fuelgame"); 
      }
    }else{
     jt.getObject("Error").attr.text="Username can't be empty !"; 
    }
  }
  
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\tif(jt.mIn(this)){","   \tjte.getObject(\"BtnConnect\").c=[200,200,200]","  }else{","    jte.getObject(\"BtnConnect\").c=[127,127,127]","  }","\tif(jt.mPress(this) || jt.tPress(this)){","    if(jt.getObject(\"Client\").clientObj.name.trim()!=\"\"){","      if(jt.mPress(this)){","        jte.setView(\"Fuelgame\"); ","      }","    }else{","     jt.getObject(\"Error\").attr.text=\"Username can't be empty !\"; ","    }","  }","  ","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(40,240,350,30,[0,0,0],0,1,'{"text":"Change username","size":24,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Obj1791');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(220,500,350,30,[0,0,0],0,1,'{"text":"Connect online","size":24,"align":"center","font":"Consolas"}',true,'Start','[""]',false,-1,'Obj1496');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jte.draw(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjte.draw(this);"];jte.objects.push(obj);var obj=new JTEObject(720,0,80,30,[0,0,0],0,1,'{"text":"v0.9","size":23,"font":"Consolas","align":"right"}',true,'Start','[""]',false,-1,'Obj16');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jt.drawObject(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjt.drawObject(this);"];jte.objects.push(obj);var obj=new JTEObject(540,230,30,60,[127,127,127],0,1,'{"img":"girlIdle","sX":0,"sY":0,"sW":10,"sH":20}',true,'Start','["Skin","girl"]',false,-1,'Obj399');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jt.drawObject(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjt.drawObject(this);"];jte.objects.push(obj);var obj=new JTEObject(470,230,30,60,[127,127,127],0,1,'{"img":"guyIdle","sX":0,"sY":0,"sW":10,"sH":20}',true,'Start','["Skin","guy"]',false,-1,'Obj400');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jt.drawObject(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjt.drawObject(this);"];jte.objects.push(obj);var obj=new JTEObject(610,230,30,60,[127,127,127],0,1,'{"img":"indianaIdle","sX":0,"sY":0,"sW":10,"sH":20}',true,'Start','["Skin","indiana"]',false,-1,'Obj401');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jt.drawObject(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjt.drawObject(this);"];jte.objects.push(obj);var obj=new JTEObject(680,230,30,60,[127,127,127],0,1,'{"img":"minerIdle","sX":0,"sY":0,"sW":10,"sH":20}',true,'Start','["Skin","miner"]',false,-1,'Obj402');/*Attributes and methods go here*/

;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	jt.drawObject(this);
};obj.JTEcode=["/*Attributes and methods go here*/",""];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tjt.drawObject(this);"];jte.objects.push(obj);var obj=new JTEObject(960,-100,310,90,[255,0,0],0,1,'{"text":"Keyboard","size":64,"font":"Consolas","align":"left"}',true,'Start','[""]',false,147,'keyboard');/*Attributes and methods go here*/
/* HOW TO USE

Link this script to the html

1: When you want to start the keyboard, call keyboard.start() in your update function
keyboard.start(msg,str,lines,size) has 4 params
msg: you can write the info message
str: you can insert a pre-written string in the input
lines: the max number lines (25 chars per line, 1 by default)
size: the font size (24 by default)

2: In your main update code, before the keyboard.start(), write something like this to get the input which is in keyboard.str:
if(keyboard.finished){
	keyboard.finished=false;
	this.str=keyboar.str;
}

3: At the end of your whole update/draw function call this to put a dark background and help make it pop-up:
if(keyboard.on){
	jt.bg([0,0,0,0.5])
}


*/

obj.on=false;
obj.msg="";
obj.st="";
obj.max=25;
obj.size=20;
obj.sizeDefault=20;
obj.lines=1;
	
obj.shift=false;
obj.shiftHold=false;
obj.num=false;
	
obj.iteration=0;
obj.backspaceTimer=0;
obj.backspaceTimerMax=15;
obj.backspaceInterval=2;
obj.waveI=0;
obj.waveX=0;
obj.waveY=0;
	
obj.frame=0;
obj.fps=60;
obj.interval=undefined;
	
obj.finished=false;
	
obj.start=function(msg,str,lines,size){
		this.finished=false;

		  this.msg=msg;
		  this.str=str;

		  if(this.msg===undefined){this.msg="Write here...";}
		  if(this.str===undefined){this.str="";}

		  this.shift=false;
		  this.num=false;
		  
		  if(lines!=undefined){
			this.lines=lines;
		  }else{
			this.lines=1;
		  }
		  
		  if(size!=undefined){
			this.size=size;
		  }else{
			this.size=this.sizeDefault; 
		  }
		  
		  this.max=25*this.lines;
			
		  this.backspaceTimer=0;
		  this.iteration=0;
		  this.waveI=Math.PI*2/this.fps;
		  this.waveX=0;
		  this.waveY=0;

		  this.on=true;
		  var context=this;
		  jt.pauseJt(true);
		  this.interval=setInterval(context.loop,1000/this.fps,context)
		  jt.camActive(false);
		  
		  jt.kRelease();
		  jt.release();
		  jt.restore();
		  this.update(context);
	}
obj.loop=function(context){
		context.up();
	}
obj.up=function(context){
		var jtFullH=jt.h()+jt.addH();
		jt.camActive(false);
		  if(this.iteration==0){
			jt.bg([0,0,0,0.5])
		  }
		  this.iteration++;
		  this.waveX+=this.waveI;
		  if(this.waveX>this.waveI*this.fps){
			this.waveX=this.waveI;
		  }
		  this.waveY=Math.sin(this.waveX)
		  this.waveYPos=(this.waveY+1)/2

		  //draw keyboard bg
		  var rect={x:0,y:jtFullH*2/3,w:jt.w(),h:jtFullH*1/3,c:[200,200,200]}

		  jt.rect(rect)

		  var keys=[
			["q","w","e","r","t","y","u","i","o","p"],
			["a","s","d","f","g","h","j","k","l"],
			["^","z","x","c","v","b","n","m","<="],
			["123","Space","Enter"],
		  ]

		  var nums=[
			[1,2,3],
			[4,5,6],
			[7,8,9],
			[".",0,"<="],
			["ABC","Space","Enter"]
		  ]

		  //choose the good keyboard
		  var num=false;
		  if(this.num){
			num=true;
		  }

		  if(this.num && jt.kPress(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])){
			num=false;
		  }else if(!this.num && jt.kCheck([0,1,2,3,4,5,6,7,8,9])){
			num=true;
		  }

		  if(num){
			keys=[];
			keys=nums;
			this.num=true;
		  }else{
			this.num=false;
		  }

		  //get spacing and width/height of the keyboard
		  var spacingW=jt.w()/100;
		  var spacingH=(jtFullH/100)*jt.ratio();
		  var keyboardW=jt.w();
		  var keyboardH=(jtFullH*1/3);
		  var startX=0;
		  var startY=jtFullH*2/3;

		  var kCheck=jt.kCheck();
		  var kPress=jt.kPress();

		  if(!jt.check()){
			this.backspaceTimer=0; 
		  }
		  
		  //Draw all keys
		  jt.font("Consolas",this.size);
		  var h=(keyboardH)/keys.length;
		  for(var y=0;y<keys.length;y++){
			var w=(keyboardW)/keys[y].length;
			for(var x=0;x<keys[y].length;x++){
			  var ww=w-spacingW*2;
			  var hh=h-spacingH*2;
			  var xx=startX+spacingW+x*w;
			  var yy=startY+spacingH+y*h;
			  var c=[255,255,255];
			  var btn={x:startX+x*w,y:startY+y*h,w:w,h:h};

			  if(jt.check(btn) || kCheck){
				if(kCheck){
				  var key=keys[y][x];
				  if(jt.kCheck(key)){
					c=[127,127,127];
				  }else{
					if(key=="^" && jt.kCheck("shift")){
					  c=[127,127,127];
					}else if(key=="<=" && jt.kCheck("backspace")){
					  c=[127,127,127];
					}else if(key=="123" && jt.kCheck([0,1,2,3,4,5,6,7,8,9])){
					  c=[127,127,127];
					}else if(key=="ABC" && jt.kCheck(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])){
					  c=[127,127,127];
					}else if(key=="Space" && jt.kCheck("space")){
					  c=[127,127,127];
					}else if(key=="Enter" && jt.kCheck("enter")){
					  c=[127,127,127];
					}
				  }
				}else{
				  c=[127,127,127];
				}

				if(jt.press(btn) || kPress || (jt.check(btn) && keys[y][x]=="<=")){
				  var key=keys[y][x];
				  var valid=true;
				  if(kPress){
					valid=false;
					if(jt.kPress(key)){
					  valid=true;
					}else{
					  if(key=="^" && jt.kPress("shift")){
						valid=true;
					  }else if(key=="<=" && jt.kPress("backspace")){
						valid=true;
					  }else if(key=="123" && jt.kPress([0,1,2,3,4,5,6,7,8,9])){
						valid=true;
					  }else if(key=="ABC" && jt.kPress(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])){
						valid=true;
					  }else if(key=="Space" && jt.kPress("space")){
						valid=true;
					  }else if(key=="Enter" && jt.kPress("enter")){
						valid=true;
					  }
					}
				  }
				  
				  
				  if(key!="^" && key!="<=" && key!="ABC" && key!="123" && key!="Space" && key!="Enter" && valid){
					var k=key;
					if(this.shift){
					  this.shift=false;
					  if(typeof k=="string"){
						k=k.toUpperCase();
					  }
					  
					}
					this.str+=k;
				  }else if(valid){
					if(key=="^"){
					  this.shift=!this.shift;
					}else if(key=="<="){
					  var checkInterval=false;
					  if(jt.check(btn)){
						this.backspaceTimer++;
						if(this.backspaceTimer>=this.backspaceTimerMax){
						  if(this.iteration%this.backspaceInterval==0){
							checkInterval=true;
						  }
						}
					  }else{
						this.backspaceTimer=0;
					  }
					  if(jt.press(btn) || kPress || checkInterval){
						 if(this.str.length>0){
						  this.str=this.str.slice(0,this.str.length-1);
						}
					  }
					 
					}else if(key=="123"){
					  this.num=true;
					}else if(key=="ABC"){
					  this.num=false;
					}else if(key=="Space"){
					  this.str+=" ";
					}else if(key=="Enter"){
					  this.finished=true;
					}
				  }
				  if(this.str.length>this.max){this.str=this.str.slice(0,this.max)}
				  if(valid){
					/*jt.mRelease();
					jt.tRelease();
					jt.release();*/
					jt.kRelease();
				  }
				}
			  }

			  if(keys[y][x]=="^"){
				if(this.shift){
				  c=[127,127,127];
				}
			  }

			  if(this.shift && keys[y][x]!="Space" && keys[y][x]!="Enter"){
				if(typeof keys[y][x]=="string"){
					keys[y][x]=keys[y][x].toUpperCase();
				}
			  }
			  jt.rect(xx,yy,ww,hh,c)
			  jt.text(keys[y][x],xx+ww/2,yy+hh/2-jt.fontSize()/2,"black","center")
			}
		  }

		  //show text
		  var textW=jt.w();
		  var textH=jt.fontSize()*4+10;
		  textH+=(jt.fontSize()+5)*(this.lines-1)
		  var textX=jt.w()/6;
		  var textY=jtFullH*(1/3)-textH/2;
		  jt.rectB(textX,textY,textW-textX*2,textH,[0,0,0],0,5)
		  jt.rect(textX,textY,textW-textX*2,textH,[200,200,200])
		  var writingH=((jt.fontSize()+5)*this.lines);
		  jt.rect(textX+spacingW,textY+textH-writingH-5,textW-spacingW*2-textX*2,writingH,[255,255,255])

		  jt.font("Consolas",this.size);
		  jt.text(this.msg,textX+spacingW*2,textY+10,"black","left",jt.fontSize(),0,36,jt.fontSize());
		  jt.text(this.str.slice(0,25),textX+spacingW*2,textY+textH-writingH,"black","left");
		  var lineH=0;
		  var strW=jt.textW(this.str.slice(0,25));
		  if(this.str.length>25){
			jt.text(this.str.slice(25,50),textX+spacingW*2,textY+textH-writingH+jt.fontSize(),"black","left");
			lineH=jt.fontSize();
			strW=jt.textW(this.str.slice(25,50));
		  }
		  if(this.str.length>50){
			jt.text(this.str.slice(50,75),textX+spacingW*2,textY+textH-writingH+jt.fontSize()*2,"black","left");
			lineH=jt.fontSize()*2;
			strW=jt.textW(this.str.slice(50,75));
		  }
		  if(this.str.length>75){
			jt.text(this.str.slice(75,100),textX+spacingW*2,textY+textH-writingH+jt.fontSize()*3,"black","left");
			lineH=jt.fontSize()*3;
			strW=jt.textW(this.str.slice(75,100));
		  }
		  
		  jt.alpha(this.waveYPos);
		  jt.rect(textX+spacingW*2+strW,textY+textH-writingH+(lineH),spacingW/2,jt.fontSize())
		  jt.alpha(1);
		  
		  if(jt.press()){
			if(!jt.press(textX,textY,textW,textH) && !jt.press(startX,startY,keyboardW,keyboardH)){
			  this.finished=true;
			  jt.release();
			}
		  }
		  
		  //remove mouse press
		  jt.mouse.press=[false,false,false,false,false]

		  //remove touch press
		  if(jt.touch.press==true){
			jt.touch.press=false;
		  }

		  
		  
		  if(jt.kPress("enter")){
			this.finished=true; 
		  }

		  if(this.finished){
			jt.mRelease();
			jt.tRelease();
			jt.release();
			clearInterval(this.interval);
			jt.pauseJt(false);
			this.on=false;
			return this.str;
		  }
		
	}
;
obj.setup=function(){	/*Setup runs once when the game starts*/
	
};obj.update=function(){	/*Update runs at the fps specified*/
	
	if(this.on){
    jt.bg([0,0,0,0.5])
  }
};obj.JTEcode=["/*Attributes and methods go here*/","/* HOW TO USE","","Link this script to the html","","1: When you want to start the keyboard, call keyboard.start() in your update function","keyboard.start(msg,str,lines,size) has 4 params","msg: you can write the info message","str: you can insert a pre-written string in the input","lines: the max number lines (25 chars per line, 1 by default)","size: the font size (24 by default)","","2: In your main update code, before the keyboard.start(), write something like this to get the input which is in keyboard.str:","if(keyboard.finished){","\tkeyboard.finished=false;","\tthis.str=keyboar.str;","}","","3: At the end of your whole update/draw function call this to put a dark background and help make it pop-up:","if(keyboard.on){","\tjt.bg([0,0,0,0.5])","}","","","*/","","obj.on=false;","obj.msg=\"\";","obj.st=\"\";","obj.max=25;","obj.size=20;","obj.sizeDefault=20;","obj.lines=1;","\t","obj.shift=false;","obj.shiftHold=false;","obj.num=false;","\t","obj.iteration=0;","obj.backspaceTimer=0;","obj.backspaceTimerMax=15;","obj.backspaceInterval=2;","obj.waveI=0;","obj.waveX=0;","obj.waveY=0;","\t","obj.frame=0;","obj.fps=60;","obj.interval=undefined;","\t","obj.finished=false;","\t","obj.start=function(msg,str,lines,size){","\t\tthis.finished=false;","","\t\t  this.msg=msg;","\t\t  this.str=str;","","\t\t  if(this.msg===undefined){this.msg=\"Write here...\";}","\t\t  if(this.str===undefined){this.str=\"\";}","","\t\t  this.shift=false;","\t\t  this.num=false;","\t\t  ","\t\t  if(lines!=undefined){","\t\t\tthis.lines=lines;","\t\t  }else{","\t\t\tthis.lines=1;","\t\t  }","\t\t  ","\t\t  if(size!=undefined){","\t\t\tthis.size=size;","\t\t  }else{","\t\t\tthis.size=this.sizeDefault; ","\t\t  }","\t\t  ","\t\t  this.max=25*this.lines;","\t\t\t","\t\t  this.backspaceTimer=0;","\t\t  this.iteration=0;","\t\t  this.waveI=Math.PI*2/this.fps;","\t\t  this.waveX=0;","\t\t  this.waveY=0;","","\t\t  this.on=true;","\t\t  var context=this;","\t\t  jt.pauseJt(true);","\t\t  this.interval=setInterval(context.loop,1000/this.fps,context)","\t\t  jt.camActive(false);","\t\t  ","\t\t  jt.kRelease();","\t\t  jt.release();","\t\t  jt.restore();","\t\t  this.update(context);","\t}","obj.loop=function(context){","\t\tcontext.up();","\t}","obj.up=function(context){","\t\tvar jtFullH=jt.h()+jt.addH();","\t\tjt.camActive(false);","\t\t  if(this.iteration==0){","\t\t\tjt.bg([0,0,0,0.5])","\t\t  }","\t\t  this.iteration++;","\t\t  this.waveX+=this.waveI;","\t\t  if(this.waveX>this.waveI*this.fps){","\t\t\tthis.waveX=this.waveI;","\t\t  }","\t\t  this.waveY=Math.sin(this.waveX)","\t\t  this.waveYPos=(this.waveY+1)/2","","\t\t  //draw keyboard bg","\t\t  var rect={x:0,y:jtFullH*2/3,w:jt.w(),h:jtFullH*1/3,c:[200,200,200]}","","\t\t  jt.rect(rect)","","\t\t  var keys=[","\t\t\t[\"q\",\"w\",\"e\",\"r\",\"t\",\"y\",\"u\",\"i\",\"o\",\"p\"],","\t\t\t[\"a\",\"s\",\"d\",\"f\",\"g\",\"h\",\"j\",\"k\",\"l\"],","\t\t\t[\"^\",\"z\",\"x\",\"c\",\"v\",\"b\",\"n\",\"m\",\"<=\"],","\t\t\t[\"123\",\"Space\",\"Enter\"],","\t\t  ]","","\t\t  var nums=[","\t\t\t[1,2,3],","\t\t\t[4,5,6],","\t\t\t[7,8,9],","\t\t\t[\".\",0,\"<=\"],","\t\t\t[\"ABC\",\"Space\",\"Enter\"]","\t\t  ]","","\t\t  //choose the good keyboard","\t\t  var num=false;","\t\t  if(this.num){","\t\t\tnum=true;","\t\t  }","","\t\t  if(this.num && jt.kPress([\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"])){","\t\t\tnum=false;","\t\t  }else if(!this.num && jt.kCheck([0,1,2,3,4,5,6,7,8,9])){","\t\t\tnum=true;","\t\t  }","","\t\t  if(num){","\t\t\tkeys=[];","\t\t\tkeys=nums;","\t\t\tthis.num=true;","\t\t  }else{","\t\t\tthis.num=false;","\t\t  }","","\t\t  //get spacing and width/height of the keyboard","\t\t  var spacingW=jt.w()/100;","\t\t  var spacingH=(jtFullH/100)*jt.ratio();","\t\t  var keyboardW=jt.w();","\t\t  var keyboardH=(jtFullH*1/3);","\t\t  var startX=0;","\t\t  var startY=jtFullH*2/3;","","\t\t  var kCheck=jt.kCheck();","\t\t  var kPress=jt.kPress();","","\t\t  if(!jt.check()){","\t\t\tthis.backspaceTimer=0; ","\t\t  }","\t\t  ","\t\t  //Draw all keys","\t\t  jt.font(\"Consolas\",this.size);","\t\t  var h=(keyboardH)/keys.length;","\t\t  for(var y=0;y<keys.length;y++){","\t\t\tvar w=(keyboardW)/keys[y].length;","\t\t\tfor(var x=0;x<keys[y].length;x++){","\t\t\t  var ww=w-spacingW*2;","\t\t\t  var hh=h-spacingH*2;","\t\t\t  var xx=startX+spacingW+x*w;","\t\t\t  var yy=startY+spacingH+y*h;","\t\t\t  var c=[255,255,255];","\t\t\t  var btn={x:startX+x*w,y:startY+y*h,w:w,h:h};","","\t\t\t  if(jt.check(btn) || kCheck){","\t\t\t\tif(kCheck){","\t\t\t\t  var key=keys[y][x];","\t\t\t\t  if(jt.kCheck(key)){","\t\t\t\t\tc=[127,127,127];","\t\t\t\t  }else{","\t\t\t\t\tif(key==\"^\" && jt.kCheck(\"shift\")){","\t\t\t\t\t  c=[127,127,127];","\t\t\t\t\t}else if(key==\"<=\" && jt.kCheck(\"backspace\")){","\t\t\t\t\t  c=[127,127,127];","\t\t\t\t\t}else if(key==\"123\" && jt.kCheck([0,1,2,3,4,5,6,7,8,9])){","\t\t\t\t\t  c=[127,127,127];","\t\t\t\t\t}else if(key==\"ABC\" && jt.kCheck([\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"])){","\t\t\t\t\t  c=[127,127,127];","\t\t\t\t\t}else if(key==\"Space\" && jt.kCheck(\"space\")){","\t\t\t\t\t  c=[127,127,127];","\t\t\t\t\t}else if(key==\"Enter\" && jt.kCheck(\"enter\")){","\t\t\t\t\t  c=[127,127,127];","\t\t\t\t\t}","\t\t\t\t  }","\t\t\t\t}else{","\t\t\t\t  c=[127,127,127];","\t\t\t\t}","","\t\t\t\tif(jt.press(btn) || kPress || (jt.check(btn) && keys[y][x]==\"<=\")){","\t\t\t\t  var key=keys[y][x];","\t\t\t\t  var valid=true;","\t\t\t\t  if(kPress){","\t\t\t\t\tvalid=false;","\t\t\t\t\tif(jt.kPress(key)){","\t\t\t\t\t  valid=true;","\t\t\t\t\t}else{","\t\t\t\t\t  if(key==\"^\" && jt.kPress(\"shift\")){","\t\t\t\t\t\tvalid=true;","\t\t\t\t\t  }else if(key==\"<=\" && jt.kPress(\"backspace\")){","\t\t\t\t\t\tvalid=true;","\t\t\t\t\t  }else if(key==\"123\" && jt.kPress([0,1,2,3,4,5,6,7,8,9])){","\t\t\t\t\t\tvalid=true;","\t\t\t\t\t  }else if(key==\"ABC\" && jt.kPress([\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"])){","\t\t\t\t\t\tvalid=true;","\t\t\t\t\t  }else if(key==\"Space\" && jt.kPress(\"space\")){","\t\t\t\t\t\tvalid=true;","\t\t\t\t\t  }else if(key==\"Enter\" && jt.kPress(\"enter\")){","\t\t\t\t\t\tvalid=true;","\t\t\t\t\t  }","\t\t\t\t\t}","\t\t\t\t  }","\t\t\t\t  ","\t\t\t\t  ","\t\t\t\t  if(key!=\"^\" && key!=\"<=\" && key!=\"ABC\" && key!=\"123\" && key!=\"Space\" && key!=\"Enter\" && valid){","\t\t\t\t\tvar k=key;","\t\t\t\t\tif(this.shift){","\t\t\t\t\t  this.shift=false;","\t\t\t\t\t  if(typeof k==\"string\"){","\t\t\t\t\t\tk=k.toUpperCase();","\t\t\t\t\t  }","\t\t\t\t\t  ","\t\t\t\t\t}","\t\t\t\t\tthis.str+=k;","\t\t\t\t  }else if(valid){","\t\t\t\t\tif(key==\"^\"){","\t\t\t\t\t  this.shift=!this.shift;","\t\t\t\t\t}else if(key==\"<=\"){","\t\t\t\t\t  var checkInterval=false;","\t\t\t\t\t  if(jt.check(btn)){","\t\t\t\t\t\tthis.backspaceTimer++;","\t\t\t\t\t\tif(this.backspaceTimer>=this.backspaceTimerMax){","\t\t\t\t\t\t  if(this.iteration%this.backspaceInterval==0){","\t\t\t\t\t\t\tcheckInterval=true;","\t\t\t\t\t\t  }","\t\t\t\t\t\t}","\t\t\t\t\t  }else{","\t\t\t\t\t\tthis.backspaceTimer=0;","\t\t\t\t\t  }","\t\t\t\t\t  if(jt.press(btn) || kPress || checkInterval){","\t\t\t\t\t\t if(this.str.length>0){","\t\t\t\t\t\t  this.str=this.str.slice(0,this.str.length-1);","\t\t\t\t\t\t}","\t\t\t\t\t  }","\t\t\t\t\t ","\t\t\t\t\t}else if(key==\"123\"){","\t\t\t\t\t  this.num=true;","\t\t\t\t\t}else if(key==\"ABC\"){","\t\t\t\t\t  this.num=false;","\t\t\t\t\t}else if(key==\"Space\"){","\t\t\t\t\t  this.str+=\" \";","\t\t\t\t\t}else if(key==\"Enter\"){","\t\t\t\t\t  this.finished=true;","\t\t\t\t\t}","\t\t\t\t  }","\t\t\t\t  if(this.str.length>this.max){this.str=this.str.slice(0,this.max)}","\t\t\t\t  if(valid){","\t\t\t\t\t/*jt.mRelease();","\t\t\t\t\tjt.tRelease();","\t\t\t\t\tjt.release();*/","\t\t\t\t\tjt.kRelease();","\t\t\t\t  }","\t\t\t\t}","\t\t\t  }","","\t\t\t  if(keys[y][x]==\"^\"){","\t\t\t\tif(this.shift){","\t\t\t\t  c=[127,127,127];","\t\t\t\t}","\t\t\t  }","","\t\t\t  if(this.shift && keys[y][x]!=\"Space\" && keys[y][x]!=\"Enter\"){","\t\t\t\tif(typeof keys[y][x]==\"string\"){","\t\t\t\t\tkeys[y][x]=keys[y][x].toUpperCase();","\t\t\t\t}","\t\t\t  }","\t\t\t  jt.rect(xx,yy,ww,hh,c)","\t\t\t  jt.text(keys[y][x],xx+ww/2,yy+hh/2-jt.fontSize()/2,\"black\",\"center\")","\t\t\t}","\t\t  }","","\t\t  //show text","\t\t  var textW=jt.w();","\t\t  var textH=jt.fontSize()*4+10;","\t\t  textH+=(jt.fontSize()+5)*(this.lines-1)","\t\t  var textX=jt.w()/6;","\t\t  var textY=jtFullH*(1/3)-textH/2;","\t\t  jt.rectB(textX,textY,textW-textX*2,textH,[0,0,0],0,5)","\t\t  jt.rect(textX,textY,textW-textX*2,textH,[200,200,200])","\t\t  var writingH=((jt.fontSize()+5)*this.lines);","\t\t  jt.rect(textX+spacingW,textY+textH-writingH-5,textW-spacingW*2-textX*2,writingH,[255,255,255])","","\t\t  jt.font(\"Consolas\",this.size);","\t\t  jt.text(this.msg,textX+spacingW*2,textY+10,\"black\",\"left\",jt.fontSize(),0,36,jt.fontSize());","\t\t  jt.text(this.str.slice(0,25),textX+spacingW*2,textY+textH-writingH,\"black\",\"left\");","\t\t  var lineH=0;","\t\t  var strW=jt.textW(this.str.slice(0,25));","\t\t  if(this.str.length>25){","\t\t\tjt.text(this.str.slice(25,50),textX+spacingW*2,textY+textH-writingH+jt.fontSize(),\"black\",\"left\");","\t\t\tlineH=jt.fontSize();","\t\t\tstrW=jt.textW(this.str.slice(25,50));","\t\t  }","\t\t  if(this.str.length>50){","\t\t\tjt.text(this.str.slice(50,75),textX+spacingW*2,textY+textH-writingH+jt.fontSize()*2,\"black\",\"left\");","\t\t\tlineH=jt.fontSize()*2;","\t\t\tstrW=jt.textW(this.str.slice(50,75));","\t\t  }","\t\t  if(this.str.length>75){","\t\t\tjt.text(this.str.slice(75,100),textX+spacingW*2,textY+textH-writingH+jt.fontSize()*3,\"black\",\"left\");","\t\t\tlineH=jt.fontSize()*3;","\t\t\tstrW=jt.textW(this.str.slice(75,100));","\t\t  }","\t\t  ","\t\t  jt.alpha(this.waveYPos);","\t\t  jt.rect(textX+spacingW*2+strW,textY+textH-writingH+(lineH),spacingW/2,jt.fontSize())","\t\t  jt.alpha(1);","\t\t  ","\t\t  if(jt.press()){","\t\t\tif(!jt.press(textX,textY,textW,textH) && !jt.press(startX,startY,keyboardW,keyboardH)){","\t\t\t  this.finished=true;","\t\t\t  jt.release();","\t\t\t}","\t\t  }","\t\t  ","\t\t  //remove mouse press","\t\t  jt.mouse.press=[false,false,false,false,false]","","\t\t  //remove touch press","\t\t  if(jt.touch.press==true){","\t\t\tjt.touch.press=false;","\t\t  }","","\t\t  ","\t\t  ","\t\t  if(jt.kPress(\"enter\")){","\t\t\tthis.finished=true; ","\t\t  }","","\t\t  if(this.finished){","\t\t\tjt.mRelease();","\t\t\tjt.tRelease();","\t\t\tjt.release();","\t\t\tclearInterval(this.interval);","\t\t\tjt.pauseJt(false);","\t\t\tthis.on=false;","\t\t\treturn this.str;","\t\t  }","\t\t","\t}"];obj.JTEsetup=["\t/*Setup runs once when the game starts*/","\t"];obj.JTEupdate=["\t/*Update runs at the fps specified*/","\t","\tif(this.on){","    jt.bg([0,0,0,0.5])","  }"];jte.objects.push(obj);
			for(var i=0;i<this.objects.length;i++){
				if(this.objects[i].attr!='undefined'){
					this.objects[i].attr=JSON.parse(this.objects[i].attr);
				}else{
					this.objects[i].attr=undefined;
				}
				this.objects[i].tags=JSON.parse(this.objects[i].tags);
				//this.objects[i].setup();
			}
		},

		//setup is called when the game has finished loading
		setup:function(){
			this.originalW=this.w;
			this.originalH=this.h;
			//jt.fullscreen();
			jt.baseline("hanging");
			jt.pixelRate(this.pR);

			if(this.title!=""){document.title=this.title;}

			jt.resize(this.w*this.pR,this.h*this.pR);
			//can.style.width=this.w;
			//can.style.height=this.h;
			jt.canvas.ctx.scale(this.pR,this.pR);

			jt.cam().w=this.w*this.pR;
			jt.cam().h=this.h*this.pR;

			jt.smoothing(false);

			//eval codes
			if(this.code!=undefined){
				eval(this.code);
			}
			
			this.initialize();

			this.setups();
		},
		setups:function(){
			for(var i=0;i<this.objects.length;i++){
				if(this.objects[i].setup!=undefined){
					this.objects[i].setup();
				}
			}
		},
		//update is called every frame
		update:function(){
			jt.bg(this.bg);
			if(this.tileLayer<this.objects.length){
				for(var i=0;i<this.tileLayer;i++){
					if(this.objects[i].view==jte.view || this.objects[i].view==""){
						if(this.objects[i].update!=undefined){
							this.objects[i].update();
						}
					}
				}
			}else{
				for(var i=0;i<this.objects.length;i++){
					if(this.objects[i].view==jte.view || this.objects[i].view==""){
						if(this.objects[i].update!=undefined){
							this.objects[i].update();
						}
					}
				}
			}
			
			//Draw tiles
			if(this.tiles[jte.view]!=undefined){
				jt.camactive(true);
				
				//Draw only close chunks
				var chunkX=Math.floor(jt.cam().x/jte.w)*jte.w;
				var chunkY=Math.floor(jt.cam().y/jte.h)*jte.h;
				
				var chunkX2=Math.ceil((jt.cam().x+jt.cam().w)/jte.w)*jte.w;
				var chunkY2=Math.ceil((jt.cam().y+jt.cam().h)/jte.h)*jte.h;
				
				var chunkW=(chunkX2-chunkX)/jte.w;
				var chunkH=(chunkY2-chunkY)/jte.h;
				
				var chunkXs=[];
				var chunkYs=[];
				
				for(var yy=0;yy<chunkH;yy++){
					for(var xx=0;xx<chunkW;xx++){
						chunkXs.push(chunkX+(xx*jte.w));
						chunkYs.push(chunkY+(yy*jte.h));
					}
				}
				for(var chunkIndex in this.tiles[this.view]){
					if(chunkXs.indexOf(this.tiles[this.view][chunkIndex].x)!=-1 && chunkYs.indexOf(this.tiles[this.view][chunkIndex].y)!=-1){
						var tilesets=this.tiles[this.view][chunkIndex].tilesets;
						for(var tilesetIndex in tilesets){
							//Tileset individual params
							var tileset=tilesets[tilesetIndex];
							var img=tileset.img;
							var unit=tileset.unit;
							
							//Tileset 
							var tileW=this.tilesets[img].tileW
							var tileH=this.tilesets[img].tileH
							var tileOffX=this.tilesets[img].tileOffX
							var tileOffY=this.tilesets[img].tileOffY
							
							//Draw all tiles
							var tiles=tileset.tiles;
							for(var tileIndex in tiles){
								var tile=tiles[tileIndex];
								jt.image(img,tile[0],tile[1],unit,unit,0,tile[2]*tileW+tileOffX,tile[3]*tileH+tileOffY,tileW,tileH);
							}
						}
					}
				}
			}
			
			//Objects on top
			if(this.tileLayer<this.objects.length){
				for(var i=this.tileLayer;i<this.objects.length;i++){
					if(this.objects[i].view==jte.view || this.objects[i].view==""){
						if(this.objects[i].update!=undefined){
							this.objects[i].update();
						}
					}
				}
			}
		},

		//getObject
		getObject:function(name,view){
			var found=undefined;
			if(view==undefined){
				for(var i=0;i<this.objects.length;i++){
					if(this.objects[i].name==name){
						found=this.objects[i];
						break;
					}
				}
			}else{
				for(var i=0;i<this.objects.length;i++){
					if(this.objects[i].name==name && this.objects[i].view==view){
						found=this.objects[i];
						break;
					}
				}
			}
			return found;
		},

		//getObjects
		getObjects:function(tags,view,and){
			var found=[];
			if(tags==undefined){
				if(view==undefined){
					for(var i=0;i<this.objects.length;i++){
						found.push(this.objects[i]);
					}
				}else{
					for(var i=0;i<this.objects.length;i++){
						if(this.objects[i].view==view){
							found.push(this.objects[i]);
						}
					}
				}
				return found;
			}else{
				if(view==undefined){
					for(var i=0;i<this.objects.length;i++){
						for(var j=0;j<this.objects[i].tags.length;j++){
							if(tags.indexOf(this.objects[i].tags[j])!=-1){
								found.push(this.objects[i]);
								break;
							}
						}
					}
				}else{
					if(and==undefined || and==false){
						for(var i=0;i<this.objects.length;i++){
							for(var j=0;j<this.objects[i].tags.length;j++){
								if(this.objects[i].view==view){
									if(tags.indexOf(this.objects[i].tags[j])!=-1){
										found.push(this.objects[i]);
										break;
									}
								}
							}
						}
					}else if(and==true){
						for(var i=0;i<this.objects.length;i++){
							var tag=0;
							for(var j=0;j<this.objects[i].tags.length;j++){
								if(this.objects[i].view==view){
									if(tags.indexOf(this.objects[i].tags[j])!=-1){
										tag++;
										if(tag==tags.length){
											found.push(this.objects[i]);
											break;
										}
									}else{
										break;
									}
								}else{
									break;
								}
							}
						}
					}
				}
				return found;
			}
		},

		//delObject
		delObject:function(name,view){
			var found=false;
			if(view==undefined){
				for(var i=0;i<this.objects.length;i++){
					if(this.objects[i].name==name){
						found=true;
						if(i<=this.tileLayer){this.tileLayer--;}
						this.objects.splice(i,1);
						break;
					}
				}
			}else{
				for(var i=0;i<this.objects.length;i++){
					if(this.objects[i].name==name && this.objects[i].view==view){
						found=true;
						if(i<=this.tileLayer){this.tileLayer--;}
						this.objects.splice(i,1);
						break;
					}
				}
			}
			return found;
		},
		
		
		//delObjects
		delObjects:function(tags,view,and){
			var found=[];
			if(tags==undefined){
				if(view==undefined){
					for(var i=0;i<this.objects.length;i++){
						found.push(this.objects[i].name);
					}
				}else{
					for(var i=0;i<this.objects.length;i++){
						if(this.objects[i].view==view){
							found.push(this.objects[i].name);
						}
					}
				}
			}else{
				if(view==undefined){
					for(var i=0;i<this.objects.length;i++){
						for(var j=0;j<this.objects[i].tags.length;j++){
							if(tags.indexOf(this.objects[i].tags[j])!=-1){
								found.push(this.objects[i].name);
								break;
							}
						}
					}
				}else{
					if(and==undefined || and==false){
						for(var i=0;i<this.objects.length;i++){
							for(var j=0;j<this.objects[i].tags.length;j++){
								if(this.objects[i].view==view){
									if(tags.indexOf(this.objects[i].tags[j])!=-1){
										found.push(this.objects[i].name);
										break;
									}
								}
							}
						}
					}else if(and==true){
						for(var i=0;i<this.objects.length;i++){
							var tag=0;
							for(var j=0;j<this.objects[i].tags.length;j++){
								if(this.objects[i].view==view){
									if(tags.indexOf(this.objects[i].tags[j])!=-1){
										tag++;
										if(tag==tags.length){
											found.push(this.objects[i].name);
											break;
										}
									}else{
										break;
									}
								}else{
									break;
								}
							}
						}
					}
				}
			}
			for(var i=0;i<found.length;i++){
				this.delObject(found[i]);
			}
		},

		//x,y,w,h,c,alpha,attr,cam,v,name
		//newObject
		newObject:function(x,y,w,h,c,r,alpha,attr,cam,view,tags,name){
			var n="";
			if(typeof x === 'object' && x !== null){
				if(x.name==undefined){
					x.name="Obj"+jte.objects.length;
					n=x.name;
				}else{
					n=x.name;
				}
				jte.objects.push(new JTEObject(x.x,x.y,x.w,x.h,x.c,x.r,x.alpha,x.attr,x.cam,x.view,x.tags,false,false,n))
			}else if(typeof x === 'number'){
				if(name==undefined){
					name="Obj"+jte.objects.length;
				}
				n=name;
				jte.objects.push(new JTEObject(x,y,w,h,c,r,alpha,attr,cam,view,tags,false,false,n))
			}
			return jte.getObject(n);
		},

		//setView
		setView:function(name){
			if(jte.views.indexOf(name)!=-1){
				jte.view=name;
			}
		},

		//getView
		getView:function(index){
			if(index==undefined){
				return jte.view;
			}else{
				if(typeof index=="number"){
					return jte.views[index];
				}else{
					if(jte.views.indexOf(index)!=-1){
						return jte.views.indexOf(index);
					}
				}
			}
		},

		//getViews
		getViews:function(){
			return jte.views;
		},

		//draw objects
		draw:function(o){
			if(o.view=="" || o.view==this.view){
				var outline=false;
				var c=o.c;
				var r=o.r;
				var obj={x:o.x,y:o.y,w:o.w,h:o.h,attr:o.attr,selected:o.selected,alpha:o.alpha};

				var draw=true;
				
				var cam=jt.camactive();
				if(o.cam==false){
					jt.camactive(false);
					if(obj.x+obj.w<-jt.w()){draw=false};
					if(obj.x>jt.w()*2){draw=false};
					if(obj.y+obj.h<-jt.h()){draw=false};
					if(obj.y>jt.h()*2){draw=false};
				}else{
					jt.camactive(true);
					if(obj.x+obj.w<jt.cam().x-jt.cam().w){draw=false};
					if(obj.x>jt.cam().x+jt.cam().w*2){draw=false};
					if(obj.y+obj.h<jt.cam().y-jt.cam().h){draw=false};
					if(obj.y>jt.cam().y+jt.cam().h*2){draw=false};
				}
				
				if(draw){
				
					//change alpha
					var changeAlpha=false;
					if(obj.alpha!=1){
						changeAlpha=true;
						jt.alpha(o.alpha);
					}

					if(obj.attr!=undefined){
						if(obj.attr.text!=undefined){
							jt.baseline("top");
							var t=obj.attr.text;
							var fS=jte.fontSize;
							var font="Consolas";
							var align="left";
							var alwaysShow=true
							var offset=0;

							if(obj.attr.size!=undefined){fS=obj.attr.size}
							if(obj.attr.font!=undefined){font=obj.attr.font}
							if(obj.attr.align!=undefined){align=obj.attr.align}
							if(obj.attr.alwaysShow!=undefined){alwaysShow=obj.attr.alwaysShow}

							var ratioCam=jt.w()/jt.cam().w;
							var divider=1;
							if(o.cam==true){
								fS*=ratioCam;
								divider=ratioCam
							}

							if(align=="center"){
								offset=obj.w/2;
							}

							if(align=="right"){
								offset=obj.w;
							}

							jt.font(font,fS);
							var w=jt.textW(t)/divider;
							var w1=jt.textW("a")/divider;
							var h=jt.textH(t)/divider;
							var maxChars=Math.ceil(obj.w/w1)

							if((w<=obj.w && h<=obj.h) || alwaysShow){
								jt.text(t,obj.x+offset,obj.y,c,align,fS,r,maxChars,fS/ratioCam);
							}else{
								if(h>obj.h){
									//too small
								}else{
									if(w>obj.w){
										if(w1>obj.w){
											//too small
										}else{
											//line breaks
											var maxLen=1;
											for(var j=1;j<t.length;j++){
												if(w1*j>obj.w){
													break;
												}else{
													maxLen=j;
												}
											}
											var numLines=Math.ceil(t.length/maxLen);
											var maxLines=1;
											for(var j=1;j<=numLines;j++){
												if(h*j>obj.h){
													break;
												}else{
													maxLines=j;
												}
											}
											//draw all lines
											for(var j=0;j<maxLines;j++){
												var str=t.substr(j*maxLen,maxLen);
												jt.text(str,obj.x+offset,obj.y+(h*j),c,align,fS,r);
											}
										}
									}
								}
							}


						}else if(obj.attr.img!=undefined){
							if(jt.assets.images[obj.attr.img]!=undefined){
								jt.image(obj.attr.img,obj.x,obj.y,obj.w,obj.h,r,obj.attr.sX,obj.attr.sY,obj.attr.sW,obj.attr.sH);
							}else{
								jt.rect(obj.x,obj.y,obj.w,obj.h,"black",r);
							}
						}else if(obj.attr.anim!=undefined){
							if(jt.assets.images[obj.attr.anim]!=undefined){
								jt.anim(obj.attr.anim,obj.x,obj.y,obj.w,obj.h,r);
							}else{
								jt.rect(obj.x,obj.y,obj.w,obj.h,"black",r);
							}
						}else if(obj.attr.shape!=undefined){
							if(obj.attr.shape=="circle"){
								var biggest=obj.w;
								if(obj.h>obj.w){
									biggest=obj.h;
								}
								jt.circle(obj.x,obj.y,biggest,c)
							}else if(obj.attr.shape=="ellipse"){
								jt.ellipse(obj.x,obj.y,obj.w,obj.h,c,r)
							}else if(obj.attr.shape=="line"){
								var x=obj.x;
								var y=obj.y;
								var w=obj.x+obj.w;
								var h=obj.y+obj.h;
								if(obj.attr.dirX==-1){
									x=obj.x+obj.w
									w=obj.x;
								}
								if(obj.attr.dirY==-1){
									y=obj.y+obj.h
									h=obj.y;
								}
								jt.line(x,y,w,h,obj.attr.lineW,c,r)
							}
						}
					}else{
						jt.rect(obj.x,obj.y,obj.w,obj.h,c,r);
					}
					if(changeAlpha){
						jt.alpha(1)
					}
					if(obj.selected && outline){
						jt.rectB(obj.x,obj.y,obj.w,obj.h,[0,0,0,0.75],r,2);
					}
				}
				jt.camactive(cam);
			}
		}
	}

	//define the jt object on a global scale
	var jt=undefined;

	var interval=undefined;

	var loadEval=[];

	function loadAssets(arr){
		for(var i=0;i<arr.length;i++){
			if(arr[i].type=="image"){
				loadEval.push("jt.loadImage('"+arr[i].path+"','"+arr[i].name+"');")
			}else if(arr[i].type=="audio"){
				loadEval.push("jt.loadSound('"+arr[i].path+"','"+arr[i].name+"',"+arr[i].repeat+","+arr[i].volume+");")
			}else if(arr[i].type=="anim"){
				loadEval.push("jt.loadAnim('"+arr[i].path+"','"+arr[i].name+"',"+arr[i].frames+","+arr[i].speed+");")
			}
		}
	}


	function loadJt(){
		clearInterval(interval);
		//parameters of the JT object:
		//id of the canvas
		//width
		//height
		//frames per second
		//setup function name
		//update function name
		//name of the object which has the setup and update functions
		//fullScreen button on mobile

		jt=new JT("jeuCanvas",jte.w,jte.h,60,'setup','update','jte',jte.maximize);

		jt.getObject=function(name,view){return jte.getObject(name,view)};
		jt.get=function(name,view){return jte.getObject(name,view)};
		jt.getObjects=function(tags,view,and){return jte.getObjects(tags,view,and)};
		jt.gets=function(tags,view,and){return jte.getObjects(tags,view,and)};
		jt.delObject=function(name,view){return jte.delObject(name,view)};
		jt.delObjects=function(tags,view,and){return jte.delObjects(tags,view,and)};
		jt.newObject=function(x,y,w,h,c,r,alpha,attr,cam,view,tags,name){return jte.newObject(x,y,w,h,c,r,alpha,attr,cam,view,tags,name)};
		jt.setView=function(view){return jte.setView(view)};
		jt.getView=function(index){return jte.getView(index)};
		jt.getViews=function(){return jte.getViews()};
		jt.drawObject=function(obj){return jte.draw(obj)};

		for(var i=0;i<loadEval.length;i++){
			eval(loadEval[i])
		}
		//jt.loadImage("image.png","name")
		//jt.loadSound("sound.mp3","name")
		//jt.loadAnim("src.png","name",number of frames,fps);
	}
	loadAssets([{type:"image",
			path:jte.path+"assets/arrow.png",
			name:"arrow"}]);loadAssets([{type:"image",
			path:jte.path+"assets/bumper.png",
			name:"bumper"}]);loadAssets([{type:"image",
			path:jte.path+"assets/girlAir.png",
			name:"girlAir"}]);loadAssets([{type:"image",
			path:jte.path+"assets/girlIdle.png",
			name:"girlIdle"}]);loadAssets([{type:"image",
			path:jte.path+"assets/girlWalk.png",
			name:"girlWalk"}]);loadAssets([{type:"image",
			path:jte.path+"assets/guyAir.png",
			name:"guyAir"}]);loadAssets([{type:"image",
			path:jte.path+"assets/guyIdle.png",
			name:"guyIdle"}]);loadAssets([{type:"image",
			path:jte.path+"assets/guyWalk.png",
			name:"guyWalk"}]);loadAssets([{type:"image",
			path:jte.path+"assets/indianaAir.png",
			name:"indianaAir"}]);loadAssets([{type:"image",
			path:jte.path+"assets/indianaIdle.png",
			name:"indianaIdle"}]);loadAssets([{type:"image",
			path:jte.path+"assets/indianaWalk.png",
			name:"indianaWalk"}]);loadAssets([{type:"image",
			path:jte.path+"assets/minerAir.png",
			name:"minerAir"}]);loadAssets([{type:"image",
			path:jte.path+"assets/minerIdle.png",
			name:"minerIdle"}]);loadAssets([{type:"image",
			path:jte.path+"assets/minerWalk.png",
			name:"minerWalk"}]);loadAssets([{type:"image",
			path:jte.path+"assets/movingLeft.png",
			name:"movingLeft"}]);loadAssets([{type:"image",
			path:jte.path+"assets/movingRight.png",
			name:"movingRight"}]);loadAssets([{type:"audio",
			path:jte.path+"assets/cancel.mp3",
			name:"cancel",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/fire.mp3",
			name:"fire",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/hurt.mp3",
			name:"hurt",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/jump.mp3",
			name:"jump",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/jump2.mp3",
			name:"jump2",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/pick.mp3",
			name:"pick",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/refill.mp3",
			name:"refill",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/respawn.mp3",
			name:"respawn",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/throw.mp3",
			name:"throw",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"audio",
			path:jte.path+"assets/walk.mp3",
			name:"walk",
			repeat:false,
			volume:0.5}]);loadAssets([{type:"anim",
			path:jte.path+"assets/movingLeft.png",
			name:"movingLeft",
			frames:10,
			speed:30}]);loadAssets([{type:"anim",
			path:jte.path+"assets/movingRight.png",
			name:"movingRight",
			frames:10,
			speed:30}]);loadAssets([{type:"anim",
			path:jte.path+"assets/girlWalk.png",
			name:"girlWalk",
			frames:2,
			speed:10}]);loadAssets([{type:"anim",
			path:jte.path+"assets/minerWalk.png",
			name:"minerWalk",
			frames:2,
			speed:10}]);loadAssets([{type:"anim",
			path:jte.path+"assets/indianaWalk.png",
			name:"indianaWalk",
			frames:2,
			speed:10}]);loadAssets([{type:"anim",
			path:jte.path+"assets/guyWalk.png",
			name:"guyWalk",
			frames:2,
			speed:10}]);


	//you can also use $(document).ready(function(){}); with jQuery
	$(document).ready(function(){
		if(jte.code!=undefined){
			loadJt();
		}else{
			interval=setInterval(function(){if(jte.code!=undefined){
			loadJt();}},10);
		}
	});


	