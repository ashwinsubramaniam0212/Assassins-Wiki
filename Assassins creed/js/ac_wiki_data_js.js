// ==========================================
// Assassin's Creed Wiki - Data Storage
// ==========================================

const AC_WIKI_DATA = {
    games: [
        {
            id: "ac1",
            title: "Assassin's Creed",
            year: 2007,
            platforms: ["Xbox 360", "PS3", "PC"],
            setting: "Third Crusade, Holy Land (1191 AD)",
            protagonist: "Altaïr Ibn-La'Ahad",
            description: "The first installment follows Altaïr, a skilled assassin during the Third Crusade. After botching a mission, he must redeem himself by assassinating nine targets across the Holy Land.",
            developer: "Ubisoft Montreal",
            icon: "AC",
            longDescription: "Assassin's Creed is set in a fictional history of real-world events during the Third Crusade. Players control Desmond Miles, a bartender who relives genetic memories of his ancestor Altaïr through a machine called the Animus. The game features counter-based combat, social stealth, and parkour in an open world comprising Jerusalem, Acre, Damascus, and Masyaf."
        },
        {
            id: "ac2",
            title: "Assassin's Creed II",
            year: 2009,
            platforms: ["Xbox 360", "PS3", "PC"],
            setting: "Renaissance Italy (1476-1499)",
            protagonist: "Ezio Auditore da Firenze",
            description: "Follow Ezio's journey from a young Florentine nobleman to a Master Assassin in Renaissance Italy, seeking revenge for his family's betrayal.",
            developer: "Ubisoft Montreal",
            icon: "II",
            longDescription: "The sequel continues Desmond's story while introducing Ezio Auditore, who witnesses his father and brothers' execution and embarks on a decades-long journey of vengeance and discovery across Italian cities including Florence, Venice, and Rome."
        },
        {
            id: "ac_brotherhood",
            title: "Assassin's Creed: Brotherhood",
            year: 2010,
            platforms: ["Xbox 360", "PS3", "PC"],
            setting: "Rome, Renaissance Italy (1500 AD)",
            protagonist: "Ezio Auditore",
            description: "Ezio travels to Rome to rebuild the Assassin Brotherhood and liberate the city from Borgia family control.",
            developer: "Ubisoft Montreal",
            icon: "BH",
            longDescription: "Brotherhood expands on Ezio's story as he takes on the Borgia family in Rome. The game introduces the brotherhood system, allowing players to recruit and train new assassins."
        },
        {
            id: "ac3",
            title: "Assassin's Creed III",
            year: 2012,
            platforms: ["Xbox 360", "PS3", "Wii U", "PC"],
            setting: "American Revolution (1754-1783)",
            protagonist: "Ratonhnhaké:ton (Connor)",
            description: "Experience the American Revolution through Connor, a Native American assassin fighting for freedom and justice.",
            developer: "Ubisoft Montreal",
            icon: "III",
            longDescription: "Set during the American Revolution, the game follows Connor as he navigates the conflict between the Colonies and Britain while hunting Templars who threaten his people and ideals."
        },
        {
            id: "ac_black_flag",
            title: "Assassin's Creed IV: Black Flag",
            year: 2013,
            platforms: ["Xbox 360", "Xbox One", "PS3", "PS4", "Wii U", "PC"],
            setting: "Caribbean, Golden Age of Piracy (1715 AD)",
            protagonist: "Edward Kenway",
            description: "Sail the Caribbean as Edward Kenway, a pirate captain who becomes entangled with the Assassin Brotherhood during the Golden Age of Piracy.",
            developer: "Ubisoft Montreal",
            icon: "IV",
            longDescription: "Black Flag introduces naval combat and exploration. Edward Kenway, grandfather of Connor, commands his ship the Jackdaw across the Caribbean, seeking fortune while getting caught between Assassins and Templars."
        },
        {
            id: "ac_unity",
            title: "Assassin's Creed Unity",
            year: 2014,
            platforms: ["Xbox One", "PS4", "PC"],
            setting: "French Revolution, Paris (1789-1794)",
            protagonist: "Arno Dorian",
            description: "Navigate the chaos of the French Revolution as Arno Dorian seeks redemption in revolutionary Paris.",
            developer: "Ubisoft Montreal",
            icon: "UN",
            longDescription: "Set during the French Revolution, Unity follows Arno as he uncovers a Templar conspiracy while seeking to avenge his adoptive father's death. The game features cooperative multiplayer missions."
        },
        {
            id: "ac_syndicate",
            title: "Assassin's Creed Syndicate",
            year: 2015,
            platforms: ["Xbox One", "PS4", "PC"],
            setting: "Victorian London (1868)",
            protagonist: "Jacob and Evie Frye",
            description: "Control twin assassins Jacob and Evie Frye as they liberate London from Templar control during the Industrial Revolution.",
            developer: "Ubisoft Quebec",
            icon: "SY",
            longDescription: "Syndicate introduces two playable protagonists - twins Jacob and Evie Frye. They form a gang called the Rooks to take over London's criminal underworld from Templar control."
        },
        {
            id: "ac_origins",
            title: "Assassin's Creed Origins",
            year: 2017,
            platforms: ["Xbox One", "PS4", "PC"],
            setting: "Ancient Egypt, Ptolemaic Period (49 BCE)",
            protagonist: "Bayek of Siwa",
            description: "Witness the origin of the Assassin Brotherhood in Ancient Egypt with Bayek, a Medjay protector seeking vengeance.",
            developer: "Ubisoft Montreal",
            icon: "OR",
            longDescription: "Origins reboots the series with RPG mechanics. Bayek's quest for revenge leads to the founding of the Hidden Ones, the precursor to the Assassin Brotherhood. Set in Ptolemaic Egypt with rich historical detail."
        },
        {
            id: "ac_odyssey",
            title: "Assassin's Creed Odyssey",
            year: 2018,
            platforms: ["Xbox One", "PS4", "PC", "Switch"],
            setting: "Ancient Greece, Peloponnesian War (431 BCE)",
            protagonist: "Kassandra or Alexios",
            description: "Choose your hero and explore Ancient Greece during the Peloponnesian War, uncovering family secrets and mythological mysteries.",
            developer: "Ubisoft Quebec",
            icon: "OD",
            longDescription: "Set during the Peloponnesian War, Odyssey lets players choose between siblings Kassandra and Alexios. The game expands RPG elements with dialogue choices, romance options, and multiple endings."
        },
        {
            id: "ac_valhalla",
            title: "Assassin's Creed Valhalla",
            year: 2020,
            platforms: ["Xbox One", "Xbox Series X/S", "PS4", "PS5", "PC"],
            setting: "Viking Age, England and Norway (873 AD)",
            protagonist: "Eivor Varinsdottir",
            description: "Lead your Viking clan from Norway to England as Eivor, forging alliances and building a settlement during the Dark Ages.",
            developer: "Ubisoft Montreal",
            icon: "VH",
            longDescription: "Valhalla follows Eivor leading the Raven Clan from Norway to 9th century England. Features settlement building, raids, and a deep story connecting to the series' modern-day narrative and Isu civilization."
        }
    ],
    characters: [
        {
            id: "char_altair",
            name: "Altaïr Ibn-La'Ahad",
            gameId: "ac1",
            role: "Protagonist",
            description: "A Master Assassin during the Third Crusade, known for his exceptional skills. After a mission failure, he must redeem himself through nine assassinations.",
            icon: "AL",
            fullBio: "Altaïr starts as an arrogant Master Assassin who is demoted after botching the retrieval of an Apple of Eden. Through his journey, he becomes wise and humble, eventually uncovering a conspiracy that reaches the highest levels of the Assassin Order."
        },
        {
            id: "char_ezio",
            name: "Ezio Auditore da Firenze",
            gameId: "ac2",
            role: "Protagonist",
            description: "A Florentine nobleman who becomes a legendary Master Assassin after his family's execution, seeking revenge and uncovering ancient secrets.",
            icon: "EZ",
            fullBio: "Ezio's story spans over 40 years across three games. From a carefree youth to a wise mentor, he becomes one of the most celebrated Assassins in history, wielding ancient Isu technology and fighting the Borgias."
        },
        {
            id: "char_leonardo",
            name: "Leonardo da Vinci",
            gameId: "ac2",
            role: "Ally",
            description: "The famous Renaissance artist and inventor who becomes Ezio's closest friend, creating weapons and decoding ancient mysteries.",
            icon: "LV",
            fullBio: "Leonardo provides Ezio with upgraded equipment and decodes Codex pages left by Altaïr. His genius helps the Assassins while he pursues his own artistic and scientific endeavors."
        },
        {
            id: "char_connor",
            name: "Ratonhnhaké:ton (Connor)",
            gameId: "ac3",
            role: "Protagonist",
            description: "A Native American assassin fighting for freedom during the American Revolution, seeking to protect his people and ideals.",
            icon: "CO",
            fullBio: "Born to a Mohawk mother and British Templar father, Connor is trained as an Assassin to fight the Templars who threaten his village. He becomes deeply involved in the Revolutionary War."
        },
        {
            id: "char_edward",
            name: "Edward Kenway",
            gameId: "ac_black_flag",
            role: "Protagonist",
            description: "A Welsh pirate captain who inadvertently becomes involved with the Assassins while seeking fortune in the Caribbean.",
            icon: "EK",
            fullBio: "Initially a privateer seeking wealth, Edward becomes embroiled in the Assassin-Templar conflict. His journey from selfish pirate to dedicated Assassin forms the heart of his story."
        },
        {
            id: "char_arno",
            name: "Arno Dorian",
            gameId: "ac_unity",
            role: "Protagonist",
            description: "A French nobleman turned Assassin seeking redemption during the French Revolution after failing to prevent his adoptive father's murder.",
            icon: "AR",
            fullBio: "Arno joins the Assassins to uncover the conspiracy behind his foster father's death. His relationship with Élise, a Templar, adds complexity to his mission during the Revolution."
        },
        {
            id: "char_jacob",
            name: "Jacob Frye",
            gameId: "ac_syndicate",
            role: "Protagonist",
            description: "A brash and impulsive assassin who leads the Rooks gang, fighting to liberate Victorian London from Templar control.",
            icon: "JF",
            fullBio: "Jacob is the more aggressive twin, preferring direct action. He forms the Rooks to take over London's underworld, often clashing with his sister's more strategic approach."
        },
        {
            id: "char_evie",
            name: "Evie Frye",
            gameId: "ac_syndicate",
            role: "Protagonist",
            description: "Jacob's twin sister, a tactical and stealth-focused assassin dedicated to finding Pieces of Eden in Victorian London.",
            icon: "EF",
            fullBio: "Evie is the more intellectual twin, focused on stealth and finding Isu artifacts. She works in the shadows while Jacob takes the spotlight, proving equally capable in combat."
        },
        {
            id: "char_bayek",
            name: "Bayek of Siwa",
            gameId: "ac_origins",
            role: "Protagonist",
            description: "A Medjay protector who becomes one of the founders of the Hidden Ones, the precursor to the Assassin Brotherhood.",
            icon: "BA",
            fullBio: "Bayek's quest for revenge against those who killed his son leads him to found the Hidden Ones with his wife Aya. He embodies the ideals that will define the Assassin Brotherhood."
        },
        {
            id: "char_kassandra",
            name: "Kassandra",
            gameId: "ac_odyssey",
            role: "Protagonist",
            description: "A Spartan mercenary with Isu bloodline who becomes a legendary hero during the Peloponnesian War.",
            icon: "KA",
            fullBio: "Kassandra (or Alexios) is a descendant of Leonidas with a connection to the Isu. Her journey across Greece uncovers family secrets and battles against the Cult of Kosmos."
        },
        {
            id: "char_eivor",
            name: "Eivor Varinsdottir",
            gameId: "ac_valhalla",
            role: "Protagonist",
            description: "A fierce Viking warrior who leads the Raven Clan to England, forging alliances and uncovering ancient mysteries.",
            icon: "EI",
            fullBio: "Eivor leads their clan from Norway to England, establishing a settlement and building alliances. Their connection to Odin and the Isu civilization plays a crucial role in the overarching narrative."
        },
        {
            id: "char_rodrigo",
            name: "Rodrigo Borgia",
            gameId: "ac2",
            role: "Antagonist",
            description: "The Grand Master of the Italian Templars who becomes Pope Alexander VI, seeking to control humanity with the Apple of Eden.",
            icon: "RB",
            fullBio: "Rodrigo orchestrates the execution of Ezio's family and uses his position as Pope to access the Vatican Vault. His ambition and corruption make him Ezio's primary nemesis."
        },
        {
            id: "char_desmond",
            name: "Desmond Miles",
            gameId: "ac1",
            role: "Modern Protagonist",
            description: "A bartender kidnapped by Abstergo Industries to relive his ancestors' memories through the Animus.",
            icon: "DM",
            fullBio: "Desmond is the modern-day protagonist whose genetic memories of various Assassin ancestors are explored. His journey connects all the historical storylines and leads to pivotal choices."
        },
        {
            id: "char_al_mualim",
            name: "Al Mualim",
            gameId: "ac1",
            role: "Antagonist",
            description: "The leader of the Assassin Brotherhood and Altaïr's mentor, who harbors a dark secret about his true intentions.",
            icon: "AM",
            fullBio: "Al Mualim leads the Assassins from Masyaf. His betrayal of both Assassins and Templars to control the Apple of Eden forces Altaïr to make difficult choices."
        }
    ],
    timeline: [
        { 
            year: 2007, 
            event: "Assassin's Creed released - introduces Altaïr and Desmond", 
            type: "game", 
            description: "The first game debuts, selling 8 million copies and establishing the franchise." 
        },
        { 
            year: 2009, 
            event: "Assassin's Creed II released - introduces Ezio Auditore", 
            type: "game", 
            description: "The sequel improves on every aspect and becomes a critical and commercial success." 
        },
        { 
            year: 2010, 
            event: "Brotherhood released - expands Ezio's story in Rome", 
            type: "game", 
            description: "Introduces multiplayer and the brotherhood recruitment system." 
        },
        { 
            year: 2011, 
            event: "Revelations released - concludes Ezio and Altaïr's stories", 
            type: "game", 
            description: "Ezio travels to Constantinople to uncover Altaïr's secrets." 
        },
        { 
            year: 2012, 
            event: "Assassin's Creed III released - American Revolution setting", 
            type: "game", 
            description: "Introduces Connor and naval combat, concludes Desmond's story." 
        },
        { 
            year: 2013, 
            event: "Black Flag released - Golden Age of Piracy", 
            type: "game", 
            description: "Edward Kenway's pirate adventure becomes a fan favorite with expanded naval gameplay." 
        },
        { 
            year: 2014, 
            event: "Unity released - French Revolution, next-gen debut", 
            type: "game", 
            description: "First game designed for PS4/Xbox One, features cooperative multiplayer." 
        },
        { 
            year: 2015, 
            event: "Syndicate released - Victorian London", 
            type: "game", 
            description: "Introduces dual protagonists Jacob and Evie Frye in Industrial Revolution London." 
        },
        { 
            year: 2017, 
            event: "Origins released - RPG mechanics introduced", 
            type: "game", 
            description: "Major franchise reboot with RPG elements, explores the birth of the Brotherhood." 
        },
        { 
            year: 2018, 
            event: "Odyssey released - Ancient Greece exploration", 
            type: "game", 
            description: "Expands RPG mechanics with dialogue choices and multiple endings." 
        },
        { 
            year: 2020, 
            event: "Valhalla released - Viking Age saga", 
            type: "game", 
            description: "Eivor's Viking saga with settlement building and the deepest Isu lore yet." 
        }
    ]
};