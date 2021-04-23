

////////////////// Countries //////////////////////

var countries = 
    {
       "fr":[
        {id:"Tous les pays",name:"Tous les pays"},
        { id:"Afrique du sud",name: "Afrique du sud",},{id:"Algerie",name:"Algerie",},
        {id:"Allemagne",name:"Allemagne",},{id:"Angola",name:"Angola"}, {id:"Arabie Saoudite",name:"Arabie Saoudite",}, 
        {id:"Argentine",name:"Argentine"}, {id:"Autralie", name:"Autralie"}, {id:"Autriche",name:"Autriche"}, 
        {id:"Belgique",name:"Belgique"}, {id:"Benin",name:"Benin"}, {id:"Botswana",name:"Botswana"}, 
        {id:"Brésil",name:"Brésil"},{id:"Burkina Faso",name:"Burkina Faso"},{id:"Burundi",name:"Burundi"}, 
        {id:"Cameroun",name:"Cameroun"},{id:"Canada",name:"Canada"},{id:"Cap-vert",name:"Cap-vert"}, 
        {id:"Chili",name:"Chili"},{id:"Chine",name:"Chine"}, {id:"Colombie",name:"Colombie"}, 
        {id:"Comores",name:"Comores"}, {id:"Congo",name:"Congo"}, {id:"Corée du sud",name:"Corée du sud"}, 
        {id:"Costa Rica",name:"Costa Rica"}, {id:"Côte d'Ivoire",name:"Côte d'Ivoire"}, {id:"Croatie",name:"Croatie"}, 
        {id:"Cuba",name:"Cuba"}, {id:"Danemark",name:"Danemark"}, {id:"Djibouti",name:"Djibouti"}, 
        {id:"Egytpe",name:"Egytpe"},{id:"Emirats Arabes Unis",name:"Emirats Arabes Unis"},{id:"Equateur",name:"Equateur"},
        {id:"Espagne",name:"Espagne"},{id:"Etats-Unis",name:"Etats-Unis"},{id:"Ethiopie",name:"Ethiopie"},
        {id:"Finlande",name:"Finlande"},{id:"France",name:"France"},{id:"Gabon",name:"Gabon"},
        {id:"Gambie",name:"Gambie"},{id:"Ghana",name:"Ghana"},{id:"Grèce",name:"Grèce"},
        {id:"Guinée",name:"Guinée"},{id:"Guinée-Équatoriale",name:"Guinée-Équatoriale"},{id:"Guinée-Bissau",name:"Guinée-Bissau"},
        {id:"Haïti",name:"Haïti"},{id:"Honduras",name:"Honduras"},{id:"Hongrie",name:"Hongrie"},
        {id:"Inde",name:"Inde"},{id:"Indonesie",name:"Indonesie"},{id:"Israël",name:"Israël"},
        {id:"Italie",name:"Italie"},{id:"Japon",name:"Japon"},{id:"Kenya",name:"Kenya"},
        {id:"Koweït",name:"Koweït"},{id:"Liban",name:"Liban"},{id:"Liberia",name:"Liberia"},
        {id:"Libya",name:"Libya"},{id:"Lituanie",name:"Lituanie"},{id:"Luxembourg",name:"Luxembourg"},
        {id:"Madagascar",name:"Madagascar"},{id:"Malaisie",name:"Malaisie"},{id:"Malawi",name:"Malawi"},
        {id:"Mali",name:"Mali"},{id:"Maroc",name:"Maroc"},{id:"Mauritanie",name:"Mauritanie"},
        {id:"Mexique",name:"Mexique"},{id:"Monaco",name:"Monaco"},{id:"Mozambique",name:"Mozambique"},
        {id:"Namibie",name:"Namibie"},{id:"Niger",name:"Niger"},{id:"Nigeria",name:"Nigeria"},
        {id:"Norvège",name:"Norvège"},{id:"Nouvelle-Zelande",name:"Nouvelle-Zelande"},{id:"Ouganda",name:"Ouganda"},
        {id:"Pakistan",name:"Pakistan"},{id:"Pays-Bas",name:"Pays-Bas"},{id:"Philipines",name:"Philipines"},
        {id:"Pologne",name:"Pologne"},{id:"Portugal",name:"Portugal"},{id:"Qatar",name:"Qatar"},
        {id:"RDC Congo",name:"RDC Congo"},{id:"Roumanie",name:"Roumanie"},{id:"Royaume-Uni",name:"Royaume-Uni"},
        {id:"Russie",name:"Russie"},{id:"Rwanda",name:"Rwanda"},{id:"Sénégal",name:"Sénégal"},
        {id:"Singapour",name:"Singapour"},{id:"Soudan",name:"Soudan"},{id:"Suède",name:"Suède"},
        {id:"Suisse",name:"Suisse"},{id:"Taiwan",name:"Taiwan"},{id:"Tanzanie",name:"Tanzanie"},
        {id:"Tchad",name:"Tchad"},{id:"Thaïlande",name:"Thaïlande"},{id:"Togo",name:"Togo"},
        {id:"Tunisie",name:"Tunisie"},{id:"Turquie",name:"Turquie"},{id:"Ukraine",name:"Ukraine"},
        {id:"Uraguay",name:"Uraguay"},{id:"Vatican",name:"Vatican"},{id:"Viêt Nam",name:"Viêt Nam"},
        {id:"Zambie",name:"Zambie"},{id:"Zimbabwe",name:"Zimbabwe"}   
       ],
       "en":[
        {id:"All the countries",name:"All the countries"},
        {id:"Algeria",name:"Algeria"},{id:"Angola",name:"Angola"},{id:"Argentina",name:"Argentina"},
        {id:"Australia",name:"Australia"},{id:"Austria",name:"Austria"},{id:"Belgium",name:"Belgium"},
        {id:"Benin",name:"Benin"},{id:"Botswana",name:"Botswana"},{id:"Brazil",name:"Brazil"},
        {id:"Burkina Faso",name:"Burkina Faso"},{id:"Burundi",name:"Burundi"},{id:"Côte d'Ivoire",name:"Côte d'Ivoire"},
        {id:"Cabo verde",name:"Cabo Verde"},{id:"Cameroon",name:"Cameroon"},{id:"Canada",name:"Canada"},
        {id:"Chad",name:"Chad"},{id:"Chile",name:"Chile"},{id:"China",name:"China"},
        {id:"Colombia",name:"Colombia"},{id:"Comoros",name:"Comoros"},{id:"Congo",name:"Congo"},
        {id:"Costa Rica",name:"Costa Rica"},{id:"Croatia",name:"Croatia"},{id:"Cuba",name:"Cuba"},
        {id:"DRC Congo",name:"DRC Congo"},{id:"Denmark",name:"Denmark"},{id:"Djibouti",name:"Djibouti"},
        {id:"Ecuador",name:"Ecuador"},{id:"Egypt",name:"Egypt"},{id:"Equatorial Guinea",name:"Equatorial Guinea"},
        {id:"Ethiopia",name:"Ethiopia"},{id:"Finland",name:"Finland"},{id:"France",name:"France"},
        {id:"Gabon",name:"Gabon"},{id:"Gambia",name:"Gambia"},{id:"Germany",name:"Germany"},
        {id:"Ghana",name:"Ghana"},{id:"Greece",name:"Greece"},{id:"Guinea",name:"Guinea"},
        {id:"Guinea-Bissau",name:"Guinea-Bissau"},{id:"Haiti",name:"Haiti"},{id:"Hondarus",name:"Honduras"},
        {id:"Iceland",name:"Iceland"},{id:"India",name:"India"},{id:"Indonesia",name:"Indonesia"},
        {id:"Israel",name:"Isreal"},{id:"Italy",name:"Italy"},{id:"Japon",name:"Japon"},
        {id:"Kenya",name:"Kenya"},{id:"Kuwait",name:"Kuwait"},{id:"Liberia",name:"Liberia"},
        {id:"Libya",name:"Libya"},{id:"Lithuania",name:"Lithuania"},{id:"Luxembourg",name:"Luxembourg"},
        {id:"Madagascar",name:"Madagascar"},{id:"Malawi",name:"Malawi"},{id:"Malaysia",name:"Malaysia"},
        {id:"Mali",name:"Mali"},{id:"Mauritania",name:"Mauritania"},{id:"Mexico",name:"Mexico"},
        {id:"Monaco",name:"Monaco"},{id:"Morocco",name:"Morocco"},{id:"Mozambique",name:"Mozambique"},
        {id:"Namibia",name:"Namibia"},{id:"Netherlands",name:"Netherlands"},{id:"New Zealand",name:"New Zealand"},
        {id:"Niger",name:"Niger"},{id:"Nigeria",name:"Nigeria"},{id:"Pakistan",name:"Pakistan"},
        {id:"Philipines",name:"Philipines"},{id:"Poland",name:"Poland"},{id:"Portugal",name:"Portugal"},
        {id:"Qatar",name:"Qatar"},{id:"Romania",name:"Romania"},{id:"Russia",name:"Russia"},
        {id:"Rwanda",name:"Rwanda"},{id:"Saudi Arabia",name:"Saudi Arabia"},{id:"Senegal",name:"Senegal"},
        {id:"Seychelles",name:"Seychelles"},{id:"Singapor",name:"Singapor"},{id:"South Africa",name:"South Africa"},
        {id:"South Korea",name:"South Korea"},{id:"South Soudan",name:"South Sudan"},{id:"Spain",name:"Spain"},
        {id:"Sweden",name:"Sweden"},{id:"Switzerland",name:"Switzerland"},{id:"Tanzania",name:"Tanzania"},
        {id:"Thailand",name:"Thailand"},{id:"Togo",name:"Togo"},{id:"Tunisia",name:"Tunisia"},
        {id:"Turkey",name:"Turkey"},{id:"Uganda",name:"Uganda"},{id:"Ukraine",name:"Ukraine"},
        {id:"United Arab Emirates",name:"United Arab Emirates"},{id:"United Kingdom",name:"United Kingdom"},{id:"USA",name:"USA"},
        {id:"Uraguay",name:"Uraguay"},{id:"Vietnam",name:"Vietnam"},{id:"Zambia",name:"Zambia"},
        {id:"Zimbabwe",name:"Zimbabwe"}
    ]
    }

