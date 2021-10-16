

////////////////// Countries //////////////////////

var countries = 
    {
       "fr":[
        {id:"Tous les pays",name:"Tous les pays"},
        { id:"Afrique du sud",name: "Afrique du sud",},{id:"Algerie",name:"Algerie",},
        {id:"Allemagne",name:"Allemagne",},{id:"Angola",name:"Angola"}, {id:"Arabie Saoudite",name:"Arabie Saoudite",}, 
        {id:"Argentine",name:"Argentine"}, {id:"Autralie", name:"Autralie"}, {id:"Autriche",name:"Autriche"}, 
        {id:"Belgique",name:"Belgique"}, {id:"Benin",name:"Benin"}, 
        {id:"Bosnie Herzégovine",name:"Bosnie Herzégovine"},{id:"Botswana",name:"Botswana"}, 
        {id:"Brésil",name:"Brésil"},{id:"Burkina Faso",name:"Burkina Faso"},{id:"Burundi",name:"Burundi"},
        {id:"Cambodge",name:"Cambodge"}, 
        {id:"Cameroun",name:"Cameroun"},{id:"Canada",name:"Canada"},{id:"Cap-vert",name:"Cap-vert"}, 
        {id:"Chili",name:"Chili"},{id:"Chine",name:"Chine"}, {id:"Colombie",name:"Colombie"}, 
        {id:"Comores",name:"Comores"}, {id:"Congo",name:"Congo"}, {id:"Corée du sud",name:"Corée du sud"}, 
        {id:"Costa Rica",name:"Costa Rica"}, {id:"Côte d'Ivoire",name:"Côte d'Ivoire"}, {id:"Croatie",name:"Croatie"}, 
        {id:"Cuba",name:"Cuba"}, {id:"Danemark",name:"Danemark"}, {id:"Djibouti",name:"Djibouti"}, 
        {id:"Egytpe",name:"Egytpe"},{id:"Emirats Arabes Unis",name:"Emirats Arabes Unis"},{id:"Equateur",name:"Equateur"},
        {id:"Espagne",name:"Espagne"},{id:"Etats-Unis",name:"Etats-Unis"},{id:"Ethiopie",name:"Ethiopie"},
        {id:"Finlande",name:"Finlande"},{id:"France",name:"France"},{id:"Gabon",name:"Gabon"},
        {id:"Gambie",name:"Gambie"},{id:"Géorgie",name:"Géorgie"},
        {id:"Ghana",name:"Ghana"},{id:"Grèce",name:"Grèce"},
        {id:"Guinée",name:"Guinée"},{id:"Guinée-Équatoriale",name:"Guinée-Équatoriale"},{id:"Guinée-Bissau",name:"Guinée-Bissau"},
        {id:"Haïti",name:"Haïti"},{id:"Honduras",name:"Honduras"},{id:"Hongrie",name:"Hongrie"},{id:"Hong Kong",name:"Hong Kong"},
        {id:"Inde",name:"Inde"},{id:"Indonesie",name:"Indonesie"},{id:"Israël",name:"Israël"},
        {id:"Italie",name:"Italie"},{id:"Japon",name:"Japon"},{id:"Kenya",name:"Kenya"},
        {id:"Koweït",name:"Koweït"},{id:"Liban",name:"Liban"},{id:"Liberia",name:"Liberia"},
        {id:"Libya",name:"Libya"},{id:"Lituanie",name:"Lituanie"},{id:"Luxembourg",name:"Luxembourg"},
        {id:"Madagascar",name:"Madagascar"},{id:"Malaisie",name:"Malaisie"},{id:"Malawi",name:"Malawi"},
        {id:"Mali",name:"Mali"},{id:"Moldavie",name:"Moldavie"},
        {id:"Maroc",name:"Maroc"},{id:"Mauritanie",name:"Mauritanie"},
        {id:"Mexique",name:"Mexique"},{id:"Monaco",name:"Monaco"},{id:"Mozambique",name:"Mozambique"},
        {id:"Namibie",name:"Namibie"},{id:"Niger",name:"Niger"},{id:"Nigeria",name:"Nigeria"},
        {id:"Norvège",name:"Norvège"},{id:"Nouvelle-Zelande",name:"Nouvelle-Zelande"},{id:"Ouganda",name:"Ouganda"},
        {id:"Pakistan",name:"Pakistan"},{id:"Pays-Bas",name:"Pays-Bas"},{id:"Philipines",name:"Philipines"},
        {id:"Pologne",name:"Pologne"},{id:"Portugal",name:"Portugal"},{id:"Qatar",name:"Qatar"},
        {id:"République Tchèque",name:"République Tchèque"},
        {id:"RDC Congo",name:"RDC Congo"},{id:"Roumanie",name:"Roumanie"},{id:"Royaume-Uni",name:"Royaume-Uni"},
        {id:"Russie",name:"Russie"},{id:"Rwanda",name:"Rwanda"},{id:"Sénégal",name:"Sénégal"},
        {id:"Singapour",name:"Singapour"},{id:"Soudan",name:"Soudan"},{id:"Suède",name:"Suède"},
        {id:"Suisse",name:"Suisse"},{id:"Taiwan",name:"Taiwan"},{id:"Tanzanie",name:"Tanzanie"},
        {id:"Tchad",name:"Tchad"},{id:"Thaïlande",name:"Thaïlande"},{id:"Togo",name:"Togo"},
        {id:"Tunisie",name:"Tunisie"},{id:"Turquie",name:"Turquie"},{id:"Ukraine",name:"Ukraine"},
        {id:"Uraguay",name:"Uraguay"},{id:"Vatican",name:"Vatican"},{id:"Viêt Nam",name:"Viêt Nam"},
        {id:"Zambie",name:"Zambie"},{id:"Zimbabwe",name:"Zimbabwe"},
        {id:"Nepal",name:"Nepal"},{id:"Afghanistan",name:"Afghanistan"},
        {id:"Bangladesh",name:"Bangladesh"},{id:"Bhutan",name:"Bhutan"},{id:"Sri Lanka",name:"Sri Lanka"},
        {id:"Brunei",name:"Brunei"},{id:"Myanmar",name:"Myanmar"},{id:"Iran",name:"Iran"},
        {id:"Iraq",name:"Iraq"},{id:"Yemen",name:"Yemen"},{id:"Taiwan",name:"Taiwan"},{id:"North Korea",name:"North Korea"},
        {id:"Mongolia",name:"Mongolia"},{id:"Kazakhstan",name:"Kazakhstan"},{id:"Kyrgyzstan",name:"Kyrgyzstan"},
        {id:"Turkmenistan",name:"Turkmenistan"},{id:"Uzbekistan",name:"Uzbekistan"},{id:"Tajikistan",name:"Tajikistan"},
        {id:"Kyrgyzstan",name:"Kyrgyzstan"},{id:"Kazakhstan",name:"Kazakhstan"},{id:"Micronesie",name:"Micronesie"},
        {id:"Papua Nouvelle Guinée",name:"Papua Nouvelle Guinée"},{id:"Fiji",name:"Fiji"},{id:"Solomon Islands",name:"Solomon Islands"},
        {id:"Vanuatu",name:"Vanuatu"},{id:"Nouvelle Caledonie",name:"Nouvelle Caledonie"},{id:"Polynesie Française",name:"Polynesie Française"},
        {id:"Samoa",name:"Samoa"},{id:"Guam",name:"Guam"},{id:"Kiribati",name:"Kiribati"},
        {id:"Tonga",name:"Tonga"},{id:"îles Marshall",name:"îles Marshall"},{id:"Îles de Marina du Nord",name:"Îles de Marina du Nord"},
        {id:"Samoa americain",name:"Samoa americain"},{id:"Palau",name:"Palau"},{id:"îles Cook",name:"îles Cook"},
        {id:"Tuvalu",name:"Tuvalu"},{id:"Wallis & Futuna",name:"Wallis & Futuna"},{id:"Nauru",name:"Nauru"},
        {id:"Niue",name:"Niue"},{id:"Tokelau",name:"Tokelau"}, 
        {id:"Pays africains",name:"Pays africains"},{id:"Pays d'Afrique du Nord",name:"Pays d'Afrique du Nord"},
        {id:"Pays d'Afrique du Sud",name:"Pays d'Afrique du Sud"},{id:"Pays Ouest-Africain",name:"Pays Ouest-Africain"},
        {id:"Pays d'Afrique de l'Est",name:"Pays d'Afrique de l'Est"},{id:"Pays de l'UE",name:"Pays de l'UE"},
        {id:"Pays d'Amerique du Sud",name:"Pays d'Amerique du Sud"},{id:"Pays européens",name:"PAys européens"},
        {id:"Pays du Moyen-Orient",name:"Pays du Moyen-Orient"},{id:"Îles pacifiques",name:"Îles pacifiques"},
        {id:"Pays du Commonwealth",name:"Pays du Commonwealth"},{id:"Pays de la Francophonie",name:"Pays de la Francophie"},
        {id:"Pays d'Asie",name:"Pays d'Asie"},{id:"Asie du Sud-Est",name:"Asie du Sud-Est"},{id:"Asie du Sud",name:"Asie du Sud"},
        {id:"Asie de l'Est",name:"Asie de l'Est"}      
      
       ],
       "en":[
        {id:"All the countries",name:"All the countries"},
        {id:"Algeria",name:"Algeria"},{id:"Angola",name:"Angola"},{id:"Argentina",name:"Argentina"},
        {id:"Australia",name:"Australia"},{id:"Austria",name:"Austria"},{id:"Belgium",name:"Belgium"},
        {id:"Benin",name:"Benin"},{id:"Bosnia-Herzegovina",name:"Bosnia-Herzegovina"},
        {id:"Botswana",name:"Botswana"},{id:"Brazil",name:"Brazil"},
        {id:"Burkina Faso",name:"Burkina Faso"},{id:"Burundi",name:"Burundi"},{id:"Ivoiry Coast",name:"Ivoiry Coast"},
        {id:"Cabo verde",name:"Cabo Verde"},{id:"Cambodia",name:"Cambodia"},{id:"Cameroon",name:"Cameroon"},
        {id:"Canada",name:"Canada"},
        {id:"Chad",name:"Chad"},{id:"Chile",name:"Chile"},{id:"China",name:"China"},
        {id:"Colombia",name:"Colombia"},{id:"Comoros",name:"Comoros"},{id:"Congo",name:"Congo"},
        {id:"Costa Rica",name:"Costa Rica"},{id:"Croatia",name:"Croatia"},{id:"Cuba",name:"Cuba"},
        {id:"Czech Republic",name:"Czech Republic"},
        {id:"DRC Congo",name:"DRC Congo"},{id:"Denmark",name:"Denmark"},{id:"Djibouti",name:"Djibouti"},
        {id:"Ecuador",name:"Ecuador"},{id:"Egypt",name:"Egypt"},{id:"Equatorial Guinea",name:"Equatorial Guinea"},
        {id:"Ethiopia",name:"Ethiopia"},{id:"Finland",name:"Finland"},{id:"France",name:"France"},
        {id:"Gabon",name:"Gabon"},{id:"Gambia",name:"Gambia"},{id:"Georgia",name:"Georgia"},
        {id:"Germany",name:"Germany"},
        {id:"Ghana",name:"Ghana"},{id:"Greece",name:"Greece"},{id:"Guinea",name:"Guinea"},
        {id:"Guinea-Bissau",name:"Guinea-Bissau"},{id:"Haiti",name:"Haiti"},
        {id:"Hondarus",name:"Honduras"},{id:"Hong Kong",name:"Hong Kong"},
        {id:"Iceland",name:"Iceland"},{id:"India",name:"India"},{id:"Indonesia",name:"Indonesia"},
        {id:"Israel",name:"Isreal"},{id:"Italy",name:"Italy"},{id:"Japan",name:"Japan"},
        {id:"Kenya",name:"Kenya"},{id:"Kuwait",name:"Kuwait"},{id:"Liberia",name:"Liberia"},
        {id:"Libya",name:"Libya"},{id:"Lithuania",name:"Lithuania"},{id:"Luxembourg",name:"Luxembourg"},
        {id:"Madagascar",name:"Madagascar"},{id:"Malawi",name:"Malawi"},{id:"Malaysia",name:"Malaysia"},
        {id:"Mali",name:"Mali"},{id:"Mauritania",name:"Mauritania"},{id:"Mexico",name:"Mexico"},
        {id:"Maldives",name:"Maldives"},
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
        {id:"Zimbabwe",name:"Zimbabwe"},{id:"Nepal",name:"Nepal"},{id:"Afghanistan",name:"Afghanistan"},
        {id:"Bangladesh",name:"Bangladesh"},{id:"Bhutan",name:"Bhutan"},{id:"Sri Lanka",name:"Sri Lanka"},
        {id:"Brunei",name:"Brunei"},{id:"Myanmar",name:"Myanmar"},{id:"Iran",name:"Iran"},
        {id:"Iraq",name:"Iraq"},{id:"Yemen",name:"Yemen"},{id:"Taiwan",name:"Taiwan"},{id:"North Korea",name:"North Korea"},
        {id:"Mongolia",name:"Mongolia"},{id:"Kazakhstan",name:"Kazakhstan"},{id:"Kyrgyzstan",name:"Kyrgyzstan"},
        {id:"Turkmenistan",name:"Turkmenistan"},{id:"Uzbekistan",name:"Uzbekistan"},{id:"Tajikistan",name:"Tajikistan"},
        {id:"Kyrgyzstan",name:"Kyrgyzstan"},{id:"Kazakhstan",name:"Kazakhstan"},{id:"Micronesia",name:"Micronesia"},
        {id:"Papua New Guinea",name:"Papua New Guinea"},{id:"Fiji",name:"Fiji"},{id:"Solomon Islands",name:"Solomon Islands"},
        {id:"Vanuatu",name:"Vanuatu"},{id:"New Caledonia",name:"New Caledonia"},{id:"French Polynesia",name:"French Polynesia"},
        {id:"Samoa",name:"Samoa"},{id:"Guam",name:"Guam"},{id:"Kiribati",name:"Kiribati"},
        {id:"Tonga",name:"Tonga"},{id:"Marshall Islands",name:"Marshall Islands"},{id:"Northern Mariana Islands",name:"Northern Mariana Islands"},
        {id:"American Samoa",name:"American Samoa"},{id:"Palau",name:"Palau"},{id:"Cook Islands",name:"Cook Islands"},
        {id:"Tuvalu",name:"Tuvalu"},{id:"Wallis & Futuna",name:"Wallis & Futuna"},{id:"Nauru",name:"Nauru"},
        {id:"Niue",name:"Niue"},{id:"Tokelau",name:"Tokelau"},
        {id:"African countries",name:"African countries"},{id:"North Africa countries",name:"North Africa countries"},
        {id:"South Africa countries",name:"South Africa countries"},{id:"West Africa countries",name:"West Africa countries"},
        {id:"East Africa countries",name:"East Africa countries"},{id:"EU countries",name:"EU countries"},
        {id:"South America countries",name:"South America countries"},{id:"European countries",name:"European countries"},
        {id:"Middle East countries",name:"Middle East countries"},{id:"Pacific islands",name:"Pacific islands"},
        {id:"Commonwealth countries",name:"Commonwealth countries"},{id:"Francophonie countries",name:"Francophie countries"},
        {id:"Asian countries",name:"Asian countries"},{id:"Southeast Asia",name:"Southeast Asia"},{id:"South Asia",name:"South Asia"},
        {id:"East Asia",name:"East Asia"}    
    
    ]
    }

