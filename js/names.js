/*
 * names.js
 *
 * Contains arrays with all Pokemon names in multiple languages. Also includes functionality
 * to remove accents from non-English Pokemon names for easier comparison.
 */

var pokemonAccentMap = {
    'ß':'s',
    'Ü':'u',
    'ü':'u',
    'Ï':'i',
    'ï':'i',
    'Ê':'e',
    'ê':'e',
    'é':'e',
    'È':'e',
    'è':'e',
}

// Based on https://github.com/aristus/accent-folding/blob/master/accent-fold.js

function removeAccents (s) {
if (!s) { return ''; }
    var ret = '';
    for (var i=0; i<s.length; i++) {
        ret += pokemonAccentMap[s.charAt(i)] || s.charAt(i);
    }
    return ret;
};

var englishPokemon = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr.", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect"];

var dutchPokemon = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr.", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect"];

var frenchPokemon = [ "bulbizarre", "herbizarre", "florizarre", "salamèche", "reptincel", "dracaufeu", "carapuce", "carabaffe", "tortank", "chenipan", "chrysacier", "papilusion", "aspicot", "coconfort", "dardargnan", "roucool", "roucoups", "roucarnage", "rattata", "rattatac", "piafabec", "rapasdepic", "abo", "arbok", "pikachu", "raichu", "sabelette", "sablaireau", "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "mélofée", "mélodelfe", "goupix", "feunard", "rondoudou", "grodoudou", "nosferapti", "nosferalto", "mystherbe", "ortide", "rafflesia", "paras", "parasect", "mimitoss", "aéromite", "taupiqueur", "triopikeur", "miaouss", "persian", "psykokwak", "akwakwak", "férosinge", "colossinge", "caninos", "arcanin", "ptitard", "têtarte", "tartard", "abra", "kadabra", "alakazam", "machoc", "machopeur", "mackogneur", "chétiflor", "boustiflor", "empiflor", "tentacool", "tentacruel", "racaillou", "gravalanch", "grolem", "ponyta", "galopa", "ramoloss", "flagadoss", "magnéti", "magnéton", "canarticho", "doduo", "dodrio", "otaria", "lamantine", "tadmorv", "grotadmorv", "kokiyas", "crustabri", "fantominus", "spectrum", "ectoplasma", "onix", "soporifik", "hypnomade", "krabby", "krabboss", "voltorbe", "électrode", "noeunoeuf", "noadkoko", "osselait", "ossatueur", "kicklee", "tygnon", "excelangue", "smogo", "smogogo", "rhinocorne", "rhinoféros", "leveinard", "saquedeneu", "kangourex", "hypotrempe", "hypocéan", "poissirène", "poissoroy", "stari", "staross", "m. mime", "insécateur", "lippoutou", "élektek", "magmar", "scarabrute", "tauros", "magicarpe", "léviator", "lokhlass", "métamorph", "évoli", "aquali", "voltali", "pyroli", "porygon", "amonita", "amonistar", "kabuto", "kabutops", "ptéra", "ronflex", "artikodin", "électhor", "sulfura", "minidraco", "draco", "dracolosse", "mewtwo", "mew", "germignon", "macronium", "méganium", "héricendre", "feurisson", "typhlosion", "kaiminus", "crocrodil", "aligatueur", "fouinette", "fouinar", "hoothoot", "noarfang", "coxy", "coxyclaque", "mimigal", "migalos", "nostenfer", "loupio", "lanturn", "pichu", "mélo", "toudoudou", "togepi", "togetic", "natu", "xatu", "wattouat", "lainergie", "pharamp", "joliflor", "marill", "azumarill", "simularbre", "tarpaud", "granivol", "floravol", "cotovol", "capumain", "tournegrin", "héliatronc", "yanma", "axoloto", "maraiste", "mentali", "noctali", "cornèbre", "roigada", "feuforêve", "zarbi", "qulbutoké", "girafarig", "pomdepik", "foretress", "insolourdo", "scorplane", "steelix", "snubbull", "granbull", "qwilfish", "cizayox", "caratroc", "scarhino", "farfuret", "teddiursa", "ursaring", "limagma", "volcaropod", "marcacrin", "cochignon", "corayon", "rémoraid", "octillery", "cadoizo", "démanta", "airmure", "malosse", "démolosse", "hyporoi", "phanpy", "donphan", "porygon2", "cerfrousse", "queulorior", "debugant", "kapoera", "lippouti", "élekid", "magby", "écrémeuh", "leuphorie", "raikou", "entei", "suicune", "embrylex", "ymphect", "tyranocif", "lugia", "ho-oh", "celebi", "arcko", "massko", "jungko", "poussifeu", "galifeu", "braségali", "gobou", "flobio", "laggron", "medhyèna", "grahyèna", "zigzaton", "linéon", "chenipotte", "armulys", "charmillon", "blindalys", "papinox", "nénupiot", "lombre", "ludicolo", "grainipiot", "pifeuil", "tengalice", "nirondelle", "hélédelle", "goélise", "bekipan", "tarsal", "kirlia", "gardevoir", "arakdo", "maskadra", "balignon", "chapignon", "parecool", "vigoroth", "monaflèmit", "ningale", "ninjask", "munja", "chuchmur", "ramboum", "brouhabam", "makuhita", "hariyama", "azurill", "tarinor", "skitty", "delcatty", "ténéfix", "mysdibule", "galekid", "galegon", "galeking", "méditikka", "charmina", "dynavolt", "élecsprint", "posipi", "négapi", "muciole", "lumivole", "rosélia", "gloupti", "avaltout", "carvanha", "sharpedo", "wailmer", "wailord", "chamallot", "camérupt", "chartor", "spoink", "groret", "spinda", "kraknoix", "vibraninf", "libégon", "cacnea", "cacturne", "tylton", "altaria", "mangriff", "séviper", "séléroc", "solaroc", "barloche", "barbicha", "écrapince", "colhomard", "balbuto", "kaorine", "lilia", "vacilys", "anorith", "armaldo", "barpau", "milobellus", "morphéo", "kecleon", "polichombr", "branette", "skelénox", "téraclope", "tropius", "éoko", "absol", "okéoké", "stalgamin", "oniglali", "obalie", "phogleur", "kaimorse", "coquiperl", "serpang", "rosabyss", "relicanth", "lovdisc", "draby", "drackhaus", "drattak", "terhal", "métang", "métalosse", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "tortipouss", "boskara", "torterra", "ouisticram", "chimpenfeu", "simiabraz", "tiplouf", "prinplouf", "pingoléon", "étourmi", "étourvol", "étouraptor", "keunotor", "castorno", "crikzik", "mélokrik", "lixy", "luxio", "luxray", "rozbouton", "roserade", "kranidos", "charkos", "dinoclier", "bastiodon", "cheniti", "cheniselle", "papilord", "apitrini", "apireine", "pachirisu", "mustébouée", "mustéflott", "ceribou", "ceriflor", "sancoki", "tritosor", "capidextre", "baudrive", "grodrive", "laporeille", "lockpin", "magirêve", "corboss", "chaglam", "chaffreux", "korillon", "moufouette", "moufflair", "archéomire", "archéodong", "manzaï", "mime jr.", "ptiravi", "pijako", "spiritomb", "griknot", "carmache", "carchacrok", "goinfrex", "riolu", "lucario", "hippopotas", "hippodocus", "rapion", "drascore", "cradopaud", "coatox", "vortente", "écayon", "luminéon", "babimanta", "blizzi", "blizzaroi", "dimoret", "magnézone", "coudlangue", "rhinastoc", "bouldeneu", "élekable", "maganon", "togekiss", "yanmega", "phyllali", "givrali", "scorvol", "mammochon", "porygon-z", "gallame", "tarinorme", "noctunoir", "momartik", "motisma", "créhelf", "créfollet", "créfadet", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "vipélierre", "lianaja", "majaspic", "gruikui", "grotichon", "roitiflam", "moustillon", "mateloutre", "clamiral", "ratentif", "miradar", "ponchiot", "ponchien", "mastouffe", "chacripan", "léopardus", "feuillajou", "feuiloutan", "flamajou", "flamoutan", "flotajou", "flotoutan", "munna", "mushana", "poichigeon", "colombeau", "déflaisan", "zébibron", "zéblitz", "nodulithe", "géolithe", "gigalithe", "chovsourir", "rhinolove", "rototaupe", "minotaupe", "nanméouïe", "charpenti", "ouvrifier", "bétochef", "tritonde", "batracné", "crapustule", "judokrak", "karaclée", "larveyette", "couverdure", "manternel", "venipatte", "scobolide", "brutapode", "doudouvet", "farfaduvet", "chlorobule", "fragilady", "bargantua", "mascaïman", "escroco", "crocorible", "darumarond", "darumacho", "maracachi", "crabicoque", "crabaraque", "baggiguane", "baggaïd", "cryptéro", "tutafeh", "tutankafer", "carapagos", "mégapagos", "arkéapti", "aéroptéryx", "miamiasme", "miasmax", "zorua", "zoroark", "chinchidou", "pashmilla", "scrutella", "mesmérella", "sidérella", "nucléos", "méios", "symbios", "couaneton", "lakmécygne", "sorbébé", "sorboul", "sorbouboul", "vivaldaim", "haydaim", "emolga", "carabing", "lançargot", "trompignon", "gaulet", "viskuse", "moyade", "mamanbo", "statitik", "mygavolt", "grindur", "noacier", "tic", "clic", "cliticlic", "anchwatt", "lampéroie", "ohmassacre", "lewsor", "neitram", "funécire", "mélancolux", "lugulabre", "coupenotte", "incisache", "tranchodon", "polarhume", "polagriffe", "hexagel", "escargaume", "limaspeed", "limonde", "kungfouine", "shaofouine", "drakkarmin", "gringolem", "golemastoc", "scalpion", "scalproie", "frison", "furaiglon", "gueriaigle", "vostourno", "vaututrice", "aflamanoir", "fermite", "solochi", "diamat", "trioxhydre", "pyronille", "pyrax", "cobaltium", "terrakium", "viridium", "boréas", "fulguris", "reshiram", "zekrom", "démétéros", "kyurem", "keldeo", "meloetta", "genesect" ];

var germanPokemon = [ "bisasam", "bisaknosp", "bisaflor", "glumanda", "glutexo", "glurak", "schiggy", "schillok", "turtok", "raupy", "safcon", "smettbo", "hornliu", "kokuna", "bibor", "taubsi", "tauboga", "tauboss", "rattfratz", "rattikarl", "habitak", "ibitak", "rettan", "arbok", "pikachu", "raichu", "sandan", "sandamer", "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "piepi", "pixi", "vulpix", "vulnona", "pummeluff", "knuddeluff", "zubat", "golbat", "myrapla", "duflor", "giflor", "paras", "parasek", "bluzuk", "omot", "digda", "digdri", "mauzi", "snobilikat", "enton", "entoron", "menki", "rasaff", "fukano", "arkani", "quapsel", "quaputzi", "quappo", "abra", "kadabra", "simsala", "machollo", "maschock", "machomei", "knofensa", "ultrigaria", "sarzenia", "tentacha", "tentoxa", "kleinstein", "georok", "geowaz", "ponita", "gallopa", "flegmon", "lahmus", "magnetilo", "magneton", "porenta", "dodu", "dodri", "jurob", "jugong", "sleima", "sleimok", "muschas", "austos", "nebulak", "alpollo", "gengar", "onix", "traumato", "hypno", "krabby", "kingler", "voltobal", "lektrobal", "owei", "kokowei", "tragosso", "knogga", "kicklee", "nockchan", "schlurp", "smogon", "smogmog", "rihorn", "rizeros", "chaneira", "tangela", "kangama", "seeper", "seemon", "goldini", "golking", "sterndu", "starmie", "pantimos", "sichlor", "rossana", "elektek", "magmar", "pinsir", "tauros", "karpador", "garados", "lapras", "ditto", "evoli", "aquana", "blitza", "flamara", "porygon", "amonitas", "amoroso", "kabuto", "kabutops", "aerodactyl", "relaxo", "arktos", "zapdos", "lavados", "dratini", "dragonir", "dragoran", "mewtu", "mew", "endivie", "lorblatt", "meganie", "feurigel", "igelavar", "tornupto", "karnimani", "tyracroc", "impergator", "wiesor", "wiesenior", "hoothoot", "noctuh", "ledyba", "ledian", "webarak", "ariados", "iksbat", "lampi", "lanturn", "pichu", "pii", "fluffeluff", "togepi", "togetic", "natu", "xatu", "voltilamm", "waaty", "ampharos", "blubella", "marill", "azumarill", "mogelbaum", "quaxo", "hoppspross", "hubelupf", "papungha", "griffel", "sonnkern", "sonnflora", "yanma", "felino", "morlord", "psiana", "nachtara", "kramurx", "laschoking", "traunfugil", "icognito", "woingenau", "girafarig", "tannza", "forstellka", "dummisel", "skorgla", "stahlos", "snubbull", "granbull", "baldorfish", "scherox", "pottrott", "skaraborn", "sniebel", "teddiursa", "ursaring", "schneckmag", "magcargo", "quiekel", "keifel", "corasonn", "remoraid", "octillery", "botogel", "mantax", "panzaeron", "hunduster", "hundemon", "seedraking", "phanpy", "donphan", "porygon2", "damhirplex", "farbeagle", "rabauz", "kapoera", "kussilla", "elekid", "magby", "miltank", "heiteira", "raikou", "entei", "suicune", "larvitar", "pupitar", "despotar", "lugia", "ho-oh", "celebi", "geckarbor", "reptain", "gewaldro", "flemmli", "jungglut", "lohgock", "hydropi", "moorabbel", "sumpex", "fiffyen", "magnayen", "zigzachs", "geradaks", "waumpel", "schaloko", "papinella", "panekon", "pudox", "loturzel", "lombrero", "kappalores", "samurzel", "blanas", "tengulist", "schwalbini", "schwalboss", "wingull", "pelipper", "trasla", "kirlia", "guardevoir", "gehweiher", "maskeregen", "knilz", "kapilz", "bummelz", "muntier", "letarking", "nincada", "ninjask", "ninjatom", "flurmel", "krakeelo", "krawumms", "makuhita", "hariyama", "azurill", "nasgnet", "eneco", "enekoro", "zobiris", "flunkifer", "stollunior", "stollrak", "stolloss", "meditie", "meditalis", "frizelbliz", "voltenso", "plusle", "minun", "volbeat", "illumise", "roselia", "schluppuck", "schlukwech", "kanivanha", "tohaido", "wailmer", "wailord", "camaub", "camerupt", "qurtel", "spoink", "groink", "pandir", "knacklion", "vibrava", "libelldra", "tuska", "noktuska", "wablu", "altaria", "sengo", "vipitis", "lunastein", "sonnfel", "schmerbe", "welsar", "krebscorps", "krebutack", "puppance", "lepumentas", "liliep", "wielie", "anorith", "armaldo", "barschwa", "milotic", "formeo", "kecleon", "shuppet", "banette", "zwirrlicht", "zwirrklop", "tropius", "palimpalim", "absol", "isso", "schneppke", "firnontor", "seemops", "seejong", "walraisa", "perlu", "aalabyss", "saganabyss", "relicanth", "liebiskus", "kindwurm", "draschel", "brutalanda", "tanhel", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "chelast", "chelcarain", "chelterrar", "panflam", "panpyro", "panferno", "plinfa", "pliprin", "impoleon", "staralili", "staravia", "staraptor", "bidiza", "bidifas", "zirpurze", "zirpeise", "sheinux", "luxio", "luxtra", "knospi", "roserade", "koknodon", "rameidon", "schilterus", "bollterus", "burmy", "burmadame", "moterpel", "wadribie", "honweisel", "pachirisu", "bamelin", "bojelin", "kikugi", "kinoso", "schalellos", "gastrodon", "ambidiffel", "driftlon", "drifzepeli", "haspiror", "schlapor", "traunmagil", "kramshef", "charmian", "shnurgarst", "klingplim", "skunkapuh", "skuntank", "bronzel", "bronzong", "mobai", "pantimimi", "wonneira", "plaudagei", "kryppuk", "kaumalat", "knarksel", "knakrack", "mampfaxo", "riolu", "lucario", "hippopotas", "hippoterus", "pionskora", "piondragi", "glibunkel", "toxiquak", "venuflibis", "finneon", "lumineon", "mantirps", "shnebedeck", "rexblisar", "snibunna", "magnezone", "schlurplek", "rihornior", "tangoloss", "elevoltek", "magbrant", "togekiss", "yanmega", "folipurba", "glaziola", "skorgro", "mamutel", "porygon-z", "galagladi", "voluminas", "zwirrfinst", "frosdedje", "rotom", "selfe", "vesprit", "tobutz", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "serpifeu", "efoserp", "serpiroyal", "floink", "ferkokel", "flambirex", "ottaro", "zwottronin", "admurai", "nagelotz", "kukmarda", "yorkleff", "terribark", "bissbark", "felilou", "kleoparda", "vegimak", "vegichita", "grillmak", "grillchita", "sodamak", "sodachita", "somniam", "somnivora", "dusselgurr", "navitaub", "fasasnob", "elezeba", "zebritz", "kiesling", "sedimantur", "brockoloss", "fleknoil", "fletiamo", "rotomurf", "stalobor", "ohrdoch", "praktibalk", "strepoli", "meistagrif", "schallquap", "mebrana", "branawarz", "jiutesto", "karadonis", "strawickl", "folikon", "matrifol", "toxiped", "rollum", "cerapendra", "waumboll", "elfun", "lilminip", "dressella", "barschuft", "ganovil", "rokkaiman", "rabigator", "flampion", "flampivian", "maracamba", "lithomith", "castellith", "zurrokex", "irokex", "symvolara", "makabaja", "echnatoll", "galapaflos", "karippas", "flapteryx", "aeropteryx", "unratütox", "deponitox", "zorua", "zoroark", "picochilla", "chillabell", "mollimorba", "hypnomorba", "morbitesse", "monozyto", "mitodos", "zytomega", "piccolente", "swaroness", "gelatini", "gelatroppo", "gelatwino", "sesokitz", "kronjuwild", "emolga", "laukaps", "cavalanzas", "tarnpignon", "hutsassa", "quabbel", "apoquallyp", "mamolida", "wattzapf", "voltula", "kastadur", "tentantel", "klikk", "kliklak", "klikdiklak", "zapplardin", "zapplalek", "zapplarang", "pygraulon", "megalon", "lichtel", "laternecto", "skelabra", "milza", "sharfax", "maxax", "petznief", "siberio", "frigometri", "schnuthelm", "hydragil", "flunschlik", "lin-fu", "wie-shu", "shardrago", "golbit", "golgantes", "gladiantri", "caesurio", "bisofank", "geronimatz", "washakwil", "skallyk", "grypheldis", "furnifraß", "fermicula", "kapuno", "duodino", "trikephalo", "ignivor", "ramoth", "kobalium", "terrakium", "viridium", "boreos", "voltolos", "reshiram", "zekrom", "demeteros", "kyurem", "keldeo", "meloetta", "genesect" ];