////////////////// Level ///////////////////////////////////

var level =  {
    "fr":[
        {
            id:"Tous",
            name:"Tous"
        },
        {
            id:"Licence",
            name:"License",
        },
        {
            id:"Master",
            name:"Master"
        },
        {
            id:"Doctorat",
            name:"Doctorat"
        },
        {
            id:"Recherche",
            name:"Recherche"
        }
    ],
    "en":[
        {
            id:"All",
            name:"All"
        },
        {
            id:"Undergraduate",
            name:"Undergraduate"
        },
        {
            id:"Master",
            name:"Master"
        },
        {
            id:"PhD",
            name:"PhD"
        },
        {
            id:"Research",
            name:"Research"
        }
    ]
}

////////////////////////// Contrat //////////////////////////

var contrat =  {
    "fr":[
        {id:"Tous",name:"Tous"},
        {id:"CDD",name:"CDD"},
        {id:"CDI",name:"CDI"},
        {id:"Formation",name:"Formation"},
        {id:"Stage",name:"Stage"}
    ],
    "en":[
        {id:"All",name:"All"},
        {id:"Full time",name:"Full time"},
        {id:"Internship",name:"Internship"},
        {id:"Partial time",name:"Partial time"},
        {id:"Formation",name:"Formation"}
    ]
}

