
const territories=["Washington D.C.", "Puerto Rico", "U.S. Virgin Islands", "American Samoa", "Guam & Northern Mariana Islands", "Alabama", "Alaska", "Arizona", "Arkansas", "Colorado", "Connecticut", "Delaware", "Georgia", "Hawaii", "Idaho", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Eastern Pennsylvania", "Western Pennsylvania", "Northern California", "Southern California", "Los Angeles", "New York City", "Upstate New York", "Long Island", "Chicago", "Illinois State", "DFW Metro", "Houston Metro", "Texas State", "North Florida", "South Florida"];

const territoryAbbr={
"Washington D.C.":"DC","Puerto Rico":"PR","U.S. Virgin Islands":"VI","American Samoa":"AS","Guam & Northern Mariana Islands":"GMI",
"Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","Colorado":"CO","Connecticut":"CT","Delaware":"DE","Georgia":"GA","Hawaii":"HI","Idaho":"ID","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","North Carolina":"NC","North Dakota":"ND","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Utah":"UT","Vermont":"VT","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY",
"Eastern Pennsylvania":"EPA","Western Pennsylvania":"WPA","Northern California":"NCAL","Southern California":"SCAL","Los Angeles":"LAX","New York City":"NYC","Upstate New York":"UNY","Long Island":"LI","Chicago":"CHI","Illinois State":"ILST","DFW Metro":"DFW","Houston Metro":"HOU","Texas State":"TXST","North Florida":"NFL","South Florida":"SFL"
};
function territoryCode(t){return territoryAbbr[t]||String(t||"?").slice(0,4).toUpperCase()}
const hometowns={"Washington D.C.":["Georgetown","Capitol Hill","Anacostia","Petworth","Columbia Heights","Navy Yard","Adams Morgan","Shaw","Brookland","Tenleytown","Cleveland Park","Dupont Circle","Foggy Bottom","Southwest Waterfront","Deanwood","Takoma","Congress Heights","Fort Lincoln","Woodley Park","Mount Pleasant"],"Puerto Rico":["San Juan","Bayamón","Carolina","Ponce","Caguas","Mayagüez","Arecibo","Guaynabo","Trujillo Alto","Toa Baja","Toa Alta","Dorado","Vega Baja","Manatí","Humacao","Fajardo","Yauco","Cayey","Aguadilla","Rincón","San Germán","Juana Díaz","Coamo","Cidra","Isabela"],"U.S. Virgin Islands":["Charlotte Amalie","Christiansted","Frederiksted","Cruz Bay","Red Hook","Anna's Retreat","Tutu","Frenchtown","Estate Bovoni","Nazareth","Sion Farm","Estate Golden Rock","Kingshill","Grove Place","Estate Whim","Coral Bay"],"American Samoa":["Pago Pago","Tafuna","Leone","Nu'uuli","Fagatogo","Utulei","Aua","Pava'ia'i","Faleniu","Mapusagafou","Vaitogi","Faga'alu","Malaeimi","Ili'ili","Fagasa","Masefau","Ofu","Ta'u"],"Guam & Northern Mariana Islands":["Dededo","Tamuning","Hagåtña","Mangilao","Saipan","Tinian","Rota","Yigo","Barrigada","Agana Heights","Sinajana","Chalan Pago-Ordot","Santa Rita","Merizo","Inarajan","Kagman","Garapan","San Roque","Susupe","Dandan"],"Alabama":["Birmingham","Montgomery","Mobile","Huntsville","Tuscaloosa","Auburn","Hoover","Dothan","Decatur","Madison","Florence","Gadsden","Vestavia Hills","Prattville","Phenix City","Opelika","Enterprise","Athens","Selma","Anniston"],"Alaska":["Anchorage","Fairbanks","Juneau","Wasilla","Kenai","Sitka","Ketchikan","Palmer","Kodiak","Bethel","Homer","Soldotna","Nome","Valdez","Seward","Utqiagvik","Petersburg","Wrangell","Cordova","North Pole"],"Arizona":["Phoenix","Tucson","Mesa","Scottsdale","Tempe","Flagstaff","Chandler","Gilbert","Glendale","Peoria","Surprise","Goodyear","Yuma","Prescott","Lake Havasu City","Sierra Vista","Casa Grande","Marana","Buckeye","Kingman"],"Arkansas":["Little Rock","Fayetteville","Fort Smith","Jonesboro","Conway","Pine Bluff","Springdale","Rogers","Bentonville","Hot Springs","Benton","Russellville","Searcy","Texarkana","Bella Vista","Van Buren","Cabot","Paragould","Bryant","El Dorado"],"Colorado":["Denver","Colorado Springs","Aurora","Fort Collins","Boulder","Pueblo","Lakewood","Arvada","Westminster","Centennial","Greeley","Longmont","Loveland","Broomfield","Castle Rock","Grand Junction","Durango","Golden","Littleton","Steamboat Springs"],"Connecticut":["Bridgeport","New Haven","Hartford","Stamford","Waterbury","Norwalk","Danbury","New Britain","Greenwich","Bristol","Meriden","Milford","West Hartford","Hamden","Manchester","Fairfield","Southington","Middletown","Shelton","Torrington"],"Delaware":["Wilmington","Dover","Newark","Middletown","Smyrna","Rehoboth Beach","Milford","Seaford","Georgetown","Elsmere","New Castle","Lewes","Harrington","Camden","Clayton","Millsboro","Laurel","Bethany Beach","Ocean View","Bridgeville"],"Georgia":["Atlanta","Savannah","Augusta","Columbus","Macon","Athens","Sandy Springs","Roswell","Albany","Warner Robins","Alpharetta","Marietta","Valdosta","Smyrna","Dunwoody","Rome","Gainesville","Peachtree City","Cartersville","Statesboro"],"Hawaii":["Honolulu","Hilo","Kailua","Kaneohe","Kahului","Waipahu","Pearl City","Mililani","Ewa Beach","Kapolei","Wahiawa","Aiea","Lahaina","Kihei","Wailuku","Kailua-Kona","Waimea","Lihue","Hanalei","Makawao"],"Idaho":["Boise","Meridian","Nampa","Idaho Falls","Pocatello","Coeur d'Alene","Caldwell","Twin Falls","Lewiston","Post Falls","Rexburg","Eagle","Moscow","Kuna","Mountain Home","Blackfoot","Hailey","Sandpoint","Burley","Jerome"],"Indiana":["Indianapolis","Fort Wayne","Evansville","South Bend","Carmel","Bloomington","Fishers","Hammond","Gary","Lafayette","Muncie","Terre Haute","Noblesville","Greenwood","Kokomo","Anderson","Elkhart","Mishawaka","Columbus","Westfield"],"Iowa":["Des Moines","Cedar Rapids","Davenport","Sioux City","Iowa City","Ames","Waterloo","Council Bluffs","Dubuque","Ankeny","Urbandale","Cedar Falls","Bettendorf","Marion","Mason City","Fort Dodge","Clinton","Ottumwa","Burlington","Marshalltown"],"Kansas":["Wichita","Overland Park","Kansas City","Topeka","Olathe","Lawrence","Shawnee","Lenexa","Manhattan","Salina","Hutchinson","Leavenworth","Garden City","Dodge City","Derby","Emporia","Hays","Pittsburg","Newton","Liberal"],"Kentucky":["Louisville","Lexington","Bowling Green","Owensboro","Covington","Frankfort","Richmond","Georgetown","Florence","Hopkinsville","Nicholasville","Elizabethtown","Henderson","Paducah","Ashland","Danville","Somerset","Murray","Berea","Shelbyville"],"Louisiana":["New Orleans","Baton Rouge","Shreveport","Lafayette","Lake Charles","Monroe","Kenner","Bossier City","Alexandria","Houma","Slidell","Hammond","Ruston","Natchitoches","Thibodaux","Opelousas","Sulphur","Gretna","Mandeville","Morgan City"],"Maine":["Portland","Lewiston","Bangor","South Portland","Auburn","Augusta","Biddeford","Sanford","Saco","Westbrook","Waterville","Brunswick","Scarborough","Orono","Presque Isle","Rockland","Belfast","Ellsworth","Bath","Bar Harbor"],"Maryland":["Baltimore","Frederick","Rockville","Gaithersburg","Bowie","Annapolis","Hagerstown","College Park","Salisbury","Laurel","Greenbelt","Westminster","Cumberland","Hyattsville","Takoma Park","Ocean City","Bel Air","Towson","Silver Spring","Waldorf"],"Massachusetts":["Boston","Worcester","Springfield","Cambridge","Lowell","Quincy","Brockton","Lynn","New Bedford","Fall River","Newton","Somerville","Lawrence","Framingham","Haverhill","Waltham","Malden","Pittsfield","Taunton","Salem"],"Michigan":["Detroit","Grand Rapids","Warren","Ann Arbor","Lansing","Flint","Dearborn","Livonia","Troy","Westland","Farmington Hills","Kalamazoo","Wyoming","Southfield","Rochester Hills","Taylor","Pontiac","Royal Oak","Traverse City","Marquette"],"Minnesota":["Minneapolis","Saint Paul","Rochester","Duluth","Bloomington","Mankato","Brooklyn Park","Plymouth","Maple Grove","Woodbury","Eagan","St. Cloud","Eden Prairie","Burnsville","Lakeville","Blaine","Moorhead","Winona","Bemidji","Stillwater"],"Mississippi":["Jackson","Gulfport","Southaven","Hattiesburg","Biloxi","Tupelo","Meridian","Olive Branch","Greenville","Oxford","Starkville","Clinton","Pearl","Madison","Ridgeland","Brandon","Columbus","Vicksburg","Pascagoula","Laurel"],"Missouri":["Kansas City","St. Louis","Springfield","Columbia","Independence","Jefferson City","Lee's Summit","O'Fallon","St. Joseph","St. Charles","Blue Springs","Joplin","Florissant","Chesterfield","Cape Girardeau","Liberty","Raytown","Sedalia","Branson","Kirksville"],"Montana":["Billings","Missoula","Great Falls","Bozeman","Butte","Helena","Kalispell","Havre","Anaconda","Miles City","Belgrade","Livingston","Whitefish","Laurel","Lewistown","Dillon","Glendive","Columbia Falls","Polson","Hamilton"],"Nebraska":["Omaha","Lincoln","Bellevue","Grand Island","Kearney","Fremont","Hastings","Norfolk","Columbus","Papillion","North Platte","La Vista","Scottsbluff","South Sioux City","Beatrice","York","McCook","Seward","Gering","Alliance"],"Nevada":["Las Vegas","Henderson","Reno","North Las Vegas","Sparks","Carson City","Elko","Mesquite","Boulder City","Fernley","Fallon","Winnemucca","Pahrump","Gardnerville","Minden","Incline Village","Laughlin","Ely","Yerington","Spring Creek"],"New Hampshire":["Manchester","Nashua","Concord","Derry","Dover","Portsmouth","Rochester","Salem","Merrimack","Londonderry","Hudson","Keene","Bedford","Exeter","Lebanon","Hanover","Claremont","Laconia","Berlin","Hampton"],"New Jersey":["Newark","Jersey City","Paterson","Elizabeth","Edison","Trenton","Woodbridge","Lakewood","Toms River","Hamilton","Clifton","Camden","Brick","Cherry Hill","Passaic","Union City","Bayonne","East Orange","Hoboken","Princeton"],"New Mexico":["Albuquerque","Las Cruces","Rio Rancho","Santa Fe","Roswell","Farmington","Clovis","Hobbs","Alamogordo","Carlsbad","Gallup","Los Alamos","Deming","Sunland Park","Las Vegas","Portales","Artesia","Silver City","Taos","Ruidoso"],"North Carolina":["Charlotte","Raleigh","Greensboro","Durham","Winston-Salem","Fayetteville","Cary","Wilmington","High Point","Concord","Asheville","Gastonia","Jacksonville","Chapel Hill","Huntersville","Apex","Burlington","Kannapolis","Mooresville","Greenville"],"North Dakota":["Fargo","Bismarck","Grand Forks","Minot","West Fargo","Dickinson","Mandan","Jamestown","Williston","Wahpeton","Devils Lake","Valley City","Grafton","Beulah","Rugby","Bottineau","Watford City","Tioga","Carrington","Lisbon"],"Ohio":["Columbus","Cleveland","Cincinnati","Toledo","Akron","Dayton","Parma","Canton","Youngstown","Lorain","Hamilton","Springfield","Kettering","Elyria","Lakewood","Cuyahoga Falls","Middletown","Dublin","Mansfield","Lima"],"Oklahoma":["Oklahoma City","Tulsa","Norman","Broken Arrow","Edmond","Stillwater","Lawton","Moore","Midwest City","Enid","Owasso","Bartlesville","Shawnee","Yukon","Bixby","Ardmore","Muskogee","Ponca City","Duncan","Durant"],"Oregon":["Portland","Salem","Eugene","Gresham","Hillsboro","Bend","Beaverton","Medford","Springfield","Corvallis","Albany","Tigard","Lake Oswego","Grants Pass","Oregon City","McMinnville","Redmond","Ashland","Pendleton","Astoria"],"Rhode Island":["Providence","Warwick","Cranston","Pawtucket","East Providence","Newport","Woonsocket","Cumberland","Coventry","North Providence","South Kingstown","Johnston","West Warwick","North Kingstown","Barrington","Bristol","Westerly","Middletown","Lincoln","Smithfield"],"South Carolina":["Charleston","Columbia","North Charleston","Greenville","Rock Hill","Spartanburg","Mount Pleasant","Summerville","Goose Creek","Hilton Head Island","Florence","Sumter","Aiken","Myrtle Beach","Anderson","Greer","Greenwood","Beaufort","Orangeburg","Clemson"],"South Dakota":["Sioux Falls","Rapid City","Aberdeen","Brookings","Watertown","Pierre","Mitchell","Yankton","Huron","Spearfish","Vermillion","Brandon","Sturgis","Madison","Belle Fourche","Box Elder","Tea","Dell Rapids","Milbank","Hot Springs"],"Tennessee":["Nashville","Memphis","Knoxville","Chattanooga","Clarksville","Murfreesboro","Franklin","Johnson City","Jackson","Hendersonville","Kingsport","Collierville","Smyrna","Cleveland","Brentwood","Germantown","Maryville","Cookeville","Oak Ridge","Lebanon"],"Utah":["Salt Lake City","West Valley City","Provo","West Jordan","Orem","St. George","Sandy","Ogden","Layton","South Jordan","Lehi","Millcreek","Herriman","Logan","Draper","Murray","Bountiful","Cedar City","Tooele","Park City"],"Vermont":["Burlington","South Burlington","Rutland","Barre","Montpelier","St. Albans","Essex Junction","Bennington","Brattleboro","Middlebury","Winooski","Colchester","Milton","Hartford","Springfield","Manchester","Vergennes","Morristown","St. Johnsbury","Shelburne"],"Virginia":["Virginia Beach","Norfolk","Chesapeake","Richmond","Arlington","Alexandria","Newport News","Hampton","Roanoke","Portsmouth","Suffolk","Lynchburg","Harrisonburg","Leesburg","Charlottesville","Manassas","Winchester","Fredericksburg","Blacksburg","Williamsburg"],"Washington":["Seattle","Spokane","Tacoma","Vancouver","Bellevue","Everett","Kent","Renton","Spokane Valley","Federal Way","Yakima","Kirkland","Bellingham","Kennewick","Auburn","Pasco","Redmond","Olympia","Wenatchee","Walla Walla"],"West Virginia":["Charleston","Huntington","Morgantown","Parkersburg","Wheeling","Martinsburg","Weirton","Fairmont","Beckley","Clarksburg","South Charleston","St. Albans","Vienna","Bluefield","Moundsville","Bridgeport","Elkins","Lewisburg","Charles Town","Hurricane"],"Wisconsin":["Milwaukee","Madison","Green Bay","Kenosha","Racine","Appleton","Waukesha","Eau Claire","Oshkosh","Janesville","West Allis","La Crosse","Sheboygan","Wauwatosa","Fond du Lac","Brookfield","New Berlin","Wausau","De Pere","Stevens Point"],"Wyoming":["Cheyenne","Casper","Laramie","Gillette","Rock Springs","Sheridan","Green River","Evanston","Riverton","Jackson","Cody","Rawlins","Lander","Torrington","Powell","Douglas","Worland","Buffalo","Newcastle","Thermopolis"],"Eastern Pennsylvania":["Philadelphia","Allentown","Bethlehem","Reading","Scranton","Lancaster","Easton","Wilkes-Barre","Hazleton","Pottstown","Norristown","Chester","Levittown","Doylestown","West Chester","King of Prussia","York","Harrisburg","Lebanon","Pottsville","Bethlehem Township","Media","Phoenixville","Lititz"],"Western Pennsylvania":["Pittsburgh","Erie","State College","Altoona","Butler","Washington","New Castle","Johnstown","Meadville","Greensburg","Monroeville","Bethel Park","McKeesport","Hermitage","Indiana","Oil City","DuBois","Somerset","Uniontown","Latrobe","Beaver","Cranberry Township","Clarion","Punxsutawney"],"Northern California":["San Francisco","San Jose","Oakland","Sacramento","Santa Rosa","Stockton","Fremont","Modesto","Hayward","Sunnyvale","Concord","Vallejo","Berkeley","Daly City","San Mateo","Chico","Redding","Napa","Davis","Santa Cruz","Monterey","Eureka","Vacaville","Fairfield"],"Southern California":["San Diego","Anaheim","Irvine","Riverside","Oceanside","San Bernardino","Santa Ana","Chula Vista","Fullerton","Orange","Costa Mesa","Huntington Beach","Garden Grove","Ontario","Rancho Cucamonga","Corona","Temecula","Murrieta","Escondido","Carlsbad","Ventura","Oxnard","Palm Springs","Victorville"],"Los Angeles":["Los Angeles","Long Beach","Pasadena","Glendale","Torrance","Santa Monica","Burbank","Inglewood","Compton","Downey","West Covina","Norwalk","Pomona","El Monte","Culver City","Beverly Hills","Hawthorne","Lakewood","Whittier","Redondo Beach","Manhattan Beach","Malibu","Calabasas","Arcadia"],"New York City":["Harlem","Washington Heights","Inwood","Upper West Side","Upper East Side","Chelsea","Greenwich Village","East Village","Lower East Side","SoHo","Tribeca","Hell's Kitchen","Morningside Heights","Hamilton Heights","East Harlem","Astoria","Long Island City","Flushing","Jamaica","Jackson Heights","Forest Hills","Bayside","Fresh Meadows","Ridgewood","Sunnyside","Woodside","Elmhurst","Corona","Howard Beach","Rockaway Beach","Williamsburg","Bushwick","Bedford-Stuyvesant","Park Slope","Bay Ridge","Coney Island","Crown Heights","Flatbush","Bensonhurst","Greenpoint","Dyker Heights","Sunset Park","Canarsie","Red Hook","Fort Greene","Riverdale","Fordham","Morris Park","Pelham Bay","Throgs Neck","Kingsbridge","Soundview","Woodlawn","Wakefield","City Island","St. George","Tottenville","Great Kills","New Dorp","Port Richmond","Stapleton","Dongan Hills","Eltingville","West Brighton"],"Upstate New York":["Buffalo","Rochester","Syracuse","Albany","Yonkers","White Plains","Mount Vernon","New Rochelle","Poughkeepsie","Nyack","Haverstraw","New City","Newburgh","Middletown","Goshen","Warwick","Kingston","Utica","Binghamton","Schenectady","Troy","Saratoga Springs","Ithaca","Elmira","Watertown","Plattsburgh","Peekskill","Ossining","Tarrytown","Suffern","Spring Valley","Monsey","Nanuet","Pearl River","Port Jervis","Beacon","Catskill","Hudson","Glens Falls","Rome","Auburn","Cortland","Canandaigua","Geneva","Jamestown"],"Long Island":["Hempstead","Huntington","Brookhaven","Islip","Babylon","Oyster Bay","Freeport","Long Beach","Valley Stream","Garden City","Mineola","Westbury","Levittown","Massapequa","Farmingdale","Hicksville","Syosset","Rockville Centre","Lynbrook","Patchogue","Ronkonkoma","Smithtown","Riverhead","Southampton","East Hampton"],"Chicago":["Chicago","Evanston","Oak Park","Schaumburg","Skokie","Cicero","Des Plaines","Arlington Heights","Palatine","Elk Grove Village","Park Ridge","Mount Prospect","Niles","Berwyn","Elmwood Park","Wilmette","Glenview","Wheeling","Rolling Meadows","Morton Grove","Lincolnwood","River Forest","Forest Park","Maywood"],"Illinois State":["Rockford","Peoria","Springfield","Champaign","Bloomington","Decatur","Joliet","Normal","Quincy","Moline","Rock Island","Belleville","Alton","Carbondale","DeKalb","Danville","Galesburg","Kankakee","Mattoon","Charleston","Edwardsville","Ottawa","Sterling","Freeport"],"DFW Metro":["Dallas","Fort Worth","Arlington","Plano","Frisco","Denton","Irving","Garland","Grand Prairie","McKinney","Richardson","Carrollton","Lewisville","Allen","Grapevine","Southlake","Flower Mound","Mansfield","Euless","Bedford","Hurst","Coppell","Mesquite","Weatherford"],"Houston Metro":["Houston","Sugar Land","Pearland","Conroe","Pasadena","The Woodlands","Baytown","League City","Missouri City","Katy","Friendswood","Deer Park","La Porte","Stafford","Bellaire","Humble","Tomball","Rosenberg","Richmond","Galveston","Texas City","Alvin","Webster","Magnolia"],"Texas State":["Austin","San Antonio","El Paso","Lubbock","Waco","Corpus Christi","Amarillo","Laredo","Brownsville","McAllen","Abilene","Midland","Odessa","Killeen","Temple","College Station","Bryan","San Angelo","Tyler","Longview","Beaumont","Victoria","Harlingen","San Marcos"],"North Florida":["Jacksonville","Tallahassee","Gainesville","Pensacola","Ocala","St. Augustine","Panama City","Palm Coast","Lake City","Crestview","Fort Walton Beach","Niceville","Destin","Milton","Marianna","Live Oak","Fernandina Beach","Orange Park","Ponte Vedra Beach","Palatka","DeLand","Daytona Beach","New Smyrna Beach","Titusville"],"South Florida":["Miami","Fort Lauderdale","West Palm Beach","Boca Raton","Naples","Homestead","Hialeah","Pembroke Pines","Hollywood","Coral Springs","Pompano Beach","Davie","Plantation","Sunrise","Miramar","Doral","Coral Gables","Kendall","Fort Myers","Cape Coral","Bonita Springs","Tampa","St. Petersburg","Orlando","Kissimmee"]};
const boysFirst=["Jalen", "Marcus", "Ethan", "Noah", "Malik", "Tyler", "Diego", "Caleb", "Owen", "Andre", "Isaiah", "Luke", "Dylan", "Mason", "Jordan", "Cameron", "Xavier", "Logan", "Adrian", "Nico", "Jayden", "Elijah", "Connor", "Mateo", "Liam", "Aiden", "Jackson", "Henry", "Levi", "Sebastian", "Julian", "Ezra", "Asher", "Hudson", "Roman", "Micah", "Ian", "Cole", "Wyatt", "Blake", "Trevor", "Brady", "Gavin", "Miles", "Dominic", "Antonio", "Miguel", "Luis", "Jose", "Carlos", "Angel", "Rafael", "Alejandro", "Javier", "Enzo", "Marco", "Giovanni", "Dante", "Luca", "Declan", "Finn", "Sean", "Ryan", "Patrick", "Brendan", "Kevin", "Colin", "Darius", "DeAndre", "Trevon", "Jamal", "Kendrick", "Terrence", "Zion", "Nasir", "Amari", "Khalil", "Malachi", "Tariq", "Kai"], girlsFirst=["Maya", "Ava", "Sofia", "Olivia", "Emma", "Isabella", "Mia", "Camila", "Layla", "Zoe", "Chloe", "Natalie", "Grace", "Aaliyah", "Leah", "Ella", "Jasmine", "Naomi", "Hailey", "Gianna", "Kayla", "Avery", "Riley", "Nora", "Sophia", "Amelia", "Harper", "Evelyn", "Luna", "Aria", "Scarlett", "Penelope", "Elena", "Gabriella", "Valentina", "Isla", "Lucy", "Claire", "Audrey", "Stella", "Madison", "Addison", "Savannah", "Brooklyn", "Kennedy", "Peyton", "Reagan", "Kylie", "Mackenzie", "Autumn", "Maria", "Daniela", "Lucia", "Mariana", "Eliana", "Ana", "Carolina", "Bianca", "Carmen", "Gabriela", "Maeve", "Fiona", "Siobhan", "Keira", "Erin", "Niamh", "Saoirse", "Imani", "Nia", "Zuri", "Amina", "Jada", "Brianna", "Destiny", "Tiana", "Amara", "Kaiya", "Leilani", "Malia", "Kehlani"], lastNames=["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Shah", "Singh", "Kaur", "O'Connor", "O'Brien", "Sullivan", "Murphy", "Kelly", "Walsh", "Ryan", "Doyle", "McCarthy", "Fitzgerald", "Campbell", "MacDonald", "Cohen", "Goldberg", "Rosen", "Levine", "Kowalski", "Nowak", "Petrov", "Ivanov", "Chen", "Wang"];
const regionalFirst={"Puerto Rico": {"boys": ["Luis", "Jose", "Carlos", "Rafael", "Javier", "Miguel", "Angel", "Mateo"], "girls": ["Sofia", "Camila", "Valentina", "Mariana", "Gabriela", "Lucia", "Ana", "Daniela"]}, "Hawaii": {"boys": ["Kai", "Noah", "Koa", "Makai", "Keanu", "Nico"], "girls": ["Leilani", "Malia", "Kaiya", "Kehlani", "Maya", "Nia"]}, "American Samoa": {"boys": ["Malachi", "Tavita", "Tui", "Sione", "Noah", "Kai"], "girls": ["Malia", "Leilani", "Ana", "Nia", "Amara", "Maya"]}, "Guam & Northern Mariana Islands": {"boys": ["Kai", "Mateo", "Nico", "Angel", "Noah", "Luis"], "girls": ["Mia", "Sofia", "Leilani", "Camila", "Malia", "Ana"]}, "New York City": {"boys": ["Jamal", "Nasir", "Mateo", "Diego", "Malik", "Aiden", "Andre", "Darius"], "girls": ["Aaliyah", "Jada", "Maya", "Sofia", "Camila", "Imani", "Nia", "Gianna"]}, "Long Island": {"boys": ["Ryan", "Sean", "Patrick", "Brendan", "Connor", "Liam", "Dylan"], "girls": ["Keira", "Erin", "Maeve", "Fiona", "Mackenzie", "Ava", "Madison"]}, "Upstate New York": {"boys": ["Connor", "Owen", "Luke", "Ethan", "Gavin", "Cole", "Ryan"], "girls": ["Ava", "Emma", "Claire", "Riley", "Natalie", "Grace", "Madison"]}, "Eastern Pennsylvania": {"boys": ["Ryan", "Sean", "Connor", "Malik", "Jalen", "Luke"], "girls": ["Ava", "Emma", "Jada", "Maya", "Grace", "Natalie"]}, "Western Pennsylvania": {"boys": ["Connor", "Brady", "Cole", "Luke", "Ryan", "Gavin"], "girls": ["Madison", "Avery", "Grace", "Claire", "Riley", "Emma"]}, "DFW Metro": {"boys": ["Jackson", "Wyatt", "Mason", "Jalen", "Trevon", "Mateo", "Carlos"], "girls": ["Savannah", "Madison", "Avery", "Camila", "Sofia", "Jada"]}, "Houston Metro": {"boys": ["Jalen", "Malik", "Trevon", "Carlos", "Miguel", "Mateo", "Andre"], "girls": ["Aaliyah", "Camila", "Sofia", "Jada", "Imani", "Valentina"]}, "Texas State": {"boys": ["Wyatt", "Cole", "Jackson", "Mateo", "Luis", "Carlos"], "girls": ["Savannah", "Avery", "Sofia", "Camila", "Reagan", "Madison"]}, "Los Angeles": {"boys": ["Diego", "Mateo", "Carlos", "Javier", "Kai", "Nico", "Jalen"], "girls": ["Camila", "Sofia", "Valentina", "Mia", "Leilani", "Aaliyah"]}, "Northern California": {"boys": ["Kai", "Nico", "Ethan", "Mateo", "Julian", "Aiden"], "girls": ["Maya", "Sofia", "Avery", "Mia", "Zoe", "Camila"]}, "Southern California": {"boys": ["Diego", "Mateo", "Kai", "Nico", "Javier", "Sebastian"], "girls": ["Camila", "Sofia", "Mia", "Valentina", "Leilani", "Zoe"]}, "Chicago": {"boys": ["Malik", "Jalen", "Darius", "Ryan", "Mateo", "Andre"], "girls": ["Aaliyah", "Jada", "Imani", "Ava", "Maya", "Gianna"]}, "Illinois State": {"boys": ["Luke", "Connor", "Gavin", "Ryan", "Ethan", "Cole"], "girls": ["Emma", "Avery", "Grace", "Claire", "Madison", "Natalie"]}, "North Florida": {"boys": ["Jackson", "Malik", "Jalen", "Mateo", "Dylan", "Andre"], "girls": ["Aaliyah", "Savannah", "Camila", "Maya", "Ava", "Jada"]}, "South Florida": {"boys": ["Mateo", "Diego", "Carlos", "Javier", "Malik", "Kai"], "girls": ["Camila", "Sofia", "Valentina", "Gabriela", "Aaliyah", "Maya"]}};
const regionalLast={"Puerto Rico": ["Rivera", "Rodriguez", "Martinez", "Torres", "Lopez", "Cruz", "Ortiz", "Ramos"], "Hawaii": ["Lee", "Kim", "Santos", "Kahale", "Kealoha", "Nakamura", "Silva"], "American Samoa": ["Tufele", "Faalogo", "Tagovailoa", "Iosefa", "Tuiasosopo", "Satele"], "Guam & Northern Mariana Islands": ["Cruz", "Camacho", "Flores", "Santos", "Guerrero", "Calvo"], "New York City": ["Rodriguez", "Rivera", "Cohen", "Goldberg", "Nguyen", "Lee", "Murphy", "Jackson"], "Long Island": ["O'Connor", "Murphy", "Kelly", "Sullivan", "Ryan", "Walsh", "Doyle"], "Upstate New York": ["Miller", "Brown", "Kelly", "Murphy", "Johnson", "Thompson"], "Eastern Pennsylvania": ["Kelly", "Murphy", "Johnson", "Smith", "Rivera", "Cohen"], "Western Pennsylvania": ["Miller", "Kelly", "Campbell", "Murphy", "Smith", "Kowalski"], "DFW Metro": ["Smith", "Johnson", "Garcia", "Martinez", "Williams", "Brown"], "Houston Metro": ["Garcia", "Rodriguez", "Johnson", "Williams", "Martinez", "Brown"], "Texas State": ["Garcia", "Martinez", "Smith", "Johnson", "Rodriguez", "Brown"], "Los Angeles": ["Garcia", "Rodriguez", "Martinez", "Lopez", "Nguyen", "Kim"], "Northern California": ["Lee", "Nguyen", "Chen", "Garcia", "Patel", "Kim"], "Southern California": ["Garcia", "Lopez", "Rodriguez", "Nguyen", "Kim", "Martinez"], "Chicago": ["Johnson", "Williams", "Kowalski", "Murphy", "Garcia", "Lee"], "Illinois State": ["Miller", "Johnson", "Smith", "Brown", "Campbell", "Kelly"], "North Florida": ["Johnson", "Williams", "Brown", "Smith", "Garcia", "Jackson"], "South Florida": ["Garcia", "Rodriguez", "Martinez", "Lopez", "Rivera", "Torres"]};

const populationTier={"Washington D.C.": 2, "Puerto Rico": 3, "U.S. Virgin Islands": 1, "American Samoa": 1, "Guam & Northern Mariana Islands": 1, "Alabama": 3, "Alaska": 1, "Arizona": 4, "Arkansas": 2, "Colorado": 3, "Connecticut": 3, "Delaware": 1, "Georgia": 5, "Hawaii": 2, "Idaho": 2, "Indiana": 4, "Iowa": 3, "Kansas": 3, "Kentucky": 3, "Louisiana": 3, "Maine": 2, "Maryland": 4, "Massachusetts": 4, "Michigan": 5, "Minnesota": 4, "Mississippi": 2, "Missouri": 4, "Montana": 1, "Nebraska": 2, "Nevada": 3, "New Hampshire": 2, "New Jersey": 5, "New Mexico": 2, "North Carolina": 5, "North Dakota": 1, "Ohio": 5, "Oklahoma": 3, "Oregon": 3, "Rhode Island": 1, "South Carolina": 4, "South Dakota": 1, "Tennessee": 4, "Utah": 3, "Vermont": 1, "Virginia": 5, "Washington": 4, "West Virginia": 2, "Wisconsin": 4, "Wyoming": 1, "Eastern Pennsylvania": 4, "Western Pennsylvania": 3, "Northern California": 4, "Southern California": 5, "Los Angeles": 4, "New York City": 5, "Upstate New York": 4, "Long Island": 3, "Chicago": 3, "Illinois State": 4, "DFW Metro": 4, "Houston Metro": 4, "Texas State": 5, "North Florida": 5, "South Florida": 5};
function populationTalentShift(t){return ((populationTier[t]||3)-3)*1.15}
const legacyLast={"Washington D.C.": ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Jackson", "Van Buren", "Harrison", "Tyler", "Polk", "Taylor", "Fillmore", "Pierce", "Buchanan", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "McKinley", "Roosevelt", "Taft", "Wilson", "Harding", "Coolidge", "Hoover", "Truman", "Eisenhower", "Kennedy", "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Obama", "Biden"], "Puerto Rico": ["Bad Bunny", "Clemente", "Martin", "Miranda", "Ayala"], "Los Angeles": ["Kardashian", "DiCaprio", "Broadus", "Bryant", "Baird"], "New York City": ["Jeter", "Pacino", "De Niro", "Lopez", "Carter"], "Long Island": ["Seinfeld", "Carey", "Joel", "Baldwin"], "Chicago": ["Jordan", "Winfrey", "West", "Obama"], "Illinois State": ["Lincoln", "Reagan"], "Houston Metro": ["Knowles", "Scott", "Bush", "Olajuwon"], "DFW Metro": ["Badu", "Gomez", "Aikman", "Nowitzki"], "Texas State": ["McConaughey", "Nelson", "Strait", "Austin"], "North Florida": ["Tebow", "Van Zant"], "South Florida": ["Marino", "Wade", "Grande", "Perez"], "Northern California": ["Curry", "Jobs", "Garcia", "Gordon"], "Southern California": ["Hawk", "Seau", "Gwynn"], "Massachusetts": ["Kennedy", "Affleck", "Damon", "Wahlberg"], "New Jersey": ["Springsteen", "Sinatra", "Bongiovi"], "Georgia": ["King", "Carter", "Benjamin"], "Arkansas": ["Clinton", "Cash"], "Kentucky": ["Ali", "Clooney"], "Louisiana": ["Armstrong", "Brees", "Carter"], "Maryland": ["Phelps", "Ripken"], "Michigan": ["Ford", "Mathers", "Ciccone"], "Minnesota": ["Nelson", "Zimmerman"], "Mississippi": ["Presley", "Winfrey"], "Missouri": ["Truman", "Clemens"], "Nebraska": ["Buffett", "Brando"], "Nevada": ["Agassi"], "North Carolina": ["Jordan", "Earnhardt"], "Ohio": ["James", "Spielberg"], "Oklahoma": ["Brooks", "Shelton", "McEntire"], "Oregon": ["Knight", "Bowerman", "Groening"], "Tennessee": ["Parton", "Cash", "Presley"], "Utah": ["Osmond", "Young"], "Virginia": ["Washington", "Jefferson", "Madison"], "Washington": ["Cobain", "Gates", "Hendrix"], "West Virginia": ["Paisley"], "Eastern Pennsylvania": ["Franklin", "Bryant", "Moore"], "Western Pennsylvania": ["Warhol", "Rooney", "Clemente"]};
const flavorLast={"Alabama": ["Parks", "Williams", "Jackson", "Harris"], "Alaska": ["Young", "Nelson", "Martin", "Hansen"], "Arizona": ["McCain", "Goldwater", "Johnson", "Garcia"], "Colorado": ["Elway", "Stone", "Parker", "Miller"], "Connecticut": ["Clemens", "Newman", "Cooper", "Murphy"], "Delaware": ["Biden", "DuPont", "Carney", "Bayard"], "Hawaii": ["Kamehameha", "Kealoha", "Nakamura", "Silva", "Lee"], "Idaho": ["Andrus", "Craig", "Johnson", "Miller"], "Indiana": ["Bird", "Letterman", "Jackson", "Miller"], "Iowa": ["Hoover", "Kutcher", "Miller", "Anderson"], "Kansas": ["Eisenhower", "Earhart", "Coleman", "Brown"], "Maine": ["King", "Collins", "Mitchell", "Allen"], "Montana": ["Dutton", "Anderson", "Campbell", "Young"], "New Hampshire": ["Sandler", "Webster", "Pierce", "Sullivan"], "New Mexico": ["O'Keeffe", "Martinez", "Chavez", "Baca"], "North Dakota": ["Anderson", "Olson", "Hansen", "Larson"], "Rhode Island": ["Farrelly", "Williams", "Greene", "Carpenter"], "South Carolina": ["Colbert", "Murray", "Williams", "Jenkins"], "South Dakota": ["Johnson", "Larson", "Anderson", "Jensen"], "Vermont": ["Coolidge", "Cohen", "Greenfield", "Miller"], "Wisconsin": ["Lombardi", "Rodgers", "Allen", "Anderson"], "Wyoming": ["Cheney", "Simpson", "Hansen", "Johnson"], "American Samoa": ["Tagovailoa", "Seau", "Tufele", "Satele"], "U.S. Virgin Islands": ["Duncan", "Ali", "Thomas", "Francis"], "Guam & Northern Mariana Islands": ["Cruz", "Camacho", "Guerrero", "Calvo"], "Upstate New York": ["Ball", "Eastman", "Douglas", "Anthony"]};
const attrs=["Speed","Explosiveness","Strength","Endurance","Agility","Coordination","Balance","Mobility","Precision","Reaction","Toughness","Composure","Awareness","Technique"];
const sports=["Wrestling","Track","Swimming","Tennis","Basketball","Football","Baseball/Softball","Hockey","Soccer","Lacrosse","Volleyball","Archery"];
const pointMap=[10,9,8,5,4,3,2,1];
const eventNames=["100m Sprint","Sandbag Carry","200m Freestyle","Mixed Doubles Tennis","Team Sports Day","Wrestling","Archery","1 Mile","Strength Gauntlet","Obstacle Course"];
const $=id=>document.getElementById(id);

let boys=[],girls=[],selBoy=null,selGirl=null,reps={boy:{},girl:{}},currentView="hundred";
let selectedProspectIds={boy:null,girl:null};
let eventLineups={boy:{},girl:{}},aiEventLineups={boy:{},girl:{}};
let gamesUiStarted=false,rosterReviewOpen=false;
let animationCapture=false,watchRaf=null,watchTimers=[];
let currentYear=2026,nextPlayerId=1,careerHistory=[],allPlayers={},leagueRosters={boy:{},girl:{}},teamStarters={boy:{},girl:{}},lastImprovementReport=null;
let dynastyView="games",leagueGender="boy",careerInitialized=false,seasonArchived=false;
const DYNASTY_SAVE_KEY="patriotGamesDynasty_v130";
const CAREER_SLOT_PREFIX="patriotGamesCareerSlot_";
const CAREER_SLOT_COUNT=5;
let activeCareerSlot=null;

let events={
 hundred:{boy:null,girl:null,started:false,complete:false},
 wrestling:{boy:null,girl:null,started:false,complete:false},
 mile:{boy:null,girl:null,started:false,complete:false},
 sandbag:{boy:null,girl:null,started:false,complete:false},
 teamsports:{boy:null,girl:null,started:false,complete:false},
 swim:{boy:null,girl:null,started:false,complete:false},
 strength:{boy:null,girl:null,started:false,complete:false},
 tennis:{started:false,complete:false,state:null},
 archery:{boy:null,girl:null,started:false,complete:false},
 obstacle:{boy:null,girl:null,started:false,complete:false}
};
let scores={boys:{},girls:{},combined:{}};

territories.forEach(t=>{scores.boys[t]=0;scores.girls[t]=0;scores.combined[t]=0});
const delegationGroups={
 "States":[
   "Alabama","Alaska","Arizona","Arkansas","Colorado","Connecticut","Delaware","Georgia","Hawaii","Idaho",
   "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota",
   "Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","North Carolina",
   "North Dakota","Ohio","Oklahoma","Oregon","Rhode Island","South Carolina","South Dakota","Tennessee","Utah",
   "Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
 ],
 "Territories":[
   "Washington D.C.","Puerto Rico","U.S. Virgin Islands","American Samoa","Guam & Northern Mariana Islands"
 ],
 "Cities / Metros":[
   "Los Angeles","New York City","Chicago","DFW Metro","Houston Metro"
 ],
 "Partial States":[
   "Eastern Pennsylvania","Western Pennsylvania","Northern California","Southern California","Upstate New York",
   "Long Island","Illinois State","Texas State","North Florida","South Florida"
 ]
};
const territorySelect=$("territorySelect");
Object.entries(delegationGroups).forEach(([label,names])=>{
 let group=document.createElement("optgroup");
 group.label=label;
 names.forEach(t=>{
   let o=document.createElement("option");
   o.value=t;o.textContent=t;
   group.appendChild(o);
 });
 territorySelect.appendChild(group);
});

function r(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function shuf(a){return [...a].sort(()=>Math.random()-.5)}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function gauss(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)}
function grade(v){if(v>=95)return"A+";if(v>=90)return"A";if(v>=85)return"A-";if(v>=80)return"B+";if(v>=75)return"B";if(v>=70)return"B-";if(v>=65)return"C+";if(v>=60)return"C";if(v>=55)return"C-";if(v>=50)return"D+";if(v>=45)return"D";if(v>=40)return"D-";return"F"}
function bgs(){let n=r(0,5);return shuf(sports).slice(0,n).map(s=>({sport:s,level:pick(["Low","Medium","High"])}))}
function core(age,t){
 const ageShift={15:-6,16:-2,17:5,18:8}[age]||0;
 const popShift=populationTalentShift(t);
 let base=clamp(Math.round(58+ageShift+popShift+gauss()*15),22,96),spread=r(8,23),o={};
 attrs.forEach(a=>o[a]=clamp(Math.round(base+gauss()*spread),20,99));
 o.Technique=clamp(Math.round(o.Technique+gauss()*5),20,99);
 o.Awareness=clamp(Math.round(o.Awareness+gauss()*4),20,99);
 o.Composure=clamp(Math.round(o.Composure+gauss()*4),20,99);
 return o
}
function ovr(a){return Math.round(Object.values(a).reduce((x,y)=>x+y,0)/Object.values(a).length)}

const brownOnlyTerritories=new Set(["Puerto Rico","U.S. Virgin Islands","American Samoa","Guam & Northern Mariana Islands"]);
function createPlayerFace(g,t=null){
 const forcedRace=brownOnlyTerritories.has(t)?"brown":null;
 return window.PatriotFaces?.generate?.(g==="girl"?"female":"male",forcedRace)||null
}
function ensurePlayerFace(a){
 if(!a)return null;
 if(!a.face)a.face=createPlayerFace(a.gender,a.territory);
 if(a.gender==="girl" && a.face?.pgFemaleRepairVersion===2){a.face=createPlayerFace("girl",a.territory);a.face.pgRecoveredFrom190=true}
 if(a.face){a.face.teamColors=["#b83232","#0b1f3a","#ffffff"];a.face.jersey={...(a.face.jersey||{}),id:"jersey3"};a.face.gender=a.gender==="girl"?"female":"male"}
 return a.face;
}
function playerFaceHTML(a,className=""){
 if(!a)return"";ensurePlayerFace(a);
 return `<div class="player-face ${className}" data-face-player-id="${a.id}" aria-label="${a.name} portrait"></div>`;
}
function renderPlayerFaces(root=document){
 if(!window.PatriotFaces)return;
 let nodes=[];
 if(root?.matches?.("[data-face-player-id]"))nodes.push(root);
 if(root?.querySelectorAll)nodes.push(...root.querySelectorAll("[data-face-player-id]"));
 nodes.forEach(el=>{
   if(el.dataset.faceRendered==="1")return;
   let a=findPlayerSnapshot(Number(el.dataset.facePlayerId))||allPlayers[Number(el.dataset.facePlayerId)];
   if(!a)return;ensurePlayerFace(a);
   try{window.PatriotFaces.display(el,a.face);el.dataset.faceRendered="1"}catch(err){console.warn("Face render failed",err)}
 });
}
function repairPlayerFaces(){
 Object.values(allPlayers||{}).forEach(ensurePlayerFace);
 ["boy","girl"].forEach(gender=>Object.values(leagueRosters?.[gender]||{}).flat().forEach(ensurePlayerFace));
 [boys,girls].flat().forEach(ensurePlayerFace);
}
function athlete(id,g,t,forcedAge=null){
 id=nextPlayerId++;
 let age=forcedAge??r(15,18),a=core(age,t);
 // Fifteen-year-old prospects should usually look developmental.
 // Most classes top out around the high-50s/low-60s, with uncommon 64-66
 // prospects and genuinely rare 67-70 phenoms.
 if(age===15){
   let initial=ovr(a),roll=Math.random(),cap;
   if(roll<0.02) cap=r(67,70);          // rare generational prospect
   else if(roll<0.17) cap=r(64,66);     // uncommon blue-chip 15-year-old
   else cap=r(58,63);                   // normal developmental prospect
   if(initial>cap){
     let scale=cap/initial;
     attrs.forEach(k=>a[k]=clamp(Math.round(a[k]*scale),20,99));
     while(ovr(a)>cap){
       let hi=attrs.reduce((best,k)=>a[k]>a[best]?k:best,attrs[0]);
       a[hi]=Math.max(20,a[hi]-1);
     }
   }
 }
 let baseFirst=g==="boy"?boysFirst:girlsFirst;
 let regFirst=regionalFirst[t]?.[g==="boy"?"boys":"girls"]||[];
 let regLast=regionalLast[t]||[];
 let legacy=legacyLast[t]||[],flavor=flavorLast[t]||[];
 let first=(regFirst.length&&Math.random()<0.58)?pick(regFirst):pick(baseFirst);
 let roll=Math.random(),last;
 if(legacy.length&&roll<0.16)last=pick(legacy);
 else if(flavor.length&&roll<0.36)last=pick(flavor);
 else if(regLast.length&&roll<0.70)last=pick(regLast);
 else last=pick(lastNames);
 let player={id,gender:g,territory:t,name:`${first} ${last}`,hometown:pick(hometowns[t]||[t]),age,weight:r(g==="boy"?140:110,g==="boy"?185:155),attrs:a,overall:ovr(a),backgrounds:bgs(),onRoster:true,isProspect:false,face:createPlayerFace(g,t)};
 allPlayers[id]=player;return player
}
function temperOpeningRosterPlayer(a){
 if(!a||a.age===15)return a;
 // Opening-year upper bounds stop randomly generated veterans from becoming
 // untouchable all-time legends before the dynasty even begins. These are
 // launch-roster caps only; future players can freely develop into the 90s.
 const capByAge={16:76,17:82,18:86};
 const cap=capByAge[a.age]??86;
 if(a.overall<=cap)return a;

 const scale=cap/a.overall;
 attrs.forEach(k=>a.attrs[k]=clamp(Math.round(a.attrs[k]*scale),20,99));
 while(ovr(a.attrs)>cap){
   const hi=attrs.reduce((best,k)=>a.attrs[k]>a.attrs[best]?k:best,attrs[0]);
   a.attrs[hi]=Math.max(20,a.attrs[hi]-1);
 }
 a.overall=ovr(a.attrs);
 a.openingRosterTempered=true;
 return a;
}
function makeUserPool(g,t,baseId){
 let coreRoster=[16,17,18].map((age,i)=>{let a=temperOpeningRosterPlayer(athlete(baseId+i,g,t,age));a.onRoster=true;a.isProspect=false;return a});
 let prospects=Array.from({length:5},(_,i)=>{let a=athlete(baseId+10+i,g,t,15);a.onRoster=false;a.isProspect=true;return a});
 return [...coreRoster,...prospects];
}
function bgBonus(a,s){let b=a.backgrounds.find(x=>x.sport===s);return b?{Low:1.2,Medium:2.8,High:5}[b.level]:0}
function eventTechnique(a,sport){
 return clamp(a.attrs.Technique + bgBonus(a,sport)*3.2,20,110);
}
function userAth(g){
 let pool=(g==="boy"?boys:girls).filter(a=>a.onRoster);
 let id=g==="boy"?selBoy:selGirl;
 return pool.find(a=>a.id===id)||[...pool].sort((a,b)=>b.overall-a.overall)[0]||null
}

const lineupEvents=[
 ["hundred","100m Sprint"],["sandbag","Sandbag Carry"],["swim","200m Freestyle"],["tennis","Mixed Tennis"],
 ["teamsports","Team Sports Day"],["wrestling","Wrestling"],["archery","Archery"],["mile","1 Mile"],
 ["strength","Strength Gauntlet"],["obstacle","Obstacle Course"]
];
function lineupRoster(g,t){
 const u=$("territorySelect").value;
 if(t===u)return (g==="boy"?boys:girls).filter(a=>a.onRoster);
 return currentRosterPlayers(g,t);
}
function eventSelectionScore(a,key){
 if(!a)return-9999;
 if(key==="hundred")return sprintScore(a);
 if(key==="sandbag")return sandbagScore(a);
 if(key==="swim")return swimScore(a);
 if(key==="mile")return mileScore(a);
 if(key==="wrestling")return wrestlingSkill(a);
 if(key==="archery")return archerySkill(a);
 if(key==="teamsports")return teamStageNames.reduce((z,x)=>z+teamStageAbility(a,x),0)/teamStageNames.length;
 if(key==="strength"){let c=strengthComponents(a,a.gender==="girl"?"girl":"boy");return a.attrs.Strength*.34+a.attrs.Explosiveness*.22+a.attrs.Toughness*.12+a.attrs.Endurance*.10+a.attrs.Technique*.08+a.attrs.Coordination*.05+a.attrs.Balance*.04+a.attrs.Mobility*.03+a.attrs.Composure*.02}
 if(key==="obstacle")return obstacleDefs.reduce((z,d)=>z+obstacleAbility(a,d),0)/obstacleDefs.length;
 if(key==="tennis")return tennisIndividualSkill(a);
 return a.overall||0;
}
function bestLineupAthlete(g,t,key){
 let roster=lineupRoster(g,t);if(!roster.length)return null;
 return [...roster].sort((a,b)=>eventSelectionScore(b,key)-eventSelectionScore(a,key))[0];
}
function ensureEventLineups(){
 const u=$("territorySelect").value;
 ["boy","girl"].forEach(g=>{
   eventLineups[g]=eventLineups[g]||{};
   lineupEvents.forEach(([key])=>{
     let roster=lineupRoster(g,u);
     if(!roster.some(a=>a.id===eventLineups[g][key]))eventLineups[g][key]=bestLineupAthlete(g,u,key)?.id??null;
   });
 });
 territories.filter(t=>t!==u).forEach(t=>["boy","girl"].forEach(g=>{
   aiEventLineups[g]=aiEventLineups[g]||{};aiEventLineups[g][t]=aiEventLineups[g][t]||{};
   lineupEvents.forEach(([key])=>aiEventLineups[g][t][key]=bestLineupAthlete(g,t,key)?.id??null);
 }));
}
function eventAthlete(t,g,key){
 const u=$("territorySelect").value;
 let roster=lineupRoster(g,t),id=t===u?eventLineups?.[g]?.[key]:aiEventLineups?.[g]?.[t]?.[key];
 return roster.find(a=>a.id===Number(id))||bestLineupAthlete(g,t,key)||selectedAthleteForTerritory(t,g);
}
function currentEventKey(){
 return currentView==="hundred"?"hundred":currentView;
}
function fieldForEvent(g,key){return territories.map(t=>eventAthlete(t,g,key))}
function lineupComplete(){
 return ["boy","girl"].every(g=>lineupEvents.every(([key])=>{
   const id=eventLineups?.[g]?.[key];
   return id!==null&&id!==undefined&&lineupRoster(g,$("territorySelect").value).some(a=>a.id===Number(id));
 }));
}
function refreshLineupSetupStatus(){updateSetupState()}
function renderEventLineupSetup(){}
function autoSelectEventLineup(){}


let pendingEventStart=null;
function eventLabelForKey(key){return Object.fromEntries(lineupEvents)[key]||key}
function entryRoster(gender){return (gender==="boy"?boys:girls).filter(a=>a.onRoster)}
function renderEntryPreview(gender,id){
 const a=entryRoster(gender).find(x=>x.id===Number(id)),box=$(gender==="boy"?"eventBoyPreview":"eventGirlPreview");
 if(!box||!a)return;
 box.innerHTML=`${playerFaceHTML(a,"face-event-entry")}<div><strong>${playerLinkHTML(a)}</strong><div class="small">${a.hometown} · Age ${a.age} · ${a.overall} OVR</div><div class="small">Event rating: ${Math.round(eventSelectionScore(a,pendingEventStart?.key||"hundred"))}</div></div>`;
 renderPlayerFaces(box);
}
function chooseAiEntriesForEvent(key){
 const u=$("territorySelect").value;
 ["boy","girl"].forEach(gender=>{
   aiEventLineups[gender]=aiEventLineups[gender]||{};
   territories.filter(t=>t!==u).forEach(t=>{
     aiEventLineups[gender][t]=aiEventLineups[gender][t]||{};
     aiEventLineups[gender][t][key]=bestLineupAthlete(gender,t,key)?.id??null;
   });
 });
}
function openEventEntrySelector(key,startFn){
 const ev=key==="hundred"?events.hundred:events[key];
 if(ev?.started){currentView=key;setEventView(key);return}
 if(!gamesUiStarted)return;
 pendingEventStart={key,startFn};
 const label=eventLabelForKey(key);
 $("eventEntryTitle").textContent=`Choose ${label} Entrants`;
 $("eventEntryHelp").textContent=key==="tennis"
   ?"Choose your boy and girl Mixed Doubles Tennis pair. These two athletes will compete together for this event."
   :"Choose one boy and one girl from your four-athlete rosters. These entries lock when the event starts.";
 const bs=$("eventBoyEntry"),gs=$("eventGirlEntry");bs.innerHTML="";gs.innerHTML="";
 [["boy",bs],["girl",gs]].forEach(([gender,sel])=>{
   let roster=entryRoster(gender),best=bestLineupAthlete(gender,$("territorySelect").value,key);
   roster.forEach(a=>{let o=document.createElement("option");o.value=a.id;o.textContent=`${a.name} · Age ${a.age} · ${a.overall} OVR · Event ${Math.round(eventSelectionScore(a,key))}`;sel.appendChild(o)});
   if(best)sel.value=String(best.id);
 });
 bs.onchange=()=>renderEntryPreview("boy",bs.value);
 gs.onchange=()=>renderEntryPreview("girl",gs.value);
 renderEntryPreview("boy",bs.value);renderEntryPreview("girl",gs.value);
 $("eventEntryAiNote").textContent=`AI delegations will independently select their best ${label} entrants from their four-athlete rosters.`;
 $("eventEntryModal").classList.remove("hidden");
}
function confirmEventEntry(){
 if(!pendingEventStart)return;
 const {key,startFn}=pendingEventStart;
 let boyId=Number($("eventBoyEntry").value),girlId=Number($("eventGirlEntry").value);
 if(!entryRoster("boy").some(a=>a.id===boyId)||!entryRoster("girl").some(a=>a.id===girlId))return;
 eventLineups.boy[key]=boyId;eventLineups.girl[key]=girlId;
 chooseAiEntriesForEvent(key);
 $("eventEntryModal").classList.add("hidden");
 pendingEventStart=null;
 currentView=key;
 startFn();
 saveDynasty();
}
function cancelEventEntry(){
 $("eventEntryModal").classList.add("hidden");pendingEventStart=null;
}

function ordinal(n){if(!n)return"";if(n%100>=11&&n%100<=13)return n+"th";return n+(n%10===1?"st":n%10===2?"nd":n%10===3?"rd":"th")}
function makeGroups(list,size){let s=shuf(list),out=[];for(let i=0;i<s.length;i+=size)out.push(s.slice(i,i+size));return out}
function fieldFor(g){let key=currentEventKey();return fieldForEvent(g,key)}
function recomputeCombined(){
 territories.forEach(t=>scores.combined[t]=(scores.boys[t]||0)+(scores.girls[t]||0));
}
function award(g,res){
 res.slice(0,8).forEach((x,i)=>{
   let p=pointMap[i]||0;
   if(g==="boy")scores.boys[x.a.territory]+=p;
   else scores.girls[x.a.territory]+=p;
 });
 recomputeCombined();
}
function competitionStarted(){return Object.values(events).some(e=>e.started)}


function deepCopy(x){return JSON.parse(JSON.stringify(x))}

let appNavStack=[];
function captureAppView(){
 let modal=null,modalData=null;
 if(!$("frivolityModal")?.classList.contains("hidden")){modal="frivolity";modalData=$("frivolityModal").dataset.frivKey||null}
 else if(!$("hometownModal")?.classList.contains("hidden")){modal="hometown";modalData={name:$("hometownTitle")?.dataset.hometown||$("hometownTitle")?.textContent||"",territory:$("hometownTitle")?.dataset.territory||""}}
 else if(!$("playerModal")?.classList.contains("hidden")){modal="player";modalData=Number($("playerModal").dataset.playerId)||null}
 return{
   dynastyView,
   leagueSeason:$("leagueSeasonSelect")?.value||"current",
   leagueTeam:$("leagueTeamSelect")?.value||$("territorySelect")?.value||"",
   leagueGender,
   historySeason:$("historySeasonSelect")?.value||"current",
   scrollY:window.scrollY||0,modal,modalData
 };
}
function pushAppView(){
 const v=captureAppView(),last=appNavStack[appNavStack.length-1];
 if(!last||JSON.stringify(last)!==JSON.stringify(v))appNavStack.push(v);
 updateBackButtons();
}
function restoreAppView(){
 const v=appNavStack.pop();if(!v)return;
 ["playerModal","hometownModal","frivolityModal"].forEach(id=>$(id)?.classList.add("hidden"));
 dynastyView=v.dynastyView||"history";leagueGender=v.leagueGender||"boy";
 renderDynastyNav();applyScreenState();populateHistorySelectors();
 if(v.leagueSeason&&$("leagueSeasonSelect"))$("leagueSeasonSelect").value=v.leagueSeason;
 if(v.leagueTeam&&$("leagueTeamSelect"))$("leagueTeamSelect").value=v.leagueTeam;
 if(v.historySeason&&$("historySeasonSelect"))$("historySeasonSelect").value=v.historySeason;
 if(dynastyView==="league")renderLeagueRosterBrowser();
 if(dynastyView==="history")renderHistoryScreen();
 if(v.modal==="frivolity"&&v.modalData){
   $("frivolityModal").classList.remove("hidden");$("frivolityModal").dataset.frivKey=v.modalData;renderFrivolityDetail(v.modalData);
 }else if(v.modal==="player"&&v.modalData){
   openPlayerCareer(v.modalData,true);
 }else if(v.modal==="hometown"&&v.modalData?.name){
   openHometownHistory(v.modalData.name,v.modalData.territory||null,true);
 }
 requestAnimationFrame(()=>window.scrollTo({top:v.scrollY||0,behavior:"auto"}));
 updateBackButtons();
}
function updateBackButtons(){
 document.querySelectorAll(".pageBackBtn,.modalBackBtn").forEach(b=>b.classList.toggle("hidden",!appNavStack.length));
}

function playerLinkHTML(a,label=null){
 if(!a)return"—";
 return `<span class="player-link" data-player-id="${a.id}">${label||a.name}</span>`;
}
function hometownLinkHTML(name,territory=null,label=null){
 if(!name)return"—";
 const esc=v=>String(v??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
 return `<span class="hometown-link" data-hometown="${esc(name)}" data-hometown-territory="${esc(territory||"")}">${esc(label||name)}</span>`;
}
function rosterQualifiedPlayerIds(){
 const ids=new Set();
 // Anyone appearing in an archived official roster definitely made a team.
 careerHistory.forEach(season=>["boy","girl"].forEach(g=>territories.forEach(t=>
   (season.rosters?.[g]?.[t]||[]).forEach(p=>ids.add(Number(p.id)))
 )));
 // Current official league rosters.
 ["boy","girl"].forEach(g=>territories.forEach(t=>
   (leagueRosters?.[g]?.[t]||[]).forEach(p=>ids.add(Number(p.id)))
 ));
 // During preseason setup, selected/current user roster athletes may still
 // live only in the boys/girls pools before finalizeUserRoster runs.
 [...(boys||[]),...(girls||[])].filter(p=>p?.onRoster).forEach(p=>ids.add(Number(p.id)));
 return ids;
}
function playerMadeRoster(p,qualifiedIds=null){
 if(!p)return false;
 const ids=qualifiedIds||rosterQualifiedPlayerIds();
 return ids.has(Number(p.id));
}
function hometownPlayers(name,territory=null){
 const qualified=rosterQualifiedPlayerIds(),byId=new Map(),add=p=>{
   if(!p||!qualified.has(Number(p.id))||p.hometown!==name)return;
   if(territory&&p.territory!==territory)return;
   const prior=byId.get(p.id);
   if(!prior||Number(p.age)>=Number(prior.age))byId.set(p.id,p);
 };
 // Use allPlayers for current/latest snapshots, but only after checking that
 // the athlete actually made a roster.
 Object.values(allPlayers||{}).forEach(add);
 careerHistory.forEach(season=>["boy","girl"].forEach(g=>territories.forEach(t=>(season.rosters?.[g]?.[t]||[]).forEach(add))));
 ["boy","girl"].forEach(g=>territories.forEach(t=>(leagueRosters?.[g]?.[t]||[]).forEach(add)));
 [...(boys||[]),...(girls||[])].filter(p=>p?.onRoster).forEach(add);
 return [...byId.values()].sort((a,b)=>a.name.localeCompare(b.name));
}
function openHometownHistory(name,territory=null,fromBack=false){
 if(!fromBack)pushAppView();
 ["playerModal","frivolityModal"].forEach(id=>$(id)?.classList.add("hidden"));
 const players=hometownPlayers(name,territory),box=$("hometownContent");
 $("hometownTitle").textContent=territory?`${name}, ${territory}`:name;
 $("hometownTitle").dataset.hometown=name;$("hometownTitle").dataset.territory=territory||"";
 box.innerHTML=players.length?`<div class="hometown-player-list">${players.map(p=>`
   <div class="hometown-player-row">
     ${playerFaceHTML(p,"face-hometown")}
     <div>
       <strong>${playerLinkHTML(p)}</strong>
       <div class="small">${teamLinkHTML(p.territory)} · ${p.gender==="boy"?"Boys":"Girls"} · Age ${playerDisplayAge(p.id,p)}</div>
     </div>
     <div>${ratingChip(p.overall,"",true)} OVR</div>
   </div>`).join("")}</div>`:`<p class="small">No recorded athletes from this hometown yet.</p>`;
 renderPlayerFaces(box);
 $("hometownModal").classList.remove("hidden");
}
function playerHoverHTML(a){
 if(!a)return"";
 let sports=(a.backgrounds||[]);
 let sportsHtml=sports.length?sports.map(b=>`<span class="hover-sport"><strong>${b.sport}</strong> · ${b.level}</span>`).join(""):`<span class="small">No formal event background</span>`;
 return `
   <div class="hover-player-head hover-player-with-face">
     ${playerFaceHTML(a,"face-hover")}
     <div class="hover-player-name"><strong>${a.name}</strong><div class="small">${a.territory}</div></div>
     <div class="hover-ovr">${ratingChip(a.overall,"",true)} OVR</div>
   </div>
   <div class="hover-meta"><span>Age <strong>${playerDisplayAge(a.id,a)}</strong></span><span>${a.hometown}</span><span>${a.weight} lb</span></div>
   <div class="hover-section-title">Attributes</div>
   <div class="hover-attrs">${attrs.map(k=>`<div><span>${k}</span>${ratingChip(a.attrs[k],"",true)}</div>`).join("")}</div>
   <div class="hover-section-title">Sports Background</div>
   <div class="hover-sports">${sportsHtml}</div>`;
}
function showPlayerHover(link,e){
 let id=Number(link.dataset.playerId),a=findPlayerSnapshot(id)||allPlayers[id];
 if(!a)return;
 let card=$("playerHoverCard");card.innerHTML=playerHoverHTML(a);card.classList.remove("hidden");renderPlayerFaces(card);positionPlayerHover(e);
}
function positionPlayerHover(e){
 let card=$("playerHoverCard");if(!card||card.classList.contains("hidden"))return;
 let pad=14,x=e.clientX+16,y=e.clientY+16,w=card.offsetWidth||410,h=card.offsetHeight||390;
 if(x+w>window.innerWidth-pad)x=Math.max(pad,e.clientX-w-18);
 if(y+h>window.innerHeight-pad)y=Math.max(pad,e.clientY-h-18);
 card.style.left=x+"px";card.style.top=y+"px";
}
function hidePlayerHover(){$("playerHoverCard")?.classList.add("hidden")}

function ratingTier(v){
 if(!Number.isFinite(Number(v)))return"rating-bad";
 v=Number(v);
 if(v>=90)return"rating-elite";
 if(v>=80)return"rating-great";
 if(v>=70)return"rating-good";
 if(v>=60)return"rating-average";
 if(v>=50)return"rating-below";
 if(v>=40)return"rating-poor";
 return"rating-bad";
}
function ratingChip(v,label="",includeGrade=false){
 v=Number(v);
 if(!Number.isFinite(v))return `<span class="rating-chip rating-bad">${label}—</span>`;
 return `<span class="rating-chip ${ratingTier(v)}">${label}${v}${includeGrade?` <span class="rating-grade">(${grade(v)})</span>`:""}</span>`;
}
function teamLinkHTML(t,label=null){return `<span class="team-link" data-team-name="${t}">${label||t}</span>`}
function currentAthleteSeasonPoints(a){return currentSeasonPlayerPoints(a.id,a.gender,a.territory)}
function teamHoverSeasonFromLink(link){
 // Explicit year attached to/near a historical record row wins.
 let row=link.closest?.("tr,.record-row,.standrow,.alltime-record-row,.hometown-record-row,.history-champ,.award-section");
 let yearNode=row?.querySelector?.("[data-season-year]");
 if(yearNode){
   let y=Number(yearNode.dataset.seasonYear);
   let s=careerHistory.find(x=>Number(x.year)===y);
   if(s)return s;
 }

 // Offseason review is inherently about the just-completed archived season.
 if(!$("offseasonReviewModal")?.classList.contains("hidden")&&offseasonReviewState?.season)return offseasonReviewState.season;
 if(!$("awardsModal")?.classList.contains("hidden")&&seasonArchived){
   let s=careerHistory.find(x=>Number(x.year)===Number(currentYear));
   if(s)return s;
 }

 // Historical History screen selection.
 if(dynastyView==="history"){
   let v=$("historySeasonSelect")?.value;
   if(v&&v!=="current"){
     let s=careerHistory.find(x=>String(x.year)===String(v));
     if(s)return s;
   }
 }

 // Historical League Rosters selection.
 if(dynastyView==="league"){
   let v=$("leagueSeasonSelect")?.value;
   if(v&&v!=="current"&&v!=="alltime"){
     let s=careerHistory.find(x=>String(x.year)===String(v));
     if(s)return s;
   }
 }
 return null;
}
function teamOverallTopTwo(t,gender,season=null){
 const roster=season
   ? (season.rosters?.[gender]?.[t]||[])
   : currentRosterPlayers(gender,t);
 return roster
   .map(a=>({
     a,
     points:season?seasonPlayerPoints(season,gender,t,a.id):currentAthleteSeasonPoints(a)
   }))
   .sort((x,y)=>y.a.overall-x.a.overall||y.points-x.points||x.a.name.localeCompare(y.a.name))
   .slice(0,2);
}
function teamHoverHTML(t,season=null){
 const renderGroup=(label,arr)=>`<div class="team-hover-simple-group"><strong>${label}</strong>${arr.map((x,i)=>`
   <div class="team-hover-athlete-row">
     <span>${i+1}. ${playerLinkHTML(x.a)}</span>
     <span><b>${x.a.overall} OVR</b> · ${x.a.age===15?"Fr":x.a.age===16?"So":x.a.age===17?"Jr":"Sr"} · ${x.points} pts</span>
   </div>`).join("")}</div>`;
 let boysTop=teamOverallTopTwo(t,"boy",season),girlsTop=teamOverallTopTwo(t,"girl",season);
 let combined=season?(season.scores?.combined?.[t]??0):(scores.combined?.[t]??0);
 let context=season?`${season.year} roster`:"Current roster";
 return `<div class="team-hover-head"><strong>${t}</strong><span>${combined} combined pts</span></div>
 <div class="small team-hover-note">${context} · highest-rated athletes · season points</div>
 <div class="team-hover-simple">${renderGroup("Boys",boysTop)}${renderGroup("Girls",girlsTop)}</div>`;
}
function showTeamHover(link,e){
 let t=link.dataset.teamName,card=$("teamHoverCard");if(!card||!t)return;
 let season=teamHoverSeasonFromLink(link);
 card.innerHTML=teamHoverHTML(t,season);card.classList.remove("hidden");positionTeamHover(e);
}
function positionTeamHover(e){
 let card=$("teamHoverCard");if(!card||card.classList.contains("hidden"))return;
 let pad=14,x=e.clientX+16,y=e.clientY+16,w=card.offsetWidth||520,h=card.offsetHeight||620;
 if(x+w>window.innerWidth-pad)x=Math.max(pad,e.clientX-w-18);
 if(y+h>window.innerHeight-pad)y=Math.max(pad,e.clientY-h-18);
 card.style.left=x+"px";card.style.top=y+"px";
}
function hideTeamHover(){$("teamHoverCard")?.classList.add("hidden")}
function seasonLinkHTML(year,label=null){return `<span class="season-link" data-season-year="${year}">${label||year}</span>`}
function athleteNameHTML(a){return a?playerLinkHTML(a):"—"}
function territoryHTML(t){return t?teamLinkHTML(t):"—"}

function openTeamHistory(t,year=null){
 pushAppView();
 ["playerModal","hometownModal","frivolityModal"].forEach(id=>$(id)?.classList.add("hidden"));
 showDynastyView("league");
 $("leagueTeamSelect").value=t;
 if(year!==null&&[...$("leagueSeasonSelect").options].some(o=>o.value===String(year)))$("leagueSeasonSelect").value=String(year);
 renderLeagueRosterBrowser();
}
function openSeasonHistory(year){
 pushAppView();
 ["playerModal","hometownModal","frivolityModal"].forEach(id=>$(id)?.classList.add("hidden"));
 showDynastyView("history");
 if([...$("historySeasonSelect").options].some(o=>o.value===String(year)))$("historySeasonSelect").value=String(year);
 renderHistoryScreen();
}
function currentRosterPlayers(g,t){return (leagueRosters[g]?.[t]||[]).filter(a=>a.onRoster!==false)}
function chooseAiStarter(g,t){
 let roster=currentRosterPlayers(g,t);
 if(!roster.length)return null;
 return [...roster].sort((a,b)=>(b.overall+gauss()*2)-(a.overall+gauss()*2))[0];
}
function selectedAthleteForTerritory(t,g){
 const userT=$("territorySelect").value;
 if(t===userT)return userAth(g);
 return reps[g]?.[t]||teamStarters[g]?.[t]||null;
}
function syncRepsFromLeague(){
 territories.forEach(t=>{
   if(t===$("territorySelect").value)return;
   ["boy","girl"].forEach(g=>{
     let starter=chooseAiStarter(g,t);
     teamStarters[g][t]=starter;
     reps[g][t]=starter;
   });
 });
}
function snapshotPlayer(a){
 return{id:a.id,name:a.name,gender:a.gender,territory:a.territory,hometown:a.hometown,age:a.age,weight:a.weight,overall:a.overall,attrs:deepCopy(a.attrs),backgrounds:deepCopy(a.backgrounds||[]),face:deepCopy(ensurePlayerFace(a))};
}
function initializeLeagueRosters(userT){
 leagueRosters={boy:{},girl:{}};teamStarters={boy:{},girl:{}};reps={boy:{},girl:{}};
 territories.forEach(t=>{
   ["boy","girl"].forEach(g=>{
     if(t===userT)return;
     leagueRosters[g][t]=[15,16,17,18].map(age=>age===15?athlete(0,g,t,age):temperOpeningRosterPlayer(athlete(0,g,t,age)));
   });
 });
 syncRepsFromLeague();
}
function finalizeUserRoster(){
 const t=$("territorySelect").value;
 leagueRosters.boy[t]=boys.filter(a=>a.onRoster);
 leagueRosters.girl[t]=girls.filter(a=>a.onRoster);
 if(selBoy===null)selBoy=[...leagueRosters.boy[t]].sort((a,b)=>b.overall-a.overall)[0]?.id??null;
 if(selGirl===null)selGirl=[...leagueRosters.girl[t]].sort((a,b)=>b.overall-a.overall)[0]?.id??null;
 teamStarters.boy[t]=userAth("boy");teamStarters.girl[t]=userAth("girl");
 reps.boy[t]=userAth("boy");reps.girl[t]=userAth("girl");
}

function developmentSnapshot(a){
 return{id:a.id,name:a.name,gender:a.gender,age:a.age,overall:a.overall,attrs:deepCopy(a.attrs),hometown:a.hometown};
}
function developmentDiff(before,after){
 let attrChanges={};attrs.forEach(k=>attrChanges[k]=(after.attrs[k]??0)-(before.attrs[k]??0));
 return{
   id:after.id,name:after.name,gender:after.gender,hometown:after.hometown,
   oldAge:before.age,newAge:after.age,oldOverall:before.overall,newOverall:after.overall,
   overallChange:after.overall-before.overall,attrChanges,attrs:deepCopy(after.attrs)
 };
}
function signedChange(v){return v>0?`+${v}`:v<0?`${v}`:""}
function renderImprovementReport(report){
 let box=$("improvementContent");if(!box||!report)return;
 $("improvementTitle").textContent=`${report.fromYear} → ${report.toYear} Player Improvements`;
 box.innerHTML="";
 ["boy","girl"].forEach(gender=>{
   let section=document.createElement("div");section.className="improvement-section";
   section.innerHTML=`<h3>${gender==="boy"?"Boys":"Girls"} Roster</h3>`;
   let rows=report.players.filter(x=>x.gender===gender);
   if(!rows.length)section.innerHTML+=`<p class="small">No returning athletes.</p>`;
   rows.forEach(p=>{
     let row=document.createElement("div");row.className="improvement-player";
     let deltaClass=p.overallChange>0?"dev-up":p.overallChange<0?"dev-down":"dev-flat";
     row.innerHTML=`
       <div class="improvement-player-head">
         <div><strong>${p.name}</strong><div class="small">${p.hometown} · Age ${p.oldAge} → ${p.newAge}</div></div>
         <div class="improvement-ovr">${ratingChip(p.oldOverall,"",true)} <span>→</span> ${ratingChip(p.newOverall,"",true)} <strong class="${deltaClass}">${signedChange(p.overallChange)||"0"} OVR</strong></div>
       </div>
       <div class="improvement-attrs">
         ${attrs.map(k=>{
           let d=p.attrChanges[k],cls=d>0?"dev-up":d<0?"dev-down":"dev-flat";
           return `<div><span>${k}</span><strong>${p.attrs[k]}</strong>${d?`<em class="${cls}">${signedChange(d)}</em>`:""}</div>`;
         }).join("")}
       </div>`;
     section.appendChild(row);
   });
   box.appendChild(section);
 });
}
function showImprovementReport(report){
 lastImprovementReport=report;renderImprovementReport(report);
 $("improvementModal").classList.remove("hidden");
}
function developPlayer(a){
 const oldAge=a.age,oldOverall=a.overall;
 a.age+=1;
 if(a.age>18)return false;

 // Development is intentionally volatile. Typical gains remain around:
 // 15→16: +2/+3, 16→17: +4/+5, 17→18: +2/+3,
 // but any individual offseason can now range from -2 to +10 OVR.
 const avgGain=oldAge===16?4.5:2.5;
 const targetDelta=clamp(Math.round(avgGain+gauss()*2.75),-2,10);
 const targetOverall=clamp(oldOverall+targetDelta,20,99);

 // Attributes develop unevenly so two athletes with the same OVR jump can
 // improve in very different ways.
 attrs.forEach(k=>{
   const mental=["Technique","Awareness","Composure"].includes(k)?0.35:0;
   const attrDelta=targetDelta+mental+gauss()*2.35;
   a.attrs[k]=clamp(Math.round(a.attrs[k]+attrDelta),20,99);
 });

 // Pull the aggregate back toward the sampled OVR target without erasing
 // the attribute-to-attribute variation above.
 let guard=0;
 while(ovr(a.attrs)!==targetOverall&&guard++<80){
   const direction=ovr(a.attrs)<targetOverall?1:-1;
   const candidates=attrs.filter(k=>direction>0?a.attrs[k]<99:a.attrs[k]>20);
   if(!candidates.length)break;
   // Nudge several random attributes per pass so the final OVR can move
   // while retaining a varied development profile.
   const count=Math.min(candidates.length,Math.max(2,Math.ceil(attrs.length*.35)));
   for(let i=0;i<count;i++){
     const k=candidates[Math.floor(Math.random()*candidates.length)];
     a.attrs[k]=clamp(a.attrs[k]+direction,20,99);
   }
 }
 a.overall=ovr(a.attrs);
 return true;
}
function aiRecruit(g,t){
 let pool=Array.from({length:5},()=>{let a=athlete(0,g,t,15);a.onRoster=false;a.isProspect=true;return a});
 pool.sort((a,b)=>b.overall-a.overall);
 let pickIndex=Math.random()<.72?0:(Math.random()<.7?1:r(0,Math.min(4,pool.length-1)));
 let chosen=pool[pickIndex];chosen.onRoster=true;chosen.isProspect=false;
 return chosen;
}
function resetEventState(){
 events={
  hundred:{boy:null,girl:null,started:false,complete:false},wrestling:{boy:null,girl:null,started:false,complete:false},
  mile:{boy:null,girl:null,started:false,complete:false},sandbag:{boy:null,girl:null,started:false,complete:false},
  teamsports:{boy:null,girl:null,started:false,complete:false},swim:{boy:null,girl:null,started:false,complete:false},
  strength:{boy:null,girl:null,started:false,complete:false},tennis:{started:false,complete:false,state:null},
  archery:{boy:null,girl:null,started:false,complete:false},obstacle:{boy:null,girl:null,started:false,complete:false}
 };
 scores={boys:{},girls:{},combined:{}};territories.forEach(x=>{scores.boys[x]=0;scores.girls[x]=0;scores.combined[x]=0});
 seasonArchived=false;
}
function buildPlacementsArchive(){
 let out={boy:{},girl:{}};
 ["boy","girl"].forEach(g=>territories.forEach(t=>{
   out[g][t]={};
   matrixColumns.forEach(c=>{
     try{out[g][t][c.k]=placementCell(g,t,c.k)}
     catch(err){console.warn("Archive placement unavailable",g,t,c.k,err);out[g][t][c.k]="—"}
   });
 }));
 return out;
}

function matrixKeyForLineup(key){
 return key==="hundred"?"100":key==="teamsports"?"teamsports":key;
}
function archivedSeasonEventLineups(){
 const u=$("territorySelect").value,out={boy:{},girl:{}};
 ["boy","girl"].forEach(gender=>territories.forEach(t=>{
   out[gender][t]={};
   lineupEvents.forEach(([key])=>{
     out[gender][t][key]=t===u?(eventLineups?.[gender]?.[key]??null):(aiEventLineups?.[gender]?.[t]?.[key]??bestLineupAthlete(gender,t,key)?.id??null);
   });
 }));
 return out;
}
function seasonEntryId(season,g,t,key){
 return season.eventLineups?.[g]?.[t]?.[key]??season.starters?.[g]?.[t]??null;
}
function placementPoints(key,place){
 place=Number(place);if(!Number.isFinite(place)||place<1)return 0;
 if(key==="wrestling")return ({1:10,2:8,3:5,4:2})[place]||0;
 return pointMap[place-1]||0;
}
function seasonAthleteEventStats(season){
 let map={};
 ["boy","girl"].forEach(gender=>territories.forEach(t=>{
   lineupEvents.forEach(([key,label])=>{
     let id=seasonEntryId(season,gender,t,key);if(!id)return;
     let p=season.rosters?.[gender]?.[t]?.find(x=>x.id===id)||findPlayerSnapshot(id);if(!p)return;
     let mk=matrixKeyForLineup(key),place=season.placements?.[gender]?.[t]?.[mk],pts=placementPoints(key,place);
     let row=map[id]||(map[id]={p,gender,team:t,starts:0,top4:0,wins:0,points:0,events:[]});
     row.starts++;row.points+=pts;if(Number(place)<=4)row.top4++;if(String(place)==="1")row.wins++;
     row.events.push({key,label,place:Number(place)||null,points:pts});
   });
 }));
 return Object.values(map);
}
function seasonTeamEventWins(season,t,category){
 let genders=category==="boys"?["boy"]:category==="girls"?["girl"]:["boy","girl"],wins=0,seenTennis=false;
 genders.forEach(gender=>lineupEvents.forEach(([key])=>{
   let mk=matrixKeyForLineup(key);
   if(String(season.placements?.[gender]?.[t]?.[mk])==="1"){
     if(category==="combined"&&key==="tennis"){if(seenTennis)return;seenTennis=true}
     wins++;
   }
 }));
 return wins;
}
function archiveCurrentSeason(){
 if(seasonArchived)return careerHistory.find(x=>x.year===currentYear);
 finalizeUserRoster();
 const rosterSnap={boy:{},girl:{}};
 ["boy","girl"].forEach(g=>territories.forEach(t=>rosterSnap[g][t]=(leagueRosters[g][t]||[]).map(snapshotPlayer)));
 const starters={boy:{},girl:{}};
 ["boy","girl"].forEach(g=>territories.forEach(t=>starters[g][t]=(t===$("territorySelect").value?userAth(g):teamStarters[g][t])?.id||null));
 const placements=buildPlacementsArchive();
 let season={
   year:currentYear,userTerritory:$("territorySelect").value,
   scores:deepCopy(scores),rosters:rosterSnap,starters,placements,eventLineups:archivedSeasonEventLineups(),
   champions:{
     boys:fullStandingRows(scores.boys)[0]?.t||"—",
     girls:fullStandingRows(scores.girls)[0]?.t||"—",
     combined:fullStandingRows(scores.combined)[0]?.t||"—"
   }
 };
 careerHistory.push(season);seasonArchived=true;
 saveDynasty();
 return season;
}
function seasonPlayerPoints(season,g,t,id){
 let stats=seasonAthleteEventStats(season).find(x=>x.p.id===Number(id)&&x.gender===g&&x.team===t);
 return stats?.points||0;
}
function currentSeasonStarterId(g,t){return (t===$("territorySelect").value?userAth(g):teamStarters[g]?.[t])?.id||null}
function currentEventEntryId(g,t,key){
 const u=$("territorySelect").value;
 return t===u?(eventLineups?.[g]?.[key]??null):(aiEventLineups?.[g]?.[t]?.[key]??null);
}
function currentSeasonPlayerPoints(id,g,t){
 id=Number(id);let total=0;
 mainEventColumns().forEach(c=>{
   const key=lineupKeyForMatrix(c.k);
   if(!eventIsCompleteForKey(c.k))return;
   if(Number(currentEventEntryId(g,t,key))!==id)return;
   const place=placementCell(g,t,c.k);
   total+=placementPoints(key,place);
 });
 return total;
}
function eventIsCompleteForKey(key){
 if(key==="100")return events.hundred.complete;
 if(key==="sandbag"||key.startsWith("sb:"))return events.sandbag.complete;
 if(key==="swim")return events.swim.complete;
 if(key==="tennis")return events.tennis.complete;
 if(key==="teamsports"||key.startsWith("ts:"))return events.teamsports.complete;
 if(key==="wrestling")return events.wrestling.complete;
 if(key==="archery"||key.startsWith("ar:"))return events.archery.complete;
 if(key==="mile")return events.mile.complete;
 if(key==="strength"||key.startsWith("st:"))return events.strength.complete;
 if(key==="obstacle"||key.startsWith("ob:"))return events.obstacle.complete;
 return false;
}
function currentSeasonPlayerPlacements(id,g,t){
 id=Number(id);let out={};
 const hasStartedAny=lineupEvents.some(([key])=>{
   const ev=events[key==="hundred"?"hundred":key];
   return !!ev?.started&&Number(currentEventEntryId(g,t,key))===id;
 });
 matrixColumns.forEach(c=>{
   const key=lineupKeyForMatrix(c.k),ev=events[key==="hundred"?"hundred":key];
   const entered=Number(currentEventEntryId(g,t,key))===id;
   if(entered&&eventIsCompleteForKey(c.k))out[c.k]=placementCell(g,t,c.k);
   else if(!entered&&hasStartedAny&&ev?.started)out[c.k]="X";
   else out[c.k]="—";
 });
 return out;
}
function currentPlayerSeasonRow(id){
 id=Number(id);
 let p=allPlayers[id];if(!p)return null;
 let g=p.gender,t=p.territory;
 let roster=(leagueRosters[g]?.[t]||[]);
 if(!roster.some(x=>x.id===id)){
   // User roster before Begin Games can still live in boys/girls arrays.
   let pool=g==="boy"?boys:girls;
   if(!pool.some(x=>x.id===id&&x.onRoster))return null;
 }
 let starts=lineupEvents.filter(([key])=>Number(currentEventEntryId(g,t,key))===id&&events[key==="hundred"?"hundred":key]?.started).length;
 return{
   year:currentYear,g,t,p:snapshotPlayer(p),starter:starts>0,starts,
   points:currentSeasonPlayerPoints(id,g,t),
   placements:currentSeasonPlayerPlacements(id,g,t),
   current:true
 };
}
function playerHistoricalSeasons(id){
 let rows=[];
 recordSeasonsIncludingCurrent().forEach(season=>{
   ["boy","girl"].forEach(g=>territories.forEach(t=>{
     let p=season.rosters?.[g]?.[t]?.find(x=>x.id===id);
     if(p)rows.push({year:season.year,g,t,p,starter:browserPlayerStarts(p,g,t,season)>0,starts:browserPlayerStarts(p,g,t,season),points:seasonPlayerPoints(season,g,t,id),placements:browserPlayerPlacements(p,g,t,season)});
   }));
 });
 return rows.sort((a,b)=>a.year-b.year);
}
function serializeDynastyState(){
 finalizeUserRoster?.();
 return{
   version:"2.2.9",savedAt:new Date().toISOString(),
   currentYear,nextPlayerId,careerHistory,userTerritory:$("territorySelect")?.value||null,
   allPlayers,leagueRosters,teamStarters,reps,eventLineups,aiEventLineups,
   boys,girls,selBoy,selGirl,selectedProspectIds,events,scores,currentView,
   gamesUiStarted,rosterReviewOpen,dynastyView,leagueGender,
   careerInitialized,seasonArchived,activeCareerSlot,lastImprovementReport
 };
}
function repairPlayerOveralls(){
 repairPlayerFaces();
 Object.values(allPlayers||{}).forEach(p=>{
   if(p?.attrs&&(!Number.isFinite(p.overall)))p.overall=ovr(p.attrs);
 });
 ["boy","girl"].forEach(g=>Object.values(leagueRosters?.[g]||{}).flat().forEach(p=>{
   if(p?.attrs&&(!Number.isFinite(p.overall)))p.overall=ovr(p.attrs);
 }));
 [boys,girls].flat().forEach(p=>{
   if(p?.attrs&&(!Number.isFinite(p.overall)))p.overall=ovr(p.attrs);
 });
}
function restoreDynastyState(state){
 if(!state)return false;
 currentYear=state.currentYear??2026;
 nextPlayerId=state.nextPlayerId??1;
 careerHistory=state.careerHistory||[];
 allPlayers=state.allPlayers||{};
 leagueRosters=state.leagueRosters||{boy:{},girl:{}};
 teamStarters=state.teamStarters||{boy:{},girl:{}};
 reps=state.reps||{boy:{},girl:{}};
 eventLineups=state.eventLineups||{boy:{},girl:{}};aiEventLineups=state.aiEventLineups||{boy:{},girl:{}};
 boys=state.boys||[];girls=state.girls||[];
 selectedProspectIds=state.selectedProspectIds||{
   boy:boys.find(a=>(a.wasSelectedProspect||(a.isProspect&&a.onRoster)))?.id??null,
   girl:girls.find(a=>(a.wasSelectedProspect||(a.isProspect&&a.onRoster)))?.id??null
 };
 normalizeProspectSelectionState();
 selBoy=state.selBoy??null;selGirl=state.selGirl??null;
 events=state.events||events;scores=state.scores||scores;
 currentView=state.currentView||"hundred";
 gamesUiStarted=!!state.gamesUiStarted;
 rosterReviewOpen=!!state.rosterReviewOpen;
 dynastyView=state.dynastyView||"games";
 leagueGender=state.leagueGender||"boy";
 careerInitialized=!!state.careerInitialized;
 seasonArchived=!!state.seasonArchived;
 lastImprovementReport=state.lastImprovementReport||null;
 activeCareerSlot=state.activeCareerSlot??activeCareerSlot;
 repairPlayerOveralls();

 if(state.userTerritory&&$("territorySelect")){
   $("territorySelect").value=state.userTerritory;
 }
 $("boySelected").textContent="";
 $("girlSelected").textContent="";
 renderAll();return true;
}
function saveDynasty(showFeedback=false){
 try{
   const state=serializeDynastyState(),raw=JSON.stringify(state);
   localStorage.setItem(DYNASTY_SAVE_KEY,raw);
   if(activeCareerSlot)localStorage.setItem(CAREER_SLOT_PREFIX+activeCareerSlot,raw);

   // Verify that the browser actually retained what we wrote.
   const verify=localStorage.getItem(activeCareerSlot?CAREER_SLOT_PREFIX+activeCareerSlot:DYNASTY_SAVE_KEY);
   if(!verify)throw new Error("Save verification failed");

   if(showFeedback)showSaveToast(activeCareerSlot?`Career saved to Slot ${activeCareerSlot}`:"Career autosaved");
   return true;
 }catch(e){
   console.error("Dynasty save failed.",e);
   if(showFeedback)alert("Career save failed. Browser storage may be blocked or full.");
   return false;
 }
}
function showSaveToast(message){
 let el=$("saveToast");
 if(!el)return;
 el.textContent=message;el.classList.add("show");
 clearTimeout(showSaveToast.timer);
 showSaveToast.timer=setTimeout(()=>el.classList.remove("show"),1800);
}
function getCareerSlot(slot){
 try{
   let raw=localStorage.getItem(CAREER_SLOT_PREFIX+slot);
   return raw?JSON.parse(raw):null;
 }catch(e){return null}
}
function saveCareerSlot(slot){
 try{
   activeCareerSlot=slot;
   let state=serializeDynastyState();
   state.activeCareerSlot=slot;
   const raw=JSON.stringify(state);
   localStorage.setItem(CAREER_SLOT_PREFIX+slot,raw);
   localStorage.setItem(DYNASTY_SAVE_KEY,raw);
   if(!getCareerSlot(slot))throw new Error("Slot verification failed");
   renderSaveManager();
   showSaveToast(`Career saved to Slot ${slot}`);
 }catch(e){
   console.error("Career slot save failed",e);
   alert("Could not save this career slot. Browser storage may be blocked or full.");
 }
}
function loadCareerSlot(slot){
 let state=getCareerSlot(slot);
 if(!state)return;
 activeCareerSlot=slot;state.activeCareerSlot=slot;
 restoreDynastyState(state);
 saveDynasty();
 $("saveManagerModal").classList.add("hidden");
 hideOpeningScreen();
}
function deleteCareerSlot(slot){
 if(!getCareerSlot(slot))return;
 if(!confirm(`Delete Career Slot ${slot}? This cannot be undone.`))return;
 localStorage.removeItem(CAREER_SLOT_PREFIX+slot);
 if(activeCareerSlot===slot)activeCareerSlot=null;
 renderSaveManager();
}
function copyCareerSlot(from){
 let state=getCareerSlot(from);if(!state)return;
 let empty=null;
 for(let i=1;i<=CAREER_SLOT_COUNT;i++)if(!getCareerSlot(i)){empty=i;break}
 if(empty===null){
   let dest=Number(prompt("All slots are full. Copy to which slot (1-5)?"));
   if(!dest||dest<1||dest>5||dest===from)return;
   if(!confirm(`Overwrite Career Slot ${dest}?`))return;
   empty=dest;
 }
 state=deepCopy(state);state.activeCareerSlot=empty;
 localStorage.setItem(CAREER_SLOT_PREFIX+empty,JSON.stringify(state));
 renderSaveManager();
}

function hideOpeningScreen(){$("openingScreen")?.classList.add("hidden")}
function openingLoadSlot(slot){
 let state=getCareerSlot(slot);if(!state)return;
 activeCareerSlot=slot;state.activeCareerSlot=slot;
 restoreDynastyState(state);saveDynasty();
 hideOpeningScreen();
}
function renderOpeningScreen(){
 const auto=(()=>{
   try{let raw=localStorage.getItem(DYNASTY_SAVE_KEY);return raw?JSON.parse(raw):null}catch(e){return null}
 })();
 const continueBtn=$("openingContinueBtn");
 if(continueBtn){
   continueBtn.classList.toggle("hidden",!auto?.careerInitialized);
   if(auto?.careerInitialized){
     continueBtn.textContent=`Continue ${auto.userTerritory||"Career"} — ${auto.currentYear||2026}`;
     continueBtn.onclick=()=>{restoreDynastyState(auto);hideOpeningScreen()};
   }
 }
 let box=$("openingSaveSlots");if(box){
   box.innerHTML="";
   for(let slot=1;slot<=CAREER_SLOT_COUNT;slot++){
     let state=getCareerSlot(slot),row=document.createElement("div");
     row.className="opening-save-slot"+(state?" has-save":" empty-save");
     row.innerHTML=`<div><strong>Slot ${slot}</strong>${state?slotSummary(state):'<span class="small">Empty</span>'}</div>`;
     if(state){
       let b=document.createElement("button");b.textContent="Load";b.onclick=()=>openingLoadSlot(slot);row.appendChild(b);
     }
     box.appendChild(row);
   }
 }
 $("openingNewGameBtn").onclick=()=>{
   const hasExisting=!!auto?.careerInitialized||Array.from({length:CAREER_SLOT_COUNT},(_,i)=>getCareerSlot(i+1)).some(Boolean);
   if(hasExisting&&!confirm("Start a new career? Your saved slots will remain available, but the autosave will become the new career."))return;
   activeCareerSlot=null;
   careerInitialized=false;
   $("territorySelect").value=territories[0];
   newSeason();
   hideOpeningScreen();
 };
 $("openingScreen")?.classList.remove("hidden");
}

function slotSummary(state){
 if(!state)return'<span class="small">Empty slot</span>';
 let team=state.userTerritory||"Unknown Delegation";
 let seasons=state.careerHistory?.length||0;
 let year=state.currentYear||2026;
 let stamp=state.savedAt?new Date(state.savedAt).toLocaleString():"";
 return `<strong>${team}</strong><div class="save-slot-meta">Year ${year} · ${seasons} completed season${seasons===1?"":"s"}${stamp?` · Saved ${stamp}`:""}</div>`;
}
function renderSaveManager(){
 let box=$("saveSlots");if(!box)return;box.innerHTML="";
 for(let slot=1;slot<=CAREER_SLOT_COUNT;slot++){
   let state=getCareerSlot(slot),row=document.createElement("div");
   row.className="save-slot"+(activeCareerSlot===slot?" active":"");
   row.innerHTML=`<div><strong>Slot ${slot}</strong></div><div>${slotSummary(state)}</div><div class="save-slot-actions"></div>`;
   let actions=row.querySelector(".save-slot-actions");
   let save=document.createElement("button");save.textContent=state?"Overwrite":"Save Here";save.onclick=()=>{if(state&&!confirm(`Overwrite Career Slot ${slot}?`))return;saveCareerSlot(slot)};actions.appendChild(save);
   if(state){
     let load=document.createElement("button");load.textContent="Load";load.onclick=()=>loadCareerSlot(slot);actions.appendChild(load);
     let copy=document.createElement("button");copy.textContent="Copy";copy.onclick=()=>copyCareerSlot(slot);actions.appendChild(copy);
     let del=document.createElement("button");del.textContent="Delete";del.onclick=()=>deleteCareerSlot(slot);actions.appendChild(del);
   }
   box.appendChild(row);
 }
}
function openSaveManager(){renderSaveManager();$("saveManagerModal").classList.remove("hidden")}

function newSeason(){
 if(dynastyDelegationLocked()&&careerInitialized){
   alert("Your delegation is locked for this dynasty.");
   return;
 }
 gamesUiStarted=false;rosterReviewOpen=false;dynastyView="games";careerInitialized=true;
 currentYear=2026;nextPlayerId=1;careerHistory=[];allPlayers={};seasonArchived=false;
 let t=$("territorySelect").value;
 initializeLeagueRosters(t);
 boys=makeUserPool("boy",t,1);girls=makeUserPool("girl",t,101);
 selBoy=selGirl=null;selectedProspectIds={boy:null,girl:null};eventLineups={boy:{},girl:{}};aiEventLineups={boy:{},girl:{}};resetEventState();
 $("boySelected").textContent="";$("girlSelected").textContent="";
 $("finalResultsPanel")?.classList.add("hidden");
 updateEventButtons();renderAll();saveDynasty()
}
function advanceToNextSeason(){
 if(!events.obstacle.complete)return;
 archiveCurrentSeason();
 const userT=$("territorySelect").value,fromYear=currentYear;

 // Snapshot the user's returning roster before offseason development.
 let beforeUser={boy:{},girl:{}};
 ["boy","girl"].forEach(gender=>{
   (leagueRosters[gender][userT]||[]).forEach(a=>beforeUser[gender][a.id]=developmentSnapshot(a));
 });

 // Age, develop and graduate every official roster.
 ["boy","girl"].forEach(gender=>territories.forEach(t=>{
   let kept=(leagueRosters[gender][t]||[]).filter(developPlayer);
   leagueRosters[gender][t]=kept;
 }));
 currentYear+=1;

 // Build user development report only for athletes who returned.
 let improvementPlayers=[];
 ["boy","girl"].forEach(gender=>{
   (leagueRosters[gender][userT]||[]).forEach(a=>{
     let before=beforeUser[gender][a.id];
     if(before)improvementPlayers.push(developmentDiff(before,a));
   });
 });
 let improvementReport={fromYear,toYear:currentYear,players:improvementPlayers};

 // AI teams receive one new 15-year-old from a five-player class.
 territories.filter(t=>t!==userT).forEach(t=>["boy","girl"].forEach(gender=>{
   leagueRosters[gender][t].push(aiRecruit(gender,t));
 }));

 // User returning rosters + five selectable 15-year-old prospects.
 boys=(leagueRosters.boy[userT]||[]).map(a=>{a.onRoster=true;a.isProspect=false;return a});
 girls=(leagueRosters.girl[userT]||[]).map(a=>{a.onRoster=true;a.isProspect=false;return a});
 Array.from({length:5},()=>{let a=athlete(0,"boy",userT,15);a.onRoster=false;a.isProspect=true;boys.push(a)});
 Array.from({length:5},()=>{let a=athlete(0,"girl",userT,15);a.onRoster=false;a.isProspect=true;girls.push(a)});

 selectedProspectIds={boy:null,girl:null};
 eventLineups={boy:{},girl:{}};aiEventLineups={boy:{},girl:{}};
 selBoy=[...boys.filter(a=>a.onRoster)].sort((a,b)=>b.overall-a.overall)[0]?.id??null;
 selGirl=[...girls.filter(a=>a.onRoster)].sort((a,b)=>b.overall-a.overall)[0]?.id??null;
 teamStarters={boy:{},girl:{}};reps={boy:{},girl:{}};syncRepsFromLeague();
 resetEventState();gamesUiStarted=false;rosterReviewOpen=false;dynastyView="games";
 $("boySelected").textContent="";$("girlSelected").textContent="";
 $("finalResultsPanel")?.classList.add("hidden");
 renderAll();saveDynasty();showImprovementReport(improvementReport);
}
function card(a,selected,mode="roster"){
 let d=document.createElement("div");
 d.className="roster-card"+(selected?" sel":"")+(a.isProspect&&!a.onRoster?" prospect-card":"")+(a.isProspect&&a.onRoster?" on-roster-prospect":"");
 let status=a.isProspect?(a.onRoster?"15-year-old roster addition":"15-year-old prospect"):`Age ${a.age} roster athlete`;

 let sortedAttrs=[...attrs].sort((x,y)=>a.attrs[y]-a.attrs[x]);
 let top3=sortedAttrs.slice(0,3);
 let low2=sortedAttrs.slice(-2);

 let attrHtml=attrs.map(k=>`<div>${k}: ${ratingChip(a.attrs[k],"",true)}</div>`).join("");
 if(a.onRoster)mode="roster";
 let backgrounds=a.backgrounds.length
   ? a.backgrounds.map(b=>`<span class="pill">${b.sport}: ${b.level}</span>`).join("")
   : `<span class="small">No organized sports background</span>`;

 d.innerHTML=`
   <div class="top face-card-top">
     ${playerFaceHTML(a,"face-card")}
     <div class="face-card-meta">
       ${playerLinkHTML(a)}
       <div class="small">${a.hometown}</div>
       <div class="small age-weight-line">Age ${a.age} · ${a.weight} lb</div>
     </div>
     <div class="ovr">${ratingChip(a.overall,"",true)} OVR</div>
   </div>
   ${mode==="prospect" ? `
     <div class="prospect-summary">
       <div><strong>${top3[0]}</strong><br>${a.attrs[top3[0]]}</div>
       <div><strong>${top3[1]}</strong><br>${a.attrs[top3[1]]}</div>
       <div><strong>${top3[2]}</strong><br>${a.attrs[top3[2]]}</div>
     </div>
     <details style="margin-top:8px">
       <summary class="small">View all ratings</summary>
       <div class="attrs">${attrHtml}</div>
     </details>
   ` : `<div class="attrs">${attrHtml}</div>`}
   <div style="margin-top:7px">${backgrounds}</div>
   ${a.onRoster?"":`<button class="pick" style="margin-top:8px">Add Prospect</button>`}
 `;
 return d
}
function setSetupGenderTab(gender){
 const wanted=gender==="boy"?"boys":"girls";
 document.querySelectorAll(".tab[data-tab]").forEach(b=>b.classList.toggle("active",b.dataset.tab===wanted));
 $("boysPool")?.classList.toggle("hidden",wanted!=="boys");
 $("girlsPool")?.classList.toggle("hidden",wanted!=="girls");
}
function renderProspectIntakeOnly(){
 // Deliberately avoid renderAll() while choosing prospects. That routine redraws
 // the whole game and used to stomp the Boys/Girls tab state.
 const active=document.querySelector(".tab[data-tab].active")?.dataset.tab||"boys";
 renderPools();
 updateSetupState();
 setSetupGenderTab(active==="girls"?"girl":"boy");
 renderPlayerFaces($("setupScreen"));
}
function addProspect(gender,a){
 if(gamesUiStarted||competitionStarted())return alert("Rosters are locked once the American Patriot Games begin.");
 let pool=gender==="boy"?boys:girls;
 if(!a||!pool.some(x=>x.id===a.id)||!a.isProspect)return;

 if(selectedProspectIds[gender]!==null){
   return alert(`You already selected a 15-year-old ${gender==="boy"?"boy":"girl"} prospect.`);
 }

 const chosenId=a.id;
 selectedProspectIds[gender]=chosenId;

 // This gender becomes exactly four athletes immediately:
 // the three returning/core roster athletes + the chosen 15-year-old.
 const rebuilt=pool
   .filter(x=>!x.isProspect||x.id===chosenId)
   .map(x=>{
     if(x.id===chosenId){
       x.onRoster=true;
       x.isProspect=false;
       x.wasSelectedProspect=true;
     }
     return x;
   });

 if(gender==="boy")boys=rebuilt;else girls=rebuilt;
 eventLineups[gender]={};

 // Render ONLY setup/intake state, then move straight to the other gender
 // if that choice has not been made yet.
 renderProspectIntakeOnly();
 const other=gender==="boy"?"girl":"boy";
 if(selectedProspect(other)===null)setSetupGenderTab(other);
 else{
   updateSetupState();
   document.getElementById("setupCompletion")?.scrollIntoView({behavior:"smooth",block:"center"});
 }
 saveDynasty();
}
function selectedProspect(gender){
 const pool=gender==="boy"?boys:girls;
 const id=selectedProspectIds?.[gender];
 return id===null||id===undefined?null:(pool.find(x=>x.id===id)||null);
}
function normalizeProspectSelectionState(){
 ["boy","girl"].forEach(gender=>{
   let pool=gender==="boy"?boys:girls;
   let id=selectedProspectIds?.[gender]??null;

   // Migrate older saves where the selected athlete was still flagged isProspect.
   if(id!==null){
     let chosen=pool.find(x=>x.id===id);
     if(chosen){
       const rebuilt=pool
         .filter(x=>!x.isProspect||x.id===id)
         .map(x=>{
           if(x.id===id){
             x.onRoster=true;
             x.isProspect=false;
             x.wasSelectedProspect=true;
           }
           return x;
         });
       if(gender==="boy")boys=rebuilt;else girls=rebuilt;
     }else{
       selectedProspectIds[gender]=null;
     }
   }else{
     // Older-save fallback: infer one selected on-roster prospect if present.
     let legacy=pool.find(x=>x.isProspect&&x.onRoster);
     if(legacy){
       selectedProspectIds[gender]=legacy.id;
       const rebuilt=pool
         .filter(x=>!x.isProspect||x.id===legacy.id)
         .map(x=>{
           if(x.id===legacy.id){
             x.onRoster=true;x.isProspect=false;x.wasSelectedProspect=true;
           }
           return x;
         });
       if(gender==="boy")boys=rebuilt;else girls=rebuilt;
     }
   }
 });
}
function renderPoolSide(pool,gender,target){
 let box=$(target);box.innerHTML="";box.classList.add("roster-side");
 let chosenProspect=selectedProspect(gender);
 let roster=pool.filter(a=>a.onRoster);
 let prospects=chosenProspect?[]:pool.filter(a=>a.isProspect&&!a.onRoster);

 let rosterSection=document.createElement("div");rosterSection.className="roster-section";
 let head=document.createElement("div");head.className="roster-section-head";
 head.innerHTML=`<div><h4>${gender==="boy"?"Boys":"Girls"} Roster</h4><div class="small">All four athletes are available for your event-by-event lineup.</div></div><div class="small">${roster.length}/4 roster spots filled</div>`;
 rosterSection.appendChild(head);
 let rosterGrid=document.createElement("div");rosterGrid.className="roster-grid";
 roster.forEach(a=>rosterGrid.appendChild(card(a,false,"roster")));
 rosterSection.appendChild(rosterGrid);box.appendChild(rosterSection);

 let prospectSection=document.createElement("div");prospectSection.className="roster-section";
 let phead=document.createElement("div");phead.className="roster-section-head";
 phead.innerHTML=`<div><h4>${gender==="boy"?"Boys":"Girls"} 15-Year-Old Prospect Intake</h4><div class="small">${chosenProspect?`${gender==="boy"?"Boy":"Girl"} prospect selected`:`Choose exactly one ${gender==="boy"?"boy":"girl"} prospect to join this roster.`}</div></div><div class="small">${chosenProspect?`${chosenProspect.name} added`:"1 roster spot available"}</div>`;
 prospectSection.appendChild(phead);
 let note=document.createElement("div");note.className="prospect-note";
 note.textContent=chosenProspect?`${chosenProspect.name} is now part of the four-athlete roster and can be entered in any event.`:"These five athletes are all age 15. Compare their OVR, strongest ratings, and sports backgrounds before choosing one.";
 prospectSection.appendChild(note);
 if(!chosenProspect&&prospects.length){
   let grid=document.createElement("div");grid.className="prospect-grid";
   prospects.forEach(a=>{let d=card(a,false,"prospect");let b=d.querySelector(".pick");b.textContent=`Add ${gender==="boy"?"Boy":"Girl"} Prospect`;b.onclick=()=>addProspect(gender,a);grid.appendChild(d)});
   prospectSection.appendChild(grid);
 }else if(chosenProspect){
   let done=document.createElement("div");done.className="selected-banner";
   done.innerHTML=`Selected prospect: ${playerLinkHTML(chosenProspect)} · Age 15 · ${chosenProspect.overall} OVR. The other four prospects are no longer part of this season's roster pool.`;
   prospectSection.appendChild(done);
 }
 box.appendChild(prospectSection);
}function renderPools(){
 const active=document.querySelector(".tab[data-tab].active")?.dataset.tab||"boys";
 renderPoolSide(boys,"boy","boysPool");
 renderPoolSide(girls,"girl","girlsPool");
 setSetupGenderTab(active==="girls"?"girl":"boy");
}

/* RACE ENGINES */
function sprintScore(a){
 return a.attrs.Speed*.35+a.attrs.Explosiveness*.29+a.attrs.Reaction*.10+eventTechnique(a,"Track")*.08+
 a.attrs.Coordination*.05+a.attrs.Composure*.04+a.attrs.Strength*.03+a.attrs.Mobility*.02+
 a.attrs.Toughness*.01+a.attrs.Awareness*.01+a.attrs.Endurance*.01+a.attrs.Agility*.01
}
function time100(a,g){return clamp((g==="boy"?14.55:15.65)-sprintScore(a)*.047+gauss()*.09,g==="boy"?10.05:11,g==="boy"?14.4:15.4)}
function swimScore(a){
 return a.attrs.Endurance*.22+eventTechnique(a,"Swimming")*.20+a.attrs.Coordination*.15+a.attrs.Mobility*.10+
 a.attrs.Strength*.08+a.attrs.Explosiveness*.07+a.attrs.Toughness*.06+a.attrs.Composure*.04+
 a.attrs.Awareness*.03+a.attrs.Precision*.02+a.attrs.Balance*.01+a.attrs.Reaction*.01+a.attrs.Speed*.01
}
function timeSwim(a,g){return clamp((g==="boy"?170:185)-swimScore(a)*.68+gauss()*1.2,g==="boy"?105:115,g==="boy"?190:205)}
function mileScore(a){
 return a.attrs.Endurance*.38+a.attrs.Toughness*.15+eventTechnique(a,"Track")*.12+a.attrs.Awareness*.10+
 a.attrs.Composure*.08+a.attrs.Speed*.06+a.attrs.Mobility*.04+a.attrs.Coordination*.02+
 a.attrs.Agility*.01+a.attrs.Explosiveness*.01+a.attrs.Strength*.01+a.attrs.Reaction*.01+a.attrs.Balance*.01
}
function timeMile(a,g){return clamp((g==="boy"?430:470)-mileScore(a)*1.55+gauss()*5,g==="boy"?245:275,g==="boy"?520:560)}
function fmtTime(sec){let m=Math.floor(sec/60),s=sec-m*60;return `${m}:${s.toFixed(1).padStart(4,"0")}`}

function start100(){if(events.hundred.started)return _start100();openEventEntrySelector("hundred",_start100)}
function startSandbag(){if(events.sandbag.started)return _startSandbag();openEventEntrySelector("sandbag",_startSandbag)}
function startSwim(){if(events.swim.started)return _startSwim();openEventEntrySelector("swim",_startSwim)}
function startTennis(){if(events.tennis.started)return _startTennis();openEventEntrySelector("tennis",_startTennis)}
function startTeamSports(){if(events.teamsports.started)return _startTeamSports();openEventEntrySelector("teamsports",_startTeamSports)}
function startWrestling(){if(events.wrestling.started)return _startWrestling();openEventEntrySelector("wrestling",_startWrestling)}
function startArchery(){if(events.archery.started)return _startArchery();openEventEntrySelector("archery",_startArchery)}
function startMile(){if(events.mile.started)return _startMile();openEventEntrySelector("mile",_startMile)}
function startStrength(){if(events.strength.started)return _startStrength();openEventEntrySelector("strength",_startStrength)}
function startObstacle(){if(events.obstacle.started)return _startObstacle();openEventEntrySelector("obstacle",_startObstacle)}
function _start100(){if(selBoy===null||selGirl===null)return;if(events.hundred.started){setEventView("hundred");return;}events.hundred.started=true;["boy","girl"].forEach(g=>events.hundred[g]={g,round:0,groups:makeGroups(fieldFor(g),8),history:[],playerAlive:true,done:false,placement:null});currentView="hundred";renderAll()}
function run100(g){runRace(events.hundred,g,time100,[4,2,0],"100")}
function _startSwim(){if(events.swim.started){setEventView("swim");return;}events.swim.started=true;["boy","girl"].forEach(g=>events.swim[g]={g,round:0,groups:makeGroups(fieldFor(g),8),history:[],playerAlive:true,done:false,placement:null});currentView="swim";renderAll()}
function runSwim(g){runRace(events.swim,g,timeSwim,[4,4,4,0],"swim")}
function runRace(container,g,timeFn,plan,type){
 let e=container[g],userT=$("territorySelect").value;if(!e||e.done)return;
 let q=plan[e.round],adv=[],groups=[],finalRes=null;
 e.groups.forEach(grp=>{let res=grp.map(a=>({a,time:timeFn(a,g)})).sort((x,y)=>x.time-y.time);res.forEach(x=>{if(type==="100")x.a.last100=x.time;else x.a.lastSwim=x.time});groups.push(res);if(q)adv.push(...res.slice(0,q).map(x=>x.a));else finalRes=res});
 e.history.push({round:e.round,groups});
 if(q){if(e.playerAlive&&!adv.some(a=>a.territory===userT))e.playerAlive=false;e.round++;e.groups=e.round===plan.length-1?[shuf(adv)]:makeGroups(adv,8)}
 else{e.done=true;let p=finalRes.findIndex(x=>x.a.territory===userT)+1;e.placement=p>0?p:null;award(g,finalRes)}
 if(container.boy?.done&&container.girl?.done)container.complete=true;renderAll()
}

function _startMile(){
 if(events.mile.started){setEventView("mile");return;}
 events.mile.started=true;
 ["boy","girl"].forEach(g=>events.mile[g]={g,stage:"heats",groups:makeGroups(fieldFor(g),16),history:[],playerAlive:true,done:false,placement:null});
 currentView="mile";renderAll()
}
function runMile(g){
 let e=events.mile[g],userT=$("territorySelect").value;if(!e||e.done)return;
 if(e.stage==="heats"){
   let adv=[],groups=[];
   e.groups.forEach(grp=>{
     let res=grp.map(a=>({a,time:timeMile(a,g)})).sort((x,y)=>x.time-y.time);
     res.forEach(x=>x.a.lastMile=x.time);groups.push(res);adv.push(...res.slice(0,4).map(x=>x.a));
   });
   e.history.push({stage:"Qualifying Heats",groups});
   if(!adv.some(a=>a.territory===userT))e.playerAlive=false;
   e.finalists=shuf(adv);
   e.groups=[e.finalists];
   e.stage="final";
 }else{
   // One continuous final. Watch Mode supplies the in-race checkpoints.
   let res=e.finalists.map(a=>({a,time:timeMile(a,g)})).sort((x,y)=>x.time-y.time);
   e.history.push({stage:"Final",groups:[res]});e.done=true;
   let p=res.findIndex(x=>x.a.territory===userT)+1;e.placement=p>0?p:null;award(g,res);
 }
 if(events.mile.boy?.done&&events.mile.girl?.done)events.mile.complete=true;renderAll()
}

/* WRESTLING */
function wrestlingSkill(a){
 return eventTechnique(a,"Wrestling")*.22+a.attrs.Awareness*.12+a.attrs.Agility*.10+a.attrs.Balance*.10+
 a.attrs.Toughness*.10+a.attrs.Strength*.09+a.attrs.Explosiveness*.08+a.attrs.Endurance*.06+
 a.attrs.Coordination*.05+a.attrs.Reaction*.03+a.attrs.Composure*.02+a.attrs.Mobility*.02+a.attrs.Speed*.01
}
function wrestlingOffense(a){
 return eventTechnique(a,"Wrestling")*.25+a.attrs.Awareness*.14+a.attrs.Explosiveness*.12+a.attrs.Agility*.11+
 a.attrs.Strength*.10+a.attrs.Coordination*.08+a.attrs.Reaction*.06+a.attrs.Balance*.05+
 a.attrs.Composure*.04+a.attrs.Endurance*.02+a.attrs.Toughness*.02+a.attrs.Mobility*.01
}
function wrestlingDefense(a){
 return eventTechnique(a,"Wrestling")*.22+a.attrs.Balance*.16+a.attrs.Toughness*.12+a.attrs.Strength*.10+
 a.attrs.Awareness*.10+a.attrs.Agility*.08+a.attrs.Coordination*.07+a.attrs.Reaction*.05+
 a.attrs.Composure*.04+a.attrs.Mobility*.03+a.attrs.Endurance*.03
}
function wrestlingTop(a){
 return eventTechnique(a,"Wrestling")*.25+a.attrs.Strength*.15+a.attrs.Awareness*.13+a.attrs.Toughness*.10+
 a.attrs.Balance*.10+a.attrs.Coordination*.09+a.attrs.Endurance*.07+a.attrs.Composure*.06+a.attrs.Precision*.05
}
function wrestlingBottom(a){
 return eventTechnique(a,"Wrestling")*.24+a.attrs.Explosiveness*.15+a.attrs.Agility*.14+a.attrs.Mobility*.11+
 a.attrs.Toughness*.10+a.attrs.Awareness*.09+a.attrs.Strength*.06+a.attrs.Coordination*.05+
 a.attrs.Composure*.04+a.attrs.Reaction*.02
}

function probEdge(x,y,scale=12){return 1/(1+Math.exp(-(x-y)/scale))}
function wrestleClock(totalElapsed){
 let sec=Math.max(0,Math.round(totalElapsed)),m=Math.floor(sec/60),ss=sec%60;
 return `${m}:${String(ss).padStart(2,"0")}`;
}
function folkMatchClock(period,remaining){
 let totalBefore=period===1?0:period===2?180:300;
 let elapsed=totalBefore+((period===1?180:120)-remaining);
 return wrestleClock(elapsed);
}
function chooseFolkStart(a,b,chooserIsA,score){
 const chooser=chooserIsA?a:b,opp=chooserIsA?b:a;
 const neutral=wrestlingOffense(chooser)+wrestlingDefense(chooser);
 const bottom=wrestlingBottom(chooser)*1.35+wrestlingOffense(chooser)*.15;
 const top=wrestlingTop(chooser)*1.15-wrestlingBottom(opp)*.12;
 let margin=chooserIsA?score.a-score.b:score.b-score.a;
 // Bottom is the normal college choice; trail late -> neutral more often.
 let weights=[
   {v:"bottom",w:50+Math.max(0,bottom-neutral*.45)},
   {v:"neutral",w:22+Math.max(0,-margin)*3+Math.max(0,neutral-bottom)*.5},
   {v:"top",w:8+Math.max(0,top-bottom)*.7}
 ];
 let sum=weights.reduce((z,x)=>z+x.w,0),roll=Math.random()*sum;
 for(const x of weights){roll-=x.w;if(roll<=0)return x.v}
 return"bottom";
}
function folkPositionLabel(position){
 if(position==="neutral")return"Neutral";
 return position==="topA"?"Top: A / Bottom: B":"Top: B / Bottom: A";
}
function wrestleMatch(a,b){
 if(!b)return{a,b:null,winner:a,loser:null,method:"BYE",score:null,log:[]};

 let score={a:0,b:0},riding={a:0,b:0},stall={a:0,b:0},log=[];
 let position="neutral",period=1,remaining=180,finished=false,winner=null,finishMethod=null;
 const skillA=wrestlingSkill(a),skillB=wrestlingSkill(b);
 const coinA=Math.random()<.5;

 function snap(label,extra={}){
   log.push({
     a:score.a,b:score.b,label,period,remaining:Math.max(0,Math.round(remaining)),
     clock:folkMatchClock(period,remaining),position,
     rideA:Math.round(riding.a),rideB:Math.round(riding.b),...extra
   });
 }
 function add(side,pts,label,extra={}){
   score[side]+=pts;snap(`${label} +${pts}`,{scoringSide:side,points:pts,...extra});
   if(Math.abs(score.a-score.b)>=15&&!finished){
     finished=true;winner=score.a>score.b?a:b;finishMethod="TF";
   }
 }
 function stallPoint(side){
   stall[side]++;
   if(stall[side]===1){snap(`${side==="a"?a.name:b.name}: stalling warning`,{stall:true});return}
   const pts=stall[side]>=4?2:1,other=side==="a"?"b":"a";
   add(other,pts,`${side==="a"?a.name:b.name}: stalling`,{stall:true});
   if(stall[side]>=5&&!finished){
     finished=true;winner=other==="a"?a:b;finishMethod="DQ — Stalling";
   }
 }
 function maybeFall(topSide,elapsedInPeriod){
   const top=topSide==="a"?a:b,bot=topSide==="a"?b:a;
   let edge=wrestlingTop(top)-(.55*wrestlingBottom(bot)+.45*wrestlingDefense(bot));
   let chance=clamp(.010+Math.max(0,edge)*.0019+(top.attrs.Toughness-bot.attrs.Toughness)*.00035,.004,.105);
   if(Math.random()<chance){
     finished=true;winner=top;finishMethod=`FALL ${folkMatchClock(period,remaining)}`;
     snap("FALL!",{fall:true,scoringSide:topSide});
     return true;
   }
   return false;
 }
 function neutralAction(dt){
   const offA=wrestlingOffense(a),offB=wrestlingOffense(b),defA=wrestlingDefense(a),defB=wrestlingDefense(b);
   let pace=.26+((a.attrs.Awareness+b.attrs.Awareness+a.attrs.Explosiveness+b.attrs.Explosiveness)-260)/650;
   if(Math.random()>clamp(pace,.18,.46)){
     if(Math.random()<.10){
       let side=Math.random()<probEdge(offA,offB,18)?"b":"a";
       stallPoint(side);
     }else snap(Math.random()<.5?"Hand fighting — no score":"Shot defended — neutral");
     return;
   }
   let aChance=probEdge(offA,defB,13),bChance=probEdge(offB,defA,13);
   let denom=aChance+bChance,side=Math.random()<(aChance/denom)?"a":"b";
   let success=side==="a"?probEdge(offA,defB,16):probEdge(offB,defA,16);
   if(Math.random()<(.43+.32*success)){
     add(side,3,"Takedown",{move:"takedown"});
     position=side==="a"?"topA":"topB";
   }else{
     snap(side==="a"?`${a.name} shoots — defended`:`${b.name} shoots — defended`,{move:"shot"});
   }
 }
 function matAction(dt){
   let topSide=position==="topA"?"a":"b",botSide=topSide==="a"?"b":"a";
   let top=topSide==="a"?a:b,bot=botSide==="a"?a:b;
   riding[topSide]+=dt;
   let topSkill=wrestlingTop(top),bottomSkill=wrestlingBottom(bot);
   let edge=topSkill-bottomSkill,roll=Math.random();

   // Bottom scores first often enough to create real folkstyle flow.
   let escapeChance=clamp(.34+(bottomSkill-topSkill)*.006,.15,.61);
   let reversalChance=clamp(.065+(bottomSkill-topSkill)*.0028,.025,.17);
   let turnChance=clamp(.13+(topSkill-bottomSkill)*.004,.055,.34);

   if(roll<reversalChance){
     add(botSide,2,"Reversal",{move:"reversal"});
     position=botSide==="a"?"topA":"topB";
     return;
   }
   if(roll<reversalChance+escapeChance){
     add(botSide,1,"Escape",{move:"escape"});
     position="neutral";return;
   }
   if(roll<reversalChance+escapeChance+turnChance){
     if(maybeFall(topSide,dt))return;
     let nroll=Math.random(),pts=nroll<.43?2:nroll<.76?3:4;
     add(topSide,pts,`${pts}-point near fall`,{move:"nearfall"});
     return;
   }
   if(Math.random()<.08)stallPoint(Math.random()<.58?topSide:botSide);
   else snap(Math.random()<.5?`${top.name} riding — working for turn`:`${bot.name} builds to base`,{move:"ride"});
 }
 function runPeriod(p,startPosition){
   period=p;remaining=p===1?180:120;position=startPosition;
   snap(p===1?"Period 1 begins — neutral":`Period ${p} begins — ${folkPositionLabel(position)}`,{periodStart:true});
   let safety=0;
   while(remaining>0&&!finished&&safety++<30){
     let dt=Math.min(remaining,r(10,27));
     remaining-=dt;
     if(position==="neutral")neutralAction(dt);else matAction(dt);
   }
   if(!finished){remaining=0;snap(`End Period ${p}`,{periodEnd:true})}
 }
 function startPositionForChoice(chooserIsA,choice){
   if(choice==="neutral")return"neutral";
   if(choice==="bottom")return chooserIsA?"topB":"topA";
   return chooserIsA?"topA":"topB";
 }

 // Regulation: 3:00 neutral, then 2:00 / 2:00 with opposite choices.
 runPeriod(1,"neutral");
 if(!finished){
   let choice2=chooseFolkStart(a,b,coinA,score);
   snap(`${coinA?a.name:b.name} chooses ${choice2} for Period 2`,{choice:true,chooser:coinA?"a":"b"});
   runPeriod(2,startPositionForChoice(coinA,choice2));
 }
 if(!finished){
   let chooser3=!coinA,choice3=chooseFolkStart(a,b,chooser3,score);
   snap(`${chooser3?a.name:b.name} chooses ${choice3} for Period 3`,{choice:true,chooser:chooser3?"a":"b"});
   runPeriod(3,startPositionForChoice(chooser3,choice3));
 }

 // NCAA riding-time point after regulation for a 1:00+ advantage.
 if(!finished){
   let diff=riding.a-riding.b;
   if(Math.abs(diff)>=60){
     let side=diff>0?"a":"b";
     score[side]+=1;
     snap("Riding Time +1",{scoringSide:side,points:1,ridingTime:true});
   }
 }

 function runSV(label){
   period=label;remaining=60;position="neutral";
   snap(`${label} begins — sudden victory`,{overtime:true,periodStart:true});
   let safety=0;
   while(remaining>0&&!finished&&safety++<7){
     let dt=Math.min(remaining,r(8,18));remaining-=dt;
     let beforeA=score.a,beforeB=score.b;
     neutralAction(dt);
     if(score.a!==beforeA||score.b!==beforeB){
       winner=score.a>score.b?a:b;finished=true;finishMethod=label;
       return true;
     }
   }
   remaining=0;snap(`End ${label} — still tied`,{overtime:true});return false;
 }
 function runTB(label,firstBottomA){
   period=label;
   const order=[firstBottomA,!firstBottomA];
   for(let turn=0;turn<2&&!finished;turn++){
     let bottomA=order[turn];remaining=30;position=bottomA?"topB":"topA";
     snap(`${label} — ${bottomA?a.name:b.name} starts bottom`,{overtime:true,tiebreaker:true});
     let startA=score.a,startB=score.b,safety=0;
     while(remaining>0&&!finished&&safety++<4){
       let dt=Math.min(remaining,r(7,13));remaining-=dt;
       matAction(dt);
       if(Math.abs(score.a-score.b)>=15)return;
     }
     remaining=0;snap(`${bottomA?a.name:b.name} tiebreaker ends`,{overtime:true,tiebreaker:true});
   }
   if(score.a!==score.b){
     winner=score.a>score.b?a:b;finished=true;finishMethod=label;return true;
   }
   return false;
 }

 if(!finished&&score.a===score.b){
   // NCAA-style OT progression: SV-1, TB-1, SV-2, TB-2.
   if(!runSV("SV-1")&&score.a===score.b){
     let firstBottomA=Math.random()<.5;
     if(!runTB("TB-1",firstBottomA)&&score.a===score.b){
       if(!runSV("SV-2")&&score.a===score.b){
         runTB("TB-2",!firstBottomA);
         if(!finished&&score.a===score.b){
           // Ride-out criterion to prevent impossible unresolved tournament ties.
           period="TB-2";remaining=0;
           let edge=(wrestlingTop(a)-wrestlingBottom(b))-(wrestlingTop(b)-wrestlingBottom(a));
           winner=Math.random()<probEdge(edge,0,8)?a:b;finished=true;finishMethod="TB-2 RT";
           snap(`${winner.name} wins on tiebreaker riding criterion`,{overtime:true,criterion:true});
         }
       }
     }
   }
 }

 if(!winner)winner=score.a>score.b?a:b;
 let loser=winner===a?b:a,ws=winner===a?score.a:score.b,ls=winner===a?score.b:score.a,diff=ws-ls;
 let method;
 if(finishMethod?.startsWith("FALL"))method=finishMethod;
 else if(finishMethod==="TF")method=`TF ${ws}-${ls}`;
 else if(finishMethod==="DQ — Stalling")method=finishMethod;
 else if(finishMethod&&finishMethod.startsWith("SV"))method=`${finishMethod} ${ws}-${ls}`;
 else if(finishMethod&&finishMethod.startsWith("TB"))method=`${finishMethod} ${ws}-${ls}`;
 else if(diff>=15)method=`TF ${ws}-${ls}`;
 else if(diff>=8)method=`MD ${ws}-${ls}`;
 else method=`DEC ${ws}-${ls}`;

 // Final log state always exactly equals official result.
 snap(method,{final:true});
 return{a,b,winner,loser,method,score:{a:score.a,b:score.b},log,riding:{...riding},stall:{...stall}};
}

function seededByCombined(list){
 let positive=list.filter(a=>(scores.combined[a.territory]||0)>0);
 let zero=shuf(list.filter(a=>(scores.combined[a.territory]||0)===0));
 positive.sort((a,b)=>{
   let d=(scores.combined[b.territory]||0)-(scores.combined[a.territory]||0);
   return d!==0?d:(Math.random()-.5);
 });
 return [...positive,...zero];
}
function standard32SeedOrder(){
 return [1,32,16,17,8,25,9,24,4,29,13,20,5,28,12,21,2,31,15,18,7,26,10,23,3,30,14,19,6,27,11,22];
}

function seedDivision(list){
 let ordered=seededByCombined(list);
 let seeded=ordered.map((a,i)=>({athlete:a,seed:i+1}));
 let bySeed={};seeded.forEach(x=>{x.athlete.wrestleSeed=x.seed;bySeed[x.seed]=x.athlete});
 return standard32SeedOrder().map(seed=>bySeed[seed]);
}
function makeMatchups(list){
 let matches=[];
 for(let i=0;i<list.length;i+=2){
   matches.push({a:list[i],b:list[i+1],result:null});
 }
 return matches;
}

function divisionName(g,key){
 if(g==="boy") return key==="light"?"Boys Lightweight":"Boys Heavyweight";
 return key==="light"?"Girls Lightweight":"Girls Heavyweight";
}

function _startWrestling(){
 if(events.wrestling.started){setEventView("wrestling");return;}
 events.wrestling.started=true;

 ["boy","girl"].forEach(g=>{
   let sorted=[...fieldFor(g)].sort((a,b)=>a.weight-b.weight);
   let low=sorted.slice(0,32);
   let high=sorted.slice(32,64);

   let lightSeeded=seedDivision(low);
   let heavySeeded=seedDivision(high);

   events.wrestling[g]={
     g,
     divisions:{
       light:{
         key:"light",
         splitMax:low[31].weight,
         stage:"R32",
         active:lightSeeded,
         preview:makeMatchups(lightSeeded),
         history:[],
         final8:null,
         done:false,
         placements:null
       },
       heavy:{
         key:"heavy",
         splitMin:high[0].weight,
         stage:"R32",
         active:heavySeeded,
         preview:makeMatchups(heavySeeded),
         history:[],
         final8:null,
         done:false,
         placements:null
       }
     },
     playerAlive:true,
     done:false,
     placement:null
   };
 });

 currentView="wrestling";
 renderAll();
}

function runDivisionSingleElim(div){
 let results=div.preview.map(m=>wrestleMatch(m.a,m.b));
 div.history.push({stage:div.stage,results});
 let winners=results.map(r=>r.winner);

 if(div.stage==="R32"){
   div.stage="R16";
   div.active=winners;
   div.preview=makeMatchups(winners);
 }else if(div.stage==="R16"){
   // Final 8 reached. Move to quarterfinal wrestleback phase.
   div.stage="QF";
   div.final8=winners;
   div.active=winners;
   div.preview=makeMatchups(winners);
 }
}

function crossPair(a,b){return wrestleMatch(a,b)}

function runDivisionFinal8(div){
 if(div.stage==="QF"){
   let qf=div.preview.map(m=>wrestleMatch(m.a,m.b));
   div.history.push({stage:"Quarterfinals",results:qf});
   div.qf=qf;

   let sfAthletes=qf.map(m=>m.winner);
   let qfLosers=qf.map(m=>m.loser);
   div.stage="SF";
   div.preview=makeMatchups(sfAthletes);
   div.wbPreview=[
     {a:qfLosers[0],b:qfLosers[1],result:null},
     {a:qfLosers[2],b:qfLosers[3],result:null}
   ];
   return;
 }

 if(div.stage==="SF"){
   let sf=div.preview.map(m=>wrestleMatch(m.a,m.b));
   let wb1=div.wbPreview.map(m=>wrestleMatch(m.a,m.b));

   div.history.push({stage:"Semifinals",results:sf});
   div.history.push({stage:"Wrestleback Round",results:wb1});
   div.sf=sf;
   div.wb1=wb1;
   div.wbPreview=null;

   let sfLosers=div.sf.map(m=>m.loser);
   div.stage="WBSF";
   div.preview=[
     {a:wb1[0].winner,b:sfLosers[1],result:null},
     {a:wb1[1].winner,b:sfLosers[0],result:null}
   ];
   return;
 }

 

 if(div.stage==="WBSF"){
   let wbSF=div.preview.map(m=>wrestleMatch(m.a,m.b));
   div.history.push({stage:"Consolation Semifinals",results:wbSF});
   div.wbSF=wbSF;

   div.stage="PLACEMENT";
   div.preview=[
     {label:"Final",a:div.sf[0].winner,b:div.sf[1].winner},
     {label:"3rd Place",a:wbSF[0].winner,b:wbSF[1].winner}
   ];
   return;
 }

 if(div.stage==="PLACEMENT"){
   let title=wrestleMatch(div.preview[0].a,div.preview[0].b);
   let third=wrestleMatch(div.preview[1].a,div.preview[1].b);

   div.history.push({stage:"Placement Matches",results:[
     {...title,label:"Final"},
     {...third,label:"3rd Place"}
   ]});

   div.placements=[
     title.winner,
     title.loser,
     third.winner,
     third.loser
   ];
   div.done=true;
   div.stage="DONE";
 }
}

function awardWrestlingDivision(g,div){
 const pts=[10,8,5,2];
 div.placements.forEach((a,i)=>{
   let p=pts[i];
   if(g==="boy")scores.boys[a.territory]+=p;
   else scores.girls[a.territory]+=p;
 });
 recomputeCombined();
}

function runWrestling(g){
 let e=events.wrestling[g],userT=$("territorySelect").value;
 if(!e||e.done)return;

 ["light","heavy"].forEach(key=>{
   let div=e.divisions[key];
   if(div.done)return;

   if(div.stage==="R32"||div.stage==="R16") runDivisionSingleElim(div);
   else runDivisionFinal8(div);

   if(div.done && !div.pointsAwarded){
     awardWrestlingDivision(g,div);
     div.pointsAwarded=true;
   }
 });

 // User remains "alive" if still present in either unfinished division or placed top 4.
 let allCurrent=[];
 Object.values(e.divisions).forEach(div=>{
   if(div.done){
     allCurrent.push(...(div.placements||[]));
   }else{
     if(div.preview)div.preview.forEach(m=>{if(m.a)allCurrent.push(m.a);if(m.b)allCurrent.push(m.b)});
   }
 });
 e.playerAlive=allCurrent.some(a=>a&&a.territory===userT);

 if(e.divisions.light.done&&e.divisions.heavy.done){
   e.done=true;
   events.wrestling.complete=events.wrestling.boy?.done&&events.wrestling.girl?.done;
 }

 renderAll();
}

/* SANDBAG */
function sandbagScore(a){
 return a.attrs.Strength*.25+a.attrs.Explosiveness*.20+a.attrs.Endurance*.15+a.attrs.Toughness*.12+
 eventTechnique(a,"Track")*.09+a.attrs.Balance*.06+a.attrs.Coordination*.04+a.attrs.Agility*.03+
 a.attrs.Mobility*.02+a.attrs.Composure*.02+a.attrs.Awareness*.01+a.attrs.Reaction*.01
}
function sandbagTimes(a,g){
 let sc=sandbagScore(a);
 let bodyAdj=(a.weight-(g==="boy"?162.5:132.5))*.055;
 let perf=(sc-70);

 if(g==="boy"){
   let leg1=clamp(29-perf*.14-bodyAdj+gauss()*1.1,15,48);   // 50 lb
   let leg2=clamp(38-perf*.16-bodyAdj*1.08+gauss()*1.4,20,60); // 75 lb
   let leg3=clamp(50-perf*.19-bodyAdj*1.18+gauss()*1.8,25,78); // 100 lb
   return{leg1,leg2,leg3,total:leg1+leg2+leg3};
 }else{
   let leg1=clamp(25-perf*.12-bodyAdj+gauss()*1.1,14,44);      // 25 lb
   let leg2=clamp(40-perf*.15-bodyAdj*1.08+gauss()*1.5,22,66); // 50 lb
   let leg3=clamp(55-perf*.18-bodyAdj*1.18+gauss()*1.9,28,88); // 75 lb
   return{leg1,leg2,leg3,total:leg1+leg2+leg3};
 }
}
function _startSandbag(){
 if(events.sandbag.started){setEventView("sandbag");return;}
 events.sandbag.started=true;
 ["boy","girl"].forEach(g=>events.sandbag[g]={g,stage:"heats",groups:makeGroups(fieldFor(g),16),history:[],done:false,placement:null,playerAlive:true,finalists:null});
 currentView="sandbag";renderAll()
}
function runSandbag(g){
 let e=events.sandbag[g],u=$("territorySelect").value;if(!e||e.done)return;
 if(e.stage==="heats"){
   let adv=[],groups=[];
   e.groups.forEach(grp=>{
     let res=grp.map(a=>({a,...sandbagTimes(a,g)})).sort((x,y)=>x.total-y.total);
     res.forEach(x=>x.a.lastSandbag=x.total);groups.push(res);adv.push(...res.slice(0,4).map(x=>x.a));
   });
   e.history.push({stage:"Heats",groups});if(!adv.some(a=>a.territory===u))e.playerAlive=false;
   e.finalists=shuf(adv);e.stage="final";
 }else{
   let res=e.finalists.map(a=>({a,...sandbagTimes(a,g)})).sort((x,y)=>x.total-y.total);
   e.history.push({stage:"Final",groups:[res]});e.done=true;
   let p=res.findIndex(x=>x.a.territory===u)+1;e.placement=p>0?p:null;award(g,res);
 }
 if(events.sandbag.boy?.done&&events.sandbag.girl?.done)events.sandbag.complete=true;renderAll()
}

/* TEAM SPORTS DAY */
const teamStageNames=["Basketball","Football","Baseball/Softball","Hockey","Soccer","Lacrosse","Volleyball"];
function teamStageAbility(a,stage){
 let base=0,tech=eventTechnique(a,stage);
 if(stage==="Basketball")base=a.attrs.Precision*.24+a.attrs.Coordination*.19+tech*.15+a.attrs.Composure*.11+a.attrs.Awareness*.08+a.attrs.Reaction*.06+a.attrs.Explosiveness*.05+a.attrs.Balance*.05+a.attrs.Agility*.04+a.attrs.Strength*.02+a.attrs.Endurance*.01;
 if(stage==="Football")base=a.attrs.Precision*.20+a.attrs.Explosiveness*.16+tech*.16+a.attrs.Coordination*.14+a.attrs.Awareness*.10+a.attrs.Composure*.08+a.attrs.Strength*.06+a.attrs.Reaction*.04+a.attrs.Balance*.03+a.attrs.Mobility*.02+a.attrs.Toughness*.01;
 if(stage==="Baseball/Softball")base=a.attrs.Coordination*.20+a.attrs.Precision*.19+tech*.17+a.attrs.Explosiveness*.12+a.attrs.Reaction*.09+a.attrs.Awareness*.07+a.attrs.Composure*.06+a.attrs.Balance*.04+a.attrs.Strength*.03+a.attrs.Agility*.02+a.attrs.Mobility*.01;
 if(stage==="Hockey")base=a.attrs.Coordination*.19+a.attrs.Precision*.18+tech*.17+a.attrs.Balance*.10+a.attrs.Explosiveness*.09+a.attrs.Reaction*.08+a.attrs.Awareness*.07+a.attrs.Composure*.05+a.attrs.Agility*.03+a.attrs.Strength*.02+a.attrs.Mobility*.02;
 if(stage==="Soccer")base=a.attrs.Precision*.17+a.attrs.Coordination*.17+tech*.17+a.attrs.Balance*.11+a.attrs.Agility*.09+a.attrs.Explosiveness*.08+a.attrs.Awareness*.07+a.attrs.Composure*.05+a.attrs.Mobility*.04+a.attrs.Speed*.03+a.attrs.Endurance*.02;
 if(stage==="Lacrosse")base=a.attrs.Precision*.19+a.attrs.Coordination*.18+tech*.17+a.attrs.Reaction*.08+a.attrs.Explosiveness*.08+a.attrs.Awareness*.08+a.attrs.Composure*.06+a.attrs.Balance*.05+a.attrs.Agility*.04+a.attrs.Strength*.03+a.attrs.Mobility*.02+a.attrs.Endurance*.02;
 if(stage==="Volleyball")base=a.attrs.Coordination*.18+a.attrs.Precision*.15+tech*.16+a.attrs.Explosiveness*.12+a.attrs.Reaction*.09+a.attrs.Agility*.08+a.attrs.Balance*.06+a.attrs.Awareness*.05+a.attrs.Composure*.05+a.attrs.Strength*.03+a.attrs.Mobility*.02+a.attrs.Endurance*.01;
 return clamp(base,0,99);
}
function teamStageScore(a,stage){
 let base=teamStageAbility(a,stage);
 // 15 standard attempts per discipline; game score remains on the 0–17.5 scale.
 let made=clamp(Math.round((base+gauss()*4)/6.67),0,15);
 if(Math.random()<clamp((base-45)/110,0,.75))made+=2.5;
 return clamp(made,0,17.5);
}
function _startTeamSports(){
 if(events.teamsports.started){setEventView("teamsports");return;}
 events.teamsports.started=true;
 ["boy","girl"].forEach(g=>events.teamsports[g]={g,field:fieldFor(g),stageIndex:0,history:[],totals:{},done:false,results:null});
 currentView="teamsports";renderAll()
}
function runTeamSports(g){
 let e=events.teamsports[g];if(!e||e.done)return;
 let stage=teamStageNames[e.stageIndex];
 let res=e.field.map(a=>({a,score:teamStageScore(a,stage)})).sort((x,y)=>y.score-x.score);
 res.forEach(x=>e.totals[x.a.territory]=(e.totals[x.a.territory]||0)+x.score);
 e.history.push({stage,results:res});e.stageIndex++;
 if(e.stageIndex>=teamStageNames.length){
   e.results=e.field.map(a=>({a,total:e.totals[a.territory]||0})).sort((x,y)=>y.total-x.total);
   e.done=true;award(g,e.results);
 }
 if(events.teamsports.boy?.done&&events.teamsports.girl?.done)events.teamsports.complete=true;renderAll()
}

/* STRENGTH */
function strengthComponents(a,g){
 let shotSkill=a.attrs.Explosiveness*.28+a.attrs.Strength*.24+eventTechnique(a,"Track")*.18+a.attrs.Coordination*.10+
 a.attrs.Balance*.06+a.attrs.Mobility*.05+a.attrs.Composure*.04+a.attrs.Precision*.03+a.attrs.Awareness*.02;
 let shot=clamp(3+shotSkill*.11+gauss()*.5,4,18);
 let benchBase=a.attrs.Strength*.46+a.attrs.Toughness*.16+a.attrs.Endurance*.12+a.attrs.Technique*.10+
 a.attrs.Composure*.05+a.attrs.Mobility*.04+a.attrs.Awareness*.03+a.attrs.Coordination*.02+a.attrs.Balance*.02;
 let bodyAdj=(a.weight-(g==="boy"?162.5:132.5))*.08;
 let bench=Math.max(0,Math.round((benchBase-45)/3.2+bodyAdj+gauss()*1.4));
 let tireSkill=a.attrs.Strength*.24+a.attrs.Explosiveness*.23+a.attrs.Technique*.14+a.attrs.Endurance*.10+
 a.attrs.Toughness*.09+a.attrs.Agility*.06+a.attrs.Balance*.05+a.attrs.Coordination*.04+
 a.attrs.Awareness*.02+a.attrs.Composure*.02+a.attrs.Mobility*.01;
 let tire=clamp(38-tireSkill*.22-(a.weight-(g==="boy"?162.5:132.5))*.05+gauss()*1.2,10,55);
 return{shot,bench,tire};
}
function _startStrength(){
 if(events.strength.started){setEventView("strength");return;}
 events.strength.started=true;
 ["boy","girl"].forEach(g=>events.strength[g]={g,field:fieldFor(g),stageIndex:0,history:[],data:{},done:false,results:null});
 currentView="strength";renderAll()
}
function strengthStageValue(a,g,stage){let c=strengthComponents(a,g);return stage==="Shot Put"?c.shot:stage==="Bench Press"?c.bench:c.tire}
function runStrength(g){
 let e=events.strength[g];if(!e||e.done)return;
 const stages=["Shot Put","Bench Press","Tire Flip"],stage=stages[e.stageIndex];
 let entries=e.field.map(a=>({a,value:strengthStageValue(a,g,stage)}));
 entries.sort((x,y)=>stage==="Tire Flip"?x.value-y.value:y.value-x.value);
 entries.forEach((x,i)=>{if(!e.data[x.a.territory])e.data[x.a.territory]={places:[],values:{}};e.data[x.a.territory].places.push(i+1);e.data[x.a.territory].values[stage]=x.value});
 e.history.push({stage,results:entries});e.stageIndex++;
 e.live=e.field.map(a=>{let d=e.data[a.territory]||{places:[]};return{a,avgPlace:d.places.length?d.places.reduce((x,y)=>x+y,0)/d.places.length:999}}).sort((a,b)=>a.avgPlace-b.avgPlace);
 if(e.stageIndex>=3){e.results=e.live;e.done=true;award(g,e.results)}
 if(events.strength.boy?.done&&events.strength.girl?.done)events.strength.complete=true;renderAll()
}

/* MIXED TENNIS */
function tennisIndividualSkill(a){
 return eventTechnique(a,"Tennis")*.20+a.attrs.Coordination*.15+a.attrs.Agility*.13+a.attrs.Precision*.12+
 a.attrs.Reaction*.10+a.attrs.Endurance*.08+a.attrs.Composure*.07+a.attrs.Awareness*.06+
 a.attrs.Speed*.03+a.attrs.Balance*.02+a.attrs.Explosiveness*.02+a.attrs.Mobility*.01+a.attrs.Toughness*.01
}
function teamForTerritory(t){return{territory:t,boy:eventAthlete(t,"boy","tennis"),girl:eventAthlete(t,"girl","tennis")}}
function tennisTeamSkill(t){return(tennisIndividualSkill(t.boy)+tennisIndividualSkill(t.girl))/2+(t.boy.attrs.Awareness+t.girl.attrs.Awareness+t.boy.attrs.Composure+t.girl.attrs.Composure)/16}
function tennisMatch(a,b){
 let sa=tennisTeamSkill(a)+gauss()*4.5,sb=tennisTeamSkill(b)+gauss()*4.5,w=sa>=sb?a:b,l=w===a?b:a,d=Math.abs(sa-sb);
 // American Patriot Games short-format tennis: first team to win 3 games wins the match (maximum 5 games).
 let loserGames=d>10?0:d>5?1:(Math.random()<.65?2:1);
 let score=`3-${loserGames}`;
 return{a,b,winner:w,loser:l,score}
}
function tennisSeedOrder(){
 let teams=territories.map(teamForTerritory);
 let positive=teams.filter(t=>(scores.combined[t.territory]||0)>0).sort((a,b)=>(scores.combined[b.territory]||0)-(scores.combined[a.territory]||0)||(Math.random()-.5));
 let zero=shuf(teams.filter(t=>(scores.combined[t.territory]||0)===0));
 let ordered=[...positive,...zero];ordered.forEach((t,i)=>t.tennisSeed=i+1);return ordered;
}
function standard64SeedOrder(){return [1,64,32,33,16,49,17,48,8,57,25,40,9,56,24,41,4,61,29,36,13,52,20,45,5,60,28,37,12,53,21,44,2,63,31,34,15,50,18,47,7,58,26,39,10,55,23,42,3,62,30,35,14,51,19,46,6,59,27,38,11,54,22,43]}
function _startTennis(){
 if(events.tennis.started){setEventView("tennis");return;}events.tennis.started=true;
 let ordered=tennisSeedOrder(),bySeed={};ordered.forEach(t=>bySeed[t.tennisSeed]=t);
 let bracket=standard64SeedOrder().map(s=>bySeed[s]);
 events.tennis.state={stage:"R64",preview:makeTennisPreview(bracket),history:[],done:false,placements:null};
 currentView="tennis";renderAll()
}
function makeTennisPreview(list){let out=[];for(let i=0;i<list.length;i+=2)out.push({a:list[i],b:list[i+1]});return out}
function runTennis(){
 let e=events.tennis.state;if(!e||e.done)return;
 if(e.stage==="R64"||e.stage==="R32"){let r=e.preview.map(m=>tennisMatch(m.a,m.b));e.history.push({stage:e.stage,groups:[{name:"Main Draw",results:r}]});e.preview=makeTennisPreview(r.map(x=>x.winner));e.stage=e.stage==="R64"?"R32":"R16";return renderAll()}
 if(e.stage==="R16"){let r=e.preview.map(m=>tennisMatch(m.a,m.b));e.history.push({stage:"Round of 16",groups:[{name:"Main Draw",results:r}]});e.r16=r;e.stage="QF_PB1";e.mainPreview=makeTennisPreview(r.map(x=>x.winner));e.pb1Preview=makeTennisPreview(r.map(x=>x.loser));return renderAll()}
 if(e.stage==="QF_PB1"){let q=e.mainPreview.map(m=>tennisMatch(m.a,m.b)),p=e.pb1Preview.map(m=>tennisMatch(m.a,m.b));e.history.push({stage:"Quarterfinals + Playback Round 1",groups:[{name:"Quarterfinals",results:q},{name:"Playback Round 1",results:p}]});e.qf=q;e.pb1=p;e.stage="SF_PB2";e.mainPreview=makeTennisPreview(q.map(x=>x.winner));let ql=q.map(x=>x.loser),pw=p.map(x=>x.winner);e.pb2Preview=[{a:pw[0],b:ql[3]},{a:pw[1],b:ql[2]},{a:pw[2],b:ql[1]},{a:pw[3],b:ql[0]}];return renderAll()}
 if(e.stage==="SF_PB2"){let sf=e.mainPreview.map(m=>tennisMatch(m.a,m.b)),p=e.pb2Preview.map(m=>tennisMatch(m.a,m.b));e.history.push({stage:"Semifinals + Playback Round 2",groups:[{name:"Semifinals",results:sf},{name:"Playback Round 2",results:p}]});e.sf=sf;e.pb2=p;e.stage="PB_QF";let pw=p.map(x=>x.winner);e.playbackQuarterPreview=[{a:pw[0],b:pw[3]},{a:pw[1],b:pw[2]}];return renderAll()}
 if(e.stage==="PB_QF"){let q=e.playbackQuarterPreview.map(m=>tennisMatch(m.a,m.b));e.history.push({stage:"Playback Quarterfinals",groups:[{name:"Playback Quarterfinals",results:q}]});e.seventhTeams=q.map(x=>x.loser);e.stage="PB_SF";let sl=e.sf.map(x=>x.loser);e.playbackSemiPreview=[{a:q[0].winner,b:sl[1]},{a:q[1].winner,b:sl[0]}];return renderAll()}
 if(e.stage==="PB_SF"){let p=e.playbackSemiPreview.map(m=>tennisMatch(m.a,m.b));e.history.push({stage:"Playback Semifinals",groups:[{name:"Playback Semifinals",results:p}]});e.stage="PLACEMENT";e.preview=[{label:"Final",a:e.sf[0].winner,b:e.sf[1].winner},{label:"3rd Place",a:p[0].winner,b:p[1].winner},{label:"5th Place",a:p[0].loser,b:p[1].loser},{label:"7th Place",a:e.seventhTeams[0],b:e.seventhTeams[1]}];return renderAll()}
 let f=e.preview.map(m=>({...tennisMatch(m.a,m.b),label:m.label}));e.history.push({stage:"Placement Matches",groups:[{name:"Placement Matches",results:f}]});let o=Object.fromEntries(f.map(x=>[x.label,x]));e.placements=[o["Final"].winner,o["Final"].loser,o["3rd Place"].winner,o["3rd Place"].loser,o["5th Place"].winner,o["5th Place"].loser,o["7th Place"].winner,o["7th Place"].loser];e.placements.forEach((t,i)=>{let p=pointMap[i];scores.boys[t.territory]+=p;scores.girls[t.territory]+=p});recomputeCombined();e.done=true;events.tennis.complete=true;renderAll()
}

/* OBSTACLE */
/* OBSTACLE */
const obstacleDefs=[
 {name:"Rolling Log",risk:.20,base:11,weights:{Balance:.25,Coordination:.18,Agility:.15,Technique:.12,Reaction:.09,Composure:.08,Awareness:.06,Mobility:.04,Speed:.03}},
 {name:"Long Jump",risk:.12,base:8,weights:{Explosiveness:.27,Speed:.20,Technique:.12,Coordination:.10,Balance:.09,Agility:.08,Composure:.05,Awareness:.04,Strength:.03,Mobility:.02}},
 {name:"Rope Climb",risk:.08,base:21,weights:{Strength:.24,Technique:.18,Endurance:.13,Toughness:.12,Explosiveness:.09,Coordination:.08,Agility:.05,Mobility:.05,Balance:.03,Composure:.02,Awareness:.01}},
 {name:"ZipLine",risk:.05,base:10,weights:{Technique:.19,Composure:.18,Coordination:.16,Balance:.14,Reaction:.10,Strength:.08,Awareness:.07,Toughness:.04,Agility:.03,Mobility:.01}},
 {name:"Cargo Net",risk:.15,base:18,weights:{Technique:.17,Agility:.16,Coordination:.15,Strength:.13,Balance:.11,Endurance:.08,Toughness:.07,Mobility:.06,Awareness:.04,Composure:.03}},
 {name:"Big Balls",risk:.18,base:16,weights:{Balance:.20,Agility:.18,Coordination:.16,Speed:.13,Explosiveness:.11,Technique:.09,Reaction:.06,Composure:.04,Awareness:.02,Mobility:.01}},
 {name:"Incline / Decline Monkey Bars",risk:.22,base:24,weights:{Strength:.20,Technique:.17,Toughness:.13,Endurance:.12,Coordination:.11,Balance:.08,Agility:.06,Composure:.05,Awareness:.04,Mobility:.03,Reaction:.01}},
 {name:"Warped Wall",risk:0,base:13,weights:{Explosiveness:.24,Speed:.18,Technique:.15,Agility:.12,Coordination:.09,Strength:.07,Composure:.05,Awareness:.04,Balance:.03,Mobility:.02,Reaction:.01}}
]
function obstacleAbility(a,def){let sum=0,total=0;Object.entries(def.weights).forEach(([k,w])=>{if(a.attrs[k]!==undefined){sum+=a.attrs[k]*w;total+=w}});return total?sum/total:65}
function obstacleAttempt(a,g,def){
 let ability=obstacleAbility(a,def),fatigue=(70-a.attrs.Endurance)*.015+(70-a.attrs.Toughness)*.01+(68-a.attrs.Awareness)*.004,time=clamp(def.base+(78-ability)*.12+fatigue+gauss()*.8,4,45);
 let fallChance=def.risk===0?0:clamp(def.risk+(65-ability)*.003-(a.attrs.Composure-65)*.0015,.015,.42),fell=Math.random()<fallChance;
 return{a,time,fell,total:fell?30:time};
}
function _startObstacle(){
 if(events.obstacle.started){setEventView("obstacle");return;}events.obstacle.started=true;
 ["boy","girl"].forEach(g=>events.obstacle[g]={g,field:fieldFor(g),stageIndex:0,history:[],totals:{},done:false,results:null});
 currentView="obstacle";renderAll()
}
function runObstacle(g){
 let e=events.obstacle[g];if(!e||e.done)return;
 let def=obstacleDefs[e.stageIndex],res=e.field.map(a=>obstacleAttempt(a,g,def)).sort((x,y)=>x.total-y.total);
 res.forEach(x=>e.totals[x.a.territory]=(e.totals[x.a.territory]||0)+x.total);e.history.push({stage:def.name,results:res});e.stageIndex++;
 e.live=e.field.map(a=>({a,total:e.totals[a.territory]||0})).sort((x,y)=>x.total-y.total);
 if(e.stageIndex>=obstacleDefs.length){e.results=e.live;e.done=true;award(g,e.results)}
 if(events.obstacle.boy?.done&&events.obstacle.girl?.done)events.obstacle.complete=true;renderAll()
}

/* ARCHERY */
function archerySkill(a){
 return a.attrs.Precision*.32+a.attrs.Composure*.20+eventTechnique(a,"Archery")*.18+a.attrs.Coordination*.10+
 a.attrs.Awareness*.08+a.attrs.Balance*.05+a.attrs.Reaction*.03+a.attrs.Toughness*.02+
 a.attrs.Mobility*.01+a.attrs.Endurance*.01
}
function archeryStage(a,distance){let skill=archerySkill(a),difficulty=distance===15?0:distance===25?7:15;return clamp(Math.round(35+skill*.72-difficulty+gauss()*4),15,100)}
function archeryFinal(a){let s=archerySkill(a);return clamp(Math.round(38+s*.62+gauss()*4),25,100)}
function _startArchery(){
 if(events.archery.started){setEventView("archery");return;}events.archery.started=true;
 ["boy","girl"].forEach(g=>events.archery[g]={g,stageIndex:0,field:fieldFor(g),history:[],totals:{},finalists:[],done:false,placement:null,playerAlive:true});
 currentView="archery";renderAll()
}
function runArchery(g){
 let e=events.archery[g],u=$("territorySelect").value;if(!e||e.done)return;const distances=[15,25,40];
 if(e.stageIndex<3){
   let d=distances[e.stageIndex],res=e.field.map(a=>({a,score:archeryStage(a,d)})).sort((x,y)=>y.score-x.score);
   res.forEach(x=>e.totals[x.a.territory]=(e.totals[x.a.territory]||0)+x.score);e.history.push({stage:`${d}m Round`,results:res});e.stageIndex++;
   if(e.stageIndex===3){let qual=e.field.map(a=>({a,score:e.totals[a.territory]||0})).sort((x,y)=>y.score-x.score);e.qualification=qual;e.finalists=qual.slice(0,16).map(x=>x.a);if(!e.finalists.some(a=>a.territory===u))e.playerAlive=false}
 }else{
   let res=e.finalists.map(a=>({a,score:archeryFinal(a)})).sort((x,y)=>y.score-x.score);e.history.push({stage:"Top 16 Final",results:res});e.done=true;let p=res.findIndex(x=>x.a.territory===u)+1;e.placement=p>0?p:null;award(g,res);
 }
 if(events.archery.boy?.done&&events.archery.girl?.done)events.archery.complete=true;renderAll()
}



/* WATCH MODE v1.6.0 — click-through broadcast replays driven by authoritative simulation results */
function clearWatchTimers(){watchTimers.forEach(x=>clearTimeout(x));watchTimers=[];if(watchRaf)cancelAnimationFrame(watchRaf);watchRaf=null}
function watchTimer(fn,ms){let x=setTimeout(fn,ms);watchTimers.push(x);return x}
function initials(a){return territoryCode(a?.territory)}
function suspenseOrder(rows){let a=[...(rows||[])];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function watchUserRows(rows,n=16){let u=$("territorySelect").value,top=rows.slice(0,n),mine=rows.find(x=>(x.a||x).territory===u);if(mine&&!top.includes(mine))top.push(mine);return top}
function setWatchHeader(title,subtitle=""){$("watchTitle").textContent=title;$("watchSubtitle").textContent=subtitle;$("watchTopControls").innerHTML="";$("watchFooter").innerHTML=""}
function finishWatch(){clearWatchTimers();animationCapture=false;$("watchModal").classList.add("hidden");renderAll();saveDynasty()}
function setWatchButton(label,fn){
 let top=$("watchTopControls"),bottom=$("watchFooter");
 top.innerHTML="";bottom.innerHTML="";
 [top,bottom].forEach(box=>{
   let b=document.createElement("button");
   b.className="watch-next";
   b.textContent=label;
   b.onclick=fn;
   box.appendChild(b);
 });
}
function clearWatchButtons(){$("watchTopControls").innerHTML="";$("watchFooter").innerHTML=""}
function showWatchContinue(){setWatchButton("Continue",finishWatch)}
function watchProgress(labels,index){return `<div class="watch-progress">${labels.map((x,i)=>`<span class="${i<index?"done":i===index?"active":""}">${x}</span>`).join("")}</div>`}
function watchSnapshot(key,g){
 if(key==="wrestling"){let e=events.wrestling[g];return{light:e?.divisions?.light?.history?.length||0,heavy:e?.divisions?.heavy?.history?.length||0}}
 if(key==="tennis")return{hist:events.tennis.state?.history?.length||0}
 let e=events[key]?.[g];return{hist:e?.history?.length||0}
}
function runWatchSimulation(key,g){
 const map={hundred:()=>run100(g),sandbag:()=>runSandbag(g),swim:()=>runSwim(g),tennis:()=>runTennis(),teamsports:()=>runTeamSports(g),wrestling:()=>runWrestling(g),archery:()=>runArchery(g),mile:()=>runMile(g),strength:()=>runStrength(g),obstacle:()=>runObstacle(g)};
 map[key]?.()
}
function focusGroup(groups){let u=$("territorySelect").value;return groups?.find(gr=>gr.some(x=>(x.a||x).territory===u))||groups?.[0]||[]}
function payloadAfter(key,g,before){
 if(key==="wrestling"){
   let e=events.wrestling[g],matches=[];
   ["light","heavy"].forEach(k=>{let d=e.divisions[k],from=before[k]||0;d.history.slice(from).forEach(h=>(h.results||[]).forEach(m=>matches.push({...m,stage:h.stage,division:k})))});
   let u=$("territorySelect").value,match=matches.find(m=>m.a?.territory===u||m.b?.territory===u)||matches[0];return{key,g,match,matches}
 }
 if(key==="tennis"){
   let e=events.tennis.state,h=e.history[before.hist];if(!h)return null;let matches=[];h.groups.forEach(gr=>(gr.results||[]).forEach(m=>matches.push(m)));
   let u=$("territorySelect").value,match=matches.find(m=>m.a?.territory===u||m.b?.territory===u)||matches[0];return{key,g:null,stage:h.stage,match,matches}
 }
 let e=events[key][g],h=e.history[before.hist];if(!h)return null;
 if(key==="hundred"||key==="swim")return{key,g,stage:key==="hundred"?(h.round===0?"Round of 64":h.round===1?"Semifinals":"Final"):(h.round===0?"Round of 64":h.round===1?"Round of 32":h.round===2?"Semifinals":"Final"),rows:focusGroup(h.groups)};
 if(key==="mile"){if(h.half)return{key,g,stage:h.stage,rows:h.half.map(x=>({a:x.a,time:x.half})),halfOnly:true};return{key,g,stage:h.stage,rows:focusGroup(h.groups)}}
 if(key==="sandbag")return{key,g,stage:h.stage,rows:focusGroup(h.groups)};
 return{key,g,stage:h.stage,rows:h.results||[]}
}
function watchAndRun(key,g=null){
 if(animationCapture)return;
 if(key==="obstacle")return watchContinuousObstacle(g);
 let before=watchSnapshot(key,g);animationCapture=true;clearWatchTimers();runWatchSimulation(key,g);let payload=payloadAfter(key,g,before);
 if(!payload){animationCapture=false;renderAll();return}
 $("watchModal").classList.remove("hidden");$("watchSkipBtn").textContent="Exit Replay";$("watchSkipBtn").onclick=finishWatch;renderWatchPayload(payload)
}
function resultBoard(rows,valueFn){
 let u=$("territorySelect").value,b=document.createElement("div");b.className="watch-result-board";b.innerHTML="<strong>RESULTS</strong>";
 rows.forEach((x,i)=>{let a=x.a||x,r=document.createElement("div");r.className="watch-result-row"+(a.territory===u?" user-watch":"");r.innerHTML=`<span>${i+1}</span><span>${playerLinkHTML(a)} · ${teamLinkHTML(a.territory)}</span><strong>${valueFn(x)}</strong>`;b.appendChild(r)});return b
}
function liveBoard(rows,valueFn,title="LIVE ORDER"){
 let u=$("territorySelect").value,b=document.createElement("div");b.className="watch-split-board";b.innerHTML=`<div class="watch-live-title">${title}</div>`;
 rows.forEach((x,i)=>{let a=x.a||x,r=document.createElement("div");r.className="watch-live-rank"+(a.territory===u?" user-watch":"");r.innerHTML=`<span>${i+1}</span><span>${playerLinkHTML(a)} · ${territoryCode(a.territory)}</span><strong>${valueFn(x)}</strong>`;b.appendChild(r)});return b
}
function renderWatchPayload(p){
 if(p.key==="hundred")interactiveSprint(p);
 else if(p.key==="swim")interactiveSwim(p);
 else if(p.key==="mile")interactiveMile(p);
 else if(p.key==="sandbag")interactiveSandbag(p);
 else if(p.key==="tennis")interactiveTennis(p);
 else if(p.key==="wrestling")interactiveWrestling(p);
 else if(p.key==="teamsports")interactiveTeamSport(p);
 else if(p.key==="strength")interactiveStrength(p);
 else if(p.key==="archery")interactiveArchery(p);
 else if(p.key==="obstacle")interactiveObstacle(p)
}

function liveRankMap(rows,metricKey="split",ascending=true){
 let sorted=[...rows].sort((a,b)=>ascending?(a[metricKey]-b[metricKey]):(b[metricKey]-a[metricKey]));
 let map=new Map();sorted.forEach((x,i)=>map.set(x.a.territory,i+1));return{sorted,map}
}
function liveProgressFromTimes(rows,checkpointFraction,key){
 // The leader reaches the checkpoint. Everyone else is placed behind them
 // according to elapsed-time deficit at this moment, without exposing future result.
 let live=rows.map(x=>({...x,split:splitEstimate(x,key,checkpointFraction)}));
 let leader=Math.min(...live.map(x=>x.split));
 live.forEach(x=>{
   let deficit=Math.max(0,x.split-leader);
   // Convert time gap to a visually useful distance gap while keeping all markers
   // near the current checkpoint instead of revealing the final outcome.
   let gap=Math.min(checkpointFraction*.22,deficit/leader*checkpointFraction*1.75);
   x.visualProgress=Math.max(.025,checkpointFraction-gap);
 });
 return live;
}
function attachPlaceBadge(marker,place){
 let old=marker.querySelector(".live-place-badge");if(old)old.remove();
 let badge=document.createElement("span");badge.className="live-place-badge";badge.textContent=place;marker.appendChild(badge);
}
function currentRankText(place,total){return `${place}/${total}`}

function raceSegmentBias(a,key,segmentIndex){
 // Positive = slower segment. Negative = faster segment.
 // Different athlete strengths matter at different phases so leads can genuinely change.
 let r=gauss()*0.045;
 if(key==="hundred"){
   if(segmentIndex===0)r+=(72-(a.attrs.Explosiveness*.48+a.attrs.Reaction*.28+a.attrs.Speed*.24))*.0017;
   else if(segmentIndex===1)r+=(72-(a.attrs.Speed*.52+a.attrs.Explosiveness*.20+a.attrs.Coordination*.16+a.attrs.Technique*.12))*.00145;
   else if(segmentIndex===2)r+=(72-(a.attrs.Speed*.58+a.attrs.Endurance*.18+a.attrs.Toughness*.12+a.attrs.Composure*.12))*.00135;
   else r+=(72-(a.attrs.Speed*.50+a.attrs.Endurance*.25+a.attrs.Toughness*.15+a.attrs.Composure*.10))*.00145;
 }else if(key==="swim"){
   if(segmentIndex===0)r+=(72-(a.attrs.Explosiveness*.18+a.attrs.Coordination*.28+a.attrs.Technique*.26+a.attrs.Speed*.12+a.attrs.Reaction*.08+a.attrs.Strength*.08))*.0015;
   else if(segmentIndex===1)r+=(72-(a.attrs.Coordination*.28+a.attrs.Technique*.25+a.attrs.Endurance*.20+a.attrs.Strength*.14+a.attrs.Composure*.13))*.00145;
   else if(segmentIndex===2)r+=(72-(a.attrs.Endurance*.31+a.attrs.Coordination*.22+a.attrs.Technique*.20+a.attrs.Toughness*.12+a.attrs.Composure*.10+a.attrs.Strength*.05))*.0016;
   else r+=(72-(a.attrs.Endurance*.38+a.attrs.Toughness*.18+a.attrs.Composure*.15+a.attrs.Coordination*.14+a.attrs.Technique*.10+a.attrs.Strength*.05))*.00175;
 }else if(key==="mile"){
   if(segmentIndex===0)r+=(72-(a.attrs.Speed*.20+a.attrs.Endurance*.30+a.attrs.Composure*.18+a.attrs.Awareness*.17+a.attrs.Toughness*.15))*.0019;
   else if(segmentIndex===1)r+=(72-(a.attrs.Endurance*.34+a.attrs.Awareness*.20+a.attrs.Composure*.18+a.attrs.Toughness*.16+a.attrs.Speed*.12))*.0019;
   else if(segmentIndex===2)r+=(72-(a.attrs.Endurance*.39+a.attrs.Toughness*.20+a.attrs.Composure*.16+a.attrs.Awareness*.15+a.attrs.Speed*.10))*.0020;
   else r+=(72-(a.attrs.Endurance*.31+a.attrs.Toughness*.22+a.attrs.Speed*.20+a.attrs.Composure*.17+a.attrs.Explosiveness*.10))*.0021;
 }
 return r;
}
function buildCheckpointSplits(results,key,fractions){
 let map=new Map(),segments=fractions.length-1;
 results.forEach(x=>{
   let baseWeights=[];
   for(let i=0;i<segments;i++){
     let dist=fractions[i+1]-fractions[i];
     baseWeights.push(Math.max(.02,dist*(1+raceSegmentBias(x.a,key,i))));
   }
   let sum=baseWeights.reduce((a,b)=>a+b,0),cum=0,vals=[0];
   baseWeights.forEach((w,i)=>{
     cum+=x.time*(w/sum);
     if(i===segments-1)cum=x.time;
     vals.push(cum);
   });
   map.set(x.a.territory,vals);
 });
 return map;
}
function checkpointLive(results,splitMap,step,fraction){
 if(step===0)return results.map(x=>({...x,split:0,visualProgress:0}));
 return results.map(x=>({...x,split:splitMap.get(x.a.territory)[step],visualProgress:fraction}));
}
function visualRaceSpread(live,fraction){
 if(fraction===0)return live.map(x=>({...x,visualProgress:0}));
 let leader=Math.min(...live.map(x=>x.split));
 return live.map(x=>{
   let deficit=Math.max(0,x.split-leader);
   let gap=Math.min(Math.max(.018,fraction*.24),deficit/Math.max(leader,1)*fraction*2.5);
   return {...x,visualProgress:Math.max(.015,fraction-gap)};
 });
}
function splitEstimate(x,key,fraction){
 let a=x.a,base=x.time*fraction,mod=0;
 if(key==="hundred"){
   if(fraction<=.3)mod=(75-(a.attrs.Explosiveness*.58+a.attrs.Reaction*.22+a.attrs.Speed*.20))*.006;
   else if(fraction<=.65)mod=(75-(a.attrs.Speed*.60+a.attrs.Explosiveness*.20+a.attrs.Coordination*.20))*.005;
   else mod=(75-(a.attrs.Speed*.68+a.attrs.Endurance*.20+a.attrs.Toughness*.12))*.004;
 }else if(key==="swim"){
   mod=(75-(a.attrs.Endurance*.32+a.attrs.Coordination*.28+a.attrs.Technique*.20+a.attrs.Strength*.20))*.015*fraction;
 }else{
   mod=(75-(a.attrs.Endurance*.50+a.attrs.Toughness*.18+a.attrs.Awareness*.14+a.attrs.Speed*.18))*.03*fraction;
 }
 return base+mod
}
function setupLaneScene(rows,pool=false){
 let u=$("territorySelect").value,stage=$("watchStage");stage.innerHTML="";
 let wrap=document.createElement("div");wrap.className=pool?"pool-deck":"";
 let lanes=document.createElement("div");lanes.className="watch-lanes";wrap.appendChild(lanes);
 rows.forEach((x,i)=>{let lane=document.createElement("div");lane.className="watch-lane"+(x.a.territory===u?" user-watch":"");lane.innerHTML=`<div class="watch-lane-label"><span class="watch-lane-no">L${i+1}</span> ${playerLinkHTML(x.a)}<br><span class="small">${teamLinkHTML(x.a.territory)} · ${territoryCode(x.a.territory)}</span></div><div class="watch-track ${pool?"pool":"real-track"}">${pool?'<div class="pool-wall left"></div><div class="pool-wall right"></div>':''}<div class="watch-start"></div><div class="watch-finish"></div><div class="watch-marker">${initials(x.a)}</div></div><div class="watch-time">—</div>`;lanes.appendChild(lane)});
 stage.appendChild(wrap);return lanes
}
function interactiveSprint(p){
 let results=p.rows||[],rows=suspenseOrder(results),labels=["0m","30m","60m","80m","100m"],fractions=[0,.30,.60,.80,1],step=0,splitMap=buildCheckpointSplits(results,"hundred",[0,.30,.60,.80,1]);
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} 100m Sprint`,p.stage);let lanes=setupLaneScene(rows,false),stage=$("watchStage");
 function draw(){
   stage.querySelectorAll(".watch-progress,.watch-split-board,.watch-result-board").forEach(x=>x.remove());
   stage.insertAdjacentHTML("afterbegin",watchProgress(labels,step));
   let f=fractions[step],live=visualRaceSpread(checkpointLive(results,splitMap,step,f),f);
   let ranked=f===0?[...live]:[...live].sort((a,b)=>a.split-b.split),rankMap=new Map(ranked.map((x,i)=>[x.a.territory,f===0?"—":i+1]));
   [...lanes.children].forEach((lane,i)=>{
     let x=rows[i],lx=live.find(q=>q.a.territory===x.a.territory),m=lane.querySelector(".watch-marker");
     m.style.left=`calc(${Math.max(3,lx.visualProgress*96)}% - 12px)`;
     attachPlaceBadge(m,rankMap.get(x.a.territory));
     lane.querySelector(".watch-time").textContent=f===1?`${x.time.toFixed(2)}s`:`${lx.split.toFixed(2)}s`;
   });
   stage.appendChild(liveBoard(ranked,x=>`${x.split.toFixed(2)}s`,f===1?"FINAL ORDER":(f===0?"STARTING LANES":`ORDER AT ${labels[step]}`)));
   if(f===1){stage.appendChild(resultBoard(results,x=>`${x.time.toFixed(2)}s`));showWatchContinue()}else setWatchButton(`Advance to ${labels[step+1]}`,()=>{step++;draw()})
 }draw()
}
function interactiveSwim(p){
 let results=p.rows||[],rows=suspenseOrder(results),labels=["0m","50m","100m","150m","200m"],fractions=[0,.25,.50,.75,1],step=0,splitMap=buildCheckpointSplits(results,"swim",[0,.25,.50,.75,1]);
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} 200m Freestyle`,p.stage);let lanes=setupLaneScene(rows,true),stage=$("watchStage");
 function draw(){
   stage.querySelectorAll(".watch-progress,.watch-split-board,.watch-result-board").forEach(x=>x.remove());stage.insertAdjacentHTML("afterbegin",watchProgress(labels,step));
   let f=fractions[step],live=visualRaceSpread(checkpointLive(results,splitMap,step,f),f);
   let ranked=f===0?[...live]:[...live].sort((a,b)=>a.split-b.split),rankMap=new Map(ranked.map((x,i)=>[x.a.territory,f===0?"—":i+1])),right=step%2===1;
   [...lanes.children].forEach((lane,i)=>{
     let x=rows[i],lx=live.find(q=>q.a.territory===x.a.territory),m=lane.querySelector(".watch-marker");
     let checkpointBase=Math.max(0,f-.25),legProg=f===0?0:Math.max(0,Math.min(1,(lx.visualProgress-checkpointBase)/.25));
     let pct=f===0?4:(right?(4+legProg*91):(95-legProg*91));
     m.style.left=`calc(${Math.max(3,Math.min(95,pct))}% - 12px)`;
     attachPlaceBadge(m,rankMap.get(x.a.territory));
     lane.querySelector(".watch-time").textContent=f===1?`${x.time.toFixed(2)}s`:`${lx.split.toFixed(2)}s`;
   });
   stage.appendChild(liveBoard(ranked,x=>`${x.split.toFixed(2)}s`,f===1?"FINAL ORDER":(f===0?"STARTING LANES":`ORDER AT ${labels[step]}`)));
   if(f===1){stage.appendChild(resultBoard(results,x=>`${x.time.toFixed(2)}s`));showWatchContinue()}else setWatchButton(`Swim to ${labels[step+1]}`,()=>{step++;draw()})
 }draw()
}
function ovalPoint(el,progress){
 let w=el.clientWidth,h=el.clientHeight,cx=w/2,cy=h/2,angle=-Math.PI/2+(progress%1)*Math.PI*2,rx=w*.40,ry=h*.38;
 return{left:cx+Math.cos(angle)*rx,top:cy+Math.sin(angle)*ry}
}
function interactiveMile(p){
 let results=p.rows||[],rows=suspenseOrder(results),labels=p.halfOnly?["0m","400m","800m"]:["0m","400m","800m","1200m","1600m"],fractions=p.halfOnly?[0,.5,1]:[0,.25,.5,.75,1],step=0,splitMap=buildCheckpointSplits(results,"mile",p.halfOnly?[0,.5,1]:[0,.25,.5,.75,1]);
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} 1 Mile`,p.stage);let stage=$("watchStage");stage.innerHTML=`<div id="mileProg"></div><div class="watch-oval-wrap"><div class="watch-oval" id="mileOval"></div><div class="live-order"><strong>LIVE ORDER</strong><div id="mileOrder"></div></div></div>`;
 let oval=$("mileOval"),markers=[];rows.forEach(x=>{let m=document.createElement("div");m.className="oval-marker"+(x.a.territory===$("territorySelect").value?" user-watch":"");m.textContent=initials(x.a);oval.appendChild(m);markers.push({x,m})});
 function draw(){
   $("mileProg").innerHTML=watchProgress(labels,step);let f=fractions[step],live=visualRaceSpread(checkpointLive(results,splitMap,step,f),f);
   let ranked=f===0?[...live]:[...live].sort((a,b)=>a.split-b.split),rankMap=new Map(ranked.map((x,i)=>[x.a.territory,f===0?"—":i+1]));
   markers.forEach(o=>{
     // Visual oval represents the entire mile as one loop:
     // 400m ≈ 25%, 800m ≈ 50%, 1200m ≈ 75%, 1600m = finish.
     let lx=live.find(q=>q.a.territory===o.x.a.territory),pt=ovalPoint(oval,lx.visualProgress);
     o.m.style.left=pt.left+"px";o.m.style.top=pt.top+"px";attachPlaceBadge(o.m,rankMap.get(o.x.a.territory));
   });
   $("mileOrder").innerHTML=ranked.map((x,i)=>`<div class="live-order-row ${x.a.territory===$("territorySelect").value?"user-watch":""}"><span>${f===0?"—":i+1}</span><span>${x.a.name} · ${territoryCode(x.a.territory)} <strong>${fmtTime(x.split)}</strong></span></div>`).join("");
   if(f===1){stage.appendChild(resultBoard(results,x=>fmtTime(x.time)));showWatchContinue()}else setWatchButton(`Advance to ${labels[step+1]}`,()=>{step++;draw()})
 }draw()
}
function interactiveSandbag(p){
 let results=p.rows||[],rows=suspenseOrder(results),weights=p.g==="boy"?["50 lb","75 lb","100 lb"]:["25 lb","50 lb","75 lb"],phases=[{label:"0m — Start",start:true}],bag=0;
 weights.forEach((w,i)=>{phases.push({label:`${w} — 50m Out`,bag:i,out:true});phases.push({label:`${w} — 50m Back + Wall Throw`,bag:i,out:false})});
 let step=0,u=$("territorySelect").value;setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} Sandbag Carry`,`${p.stage} · 50m down-and-back with each bag`);
 let stage=$("watchStage");stage.innerHTML=`<div id="sandProg"></div><div class="sandbag-course"><div class="watch-lanes" id="sandLanes"></div></div><div id="sandLive"></div>`;
 let lanes=$("sandLanes");
 rows.forEach((x,i)=>{let lane=document.createElement("div");lane.className="watch-lane"+(x.a.territory===u?" user-watch":"");lane.innerHTML=`<div class="watch-lane-label">${playerLinkHTML(x.a)}<br><span class="small">${territoryCode(x.a.territory)}</span></div><div class="watch-track"><div class="sandbag-wall"></div><div class="sandbag-turn"></div><div class="watch-marker">${initials(x.a)}</div><div class="sandbag-bag"></div></div><div class="watch-time">0.0s</div>`;lanes.appendChild(lane)});
 function cumulative(x,phaseIndex){if(phaseIndex===0)return 0;let k=phaseIndex-1,b=Math.floor(k/2),half=k%2===0?.5:1,total=0;for(let i=0;i<b;i++)total+=x["leg"+(i+1)];total+=x["leg"+(b+1)]*half;return total}
 function draw(){
   let phase=phases[step];$("sandProg").innerHTML=watchProgress(phases.map(x=>x.label),step);
   let live=[...results].map(x=>({...x,split:cumulative(x,step)})),ranked=phase.start?[...live]:[...live].sort((a,b)=>a.split-b.split),rankMap=new Map(ranked.map((x,i)=>[x.a.territory,phase.start?"—":i+1]));
   let leader=Math.min(...live.map(x=>x.split));
   [...lanes.children].forEach((lane,i)=>{
     let x=rows[i],lx=live.find(q=>q.a.territory===x.a.territory),m=lane.querySelector(".watch-marker"),bagEl=lane.querySelector(".sandbag-bag");
     let deficit=Math.max(0,lx.split-leader),gap=Math.min(.16,deficit/Math.max(leader,1)*.9),endProg=phase.start?.05:(phase.out?(.95-gap):(.05+gap));
     m.style.left=`calc(${endProg*100}% - 14px)`;
     bagEl.style.left=`calc(${Math.max(.04,Math.min(.94,endProg))*100}% - 18px)`;
     bagEl.classList.toggle("sandbag-throw",!phase.start&&!phase.out);
     attachPlaceBadge(m,rankMap.get(x.a.territory));
     lane.querySelector(".watch-time").textContent=`${lx.split.toFixed(1)}s`;
   });
   $("sandLive").innerHTML="";$("sandLive").appendChild(liveBoard(ranked,x=>`${x.split.toFixed(1)}s`,phase.start?"STARTING ORDER":phase.label));
   if(step===phases.length-1){stage.appendChild(resultBoard(results,x=>`${x.total.toFixed(1)}s`));showWatchContinue()}else setWatchButton(`Next: ${phases[step+1].label}`,()=>{step++;draw()})
 }draw()
}
function parseTennisSets(score){
 return String(score||"").split(",").map(x=>x.trim()).filter(Boolean).map(x=>x.split("-").map(Number))
}
function tennisGameWinnersForSet(aGames,bGames){
 let out=[],a=0,b=0;
 while(a<aGames||b<bGames){
   if(a>=aGames){b++;out.push("b");continue}
   if(b>=bGames){a++;out.push("a");continue}
   let remA=aGames-a,remB=bGames-b;
   let side=Math.random()<(remA/(remA+remB))?"a":"b";
   if(side==="a")a++;else b++;
   out.push(side);
 }
 return out
}
function tennisPointsForGame(winnerSide){
 // Plausible fast game that always resolves to the predetermined game winner.
 let loser=winnerSide==="a"?"b":"a",seq=[];
 let loserPts=Math.random()<.18?3:r(0,2);
 let winPts=4;
 let a=0,b=0,planned=[];
 for(let i=0;i<loserPts;i++)planned.push(loser);
 for(let i=0;i<winPts;i++)planned.push(winnerSide);
 planned=shuf(planned);
 // Ensure the winner actually closes the game.
 if(planned[planned.length-1]!==winnerSide){
   let j=planned.indexOf(winnerSide);[planned[j],planned[planned.length-1]]=[planned[planned.length-1],planned[j]];
 }
 return planned
}
function tennisPointText(a,b){
 const pts=["0","15","30","40"];
 if(a>=4||b>=4){
   if(a===b)return"DEUCE";
   if(a===b+1)return"AD–0";
   if(b===a+1)return"0–AD";
 }
 return `${pts[Math.min(a,3)]}–${pts[Math.min(b,3)]}`
}
function tennisServerForGame(gameNumber){
 // Alternate team and service side; within team alternate boy/girl server.
 let team=gameNumber%2===0?"a":"b";
 let partner=Math.floor(gameNumber/2)%2===0?"boy":"girl";
 return{team,partner}
}
function tennisPlayerPositions(server,pointIndex){
 // Percent coordinates. Teams A top, B bottom.
 let deuce=pointIndex%2===0;
 const pos={
   aBoy:{left:deuce?28:36,top:16},
   aGirl:{left:deuce?66:72,top:39},
   bBoy:{left:deuce?72:65,top:81},
   bGirl:{left:deuce?34:28,top:61}
 };
 // Server retreats toward baseline, partner covers net.
 if(server.team==="a"){
   if(server.partner==="boy"){pos.aBoy.top=10;pos.aGirl.top=38}else{pos.aGirl.top=10;pos.aBoy.top=38}
 }else{
   if(server.partner==="boy"){pos.bBoy.top=84;pos.bGirl.top=62}else{pos.bGirl.top=84;pos.bBoy.top=62}
 }
 return pos
}
function tennisMovePlayers(dots,pos){
 Object.entries(pos).forEach(([k,p])=>{
   dots[k].style.left=p.left+"%";dots[k].style.top=p.top+"%";
 })
}
function tennisRallyPlan(server,pointWinner,teams){
 let hits=[],serverKey=server.team+(server.partner==="boy"?"Boy":"Girl");
 let recvTeam=server.team==="a"?"b":"a";
 let recvKey=recvTeam+(Math.random()<.5?"Boy":"Girl");
 hits.push(serverKey,recvKey);
 let rallyLen=r(3,8);
 for(let i=2;i<rallyLen;i++){
   let team=i%2===0?server.team:recvTeam;
   let key=team+(Math.random()<.52?"Boy":"Girl");
   hits.push(key)
 }
 // final hitter is on point-winning team
 let finalKey=pointWinner+(Math.random()<.5?"Boy":"Girl");
 hits[hits.length-1]=finalKey;
 return hits
}
function tennisBallTargetForPlayer(key,shotIndex){
 const top=key.startsWith("a"),leftSide=key.endsWith("Boy");
 let baseTop=top?28:72,baseLeft=leftSide?31:69;
 return{
   left:clamp(baseLeft+gauss()*12,12,88),
   top:clamp(baseTop+gauss()*10,14,86)
 }
}
function tennisScorebugHTML(m,setScores,setIndex,gameScore,pointScore,status){
 let aSets=setScores.map((x,i)=>i<setIndex?x[0]:(i===setIndex?gameScore[0]:""));
 let bSets=setScores.map((x,i)=>i<setIndex?x[1]:(i===setIndex?gameScore[1]:""));
 return `
 <div>
   <div class="tennis-score-team">
     <div class="tennis-score-code">${territoryCode(m.a.territory)}</div>
     <div class="tennis-score-names">${playerLinkHTML(m.a.boy)} / ${playerLinkHTML(m.a.girl)}</div>
     <div class="tennis-score-cell">${aSets[0]??""}</div>
     <div class="tennis-score-cell">${aSets[1]??""}</div>
     <div class="tennis-score-cell tennis-score-current">${pointScore.a}</div>
   </div>
   <div class="tennis-score-team">
     <div class="tennis-score-code">${territoryCode(m.b.territory)}</div>
     <div class="tennis-score-names">${playerLinkHTML(m.b.boy)} / ${playerLinkHTML(m.b.girl)}</div>
     <div class="tennis-score-cell">${bSets[0]??""}</div>
     <div class="tennis-score-cell">${bSets[1]??""}</div>
     <div class="tennis-score-cell tennis-score-current">${pointScore.b}</div>
   </div>
 </div>
 <div class="tennis-status">${status}</div>`
}
function interactiveTennis(p){
 let m=p.match;if(!m){finishWatch();return}
 let sets=parseTennisSets(m.score);
 if(!sets.length){finishWatch();return}

 // Build deterministic game winners from official set score.
 let setGameWinners=sets.map(st=>tennisGameWinnersForSet(st[0],st[1]));
 let setIndex=0,gameIndex=0,pointIndex=0;
 let currentGamePoints=[0,0],gameScore=[0,0];
 let pointPlan=tennisPointsForGame(setGameWinners[0][0]);
 let globalGame=0,rallyRunning=false;

 setWatchHeader("Mixed Doubles Tennis",`${p.stage} · point-by-point replay`);
 let stage=$("watchStage");
 stage.innerHTML=`
 <div class="tennis-live-wrap">
   <div class="tennis-scorebug" id="tennisScorebug"></div>
   <div class="tennis-court-live" id="tennisCourt">
     <div class="baseline top"></div><div class="baseline bottom"></div>
     <div class="sideline left"></div><div class="sideline right"></div>
     <div class="sideline singles-left"></div><div class="sideline singles-right"></div>
     <div class="service-line top"></div><div class="service-line bottom"></div>
     <div class="center-service"></div><div class="tennis-net"></div>
     <div class="tennis-player-dot" id="aBoy">${initials(m.a.boy)}</div>
     <div class="tennis-player-dot" id="aGirl">${initials(m.a.girl)}</div>
     <div class="tennis-player-dot team-b" id="bBoy">${initials(m.b.boy)}</div>
     <div class="tennis-player-dot team-b" id="bGirl">${initials(m.b.girl)}</div>
     <div class="tennis-ball-live" id="tennisBall"></div>
     <div class="tennis-point-banner" id="tennisPointBanner"></div>
   </div>
   <div class="tennis-rally-log">
     <div class="tennis-rally-box"><strong id="tennisServerText">Server</strong><div id="tennisRallyText">Ready</div></div>
     <div class="tennis-rally-box"><strong>Match</strong><div id="tennisMatchText">In progress</div></div>
   </div>
 </div>`;
 let dots={
   aBoy:$("aBoy"),aGirl:$("aGirl"),bBoy:$("bBoy"),bGirl:$("bGirl")
 };
 if(m.a.territory===$("territorySelect").value){dots.aBoy.classList.add("user-watch");dots.aGirl.classList.add("user-watch")}
 if(m.b.territory===$("territorySelect").value){dots.bBoy.classList.add("user-watch");dots.bGirl.classList.add("user-watch")}

 function pointScoreDisplay(){
   let a=currentGamePoints[0],b=currentGamePoints[1];
   if(a>=4||b>=4){
     if(a===b)return{a:"40",b:"40"};
     if(a===b+1)return{a:"AD",b:""};
     if(b===a+1)return{a:"",b:"AD"};
   }
   const pts=["0","15","30","40"];
   return{a:pts[Math.min(a,3)],b:pts[Math.min(b,3)]}
 }
 function statusText(){
   if(setIndex>=sets.length)return"FINAL";
   return `Set ${setIndex+1} · Game ${gameIndex+1}`;
 }
 function renderScore(){
   $("tennisScorebug").innerHTML=tennisScorebugHTML(m,sets,setIndex,gameScore,pointScoreDisplay(),statusText());
   $("tennisMatchText").textContent=setIndex>=sets.length?`Official final: ${m.score}`:"In progress";
 }
 function gameOver(){
   let a=currentGamePoints[0],b=currentGamePoints[1];
   return (a>=4||b>=4)&&Math.abs(a-b)>=2
 }
 function finishGame(){
   let winner=setGameWinners[setIndex][gameIndex];
   if(winner==="a")gameScore[0]++;else gameScore[1]++;
   currentGamePoints=[0,0];pointIndex=0;gameIndex++;globalGame++;
   if(gameIndex>=setGameWinners[setIndex].length){
     setIndex++;gameIndex=0;gameScore=[0,0];
     if(setIndex>=sets.length){
       renderScore();
       $("tennisPointBanner").textContent=`FINAL · ${teamLinkHTML(m.winner.territory)} wins ${m.score}`;
       $("tennisPointBanner").style.opacity=1;
       $("tennisRallyText").textContent=`Match complete — ${m.score}`;
       showWatchContinue();return
     }
   }
   pointPlan=tennisPointsForGame(setGameWinners[setIndex][gameIndex]);
   renderScore();preparePoint()
 }
 function preparePoint(){
   let server=tennisServerForGame(globalGame);
   let pos=tennisPlayerPositions(server,pointIndex);
   tennisMovePlayers(dots,pos);
   let serverAth=server.team==="a"?m.a[server.partner]:m.b[server.partner];
   $("tennisServerText").innerHTML=`Serving: ${playerLinkHTML(serverAth)} · ${territoryCode(serverAth.territory)}`;
   $("tennisRallyText").textContent=`${pointScoreDisplay().a}–${pointScoreDisplay().b}`;
   let key=server.team+(server.partner==="boy"?"Boy":"Girl"),d=dots[key];
   $("tennisBall").style.left=(parseFloat(d.style.left||50)+2)+"%";
   $("tennisBall").style.top=(parseFloat(d.style.top||50)+3)+"%";
   setWatchButton("Play Next Point",playPoint)
 }
 function playPoint(){
   if(rallyRunning)return;rallyRunning=true;clearWatchButtons();
   let winner=pointPlan[pointIndex]||setGameWinners[setIndex][gameIndex];
   let server=tennisServerForGame(globalGame);
   let hits=tennisRallyPlan(server,winner,m),shot=0;
   let ball=$("tennisBall"),banner=$("tennisPointBanner");
   banner.style.opacity=0;
   $("tennisRallyText").textContent=`Rally: ${hits.length} shots`;
   function nextShot(){
     if(shot>=hits.length){
       if(winner==="a")currentGamePoints[0]++;else currentGamePoints[1]++;
       pointIndex++;
       let pointTeam=winner==="a"?m.a:m.b;
       banner.textContent=`POINT ${territoryCode(pointTeam.territory)}`;
       banner.style.opacity=1;
       renderScore();
       watchTimer(()=>{
         banner.style.opacity=0;rallyRunning=false;
         if(gameOver())finishGame();else preparePoint()
       },500);
       return
     }
     let key=hits[shot],target=tennisBallTargetForPlayer(key,shot),dot=dots[key];
     Object.values(dots).forEach(x=>x.classList.remove("hitter"));
     dot.classList.add("hitter");
     // All four react toward the ball side.
     let serverNow=tennisServerForGame(globalGame),pos=tennisPlayerPositions(serverNow,pointIndex+shot);
     let drift=target.left<50?-5:5;
     Object.keys(pos).forEach(k=>pos[k].left=clamp(pos[k].left+drift*(k.startsWith(key[0])?0.55:0.3),10,90));
     tennisMovePlayers(dots,pos);
     ball.style.left=target.left+"%";ball.style.top=target.top+"%";
     shot++;watchTimer(nextShot,190)
   }
   nextShot()
 }
 renderScore();preparePoint()
}

function buildWrestleSequence(m){
 if(m?.log?.length)return m.log.map(x=>({...x}));
 return[{a:m.score?.a||0,b:m.score?.b||0,label:m.method,period:3,remaining:0,clock:"7:00",position:"neutral",rideA:0,rideB:0,final:true}];
}
function interactiveWrestling(p){
 let m=p.match;if(!m){finishWatch();return}
 let seq=buildWrestleSequence(m),i=0;
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} Wrestling`,`${m.stage||""} · ${m.division==="light"?"Light":"Heavy"} bracket`);
 let stage=$("watchStage");
 stage.innerHTML=`
   <div class="folk-scoreboard">
     <div class="folk-wrestler folk-left">${playerLinkHTML(m.a)}<small>${territoryCode(m.a.territory)}</small></div>
     <div class="folk-score"><span id="wsa">0</span><b>–</b><span id="wsb">0</span></div>
     <div class="folk-wrestler folk-right">${playerLinkHTML(m.b)}<small>${territoryCode(m.b.territory)}</small></div>
   </div>
   <div class="folk-match-info">
     <span id="wPeriod">Period 1</span><strong id="wClock">3:00</strong><span id="wPosition">Neutral</span>
   </div>
   <div class="folk-ride-row">
     <span>Riding A: <strong id="wRideA">0:00</strong></span>
     <span id="wAction">Opening whistle</span>
     <span>Riding B: <strong id="wRideB">0:00</strong></span>
   </div>
   <div class="watch-mat folk-mat">
     <div class="mat-outer-ring"></div><div class="mat-center"></div>
     <div class="wrestler-dot left" style="left:27%">${initials(m.a)}</div>
     <div class="wrestler-dot right" style="left:66%">${initials(m.b)}</div>
   </div>
   <div class="folk-event-log" id="folkEventLog"></div>`;

 function rideFmt(sec){let n=Math.max(0,Math.round(sec||0));return`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}
 function periodName(p){return typeof p==="number"?`Period ${p}`:p}
 function placeDots(x){
   let A=stage.querySelector(".wrestler-dot.left"),B=stage.querySelector(".wrestler-dot.right");
   A.classList.remove("top-pos","bottom-pos");B.classList.remove("top-pos","bottom-pos");
   if(x.position==="neutral"){
     A.style.left="30%";A.style.top="45%";B.style.left="63%";B.style.top="45%";
   }else if(x.position==="topA"){
     A.style.left="47%";A.style.top="37%";B.style.left="52%";B.style.top="55%";
     A.classList.add("top-pos");B.classList.add("bottom-pos");
   }else{
     A.style.left="45%";A.style.top="55%";B.style.left="50%";B.style.top="37%";
     B.classList.add("top-pos");A.classList.add("bottom-pos");
   }
 }
 function draw(){
   if(i>=seq.length){
     $("wsa").textContent=m.score?.a??0;$("wsb").textContent=m.score?.b??0;
     $("wAction").textContent=m.method;
     showWatchContinue();return;
   }
   let x=seq[i];
   $("wsa").textContent=x.a;$("wsb").textContent=x.b;
   $("wPeriod").textContent=periodName(x.period);
   $("wClock").textContent=typeof x.period==="number"?
     `${Math.floor((x.remaining||0)/60)}:${String((x.remaining||0)%60).padStart(2,"0")}`:
     `${Math.floor((x.remaining||0)/60)}:${String((x.remaining||0)%60).padStart(2,"0")}`;
   $("wPosition").textContent=folkPositionLabel(x.position||"neutral");
   $("wRideA").textContent=rideFmt(x.rideA);$("wRideB").textContent=rideFmt(x.rideB);
   let lead=x.a===x.b?"Tied":x.a>x.b?`${territoryCode(m.a.territory)} leads`:`${territoryCode(m.b.territory)} leads`;
   $("wAction").textContent=x.final?m.method:`${x.label} · ${lead}`;
   placeDots(x);

   let logBox=$("folkEventLog"),row=document.createElement("div");
   row.className="folk-log-row"+(x.points?" scoring":"");
   row.innerHTML=`<span>${periodName(x.period)} · ${typeof x.remaining==="number"?`${Math.floor(x.remaining/60)}:${String(x.remaining%60).padStart(2,"0")}`:""}</span><strong>${x.label}</strong><span>${x.a}-${x.b}</span>`;
   logBox.prepend(row);
   while(logBox.children.length>6)logBox.lastElementChild.remove();

   i++;
   setWatchButton(i>=seq.length?"Show Final Result":"Next Exchange",draw);
 }
 $("wAction").textContent="Neutral · Match not started";
 setWatchButton("Start Match",draw);
}

function postedFieldBox(rows,userT,valueFn,title){
 let others=rows.filter(x=>x.a.territory!==userT),box=document.createElement("div");box.className="field-posted";box.innerHTML=`<strong>${title}</strong><div class="small">The rest of the field has already posted its mark. Your result is still hidden.</div>`;
 watchUserRows(others,15).forEach((x,i)=>{let r=document.createElement("div");r.className="watch-live-rank";r.innerHTML=`<span>${i+1}</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${valueFn(x)}</strong>`;box.appendChild(r)});return box
}
function teamAttemptPattern(score){
 // Reconstruct a 15-attempt sequence that lands on the engine's exact official score.
 let bonus=Math.abs(score-Math.round(score))>.1,bonusValue=bonus?2.5:0;
 let regularMakes=clamp(Math.round(score-bonusValue),0,15);
 let arr=Array(15).fill(false),ids=[...Array(15).keys()];
 for(let i=ids.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]]}
 ids.slice(0,regularMakes).forEach(i=>arr[i]=true);
 return{arr,bonus,bonusValue};
}
function sportScene(stage,a){
 let code=initials(a);
 if(stage==="Basketball")return`
   <div class="team-sport-scene ts-basketball">
     <div class="ts-three-line"></div><div class="ts-board"></div><div class="ts-basket"></div>
     <div class="ts-athlete ${a.territory===$("territorySelect").value?"user-watch":""}">${code}</div>
     <div class="ts-ball basketball" id="tsBall" style="left:14%;bottom:24%"></div>
   </div>`;
 if(stage==="Football")return`
   <div class="team-sport-scene ts-football">
     <div class="ts-athlete ${a.territory===$("territorySelect").value?"user-watch":""}">${code}</div>
     <div class="ts-target ts-football-target" style="right:34%;top:12%">20 YD</div>
     <div class="ts-target ts-football-target" style="right:17%;top:38%">35 YD</div>
     <div class="ts-target ts-football-target" style="right:4%;top:9%">50 YD</div>
     <div class="ts-ball football" id="tsBall" style="left:14%;bottom:23%"></div>
   </div>`;
 if(stage==="Baseball/Softball")return`
   <div class="team-sport-scene ts-baseball">
     <div class="ts-hr-fence"></div><div class="ts-hr-arc"></div><div class="ts-homeplate"></div>
     <div class="ts-athlete ${a.territory===$("territorySelect").value?"user-watch":""}" style="left:11%;bottom:24%">${code}</div>
     <div class="ts-ball baseball" id="tsBall" style="left:18%;bottom:28%"></div>
   </div>`;
 if(stage==="Hockey")return`
   <div class="team-sport-scene ts-hockey">
     <div class="ts-rink-lines"></div><div class="ts-hockey-goal"></div>
     <div class="ts-target ts-goal-target" style="right:8%;bottom:45%"></div>
     <div class="ts-target ts-goal-target" style="right:4%;bottom:28%"></div>
     <div class="ts-target ts-goal-target" style="right:11%;bottom:28%"></div>
     <div class="ts-athlete ${a.territory===$("territorySelect").value?"user-watch":""}" style="left:23%;bottom:34%">${code}</div>
     <div class="ts-ball puck" id="tsBall" style="left:29%;bottom:31%"></div>
   </div>`;
 if(stage==="Soccer")return`
   <div class="team-sport-scene ts-soccer">
     <div class="ts-penalty-spot"></div><div class="ts-soccer-goal"></div>
     <div class="ts-athlete ${a.territory===$("territorySelect").value?"user-watch":""}" style="left:10%;bottom:19%">${code}</div>
     <div class="ts-ball soccer" id="tsBall" style="left:17%;bottom:22%"></div>
   </div>`;
 if(stage==="Volleyball")return`
   <div class="team-sport-scene ts-volleyball">
     <div class="ts-volley-net"></div><div class="ts-volley-target">TARGET<br>ZONE</div>
     <div class="ts-athlete ${a.territory===$("territorySelect").value?"user-watch":""}" style="left:8%;bottom:18%">${code}</div>
     <div class="ts-ball volleyball" id="tsBall" style="left:13%;bottom:31%"></div>
   </div>`;
 return`
   <div class="team-sport-scene ts-lacrosse">
     <div class="ts-lax-crease"></div><div class="ts-lax-goal"></div>
     <div class="ts-target ts-goal-target" style="right:8%;bottom:45%"></div>
     <div class="ts-target ts-goal-target" style="right:4%;bottom:29%"></div>
     <div class="ts-target ts-goal-target" style="right:11%;bottom:29%"></div>
     <div class="ts-athlete ${a.territory===$("territorySelect").value?"user-watch":""}" style="left:22%;bottom:31%">${code}</div>
     <div class="ts-ball lacrosse" id="tsBall" style="left:28%;bottom:36%"></div>
   </div>`;
}
function resetTeamBall(obj,stage){
 obj.style.transition="none";obj.style.opacity="1";obj.style.transform="";
 if(stage==="Basketball"){obj.style.left="14%";obj.style.bottom="24%";obj.style.top="auto"}
 else if(stage==="Football"){obj.style.left="14%";obj.style.bottom="23%";obj.style.top="auto";obj.style.transform="rotate(-25deg)"}
 else if(stage==="Baseball/Softball"){obj.style.left="18%";obj.style.bottom="28%";obj.style.top="auto"}
 else if(stage==="Hockey"){obj.style.left="29%";obj.style.bottom="31%";obj.style.top="auto"}
 else if(stage==="Soccer"){obj.style.left="17%";obj.style.bottom="22%";obj.style.top="auto"}
 else if(stage==="Volleyball"){obj.style.left="13%";obj.style.bottom="31%";obj.style.top="auto"}
 else{obj.style.left="28%";obj.style.bottom="36%";obj.style.top="auto"}
 void obj.offsetWidth;obj.style.transition="left .55s ease,bottom .55s ease,top .55s ease,transform .55s ease,opacity .2s";
}
function animateTeamBall(obj,stage,made,attempt){
 resetTeamBall(obj,stage);
 if(stage==="Basketball"){
   watchTimer(()=>{obj.style.left=made?"85%":"78%";obj.style.bottom=made?"67%":"48%";obj.style.transform="rotate(540deg)"},35);
 }else if(stage==="Football"){
   let targets=[{left:"60%",bottom:"69%"},{left:"76%",bottom:"45%"},{left:"91%",bottom:"72%"}],t=targets[attempt%3];
   watchTimer(()=>{obj.style.left=made?t.left:(attempt%2?"68%":"82%");obj.style.bottom=made?t.bottom:(attempt%2?"24%":"82%");obj.style.transform="rotate(700deg)"},35);
 }else if(stage==="Baseball/Softball"){
   watchTimer(()=>{obj.style.left=made?"91%":"67%";obj.style.bottom=made?"76%":"35%";obj.style.transform="translateY(-80px)"},35);
   watchTimer(()=>{obj.style.bottom=made?"34%":"26%"},350);
 }else if(stage==="Hockey"){
   let spots=[["91%","55%"],["94%","36%"],["87%","36%"]],q=spots[attempt%3];
   watchTimer(()=>{obj.style.left=made?q[0]:"79%";obj.style.bottom=made?q[1]:"20%"},35);
 }else if(stage==="Soccer"){
   let spots=[["89%","54%"],["94%","31%"],["84%","32%"],["90%","40%"]],q=spots[attempt%4];
   watchTimer(()=>{obj.style.left=made?q[0]:(attempt%2?"78%":"96%");obj.style.bottom=made?q[1]:(attempt%2?"17%":"65%")},35);
 }else if(stage==="Volleyball"){
   watchTimer(()=>{obj.style.left=made?"84%":"71%";obj.style.bottom=made?"42%":"68%";obj.style.transform="translateY(-90px) rotate(480deg)"},35);
   watchTimer(()=>{obj.style.bottom=made?"22%":"14%"},360);
 }else{
   let spots=[["91%","55%"],["94%","37%"],["87%","37%"]],q=spots[attempt%3];
   watchTimer(()=>{obj.style.left=made?q[0]:"78%";obj.style.bottom=made?q[1]:"22%"},35);
 }
}
function teamSportAttemptLabel(stage){
 if(stage==="Basketball")return"3-Point Shot";
 if(stage==="Football")return"Target Throw";
 if(stage==="Baseball/Softball")return"Home Run Swing";
 if(stage==="Hockey")return"Slot Accuracy Shot";
 if(stage==="Soccer")return"Penalty Kick";
 if(stage==="Volleyball")return"Target Serve";
 return"Lacrosse Slot Shot";
}
function interactiveTeamSport(p){
 let rows=p.rows||[],u=$("territorySelect").value,user=rows.find(x=>x.a.territory===u)||rows[0];
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} Team Sports Day`,`${p.stage} · ${teamSportAttemptLabel(p.stage)} challenge`);
 let stage=$("watchStage");stage.innerHTML="";
 stage.insertAdjacentHTML("beforeend",`
   <div class="strength-scorebar">
     <span>${p.stage}</span>
     <span id="tsFieldStatus" class="small">All 64 athletes · 0/15 attempts</span>
   </div>
   <div id="tsLiveStandings" class="strength-live-table"></div>`);
 stage.insertAdjacentHTML("beforeend",sportScene(p.stage,user.a));
 stage.insertAdjacentHTML("beforeend",`<div class="target-score" id="attemptScore">0 pts</div><div class="obs-status" id="tsAttemptText">Ready</div>`);

 let patterns=new Map(rows.map(x=>[x.a.territory,teamAttemptPattern(x.score)]));
 let liveScores=new Map(rows.map(x=>[x.a.territory,0]));
 let i=0,obj=$("tsBall");

 function liveRows(){
   return rows.map(x=>({a:x.a,score:liveScores.get(x.a.territory)||0,final:x.score}))
     .sort((a,b)=>b.score-a.score||a.a.territory.localeCompare(b.a.territory));
 }
 function renderLiveTable(final=false){
   let ordered=liveRows(),box=$("tsLiveStandings");
   box.innerHTML=`<strong>${final?"FINAL STANDINGS":i===0?"STARTING STANDINGS":`LIVE STANDINGS AFTER ATTEMPT ${i}`}</strong>`;
   let shown=watchUserRows(ordered,15);
   shown.forEach(x=>{
     let rank=ordered.findIndex(q=>q.a.territory===x.a.territory)+1;
     let row=document.createElement("div");row.className="strength-live-row"+(x.a.territory===u?" user-watch":"");
     row.innerHTML=`<span>${i===0?"—":rank}</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${x.score} pts</strong>`;
     box.appendChild(row);
   });
 }
 function takeAttempt(){
   if(i>=15){
     renderLiveTable(true);
     let official=[...rows].sort((a,b)=>b.score-a.score);
     stage.appendChild(resultBoard(official,x=>`${x.score} pts`));showWatchContinue();return;
   }

   let shotIndex=i;
   rows.forEach(x=>{
     let pat=patterns.get(x.a.territory),cur=liveScores.get(x.a.territory)||0;
     if(pat.arr[shotIndex])cur+=1;
     if(shotIndex===14&&pat.bonus)cur+=pat.bonusValue;
     liveScores.set(x.a.territory,cur);
   });

   let userPat=patterns.get(user.a.territory),made=userPat.arr[shotIndex];
   animateTeamBall(obj,p.stage,made,shotIndex);

   i++;
   renderLiveTable(false);
   let ordered=liveRows(),userPlace=ordered.findIndex(x=>x.a.territory===u)+1,userScore=liveScores.get(u)||0;
   let targetText=p.stage==="Football"?` · Target ${["20 yd","35 yd","50 yd"][shotIndex%3]}`:"";
   let bonus=shotIndex===14&&userPat.bonus?` · BONUS +${userPat.bonusValue}`:"";
   $("attemptScore").textContent=`${userScore} pts · CURRENT PLACE ${userPlace}/${rows.length}`;
   $("tsAttemptText").textContent=`${teamSportAttemptLabel(p.stage)} ${i}/15${targetText} — ${made?"GOOD":"MISS"}${bonus}`;
   $("tsFieldStatus").textContent=`All 64 athletes · ${i}/15 attempts · ${territoryCode(ordered[0].a.territory)} leads with ${ordered[0].score} pts`;

   setWatchButton(i>=15?"Show Final Results":`Next ${teamSportAttemptLabel(p.stage)}`,takeAttempt);
 }

 renderLiveTable(false);
 $("attemptScore").textContent="0 pts";
 $("tsAttemptText").textContent="Ready · nobody has attempted a shot yet";
 setWatchButton(`Start ${teamSportAttemptLabel(p.stage)}`,takeAttempt);
}
function shotPutMarks(best){
 let a=Math.max(3,best-(.45+Math.random()*1.35)),b=Math.max(3,best-(.12+Math.random()*.75)),arr=[a,b,best];
 return shuf(arr);
}
function tireFlipSplits(finalTime,a){
 let raw=[];
 for(let i=0;i<6;i++){
   let fatigue=1+i*((74-a.attrs.Endurance)/900+(72-a.attrs.Toughness)/1200);
   raw.push(Math.max(.55,1+gauss()*.08)*fatigue);
 }
 let sum=raw.reduce((x,y)=>x+y,0),cum=0;
 return raw.map((x,i)=>{cum+=finalTime*x/sum;return i===5?finalTime:cum});
}
function strengthLiveRows(rows,valueFn,sortFn,title){
 let box=document.createElement("div");box.className="strength-live-table";box.innerHTML=`<strong>${title}</strong>`;
 [...rows].sort(sortFn).forEach((x,i)=>{
   let r=document.createElement("div");r.className="strength-live-row"+(x.a.territory===$("territorySelect").value?" user-watch":"");
   r.innerHTML=`<span>${i+1}</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${valueFn(x)}</strong>`;box.appendChild(r)
 });return box
}
function interactiveStrength(p){
 let rows=p.rows||[],u=$("territorySelect").value,user=rows.find(x=>x.a.territory===u)||rows[0],stageName=p.stage,stage=$("watchStage");
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} Strength Gauntlet`,stageName);
 stage.innerHTML=`<div class="strength-watch-wrap"><div class="strength-scorebar"><span>${stageName}</span><span id="strengthStatus" class="small">Competition not started</span></div><div id="strengthBody"></div></div>`;
 let body=$("strengthBody");

 if(stageName==="Shot Put"){
   let attempt=0,userMarks=shotPutMarks(user.value);
   let allMarks=new Map(rows.map(x=>[x.a.territory,x.a.territory===u?userMarks:shotPutMarks(x.value)]));
   let liveBest=new Map(rows.map(x=>[x.a.territory,0]));

   body.insertAdjacentHTML("beforeend",`
    <div id="shotLiveBoard" class="strength-live-table"></div>
    <div class="strength-venue shot-field">
      <div class="shot-circle"></div><div class="shot-stopboard"></div><div class="shot-sector-real"></div>
      <div class="shot-sector-line one"></div><div class="shot-sector-line two"></div>
      <span class="shot-tick" style="left:42%">8m</span><span class="shot-tick" style="left:58%">12m</span><span class="shot-tick" style="left:75%">16m</span>
      <div class="shot-ball-live" id="shotBall"></div><div id="shotPins"></div>
    </div>
    <div class="shot-attempts" id="shotAttempts">
      <div class="shot-attempt">Throw 1<br><strong>—</strong></div>
      <div class="shot-attempt">Throw 2<br><strong>—</strong></div>
      <div class="shot-attempt">Throw 3<br><strong>—</strong></div>
    </div>`);

   function shotOrder(){
     return rows.map(x=>({a:x.a,value:liveBest.get(x.a.territory)||0,final:x.value}))
       .sort((a,b)=>b.value-a.value||a.a.territory.localeCompare(b.a.territory));
   }
   function renderShotBoard(final=false){
     let ordered=shotOrder(),box=$("shotLiveBoard");
     box.innerHTML=`<strong>${final?"FINAL BEST MARKS":attempt===0?"BEFORE THROW 1":`BEST MARKS AFTER ROUND ${attempt}`}</strong>`;
     watchUserRows(ordered,15).forEach(x=>{
       let rank=ordered.findIndex(q=>q.a.territory===x.a.territory)+1;
       box.insertAdjacentHTML("beforeend",`<div class="strength-live-row ${x.a.territory===u?"user-watch":""}">
         <span>${attempt===0?"—":rank}</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${attempt===0?"—":`${x.value.toFixed(2)}m`}</strong>
       </div>`);
     });
   }
   function throwNext(){
     if(attempt>=3){
       renderShotBoard(true);
       $("strengthStatus").textContent=`Complete · Best ${user.value.toFixed(2)}m`;
       body.appendChild(resultBoard([...rows].sort((a,b)=>b.value-a.value),x=>`${x.value.toFixed(2)}m`));
       showWatchContinue();return;
     }
     let round=attempt;
     rows.forEach(x=>{
       let val=allMarks.get(x.a.territory)[round];
       liveBest.set(x.a.territory,Math.max(liveBest.get(x.a.territory)||0,val));
     });

     let val=userMarks[round],ball=$("shotBall"),pct=30+Math.min(60,(val/18)*60);
     ball.style.left=pct+"%";ball.style.bottom=(45+Math.random()*25)+"%";
     watchTimer(()=>ball.style.bottom="21%",360);
     let pin=document.createElement("div");pin.className="shot-mark-pin";pin.style.left=pct+"%";pin.style.top=(79-Math.random()*10)+"%";$("shotPins").appendChild(pin);
     let cards=$("shotAttempts").children;cards[round].classList.add("active");cards[round].querySelector("strong").textContent=`${val.toFixed(2)}m`;

     attempt++;
     renderShotBoard(false);
     let ordered=shotOrder(),place=ordered.findIndex(x=>x.a.territory===u)+1,best=liveBest.get(u);
     $("strengthStatus").textContent=`Round ${attempt}/3 · Your best ${best.toFixed(2)}m · Current place ${place}/${rows.length}`;
     setWatchButton(attempt>=3?"Show Shot Put Results":`Take Throw ${attempt+1}`,()=>{
       ball.style.transition="none";ball.style.left="17%";ball.style.bottom="31%";void ball.offsetWidth;
       ball.style.transition="left .55s ease,bottom .38s ease";throwNext()
     });
   }
   renderShotBoard(false);
   $("strengthStatus").textContent="Ready · no throws recorded";
   setWatchButton("Take Throw 1",throwNext);
   return
 }

 if(stageName==="Bench Press"){
   let rep=0,maxRep=Math.max(...rows.map(x=>x.value)),userFailed=false;
   body.innerHTML=`
    <div class="strength-venue bench-stage-real">
      <div class="bench-rep-number" id="benchRepBig">0</div>
      <div class="bench-upright left"></div><div class="bench-upright right"></div>
      <div class="bench-pad"></div><div class="bench-rack"></div><div class="bench-bar-live" id="benchBar"></div>
    </div>
    <div class="bench-survivors">
      <div class="bench-board"><h4>Still Alive</h4><div id="benchAlive"></div></div>
      <div class="bench-board"><h4>Failed</h4><div id="benchFailed"></div></div>
    </div>`;
   function renderBenchBoards(){
     let alive=rows.filter(x=>x.value>=rep).sort((a,b)=>a.a.territory.localeCompare(b.a.territory)),
         failed=rows.filter(x=>x.value<rep).sort((a,b)=>b.value-a.value||a.a.territory.localeCompare(b.a.territory));
     $("benchAlive").innerHTML=alive.map((x,i)=>`<div class="bench-athlete-row ${x.a.territory===u?"user-watch":""}"><span>${i+1}</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${rep===0?"Ready":`${rep} reps`}</strong></div>`).join("");
     $("benchFailed").innerHTML=failed.map(x=>`<div class="bench-athlete-row failed ${x.a.territory===u?"user-watch":""}"><span>×</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${x.value} reps</strong></div>`).join("");
     return alive
   }
   function nextRep(){
     if(rep>maxRep){
       let winners=rows.filter(x=>x.value===maxRep);
       $("strengthStatus").textContent=`Complete · Winner${winners.length>1?"s":""}: ${winners.map(x=>territoryCode(x.a.territory)).join(", ")} · ${maxRep} reps`;
       body.appendChild(resultBoard(rows,x=>`${x.value} reps`));showWatchContinue();return
     }
     rep++;
     $("benchRepBig").textContent=rep;
     let bar=$("benchBar");bar.style.bottom="61%";watchTimer(()=>bar.style.bottom="48%",180);
     let alive=renderBenchBoards();
     if(user.value<rep)userFailed=true;
     let newlyFailed=rows.filter(x=>x.value===rep-1);
     $("strengthStatus").textContent=`Rep ${rep} · ${alive.length} still alive${newlyFailed.length?` · ${newlyFailed.length} failed this rep`:""}${userFailed?" · Your athlete is out":""}`;
     setWatchButton(rep>=maxRep?"Resolve Winner":`Attempt Rep ${rep+1}`,nextRep)
   }
   renderBenchBoards();$("strengthStatus").textContent=`Ready · ${rows.length} athletes · competition continues until a winner remains`;setWatchButton("Attempt Rep 1",nextRep);
   return
 }

 // Tire Flip: every athlete has cumulative time after each of 6 flips.
 let splitMap=new Map(rows.map(x=>[x.a.territory,tireFlipSplits(x.value,x.a)])),flip=0;
 body.innerHTML=`<div class="tire-race"><div id="tireLanes"></div></div><div id="tireLiveBoard"></div>`;
 let laneBox=$("tireLanes");
 let laneOrder=suspenseOrder(rows);
 laneOrder.forEach(x=>{
   let lane=document.createElement("div");lane.className="tire-lane"+(x.a.territory===u?" user-watch":"");
   lane.innerHTML=`<div>${playerLinkHTML(x.a)}<br><span class="small">${territoryCode(x.a.territory)}</span></div><div class="tire-track"><div class="tire-icon"></div></div><div class="tire-time">0.00s</div>`;
   laneBox.appendChild(lane)
 });
 function drawTire(){
   if(flip===0){
     $("strengthStatus").textContent="Ready · 0/6 flips · all athletes at the start";
     $("tireLiveBoard").innerHTML="";
     setWatchButton("Flip 1",()=>{flip=1;drawTire()});return
   }
   let live=rows.map(x=>({a:x.a,time:splitMap.get(x.a.territory)[flip-1]})).sort((a,b)=>a.time-b.time),rankMap=new Map(live.map((x,i)=>[x.a.territory,i+1]));
   [...laneBox.children].forEach((lane,i)=>{
     let x=laneOrder[i],icon=lane.querySelector(".tire-icon"),time=splitMap.get(x.a.territory)[flip-1],pct=2+(flip/6)*91;
     icon.style.left=pct+"%";icon.style.transform=`translateY(-50%) rotate(${flip*180}deg)`;
     let badge=icon.querySelector(".tire-rank-badge");if(!badge){badge=document.createElement("span");badge.className="tire-rank-badge";icon.appendChild(badge)}
     badge.textContent=rankMap.get(x.a.territory);lane.querySelector(".tire-time").textContent=`${time.toFixed(2)}s`
   });
   $("tireLiveBoard").innerHTML="";
   $("tireLiveBoard").appendChild(strengthLiveRows(live,x=>`${x.time.toFixed(2)}s`,(a,b)=>a.time-b.time,`ORDER AFTER FLIP ${flip}`));
   $("strengthStatus").textContent=`Flip ${flip}/6 · Leader: ${territoryCode(live[0].a.territory)} ${live[0].time.toFixed(2)}s`;
   if(flip>=6){showWatchContinue()}else setWatchButton(`Flip ${flip+1}`,()=>{flip++;drawTire()})
 }
 drawTire()
}
function arrowScores(total){
 let vals=Array(10).fill(1),left=Math.max(0,total-10);
 while(left>0){let i=Math.floor(Math.random()*10),add=Math.min(left,10-vals[i]);vals[i]+=add;left-=add}
 for(let i=vals.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[vals[i],vals[j]]=[vals[j],vals[i]]}return vals
}
function interactiveArchery(p){
 let rows=p.rows||[],u=$("territorySelect").value,user=rows.find(x=>x.a.territory===u)||rows[0],i=0;
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} Archery`,p.stage);
 let stage=$("watchStage");stage.innerHTML=`
   <div class="strength-scorebar">
     <span>${p.stage}</span><span id="archFieldStatus" class="small">All athletes · 0/10 arrows</span>
   </div>
   <div id="archLiveStandings" class="strength-live-table"></div>
   <div class="watch-target-wrap">
     <div class="watch-target" id="liveTarget"></div>
     <div><h3>${playerLinkHTML(user.a)} · ${teamLinkHTML(user.a.territory)}</h3>
       <div class="target-score" id="archScore">0 pts · 0/10 arrows</div>
       <div id="arrowList"></div>
     </div>
   </div>`;

 let patterns=new Map(rows.map(x=>[x.a.territory,arrowScores(x.score)]));
 let liveScores=new Map(rows.map(x=>[x.a.territory,0]));

 function ordered(){
   return rows.map(x=>({a:x.a,score:liveScores.get(x.a.territory)||0,final:x.score}))
     .sort((a,b)=>b.score-a.score||a.a.territory.localeCompare(b.a.territory));
 }
 function renderStandings(final=false){
   let all=ordered(),box=$("archLiveStandings");
   box.innerHTML=`<strong>${final?"FINAL STANDINGS":i===0?"STARTING STANDINGS":`LIVE STANDINGS AFTER ARROW ${i}`}</strong>`;
   watchUserRows(all,15).forEach(x=>{
     let rank=all.findIndex(q=>q.a.territory===x.a.territory)+1;
     box.insertAdjacentHTML("beforeend",`<div class="strength-live-row ${x.a.territory===u?"user-watch":""}">
       <span>${i===0?"—":rank}</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${x.score} pts</strong>
     </div>`);
   });
 }
 function shoot(){
   if(i>=10){
     renderStandings(true);
     stage.appendChild(resultBoard([...rows].sort((a,b)=>b.score-a.score),x=>`${x.score} pts`));
     showWatchContinue();return;
   }
   let shotIndex=i;
   rows.forEach(x=>{
     let vals=patterns.get(x.a.territory),cur=liveScores.get(x.a.territory)||0;
     liveScores.set(x.a.territory,cur+(vals[shotIndex]||0));
   });

   let v=patterns.get(user.a.territory)[shotIndex];
   let dot=document.createElement("div");dot.className="arrow-dot";
   let rad=(10-v)*3.5+Math.random()*4,ang=Math.random()*Math.PI*2;
   dot.style.left=(50+Math.cos(ang)*rad)+"%";dot.style.top=(50+Math.sin(ang)*rad)+"%";dot.style.opacity=1;
   $("liveTarget").appendChild(dot);

   i++;
   renderStandings(false);
   let all=ordered(),place=all.findIndex(x=>x.a.territory===u)+1,total=liveScores.get(u)||0;
   $("archScore").textContent=`${total} pts after ${i}/10 arrows · CURRENT PLACE ${place}/${rows.length}`;
   $("arrowList").innerHTML+=`<span class="pill">Arrow ${i}: ${v}</span>`;
   $("archFieldStatus").textContent=`All athletes · ${i}/10 arrows · ${territoryCode(all[0].a.territory)} leads with ${all[0].score}`;
   setWatchButton(i>=10?"Show Final Score":"Shoot Next Arrow",shoot);
 }
 renderStandings(false);
 setWatchButton("Shoot Arrow 1",shoot);
}
function obstacleMarkup(name){
 let base=`<div class="obstacle-scene"><div class="obs-deck obs-start"></div><div class="obs-deck obs-end"></div><div class="obs-athlete" id="obsAth"></div>`;
 if(name==="Rolling Log")base+=`<div class="obs-log-support left"></div><div class="obs-log-support right"></div><div class="obs-log" id="obsFeature"></div>`;
 else if(name==="Long Jump")base+=`<div class="obs-jump-ramp"></div><div class="obs-jump-gap"></div><div class="obs-landing"></div>`;
 else if(name==="Rope Climb")base+=`
   <div class="obs-zip-platform zip-p1"></div><div class="obs-zip-deck zip-d1"></div>
   <div class="obs-zip-platform zip-p2"></div><div class="obs-zip-deck zip-d2"></div>
   <div class="obs-zip-platform zip-p3"></div><div class="obs-zip-deck zip-d3"></div>
   <div class="obs-zip-platform zip-p4"></div><div class="obs-zip-deck zip-d4"></div>
   <div class="obs-zip zip-cable-1"></div><div class="obs-zip zip-cable-2"></div><div class="obs-zip zip-cable-3"></div>`;
 else if(name==="ZipLine")base+=`
   <div class="obs-rope-start-tower"></div>
   <div class="obs-rope-start-deck"></div>
   <div class="obs-rope-anchor"></div>
   <div class="obs-rope"></div>
   <div class="obs-rope-end-tower"></div>
   <div class="obs-rope-end-deck"></div>
   <div class="obs-zip-handle"></div>`;
 else if(name==="Cargo Net")base+=`<div class="obs-net"></div>`;
 else if(name==="Big Balls")base+=`<div class="obs-big-balls"><span class="big-ball red"></span><span class="big-ball white"></span><span class="big-ball blue"></span></div>`;
 else if(name==="Incline / Decline Monkey Bars")base+=`
   <div class="obs-monkey-frame">
     <div class="monkey-post mp-left"></div>
     <div class="monkey-post mp-right"></div>
     <div class="monkey-post-cap mpc-left"></div>
     <div class="monkey-post-cap mpc-right"></div>
     <div class="monkey-top-rail"></div>
     <div class="monkey-side-rail monkey-side-left"></div>
     <div class="monkey-side-rail monkey-side-right"></div>
     <div class="monkey-rung-bed">
       ${Array.from({length:15},(_,j)=>`<span class="monkey-overhead-rung" style="left:${4+j*6.55}%"></span>`).join("")}
     </div>
   </div>`;
 else if(name==="Warped Wall")base+=`<div class="warped-runway"></div><div class="obs-wall"></div><div class="obs-top-platform"></div>`;
 return base+`</div><div class="obs-status" id="obsStatus">Ready</div>`
}
function interactiveObstacle(p){
 let rows=p.rows||[],u=$("territorySelect").value,user=rows.find(x=>x.a.territory===u)||rows[0],name=p.stage,phases={
  "Rolling Log":["Approach","Step onto rotating log","Balance across","Dismount"],
  "Long Jump":["Approach","Accelerate","Launch across gap","Land"],
  "Rope Climb":["Start at low platform","Climb to platform 2","Climb to platform 3","Reach high platform"],
  "ZipLine":["Step from high platform","Grab zipline","Ride down cable","Land on lower platform"],
  "Cargo Net":["Jump to net","Climb","Traverse","Dismount"],
  "Big Balls":["Approach","Cross red ball","Cross white ball","Cross blue ball"],
  "Incline / Decline Monkey Bars":["Grab first rung","Traverse overhead bars","Reach final rung","Dismount"],
  "Warped Wall":["Approach","Sprint","Run up wall","Grab top"]
 }[name]||["Approach","Attempt","Cross","Finish"],i=0;
 setWatchHeader(`${p.g==="boy"?"Boys":"Girls"} Obstacle Course`,name);let stage=$("watchStage");stage.innerHTML="";
 if(!p.hideFieldTimes)stage.appendChild(postedFieldBox(rows,u,x=>x.fell?"0:30":fmtCourseTime(x.total),`${name} — Field Times`));
 stage.insertAdjacentHTML("beforeend",obstacleMarkup(name));let a=$("obsAth");a.textContent=initials(user.a);if(user.a.territory===u)a.classList.add("user-watch");
 function draw(){
   $("obsStatus").textContent=phases[i]+` · ${i+1}/${phases.length}`;
   if(name==="Rolling Log"){
     a.style.left=(8+i*20)+"%";a.style.bottom=i===1||i===2?"38%":"35%";
     if($("obsFeature")){
       let log=$("obsFeature");
       log.style.transform="none";
       log.dataset.rollStep=String(i);
       let texShift=i*28;
       log.style.setProperty("--log-roll-shift",texShift+"px");
     }
   }else if(name==="Long Jump"){
     a.style.left=(8+i*22)+"%";a.style.bottom=i===2?"68%":"35%";a.style.transform=i===2?"rotate(-12deg)":"";
   }else if(name==="Rope Climb"){
     const ropePos=[{l:17,b:34,r:0},{l:40,b:49,r:0},{l:61,b:64,r:0},{l:81,b:82,r:0}][i];
     a.style.left=ropePos.l+"%";a.style.bottom=ropePos.b+"%";a.style.transform=`rotate(${ropePos.r}deg)`;
   }else if(name==="ZipLine"){
     const zipPos=[{l:15,b:76,r:8},{l:29,b:66,r:8},{l:49,b:54,r:8},{l:73,b:37,r:0}][i];
     a.style.left=zipPos.l+"%";a.style.bottom=zipPos.b+"%";a.style.transform=`rotate(${zipPos.r}deg)`;
     let handle=$(".obs-zip-handle");
     if(handle){handle.style.left=(zipPos.l+1)+"%";handle.style.bottom=(zipPos.b+5)+"%";}
   }else if(name==="Cargo Net"){
     a.style.left=(9+i*21)+"%";a.style.bottom=i===1? "52%":i===2?"64%":"35%";
   }else if(name==="Big Balls"){
     const ballPos=[{l:10,b:35,r:0},{l:36,b:52,r:-5},{l:53,b:52,r:4},{l:70,b:52,r:-4}][i];
     a.style.left=ballPos.l+"%";a.style.bottom=ballPos.b+"%";a.style.transform=`rotate(${ballPos.r}deg)`;
   }else if(name==="Incline / Decline Monkey Bars"){
     const monkeyPos=[{l:20,b:48,r:0},{l:39,b:61,r:-4},{l:51,b:70,r:0},{l:73,b:48,r:4}][i];
     a.style.left=monkeyPos.l+"%";a.style.bottom=monkeyPos.b+"%";a.style.transform=`rotate(${monkeyPos.r}deg)`;
   }else if(name==="Warped Wall"){
     a.style.left=i===0?"9%":i===1?"42%":i===2?"69%":"79%";
     a.style.bottom=i<2?"35%":i===2?"52%":"77%";
     a.style.transform=i===2?"rotate(-18deg)":"";
   }
   if(user.fell&&i===2&&name!=="Warped Wall"){a.style.bottom="8%";let place=1+rows.filter(x=>x.a.territory!==u&&x.total<30).length;$("obsStatus").textContent=`FALL — 0:30 · PLACE ${place}/${rows.length}`;setWatchButton(p.returnOverview?"Course Overview":"Show Results",()=>{
     if(p.returnOverview)return renderContinuousObstacleState(p.g);
     stage.appendChild(resultBoard(rows,x=>x.fell?"0:30":fmtCourseTime(x.total)));showWatchContinue()
   });return}
   if(i===phases.length-1){
     let place=1+rows.filter(x=>x.a.territory!==u&&x.total<user.total).length;
     $("obsStatus").textContent=p.hideFieldTimes?`Obstacle complete · current course place updates on overview`:`FINISH — ${user.fell?"0:30":fmtCourseTime(user.total)} · PLACE ${place}/${rows.length}`;
     if(p.returnOverview)setWatchButton("Course Overview",()=>renderContinuousObstacleState(p.g));
     else{stage.appendChild(resultBoard(rows,x=>x.fell?"0:30":fmtCourseTime(x.total)));showWatchContinue()}
   }else{ i++; setWatchButton(phases[i],draw) }
 }
 $("obsStatus").textContent="Ready · obstacle not started";
 setWatchButton(`Start ${name}`,draw)
}

function obstacleCourseProgress(e,a){
 let completed=e.stageIndex;
 if(completed===0)return 0;
 let rankRows=e.field.map(x=>({a:x,total:e.totals[x.territory]||0})).sort((x,y)=>x.total-y.total);
 let idx=rankRows.findIndex(x=>x.a.territory===a.territory);
 // Overview doubles as a visual standings ribbon: rightmost is leading.
 // Use almost the full width so 64 circles remain readable instead of piling up.
 let rankFrac=rankRows.length>1?idx/(rankRows.length-1):0;
 return .04+(1-rankFrac)*.92;
}
function obstacleCourseMapHTML(){
 return `<div class="oc-course-map" id="ocCourseMap">
   ${obstacleDefs.map((o,i)=>`<div class="oc-station" style="left:${5+i*(90/(obstacleDefs.length-1))}%"><span>${i+1}</span><small>${o.name}</small></div>`).join("")}
   <div class="oc-course-line"></div><div id="ocDots"></div>
 </div>`;
}
function renderContinuousObstacleState(g){
 let e=events.obstacle[g],u=$("territorySelect").value,stage=$("watchStage"),completed=e.stageIndex;
 $("watchTitle").textContent=`${g==="boy"?"Boys":"Girls"} Obstacle Course`;
 $("watchSubtitle").textContent=e.done?"Course Complete":completed===0?"All 64 athletes at the start":`${completed}/${obstacleDefs.length} obstacles completed`;
 stage.innerHTML=`<div class="oc-watch-layout"><div>${watchProgress(obstacleDefs.map(o=>o.name),Math.min(completed,obstacleDefs.length-1))}<div class="oc-rank-key">← trailing field <strong>LIVE COURSE STANDINGS</strong> leader →</div>${obstacleCourseMapHTML()}</div><div class="oc-live-board" id="ocLiveBoard"></div></div>`;

 let dots=$("ocDots");
 e.field.forEach((a,i)=>{
   let d=document.createElement("div"),prog=obstacleCourseProgress(e,a);
   d.className="oc-dot"+(a.territory===u?" user-watch":"");
   d.textContent=territoryCode(a.territory);
   let lane=i%4,jitter=(Math.floor(i/4)%3)*2;
   d.style.left=`calc(${prog*100}% - 12px)`;
   d.style.top=(58+lane*8+jitter)+"%";
   dots.appendChild(d);
 });

 let board=$("ocLiveBoard"),live=e.field.map(a=>({a,total:e.totals[a.territory]||0})).sort((a,b)=>a.total-b.total);
 board.innerHTML=`<h3>${completed===0?"STARTING FIELD":"LIVE CUMULATIVE TIME"}</h3><div class="small">${e.done?"Final times. Obstacle splits are now available below.":"Individual obstacle splits are hidden until the finish."}</div>`;
 if(completed===0){
   suspenseOrder(live).slice(0,15).forEach((x,i)=>board.insertAdjacentHTML("beforeend",`<div class="oc-live-row ${x.a.territory===u?"user-watch":""}"><span>—</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>0:00.0</strong></div>`));
 }else{
   let view=watchUserRows(live,15);
   view.forEach(x=>{
     let place=live.findIndex(q=>q.a.territory===x.a.territory)+1;
     board.insertAdjacentHTML("beforeend",`<div class="oc-live-row ${x.a.territory===u?"user-watch":""}"><span>${place}</span><span>${playerLinkHTML(x.a)} · ${territoryCode(x.a.territory)}</span><strong>${fmtCourseTime(x.total)}</strong></div>`);
   });
 }
 if(e.done){
   let splits=document.createElement("div");splits.className="oc-splits-final";splits.innerHTML="<h3>Obstacle Splits — Revealed at Finish</h3>";
   e.history.forEach(hh=>splits.innerHTML+=`<div class="oc-split-card"><strong>${hh.stage}</strong>${watchUserRows(hh.results,10).map(x=>`<span>${territoryCode(x.a.territory)} ${x.fell?"FALL · 0:30":fmtCourseTime(x.time)}</span>`).join("")}</div>`);
   stage.appendChild(splits);showWatchContinue();
 }else{
   let next=obstacleDefs[e.stageIndex];
   setWatchButton(completed===0?"Start":`Next`,()=>{
     let before=e.history.length;
     runObstacle(g);
     let hh=e.history[before];
     if(!hh)return renderContinuousObstacleState(g);
     interactiveObstacle({key:"obstacle",g,stage:hh.stage,rows:hh.results,returnOverview:true,hideFieldTimes:true});
   });
 }
}
function watchContinuousObstacle(g){
 let e=events.obstacle[g];if(!e||e.done){animationCapture=true;$("watchModal").classList.remove("hidden");$("watchSkipBtn").onclick=finishWatch;return renderContinuousObstacleState(g)}
 animationCapture=true;clearWatchTimers();$("watchModal").classList.remove("hidden");
 $("watchSkipBtn").textContent="Exit Replay";$("watchSkipBtn").onclick=finishWatch;
 renderContinuousObstacleState(g);
}
function injectWatchButtons(){
 const map={hundred:[["boys100Chrono","boy"],["girls100Chrono","girl"]],sandbag:[["boysSandbagChrono","boy"],["girlsSandbagChrono","girl"]],swim:[["boysSwimChrono","boy"],["girlsSwimChrono","girl"]],tennis:[["tennisChrono",null]],teamsports:[["boysTeamSportsChrono","boy"],["girlsTeamSportsChrono","girl"]],wrestling:[["boysWrestlingChrono","boy"],["girlsWrestlingChrono","girl"]],archery:[["boysArcheryChrono","boy"],["girlsArcheryChrono","girl"]],mile:[["boysMileChrono","boy"],["girlsMileChrono","girl"]],strength:[["boysStrengthChrono","boy"],["girlsStrengthChrono","girl"]],obstacle:[["boysObstacleChrono","boy"],["girlsObstacleChrono","girl"]]};
 Object.entries(map).forEach(([key,targets])=>targets.forEach(([id,g])=>{let box=$(id),run=box?.querySelector(".stage-btn");if(!run||box.querySelector(".watch-btn"))return;let b=document.createElement("button");b.className="watch-btn";b.textContent="▶ Watch";b.onclick=()=>watchAndRun(key,g);run.insertAdjacentElement("beforebegin",b)}))
}

/* RENDERERS */

function topRowsWithUser(rows,n,userT,getTerritory=x=>(x.a||x).territory){
 let top=rows.slice(0,n),idx=rows.findIndex(x=>getTerritory(x)===userT);
 if(idx>=n&&idx!==-1)return{top,user:rows[idx],userIndex:idx};
 return{top,user:null,userIndex:idx};
}
function appendRowsTopPlusUser(container,rows,n,userT,metricFn){
 let view=topRowsWithUser(rows,n,userT);
 view.top.forEach((x,i)=>container.appendChild(resultRow(x,i,userT,metricFn(x))));
 if(view.user){
   let sep=document.createElement("div");sep.className="table-user-extra";container.appendChild(sep);
   container.appendChild(resultRow(view.user,view.userIndex,userT,metricFn(view.user)));
 }
}
function appendPointsTable(box,results,userT,title="Points Awarded",points=pointMap){
 if(!results||!results.length)return;
 let card=document.createElement("div");card.className="points-table";card.innerHTML=`<h4>${title}</h4>`;
 results.slice(0,points.length).forEach((x,i)=>{
   let a=x.a||x,p=points[i]||0;if(!a||!p)return;
   let row=document.createElement("div");row.className="points-row"+(a.territory===userT?" user-highlight":"");
   row.innerHTML=`<span>${i+1}</span><span>${territoryHTML(a.territory)}</span><span>${playerLinkHTML(a)}</span><strong>${p} pts</strong>`;card.appendChild(row);
 });
 if(!results.slice(0,points.length).some(x=>(x.a||x).territory===userT)){
   let a=userAth(results[0]?.a?.gender||"boy");
   let row=document.createElement("div");row.className="points-row user-highlight table-user-extra";
   row.innerHTML=`<span>—</span><span>${territoryHTML(userT)}</span><span>${playerLinkHTML(a)}</span><strong>0 pts</strong>`;card.appendChild(row);
 }
 box.appendChild(card);
}
function appendTennisPointsTable(box,placements,userT){
 if(!placements||!placements.length)return;
 let card=document.createElement("div");card.className="points-table";card.innerHTML="<h4>Points Awarded — Both Athletes</h4>";
 placements.slice(0,8).forEach((t,i)=>{let row=document.createElement("div");row.className="points-row"+(t.territory===userT?" user-highlight":"");row.innerHTML=`<span>${i+1}</span><span>${territoryHTML(t.territory)}</span><span>${playerLinkHTML(t.boy)} / ${playerLinkHTML(t.girl)}</span><strong>${pointMap[i]} each</strong>`;card.appendChild(row)});
 if(!placements.slice(0,8).some(t=>t.territory===userT)){
   let row=document.createElement("div");row.className="points-row user-highlight table-user-extra";
   row.innerHTML=`<span>—</span><span>${territoryHTML(userT)}</span><span>${playerLinkHTML(userAth("boy"))} / ${playerLinkHTML(userAth("girl"))}</span><strong>0 each</strong>`;card.appendChild(row);
 }
 box.appendChild(card);
}
function resultRow(x,i,userT,timeText){let d=document.createElement("div");d.className="result-grid"+(x.a.territory===userT?" user-highlight":"");d.innerHTML=`<span>${i+1}</span><span>${territoryHTML(x.a.territory)}</span><span>${playerLinkHTML(x.a)}</span><span>${timeText}</span>`;return d}
function renderRaceChrono(g,container,type,targetId){
 let e=container[g],box=$(targetId);box.innerHTML="";
 if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}
 let userT=$("territorySelect").value;

 e.history.forEach(h=>{
   let c=document.createElement("div");c.className="stage-card";
   if(type==="mile"&&h.half){
     c.innerHTML=`<h4>${h.stage} — Live Standings</h4>`;
     let halfView=topRowsWithUser(h.half,15,userT,x=>x.a.territory);
     halfView.top.forEach((x,i)=>{
       let row=document.createElement("div");
       row.className="mile-split-row"+(x.a.territory===userT?" user-highlight":"");
       row.innerHTML=`<span>${i+1}</span><span>${territoryHTML(x.a.territory)}</span><span>${playerLinkHTML(x.a)}</span><span>${fmtTime(x.half)}</span><span>800m</span>`;
       c.appendChild(row);
     });
     if(halfView.user){let sep=document.createElement("div");sep.className="table-user-extra";c.appendChild(sep);let x=halfView.user,row=document.createElement("div");row.className="mile-split-row user-highlight";row.innerHTML=`<span>${halfView.userIndex+1}</span><span>${territoryHTML(x.a.territory)}</span><span>${playerLinkHTML(x.a)}</span><span>${fmtTime(x.half)}</span><span>800m</span>`;c.appendChild(row)}
     box.appendChild(c);return;
   }

   let title=type==="mile"?h.stage:(type==="100"?(h.round===0?"Round of 64":h.round===1?"Semifinals":"Final"):(h.round===0?"Round of 64":h.round===1?"Round of 32":h.round===2?"Semifinals":"Final"));
   c.innerHTML=`<h4>${title} — Results</h4>`;
   h.groups.forEach((res,gi)=>{
     if(h.groups.length>1){
       let lab=document.createElement("div");lab.className="round-label";lab.textContent=`Heat ${gi+1}`;c.appendChild(lab);
     }
     res.forEach((x,i)=>c.appendChild(resultRow(x,i,userT,type==="mile"?fmtTime(x.time):`${x.time.toFixed(2)}s`)));
   });
   box.appendChild(c);
 });

 if(!e.done){
   let c=document.createElement("div");c.className="stage-card";let label;
   if(type==="mile")label=e.stage==="heats"?"Qualifying Heats":"Final";
   else if(type==="100")label=e.round===0?"Round of 64":e.round===1?"Semifinals":"Final";
   else label=e.round===0?"Round of 64":e.round===1?"Round of 32":e.round===2?"Semifinals":"Final";
   c.innerHTML=`<div class="stage-head"><h4>${label} — Upcoming</h4><span class="small">Last Round Score</span></div>`;

   if(type==="mile"&&e.stage==="final"){
     [...e.finalists]
       .sort((a,b)=>(a.lastMile||9999)-(b.lastMile||9999))
       .forEach((a,i)=>c.appendChild(resultRow({a},i,userT,a.lastMile?fmtTime(a.lastMile):"—")));
   }else{
     e.groups.forEach((grp,gi)=>{
       let lab=document.createElement("div");lab.className="round-label";lab.textContent=`Heat ${gi+1} · Last Round`;c.appendChild(lab);
       [...grp].sort((a,b)=>a.territory.localeCompare(b.territory)).forEach((a,i)=>{
         let prior=type==="100"?(a.last100?`${a.last100.toFixed(2)}s`:"—"):type==="mile"?(a.lastMile?fmtTime(a.lastMile):"—"):(a.lastSwim?`${a.lastSwim.toFixed(2)}s`:"—");
         c.appendChild(resultRow({a},i,userT,prior));
       });
     });
   }
   let b=document.createElement("button");b.className="stage-btn";b.textContent="Next";
   b.onclick=()=>type==="100"?run100(g):type==="swim"?runSwim(g):runMile(g);
   c.appendChild(b);box.appendChild(c);
 }

 if(e.done){
   let last=e.history[e.history.length-1];
   let finalRes=last?.groups?.[0]||null;
   appendPointsTable(box,finalRes,userT);
 }
}
function renderWrestling(g,targetId){
 let e=events.wrestling[g],box=$(targetId);
 box.innerHTML="";
 if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}
 let userT=$("territorySelect").value;

 ["light","heavy"].forEach(key=>{
   let div=e.divisions[key];
   let wrap=document.createElement("div");
   wrap.className="stage-card";

   let weightText;
   if(g==="boy"){
     weightText=key==="light"?`32 lightest (up to ${div.splitMax} lb)`:`32 heaviest (from ${div.splitMin} lb)`;
   }else{
     weightText=key==="light"?`32 lightest (110–${div.splitMax} lb)`:`32 heaviest (${div.splitMin}–155 lb)`;
   }
   wrap.innerHTML=`<h4>${divisionName(g,key)} — ${weightText}</h4>`;

   div.history.forEach(h=>{
     let hbox=document.createElement("div");
     hbox.className="wrestle-preview";
     hbox.innerHTML=`<div class="round-label">${h.stage} — Results</div>`;
     h.results.forEach(m=>{
       let row=document.createElement("div");
       row.className="match-row"+((m.a?.territory===userT||m.b?.territory===userT)?" user-highlight":"");
       let aSeed=m.a?.wrestleSeed?`#${m.a.wrestleSeed} `:"";
       let bSeed=m.b?.wrestleSeed?`#${m.b.wrestleSeed} `:"";
       let left=m.a?`${aSeed}${territoryHTML(m.a.territory)} — ${playerLinkHTML(m.a)}`:"";
       let right=m.b?`${bSeed}${territoryHTML(m.b.territory)} — ${playerLinkHTML(m.b)}`:"BYE";
       let middle=m.label?`${m.label}: ${m.method}`:m.method;
       row.innerHTML=`<span class="${m.winner===m.a?"winner":""}">${left}</span><span class="wrestle-scoreline">${middle}</span><span class="${m.winner===m.b?"winner":""}">${right}</span>`;
       hbox.appendChild(row);
     });
     wrap.appendChild(hbox);
   });

   if(div.done){
     let fin=document.createElement("div");
     fin.className="wrestle-preview";
     fin.innerHTML='<div class="round-label">Final Placements / Points</div>';
     const pts=[10,8,5,2];
     div.placements.forEach((a,i)=>{
       let row=document.createElement("div");
       row.className="result-grid"+(a.territory===userT?" user-highlight":"");
       row.innerHTML=`<span>${i+1}</span><span>${territoryHTML(a.territory)}</span><span>${playerLinkHTML(a)}</span><span>${pts[i]} pts</span>`;
       fin.appendChild(row);
     });
     wrap.appendChild(fin);
   }else{
     let prev=document.createElement("div");
     prev.className="wrestle-preview";
     let label={
       R32:"Round of 32",
       R16:"Round of 16",
       QF:"Quarterfinals",
       SF:"Semifinals",
       
       WBSF:"Consolation Semifinals",
       PLACEMENT:"Placement Matches"
     }[div.stage]||div.stage;
     prev.innerHTML=`<div class="round-label">${label} — Upcoming Matchups</div>`;

     div.preview.forEach((m,i)=>{
       let row=document.createElement("div");
       row.className="match-row"+((m.a?.territory===userT||m.b?.territory===userT)?" user-highlight":"");
       let aSeed=m.a?.wrestleSeed?`#${m.a.wrestleSeed} `:"";
       let bSeed=m.b?.wrestleSeed?`#${m.b.wrestleSeed} `:"";
       let left=m.a?`${aSeed}${territoryHTML(m.a.territory)} — ${playerLinkHTML(m.a)}`:"";
       let right=m.b?`${bSeed}${territoryHTML(m.b.territory)} — ${playerLinkHTML(m.b)}`:"BYE";
       let mid=m.label||"vs";
       row.innerHTML=`<span>${left}</span><span class="wrestle-scoreline">${mid}</span><span>${right}</span>`;
       prev.appendChild(row);
     });

     wrap.appendChild(prev);

     if(div.stage==="SF" && div.wbPreview){
       let wbPrev=document.createElement("div");
       wbPrev.className="wrestle-preview";
       wbPrev.innerHTML='<div class="round-label">Wrestleback Round — Upcoming Matchups</div>';
       div.wbPreview.forEach(m=>{
         let row=document.createElement("div");
         row.className="match-row"+((m.a?.territory===userT||m.b?.territory===userT)?" user-highlight":"");
         let aSeed=m.a?.wrestleSeed?`#${m.a.wrestleSeed} `:"";
         let bSeed=m.b?.wrestleSeed?`#${m.b.wrestleSeed} `:"";
         row.innerHTML=`<span>${aSeed}${territoryHTML(m.a.territory)} — ${playerLinkHTML(m.a)}</span><span class="wrestle-scoreline">vs</span><span>${bSeed}${territoryHTML(m.b.territory)} — ${playerLinkHTML(m.b)}</span>`;
         wbPrev.appendChild(row);
       });
       wrap.appendChild(wbPrev);
     }
   }
   box.appendChild(wrap);
 });

 if(!e.done){
   let b=document.createElement("button");
   b.className="stage-btn";
   b.textContent="Next";
   b.onclick=()=>runWrestling(g);
   box.appendChild(b);
 }else{
   let card=document.createElement("div");card.className="points-table";
   card.innerHTML="<h4>Wrestling Points Awarded</h4>";
   const wrestlePts=[10,8,5,2],awards=[];
   ["light","heavy"].forEach(key=>e.divisions[key].placements.forEach((a,i)=>awards.push({a,key,pts:wrestlePts[i],place:i+1})));
   awards.sort((x,y)=>y.pts-x.pts||x.a.territory.localeCompare(y.a.territory));
   awards.forEach(x=>{
     let row=document.createElement("div");row.className="points-row"+(x.a.territory===userT?" user-highlight":"");
     row.innerHTML=`<span>${x.place}</span><span>${territoryHTML(x.a.territory)}</span><span>${playerLinkHTML(x.a)} · ${x.key==="light"?"Light":"Heavy"}</span><strong>${x.pts} pts</strong>`;card.appendChild(row);
   });
   if(!awards.some(x=>x.a.territory===userT)){
     let a=userAth(g),row=document.createElement("div");row.className="points-row user-highlight table-user-extra";
     row.innerHTML=`<span>—</span><span>${territoryHTML(userT)}</span><span>${playerLinkHTML(a)}</span><strong>0 pts</strong>`;card.appendChild(row);
   }
   box.appendChild(card);
 }
}
function renderSandbag(g,targetId){let e=events.sandbag[g],box=$(targetId);box.innerHTML="";if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}let u=$("territorySelect").value,w=g==="boy"?["50 lb","75 lb","100 lb"]:["25 lb","50 lb","75 lb"];e.history.forEach(h=>{let c=document.createElement("div");c.className="stage-card";c.innerHTML=`<h4>${h.stage} — Results</h4>`;h.groups.forEach((res,gi)=>{let lab=document.createElement("div");lab.className="round-label";lab.textContent=h.groups.length>1?`Heat ${gi+1}`:h.stage;c.appendChild(lab);let hd=document.createElement("div");hd.className="sandbag-header";hd.innerHTML=`<span>#</span><span>Territory</span><span>Athlete</span><span>${w[0]}</span><span>${w[1]}</span><span>${w[2]}</span><span>Total</span>`;c.appendChild(hd);res.forEach((x,i)=>{let r=document.createElement("div");r.className="sandbag-row"+(x.a.territory===u?" user-highlight":"");r.innerHTML=`<span>${i+1}</span><span>${territoryHTML(x.a.territory)}</span><span>${playerLinkHTML(x.a)}</span><span>${x.leg1.toFixed(1)}s</span><span>${x.leg2.toFixed(1)}s</span><span>${x.leg3.toFixed(1)}s</span><strong>${x.total.toFixed(1)}s</strong>`;c.appendChild(r)})});box.appendChild(c)});if(!e.done){let c=document.createElement("div");c.className="stage-card",label=e.stage==="heats"?"4 Heats of 16":"Final 16";c.innerHTML=`<h4>${label} — Upcoming</h4>`;let groups=e.stage==="heats"?e.groups:[e.finalists];groups.forEach((grp,gi)=>{let lab=document.createElement("div");lab.className="round-label";lab.textContent=groups.length>1?`Heat ${gi+1}`:"Final";c.appendChild(lab);[...grp].sort((a,b)=>e.stage==="heats"?a.territory.localeCompare(b.territory):(a.lastSandbag||9999)-(b.lastSandbag||9999)).forEach((a,i)=>c.appendChild(resultRow({a},i,u,a.lastSandbag?`${a.lastSandbag.toFixed(1)}s`:"—")))});let b=document.createElement("button");b.className="stage-btn";b.textContent="Next";b.onclick=()=>runSandbag(g);c.appendChild(b);box.appendChild(c)}
 if(e.done){let finalRes=e.history[e.history.length-1]?.groups?.[0];appendPointsTable(box,finalRes,u)}
}
function renderTeamSports(g,targetId){
 let e=events.teamsports[g],box=$(targetId);box.innerHTML="";
 if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}
 let u=$("territorySelect").value;

 if(e.history.length){
   let live=document.createElement("div");live.className="live-tally";
   live.innerHTML="<h5>Live Overall Tally — Full Field</h5>";
   e.field.map(a=>({a,total:e.totals[a.territory]||0})).sort((a,b)=>b.total-a.total)
     .forEach((x,i)=>live.appendChild(resultRow(x,i,u,`${x.total} pts`)));
   box.appendChild(live);

   let hist=document.createElement("div");hist.className="stage-history";
   e.history.forEach((stageData,si)=>{
     let c=document.createElement("div");c.className="stage-card";
     let latest=si===e.history.length-1;
     c.innerHTML=`<h4>${si+1}. ${stageData.stage} — ${latest?"Full Results":"Top 16"}</h4>`;
     if(latest)stageData.results.forEach((x,i)=>c.appendChild(resultRow(x,i,u,`${x.score} pts`)));
     else appendRowsTopPlusUser(c,stageData.results,16,u,x=>`${x.score} pts`);
     hist.appendChild(c);
   });
   box.appendChild(hist);
 }

 if(!e.done){
   let stage=teamStageNames[e.stageIndex],c=document.createElement("div");c.className="stage-card";
   c.innerHTML=`<h4>Stage ${e.stageIndex+1}/7 — ${stage}</h4>`;
   let b=document.createElement("button");b.className="stage-btn";b.textContent="Next";b.onclick=()=>runTeamSports(g);
   c.appendChild(b);box.appendChild(c);
 }
 if(e.done)appendPointsTable(box,e.results,u);
}
function renderStrength(g,targetId){
 let e=events.strength[g],box=$(targetId);box.innerHTML="";
 if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}
 let u=$("territorySelect").value;

 if(e.history.length){
   let live=document.createElement("div");live.className="live-tally";
   live.innerHTML="<h5>Live Combined Strength Standing — Top 15</h5>";
   let strengthLive=e.field.map(a=>{
     let d=e.data[a.territory]||{places:[]};
     return{a,avgPlace:d.places.length?d.places.reduce((x,y)=>x+y,0)/d.places.length:999};
   }).sort((a,b)=>a.avgPlace-b.avgPlace);
   appendRowsTopPlusUser(live,strengthLive,15,u,x=>`Avg ${x.avgPlace.toFixed(2)}`);
   box.appendChild(live);

   let hist=document.createElement("div");hist.className="stage-history";
   e.history.forEach((stageData,si)=>{
     let c=document.createElement("div");c.className="stage-card";
     let latest=si===e.history.length-1;
     let showFull=latest&&currentView==="strength";
     c.innerHTML=`<h4>${si+1}. ${stageData.stage} — ${showFull?"Full Results":"Top 15"}</h4>`;
     let metric=x=>stageData.stage==="Shot Put"?`${x.value.toFixed(2)}m`:stageData.stage==="Bench Press"?`${x.value} reps`:`${x.value.toFixed(2)}s`;
     if(showFull){
       stageData.results.forEach((x,i)=>c.appendChild(resultRow(x,i,u,metric(x))));
     }else{
       appendRowsTopPlusUser(c,stageData.results,15,u,metric);
     }
     hist.appendChild(c);
   });
   box.appendChild(hist);
 }

 if(!e.done){
   let stages=["Shot Put","Bench Press","Tire Flip"],stage=stages[e.stageIndex];
   let c=document.createElement("div");c.className="stage-card";
   c.innerHTML=`<h4>Stage ${e.stageIndex+1}/3 — ${stage}</h4>`;
   let b=document.createElement("button");b.className="stage-btn";
   b.textContent="Next";b.onclick=()=>runStrength(g);
   c.appendChild(b);box.appendChild(c);
 }

 if(e.done)appendPointsTable(box,e.results,u);
}
function renderTennis(){let e=events.tennis.state,box=$("tennisChrono");box.innerHTML="";if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}let u=$("territorySelect").value;e.history.forEach(h=>{let c=document.createElement("div");c.className="stage-card";c.innerHTML=`<h4>${h.stage} — Results</h4>`;h.groups.forEach(gr=>{let lab=document.createElement("div");lab.className="round-label";lab.textContent=gr.name;c.appendChild(lab);gr.results.forEach(m=>{let r=document.createElement("div");r.className="tennis-match"+((m.a.territory===u||m.b.territory===u)?" user-highlight":"");r.innerHTML=`<span class="${m.winner===m.a?"winner":""}">#${m.a.tennisSeed} ${territoryHTML(m.a.territory)} — ${playerLinkHTML(m.a.boy)} / ${playerLinkHTML(m.a.girl)}</span><span>${m.label?m.label+" · ":""}${m.score}</span><span class="${m.winner===m.b?"winner":""}">#${m.b.tennisSeed} ${territoryHTML(m.b.territory)} — ${playerLinkHTML(m.b.boy)} / ${playerLinkHTML(m.b.girl)}</span>`;c.appendChild(r)})});box.appendChild(c)});if(!e.done){let labels={R64:"Round of 64",R32:"Round of 32",R16:"Round of 16",QF_PB1:"Quarterfinals + Playback Round 1",SF_PB2:"Semifinals + Playback Round 2",PB_QF:"Playback Quarterfinals",PB_SF:"Playback Semifinals",PLACEMENT:"Placement Matches"},label=labels[e.stage],c=document.createElement("div");c.className="stage-card";c.innerHTML=`<h4>${label} — Upcoming</h4>`;let groups=e.stage==="QF_PB1"?[["Quarterfinals",e.mainPreview],["Playback Round 1",e.pb1Preview]]:e.stage==="SF_PB2"?[["Semifinals",e.mainPreview],["Playback Round 2",e.pb2Preview]]:e.stage==="PB_QF"?[["Playback Quarterfinals",e.playbackQuarterPreview]]:e.stage==="PB_SF"?[["Playback Semifinals",e.playbackSemiPreview]]:[[label,e.preview]];groups.forEach(([name,list])=>{let lab=document.createElement("div");lab.className="round-label";lab.textContent=name;c.appendChild(lab);list.forEach(m=>{let r=document.createElement("div");r.className="tennis-match"+((m.a.territory===u||m.b.territory===u)?" user-highlight":"");r.innerHTML=`<span>#${m.a.tennisSeed} ${territoryHTML(m.a.territory)} — ${playerLinkHTML(m.a.boy)} / ${playerLinkHTML(m.a.girl)}</span><span>${m.label||"vs"}</span><span>#${m.b.tennisSeed} ${territoryHTML(m.b.territory)} — ${playerLinkHTML(m.b.boy)} / ${playerLinkHTML(m.b.girl)}</span>`;c.appendChild(r)})});let b=document.createElement("button");b.className="stage-btn";b.textContent="Next";b.onclick=runTennis;c.appendChild(b);box.appendChild(c)}else{appendTennisPointsTable(box,e.placements,u)}}
function fmtCourseTime(sec){let m=Math.floor(sec/60),ss=sec-m*60;return `${m}:${ss.toFixed(2).padStart(5,"0")}`;}
function renderObstacle(g,targetId){
 let e=events.obstacle[g],box=$(targetId);box.innerHTML="";
 if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}
 let u=$("territorySelect").value;

 if(e.history.length&&!e.done){
   let live=document.createElement("div");live.className="live-tally";
   live.innerHTML=`<h5>Live Course Time — Top 15</h5><div class="small">Individual obstacle splits remain hidden until the course is complete.</div>`;
   let liveRows=e.field.map(a=>({a,total:e.totals[a.territory]||0})).sort((a,b)=>a.total-b.total);
   appendRowsTopPlusUser(live,liveRows,15,u,x=>fmtCourseTime(x.total));
   box.appendChild(live);
 }

 if(!e.done){
   let def=obstacleDefs[e.stageIndex],c=document.createElement("div");c.className="stage-card";
   c.innerHTML=`<h4>Obstacle ${e.stageIndex+1}/${obstacleDefs.length} — ${def.name}</h4><div class="small">Course is continuous. Splits are revealed only after the finish.</div>`;
   let b=document.createElement("button");b.className="stage-btn";b.textContent=e.stageIndex===0?`Start Course — ${def.name}`:`Continue — ${def.name}`;b.onclick=()=>runObstacle(g);
   c.appendChild(b);box.appendChild(c);
 }

 if(e.done){
   let live=document.createElement("div");live.className="live-tally";live.innerHTML="<h5>Final Obstacle Course Standings</h5>";
   e.results.forEach((x,i)=>live.appendChild(resultRow(x,i,u,fmtCourseTime(x.total))));box.appendChild(live);

   let hist=document.createElement("div");hist.className="stage-history";
   hist.innerHTML="<h4>Obstacle Splits</h4>";
   e.history.forEach((stageData,si)=>{
     let c=document.createElement("div");c.className="stage-card";
     c.innerHTML=`<h4>${si+1}. ${stageData.stage}</h4>`;
     appendRowsTopPlusUser(c,stageData.results,16,u,x=>x.fell?"FALL · 0:30":fmtCourseTime(x.time));
     hist.appendChild(c);
   });
   box.appendChild(hist);appendPointsTable(box,e.results,u);
 }
}
function renderArchery(g,targetId){
 let e=events.archery[g],box=$(targetId);box.innerHTML="";
 if(!e){box.innerHTML='<p class="small">Event not started.</p>';return}
 let u=$("territorySelect").value;

 if(!e.done){
   let c=document.createElement("div");c.className="stage-card";
   if(e.stageIndex<3){
     let d=[15,25,40][e.stageIndex];
     c.innerHTML=`<h4>${d}m Round — Upcoming</h4>`;
     let b=document.createElement("button");b.className="stage-btn";b.textContent=`Shoot ${d}m Round`;b.onclick=()=>runArchery(g);c.appendChild(b);
   }else{
     c.innerHTML="<h4>Top 16 Final — Upcoming</h4>";
     e.finalists.forEach((a,i)=>c.appendChild(resultRow({a},i,u,`${e.totals[a.territory]} qual`)));
     let b=document.createElement("button");b.className="stage-btn";b.textContent="Shoot Top 16 Final";b.onclick=()=>runArchery(g);c.appendChild(b);
   }
   box.appendChild(c);
 }

 if(e.history.length){
   if(!e.done){
     let live=document.createElement("div");live.className="live-tally";
     live.innerHTML="<h5>Live Qualification Total — Top 15</h5>";
     e.field.map(a=>({a,total:e.totals[a.territory]||0}))
       .sort((a,b)=>b.total-a.total);
     let archLive=e.field.map(a=>({a,total:e.totals[a.territory]||0})).sort((a,b)=>b.total-a.total);
     live.innerHTML="<h5>Live Qualification Total — Top 15</h5>";appendRowsTopPlusUser(live,archLive,15,u,x=>`${x.total} pts`);
     box.appendChild(live);
   }

   let hist=document.createElement("div");hist.className="stage-history";
   e.history.forEach((stageData,si)=>{
     let c=document.createElement("div");c.className="stage-card";
     c.innerHTML=`<h4>${stageData.stage} — ${stageData.stage==="Top 16 Final"?"Final Results":"Top 10"}</h4>`;
     if(stageData.stage==="Top 16 Final")stageData.results.forEach((x,i)=>c.appendChild(resultRow(x,i,u,`${x.score} pts`)));
     else appendRowsTopPlusUser(c,stageData.results,10,u,x=>`${x.score} pts`);
     hist.appendChild(c);
   });
   box.appendChild(hist);
 }

 if(e.done){
   let finalRes=e.history[e.history.length-1]?.results;
   appendPointsTable(box,finalRes,u);
 }
}

function fullStandingRows(obj,gender=null){
 return Object.entries(obj||{})
   .sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))
   .map(([t,p],i)=>({rank:i+1,t,p}));
}
function renderFullStandings(target,obj,gender=null){
 let box=$(target);if(!box)return;
 box.innerHTML="";box.className="fullstand";
 fullStandingRows(obj,gender).forEach(x=>{
   let d=document.createElement("div");d.className="standrow"+(x.t===$("territorySelect").value?" user-highlight":"");
   d.innerHTML=`<span>${x.rank}</span><span>${teamLinkHTML(x.t)}</span><strong>${x.p}</strong>`;
   box.appendChild(d);
 });
}
function rankIn(results,t){
 if(!results||!results.length)return"—";
 let idx=results.findIndex(x=>(x.a||x).territory===t);
 return idx<0?"—":String(idx+1);
}
function allHeatRows(history){
 let rows=[];
 (history||[]).forEach(h=>(h.groups||[]).forEach(gr=>rows.push(...gr)));
 return rows;
}
function finalRacePlacement(e,t){
 if(!e)return"—";
 let finalHistory=[...(e.history||[])].reverse().find(h=>h.groups&&h.groups.length===1);
 if(finalHistory){
   let idx=finalHistory.groups[0].findIndex(x=>x.a.territory===t);
   if(idx>=0)return String(idx+1);
 }
 // For non-finalists, rank by their best/latest recorded performance across the whole event.
 let rows=allHeatRows(e.history);
 if(!rows.length)return"—";
 let byTerritory={};
 rows.forEach(x=>{
   let cur=byTerritory[x.a.territory];
   if(!cur||x.time<cur.time)byTerritory[x.a.territory]=x;
 });
 let ranked=Object.values(byTerritory).sort((a,b)=>a.time-b.time);
 return rankIn(ranked,t);
}
function sandbagOverallPlacement(e,t){
 if(!e)return"—";
 let finalRes=e.history?.[e.history.length-1]?.groups?.[0];
 if(finalRes?.some(x=>x.a.territory===t))return rankIn(finalRes,t);
 let heats=(e.history?.[0]?.groups||[]).flat();
 if(!heats.length)return"—";
 heats.sort((a,b)=>a.total-b.total);
 return rankIn(heats,t);
}
function wrestlingOverallPlacement(e,t){
 if(!e)return"—";
 let scores=[];
 ["light","heavy"].forEach(key=>{
   let d=e.divisions[key];
   if(d?.placements){
     d.placements.forEach((a,i)=>scores.push({a,place:i+1,key}));
   }
 });
 let found=scores.find(x=>x.a.territory===t);
 if(found)return String(found.place);
 // Non-placers: use elimination depth and seed as a deterministic 1-64 ordering fallback.
 let rec=[];
 ["light","heavy"].forEach(key=>{
   let d=e.divisions[key];
   (d?.field||[]).forEach(a=>{
     let depth=0;
     (d.history||[]).forEach((h,hi)=>{
       let m=h.results?.find(x=>x.a?.territory===a.territory||x.b?.territory===a.territory);
       if(m)depth=Math.max(depth,hi+1);
     });
     rec.push({a,depth,seed:a.wrestleSeed||99});
   });
 });
 rec.sort((x,y)=>y.depth-x.depth||x.seed-y.seed);
 return rankIn(rec,t);
}
function tennisOverallPlacement(t){
 let e=events.tennis.state;if(!e)return"—";
 if(e.placements?.length){
   let idx=e.placements.findIndex(x=>x.territory===t);
   if(idx>=0)return String(idx+1);
 }
 let rec=[];
 territories.forEach(tt=>{
   let depth=0;
   (e.history||[]).forEach((h,hi)=>{
     h.groups?.forEach(gr=>{
       if(gr.results?.some(m=>m.a.territory===tt||m.b.territory===tt))depth=Math.max(depth,hi+1);
     });
   });
   rec.push({territory:tt,depth,seed:teamForTerritory(tt).tennisSeed||99});
 });
 rec.sort((a,b)=>b.depth-a.depth||a.seed-b.seed);
 let idx=rec.findIndex(x=>x.territory===t);
 return idx<0?"—":String(idx+1);
}
function stagePlacement(history,stageName,t,sortFn=null){
 let hh=history?.find(x=>x.stage===stageName);if(!hh)return"—";
 let rows=[...(hh.results||[])];
 if(sortFn)rows.sort(sortFn);
 return rankIn(rows,t);
}
function placementCell(gender,t,key){
 let e;
 if(key==="100")return finalRacePlacement(events.hundred[gender],t);
 if(key==="sandbag")return sandbagOverallPlacement(events.sandbag[gender],t);
 if(key.startsWith("sb:")){
   e=events.sandbag[gender];
   let leg=key.slice(3),rows=(e?.history?.[0]?.groups||[]).flat();
   rows.sort((a,b)=>(a[leg]||9999)-(b[leg]||9999));
   return rankIn(rows,t);
 }
 if(key==="swim")return finalRacePlacement(events.swim[gender],t);
 if(key==="tennis")return tennisOverallPlacement(t);
 if(key==="teamsports")return rankIn(events.teamsports[gender]?.results,t);
 if(key.startsWith("ts:"))return stagePlacement(events.teamsports[gender]?.history,key.slice(3),t);
 if(key==="wrestling")return wrestlingOverallPlacement(events.wrestling[gender],t);
 if(key==="archery"){
   e=events.archery[gender];
   let f=e?.history?.find(x=>x.stage==="Top 16 Final")?.results;
   if(f?.some(x=>x.a.territory===t))return rankIn(f,t);
   return rankIn(e?.qualification||[],t);
 }
 if(key.startsWith("ar:"))return stagePlacement(events.archery[gender]?.history,key.slice(3),t);
 if(key==="mile")return finalRacePlacement(events.mile[gender],t);
 if(key==="strength")return rankIn(events.strength[gender]?.results,t);
 if(key.startsWith("st:")){
   let name=key.slice(3),hh=events.strength[gender]?.history?.find(x=>x.stage===name);
   let rows=[...(hh?.results||[])];
   if(name==="Tire Flip")rows.sort((a,b)=>a.value-b.value);
   else rows.sort((a,b)=>b.value-a.value);
   return rankIn(rows,t);
 }
 if(key==="obstacle")return rankIn(events.obstacle[gender]?.results,t);
 if(key.startsWith("ob:")){
   let name=key.slice(3),hh=events.obstacle[gender]?.history?.find(x=>x.stage===name);
   return rankIn(hh?.results||[],t);
 }
 return"—";
}
const matrixColumns=[
 {k:"100",n:"100m",main:1},{k:"sandbag",n:"Sandbag",main:1},
 {k:"sb:leg1",n:"Bag Leg 1",sub:1},{k:"sb:leg2",n:"Bag Leg 2",sub:1},{k:"sb:leg3",n:"Bag Leg 3",sub:1},
 {k:"swim",n:"Swim",main:1},{k:"tennis",n:"Tennis",main:1},
 {k:"teamsports",n:"Sports Day",main:1},
 ...teamStageNames.map(n=>({k:"ts:"+n,n,sub:1})),
 {k:"wrestling",n:"Wrestling",main:1},{k:"archery",n:"Archery",main:1},
 {k:"ar:15m Round",n:"15m",sub:1},{k:"ar:25m Round",n:"25m",sub:1},{k:"ar:40m Round",n:"40m",sub:1},
 {k:"mile",n:"Mile",main:1},{k:"strength",n:"Strength",main:1},
 {k:"st:Shot Put",n:"Shot",sub:1},{k:"st:Bench Press",n:"Bench",sub:1},{k:"st:Tire Flip",n:"Tire",sub:1},
 {k:"obstacle",n:"Obstacle",main:1},
 ...obstacleDefs.map(o=>({k:"ob:"+o.name,n:o.name,sub:1}))
];
function renderPlacementMatrix(target,gender){
 let table=$(target);
 table.innerHTML="";

 let thead=document.createElement("thead");
 let hr=document.createElement("tr");
 let first=document.createElement("th");
 first.textContent="Delegation";
 hr.appendChild(first);

 matrixColumns.forEach(c=>{
   let th=document.createElement("th");
   th.className=c.main?"main-event":"sub-event";
   th.textContent=c.n;
   hr.appendChild(th);
 });
 thead.appendChild(hr);
 table.appendChild(thead);

 let tbody=document.createElement("tbody");
 territories.forEach(t=>{
   let tr=document.createElement("tr");
   if(t===$("territorySelect").value)tr.classList.add("user-highlight");

   let nameCell=document.createElement("td");
   nameCell.innerHTML=`${teamLinkHTML(t)}`;
   tr.appendChild(nameCell);

   matrixColumns.forEach(c=>{
     let td=document.createElement("td");
     td.className=c.main?"main-event":"sub-event";
     try{
       td.textContent=placementCell(gender,t,c.k)??"—";
     }catch(err){
       console.warn("Final matrix placement unavailable",gender,t,c.k,err);
       td.textContent="—";
     }
     tr.appendChild(td);
   });

   tbody.appendChild(tr);
 });
 table.appendChild(tbody);
}


function rankEntries(obj){return Object.entries(obj).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))}
function awardLineupPlayers(season,t,genders){
 let out=[];
 genders.forEach(gender=>{
   let roster=season.rosters?.[gender]?.[t]||[];
   roster.forEach(p=>{
     let assigned=lineupEvents.filter(([key])=>seasonEntryId(season,gender,t,key)===p.id).map(x=>x[1]);
     out.push({p,gender,assigned});
   });
 });
 return out;
}
function awardTeamCard(season,t,points,place,category){
 let genders=category==="boys"?["boy"]:category==="girls"?["girl"]:["boy","girl"],players=awardLineupPlayers(season,t,genders),wins=seasonTeamEventWins(season,t,category);
 let medal=place===1?"GOLD":place===2?"SILVER":"BRONZE";
 return `<div class="award-team-card award-${place}">
   <div class="award-medal">${medal}</div>
   <h3>${place}. ${teamLinkHTML(t)}</h3>
   <div class="award-team-summary"><strong>${points} pts</strong><span>${wins} event win${wins===1?"":"s"}</span></div>
   <div class="award-face-grid">${players.map(x=>`<div class="award-athlete">${playerFaceHTML(x.p,"face-award")}<strong>${playerLinkHTML(x.p)}</strong><span>${x.gender==="boy"?"Boys":"Girls"}</span><small>${x.assigned.join(" · ")||"Roster"}</small></div>`).join("")}</div>
 </div>`;
}
function topSeasonAthlete(season,gender=null,age=null){
 let rows=seasonAthleteEventStats(season).filter(x=>(!gender||x.gender===gender)&&(age===null||x.p.age===age));
 return rows.sort((a,b)=>b.points-a.points||b.wins-a.wins||b.top4-a.top4||b.p.overall-a.p.overall)[0]||null;
}
function freshmanOfTheYear(season,gender){
 const current=seasonAthleteEventStats(season).filter(x=>x.starts>0&&x.gender===gender);
 const rank=rows=>[...rows].sort((a,b)=>b.points-a.points||b.wins-a.wins||b.top4-a.top4||b.p.overall-a.p.overall)[0]||null;

 // First preference: any 15-year-old of this gender who actually competed.
 let pick=rank(current.filter(x=>x.p.age===15));
 if(pick)return pick;

 // Fallbacks are first-year competitors only, checked separately by gender.
 const priorYears=careerHistory.filter(s=>s.year<season.year);
 const hadPriorStart=id=>priorYears.some(s=>seasonAthleteEventStats(s).some(x=>x.p.id===id&&x.starts>0));

 pick=rank(current.filter(x=>x.p.age===16&&!hadPriorStart(x.p.id)));
 if(pick)return pick;

 return rank(current.filter(x=>x.p.age===17&&!hadPriorStart(x.p.id)));
}
function athleteAwardHTML(title,x){
 if(!x)return`<div class="individual-award"><h3>${title}</h3><p>—</p></div>`;
 return `<div class="individual-award">${playerFaceHTML(x.p,"face-award-large")}<div><div class="awards-kicker">${title}</div><h3>${playerLinkHTML(x.p)}</h3><p>${teamLinkHTML(x.team)} · ${x.points} pts · ${x.wins} win${x.wins===1?"":"s"} · ${x.top4} Top-4 finish${x.top4===1?"":"es"}</p></div></div>`;
}
function userChampionshipCategories(season){
 let u=$("territorySelect").value,out=[];
 if(season.champions.boys===u)out.push("boys");
 if(season.champions.girls===u)out.push("girls");
 if(season.champions.combined===u)out.push("combined");
 return out;
}
function showAwardsScreen(season){
 let box=$("awardsContent");$("awardsTitle").textContent=`${season.year} American Patriot Games Awards`;
 let sections=[["boys","Boys",season.scores.boys],["girls","Girls",season.scores.girls],["combined","Combined",season.scores.combined]];
 box.innerHTML=sections.map(([key,label,obj])=>{
   let top=rankEntries(obj).slice(0,3);
   return `<section class="award-section"><h2>${label} Team Championship</h2><div class="award-podium">${top.map(([t,p],i)=>awardTeamCard(season,t,p,i+1,key)).join("")}</div></section>`;
 }).join("")+`<section class="award-section"><h2>Individual Honors</h2><div class="individual-awards">
   ${athleteAwardHTML("BOYS MOST VALUABLE PATRIOT",topSeasonAthlete(season,"boy"))}
   ${athleteAwardHTML("GIRLS MOST VALUABLE PATRIOT",topSeasonAthlete(season,"girl"))}
   ${athleteAwardHTML("BOYS FRESHMAN OF THE YEAR",freshmanOfTheYear(season,"boy"))}
   ${athleteAwardHTML("GIRLS FRESHMAN OF THE YEAR",freshmanOfTheYear(season,"girl"))}
 </div></section>`;
 renderPlayerFaces(box);
 $("awardsModal").classList.remove("hidden");
 $("awardsContinueBtn").onclick=()=>{
   $("awardsModal").classList.add("hidden");
   let cats=userChampionshipCategories(season);
   if(cats.length)showWhiteHouseInvite(season,cats);else advanceToNextSeason();
 };
}
function presidentCaricature(which){
 if(which==="trump")return `<svg viewBox="0 0 180 220" class="president-svg"><rect width="180" height="220" rx="20" fill="#f4e7d1"/><path d="M45 78 Q60 22 136 50 Q125 35 109 31 Q87 18 56 42 Q38 56 45 78" fill="#e0bd57" stroke="#6e5622" stroke-width="4"/><ellipse cx="91" cy="105" rx="50" ry="62" fill="#e6b18f" stroke="#322" stroke-width="4"/><path d="M62 94 Q74 86 83 94M101 94 Q114 86 124 95" fill="none" stroke="#332820" stroke-width="5"/><circle cx="75" cy="99" r="4"/><circle cx="111" cy="99" r="4"/><path d="M88 104 L83 126 L96 127" fill="none" stroke="#8d624d" stroke-width="4"/><path d="M70 144 Q92 154 113 143" fill="none" stroke="#8a2b2b" stroke-width="5"/><path d="M38 220 Q45 164 91 164 Q138 164 146 220" fill="#203c72"/><path d="M72 165 L91 201 L110 165" fill="#fff"/><path d="M88 178 L95 178 L101 220 L82 220Z" fill="#c62b32"/></svg>`;
 return `<svg viewBox="0 0 180 220" class="president-svg"><rect width="180" height="220" rx="20" fill="#e6edf4"/><ellipse cx="91" cy="104" rx="49" ry="63" fill="#9b654c" stroke="#211b19" stroke-width="4"/><path d="M46 83 Q51 42 91 39 Q132 42 139 82 Q118 63 94 63 Q67 63 46 83" fill="#171514"/><path d="M62 95 Q75 89 84 96M101 96 Q113 89 124 96" fill="none" stroke="#241b18" stroke-width="4"/><circle cx="76" cy="101" r="4"/><circle cx="111" cy="101" r="4"/><path d="M88 107 L84 128 L97 129" fill="none" stroke="#633d31" stroke-width="4"/><path d="M68 143 Q91 157 116 142" fill="#fff" stroke="#53332d" stroke-width="4"/><path d="M38 220 Q44 164 91 164 Q138 164 146 220" fill="#1c3557"/><path d="M72 165 L91 201 L110 165" fill="#fff"/><path d="M87 177 L96 177 L102 220 L81 220Z" fill="#40699b"/></svg>`;
}
function whiteHouseCategoryText(cats){
 if(cats.includes("combined")||(cats.includes("boys")&&cats.includes("girls")))return"boys and girls";
 return cats.includes("boys")?"boys":"girls";
}
function showWhiteHouseInvite(season,cats){
 let u=$("territorySelect").value,kind=whiteHouseCategoryText(cats),box=$("whiteHouseContent");
 box.innerHTML=`<div class="white-house-invite"><div class="awards-kicker">CHAMPIONSHIP EASTER EGG</div><h2>The ${teamLinkHTML(u)} ${kind} have been invited to visit the White House.</h2><p>Who would you like to meet?</p>
 <div class="president-choice-grid">
   <button class="president-choice red-choice" data-president="trump">${presidentCaricature("trump")}<strong>Donald Trump</strong><span>Red Delegation Visit</span></button>
   <button class="president-choice blue-choice" data-president="obama">${presidentCaricature("obama")}<strong>Barack Obama</strong><span>Blue Delegation Visit</span></button>
 </div></div>`;
 $("whiteHouseModal").classList.remove("hidden");
 box.querySelectorAll("[data-president]").forEach(b=>b.onclick=()=>showWhiteHousePhoto(season,cats,b.dataset.president));
}
function whiteHouseRepresentatives(season,cats){
 let u=$("territorySelect").value,kind=whiteHouseCategoryText(cats),genders=kind==="boys"?["boy"]:kind==="girls"?["girl"]:["boy","girl"];
 let stats=seasonAthleteEventStats(season).filter(x=>x.team===u&&genders.includes(x.gender)).sort((a,b)=>b.points-a.points||b.p.overall-a.p.overall);
 let out=[],ids=new Set();
 stats.forEach(x=>{if(out.length<4&&!ids.has(x.p.id)){out.push(x.p);ids.add(x.p.id)}});
 if(out.length<4)genders.forEach(g=>(season.rosters?.[g]?.[u]||[]).forEach(p=>{if(out.length<4&&!ids.has(p.id)){out.push(p);ids.add(p.id)}}));
 return out.slice(0,4);
}
function showWhiteHousePhoto(season,cats,president){
 let u=$("territorySelect").value,reps=whiteHouseRepresentatives(season,cats),box=$("whiteHouseContent"),name=president==="trump"?"Donald Trump":"Barack Obama";
 box.innerHTML=`<div class="white-house-photo"><div class="white-house-building"><div class="wh-roof"></div><div class="wh-columns">${Array(8).fill("<i></i>").join("")}</div><div class="wh-door"></div></div>
 <div class="commemorative-group"><div class="president-full">${presidentCaricature(president)}<strong>${name}</strong></div>${reps.map(p=>`<div class="commemorative-athlete">${playerFaceHTML(p,"face-whitehouse")}<strong>${playerLinkHTML(p)}</strong></div>`).join("")}</div>
 <h2>${season.year} ${teamLinkHTML(u)} American Patriot Games Champions</h2><p class="small">Commemorative White House visit</p><button id="finishWhiteHouseBtn" class="stage-btn">Continue to Offseason</button></div>`;
 renderPlayerFaces(box);
 $("finishWhiteHouseBtn").onclick=()=>{$("whiteHouseModal").classList.add("hidden");advanceToNextSeason()};
}

let offseasonReviewState=null;
function seasonEventWinners(season,gender,key){
 const mk=matrixKeyForLineup(key),out=[];
 for(const t of territories){
   if(String(season.placements?.[gender]?.[t]?.[mk])!=="1")continue;
   const id=seasonEntryId(season,gender,t,key);
   const p=(season.rosters?.[gender]?.[t]||[]).find(x=>x.id===Number(id))||findPlayerSnapshot(id);
   if(p)out.push({p,t});
 }
 // Wrestling has lightweight + heavyweight champions. Weight order is the
 // historical division order, so this works for archived seasons too.
 if(key==="wrestling")return out.sort((a,b)=>(a.p.weight||0)-(b.p.weight||0)).slice(0,2);
 return out.slice(0,1);
}
function seasonEventWinner(season,gender,key){return seasonEventWinners(season,gender,key)[0]||null}
function eventChampionCellHTML(season,gender,key){
 const winners=seasonEventWinners(season,gender,key);
 if(!winners.length)return"—";
 if(key==="wrestling"){
   return winners.map((w,i)=>`<div class="wrestling-champion-line"><span class="wrestling-division-label">${i===0?"Lightweight":"Heavyweight"}</span>${playerLinkHTML(w.p)}<br><span class="small">${teamLinkHTML(w.t)}</span></div>`).join("");
 }
 const w=winners[0];
 return `${playerLinkHTML(w.p)}<br><span class="small">${teamLinkHTML(w.t)}</span>`;
}
function eventWinnersTableHTML(season){
 const row=gender=>`<tr><th>${gender==="boy"?"Boys":"Girls"}</th>${lineupEvents.map(([key])=>`<td>${eventChampionCellHTML(season,gender,key)}</td>`).join("")}</tr>`;
 return `<div class="offseason-scroll"><table class="event-winner-table event-champions-2x10">
   <thead><tr><th></th>${lineupEvents.map(([,label])=>`<th>${label}</th>`).join("")}</tr></thead>
   <tbody>${row("boy")}${row("girl")}</tbody>
 </table></div>`;
}
function standingsReviewHTML(season){
 const make=(label,obj)=>`<div class="offseason-standing-col"><h3>${label}</h3>${Object.entries(obj||{}).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).map(([t,p],i)=>`<div class="standrow"><span>${i+1}</span><span>${teamLinkHTML(t)}</span><strong>${p}</strong></div>`).join("")}</div>`;
 return `<div class="offseason-standings">${make("Boys",season.scores.boys)}${make("Girls",season.scores.girls)}${make("Combined",season.scores.combined)}</div>`;
}
function matrixReviewHTML(season,gender){
 return `<div class="offseason-scroll"><table class="placement-matrix">
   <thead><tr><th>Delegation</th>${matrixColumns.map(c=>`<th class="${c.main?"main-event":"sub-event"}">${c.n}</th>`).join("")}</tr></thead>
   <tbody>${territories.map(t=>`<tr><td>${teamLinkHTML(t)}</td>${matrixColumns.map(c=>`<td class="${c.main?"main-event":"sub-event"}">${season.placements?.[gender]?.[t]?.[c.k]??"—"}</td>`).join("")}</tr>`).join("")}</tbody>
 </table></div>`;
}
function renderOffseasonReviewStep(){
 const state=offseasonReviewState;if(!state)return;
 const {season,step}=state,box=$("offseasonReviewContent"),title=$("offseasonReviewTitle"),btn=$("offseasonReviewNext");
 const steps=[
   ["Final Standings",()=>standingsReviewHTML(season)],
   ["Event Champions — Boys & Girls",()=>eventWinnersTableHTML(season)],
   ["Boys — Event & Sub-Event Placement Matrix",()=>matrixReviewHTML(season,"boy")],
   ["Girls — Event & Sub-Event Placement Matrix",()=>matrixReviewHTML(season,"girl")]
 ];
 if(step>=steps.length){
   $("offseasonReviewModal").classList.add("hidden");
   offseasonReviewState=null;
   showAwardsScreen(season);
   return;
 }
 title.textContent=`${season.year} ${steps[step][0]}`;
 box.innerHTML=steps[step][1]();
 btn.textContent=step===steps.length-1?"Continue to Awards":"Next";
 renderPlayerFaces(box);
}
function startOffseasonReview(season){
 offseasonReviewState={season,step:0};
 $("offseasonReviewModal").classList.remove("hidden");
 renderOffseasonReviewStep();
}
function beginAwardsFlow(){
 if(!events.obstacle.complete)return;
 try{
   let season=archiveCurrentSeason();
   if(!season)throw new Error("Season archive unavailable");
   startOffseasonReview(season);
 }catch(err){
   console.error("Offseason review failed",err);
   alert("The offseason review could not be opened. Please save your career and try again.");
 }
}
function renderFinalResults(){
 let panel=$("finalResultsPanel");
 if(!events.obstacle.complete){panel.classList.add("hidden");return}
 panel.classList.remove("hidden");
 $("seasonCompleteLabel").textContent=`${currentYear} American Patriot Games complete`;
 $("advanceSeasonBtn").textContent="Begin Offseason Review";
 try{renderFullStandings("finalBoysStandings",scores.boys,"boy")}catch(err){console.error("Final boys standings",err)}
 try{renderFullStandings("finalGirlsStandings",scores.girls,"girl")}catch(err){console.error("Final girls standings",err)}
 try{renderFullStandings("finalCombinedStandings",scores.combined)}catch(err){console.error("Final combined standings",err)}
 try{renderPlacementMatrix("boysPlacementMatrix","boy")}catch(err){console.error("Final boys matrix",err)}
 try{renderPlacementMatrix("girlsPlacementMatrix","girl")}catch(err){console.error("Final girls matrix",err)}
}

function mainEventColumns(){return matrixColumns.filter(c=>c.main)}
function renderDynastyNav(){
 let nav=$("dynastyNav");if(!nav)return;
 nav.classList.toggle("hidden",!(careerInitialized||gamesUiStarted||careerHistory.length));
 $("saveCareerBtn").classList.toggle("hidden",!careerInitialized);
 $("dynastyYearBadge").textContent=currentYear;
 document.querySelectorAll(".dynasty-nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.dynastyView===dynastyView));
}
function showDynastyView(view){
 dynastyView=view;rosterReviewOpen=false;
 renderDynastyNav();applyScreenState();
 if(view==="league")renderLeagueRosterBrowser();
 if(view==="history")renderHistoryScreen();
 window.scrollTo({top:0,behavior:"smooth"});
}
function populateHistorySelectors(){
 let years=[...careerHistory.map(s=>s.year)].sort((a,b)=>b-a);
 ["leagueSeasonSelect","historySeasonSelect"].forEach(id=>{
   let el=$(id);if(!el)return;let old=el.value;el.innerHTML="";
   if(id==="leagueSeasonSelect"||id==="historySeasonSelect"){let o=document.createElement("option");o.value="current";o.textContent=`${currentYear} (Current)`;el.appendChild(o)}
   if(id==="leagueSeasonSelect"){let o=document.createElement("option");o.value="alltime";o.textContent="All Time";el.appendChild(o)}
   years.forEach(y=>{let o=document.createElement("option");o.value=y;o.textContent=y;el.appendChild(o)});
   if([...el.options].some(o=>o.value===old))el.value=old;
 });
 const team=$("leagueTeamSelect");
 if(team&&!team.options.length)territories.forEach(t=>{let o=document.createElement("option");o.value=t;o.textContent=t;team.appendChild(o)});
 const rec=$("recordsEventSelect");
 if(rec&&!rec.options.length)mainEventColumns().forEach(c=>{let o=document.createElement("option");o.value=c.k;o.textContent=c.n;rec.appendChild(o)});
}
function liveSeasonSnapshot(){
 const rosterSnap={boy:{},girl:{}},placements={boy:{},girl:{}},lineups={boy:{},girl:{}};
 territories.forEach(t=>["boy","girl"].forEach(gender=>{
   rosterSnap[gender][t]=(leagueRosters[gender]?.[t]||[]).map(snapshotPlayer);
   placements[gender][t]={};
   matrixColumns.forEach(c=>placements[gender][t][c.k]=eventIsCompleteForKey(c.k)?placementCell(gender,t,c.k):"—");
   lineups[gender][t]={};
   lineupEvents.forEach(([key])=>lineups[gender][t][key]=currentEventEntryId(gender,t,key));
 }));
 const rb=Object.entries(scores.boys).sort((a,b)=>b[1]-a[1]),rg=Object.entries(scores.girls).sort((a,b)=>b[1]-a[1]),rc=Object.entries(scores.combined).sort((a,b)=>b[1]-a[1]);
 return{year:currentYear,current:true,scores:deepCopy(scores),rosters:rosterSnap,eventLineups:lineups,placements,
   starters:{boy:{},girl:{}},champions:{boys:rb[0]?.[0]||null,girls:rg[0]?.[0]||null,combined:rc[0]?.[0]||null}};
}
function recordSeasonsIncludingCurrent(){
 let arr=[...careerHistory];
 if(gamesUiStarted&&!seasonArchived)arr.push(liveSeasonSnapshot());
 return arr;
}
function seasonByValue(v){
 if(v==="current")return null;
 if(v==="alltime")return{allTime:true,year:"All Time"};
 return careerHistory.find(s=>String(s.year)===String(v))
}
function allTimeRosterForTeam(g,t){
 const byId=new Map();
 // Archived seasons are chronological: latest snapshot wins.
 // A former player therefore appears as his/her final age-18 season.
 careerHistory.slice().sort((a,b)=>a.year-b.year).forEach(season=>{
   (season.rosters?.[g]?.[t]||[]).forEach(p=>byId.set(p.id,p));
 });
 // Current active players also appear using their current snapshot.
 (leagueRosters[g]?.[t]||[]).forEach(p=>byId.set(p.id,snapshotPlayer(p)));
 return [...byId.values()].map(p=>{
   if(isPlayerCurrentlyActive(p.id))return allPlayers[p.id]||p;
   const seasons=playerHistoricalSeasons(p.id);
   return {...p,age:playerDisplayAge(p.id,p,seasons)};
 });
}
function rosterForBrowser(g,t,season){
 if(season?.allTime)return allTimeRosterForTeam(g,t);
 if(season)return season.rosters?.[g]?.[t]||[];
 return (leagueRosters[g]?.[t]||[]).map(snapshotPlayer);
}
function browserStarterId(g,t,season){
 if(season)return season.starters?.[g]?.[t]||null;
 return (t===$("territorySelect").value?userAth(g):teamStarters[g]?.[t])?.id||null;
}
function browserPoints(g,t,season){
 if(season?.allTime)return recordSeasonsIncludingCurrent().reduce((z,s)=>z+(g==="boy"?(s.scores?.boys?.[t]||0):(s.scores?.girls?.[t]||0)),0);
 if(season)return g==="boy"?season.scores.boys[t]:season.scores.girls[t];
 return g==="boy"?scores.boys[t]:scores.girls[t];
}
function browserPlacements(g,t,season){
 if(season)return season.placements?.[g]?.[t]||{};
 let o={};matrixColumns.forEach(c=>o[c.k]=eventIsCompleteForKey(c.k)?placementCell(g,t,c.k):"—");return o;
}
function browserPlayerPoints(a,g,t,season){
 if(season?.allTime)return recordSeasonsIncludingCurrent().reduce((z,s)=>z+seasonPlayerPoints(s,g,t,a.id),0);
 return season?seasonPlayerPoints(season,g,t,a.id):currentSeasonPlayerPoints(a.id,g,t);
}
function browserPlayerPlacements(a,g,t,season){
 if(season?.allTime)return{};
 if(season){
   let out={},hasAny=lineupEvents.some(([key])=>Number(seasonEntryId(season,g,t,key))===a.id);
   matrixColumns.forEach(c=>{
     const key=lineupKeyForMatrix(c.k),entered=Number(seasonEntryId(season,g,t,key))===a.id;
     out[c.k]=entered?(season.placements?.[g]?.[t]?.[c.k]??"—"):(hasAny?"X":"—");
   });return out;
 }
 return currentSeasonPlayerPlacements(a.id,g,t);
}
function browserPlayerStarts(a,g,t,season){
 if(season?.allTime)return recordSeasonsIncludingCurrent().reduce((z,s)=>z+lineupEvents.filter(([key])=>Number(seasonEntryId(s,g,t,key))===a.id).length,0);
 if(season)return lineupEvents.filter(([key])=>Number(seasonEntryId(season,g,t,key))===a.id).length;
 return lineupEvents.filter(([key])=>Number(currentEventEntryId(g,t,key))===a.id&&events[key==="hundred"?"hundred":key]?.started).length;
}

function starterForBrowser(g,t,season){
 let id=browserStarterId(g,t,season);
 if(!id)return null;
 return rosterForBrowser(g,t,season).find(a=>a.id===id)||findPlayerSnapshot(id);
}
function starterEventResults(g,t,season){
 if(season)return season.placements?.[g]?.[t]||{};
 let out={};
 matrixColumns.forEach(c=>{
   if(c.main)out[c.k]=eventIsCompleteForKey(c.k)?placementCell(g,t,c.k):"—";
 });
 return out;
}
function renderLeagueStarters(t,season){
 let box=$("leagueStartersContent");if(!box)return;
 let year=season?.year??currentYear;
 box.innerHTML=`<h3>${seasonLinkHTML(year)} ${teamLinkHTML(t)} — Starters</h3><div class="small">${season?"Archived season starters and final results.":"Current starters · results update live after each event."}</div>`;
 let wrap=document.createElement("div");wrap.className="league-starters";

 ["boy","girl"].forEach(gender=>{
   let a=starterForBrowser(gender,t,season);
   let card=document.createElement("div");card.className="league-starter-card";
   if(!a){
     card.innerHTML=`<h3>${gender==="boy"?"Boys":"Girls"} Starter</h3><p class="small">Not selected yet.</p>`;
     wrap.appendChild(card);return;
   }
   let pts=browserPoints(gender,t,season),results=starterEventResults(gender,t,season);
   card.innerHTML=`
     <div class="league-starter-meta league-starter-with-face">
       ${playerFaceHTML(a,"face-starter")}
       <div>
         <div class="small">${gender==="boy"?"BOYS STARTER":"GIRLS STARTER"}</div>
         <h3>${playerLinkHTML(a)}</h3>
         <div class="small">${a.hometown} · Age ${a.age} · ${a.weight} lb</div>
       </div>
       <div><strong>${ratingChip(a.overall,"",true)} OVR</strong></div>
     </div>
     <div class="starter-event-grid">
       ${mainEventColumns().map(c=>`<div class="starter-event-result"><span>${c.n}</span><strong>${results[c.k]||"—"}</strong></div>`).join("")}
     </div>
     <div class="starter-points">Championship Points: <strong>${pts}</strong></div>
   `;
   wrap.appendChild(card);
 });
 box.appendChild(wrap);
}
function renderLeagueRosterBrowser(){
 populateHistorySelectors();
 let season=seasonByValue($("leagueSeasonSelect").value),t=$("leagueTeamSelect").value||$("territorySelect").value||territories[0],gender=leagueGender;
 if(!$("leagueTeamSelect").value)$("leagueTeamSelect").value=t;
 let roster=rosterForBrowser(gender,t,season),teamPts=browserPoints(gender,t,season);
 let box=$("leagueRosterContent");
 box.innerHTML=`<h3>${season?.allTime?"All Time":(season?seasonLinkHTML(season.year):seasonLinkHTML(currentYear))} ${teamLinkHTML(t)} — ${gender==="boy"?"Boys":"Girls"}</h3>
 <p class="small">${season?.allTime?"All-time team points":"Team points"}: <strong>${teamPts}</strong>${!season?" · updates live after every completed event":season?.allTime?" · former players keep aging; ratings are frozen at their final senior-season values":""}</p>`;
 let table=document.createElement("table");table.className="league-roster-table";
 table.innerHTML="<thead><tr><th>Player</th><th>Age</th><th>OVR</th><th>Starts</th><th>Points</th><th>Event Results</th></tr></thead>";
 let body=document.createElement("tbody");
 roster.sort((a,b)=>b.overall-a.overall).forEach(a=>{
   let tr=document.createElement("tr"),pp=browserPlayerPlacements(a,gender,t,season),pts=browserPlayerPoints(a,gender,t,season),starts=browserPlayerStarts(a,gender,t,season);
   let eventText=season?.allTime?"Career totals — click athlete for yearly breakdown":(starts>0?mainEventColumns().map(c=>`${c.n}: ${pp[c.k]??"—"}`).join(" · "):"—");
   tr.innerHTML=`<td>${playerLinkHTML(a)}</td><td>${a.age}</td><td>${ratingChip(a.overall,"",true)}</td><td>${starts}</td><td><strong>${pts}</strong></td><td>${eventText}</td>`;
   body.appendChild(tr);
 });
 table.appendChild(body);box.appendChild(table);

 roster.forEach(a=>{
   let card=document.createElement("div");card.className="league-player-card";
   card.innerHTML=`<div class="league-player-face-row">${playerFaceHTML(a,"face-roster")}<div class="league-player-face-copy"><div class="row spread"><div>${playerLinkHTML(a)} <span class="small">· ${a.hometown} · Age ${a.age}</span></div><strong>${ratingChip(a.overall,"",true)} OVR</strong></div>
   <div class="player-attr-grid">${attrs.map(k=>`<div>${k}: ${ratingChip(a.attrs[k],"",true)}</div>`).join("")}</div></div></div>`;
   box.appendChild(card);
 });
 renderPlayerFaces(box);
}
function historicalDisplayAge(p,seasons){
 if(!p)return null;
 const last=seasons?.length?[...seasons].sort((a,b)=>Number(b.year)-Number(a.year))[0]:null;
 if(!last)return p.age;
 const lastRecordedAge=Number(last.p?.age??last.age??p.age);
 const lastRecordedYear=Number(last.year??currentYear);
 return lastRecordedAge+Math.max(0,currentYear-lastRecordedYear);
}
function isPlayerCurrentlyActive(id){
 id=Number(id);
 if(["boy","girl"].some(g=>territories.some(t=>(leagueRosters?.[g]?.[t]||[]).some(p=>Number(p.id)===id))))return true;
 if([...(boys||[]),...(girls||[])].some(p=>Number(p.id)===id&&p.onRoster))return true;
 return false;
}
function playerDisplayAge(id,p=null,seasons=null){
 id=Number(id);
 p=p||findPlayerSnapshot(id);
 if(!p)return null;
 if(isPlayerCurrentlyActive(id))return Number(allPlayers[id]?.age??p.age);
 seasons=seasons||playerHistoricalSeasons(id);
 return historicalDisplayAge(p,seasons);
}
function findPlayerSnapshot(id){
 id=Number(id);
 let current=allPlayers[id];if(current)return current;
 for(let si=careerHistory.length-1;si>=0;si--){
   let season=careerHistory[si];
   for(let g of ["boy","girl"])for(let t of territories){let p=season.rosters?.[g]?.[t]?.find(x=>x.id===id);if(p)return p}
 }
 return null;
}
function openPlayerCareer(id,fromBack=false){
 if(!fromBack)pushAppView();
 ["hometownModal","frivolityModal"].forEach(mid=>$(mid)?.classList.add("hidden"));
 id=Number(id);
 let p=findPlayerSnapshot(id);if(!p)return;
 let seasons=playerHistoricalSeasons(id);
 let live=currentPlayerSeasonRow(id);
 // Do not duplicate current year if it somehow already exists in archive.
 if(live&&!seasons.some(x=>x.year===live.year))seasons.push(live);
 seasons.sort((a,b)=>a.year-b.year);

 let current=isPlayerCurrentlyActive(id)?allPlayers[id]:null;
 let displayAge=playerDisplayAge(id,p,seasons);
 let careerPts=seasons.reduce((a,x)=>a+x.points,0);
 let wins=0;
 seasons.forEach(x=>mainEventColumns().forEach(c=>{if(x.placements[c.k]==="1")wins++}));
 let starts=seasons.reduce((sum,x)=>sum+(Number(x.starts) || (x.starter?1:0)),0);

 let currentPts=live?.points||0;
 let completedCurrent=live?mainEventColumns().filter(c=>live.placements[c.k]!=="—").length:0;
 let box=$("playerCareerContent");
 box.innerHTML=`
 <div class="player-profile-head player-profile-with-face">
   ${playerFaceHTML(current||p,"face-bio")}
   <div class="player-profile-copy">
     <h2>${playerLinkHTML(p)}</h2>
     <div>${teamLinkHTML(p.territory)} · ${hometownLinkHTML(p.hometown,p.territory)}</div>
     <div class="small">${p.gender==="boy"?"Boys":"Girls"} · Age ${displayAge}</div>
   </div>
   <div class="player-profile-ovr"><strong>${ratingChip(current?.overall??p.overall,"",true)} OVR</strong></div>
 </div>
 <div class="career-summary">
   <div><strong>${seasons.length}</strong><br><span class="small">Seasons</span></div>
   <div><strong>${starts}</strong><br><span class="small">Starts</span></div>
   <div><strong>${careerPts}</strong><br><span class="small">Career Points</span></div>
   <div><strong>${wins}</strong><br><span class="small">Event Wins</span></div>
 </div>
 ${live?`<div class="selected-banner"><strong>${currentYear} Live:</strong> ${live.starts?`${live.starts} event start${live.starts===1?"":"s"} · ${currentPts} pts · ${completedCurrent}/10 events completed`:"Roster athlete · No event starts yet"}</div>`:""}
 <h3>${current?"Current Ratings":"Final Senior Ratings"}</h3>
 <div class="player-attr-grid">${attrs.map(k=>`<div>${k}: ${ratingChip((current||p).attrs[k],"",true)}</div>`).join("")}</div>
 <h3>Career by Season</h3>`;

 let table=document.createElement("table");table.className="career-season-table";
 table.innerHTML="<thead><tr><th>Year</th><th>Team</th><th>Age</th><th>OVR</th><th>Starts</th><th>Pts</th>"+mainEventColumns().map(c=>`<th>${c.n}</th>`).join("")+"</tr></thead>";
 let tb=document.createElement("tbody");
 seasons.forEach(x=>{
   let tr=document.createElement("tr");
   if(x.current)tr.className="current-season-row";
   tr.innerHTML=`
     <td>${seasonLinkHTML(x.year)}${x.current?'<span class="current-season-badge">LIVE</span>':""}</td>
     <td>${teamLinkHTML(x.t)}</td>
     <td>${x.p.age}</td>
     <td>${x.p.overall}</td>
     <td>${x.starts??(x.starter?1:0)}</td>
     <td><strong>${x.points}</strong></td>
     ${mainEventColumns().map(c=>`<td>${x.placements[c.k]||"—"}</td>`).join("")}
   `;
   tb.appendChild(tr);
 });
 table.appendChild(tb);box.appendChild(table);
 renderPlayerFaces(box);
 $("playerModal").dataset.playerId=id;
 $("playerModal").classList.remove("hidden");
}
function renderRecordRows(target,rows,valueLabel){
 let box=$(target);box.innerHTML="";
 rows.slice(0,10).forEach((x,i)=>{let d=document.createElement("div");d.className="record-row";d.innerHTML=`<span>${i+1}</span><span>${x.html}</span><span>${x.year?seasonLinkHTML(x.year):""}</span><strong>${x.value}${valueLabel||""}</strong>`;box.appendChild(d)});
 if(!rows.length)box.innerHTML='<p class="small">No completed seasons yet.</p>';
}
function buildRecordData(){
 let playerPts=[],teamPts=[];
 recordSeasonsIncludingCurrent().forEach(season=>{
   seasonAthleteEventStats(season).forEach(x=>{
     playerPts.push({html:`${playerLinkHTML(x.p)} · ${teamLinkHTML(x.team)} (${x.gender==="boy"?"B":"G"})`,year:season.year,value:x.points});
   });
   territories.forEach(t=>teamPts.push({html:teamLinkHTML(t),year:season.year,value:season.scores.combined[t]}));
 });
 playerPts.sort((a,b)=>b.value-a.value);teamPts.sort((a,b)=>b.value-a.value);
 return{playerPts,teamPts};
}

let allTimeRecordTab="starts";

function buildBestHometownsRecords(){
 let map={};
 const getRow=(p,territoryOverride=null)=>{
   if(!p)return null;
   const hometown=(p.hometown||"Unknown").trim()||"Unknown",territory=territoryOverride||p.territory||"";
   const key=`${territory}|||${hometown}`;
   return map[key]||(map[key]={hometown,territory,points:0,starts:0,top4:0,wins:0,athletes:new Set()});
 };
 const seasons=recordSeasonsIncludingCurrent();

 // First register EVERY athlete who actually made an official roster.
 seasons.forEach(season=>["boy","girl"].forEach(g=>territories.forEach(t=>
   (season.rosters?.[g]?.[t]||[]).forEach(p=>getRow(p,t)?.athletes.add(Number(p.id)))
 )));
 // Current preseason roster additions may not yet exist in a season snapshot.
 ["boy","girl"].forEach(g=>territories.forEach(t=>
   (leagueRosters?.[g]?.[t]||[]).forEach(p=>getRow(p,t)?.athletes.add(Number(p.id)))
 ));
 [...(boys||[]),...(girls||[])].filter(p=>p?.onRoster).forEach(p=>getRow(p,p.territory)?.athletes.add(Number(p.id)));

 // Then add performance totals only for actual event participants.
 seasons.forEach(season=>seasonAthleteEventStats(season).forEach(x=>{
   const row=getRow(x.p,x.team);if(!row)return;
   row.points+=x.points||0;
   row.starts+=x.starts||0;
   row.top4+=x.top4||0;
   row.wins+=x.wins||0;
 }));
 return Object.values(map)
   .map(x=>({...x,athletes:x.athletes.size}))
   .sort((a,b)=>b.points-a.points||b.wins-a.wins||b.top4-a.top4||b.starts-a.starts||b.athletes-a.athletes||a.hometown.localeCompare(b.hometown));
}
function renderBestHometowns(){
 let box=$("bestHometownsRecords");if(!box)return;
 let rows=buildBestHometownsRecords().slice(0,15);
 box.innerHTML=`<div class="hometown-record-head">
   <span>#</span><span>Hometown</span><span>Pts</span><span>Wins</span><span>Top 4</span><span>Starts</span><span>Athletes</span>
 </div>`;
 rows.forEach((x,i)=>{
   let d=document.createElement("div");d.className="hometown-record-row";
   d.innerHTML=`<span>${i+1}</span><strong>${hometownLinkHTML(x.hometown,x.territory,`${x.hometown}, ${x.territory}`)}</strong><strong>${x.points}</strong><span>${x.wins}</span><span>${x.top4}</span><span>${x.starts}</span><span>${x.athletes}</span>`;
   box.appendChild(d);
 });
 if(!rows.length)box.innerHTML=`<p class="small">Complete and archive a season to begin tracking hometown records.</p>`;
}

function buildAllTimeParticipationRecords(){
 let map={};
 recordSeasonsIncludingCurrent().forEach(season=>seasonAthleteEventStats(season).forEach(x=>{
   let r=map[x.p.id]||(map[x.p.id]={p:x.p,starts:0,top4:0,wins:0,points:0,seasons:new Set()});
   r.starts+=x.starts;r.top4+=x.top4;r.wins+=x.wins;r.points+=x.points;r.seasons.add(season.year);
 }));
 return Object.values(map).map(x=>({...x,seasons:x.seasons.size}));
}
function renderAllTimeParticipation(){
 let box=$("allTimePlayerRecords");if(!box)return;
 let rows=buildAllTimeParticipationRecords().sort((a,b)=>(allTimeRecordTab==="starts"?b.starts-a.starts:b.top4-a.top4)||b.points-a.points||b.wins-a.wins).slice(0,25);
 box.innerHTML=`<div class="small alltime-top-note">Top 25 · click any column to sort</div>
 <div class="alltime-table-wrap"><table class="alltime-participation-table">
   <thead><tr><th>#</th><th>Athlete</th><th>Delegation</th><th>Seasons</th><th>Starts</th><th>Top 4</th><th>Wins</th><th>Pts</th></tr></thead>
   <tbody>${rows.map((x,i)=>`<tr>
     <td>${i+1}</td><td>${playerLinkHTML(x.p)}</td><td>${teamLinkHTML(x.p.territory)}</td>
     <td>${x.seasons}</td><td><strong>${x.starts}</strong></td><td><strong>${x.top4}</strong></td><td>${x.wins}</td><td>${x.points}</td>
   </tr>`).join("")}</tbody>
 </table></div>`;
}

function lineupKeyForMatrix(key){
 if(key==="100")return"hundred";
 if(key.startsWith("sb:")||key==="sandbag")return"sandbag";
 if(key==="swim")return"swim";
 if(key==="tennis")return"tennis";
 if(key.startsWith("ts:")||key==="teamsports")return"teamsports";
 if(key==="wrestling")return"wrestling";
 if(key.startsWith("ar:")||key==="archery")return"archery";
 if(key==="mile")return"mile";
 if(key.startsWith("st:")||key==="strength")return"strength";
 if(key.startsWith("ob:")||key==="obstacle")return"obstacle";
 return key;
}
function renderEventWinRecords(){
 let key=$("recordsEventSelect").value,players={},teams={};
 recordSeasonsIncludingCurrent().forEach(season=>["boy","girl"].forEach(g=>territories.forEach(t=>{
   if(season.placements?.[g]?.[t]?.[key]==="1"){
     teams[t]=(teams[t]||0)+1;let lineupKey=lineupKeyForMatrix(key),id=seasonEntryId(season,g,t,lineupKey),p=season.rosters[g][t].find(x=>x.id===id);
     if(p){let k=p.id;players[k]=players[k]||{p,wins:0};players[k].wins++}
   }
 })));
 let pr=Object.values(players).sort((a,b)=>b.wins-a.wins).map(x=>({html:`${playerLinkHTML(x.p)} · ${teamLinkHTML(x.p.territory)}`,value:x.wins}));
 let tr=Object.entries(teams).sort((a,b)=>b[1]-a[1]).map(([t,v])=>({html:teamLinkHTML(t),value:v}));
 renderRecordRows("recordPlayerWins",pr,"");renderRecordRows("recordTeamWins",tr,"");
}

const FRIVOLITIES=[
 ["players","Best Players Without an MVP","Highest career points among athletes who never won Most Valuable Patriot.","noMvp"],
 ["players","Best Players Without an Event Win","Highest career points among athletes who never won an event.","noEventWin"],
 ["players","Best Freshmen Ever","Best age-15 seasons by points, wins, and Top-4 finishes.","freshmen"],
 ["development","Best Single-Season Progressions","Largest OVR increases in one offseason.","singleProg"],
 ["development","Best Career Progressions","Largest OVR gain from first recorded season to senior season.","careerProg"],
 ["development","Biggest Busts","Highly rated 15-year-olds whose careers produced the least relative success.","busts"],
 ["teams","Best Teams Ever","Highest combined delegation scores in a single Games.","bestTeams"],
 ["teams","Best Boys Teams","Highest boys team scores in a single Games.","bestBoys"],
 ["teams","Best Girls Teams","Highest girls team scores in a single Games.","bestGirls"],
 ["teams","Most Dominant Delegations","Most combined championships.","dominantDelegations"],
 ["teams","Longest Title Droughts","Most seasons since any boys, girls, or combined championship.","titleDroughts"],
 ["teams","Best Delegations Without a Title","Most all-time combined points without a combined championship.","noTitle"],
 ["teams","Dynasties","Most championships in rolling 5-year or 10-year spans.","dynasties"],
 ["players","Best Hometowns","All-time points produced by each hometown.","bestHometowns"],
 ["players","Most Event Starts","Most career event appearances.","mostStarts"],
 ["players","One-Sport Specialists","Most career points by athletes who competed in no more than two different events.","specialists"],
 ["players","Most Event Wins","Most career event championships.","mostWins"],
 ["players","Most Top-4 Finishes","Most career Top-4 event finishes.","mostTop4"],
 ["players","Most Points Without an Event Win","Most career points without ever winning an event.","pointsNoWin"],
 ["players","Most Event Wins Without MVP","Most event wins among athletes who never won MVP.","winsNoMvp"],
 ["players","Best One-Year Wonder","Most points by athletes whose career lasted only one competitive season.","oneYear"],
 ["players","Best Senior Seasons","Best age-18 seasons.","seniorSeasons"],
 ["players","Best Sophomore Seasons","Best age-16 seasons.","sophSeasons"],
 ["players","Best Junior Seasons","Best age-17 seasons.","juniorSeasons"],
 ["players","Youngest MVPs","Youngest athletes to win Most Valuable Patriot.","youngestMvp"],
 ["players","Youngest Event Winners","Youngest athletes to win an event.","youngestWinner"],
 ["development","Biggest OVR Declines","Largest decline from an athlete's career-high OVR to a later recorded OVR.","ovrDeclines"],
 ["development","Most Balanced Athletes","Smallest gap between highest and lowest attributes.","balancedAthletes"],
 ["development","Most Lopsided Athletes","Largest gap between highest and lowest attributes.","lopsidedAthletes"],
 ["development","Highest Attribute Ever","Highest recorded value for a selected attribute.","highestAttribute"],
 ["development","Lowest Attribute to Ever Score Points","Lowest recorded selected attribute among athletes who still scored that season.","lowestAttributePoints"],
 ["teams","Best Delegation Prospect Classes","Incoming age-15 classes whose members produced the best careers.","prospectClasses"],
 ["events","Best Event Programs","Delegations with the most all-time points in a selected event.","bestPrograms"],
 ["events","Worst Event Programs","Delegations with the fewest all-time points in a selected event.","worstPrograms"],
 ["events","Most Event Titles by Delegation","Delegations with the most titles in a selected event.","eventTitles"],
 ["teams","Most Balanced Delegations","Smallest all-time gap between boys and girls points.","balancedTeams"],
 ["teams","Biggest Boys/Girls Gap","Largest all-time points gap between boys and girls.","genderGap"],
 ["seasons","Biggest Blowouts","Largest winning margin in a combined championship.","blowouts"],
 ["seasons","Most Competitive Seasons","Smallest combined-score spread between 1st and 10th.","competitiveSeasons"],
 ["seasons","Most Dominant Seasons","Largest combined-score spread between champion and the field.","dominantSeasons"],
 ["seasons","Best Teams to Finish 2nd / 3rd","Highest combined scores ever by teams finishing 2nd or 3rd.","bestRunnerUps"],
 ["seasons","Worst Champion","Lowest combined score ever to win the Games.","worstChampion"],
 ["teams","Most Teammates to Win MVP","Delegations that produced the most different MVP-winning athletes.","teamMvps"],
 ["teams","Most Freshmen of the Year","Delegations with the most Freshman of the Year awards.","teamFreshmen"],
 ["teams","Most Seasons With Both a Boys and Girls Award Winner","Most seasons where one delegation won both genders' MVP or freshman honors.","doubleAwardSeasons"],
 ["teams","Least Points by One Gender on a Combined Champion","Lowest boys or girls contribution by a delegation that still won the combined championship.","leastGenderChampion"]
];
const frivCategoryNames={players:"Players",development:"Development & Ratings",teams:"Delegations & Teams",events:"Event Programs",seasons:"Seasons & Championships"};

function renderFrivolitiesDirectory(){
 let box=$("frivolitiesDirectory");if(!box)return;
 box.innerHTML=Object.keys(frivCategoryNames).map(cat=>`
   <section class="friv-category"><h3>${frivCategoryNames[cat]}</h3><div class="friv-card-list">
   ${FRIVOLITIES.filter(x=>x[0]===cat).map(([,title,desc,key])=>`<button class="friv-card" data-friv-key="${key}"><strong>${title}</strong><span>${desc}</span></button>`).join("")}
   </div></section>`).join("");
}

function allHistoricalSeasons(){return recordSeasonsIncludingCurrent().filter(Boolean)}
function allPlayerCareerRows(){
 const map=new Map();
 allHistoricalSeasons().forEach(season=>seasonAthleteEventStats(season).forEach(x=>{
   let r=map.get(x.p.id);
   if(!r){r={p:x.p,seasons:[],points:0,starts:0,wins:0,top4:0,eventKeys:new Set()};map.set(x.p.id,r)}
   r.p=x.p;r.seasons.push({season,stat:x});r.points+=x.points;r.starts+=x.starts;r.wins+=x.wins;r.top4+=x.top4;
   x.events.forEach(e=>r.eventKeys.add(e.key));
 }));
 return [...map.values()];
}
function seasonMvpIds(season){
 return new Set(["boy","girl"].map(g=>topSeasonAthlete(season,g)?.p?.id).filter(Boolean));
}
function allMvpIds(){let ids=new Set();allHistoricalSeasons().forEach(s=>seasonMvpIds(s).forEach(id=>ids.add(id)));return ids}
function seasonFreshmanWinners(season){return ["boy","girl"].map(g=>freshmanOfTheYear(season,g)).filter(Boolean)}
function athleteSeasonRows(){
 return allHistoricalSeasons().flatMap(season=>seasonAthleteEventStats(season).map(stat=>({season,stat,p:stat.p})));
}
function playerCareerSnapshots(id){
 let out=[];
 allHistoricalSeasons().forEach(season=>["boy","girl"].forEach(g=>territories.forEach(t=>{
   let p=season.rosters?.[g]?.[t]?.find(x=>x.id===Number(id));
   if(p)out.push({season,g,t,p});
 })));
 return out.sort((a,b)=>a.season.year-b.season.year);
}
function fmtFrivPlayer(p){return `${playerLinkHTML(p)}<div class="small">${teamLinkHTML(p.territory)}</div>`}
function makeFrivTable(columns,rows){
 return `<div class="friv-table-wrap"><table class="friv-table"><thead><tr>${columns.map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>
 ${rows.map((r,i)=>`<tr><td>${i+1}</td>${r.map(v=>`<td>${v??"—"}</td>`).join("")}</tr>`).join("")}
 </tbody></table></div>`;
}
function sortDesc(rows,fn){return [...rows].sort((a,b)=>fn(b)-fn(a))}
function rankScores(obj){return Object.entries(obj||{}).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))}
function eventProgramRows(key){
 let map=new Map();
 territories.forEach(t=>map.set(t,{t,points:0,titles:0}));
 allHistoricalSeasons().forEach(season=>["boy","girl"].forEach(g=>territories.forEach(t=>{
   let place=season.placements?.[g]?.[t]?.[matrixKeyForLineup(key)];
   let r=map.get(t);r.points+=placementPoints(key,place);if(String(place)==="1")r.titles++;
 })));
 return [...map.values()];
}
function teamAllTimePoints(){
 let map=new Map(territories.map(t=>[t,{t,boys:0,girls:0,combined:0,titles:0}]));
 allHistoricalSeasons().forEach(s=>territories.forEach(t=>{
   let r=map.get(t);r.boys+=s.scores?.boys?.[t]||0;r.girls+=s.scores?.girls?.[t]||0;r.combined+=s.scores?.combined?.[t]||0;
   if(s.champions?.combined===t)r.titles++;
 }));
 return [...map.values()];
}
function frivolityControlsHTML(key){
 if(["bestPrograms","worstPrograms","eventTitles"].includes(key))return `<label>Event <select id="frivEventSelect">${lineupEvents.map(([k,n])=>`<option value="${k}">${n}</option>`).join("")}</select></label>`;
 if(["highestAttribute","lowestAttributePoints"].includes(key))return `<label>Attribute <select id="frivAttrSelect">${attrs.map(a=>`<option value="${a}">${a}</option>`).join("")}</select></label>`;
 if(key==="dynasties")return `<label>Window <select id="frivWindowSelect"><option value="5">5 years</option><option value="10">10 years</option></select></label>`;
 return "";
}
const frivolityControlState={};
function renderFrivolityDetail(key){
 const meta=FRIVOLITIES.find(x=>x[3]===key);if(!meta)return;
 const prior=frivolityControlState[key]||{};
 // Capture a just-changed control BEFORE rebuilding its markup.
 if($("frivEventSelect"))prior.event=$("frivEventSelect").value;
 if($("frivAttrSelect"))prior.attr=$("frivAttrSelect").value;
 if($("frivWindowSelect"))prior.window=$("frivWindowSelect").value;
 frivolityControlState[key]=prior;

 $("frivolityTitle").textContent=meta[1];$("frivolityDescription").textContent=meta[2];
 $("frivolityControls").innerHTML=frivolityControlsHTML(key);
 if(prior.event&&$("frivEventSelect"))$("frivEventSelect").value=prior.event;
 if(prior.attr&&$("frivAttrSelect"))$("frivAttrSelect").value=prior.attr;
 if(prior.window&&$("frivWindowSelect"))$("frivWindowSelect").value=prior.window;

 const box=$("frivolityContent"),careers=allPlayerCareerRows(),seasonRows=athleteSeasonRows(),mvpIds=allMvpIds(),seasons=allHistoricalSeasons();
 let html="",rows=[];
 const playerCols=["#","Athlete","Career Pts","Starts","Wins","Top 4"];
 if(key==="noMvp"||key==="noEventWin"||key==="pointsNoWin"||key==="winsNoMvp"||key==="mostStarts"||key==="mostWins"||key==="mostTop4"||key==="specialists"||key==="oneYear"){
   let r=careers.filter(x=>{
     if(key==="noMvp"||key==="winsNoMvp")return !mvpIds.has(x.p.id);
     if(key==="noEventWin"||key==="pointsNoWin")return x.wins===0;
     if(key==="specialists")return x.eventKeys.size<=2;
     if(key==="oneYear"){
       const firstGameYear=Math.min(...allHistoricalSeasons().map(s=>Number(s.year)).filter(Number.isFinite));
       const appearedInOpeningSeason=x.seasons.some(y=>Number(y.season?.year)===firstGameYear);
       return x.seasons.length===1&&!appearedInOpeningSeason;
     }
     return true;
   });
   let field=key==="mostStarts"?"starts":key==="mostWins"||key==="winsNoMvp"?"wins":key==="mostTop4"?"top4":"points";
   r.sort((a,b)=>b[field]-a[field]||b.points-a.points);
   html=makeFrivTable(playerCols,r.slice(0,100).map(x=>[fmtFrivPlayer(x.p),x.points,x.starts,x.wins,x.top4]));
 }else if(["freshmen","seniorSeasons","sophSeasons","juniorSeasons"].includes(key)){
   let age={freshmen:15,sophSeasons:16,juniorSeasons:17,seniorSeasons:18}[key];
   let r=seasonRows.filter(x=>x.p.age===age).sort((a,b)=>b.stat.points-a.stat.points||b.stat.wins-a.stat.wins||b.stat.top4-a.stat.top4);
   html=makeFrivTable(["#","Athlete","Year","OVR","Pts","Wins","Top 4","Starts"],r.slice(0,100).map(x=>[fmtFrivPlayer(x.p),seasonLinkHTML(x.season.year),x.p.overall,x.stat.points,x.stat.wins,x.stat.top4,x.stat.starts]));
 }else if(key==="singleProg"){
   careers.forEach(c=>{let snaps=playerCareerSnapshots(c.p.id);for(let i=1;i<snaps.length;i++)rows.push({p:snaps[i].p,from:snaps[i-1],to:snaps[i],delta:snaps[i].p.overall-snaps[i-1].p.overall})});
   rows.sort((a,b)=>b.delta-a.delta);
   html=makeFrivTable(["#","Athlete","From","To","OVR Change"],rows.slice(0,100).map(x=>[fmtFrivPlayer(x.p),`${seasonLinkHTML(x.from.season.year)} · ${x.from.p.overall}`,`${seasonLinkHTML(x.to.season.year)} · ${x.to.p.overall}`,signedChange(x.delta)]));
 }else if(key==="careerProg"||key==="ovrDeclines"){
   careers.forEach(c=>{let snaps=playerCareerSnapshots(c.p.id);if(snaps.length<2)return;let first=snaps[0],senior=[...snaps].reverse().find(x=>x.p.age===18)||snaps[snaps.length-1];let peak=Math.max(...snaps.map(x=>x.p.overall)),lowAfter=Math.min(...snaps.slice(snaps.findIndex(x=>x.p.overall===peak)).map(x=>x.p.overall));rows.push({p:senior.p,first,senior,gain:senior.p.overall-first.p.overall,decline:peak-lowAfter})});
   rows.sort((a,b)=>key==="careerProg"?b.gain-a.gain:b.decline-a.decline);
   html=makeFrivTable(["#","Athlete","First OVR","Senior/Final OVR",key==="careerProg"?"Career Gain":"Largest Decline"],rows.slice(0,100).map(x=>[fmtFrivPlayer(x.p),x.first.p.overall,x.senior.p.overall,key==="careerProg"?signedChange(x.gain):-x.decline]));
 }else if(key==="busts"){
   let r=careers.map(c=>{let first=playerCareerSnapshots(c.p.id).find(x=>x.p.age===15);return first?{...c,firstOvr:first.p.overall,bust:(first.p.overall*2)-(c.points*2+c.starts+c.wins*6)}:null}).filter(Boolean).sort((a,b)=>b.bust-a.bust||b.firstOvr-a.firstOvr);
   html=makeFrivTable(["#","Athlete","Age-15 OVR","Career Pts","Starts","Wins"],r.slice(0,100).map(x=>[fmtFrivPlayer(x.p),x.firstOvr,x.points,x.starts,x.wins]));
 }else if(["bestTeams","bestBoys","bestGirls"].includes(key)){
   let field=key==="bestBoys"?"boys":key==="bestGirls"?"girls":"combined";
   seasons.forEach(se=>territories.forEach(t=>rows.push({season:se,t,pts:se.scores?.[field]?.[t]||0})));
   rows.sort((a,b)=>b.pts-a.pts);
   html=makeFrivTable(["#","Delegation","Year","Points"],rows.slice(0,100).map(x=>[teamLinkHTML(x.t),seasonLinkHTML(x.season.year),x.pts]));
 }else if(key==="dominantDelegations"){
   let r=teamAllTimePoints().sort((a,b)=>b.titles-a.titles||b.combined-a.combined);
   html=makeFrivTable(["#","Delegation","Combined Titles","All-Time Pts"],r.map(x=>[teamLinkHTML(x.t),x.titles,x.combined]));
 }else if(key==="titleDroughts"){
   let lastYear=Math.max(...seasons.map(s=>s.year),currentYear),r=territories.map(t=>{let ys=seasons.filter(s=>s.champions?.boys===t||s.champions?.girls===t||s.champions?.combined===t).map(s=>s.year);return{t,last:ys.length?Math.max(...ys):null,drought:ys.length?lastYear-Math.max(...ys):seasons.length}}).sort((a,b)=>b.drought-a.drought);
   html=makeFrivTable(["#","Delegation","Last Title","Drought"],r.map(x=>[teamLinkHTML(x.t),x.last?seasonLinkHTML(x.last):"Never",`${x.drought} season${x.drought===1?"":"s"}`]));
 }else if(key==="noTitle"){
   let r=teamAllTimePoints().filter(x=>x.titles===0).sort((a,b)=>b.combined-a.combined);
   html=makeFrivTable(["#","Delegation","All-Time Combined Pts"],r.map(x=>[teamLinkHTML(x.t),x.combined]));
 }else if(key==="dynasties"){
   let win=Number($("frivWindowSelect")?.value||5),r=[];
   territories.forEach(t=>{for(let i=0;i<seasons.length;i++){let chunk=seasons.filter(s=>s.year>=seasons[i].year&&s.year<seasons[i].year+win),titles=chunk.filter(s=>s.champions?.combined===t).length;if(chunk.length)r.push({t,start:seasons[i].year,end:seasons[i].year+win-1,titles})}});
   r.sort((a,b)=>b.titles-a.titles);
   html=makeFrivTable(["#","Delegation","Window","Combined Titles"],r.slice(0,100).map(x=>[teamLinkHTML(x.t),`${seasonLinkHTML(x.start)}–${x.end}`,x.titles]));
 }else if(key==="bestHometowns"){
   let r=buildBestHometownsRecords();
   html=makeFrivTable(["#","Hometown","Pts","Wins","Top 4","Starts","Athletes"],r.slice(0,100).map(x=>[hometownLinkHTML(x.hometown,x.territory,`${x.hometown}, ${x.territory}`),x.points,x.wins,x.top4,x.starts,x.athletes]));
 }else if(key==="youngestMvp"){
   seasons.forEach(se=>["boy","girl"].forEach(g=>{let x=topSeasonAthlete(se,g);if(x)rows.push({season:se,x})}));
   rows.sort((a,b)=>a.x.p.age-b.x.p.age||b.x.points-a.x.points);
   html=makeFrivTable(["#","Athlete","Age","Year","Pts"],rows.slice(0,100).map(r=>[fmtFrivPlayer(r.x.p),r.x.p.age,seasonLinkHTML(r.season.year),r.x.points]));
 }else if(key==="youngestWinner"){
   seasonRows.forEach(x=>x.stat.events.filter(e=>e.place===1).forEach(e=>rows.push({p:x.p,season:x.season,event:e})));
   rows.sort((a,b)=>a.p.age-b.p.age||a.season.year-b.season.year);
   html=makeFrivTable(["#","Athlete","Age","Year","Event"],rows.slice(0,100).map(r=>[fmtFrivPlayer(r.p),r.p.age,seasonLinkHTML(r.season.year),r.event.label]));
 }else if(key==="balancedAthletes"||key==="lopsidedAthletes"){
   let seen=new Map();allHistoricalSeasons().forEach(se=>["boy","girl"].forEach(g=>territories.forEach(t=>(se.rosters?.[g]?.[t]||[]).forEach(p=>seen.set(`${p.id}-${se.year}`,{p,se})))));
   rows=[...seen.values()].map(x=>{let vals=attrs.map(a=>x.p.attrs?.[a]??0),spread=Math.max(...vals)-Math.min(...vals);return{...x,spread}}).sort((a,b)=>key==="balancedAthletes"?a.spread-b.spread:b.spread-a.spread);
   html=makeFrivTable(["#","Athlete","Year","OVR","Attribute Spread"],rows.slice(0,100).map(x=>[fmtFrivPlayer(x.p),seasonLinkHTML(x.se.year),x.p.overall,x.spread]));
 }else if(key==="highestAttribute"||key==="lowestAttributePoints"){
   let attr=$("frivAttrSelect")?.value||attrs[0];
   if(key==="highestAttribute"){
     seasons.forEach(se=>["boy","girl"].forEach(g=>territories.forEach(t=>(se.rosters?.[g]?.[t]||[]).forEach(p=>rows.push({p,se,val:p.attrs?.[attr]??0})))));
     rows.sort((a,b)=>b.val-a.val);
   }else{
     seasonRows.filter(x=>x.stat.points>0).forEach(x=>rows.push({p:x.p,se:x.season,val:x.p.attrs?.[attr]??0,points:x.stat.points}));
     rows.sort((a,b)=>a.val-b.val||b.points-a.points);
   }
   html=makeFrivTable(["#","Athlete","Year",attr,key==="lowestAttributePoints"?"Pts":null].filter(Boolean),rows.slice(0,100).map(x=>[fmtFrivPlayer(x.p),seasonLinkHTML(x.se.year),x.val,...(key==="lowestAttributePoints"?[x.points]:[])]));
 }else if(key==="prospectClasses"){
   let careerMap=new Map(careers.map(c=>[c.p.id,c]));
   seasons.forEach(se=>territories.forEach(t=>{let freshmen=[...(se.rosters?.boy?.[t]||[]),...(se.rosters?.girl?.[t]||[])].filter(p=>p.age===15);if(!freshmen.length)return;rows.push({season:se,t,count:freshmen.length,points:freshmen.reduce((z,p)=>z+(careerMap.get(p.id)?.points||0),0),wins:freshmen.reduce((z,p)=>z+(careerMap.get(p.id)?.wins||0),0)})}));
   rows.sort((a,b)=>b.points-a.points||b.wins-a.wins);
   html=makeFrivTable(["#","Delegation","Class","Athletes","Career Pts","Career Wins"],rows.slice(0,100).map(x=>[teamLinkHTML(x.t),seasonLinkHTML(x.season.year),x.count,x.points,x.wins]));
 }else if(["bestPrograms","worstPrograms","eventTitles"].includes(key)){
   let event=$("frivEventSelect")?.value||lineupEvents[0][0],r=eventProgramRows(event);
   r.sort((a,b)=>key==="worstPrograms"?a.points-b.points:key==="eventTitles"?b.titles-a.titles:b.points-a.points);
   html=makeFrivTable(["#","Delegation","All-Time Pts","Titles"],r.map(x=>[teamLinkHTML(x.t),x.points,x.titles]));
 }else if(key==="balancedTeams"||key==="genderGap"){
   let r=teamAllTimePoints().map(x=>({...x,gap:Math.abs(x.boys-x.girls)})).sort((a,b)=>key==="balancedTeams"?a.gap-b.gap:b.gap-a.gap);
   html=makeFrivTable(["#","Delegation","Boys Pts","Girls Pts","Gap"],r.map(x=>[teamLinkHTML(x.t),x.boys,x.girls,x.gap]));
 }else if(["blowouts","competitiveSeasons","dominantSeasons","bestRunnerUps","worstChampion"].includes(key)){
   if(key==="bestRunnerUps"){
     seasons.forEach(se=>rankScores(se.scores.combined).slice(1,3).forEach(([t,p],i)=>rows.push({se,t,p,place:i+2})));
     rows.sort((a,b)=>b.p-a.p);
     html=makeFrivTable(["#","Delegation","Year","Finish","Pts"],rows.slice(0,100).map(x=>[teamLinkHTML(x.t),seasonLinkHTML(x.se.year),x.place,x.p]));
   }else{
     seasons.forEach(se=>{let r=rankScores(se.scores.combined),margin=(r[0]?.[1]||0)-(r[1]?.[1]||0),spread10=(r[0]?.[1]||0)-(r[9]?.[1]||0);rows.push({se,winner:r[0]?.[0],score:r[0]?.[1]||0,margin,spread10})});
     rows.sort((a,b)=>key==="worstChampion"?a.score-b.score:key==="competitiveSeasons"?a.spread10-b.spread10:key==="dominantSeasons"?b.spread10-a.spread10:b.margin-a.margin);
     html=makeFrivTable(["#","Year","Champion",key==="worstChampion"?"Winning Pts":key==="blowouts"?"Margin":"1st–10th Spread"],rows.map(x=>[seasonLinkHTML(x.se.year),teamLinkHTML(x.winner),key==="worstChampion"?x.score:key==="blowouts"?x.margin:x.spread10]));
   }
 }else if(key==="teamMvps"||key==="teamFreshmen"||key==="doubleAwardSeasons"){
   let map=new Map(territories.map(t=>[t,{t,count:0,athletes:new Set()}]));
   seasons.forEach(se=>{
     let mvps=["boy","girl"].map(g=>topSeasonAthlete(se,g)).filter(Boolean);
     let frosh=seasonFreshmanWinners(se);
     if(key==="teamMvps")mvps.forEach(x=>{let r=map.get(x.team);r.count++;r.athletes.add(x.p.id)});
     if(key==="teamFreshmen")frosh.forEach(x=>{let r=map.get(x.team);r.count++;r.athletes.add(x.p.id)});
     if(key==="doubleAwardSeasons"){
       territories.forEach(t=>{let b=[topSeasonAthlete(se,"boy"),freshmanOfTheYear(se,"boy")].filter(Boolean).some(x=>x.team===t),gg=[topSeasonAthlete(se,"girl"),freshmanOfTheYear(se,"girl")].filter(Boolean).some(x=>x.team===t);if(b&&gg)map.get(t).count++});
     }
   });
   let r=[...map.values()].sort((a,b)=>b.count-a.count);
   html=makeFrivTable(["#","Delegation",key==="doubleAwardSeasons"?"Seasons":"Awards","Different Athletes"],r.map(x=>[teamLinkHTML(x.t),x.count,x.athletes.size]));
 }else if(key==="leastGenderChampion"){
   seasons.forEach(se=>{let t=se.champions?.combined;if(!t)return;let bp=se.scores?.boys?.[t]||0,gp=se.scores?.girls?.[t]||0;rows.push({se,t,bp,gp,least:Math.min(bp,gp),gender:bp<=gp?"Boys":"Girls"})});
   rows.sort((a,b)=>a.least-b.least);
   html=makeFrivTable(["#","Champion","Year","Boys Pts","Girls Pts","Lower Side"],rows.map(x=>[teamLinkHTML(x.t),seasonLinkHTML(x.se.year),x.bp,x.gp,`${x.gender}: ${x.least}`]));
 }
 box.innerHTML=html||`<p class="small">Not enough dynasty history yet for this leaderboard.</p>`;
 renderPlayerFaces(box);
 ["frivEventSelect","frivAttrSelect","frivWindowSelect"].forEach(id=>{
   let el=$(id);if(!el)return;
   el.onchange=()=>{
     const state=frivolityControlState[key]||(frivolityControlState[key]={});
     if(id==="frivEventSelect")state.event=el.value;
     if(id==="frivAttrSelect")state.attr=el.value;
     if(id==="frivWindowSelect")state.window=el.value;
     renderFrivolityDetail(key);
   };
 });
}
function openFrivolity(key){
 pushAppView();
 $("frivolityModal").classList.remove("hidden");
 $("frivolityModal").dataset.frivKey=key;
 renderFrivolityDetail(key);
}

function renderHistoryScreen(){
 populateHistorySelectors();
 let val=$("historySeasonSelect").value||"current";
 let season=val==="current"?liveSeasonSnapshot():(careerHistory.find(s=>String(s.year)===String(val))||careerHistory[careerHistory.length-1]);
 let box=$("historySeasonSummary");
 if(!season){box.innerHTML='<p>No seasons available yet.</p>';if($("historyEventChampions"))$("historyEventChampions").innerHTML=""}
 else{
   $("historySeasonSelect").value=season.current?"current":season.year;
   const title=season.current?"Current Leaders":"Champions";
   box.innerHTML=`<div class="history-champs">
     <div class="history-champ"><span class="small">Boys ${title}</span><h3>${teamLinkHTML(season.champions.boys)}</h3></div>
     <div class="history-champ"><span class="small">Girls ${title}</span><h3>${teamLinkHTML(season.champions.girls)}</h3></div>
     <div class="history-champ"><span class="small">Combined ${title}</span><h3>${teamLinkHTML(season.champions.combined)}</h3></div>
   </div>${season.current?`<div class="selected-banner"><strong>${currentYear} live:</strong> standings, athlete points and event results update after every completed event.</div>`:""}
   <div class="history-standings-grid"><div><h3>Boys Top 10</h3><div id="histB"></div></div><div><h3>Girls Top 10</h3><div id="histG"></div></div><div><h3>Combined Top 10</h3><div id="histC"></div></div></div>`;
   [["histB",season.scores.boys],["histG",season.scores.girls],["histC",season.scores.combined]].forEach(([id,obj])=>Object.entries(obj).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,10).forEach(([t,p],i)=>{let d=document.createElement("div");d.className="standrow";d.innerHTML=`<span>${i+1}</span><span>${teamLinkHTML(t)}</span><strong>${p}</strong>`;$(id).appendChild(d)}));
   let champBox=$("historyEventChampions");
   if(champBox){
     champBox.innerHTML=`<div class="row spread wrap history-event-champions-head"><div><h3>${season.year} Event Champions — Boys & Girls</h3><p class="small">Wrestling lists separate Lightweight and Heavyweight champions.</p></div></div>${eventWinnersTableHTML(season)}`;
     renderPlayerFaces(champBox);
   }
 }
 let rec=buildRecordData();renderRecordRows("recordPlayerPoints",rec.playerPts,"");renderRecordRows("recordTeamPoints",rec.teamPts,"");renderBestHometowns();renderAllTimeParticipation();renderEventWinRecords();renderFrivolitiesDirectory();updateBackButtons();
}
function renderCalendar(){let c=$("calendar");c.innerHTML="";let map={"100m Sprint":events.hundred,"Sandbag Carry":events.sandbag,"200m Freestyle":events.swim,"Mixed Doubles Tennis":events.tennis,"Team Sports Day":events.teamsports,"Wrestling":events.wrestling,"Archery":events.archery,"1 Mile":events.mile,"Strength Gauntlet":events.strength,"Obstacle Course":events.obstacle};let unlock={"100m Sprint":true,"Sandbag Carry":events.hundred.complete,"200m Freestyle":events.sandbag.complete,"Mixed Doubles Tennis":events.swim.complete,"Team Sports Day":events.tennis.complete,"Wrestling":events.teamsports.complete,"Archery":events.wrestling.complete,"1 Mile":events.archery.complete,"Strength Gauntlet":events.mile.complete,"Obstacle Course":events.strength.complete};eventNames.forEach((name,i)=>{let ev=map[name],state=ev.complete?"Complete":ev.started?"In Progress":unlock[name]?"Upcoming":"Locked";let d=document.createElement("div");d.className="eventcard";d.innerHTML=`<strong>${i+1}. ${name}</strong><span class="state">${state}</span>`;c.appendChild(d)})}
function renderStandings(target,obj,gender=null){
 let full=Object.entries(obj).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])),box=$(target);box.innerHTML="";
 const add=([t,p],rank)=>{
   let d=document.createElement("div");d.className="standrow"+(t===$("territorySelect").value?" user-highlight":"");
   d.innerHTML=`<span>${rank}</span><span>${teamLinkHTML(t)}</span><strong>${p}</strong>`;box.appendChild(d);
 };
 full.slice(0,10).forEach((row,i)=>add(row,i+1));
 let userT=$("territorySelect").value,idx=full.findIndex(([t])=>t===userT);
 if(idx>=10){let sep=document.createElement("div");sep.className="user-standing-separator";box.appendChild(sep);add(full[idx],idx+1)}
}

function setupComplete(){
 const bp=selectedProspect("boy")!==null,gp=selectedProspect("girl")!==null;
 return bp&&gp&&boys.filter(a=>a.onRoster).length===4&&girls.filter(a=>a.onRoster).length===4;
}

function dynastyDelegationLocked(){
 return currentYear>2026||careerHistory.length>0||gamesUiStarted||competitionStarted();
}
function updateDelegationLockUi(){
 const sel=$("territorySelect"),btn=$("newSeasonBtn");
 if(!sel||!btn)return;
 const locked=dynastyDelegationLocked();
 sel.disabled=locked;
 btn.disabled=locked;
 btn.classList.toggle("hidden",locked);
}
function updateSetupState(){
 const btn=$("beginGamesBtn"),title=$("setupReadyTitle"),text=$("setupReadyText"),wrap=$("setupCompletion");
 if(!btn)return;
 const bp=selectedProspect("boy")!==null,gp=selectedProspect("girl")!==null;
 const boyCount=boys.filter(a=>a.onRoster).length,girlCount=girls.filter(a=>a.onRoster).length;
 const complete=bp&&gp&&boyCount===4&&girlCount===4;
 btn.disabled=!complete;wrap?.classList.toggle("ready",complete);
 if(complete){
   title.textContent="Delegation ready";
   text.textContent="Both four-athlete rosters are complete. You will choose entrants before each event.";
 }else{
   let missing=[];if(!bp)missing.push("boy prospect");if(!gp)missing.push("girl prospect");
   title.textContent="Complete your delegation setup";
   text.textContent=`Still needed: ${missing.join(", ")}. · Boys roster ${boyCount}/4 · Girls roster ${girlCount}/4`;
 }
}
function applyScreenState(){
 const setup=$("setupScreen"),games=$("gamesScreen"),tab=$("rosterSideTab"),league=$("leagueScreen"),history=$("historyScreen");
 if(!setup||!games||!tab)return;
 league?.classList.add("hidden");history?.classList.add("hidden");

 if(dynastyView==="league"){
   setup.classList.add("hidden");games.classList.add("hidden");tab.classList.add("hidden");league?.classList.remove("hidden");renderDynastyNav();return;
 }
 if(dynastyView==="history"){
   setup.classList.add("hidden");games.classList.add("hidden");tab.classList.add("hidden");history?.classList.remove("hidden");renderDynastyNav();return;
 }

 if(!gamesUiStarted){
   setup.classList.remove("hidden","review-mode");games.classList.add("hidden");tab.classList.toggle("hidden",careerHistory.length===0);rosterReviewOpen=false;renderDynastyNav();return;
 }
 tab.classList.remove("hidden");
 if(rosterReviewOpen){
   setup.classList.remove("hidden");setup.classList.add("review-mode");games.classList.add("hidden");tab.textContent="Back to Games";
 }else{
   setup.classList.add("hidden");setup.classList.remove("review-mode");games.classList.remove("hidden");tab.textContent="View Roster";
 }
 renderDynastyNav();
}
function beginGamesUi(){
 updateSetupState();
 if(!setupComplete())return;
 finalizeUserRoster();
 eventLineups={boy:{},girl:{}};
 aiEventLineups={boy:{},girl:{}};
 gamesUiStarted=true;
 rosterReviewOpen=false;dynastyView="games";
 applyScreenState();saveDynasty();window.scrollTo({top:0,behavior:"smooth"});
}
function toggleRosterView(){
 if(!gamesUiStarted)return;
 rosterReviewOpen=!rosterReviewOpen;applyScreenState();window.scrollTo({top:0,behavior:"smooth"});
}
function updateEventButtons(){
 const ready=gamesUiStarted&&setupComplete();
 const controls=[
   ["start100Btn",events.hundred,"100m",true],
   ["startSandbagBtn",events.sandbag,"Sandbag",events.hundred.complete],
   ["startSwimBtn",events.swim,"200m Freestyle",events.sandbag.complete],
   ["startTennisBtn",events.tennis,"Mixed Tennis",events.swim.complete],
   ["startTeamSportsBtn",events.teamsports,"Team Sports",events.tennis.complete],
   ["startWrestlingBtn",events.wrestling,"Wrestling",events.teamsports.complete],
   ["startArcheryBtn",events.archery,"Archery",events.wrestling.complete],
   ["startMileBtn",events.mile,"Mile",events.archery.complete],
   ["startStrengthBtn",events.strength,"Strength",events.mile.complete],
   ["startObstacleBtn",events.obstacle,"Obstacle Course",events.strength.complete]
 ];
 controls.forEach(([id,ev,label,unlocked])=>{
   const el=$(id);
   if(!el)return;
   el.disabled=!ready || !!ev.started || !unlocked;
   el.textContent=ev.started
     ? (ev.complete?`${label} Complete`:`${label} In Progress`)
     : (!unlocked?`${label} Locked`:`Start ${label}`);
 });
 const status=$("eventStatus");
 if(status)status.textContent=ready
   ?"Complete events in order to unlock the next one."
    :"Complete your four-athlete rosters first.";
}

function setEventView(view){
 currentView=view;
 document.querySelectorAll(".event-section").forEach(s=>s.classList.add("hidden"));
 const section=$(view+"Section");
 if(section)section.classList.remove("hidden");
 document.querySelectorAll(".viewbtn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
 updateQuickSimButton();
}

function currentEventMeta(){
 const map={
   hundred:{ev:events.hundred,label:"100m Sprint",start:start100,kind:"dual",run:run100},
   sandbag:{ev:events.sandbag,label:"Sandbag Carry",start:startSandbag,kind:"dual",run:runSandbag},
   swim:{ev:events.swim,label:"200m Freestyle",start:startSwim,kind:"dual",run:runSwim},
   tennis:{ev:events.tennis,label:"Mixed Doubles Tennis",start:startTennis,kind:"mixed",run:runTennis},
   teamsports:{ev:events.teamsports,label:"Team Sports Day",start:startTeamSports,kind:"dual",run:runTeamSports},
   wrestling:{ev:events.wrestling,label:"Wrestling",start:startWrestling,kind:"dual",run:runWrestling},
   archery:{ev:events.archery,label:"Archery",start:startArchery,kind:"dual",run:runArchery},
   mile:{ev:events.mile,label:"1 Mile",start:startMile,kind:"dual",run:runMile},
   strength:{ev:events.strength,label:"Strength Gauntlet",start:startStrength,kind:"dual",run:runStrength},
   obstacle:{ev:events.obstacle,label:"Obstacle Course",start:startObstacle,kind:"dual",run:runObstacle}
 };
 return map[currentView]||null;
}

function eventUnlocked(view){
 const unlock={
   hundred:true,
   sandbag:events.hundred.complete,
   swim:events.sandbag.complete,
   tennis:events.swim.complete,
   teamsports:events.tennis.complete,
   wrestling:events.teamsports.complete,
   archery:events.wrestling.complete,
   mile:events.archery.complete,
   strength:events.mile.complete,
   obstacle:events.strength.complete
 };
 return !!unlock[view];
}

function updateQuickSimButton(){
 const b=$("quickSimBtn");
 if(!b)return;
 const meta=currentEventMeta();
 const ready=gamesUiStarted&&setupComplete();
 const unlocked=eventUnlocked(currentView);
 const complete=meta?.ev?.complete;
 b.disabled=!meta||!ready||!unlocked||complete;
 b.textContent=complete
   ? `${meta.label} Complete`
   : `Quick Sim ${meta?meta.label:"Current Event"}`;
}

function quickSimCurrentEvent(){
 const meta=currentEventMeta();
 if(!meta||!gamesUiStarted||!setupComplete()||!eventUnlocked(currentView)||meta.ev.complete)return;

 // Start the event if needed.
 if(!meta.ev.started){
   meta.start();
   if(!meta.ev.started)return; // entry selector is waiting for the user
 }

 let guard=0;
 const maxSteps=200;

 if(meta.kind==="mixed"){
   while(!meta.ev.complete && guard++<maxSteps){
     meta.run();
   }
 }else{
   while(!meta.ev.complete && guard++<maxSteps){
     if(meta.ev.boy && !meta.ev.boy.done)meta.run("boy");
     if(meta.ev.girl && !meta.ev.girl.done)meta.run("girl");
   }
 }

 if(guard>=maxSteps && !meta.ev.complete){
   console.error("Quick Sim stopped by safety guard:", currentView);
 }
 updateEventButtons();
 updateQuickSimButton();
 setEventView(currentView);
}

function renderAll(){if(animationCapture)return;updateEventButtons();updateQuickSimButton();updateSetupState();updateDelegationLockUi();$("seasonStatus").textContent=`Season ${currentYear}`;populateHistorySelectors();renderPools();renderCalendar();renderStandings("boysStandings",scores.boys,"boy");renderStandings("girlsStandings",scores.girls,"girl");renderStandings("combinedStandings",scores.combined);renderRaceChrono("boy",events.hundred,"100","boys100Chrono");renderRaceChrono("girl",events.hundred,"100","girls100Chrono");renderWrestling("boy","boysWrestlingChrono");renderWrestling("girl","girlsWrestlingChrono");renderRaceChrono("boy",events.mile,"mile","boysMileChrono");renderRaceChrono("girl",events.mile,"mile","girlsMileChrono");renderSandbag("boy","boysSandbagChrono");renderSandbag("girl","girlsSandbagChrono");renderTeamSports("boy","boysTeamSportsChrono");renderTeamSports("girl","girlsTeamSportsChrono");renderRaceChrono("boy",events.swim,"swim","boysSwimChrono");renderRaceChrono("girl",events.swim,"swim","girlsSwimChrono");renderStrength("boy","boysStrengthChrono");renderStrength("girl","girlsStrengthChrono");renderTennis();renderArchery("boy","boysArcheryChrono");renderArchery("girl","girlsArcheryChrono");renderObstacle("boy","boysObstacleChrono");renderObstacle("girl","girlsObstacleChrono");renderFinalResults();setEventView(currentView);applyScreenState();injectWatchButtons();}

function tableSortValue(cell){
 const raw=(cell?.innerText||cell?.textContent||"").trim();
 if(!raw||raw==="—"||raw==="X"||raw==="N/A")return{missing:true,type:"text",value:""};

 // Common clock/time formats: M:SS, M:SS.s, H:MM:SS
 if(/^\d{1,2}:\d{2}(?::\d{2})?(?:\.\d+)?$/.test(raw)){
   const parts=raw.split(":").map(Number);
   let seconds=parts.length===3?parts[0]*3600+parts[1]*60+parts[2]:parts[0]*60+parts[1];
   return{missing:false,type:"number",value:seconds};
 }

 // Percentages.
 if(/^-?[\d,.]+(?:\.\d+)?%$/.test(raw)){
   return{missing:false,type:"number",value:parseFloat(raw.replace(/,/g,""))};
 }

 // Pure numbers / rankings / values whose first visible token is numeric,
 // including strings like "65 (B)", "18 lb", and "#12".
 let normalized=raw.replace(/^#/,"").replace(/,/g,"");
 let num=normalized.match(/^-?\d+(?:\.\d+)?/);
 if(num)return{missing:false,type:"number",value:Number(num[0])};

 return{missing:false,type:"text",value:raw.toLocaleLowerCase()};
}
function sortTableByHeader(th){
 const table=th.closest("table");
 if(!table||!table.tBodies?.length)return;
 const headerRow=th.parentElement;
 const col=[...headerRow.cells].indexOf(th);
 if(col<0)return;

 const prev=table.dataset.sortColumn;
 const nextDir=(prev===String(col)&&table.dataset.sortDirection==="asc")?"desc":"asc";
 table.dataset.sortColumn=String(col);
 table.dataset.sortDirection=nextDir;

 // Clear old indicators, then mark the active column.
 table.querySelectorAll("thead th").forEach(x=>{
   x.classList.remove("table-sort-asc","table-sort-desc");
   x.removeAttribute("aria-sort");
 });
 th.classList.add(nextDir==="asc"?"table-sort-asc":"table-sort-desc");
 th.setAttribute("aria-sort",nextDir==="asc"?"ascending":"descending");

 [...table.tBodies].forEach(tbody=>{
   const rows=[...tbody.rows];
   rows.sort((ra,rb)=>{
     const a=tableSortValue(ra.cells[col]),b=tableSortValue(rb.cells[col]);

     // Unknown / X / em dash always remain at the bottom.
     if(a.missing!==b.missing)return a.missing?1:-1;
     if(a.missing&&b.missing)return 0;

     let cmp=0;
     if(a.type==="number"&&b.type==="number")cmp=a.value-b.value;
     else cmp=String(a.value).localeCompare(String(b.value),undefined,{numeric:true,sensitivity:"base"});
     return nextDir==="asc"?cmp:-cmp;
   });
   rows.forEach(row=>tbody.appendChild(row));
 });
}
document.addEventListener("click",e=>{
 const th=e.target.closest?.("table thead th");
 if(!th||th.hasAttribute("data-no-sort"))return;
 // Ignore complex spanning headers; their child columns remain independently sortable.
 if((th.colSpan||1)>1)return;
 sortTableByHeader(th);
});

document.addEventListener("keydown",e=>{
 if(e.key!=="Escape")return;
 if(!$("watchModal")?.classList.contains("hidden")){finishWatch();return}
 const open=["playerModal","hometownModal","frivolityModal","saveManagerModal"].map(id=>$(id)).find(el=>el&&!el.classList.contains("hidden"));
 if(open)open.classList.add("hidden");
});
$("newSeasonBtn").onclick=newSeason;
$("advanceSeasonBtn").onclick=beginAwardsFlow;
$("offseasonReviewNext").onclick=()=>{if(offseasonReviewState){offseasonReviewState.step++;renderOffseasonReviewStep()}};
$("closeFrivolityModal").onclick=()=>$("frivolityModal").classList.add("hidden");
$("frivolityBackBtn").onclick=restoreAppView;
document.querySelectorAll(".pageBackBtn,.modalBackBtn").forEach(b=>b.onclick=restoreAppView);
document.addEventListener("click",e=>{let f=e.target.closest?.("[data-friv-key]");if(f){e.preventDefault();openFrivolity(f.dataset.frivKey)}});
$("closeHometownModal").onclick=()=>$("hometownModal").classList.add("hidden");
$("hometownModal").addEventListener("click",e=>{if(e.target.id==="hometownModal")$("hometownModal").classList.add("hidden")});
$("saveCareerBtn").onclick=()=>{
 if(activeCareerSlot&&getCareerSlot(activeCareerSlot))saveDynasty(true);
 else openSaveManager();
};
$("closeSaveManager").onclick=()=>$("saveManagerModal").classList.add("hidden");
$("closeImprovementModal").onclick=()=>{$("improvementModal").classList.add("hidden");window.scrollTo({top:0,behavior:"smooth"})};
$("continueAfterImprovements").onclick=()=>{$("improvementModal").classList.add("hidden");window.scrollTo({top:0,behavior:"smooth"})};

$("saveManagerModal").addEventListener("click",e=>{if(e.target.id==="saveManagerModal")$("saveManagerModal").classList.add("hidden")});
function closePlayerInfoModal(){
 $("playerModal")?.classList.add("hidden");
 hidePlayerHover();
}
$("closePlayerModal").onclick=e=>{e.preventDefault();e.stopPropagation();closePlayerInfoModal()};
$("playerModal").addEventListener("click",e=>{if(e.target.id==="playerModal")$("playerModal").classList.add("hidden")});
document.addEventListener("click",e=>{
 const close=e.target.closest?.(".modal-close");
 if(close){
   e.preventDefault();e.stopPropagation();
   const modal=close.closest(".player-modal");
   if(modal)modal.classList.add("hidden");
   return;
 }
},true);

document.addEventListener("click",e=>{
 let h=e.target.closest?.("[data-hometown]");
 if(h){e.preventDefault();e.stopPropagation();openHometownHistory(h.dataset.hometown,h.dataset.hometownTerritory||null);return}
 let p=e.target.closest?.("[data-player-id]");
 if(p){e.preventDefault();e.stopPropagation();openPlayerCareer(p.dataset.playerId)}
});
const playerFaceObserver=new MutationObserver(mutations=>{mutations.forEach(m=>m.addedNodes.forEach(node=>{if(node.nodeType===1)renderPlayerFaces(node)}))});
playerFaceObserver.observe(document.body,{childList:true,subtree:true});
repairPlayerFaces();
renderPlayerFaces(document);
document.addEventListener("mouseover",e=>{
 let t=e.target.closest?.("[data-team-name]");
 if(t)showTeamHover(t,e);
});
document.addEventListener("mousemove",e=>{
 if(!$("teamHoverCard")?.classList.contains("hidden"))positionTeamHover(e);
});
document.addEventListener("mouseout",e=>{
 let t=e.target.closest?.("[data-team-name]");
 if(t&&!t.contains(e.relatedTarget))hideTeamHover();
});
document.addEventListener("scroll",hideTeamHover,true);

document.addEventListener("mouseover",e=>{
 let p=e.target.closest?.("[data-player-id]");
 if(p)showPlayerHover(p,e);
});
document.addEventListener("mousemove",e=>{
 if(!$("playerHoverCard")?.classList.contains("hidden"))positionPlayerHover(e);
});
document.addEventListener("mouseout",e=>{
 let p=e.target.closest?.("[data-player-id]");
 if(p&&!p.contains(e.relatedTarget))hidePlayerHover();
});
document.addEventListener("scroll",hidePlayerHover,true);

document.addEventListener("click",e=>{
 let t=e.target.closest?.("[data-team-name]");
 if(t){hideTeamHover();e.preventDefault();e.stopPropagation();openTeamHistory(t.dataset.teamName);}
});
document.addEventListener("click",e=>{
 let y=e.target.closest?.("[data-season-year]");
 if(y){e.preventDefault();e.stopPropagation();openSeasonHistory(Number(y.dataset.seasonYear));}
});
document.querySelectorAll(".dynasty-nav-btn").forEach(b=>b.onclick=()=>{
 const view=b.dataset.dynastyView;
 if(view==="league"){
   populateHistorySelectors();
   const userT=$("territorySelect").value;
   if(userT&&$("leagueTeamSelect"))$("leagueTeamSelect").value=userT;
 }
 showDynastyView(view);
});
$("leagueSeasonSelect").onchange=renderLeagueRosterBrowser;$("leagueTeamSelect").onchange=renderLeagueRosterBrowser;
document.querySelectorAll(".league-gender-tab").forEach(b=>b.onclick=()=>{leagueGender=b.dataset.gender;document.querySelectorAll(".league-gender-tab").forEach(x=>x.classList.toggle("active",x===b));renderLeagueRosterBrowser()});
$("historySeasonSelect").onchange=renderHistoryScreen;$("recordsEventSelect").onchange=renderEventWinRecords;
document.querySelectorAll(".alltime-tab").forEach(b=>b.onclick=()=>{
 allTimeRecordTab=b.dataset.alltimeTab;
 document.querySelectorAll(".alltime-tab").forEach(x=>x.classList.toggle("active",x===b));
 renderAllTimeParticipation();
});
$("beginGamesBtn").onclick=beginGamesUi;
$("confirmEventEntryBtn").onclick=confirmEventEntry;
$("closeEventEntryModal").onclick=cancelEventEntry;

$("rosterSideTab").onclick=toggleRosterView;
$("territorySelect").onchange=()=>{
 if(dynastyDelegationLocked()){
   alert("Your delegation is locked for this dynasty.");
   return;
 }
 newSeason();
};
$("start100Btn").onclick=start100;$("startWrestlingBtn").onclick=startWrestling;$("startMileBtn").onclick=startMile;$("startSandbagBtn").onclick=startSandbag;$("startTeamSportsBtn").onclick=startTeamSports;$("startSwimBtn").onclick=startSwim;$("startStrengthBtn").onclick=startStrength;$("startTennisBtn").onclick=startTennis;$("startArcheryBtn").onclick=startArchery;$("startObstacleBtn").onclick=startObstacle;$("quickSimBtn").onclick=quickSimCurrentEvent;
document.querySelectorAll(".tab[data-tab]").forEach(b=>b.onclick=()=>setSetupGenderTab(b.dataset.tab==="girls"?"girl":"boy"));


document.querySelectorAll(".viewbtn").forEach(b=>{
 b.addEventListener("click",()=>{
   setEventView(b.dataset.view);
 });
});
// Always open to the title/menu screen. The player explicitly chooses a new or saved career.

document.addEventListener("click",e=>{
 const b=e.target.closest?.("[data-greenbush-link]");
 if(!b)return;
 const destinations={
   games:"",
   reddit:"",
   x:""
 };
 const url=destinations[b.dataset.greenbushLink];
 if(url){window.open(url,"_blank","noopener,noreferrer");return}
 showSaveToast?.("Greenbush Games link coming soon");
});

renderOpeningScreen();
