const WIKI_DATA = {
            games: [
                {
                    id: "ac1",
                    title: "Assassin's Creed",
                    year: 2007,
                    platforms: ["PlayStation 3", "Xbox 360", "Microsoft Windows", "GeForce NOW"],
                    setting: "Third Crusade, Holy Land (1191 AD)",
                    protagonist: "Altaïr Ibn-La'Ahad",
                    developer: "Ubisoft Montreal",
                    publisher: "Ubisoft",
                    director: "Patrice Désilets",
                    producer: "Jade Raymond",
                    composer: "Jesper Kyd",
                    engine: "Scimitar (later AnvilNext)",
                    genre: "Action-adventure, stealth",
                    mode: "Single-player",
                    description: "The first installment follows Altaïr, a Master Assassin during the Third Crusade. After botching a mission to retrieve an Apple of Eden, he must redeem himself by assassinating nine targets across the Holy Land.",
                    icon: "AC",
                    plot: "In 2012, bartender Desmond Miles is kidnapped by Abstergo Industries and forced into the Animus to relive his ancestor Altaïr's memories. In 1191, Altaïr botches a mission at Solomon's Temple, resulting in his demotion. To regain his rank, he must assassinate nine Templar conspirators. As he eliminates each target, Altaïr uncovers a plot to control the Holy Land using the Apple of Eden. The conspiracy reaches his mentor Al Mualim, who betrays both Assassins and Templars to use the Apple's power. Altaïr defeats Al Mualim and discovers a map showing locations of other Pieces of Eden worldwide.",
                    gameplay: "Open-world action-adventure featuring parkour, social stealth, and counter-based combat. Players explore Jerusalem, Acre, Damascus, and Masyaf, gathering intelligence before assassinations through eavesdropping, interrogation, and pickpocketing. Eagle Vision allows identifying allies, enemies, and targets. The health system represents synchronization between Desmond and Altaïr's memories.",
                    development: "Originally conceived as 'Prince of Persia: Assassin' in 2004, inspired by Hassan-i Sabbah and Vladimir Bartol's novel Alamut. Renamed 'Assassin's Creed' near the 2006 GDC. Development cost $15-20 million over four years with a $10 million marketing budget. The Animus concept arose from DNA memory research. Side quests were added five days before mass production at the CEO's request.",
                    reception: "Received generally favorable reviews (Metacritic: 81/100). Critics praised storytelling, visuals, and originality but criticized repetitive gameplay. Game Informer gave 9.5/10, GameSpot 9/10, IGN 7.5/10. Won multiple E3 2006 awards and AIAS Animation award. Sold 8 million copies by April 2009.",
                    sales: "8 million copies sold worldwide"
                },
                {
                    id: "ac2",
                    title: "Assassin's Creed II",
                    year: 2009,
                    platforms: ["Xbox 360", "PlayStation 3", "Microsoft Windows"],
                    setting: "Renaissance Italy (1476-1499)",
                    protagonist: "Ezio Auditore da Firenze",
                    developer: "Ubisoft Montreal",
                    publisher: "Ubisoft",
                    description: "Follow Ezio's journey from a young Florentine nobleman to a Master Assassin in Renaissance Italy, seeking revenge for his family's betrayal and execution.",
                    icon: "II",
                    plot: "The sequel continues Desmond's story while introducing Ezio Auditore, who witnesses his father and brothers' execution orchestrated by Rodrigo Borgia. Ezio embarks on a decades-long journey of vengeance and discovery across Florence, Venice, and Rome, ultimately confronting Rodrigo, now Pope Alexander VI, in the Vatican Vault.",
                    development: "Built on the foundation of the first game with improved mechanics and reduced repetition.",
                    reception: "Critical and commercial success, improving on every aspect of the original.",
                    release: "November 17, 2009 (US/Canada), November 20, 2009 (Europe)"
                },
                {
                    id: "ac_brotherhood",
                    title: "Assassin's Creed: Brotherhood",
                    year: 2010,
                    platforms: ["Xbox 360", "PlayStation 3", "Microsoft Windows"],
                    setting: "Rome, Renaissance Italy (1500 AD)",
                    protagonist: "Ezio Auditore da Firenze",
                    developer: "Ubisoft Montreal",
                    publisher: "Ubisoft",
                    description: "Ezio travels to Rome to rebuild the Assassin Brotherhood and liberate the city from Borgia family control.",
                    icon: "BH",
                    plot: "Expands Ezio's story as he takes on the Borgia family in Rome.",
                    gameplay: "Introduces the brotherhood recruitment system, allowing players to recruit and train new assassins. Added multiplayer mode."
                },
                {
                    id: "ac_revelations",
                    title: "Assassin's Creed: Revelations",
                    year: 2011,
                    platforms: ["Xbox 360", "PlayStation 3", "Microsoft Windows"],
                    setting: "Constantinople, Ottoman Empire (1511 AD)",
                    protagonist: "Ezio Auditore da Firenze",
                    developer: "Ubisoft Montreal",
                    publisher: "Ubisoft",
                    description: "Ezio travels to Constantinople to uncover Altaïr's secrets, concluding both Ezio and Altaïr's stories.",
                    icon: "REV"
                },
                {
                    id: "ac3",
                    title: "Assassin's Creed III",
                    year: 2012,
                    platforms: ["Xbox 360", "PlayStation 3", "Wii U", "Microsoft Windows"],
                    setting: "American Revolution (1754-1783)",
                    protagonist: "Ratonhnhaké:ton (Connor)",
                    developer: "Ubisoft Montreal",
                    publisher: "Ubisoft",
                    description: "Experience the American Revolution through Connor, a Native American assassin fighting for freedom and justice.",
                    icon: "III",
                    plot: "Born to a Mohawk mother and British Templar father, Connor is trained as an Assassin to fight the Templars who threaten his village. He becomes deeply involved in the Revolutionary War.",
                    gameplay: "Introduced naval combat and concluded Desmond's modern-day story."
                },
                {
                    id: "ac_black_flag",
                    title: "Assassin's Creed IV: Black Flag",
                    year: 2013,
                    platforms: ["Xbox 360", "Xbox One", "PlayStation 3", "PlayStation 4", "Wii U", "Microsoft Windows"],
                    setting: "Caribbean, Golden Age of Piracy (1715 AD)",
                    protagonist: "Edward Kenway",
                    developer: "Ubisoft Montreal",
                    publisher: "Ubisoft",
                    description: "Sail the Caribbean as Edward Kenway, a pirate captain who becomes entangled with the Assassin Brotherhood during the Golden Age of Piracy.",
                    icon: "IV",
                    plot: "Edward Kenway, grandfather of Connor, commands his ship the Jackdaw across the Caribbean, seeking fortune while getting caught between Assassins and Templars.",
                    gameplay: "Expanded naval combat and exploration becamecentral to the experience."
},
{
id: "ac_unity",
title: "Assassin's Creed Unity",
year: 2014,
platforms: ["Xbox One", "PlayStation 4", "Microsoft Windows"],
setting: "French Revolution, Paris (1789-1794)",
protagonist: "Arno Dorian",
developer: "Ubisoft Montreal",
publisher: "Ubisoft",
description: "Navigate the chaos of the French Revolution as Arno Dorian seeks redemption in revolutionary Paris.",
icon: "UN",
plot: "Arno joins the Assassins to uncover the conspiracy behind his foster father's death. His relationship with Élise, a Templar, adds complexity to his mission.",
gameplay: "First game designed for PS4/Xbox One. Features cooperative multiplayer missions."
},
{
id: "ac_syndicate",
title: "Assassin's Creed Syndicate",
year: 2015,
platforms: ["Xbox One", "PlayStation 4", "Microsoft Windows"],
setting: "Victorian London (1868)",
protagonist: "Jacob and Evie Frye",
developer: "Ubisoft Quebec",
publisher: "Ubisoft",
description: "Control twin assassins Jacob and Evie Frye as they liberate London from Templar control during the Industrial Revolution.",
icon: "SY",
plot: "Twins form the Rooks gang to take over London's criminal underworld from Templar control.",
gameplay: "Dual protagonists with different playstyles - Jacob focuses on direct combat, Evie on stealth."
},
{
id: "ac_origins",
title: "Assassin's Creed Origins",
year: 2017,
platforms: ["Xbox One", "PlayStation 4", "Microsoft Windows"],
setting: "Ancient Egypt, Ptolemaic Period (49 BCE)",
protagonist: "Bayek of Siwa",
developer: "Ubisoft Montreal",
publisher: "Ubisoft",
description: "Witness the origin of the Assassin Brotherhood in Ancient Egypt with Bayek, a Medjay protector seeking vengeance.",
icon: "OR",
plot: "Bayek's quest for revenge against those who killed his son leads him to found the Hidden Ones with his wife Aya - the precursor to the Assassin Brotherhood.",
gameplay: "Major franchise reboot with RPG mechanics, leveling system, and open-world exploration."
},
{
id: "ac_odyssey",
title: "Assassin's Creed Odyssey",
year: 2018,
platforms: ["Xbox One", "PlayStation 4", "Microsoft Windows", "Nintendo Switch", "Google Stadia"],
setting: "Ancient Greece, Peloponnesian War (431 BCE)",
protagonist: "Kassandra or Alexios",
developer: "Ubisoft Quebec",
publisher: "Ubisoft",
description: "Choose your hero and explore Ancient Greece during the Peloponnesian War, uncovering family secrets and mythological mysteries.",
icon: "OD",
plot: "Player chooses between siblings Kassandra and Alexios, descendants of Leonidas with Isu bloodline. Journey uncovers family secrets and battles the Cult of Kosmos.",
gameplay: "Expanded RPG elements with dialogue choices, romance options, and multiple endings."
},
{
id: "ac_valhalla",
title: "Assassin's Creed Valhalla",
year: 2020,
platforms: ["Xbox One", "Xbox Series X/S", "PlayStation 4", "PlayStation 5", "Microsoft Windows", "Google Stadia"],
setting: "Viking Age, England and Norway (873 AD)",
protagonist: "Eivor Varinsdottir",
developer: "Ubisoft Montreal",
publisher: "Ubisoft",
description: "Lead your Viking clan from Norway to England as Eivor, forging alliances and building a settlement during the Dark Ages.",
icon: "VH",
plot: "Eivor leads the Raven Clan from Norway to 9th century England, establishing a settlement and building alliances. Connection to Odin and Isu civilization plays crucial role.",
gameplay: "Settlement building, raids, and deepest Isu lore yet. Player choice in gender and story decisions."
}
],
characters: [
{
id: "char_altair",
name: "Altaïr Ibn-La'Ahad",
gameId: "ac1",
role: "Protagonist",
era: "Third Crusade (1191 AD)",
affiliation: "Assassin Brotherhood",
voiceActor: "Philip Shahbaz",
description: "A Master Assassin during the Third Crusade, known for his exceptional skills. After a mission failure at Solomon's Temple, he must redeem himself through nine assassinations.",
icon: "AL",
biography: "Altaïr starts as an arrogant Master Assassin who is demoted after botching the retrieval of an Apple of Eden. Through his journey eliminating nine Templar conspirators, he becomes wise and humble, eventually uncovering a conspiracy reaching his mentor Al Mualim. His name means 'bird of prey' in Arabic. After defeating Al Mualim, he discovers a map showing locations of Pieces of Eden worldwide. His design borrowed elements from G.I. Joe's Storm Shadow.",
traits: "Initially arrogant, becomes wise and humble; exceptional combat and parkour skills; master of social stealth"
},
{
id: "char_desmond",
name: "Desmond Miles",
gameId: "ac1",
role: "Modern Day Protagonist",
era: "Modern Day (2012)",
affiliation: "Assassin Brotherhood (descendant)",
voiceActor: "Nolan North",
description: "A bartender kidnapped by Abstergo Industries to relive his ancestors' memories through the Animus.",
icon: "DM",
biography: "Desmond is the modern-day protagonist whose genetic memories connect all historical storylines. Kidnapped by Abstergo (modern Templars) and forced into the Animus. His journey spans multiple games, ultimately making pivotal choices affecting the world. Lucy Stillman assists him as an undercover Assassin. His story concludes in Assassin's Creed III.",
traits: "Ordinary person thrust into extraordinary circumstances; gains Assassin skills through Bleeding Effect"
},
{
id: "char_al_mualim",
name: "Al Mualim",
gameId: "ac1",
role: "Antagonist",
era: "Third Crusade (1191 AD)",
affiliation: "Assassin Brotherhood (Leader), Templar Order (secretly)",
voiceActor: "Peter Renaday",
description: "The leader of the Assassin Brotherhood and Altaïr's mentor, who harbors a dark secret about his true intentions.",
icon: "AM",
biography: "Al Mualim leads the Assassins from Masyaf. Based on historical figure Rashid ad-Din Sinan, nicknamed 'The Old Man of the Mountain.' His betrayal of both Assassins and Templars to control the Apple of Eden forces Altaïr to make difficult choices. He uses the Apple to enthrall Masyaf's population, planning to end all conflict by imposing order through force. Altaïr ultimately defeats him in the Masyaf gardens.",
traits: "Wise mentor façade hiding manipulative ambitions; master strategist"
},
{
id: "char_malik",
name: "Malik Al-Sayf",
gameId: "ac1",
role: "Ally",
era: "Third Crusade (1191 AD)",
affiliation: "Assassin Brotherhood",
voiceActor: "Haaz Sleiman",
description: "Fellow Assassin who loses his arm and brother during the failed Solomon's Temple mission, initially resents Altaïr but later reconciles.",
icon: "MA",
biography: "Malik accompanies Altaïr on the mission to Solomon's Temple. Though his brother Kadar dies and Malik loses his left arm due to Altaïr's arrogance, Malik manages to secure the Apple of Eden. Initially bitter toward Altaïr, he gradually makes amends as Altaïr becomes more humble. Malik helps Altaïr defeat Al Mualim's mind-controlled followers at the climax.",
traits: "Bitter but honorable; skilled despite disability; eventually forgiving"
},
{
id: "char_ezio",
name: "Ezio Auditore da Firenze",
gameId: "ac2",
role: "Protagonist",
era: "Renaissance Italy (1459-1524)",
affiliation: "Assassin Brotherhood",
description: "A Florentine nobleman who becomes a legendary Master Assassin after his family's execution, seeking revenge and uncovering ancient secrets.",
icon: "EZ",
biography: "Ezio's story spans over 40 years across three games (AC2, Brotherhood, Revelations). Born into nobility, his life changes when Rodrigo Borgia orders his father and brothers executed. From a carefree youth to a wise mentor, he becomes one of the most celebrated Assassins in history. Wields ancient Isu technology, defeats the Borgias, and travels to Constantinople to uncover Altaïr's legacy. His story represents the complete arc of an Assassin.",
traits: "Charismatic, determined, evolves from vengeful youth to wise mentor"
},
{
id: "char_leonardo",
name: "Leonardo da Vinci",
gameId: "ac2",
role: "Ally",
era: "Renaissance Italy (1452-1519)",
affiliation: "Independent (Assassin ally)",
description: "The famous Renaissance artist and inventor who becomes Ezio's closest friend, creating weapons and decoding ancient mysteries.",
icon: "LV",
biography: "Historical genius Leonardo da Vinci serves as Ezio's loyal friend and technological support. Decodes Codex pages left by Altaïr, providing blueprints for Assassin equipment upgrades including the Hidden Blade, Poison Blade, and Flying Machine. His artistic and scientific genius aids the Assassins while he pursues his own endeavors. Appears in AC2, Brotherhood, and briefly mentioned in later games.",
traits: "Brilliant inventor, loyal friend, curious and open-minded"
},
{
id: "char_rodrigo",
name: "Rodrigo Borgia (Pope Alexander VI)",
gameId: "ac2",
role: "Antagonist",
era: "Renaissance Italy (1431-1503)",
affiliation: "Templar Order (Grand Master)",
description: "The Grand Master of the Italian Templars who becomes Pope Alexander VI, seeking to control humanity with the Apple of Eden.",
icon: "RB",
biography: "Rodrigo Borgia orchestrates the execution of Ezio's family to eliminate threats to Templar plans. Rises to become Pope Alexander VI, using his religious authority to access the Vatican Vault seeking Isu artifacts. His ambition and corruption make him Ezio's primary nemesis throughout AC2 and Brotherhood. Ezio ultimately defeats him but spares his life, choosing to break the cycle of revenge.",
traits: "Ruthlessly ambitious, corrupt, manipulative politician"
},
{
id: "char_connor",
name: "Ratonhnhaké:ton (Connor)",
gameId: "ac3",
role: "Protagonist",
era: "American Revolution (1756-1824)",
affiliation: "Assassin Brotherhood",
description: "A Native American assassin fighting for freedom during the American Revolution, seeking to protect his people and ideals.",
icon: "CO",
biography: "Born to Mohawk mother Kaniehtí:io and British Templar Haytham Kenway. His village is burned by Templars when he's young. Trained by Assassin Achilles Davenport, Connor becomes deeply involved in the Revolutionary War, interacting with historical figures like George Washington and Benjamin Franklin. Fights to protect his people's land while caught between two sides of the war. His story is tragic as he achieves military victory but fails to save his people from American expansion.",
traits: "Stoic, determined, idealistic, skilled hunter and warrior"
},
{
id: "char_edward",
name: "Edward Kenway",
gameId: "ac_black_flag",
role: "Protagonist",
era: "Golden Age of Piracy (1693-1735)",
affiliation: "Pirates, later Assassin Brotherhood",
description: "A Welsh pirate captain who inadvertently becomes involved with the Assassins while seeking fortune in the Caribbean.",
icon: "EK",
biography: "Grandfather of Connor Kenway and father of Haytham Kenway. Initially a privateer seeking wealth, Edward becomes embroiled in the Assassin-Templar conflict accidentally. Commands the Jackdaw across the Caribbean during the Golden Age of Piracy. His journey from selfish pirate to dedicated Assassin forms the heart of his story. Witnesses the end of the pirate era and eventually settles in London, though his family's connection to both Assassins and Templars proves tragic.",
traits: "Initially selfish and greedy, becomes honorable; exceptional naval captain"
},
{
id: "char_haytham",
name: "Haytham Kenway",
gameId: "ac3",
role: "Antagonist",
era: "American Revolution (1725-1781)",
affiliation: "Templar Order (Grand Master)",
description: "Edward Kenway's son and Connor's father, Grand Master of the Colonial Templars.",
icon: "HK",
biography: "Edward Kenway's son who becomes a Templar Grand Master. Players initially play as Haytham in AC3's opening, believing him to be an Assassin. The revelation of his Templar allegiance is a major twist. Father to Connor through a relationship with Mohawk woman Kaniehtí:io. Represents a nuanced antagonist with understandable motivations, creating complex father-son conflict with Connor.",
traits: "Sophisticated, intelligent, charismatic, pragmatic"
},
{
id: "char_arno",
name: "Arno Victor Dorian",
gameId: "ac_unity",
role: "Protagonist",
era: "French Revolution (1768-unknown)",
affiliation: "Assassin Brotherhood",
description: "A French nobleman turned Assassin seeking redemption during the French Revolution after failing to prevent his adoptive father's murder.",
icon: "AR",
biography: "Adopted by Templar François de la Serre after his Assassin father's murder. When François is killed, Arno joins the Assassins to uncover the conspiracy. His relationship with Élise de la Serre, a Templar and his adoptive sister/love interest, adds emotional complexity. Navigates the chaos of Revolutionary Paris, caught between personal vendetta and greater conflict. His story explores themes of redemption and the cost of revenge.",
traits: "Guilt-ridden, determined, skilled swordsman and free-runner"
},
{
id: "char_jacob",
name: "Jacob Frye",
gameId: "ac_syndicate",
role: "Protagonist",
era: "Victorian Era (1847-unknown)",
affiliation: "Assassin Brotherhood",
description: "A brash and impulsive assassin who leads the Rooks gang, fighting to liberate Victorian London from Templar control.",
icon: "JF",
biography: "The more aggressive Frye twin, preferring direct action over subtlety. Forms the Rooks street gang to take over London's underworld from Templar-controlled Blighters. Often clashes with sister Evie's more strategic approach. Despite his rough edges and impulsive nature, proves effective at dismantling Templar operations. His character arc involves learning to balance action with planning.",
traits: "Brash, impulsive, charismatic, direct fighter"
},
{
id: "char_evie",
name: "Evie Frye",
gameId: "ac_syndicate",
role: "Protagonist",
era: "Victorian Era (1847-unknown)",
affiliation: "Assassin Brotherhood",
description: "Jacob's twin sister, a tactical and stealth-focused assassin dedicated to finding Pieces of Eden in Victorian London.",
icon: "EF",
biography: "The more intellectual Frye twin, focused on stealth and finding Isu artifacts. Works in the shadows while Jacob takes the spotlight. Equally capable in combat despite preferring avoidance. Her storyline focuses on finding the Shroud of Eden and includes a romance with fellow Assassin Henry Green. Proves that strategic thinking is as valuable as direct action.",
traits: "Intelligent, stealthy, strategic, capable fighter when necessary"
},
{
id: "char_bayek",
name: "Bayek of Siwa",
gameId: "ac_origins",
role: "Protagonist",
era: "Ptolemaic Egypt (85 BCE-unknown)",
affiliation: "Medjay, co-founder of Hidden Ones",
description: "A Medjay protector who becomes one of the founders of the Hidden Ones, the precursor to the Assassin Brotherhood.",
icon: "BA",
biography: "Last of the Medjay, protectors of Egypt. His quest for revenge against the Order of the Ancients (proto-Templars) who killed his son Khemu leads him to found the Hidden Ones with wife Aya. Embodies the ideals that define the Assassin Brotherhood: protecting the innocent and fighting tyranny. His story shows the birth of the Creed and the personal cost of founding a movement that will span millennia.",
traits: "Honorable, protective, skilled warrior, devoted father and husband"
},
{
id: "char_aya",
name: "Aya of Alexandria (Amunet)",
gameId: "ac_origins",
role: "Deuteragonist",
era: "Ptolemaic Egypt (85 BCE-unknown)",
affiliation: "Co-founder of Hidden Ones",
description: "Bayek's wife who co-founds the Hidden Ones and becomes the legendary Assassin Amunet.",
icon: "AY",
biography: "Bayek's wife and partner in founding the Hidden Ones. Scholar and skilled warrior. Becomes more focused on the mission than personal life, leading to emotional distance from Bayek. As Amunet, she assassinates Cleopatra and becomes legendary. Player controls her in key naval and assassination missions. Her character represents sacrifice for greater cause.",
traits: "Intelligent, determined, skilled in combat and politics"
},
{
id: "char_kassandra",
name: "Kassandra",
gameId: "ac_odyssey",
role: "Protagonist (canonical)",
era: "Classical Greece (458 BCE-2018 CE)",
affiliation: "Independent, later Hidden Ones ally",
description: "A Spartan mercenary with Isu bloodline who becomes a legendary hero during the Peloponnesian War.",
icon: "KA",
biography: "Granddaughter of King Leonidas I, descendant of Isu with strong bloodline connection. Wields the Spear of Leonidas, a Piece of Eden. Cast from Sparta as a child, becomes a mercenary. Journey uncovers family secrets and battles Cult of Kosmos (proto-Templars). Player choices determine her personality and relationships. Gains immortality through Isu artifact, living until modern day where she passes the Staff of Hermes Trismegistus to Layla Hassan. Canonical protagonist over Alexios.",
traits: "Witty, confident, adaptable, exceptional warrior"
},
{
id: "char_eivor",
name: "Eivor Varinsdottir",
gameId: "ac_valhalla",
role: "Protagonist",
era: "Viking Age (847 CE-unknown)",
affiliation: "Raven Clan, Hidden Ones ally",
description: "A fierce Viking warrior who leads the Raven Clan to England, forging alliances and uncovering ancient mysteries.",
icon: "EI",
biography: "Leads Raven Clan from Norway to England, establishing settlement of Ravensthorpe. Player chooses gender (canonically female). Experiences visions of Isu life as Odin due to reincarnation connection. Allies with Hidden Ones while maintaining Viking identity. Story deeply explores Isu civilization and their role in human history. Builds alliances across England's kingdoms during Saxon-Viking conflicts. Connection to Odin/Isu creates internal struggle between duty to clan and larger cosmic implications.",
traits: "Fierce warrior, natural leader, loyal to clan, wrestling with destiny"
}
],
timeline: [
{
year: 2007,
event: "Assassin's Creed released",
description: "The first game debuts, introducing Altaïr and Desmond. Sold 8 million copies and established the franchise. Won multiple E3 2006 awards.",
type: "game"
},
{
year: 2009,
event: "Assassin's Creed II released",
description: "Introduces Ezio Auditore. The sequel improved on every aspect and became a critical and commercial success.",
type: "game"
},
{
year: 2010,
event: "Brotherhood released",
description: "Expands Ezio's story in Rome. Introduces multiplayer and the brotherhood recruitment system.",
type: "game"
},
{
year: 2011,
event: "Revelations released",
description: "Concludes Ezio and Altaïr's stories. Ezio travels to Constantinople to uncover Altaïr's secrets.",
type: "game"
},
{
year: 2012,
event: "Assassin's Creed III released",
description: "American Revolution setting introduces Connor and naval combat. Concludes Desmond's modern-day story.",
type: "game"
},
{
year: 2013,
event: "Black Flag released",
description: "Golden Age of Piracy. Edward Kenway's pirate adventure becomes a fan favorite with expanded naval gameplay.",
type: "game"
},
{
year: 2014,
event: "Unity released",
description: "French Revolution, next-gen debut. First game designed for PS4/Xbox One, features cooperative multiplayer.",
type: "game"
},
{
year: 2015,
event: "Syndicate released",
description: "Victorian London. Introduces dual protagonists Jacob and Evie Frye in Industrial Revolution London.",
type: "game"
},
{
year: 2017,
event: "Origins released",
description: "Major franchise reboot with RPG mechanics. Explores the birth of the Assassin Brotherhood in Ancient Egypt.",
type: "game"
},
{
year: 2018,
event: "Odyssey released",
description: "Ancient Greece exploration. Expands RPG mechanics with dialogue choices and multiple endings.",
type: "game"
},
{
year: 2020,
event: "Valhalla released",
description: "Viking Age saga. Eivor's story features settlement building and the deepest Isu lore yet.",
type: "game"
}
],
gameplay: {
animus: {
title: "The Animus",
description: "A machine that reads genetic memories contained within a person's DNA, allowing users to relive their ancestors' experiences in a fully immersive simulation. The technology serves as the narrative framework connecting all games. Health is represented as synchronization between the user and ancestral memories - deviations represent 'desynchronization' rather than death.",
features: ["Time/location travel explanation", "User interface justification", "Memory replay mechanism", "Glitch mechanics"]
},
eagleVision: {
title: "Eagle Vision",
description: "A sixth sense ability inherited from Isu DNA that allows Assassins to distinguish friends from foes and identify important targets. Characters are highlighted in different colors: allies (blue), enemies (red), targets (gold), and neutral parties (white). Later games expanded this into 'Eagle Sense' and drone-like eagle companions.",
features: ["Enemy identification", "Target tracking", "Environmental clues", "Isu heritage manifestation"]
},
socialStealth: {
title: "Social Stealth",
description: "The ability to hide in plain sight by blending with crowds, sitting on benches, or joining groups of scholars. This mechanic distinguishes Assassin's Creed from traditional stealth games. Players use 'low-profile' actions to remain inconspicuous and 'high-profile' actions for direct confrontation or escape.",
features: ["Crowd blending", "Hiding spots (hay carts, benches, crowds)", "Low-profile/high-profile actions", "Alert system"]
},
parkour: {
title: "Parkour & Free-Running",
description: "Fluid movement system allowing characters to climb buildings, leap across rooftops, and navigate environments with acrobatic precision. The parkour system was revolutionary for its time, creating a sense of freedom and verticality in open-world gameplay.",
features: ["Building climbing", "Rooftop traversal", "Leap of faith", "Environmental navigation"]
},
combat: {
title: "Combat Systems",
description: "Combat evolved significantly across the series. Early games featured counter-based systems where timing blocks led to instant kills. Later RPG-focused entries (Origins onward) introduced hitbox-based combat with light/heavy attacks, abilities, and gear-based stats.",
features: ["Counter-based (AC1-Syndicate)", "Hidden Blade assassinations", "Various weapon types", "RPG combat system (Origins-Valhalla)"]
},
synchronization: {
title: "Synchronization",
description: "Represents the accuracy of reliving ancestral memories. Acts as the game's health/death system - losing all synchronization restarts from the last checkpoint. Optional objectives in missions offer higher synchronization percentages, rewarding players who follow the 'true' historical events more closely.",
features: ["Health system", "Optional objectives", "100% completion tracking", "Lore-integrated game mechanics"]
}
},
organizations: {
assassins: {
name: "Assassin Brotherhood (Hidden Ones)",
founding: "Ancient origins, formally founded in 49 BCE (Origins)",
creed: "Nothing is true, everything is permitted",
ideology: "Protection of free will and individual liberty. Oppose tyranny and control. Work from the shadows to serve the light.",
tenets: [
"Stay your blade from the flesh of an innocent",
"Hide in plain sight",
"Never compromise the Brotherhood"
],
notableMembers: ["Altaïr Ibn-La'Ahad", "Ezio Auditore", "Connor Kenway", "Edward Kenway", "Arno Dorian", "Bayek of Siwa"],
headquarters: ["Masyaf (Middle Ages)", "Monteriggioni (Renaissance)", "Davenport Homestead (Colonial)", "Various bureaus"],
description: "Originally the 'Hidden Ones' founded by Bayek and Aya in Ancient Egypt. Inspired by the historical Hashshashin Order of Assassins. Fight to preserve humanity's free will against Templar control. Operate as a decentralized network across the globe throughout history."
},
templars: {
name: "Templar Order (Order of the Ancients)",
founding: "Ancient origins as Order of the Ancients",
ideology: "Peace through order and control. Believe humanity requires guidance and structure. Seek to create a perfect world by eliminating free will.",
modernFront: "Abstergo Industries - pharmaceutical and technology conglomerate",
notableMembers: ["Rodrigo Borgia", "Haytham Kenway", "Al Mualim (secretly)", "Robert de Sablé"],
description: "Inspired by the historical Knights Templar. The Order of the Ancients (proto-Templars) predates the formal Templar organization. In modern times, operate through Abstergo Industries. Seek Pieces of Eden to control humanity and enforce their vision of peace. Despite opposing methods, share Assassins' goal of peace - the conflict stems from whether it should be achieved through freedom or control."
},
isu: {
name: "The Isu (First Civilization, Those Who Came Before)",
era: "Predating humanity (77,000+ years ago)",
description: "Advanced precursor race that created humanity as a servile workforce. Possessed incredible technology that appears magical. Their civilization was destroyed in a cataclysmic event. Created Pieces of Eden to control humans. Some Isu DNA mixed with human bloodlines, granting abilities like Eagle Vision. Heavily featured in later games, especially Valhalla.",
artifacts: ["Pieces of Eden", "Apples of Eden", "Shroud", "Staff of Hermes Trismegistus", "Spear of Leonidas"],
notableIsu: ["Juno", "Minerva", "Jupiter", "Odin", "Loki"]
}
}
};
  // Navigation State
    let currentPage = 'home';

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        initNav();
        initSearch();
        initBackToTop();
        renderPage('home');
    });

    // Navigation
    function initNav() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                renderPage(page);
            });
        });
    }

    // Search
    function initSearch() {
        const input = document.getElementById('search-input');
        const results = document.getElementById('search-results');
        let timeout;

        input.addEventListener('input', (e) => {
            clearTimeout(timeout);
            const query = e.target.value.trim().toLowerCase();

            if (query.length < 2) {
                results.classList.remove('active');
                return;
            }

            timeout = setTimeout(() => {
                const games = WIKI_DATA.games.filter(g =>
                    g.title.toLowerCase().includes(query) ||
                    g.description.toLowerCase().includes(query) ||
                    g.protagonist.toLowerCase().includes(query)
                );

                const characters = WIKI_DATA.characters.filter(c =>
                    c.name.toLowerCase().includes(query) ||
                    c.description.toLowerCase().includes(query)
                );

                if (games.length === 0 && characters.length === 0) {
                    results.innerHTML = '<div class="search-result-item">No results found</div>';
                    results.classList.add('active');
                    return;
                }

                let html = '';
                if (games.length > 0) {
                    html += '<div style="padding: 0.5rem 1rem; background: var(--color-bg); font-weight: bold; border-bottom: 1px solid var(--color-border);">Games (' + games.length + ')</div>';
games.slice(0, 5).forEach(game => {
html += `
<div class="search-result-item" onclick="showGameDetail('${game.id}')">
<strong>${game.title}</strong>
<span style="color: var(--color-primary);">(${game.year})</span><br>
<small style="color: var(--color-text-dim);">${game.setting}</small>
</div>`;
});
}if (characters.length > 0) {
                    html += '<div style="padding: 0.5rem 1rem; background: var(--color-bg); font-weight: bold; border-bottom: 1px solid var(--color-border);">Characters (' + characters.length + ')</div>';
                    characters.slice(0, 5).forEach(char => {
                        html += `
                            <div class="search-result-item" onclick="showCharacterDetail('${char.id}')">
                                <strong>${char.name}</strong><br>
                                <small style="color: var(--color-accent);">${char.role}</small>
                            </div>
                        `;
                    });
                }

                results.innerHTML = html;
                results.classList.add('active');
            }, 300);
        });

        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !results.contains(e.target)) {
                results.classList.remove('active');
            }
        });
    }

    // Back to Top
    function initBackToTop() {
        const btn = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.pageYOffset > 300);
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Render Pages
    function renderPage(page) {
        currentPage = page;
        const content = document.getElementById('main-content');
        
        switch (page) {
            case 'home':
                renderHome(content);
                break;
            case 'games':
                renderGames(content);
                break;
            case 'characters':
                renderCharacters(content);
                break;
            case 'timeline':
                renderTimeline(content);
                break;
            case 'gameplay':
                renderGameplay(content);
                break;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Home Page
    function renderHome(container) {
        container.innerHTML = `
            <div class="section">
                <h2 class="section-title">Welcome to the Assassin's Creed Wiki</h2>
                <p><strong>Assassin's Creed</strong> is a historical action-adventure video game franchise created by Patrice Désilets and developed by Ubisoft. The series debuted in 2007 and has become one of the best-selling franchises of all time, with over <strong>200 million copies sold worldwide</strong>.</p>
                
                <p>The franchise is known for its unique blend of historical fiction, science fiction, and stealth-based gameplay. Players experience genetic memories of historical assassins through a device called the <strong>Animus</strong>, exploring richly detailed recreations of historical periods while uncovering a millennia-old conflict between two secret societies:</p>
                
                <ul>
                    <li><strong>The Assassin Brotherhood</strong> - fights to preserve free will and individual liberty</li>
                    <li><strong>The Templar Order</strong> - seeks to establish peace through order and control</li>
                </ul>

                <p>Both factions fight over powerful artifacts called <strong>Pieces of Eden</strong>, remnants of the ancient Isu civilization.</p>
            </div>

            <div class="section">
                <h3 class="section-subtitle">Featured Games</h3>
                <div class="cards-grid">
                    ${WIKI_DATA.games.slice(0, 6).map(game => `
                        <div class="card" onclick="showGameDetail('${game.id}')">
                            <div class="card-image">${game.icon}</div>
                            <div class="card-content">
                                <span class="card-badge">${game.year}</span>
                                <h3 class="card-title">${game.title}</h3>
                                <p class="card-description">${game.description.substring(0, 120)}...</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h3 class="section-subtitle">The Creed</h3>
                <blockquote style="border-left: 4px solid var(--color-primary); padding-left: 1.5rem; font-style: italic; font-size: 1.2rem; color: var(--color-primary);">
                    "Nothing is true, everything is permitted."
                </blockquote>
                <p>This maxim encapsulates the Assassin philosophy - rejecting absolute truth and emphasizing individual freedom and responsibility.</p>
            </div>
        `;
    }

    // Games Page
    function renderGames(container) {
        container.innerHTML = `
            <div class="section">
                <h2 class="section-title">All Games</h2>
                
                <div class="filter-bar">
                    <div class="filter-group">
                        <span class="filter-label">Sort:</span>
                        <select class="filter-select" id="game-sort">
                            <option value="year-desc">Newest First</option>
                            <option value="year-asc">Oldest First</option>
                            <option value="title">Title (A-Z)</option>
                        </select>
                    </div>
                </div>

                <div id="games-container" class="cards-grid">
                    ${renderGameCards(WIKI_DATA.games)}
                </div>
            </div>
        `;

        document.getElementById('game-sort').addEventListener('change', (e) => {
            let sorted = [...WIKI_DATA.games];
            if (e.target.value === 'year-asc') sorted.sort((a, b) => a.year - b.year);
            else if (e.target.value === 'year-desc') sorted.sort((a, b) => b.year - a.year);
            else sorted.sort((a, b) => a.title.localeCompare(b.title));
            document.getElementById('games-container').innerHTML = renderGameCards(sorted);
        });
    }

    function renderGameCards(games) {
        return games.map(game => `
            <div class="card" onclick="showGameDetail('${game.id}')">
                <div class="card-image">${game.icon}</div>
                <div class="card-content">
                    <span class="card-badge">${game.year}</span>
                    <h3 class="card-title">${game.title}</h3>
                    <p class="card-description">${game.description}</p>
                </div>
            </div>
        `).join('');
    }

    function showGameDetail(gameId) {
        const game = WIKI_DATA.games.find(g => g.id === gameId);
        if (!game) return;

        document.getElementById('search-results').classList.remove('active');
        document.getElementById('search-input').value = '';

        const container = document.getElementById('main-content');
        container.innerHTML = `
            <div class="section">
                <div class="infobox">
                    <div class="infobox-header">${game.title}</div>
                    <div class="infobox-image">${game.icon}</div>
                    <div class="infobox-content">
                        <div class="infobox-row">
                            <div class="infobox-label">Release:</div>
                            <div class="infobox-value">${game.year}</div>
                        </div>
                        <div class="infobox-row">
                            <div class="infobox-label">Developer:</div>
                            <div class="infobox-value">${game.developer}</div>
                        </div>
                        <div class="infobox-row">
                            <div class="infobox-label">Publisher:</div>
                            <div class="infobox-value">${game.publisher}</div>
                        </div>
                        ${game.director ? `<div class="infobox-row">
                            <div class="infobox-label">Director:</div>
                            <div class="infobox-value">${game.director}</div>
                        </div>` : ''}
                        ${game.producer ? `<div class="infobox-row">
                            <div class="infobox-label">Producer:</div>
                            <div class="infobox-value">${game.producer}</div>
                        </div>` : ''}
                        ${game.composer ? `<div class="infobox-row">
                            <div class="infobox-label">Composer:</div>
                            <div class="infobox-value">${game.composer}</div>
                        </div>` : ''}
                        <div class="infobox-row">
                            <div class="infobox-label">Protagonist:</div>
                            <div class="infobox-value">${game.protagonist}</div>
                        </div>
                        <div class="infobox-row">
                            <div class="infobox-label">Setting:</div>
                            <div class="infobox-value">${game.setting}</div>
                        </div>
                        ${game.engine ? `<div class="infobox-row">
                            <div class="infobox-label">Engine:</div>
                            <div class="infobox-value">${game.engine}</div>
                        </div>` : ''}
                        <div class="infobox-row">
                            <div class="infobox-label">Platforms:</div>
                            <div class="infobox-value">${game.platforms.join(', ')}</div>
                        </div>
                    </div>
                </div>

                <h2 class="section-title">${game.title}</h2>
                
                <p><strong>${game.title}</strong> is a ${game.year} ${game.genre || 'action-adventure'} game set during the ${game.setting}. ${game.description}</p>

                ${game.plot ? `
                    <h3 class="section-subtitle">Plot</h3>
                    <p>${game.plot}</p>
                ` : ''}

                ${game.gameplay ? `
                    <h3 class="section-subtitle">Gameplay</h3>
                    <p>${game.gameplay}</p>
                ` : ''}

                ${game.development ? `
                    <h3 class="section-subtitle">Development</h3>
                    <p>${game.development}</p>
                ` : ''}

                ${game.reception ? `
                    <h3 class="section-subtitle">Reception</h3>
                    <p>${game.reception}</p>
                ` : ''}

                ${game.sales ? `
                    <h3 class="section-subtitle">Sales</h3>
                    <p>${game.sales}</p>
                ` : ''}

                <p style="margin-top: 2rem;"><a href="#" class="nav-link" data-page="games" style="display: inline-block; padding: 0.5rem 1.5rem; background: var(--color-primary); color: var(--color-secondary); border-radius: 4px;">← Back to All Games</a></p>
            </div>
        `;

        document.querySelector('[data-page="games"]').addEventListener('click', (e) => {
            e.preventDefault();
            renderPage('games');
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Characters Page
    function renderCharacters(container) {
        container.innerHTML = `
            <div class="section">
                <h2 class="section-title">Characters</h2>
                
                <div class="filter-bar">
                    <div class="filter-group">
                        <span class="filter-label">Filter by Role:</span>
                        <select class="filter-select" id="char-filter">
                            <option value="all">All Roles</option>
                            <option value="Protagonist">Protagonist</option>
                            <option value="Antagonist">Antagonist</option>
                            <option value="Ally">Ally</option>
                            <option value="Deuteragonist">Deuteragonist</option>
                        </select>
                    </div>
                </div>

                <div id="chars-container" class="cards-grid">
                    ${renderCharacterCards(WIKI_DATA.characters)}
                </div>
            </div>
        `;

        document.getElementById('char-filter').addEventListener('change', (e) => {
            const filtered = e.target.value === 'all' ? WIKI_DATA.characters : 
                WIKI_DATA.characters.filter(c => c.role === e.target.value);
            document.getElementById('chars-container').innerHTML = renderCharacterCards(filtered);
        });
    }

    function renderCharacterCards(characters) {
        return characters.map(char => {
            const game = WIKI_DATA.games.find(g => g.id === char.gameId);
            return `
                <div class="card" onclick="showCharacterDetail('${char.id}')">
                    <div class="card-image">${char.icon}</div>
                    <div class="card-content">
                        <span class="card-badge">${char.role}</span>
                        <h3 class="card-title">${char.name}</h3>
                        ${game ? `<p style="font-size: 0.85rem; color: var(--color-primary); margin-bottom: 0.5rem;">${game.title}</p>` : ''}
                        <p class="card-description">${char.description}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    function showCharacterDetail(charId) {
        const char = WIKI_DATA.characters.find(c => c.id === charId);
        if (!char) return;

        document.getElementById('search-results').classList.remove('active');
        document.getElementById('search-input').value = '';

        const game = WIKI_DATA.games.find(g => g.id === char.gameId);
        const container = document.getElementById('main-content');

        container.innerHTML = `
            <div class="section">
                <div class="infobox">
                    <div class="infobox-header">${char.name}</div>
                    <div class="infobox-image">${char.icon}</div>
                    <div class="infobox-content">
                        <div class="infobox-row">
                            <div class="infobox-label">Role:</div>
                            <div class="infobox-value">${char.role}</div>
                        </div>
                        ${char.era ? `<div class="infobox-row">
                            <div class="infobox-label">Era:</div>
                            <div class="infobox-value">${char.era}</div>
                        </div>` : ''}
                        <div class="infobox-row">
                            <div class="infobox-label">Game:</div>
                            <div class="infobox-value">${game ? game.title : 'Unknown'}</div>
                        </div>
                        ${char.affiliation ? `<div class="infobox-row">
                            <div class="infobox-label">Affiliation:</div>
                            <div class="infobox-value">${char.affiliation}</div>
                        </div>` : ''}
                        ${char.voiceActor ? `<div class="infobox-row">
                            <div class="infobox-label">Voice Actor:</div>
                            <div class="infobox-value">${char.voiceActor}</div>
                        </div>` : ''}
                    </div>
                </div>

                <h2 class="section-title">${char.name}</h2>
                
                <p>${char.description}</p>

                ${char.biography ? `
                    <h3 class="section-subtitle">Biography</h3>
                    <p>${char.biography}</p>
                ` : ''}

                ${char.traits ? `
                    <h3 class="section-subtitle">Character Traits</h3>
                    <p>${char.traits}</p>
                ` : ''}

                <p style="margin-top: 2rem;"><a href="#" class="nav-link" data-page="characters" style="display: inline-block; padding: 0.5rem 1.5rem; background: var(--color-primary); color: var(--color-secondary); border-radius: 4px;">← Back to Characters</a></p>
            </div>
        `;

        document.querySelector('[data-page="characters"]').addEventListener('click', (e) => {
            e.preventDefault();
            renderPage('characters');
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Timeline Page
    function renderTimeline(container) {
        container.innerHTML = `
            <div class="section">
                <h2 class="section-title">Franchise Timeline</h2>
                <p>The chronological release history of the Assassin's Creed franchise.</p>
                
                <div class="timeline">
                    ${WIKI_DATA.timeline.map((event, index) => `
                        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                            <div class="timeline-content">
                                <div class="timeline-year">${event.year}</div>
<h4 class="timeline-title">${event.event}</h4>
<p class="timeline-desc">${event.description}</p>
div>
                                <h4 class="timeline-title">${event.event}</h4>
                                <p class="timeline-desc">${event.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Gameplay Page
    function renderGameplay(container) {
        const gp = WIKI_DATA.gameplay;
        const org = WIKI_DATA.organizations;

        container.innerHTML = `
            <div class="section">
                <h2 class="section-title">Gameplay Systems & Lore</h2>

                <h3 class="section-subtitle">${gp.animus.title}</h3>
                <p>${gp.animus.description}</p>
                <p><strong>Features:</strong> ${gp.animus.features.join(', ')}</p>

                <h3 class="section-subtitle">${gp.eagleVision.title}</h3>
                <p>${gp.eagleVision.description}</p>
                <p><strong>Features:</strong> ${gp.eagleVision.features.join(', ')}</p>

                <h3 class="section-subtitle">${gp.socialStealth.title}</h3>
                <p>${gp.socialStealth.description}</p>
                <p><strong>Features:</strong> ${gp.socialStealth.features.join(', ')}</p>

                <h3 class="section-subtitle">${gp.parkour.title}</h3>
                <p>${gp.parkour.description}</p>
                <p><strong>Features:</strong> ${gp.parkour.features.join(', ')}</p>

                <h3 class="section-subtitle">${gp.combat.title}</h3>
                <p>${gp.combat.description}</p>
                <p><strong>Features:</strong> ${gp.combat.features.join(', ')}</p>

                <h3 class="section-subtitle">${gp.synchronization.title}</h3>
                <p>${gp.synchronization.description}</p>
                <p><strong>Features:</strong> ${gp.synchronization.features.join(', ')}</p>

                <h2 class="section-title" style="margin-top: 3rem;">Organizations & Factions</h2>

                <h3 class="section-subtitle">${org.assassins.name}</h3>
                <p><strong>Founded:</strong> ${org.assassins.founding}</p>
                <p><strong>Creed:</strong> <em>"${org.assassins.creed}"</em></p>
                <p><strong>Ideology:</strong> ${org.assassins.ideology}</p>
                <p><strong>Three Tenets:</strong></p>
                <ul>
                    ${org.assassins.tenets.map(t => `<li>${t}</li>`).join('')}
                </ul>
                <p>${org.assassins.description}</p>

                <h3 class="section-subtitle">${org.templars.name}</h3>
                <p><strong>Ideology:</strong> ${org.templars.ideology}</p>
                <p><strong>Modern Front:</strong> ${org.templars.modernFront}</p>
                <p>${org.templars.description}</p>

                <h3 class="section-subtitle">${org.isu.name}</h3>
                <p><strong>Era:</strong> ${org.isu.era}</p>
                <p>${org.isu.description}</p>
                <p><strong>Known Artifacts:</strong> ${org.isu.artifacts.join(', ')}</p>
                <p><strong>Notable Isu:</strong> ${org.isu.notableIsu.join(', ')}</p>
            </div>
        `;
    }