////////////////////// majors //////////////////

var majors = {
    "fr":[
        {id:"Médécine",name:"Médécine"},{id:"Mathématiques",name:"Mathématiques"},{id:"Musique",name:"Musique"},
        {id:"Droit",name:"Droit"},{id:"Informatique",name:"Informatique"},{id:"Économie",name:"Économie"},
        {id:"Gestion",name:"Gestion"},{id:"Hôtellerie",name:"Hôtellerie"},{id:"Restauration",name:"Restauration"},
        {id:"Langues",name:"Langues"},{id:"Ingeniérie",name:"Ingeniérie"},{id:"Chimie",name:"Chimie"},
        {id:"Physique",name:"Physique"},{id:"Environnement",name:"Environnement"},{id:"Genie Elctronique",name:"Genie Electronique"},
        {id:"Commerce",name:"Commerce"},{id:"Management",name:"Management"},{id:"Logistique Transport Transit",name:"Logistique Transport Transit"},
        {id:"Communication d'Entreprise",name:"Communication d'Entreprise"},{id:"Marketing et Gestion Commerciale",name:"Marketing et Gestion Commerciale"},{id:"Banque et Microfinance",name:"Banque et Microfinance"},
        {id:"Finance-Comptabilité",name:"Finance-Comptabilité"},{id:"Gestion des Ressources Humaines",name:"Gestion des Ressources Humaines"},{id:"Secrétariat de Direction Bureautique",name:"Secrétariat de Direction Bureautique"},
        {id:"Assistant de Direction",name:"Assitant de Direction"},{id:"Gestion des Projets",name:"Gestion de Projets"},{id:"",name:""},
        {id:"",name:""},{id:"",name:""},{id:"",name:""},
        {id:"",name:""},{id:"",name:""},{id:"",name:""},
        {id:"",name:""},{id:"",name:""},{id:"",name:""},
        {id:"",name:""},{id:"",name:""},{id:"",name:""},
        {id:"",name:""},{id:"",name:""},{id:"",name:""},
        {id:"",name:""},{id:"",name:""},{id:"",name:""},
        {id:"",name:""},{id:"",name:""},{id:"",name:""},
    ]
}


///////////////////////  Year /////////////////////

var year =[
    {
        id:"2021 - 2022",
        name:"2021 - 2022"
    },
    {
        id:"2022 - 2023",
        name:"2022 - 2023"
    },
    {
        id:"2023 - 2024",
        name:"2023 - 2024"
    },
    {
        id:"2024 - 2025",
        name:"2024 - 2025"
    },
    {
        id:"2025 - 2026",
        name:"2025 - 2026"
    },
]


export  {countries, level, year, contrat}

