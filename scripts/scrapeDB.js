const express = require("express");
const axios = require("axios");
const app = express();
var cheerio = require("cheerio");
const PORT = process.env.PORT || 3001;


/*const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buildmaster", {useNewUrlParser: true });


const usersSeed = [
    {
        username: "Toy",
        password: "password test"

    }
]

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });*/

   // scraping of path wiki(it works)
   app.get("/scrape", function(req, res) {
    axios.get("https://pathofexile.gamepedia.com/Armour_(equipment)").then(function(response, body) {
      // Load the html body from axios into cheerio
    var $ = cheerio.load(response.data);

    
    // For each element with a "title" class
  //shows all of the weapon classes
  /*
  axios.get("https://pathofexile.com/item-data/weapon")
  $("h1").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var weapon = $(element).text();
      

    console.log(title);
    })
*/
//**shows all fo the weapon data name, level,etc. */
/*
$("td").each(function(i, element) {
  // Save the text and href of each link enclosed in the current element
  var title = $(element).text();
  //var link = $(element).children("a").attr("href");

console.log(title);
})
*/
//shows classes
/*
axios.get("https://pathofexile.com/ascendancy/classes")
$("header").each(function(i, element) {
  // Save the text and href of each link enclosed in the current element
  var title = $(element).text();
  //var link = $(element).children("a").attr("href");

console.log(title);
})

*/
$("td").each(function(i, element) {
  // Save the text and href of each link enclosed in the current element
  var title = $(element).children("a").text();
 // var link = $(element).children("a").attr("title").text();

console.log(title);
})
  })
  
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



const mongoose = require("mongoose");
//const db = require("../models");

// This file inserts the classNamees into the className collection

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buildmaster", {useNewUrlParser: true });
//process.env.MONGODB_URI ||

//General Information
const Ascension_className = ["Slayer", "Gladiator", "Champion","Assassin", "Saboteur", "Trickster", "Juggernaut", "Berserker", "Chieftain","Necromancer", "Occultist", "Elementalist","Deadeye", "Raider","Pathfinder","Inquisitor", "Hierophant", "Guardian","Ascendant"];
const classNamees = ["Duelist", "Shadow", "Marauder", "Witch", "Ranger", "Templar", "Scion"];

const Items= [
  {
    type:["Equipment", "Currency", "Divination Cards", "Quest Items", "Gems", "Prophecies", "Microtransactions", "Decorations"]
    
  },
  {
    equipment:["Armour", "Weapons", "Accessories", "Jewels", "Flasks"]
  },
  {
    currency:["Functional", "Shards","Fragments","Essences", "Prophecies", "League Currency"]
  },
  {
    divnation_cards:[]
  },
  {
    quest_items:["Items", "Books", "Orbs"]
  },
  {
    gems:["Active", "Support"]
  },
  {
    prophecies:[]
  },
  {
    microtransactions:[]
  },
  {
    decorations:[]
  }
  
]

const Equipment = [
  {
    type:["Armour", "Weapons", "Accessories", "Jewels", "Flasks"]
  },
  {
    rarity:["Normal", "Magic", "Rare", "Unique"]
  }
]

const Weapon = [
  {
    type:["Bow", "Two-Handed Axe", "Two-Handed Mace", "Two-Handed Sword", "Staff"],
    category:"Two-Handed"
    
  },
  {
    type:["Dagger","One-Handed Axe", "One-Handed Sword", "One-Handed Mace", "Thrusting One-Handed Sword", "Claw", "Sceptre", "Wand"],
    category:"One-Handed"
  }
  
]

//Specific Weapon Information
const One_Handed_Axe=[
  {
    name:,
    level:,
    damage:,
    atk_sec:,
    dps:,
    implicit_mods:,
    mod_value:,
    req_str:,
    req_dex:,
    req_int:
    
  },
]

const One_Handed_Sword= [
  {
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
}
] 


const One_Handed_Mace = [
  {
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
}
]

const Thrusting_One_Handed_Sword=[
  {
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
}
]

const Claw=[
  {
  name:"Nailed Fist",
  level:3,
  damage:"",
  atk_sec:"",
  dps:"",
  implicit_mods:"",
  mod_value:"",
  req_str:"",
  req_dex:"",
  req_int:""
  
},

{
  name:"Sharktooth Claw",
  level:7,
  damage:"",
  atk_sec:"",
  dps:"",
  implicit_mods:"",
  mod_value:"",
  req_str:"",
  req_dex:"",
  req_int:""
}, 
  {
name:"Awl",
level:12,
  damage:"",
  atk_sec:"",
  dps:"",
  implicit_mods:"",
  mod_value:"",
  req_str:"",
  req_dex:"",
  req_int:""
  
},
{
 name: "Cat's Paw",
 level:17,
  damage:"",
  atk_sec:"",
  dps:"",
  implicit_mods:"",
  mod_value:"",
  req_str:"",
  req_dex:"",
  req_int:""
  
},
{
  name: "Blinder",
 level:22,
  damage:"",
  atk_sec:"",
  dps:"",
  implicit_mods:"",
  mod_value:"",
  req_str:"",
  req_dex:"",
  req_int:""
},
 {
  name:  "Timeworn Claw",
  level:26,
  damage:"",
  atk_sec:"",
  dps:"",
  implicit_mods:"",
  mod_value:"",
  req_str:"",
  req_dex:"",
  req_int:"",
 },
  
  
 
{
  name:  "Sparkling Claw",
  level:30,
   damage:"",
   atk_sec:"",
   dps:"",
   implicit_mods:"",
   mod_value:"",
   req_str:"",
   req_dex:"",
   req_int:""
   
},
  
  
 {
  name:  "Fright Claw",
  level:"",
  damage:"",
  atk_sec:"",
  dps:"",
  implicit_mods:"",
  mod_value:"",
  req_str:"",
  req_dex:"",
 }
  
 
  
}]

const Sceptre  =[
  {
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
}]

const Wand = [
  {
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
}
]

const Two_Handed_Axe=[{
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
},]

const Two_Handed_Mace=[{
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
},]

const Two_Handed_Sword=[{
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
}]

const Staff = [
  {
  name:,
  level:,
  damage:,
  atk_sec:,
  dps:,
  implicit_mods:,
  mod_value:,
  req_str:,
  req_dex:,
  req_int:
  
},]

const Bows = [
  { 
    name:"Crude Bow",
    level:[1],
    damage:["5 to 13"],
    atk_sec:[1.4],
    dps:[12.6],
    implicit_mods:['n/a'],
    mod_value:["n/a"], 
    req_str:["n/a"],
    req_dex:[14],
    req_int:["n/a"]
  },
  {
    name:"Short Bow",
    level:[5],
    damage:["6 to 25"],
    atk_sec:[1.5],
    dps:[16.5],
    implicit_mods:["n/a"],
    mod_value:["n/a"],
    req_str:["n/a"],
    req_dex:[26],
    req_int:["n/a"]
  },
  {    
    name:"Long Bow",
    level:[9],
    damage:["6 to 25"],
    atk_sec:[1.3],
    dps:[20.2],
    implicit_mods:["n/a"],
    mod_value:["n/a"],
    req_str:["n/a"],
    req_dex:[38],
    req_int:["n/a"]
  },
  {
      
    name:"Composite Bow",
    level:[14],
    damage:["12 to 26"],
    atk_sec:[1.3],
    dps:[24.7],
    implicit_mods:["n/a"],
    mod_value:["n/a"],
    req_str:["n/a"],
    req_dex:[53],
    req_int:["n/a"]
  },
  {
      
    name:"Recurve Bow",
    level:[18],
    damage:[],
    atk_sec:[],
    implicit_mods:[],
    mod_value:[],
    req_str:["n/a"],
    req_dex:[14],
    req_int:["n/a"]
  },
  {
      
    name: "Bone Bow",
    level:[23],
    damage:[],
    atk_sec:[],
    implicit_mods:[],
    mod_value:[],
    req_str:["n/a"],
    req_dex:[14],
    req_int:["n/a"]
  },
  {
      
    name: "Royal Bow",
    level:[28],
    damage:[],
    atk_sec:[],
    implicit_mods:["Elemental Damage With Attack Skills +%"],
    mod_value:["20 to 24"],
    req_str:["n/a"],
    req_dex:[14],
    req_int:["n/a"]
  },
  {
      
    name:  "Death Bow",
    level:[32],
    damage:[],
    atk_sec:[],
    implicit_mods:["Local Critical Strike Chance +%"],
    mod_value:["30 to 50"],
    req_str:["n/a"],
    req_dex:[14],
    req_int:["n/a"]
  }
  
]



const Daggers = [
  {
    name:,
    level:,
    damage:,
    atk_sec:,
    implicit_mods:,
    mod_value:,
    req_str:,
    req_dex:,
    req_int:


  },
  {
    name:,
    level:,
    damage:,
    atk_sec:,
    implicit_mods:,
    mod_value:,
    req_str:,
    req_dex:,
    req_int:


  },
  
]


  

//Specific className Information
const Exiles = [
  {
    className: "Duelist",
    ascension_className: ["Slayer", "Gladiator", "Champion"]
  },
  {
    className:"Shadow",
    ascension_className: ["Assassin", "Saboteur", "Trickster"]
  },
  {
    className: "Marauder",
    ascension_className: ["Juggernaut","Berserker","Chieftain"]
  },
  {
    className:"Witch",
    ascension_className: ["Necromancer","Occultist","Elementalist"]
  },
  {
    className:"Ranger",
    ascension_className: ["Deadeye","Raider","Pathfinder"]
  },
  {
    className:"Templar",
    ascension_className: ["Inquisitor","Hierophant","Guardian"]
  },
  {
    className:"Scion",
    ascension_className: ["Ascendant"]
  }
]

for(var i=0; i<Exiles.length; i++){
console.log(Exiles[i].className);
}
/*"Functional", "Shards","Fragments","Essences", "Prophecies", "League Currency", 
const functionalCurrency = [
  {
    name:,
    level:,
    stack_size:




  }
]*/

const 

const genInfoSeed = [
    { 
    Exiles:["Maruader",
    {
      Ascension_className:["Juggernaut","Berserker", "Chieftain"]}, "Duelist",{Ascension_className:["Slayer", "Gladiator", "Champion"]}, "Ranger",{Ascension_className:["Deadeye", "Raider", "Pathfinder"]}, "Shadow",{Ascension_className:["Assassin","Saboteur", "Trickster"]}, "Witch",{Ascension_className:["Necromancer", "Occultist", "Elementalist"]}, "Templar",{Ascension_className:["Templar", "Inquisitor","Hierophant", "Guardian"]}, "Scion",{Ascension_className:["Ascendant"]}]},
{
    Equipment: ["Weapons",{Axe:{One_Hand:[], Two_Hand:[]}, Bow:{Name:[], Level:[], Damage:[], Atk_Sec:[], DPS:[], Str:[], Dex:[], Int:[]}, Claw:[], Dagger:[], Mace:[], Staff:[], Sword:[], Wand:[]} ,"Armour",{Body:[], Boots:[], Gloves:[], Helmet:[], Shield:[]},"Accesories",{Amulet:[], Belt:[], Quiver:[], Ring:[]}, "Jewels",{All:[]},"Flask",{Life:[], Mana:[], Hybrid:[], Utility:[]}]
},
{
    Attribute: ["Strength", "Dexterity", "Intelligence"]
},
{
    Skills: {Active:{Gems:[], Other:[]}, Passive:{Gems:[], Other:[]}}
},
{
    Gems: ["One Handed Weapon", "Two Handed Weapon", "Off-hand", "Armor"]
},
{
    Currency: ["evasion"]
},
{
  Crafting:[]
},
{
  Leagues:[]
}



];

//console.log(getInfoSeed[0].Exiles.Maruader.Ascension_className[0]);

//quick parse for possible object 

//  parse works to show the character classNamees specifically maruader console.log(exileSeed[0].Exiles[0]);
//console.log(exileSeed[0].Exiles[""]);


/*const toonSeed = [
    {
      className: "Duelist", 
      ascension: ["Slayer", "Gladiator", "Champion"],
      attribute: [],
      starteritems: [],
      rating:[]
    
    },

    {
        className: "Marauder",
        ascension: ["JuggerNaut", "Berserker", "Chieftain"],
        attribute: [],
      itemclassName: [],
      rating:[]

    },
    {
        className: "Witch",
        ascension: ["Necromancer", "Occultist", "Elementalist"],
        attribute: [],
      itemclassName: [],
      rating:[]
    },

    {
        main: "Ranger",
        ascension: ["Deadeye", "Raider", "Pathfinder"],
        attribute: [],
      itemclassName: [],
      rating:[]
    },
    { 
        main: "Shadow",
        ascension: ["Assassin", "Saboteur", "Trickster"],
        attribute: [],
      itemclassName: [],
      rating:[]
    },
    {
        main: "Templar",
        ascension:["Inquistor", "HeroPhant", "Gurardian"],
        attribute: [],
      itemclassName: [],
      rating:[]
    },
    {
        main: "Scion",
        ascension:["Ascendant"],
        attribute: [],
      itemclassName: [],
      rating:[]
    }
]; */







/*db.Toon
  .remove({})
  .then(() => db.Toon.collection.insertMany(toonSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  

    db.Test
  .remove({})
  .then(() => db.Test.collection.insertMany())
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });*/

  




  