////////////////// Level ///////////////////////////////////

var level =  {
    "fr":[
        {
            id:"CEP",
            name:"CEP",
        },
        {
            id:"BEPC",
            name:"BEPC",
        },
        {
            id:"CAP",
            name:"CAP",
        },
        {
            id:"BEP",
            name:"BEP",
        },
        {
            id:"BAC",
            name:"BAC",
        },
        {
            id:"BAC+1",
            name:"BAC+1",
        },
        {
            id:"BAC+2",
            name:"BAC+2",
        },
        {
            id:"BAC+4",
            name:"BAC+4",
        },
        {
            id:"Licence",
            name:"License",
        },
        {
            id:"Master 1",
            name:"Master 1"
        },
        {
            id:"Master 2",
            name:"Master 2"
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
        },
        {
            id:"Autre",
            name:"Autre"
        },
    ],
    "en":[
        {
            id:"Primary School Certicate",
            name:"Primary School Certicate"
        },
        {
            id:"Certificate of Professional Competence",
            name:"Certificate of Professional Competence"
        },
        {
            id:"Junior High School diploma",
            name:"Junior High School diploma"
        },
        {
            id:"High School Diploma",
            name:"High School Diploma"
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
            id:"Master 1",
            name:"Master 1"
        },
        {
            id:"Master 2",
            name:"Master 2"
        },
        {
            id:"PhD",
            name:"PhD"
        },
        {
            id:"Research",
            name:"Research"
        },
        {
            id:"Other",
            name:"Other"
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
        {id:"Part time",name:"Part time"},
        {id:"Formation",name:"Formation"}
    ]
}

////////////////////// Lang ///////////////////

var lang = {
    "fr":[
        {id:"Français",name:"Français"},
        {id:"Anglais",name:"Anglais"},
        {id:"Arabe",name:"Arabe"},
        {id:"Chinois",name:"Chinois"},
        {id:"Mooré",name:"Mooré"},
        {id:"Dioula",name:"Dioula"},
        {id:"Fulfuldé",name:"Fulfuldé"},
        {id:"Langue locale",name:"Langue locale"},
        {id:"Autre",name:"Autre"}
    ],
    "en":[
        {id:"French",name:"French"},
        {id:"English",name:"English"},
        {id:"Arabic",name:"Arabic"},
        {id:"Chinese",name:"Chinese"},
        {id:"Mooré",name:"Mooré"},
        {id:"Dioula",name:"Dioula"},
        {id:"Fulfuldé",name:"Fulfuldé"},
        {id:"Local language",name:"Local language"},
        {id:"Other",name:"Other"} 
    ]
}


// //////////////////// category ////////////////////

var category =  {
    "fr":[
        {id:"Métier",name:"Métier"},
        {id:"Achats",name:"Achats"},
        {id:"Commerce",name:"Commerce"},
        {id:"Gestion",name:"Gestion"},
        {id:"Stage",name:"Stage"},
        {id:"Vente",name:"Vente"},
        {id:"Finance",name:"Finance"},
        {id:"Informatique",name:"Informatique"},
        {id:"Technologie",name:"Technologie"},
        {id:"Jurique",name:"Jurique"},
        {id:"Manegement",name:"Manegement"},
        {id:"Marketing",name:"Marketing"},
        {id:"Communication",name:"Communication"},
        {id:"Santé",name:"Santé"},
        {id:"Services",name:"Services"},
        {id:"BTP",name:"BTP"},
        {id:"Production",name:"Production"},
        {id:"Maintenance",name:"Maintenance"},
        {id:"Gestion de project",name:"Gestion de project"},
        {id:"Ressource humaine",name:"Ressource humaine"},
        {id:"Sécrétariat",name:"Sécrétariat"},
        {id:"Assistant",name:"Assistant"},
        {id:"Tourisme",name:"Tourisme"},
        {id:"Hôtellerie",name:"Hôtellerie"},
        {id:"Restauration",name:"Restauration"},
        {id:"Transport",name:"Transport"},
        {id:"Logistique",name:"Logistique"},
        {id:"Électricité, Électronique",name:"Électricité, Électronique"},
        {id:"Mécanique",name:"Mécanique"},
        {id:"Plomberie",name:"Plomberie"},
        {id:"Éducation",name:"Éducation"}
    ],
    "en":[
        {id:"Metier",name:"Metier"},
        {id:"Shopping",name:"Shopping"},
        {id:"Commerce",name:"Commerce"},
        {id:"Gestion",name:"Gestion"},
        {id:"Intership",name:"Intership"},
        {id:"Sale",name:"Sale"},
        {id:"Finance",name:"Finance"},
        {id:"Computer science",name:"Computer Science"},
        {id:"Technology",name:"Technology"},
        {id:"Law",name:"Law"},
        {id:"Manegement",name:"Manegement"},
        {id:"Marketing",name:"Marketing"},
        {id:"Communication",name:"Communication"},
        {id:"Health",name:"Health"},
        {id:"Services",name:"Services"},
        {id:"Construction",name:"Construction"},
        {id:"Production",name:"Production"},
        {id:"Maintenance",name:"Maintenance"},
        {id:"Gestion of project",name:"Gestion of project"},
        {id:"Human resource",name:"Human resource"},
        {id:"Secretariat",name:"Secretariat"},
        {id:"Assistant",name:"Assistant"},
        {id:"Tourism",name:"Tourism"},
        {id:"Inn",name:"Inn"},
        {id:"Foods, Beverage",name:"Foods, Beverage"},
        {id:"Transport",name:"Transport"},
        {id:"Logistics",name:"Logistics"},
        {id:"Electricity, Electronic",name:"Electricity, Electronic"},
        {id:"Mechanical",name:"Mechanical"},
        {id:"Plumbing",name:"Plumbing"},
        {id:"Education",name:"Education"}
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


export  {countries, level, year, contrat,lang,category}

