// ============================================================
// DATA STORE - Edit di sini untuk menambah/ubah data
// ============================================================

const CATEGORIES = {
  sword: {
    icon: '⚔️', title: 'SWORD', desc: 'Click Pada Pedangnya Untuk Melihat Info yang Lebih detail terkait pedang tersebut',
    fields: ['name','rarity','stats','description','how_to_get','materials','location','level_req','notes'],
  },
  melee: {
    icon: '🪃', title: 'MELEE WEAPON', desc: 'Senjata melee selain pedang: palu, tombak, tongkat, dll',
    fields: ['name','rarity','type','stats','description','how_to_get','materials','location','level_req','notes'],
  },
  devil_fruit: {
    icon: '🍈', title: 'DEVIL FRUIT', desc: 'Buah iblis dengan kekuatan misterius. Sekali makan, kamu tidak bisa berenang',
    fields: ['name','rarity','fruit_type','abilities','description','how_to_get','location','level_req','notes'],
  },
  accessories: {
    icon: '💍', title: 'ACCESSORIES', desc: 'Ring, kalung, gelang, dan aksesoris yang memberikan stat bonus',
    fields: ['name','rarity','slot','stats','description','how_to_get','materials','location','level_req','notes'],
  },
  race: {
    icon: '🧬', title: 'RACE', desc: 'Ras karakter dengan trait dan kemampuan unik masing-masing',
    fields: ['name','rarity','passives','abilities','description','how_to_get','notes'],
  },
  clan: {
    icon: '🏯', title: 'CLAN', desc: 'Klan dengan bonus keturunan dan skill eksklusif',
    fields: ['name','rarity','bonus','abilities','description','how_to_get','notes'],
  },
  rune: {
    icon: '🔮', title: 'RUNE', desc: 'Rune untuk enchant senjata dan armor dengan efek elemental',
    fields: ['name','rarity','element','effect','description','how_to_get','materials','location','level_req','notes'],
  },
  npc: {
    icon: '🧙', title: 'NPC LOCATION', desc: 'Lokasi NPC, fungsi mereka, dan item yang bisa dibeli/ditukar',
    fields: ['name','role','location','coordinates','functions','sells','description','notes'],
  },
  items_drop: {
    icon: '📦', title: 'ITEMS DROP', desc: 'Item yang bisa di-drop dari monster atau chest di dunia game',
    fields: ['name','rarity','drop_from','drop_rate','location','use','description','notes'],
  },
  boss: {
    icon: '👹', title: 'BOSS', desc: 'Boss dan raid boss dengan drop table item langka',
    fields: ['name','rarity','location','hp','respawn','drops','weaknesses','recommended_level','description','strategy','notes'],
  },
  code_redeem: {
    icon: '🎟️', title: 'CODE REDEEM', desc: 'Daftar kode redeem yang bisa diklaim di dalam game'
  },
};

const RARITY_ORDER = ['common','uncommon','rare','epic','legendary','mythic'];

// Main data object - isi di sini atau lewat form tambah
let DB = {
  sword: [
    {
      id: 's2', 
      name: 'Katana', rarity: 'rare',
      stats: 'Skill Unlock X & Z',
      description: 'Katana Polos.',
      how_to_get: 'Buy from the Katana Seller.',
      materials: '2.500 money',
      location: 'Starter Island	',
      level_req: '-',
      notes: 'Mending langsung granding cari uang untuk beli dark blade karena jauh lebih bagus.',
      image: 'sword/Katana.jpg'
},
    {
      id: 's3', name: 'Dark Blade', rarity: 'epic',
      stats: 'Skill Unlock X & Z',
      description: 'senjata yang di adaptasi dari anime onepiece, lebih tepatnya karakter Mihawk',
      how_to_get: 'Buy From The Dark Blade Seller',
      materials: '250.000 money, 150 gems',
      location: 'Snow Island',
      level_req: '-',
      notes: 'Senjata yang bagus untuk awal awal karena areanya yang luas dan murah.',
      image: 'sword/Dark_Blade.jpg'
    },
    {
      id: 's4', name: 'Gryphon', rarity: 'legendary',
      stats: 'Skill Unlock X & Z',
      description: 'Referensi Dari anime onepiece lebih tepatnya karakter shanks.',
      how_to_get: 'Buy from the Gryphon Seller NPC.',
      materials: '650.000 money, 650 gem',
      location: 'Shibuya Station',
      level_req: '-',
      notes: 'Optional ajah, bagus kok.',
      image: 'sword/Gryphon.jpg'
    },
    {
      id: 's5', name: 'Excalibur', rarity: 'legendary',
      stats: 'Skill Unlock X,Z & C',
      description: '-.',
      how_to_get: 'Buy from the boss ticket seller/Drop Loot From boss knight.',
      materials: '150 boss ticket, drop loot knight boss',
      location: 'boss island',
      level_req: '-',
      notes: 'Bagus tapi skillnya ngechargenya lama untuk keluar skillnya.',
      image: 'sword/Excalibur.jpg'
    },
    {
      id: 's7', name: 'Solo Hunter', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C & V',
      description: 'Referensi Dari anime Solo Leveling Lebih Tepatnya Karakter Sung Jin Woo',
      how_to_get: 'Complete Solo Hunter (Jinwoo) trainer quests  -  Quest 1 – Take 15 Million Damage Quest. 2 – Kill 750 Enemies Quest. 3 – Deal 75 Million Damage Quest. 4 – Kill 35 Players Quest. 5 – Kill the Jinwoo Boss 15 Times .',
      materials: '2.500.000 Gold, 7.500 Gems, 3 Dark Ring, 6 Abyss Edge, 1 Shadow Heart',
      location: 'Shibuya Station',
      level_req: '-',
      notes: 'enak buat farming.',
      image: 'sword/Solo_Hunter_Sword.jpg'
    },
    {
      id: 's6', name: 'Soul Reaper', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C & V',
      description: 'Senjata Yang diambil dari anime bleach lebih tepatnya Karakter ichigo.',
      how_to_get: 'Obtained from the Ichigo Trainer at Hollow Island for Buy from Soul Reaper Seller Or Buy from Boss Exchanger.',
      materials: '(can buy with) 500 Boss Ticket, 2 Soul Flame, 4 Spiritual Core, 8 Soul Fragment, 5.000.000 Money, 8.500 Gems',
      location: 'Boss Island',
      level_req: '-',
      notes: 'Best Farming Buat pemula, aoe skill yang bagus banget.',
      image: 'sword/Soul_Reaper_Sword.jpg'
    },
    {
      id: 's8', name: 'Manipulator', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C & V',
      description: 'Senjata yang diambil dari anime bleach.',
      how_to_get: 'Obtained from the Manipulator NPC at Hollow Island.',
      materials: '1x Hyoguko Fragment, 3x Reiatsu Core, 6x Illusion Prism, 10x Mirage Pendant, 10.000 Gems, 6.000.000 Money',
      location: 'Hollow Island',
      level_req: '-',
      notes: 'Fyi senjata ini ada v2 nya namanya true manipulator.',
      image: 'sword/Manipulator_Sword.jpg'
    },
    {
      id: 's9', name: 'Shadow', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari anime The Eminence in Shadow.',
      how_to_get: 'Obtained from the Shadow Seller NPC at Dungeon Island & you should have shadowborn race.',
      materials: '10.000.000 Gold, 15.000 Gems, 1x Atomic Core, 8x Void Seed, 4x Shadow Essence, 20x Umbral Capsule',
      location: 'Dungeon Island',
      level_req: '-',
      notes: 'Skill F Harus menyelesaikan misi dulu jika ingin membukanya.',
      image: 'sword/Shadow_sword.jpg'
    },
        {
      id: 's10', name: 'Yamato Sword', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: '.',
      how_to_get: 'Obtained from the Yamato NPC at Judgement Island.',
      materials: '1x Azure Heart, 3x Silent Storm, 7x Yamato Essence, 14x Frozen Will, Blade Sovereign Title',
      location: 'Judgement Island',
      level_req: '-',
      notes: 'Langsung Dapet skill f tanpa harus menyelesaikan misi.',
      image: 'sword/Yamato_sword.jpg'
    },
        {
      id: 's11', name: 'Rimuru Sword', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari anime Tensei Shitara Slime.',
      how_to_get: 'Obtained from the Rimuru NPC at Slime Island.',
      materials: 'Demon Lord Title, 30.000.000 Money, 20,000 Gems, 9x Sage Pulse, 6x Tempest Seal, 3x Slime Remnant, 1x Slime Core',
      location: 'Slime Island',
      level_req: '-',
      notes: 'Skill F Harus menyelesaikan misi dulu jika ingin membukanya.',
      image: 'sword/Rimuru.jpg'
    },
        {
      id: 's12', name: 'Ragna Sword', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C, & V',
      description: 'Senjata yang diambil dari anime Ragna Crimson.',
      how_to_get: 'Obtained from the Dragon Slayer NPC at Snow Island; however materials currently unobtainable.',
      materials: '1.000.000 Cash, 4.500 Gems, 1x Silver Reququum, 3x Black Frost, 7x WRM Brands. ',
      location: 'Snow Island',
      level_req: '-',
      notes: 'Limited Sword.',
      image: 'sword/Ragna.jpg'
    },
        {
      id: 's13', name: 'Sin Of Pride', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari anime Seven Deadly Sins.',
      how_to_get: 'Obtained from the Sin of Pride Boss during Boss Rush at a base 3% chance.',
      materials: '-',
      location: 'boss rush',
      level_req: '-',
      notes: 'Skill F langsung dapat tanpa menyelesaikan misi.',
      image: 'sword/Sin_Of_Pride_Sword.jpg'
    },
        {
      id: 's14', name: 'Atomic', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari anime The Eminence in Shadow.',
      how_to_get: 'Obtained from the Atomic Trainer NPC at Lawless Island.',
      materials: 'Eminence Incarnate Title, Shadow Sword (in inventory), 45.000 Gems, 1x Atomic Omen, 3x Eminence Essence, 9x Shadow Remnant, 16x Magic Shard, 80x Abyss Sigil',
      location: 'Lawless Island',
      level_req: '-',
      notes: 'Skill F Harus menyelesaikan misi dulu jika ingin membukanya.',
      image: 'sword/Atomic.jpg'
    },
            {
      id: 's15', name: 'True Manipulator', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari anime Bleach.',
      how_to_get: 'Obtained from the Manipulator Master NPC at Soul Dominion Island.',
      materials: 'Transcendent Being Title, Manipulator Sword (in inventory), 35.000 Gems, 1x Evolution Fragment, 3x Transcendent Cores, 8x Divinity Essence, 15x Fusion Rings, 75x Chrysalis Sigil',
      location: 'Soul Domination Island',
      level_req: '-',
      notes: 'Skill F Harus menyelesaikan misi dulu jika ingin membukanya.',
      image: 'sword/True_manipulator.jpg'
    },
            {
      id: 's16', name: 'Shadow Monarch', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari anime Solo Leveling.',
      how_to_get: 'Obtained from the Shadow Monarch NPC at Dungeon Island for Purchase from the Shadow Monarch NPC.',
      materials: 'King of Shadows Title, 10x Monarch Core, 5x Monarch Essence, 2x Kamish Dagger, 1x Shadow Crystal',
      location: 'Dungeon Island',
      level_req: '-',
      notes: 'Skill F Harus menyelesaikan misi dulu jika ingin membukanya.',
      image: 'sword/Shadow_monarch.jpg'
    },
            {
      id: 's17', name: 'Abyssal Empress', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari Game Honkai Star Rail.',
      how_to_get: 'Obtained from boss waves during Infinite Tower runs at a base .02% chance or buy it for 4k tower tokens',
      materials: '4.000 tower token, drop loot infinity tower',
      location: 'tower Island',
      level_req: '-',
      notes: 'Skill F langsung kebuka tanpa harus menyelesaikan misinya terlebih dahulu.',
      image: 'sword/Abyssal_Empress.jpg'
    },
            {
      id: 's18', name: 'Ice Queen', rarity: 'mythic',
      stats: 'Skill Unlock X,Z,C,V & F',
      description: 'Senjata yang diambil dari anime -.',
      how_to_get: 'Obtained from the Ice Queen NPC at Boss Island .',
      materials: 'title Frost Empress, 1x Ice Core, 4x Frozen Brand,9x Glacier Remnant, 17x Battle Shard, 25x Frost Relic, 40.000 Gems',
      location: 'Boss Island',
      level_req: '-',
      notes: 'Skill F Harus menyelesaikan misi dulu jika ingin membukanya.',
      image: 'sword/Ice_Queen.jpg'
    },
  ],
  melee: [
    {
      id: 'm1', name: 'Thunder Warhammer', rarity: 'legendary',
      type: 'Hammer',
      stats: 'ATK: 1200 | Lightning DMG: +350 | Stun Chance: 40%',
      description: 'Palu perang raksasa yang diimbue petir dari dewa petir Thorkan.',
      how_to_get: 'Drop dari Raid Boss "Thorkan" dengan drop rate 2%.',
      materials: '-',
      location: 'Thunder Peak Raid',
      level_req: '85',
      notes: 'Stun hanya efektif terhadap musuh non-boss.'
    },
    {
      id: 'm2', name: 'Serpent Spear', rarity: 'epic',
      type: 'Spear',
      stats: 'ATK: 580 | Poison DMG: +180 | Range: +1',
      description: 'Tombak bermotif ular yang mengandung racun mematikan di ujungnya.',
      how_to_get: 'Craft menggunakan material dari Snake Den dungeon.',
      materials: 'Viper Fang x6, Poison Gland x4, Ancient Wood x3',
      location: 'Craftsman Naga - Jungle Village',
      level_req: '50',
      notes: 'Poison tick 3 detik sekali selama 15 detik.'
    },
  ],
  devil_fruit: [
    {
      id: 'df1', name: 'Magu Magu no Mi', rarity: 'mythic',
      fruit_type: 'Logia - Magma',
      abilities: 'Kontrol magma, kebal api biasa, transformasi tubuh jadi magma',
      description: 'Salah satu Devil Fruit terkuat bertipe Logia. User bisa menghasilkan, mengontrol, dan bertransformasi menjadi magma.',
      how_to_get: 'Spawn random di dunia setiap 1 jam. Bisa juga drop dari World Boss "Volcano Titan" (0.5%).',
      location: 'Anywhere (random spawn), Volcano Region (higher chance)',
      level_req: '60',
      notes: 'Logia immunity berlaku kecuali kena Haki atau senjata khusus.'
    },
    {
      id: 'df2', name: 'Hito Hito no Mi, Model: Nika', rarity: 'mythic',
      fruit_type: 'Mythical Zoan - Sun God',
      abilities: 'Gear transformations, rubber body, environmental freedom, awakening aura',
      description: 'Buah paling langka dan paling dicari. Memberi kebebasan mutlak kepada pemakainya.',
      how_to_get: 'Hanya bisa di-spawn oleh Game Master saat event special. Sangat langka.',
      location: 'GM Event Only',
      level_req: '100',
      notes: 'Tidak bisa dibeli atau di-trade. Satu-satunya cara lewat event.'
    },
    {
      id: 'df3', name: 'Gura Gura no Mi', rarity: 'legendary',
      fruit_type: 'Paramecia - Tremor',
      abilities: 'Menciptakan gempa bumi dan gelombang kejut udara',
      description: 'Fruit yang mampu menghancurkan dunia. Setiap pukulan membawa tremor dahsyat.',
      how_to_get: 'Spawn random (rate lebih tinggi dari Mythic tier). Sekali per 2 jam.',
      location: 'Random spawn di seluruh map',
      level_req: '80',
      notes: 'AoE tremor bisa merusak terrain secara temporer.'
    },
  ],
  accessories: [
    {
      id: 'a1', name: 'Ring of the Ancient King', rarity: 'legendary',
      slot: 'Ring',
      stats: 'HP: +2500 | All Res: +15% | Cooldown: -10%',
      description: 'Cincin milik raja kuno yang berkuasa ribuan tahun. Memancarkan energi yang terasa di sekitarnya.',
      how_to_get: 'Drop dari Dungeon "Tomb of the Ancient" chest terakhir.',
      materials: '-',
      location: 'Tomb of the Ancient - Boss Chest',
      level_req: '70',
      notes: 'Hanya 1 yang bisa diequip bersamaan dengan unique ring lain.'
    },
    {
      id: 'a2', name: 'Necklace of Shadows', rarity: 'epic',
      slot: 'Necklace',
      stats: 'DEF: +400 | Shadow Dmg: +20% | Stealth CD: -30%',
      description: 'Kalung dari batu shadow crystal yang memberimu bayangan pelindung.',
      how_to_get: 'Craft di Shadow Forge atau beli dari NPC di Shadow Market.',
      materials: 'Shadow Crystal x5, Void Thread x2',
      location: 'Shadow Forge - Nyx City',
      level_req: '45',
      notes: 'Cocok untuk build Rogue/Assassin.'
    },
  ],
  race: [
    {
      id: 'r1', name: 'Dragon Race', rarity: 'legendary',
      passives: 'Dragon Scale: DEF +30% | Fire Immunity | Flight (passive)',
      abilities: 'Dragon Breath, Dragon Transformation (Ultimate), Scale Hardening',
      description: 'Keturunan naga kuno. Memiliki kulit bersisik yang keras dan api dalam darahnya. Sangat langka.',
      how_to_get: 'Spin menggunakan Race Scroll (dari event atau shop). Peluang: 0.5%',
      notes: 'Ras terkuat untuk damage output. Lemah terhadap Ice dan Holy.'
    },
    {
      id: 'r2', name: 'Human Race', rarity: 'common',
      passives: 'Balanced Stats | Adaptable | EXP Boost: +10%',
      abilities: 'Resolve (self buff), Quick Learner (passive)',
      description: 'Ras manusia yang seimbang. Tidak punya kelemahan signifikan, cocok untuk semua build.',
      how_to_get: 'Default race saat membuat karakter.',
      notes: 'Tidak ada kelemahan elemental spesifik. Bonus EXP sangat berguna.'
    },
    {
      id: 'r3', name: 'Mink Race', rarity: 'rare',
      passives: 'Electro innate | Night Vision | Speed +20%',
      abilities: 'Sulong Form (under full moon), Lightning Release, Fur Armor',
      description: 'Ras manusia berbulu dari Zou. Bisa mengeluarkan Electro dari tubuh mereka secara alami.',
      how_to_get: 'Race Scroll spin atau dari NPC Carrot di Zou Island. Peluang: 3%',
      notes: 'Sulong Form hanya aktif saat malam hari (game time).'
    },
  ],
  clan: [
    {
      id: 'cl1', name: 'Uchiha Clan', rarity: 'legendary',
      bonus: 'Sharingan: +30% accuracy | Ninjutsu DMG +25% | Copy Enemy Skill',
      abilities: 'Sharingan Activation, Mangekyo Sharingan (unlock), Fire Style Jutsu',
      description: 'Klan ninja terkenal dengan mata Sharingan mereka yang legendaris. Bisa menyalin skill musuh.',
      how_to_get: 'Clan Scroll spin dengan peluang 0.3%. Bisa di-trade dengan player lain.',
      notes: 'Mangekyo perlu unlock lewat quest khusus.'
    },
    {
      id: 'cl2', name: 'Senju Clan', rarity: 'epic',
      bonus: 'Vitality +40% HP | Wood Style affinity | Healing +25%',
      abilities: 'Wood Style Release, Cellular Regeneration, Nature Energy',
      description: 'Klan dengan vitalitas luar biasa dan affinitas terhadap elemen kayu.',
      how_to_get: 'Clan Scroll spin dengan peluang 1%.',
      notes: 'Pasangan sempurna dengan build support/healer.'
    },
  ],
  rune: [
    {
      id: 'ru1', name: 'Void Rune', rarity: 'mythic',
      element: 'Void',
      effect: 'Serangan menembus DEF 50% | Chance apply Nullify (hapus 1 buff musuh)',
      description: 'Rune dari dimensi kekosongan. Serangan yang di-enchant olehnya mengandung kehampaan.',
      how_to_get: 'Drop dari Dimensional Rift Event Boss.',
      materials: '-',
      location: 'Dimensional Rift (Event)',
      level_req: '80',
      notes: 'Sangat efektif vs buff-heavy enemies.'
    },
    {
      id: 'ru2', name: 'Flame Rune', rarity: 'rare',
      element: 'Fire',
      effect: 'Tambahkan Fire DMG +150 | Burn chance 20% (3 detik)',
      description: 'Rune api paling umum. Bisa diaplikasikan ke hampir semua senjata.',
      how_to_get: 'Beli dari Rune Shop NPC atau craft di Rune Forge.',
      materials: 'Fire Essence x3, Blank Rune Stone x1',
      location: 'Rune Shop - Ignis City',
      level_req: '25',
      notes: 'Tidak bisa distack dengan Ice Rune pada senjata yang sama.'
    },
    {
      id: 'ru3', name: 'Storm Rune', rarity: 'epic',
      element: 'Lightning',
      effect: 'Lightning DMG +250 | Stun 0.5 detik | AoE splash 30%',
      description: 'Rune petir yang membuat senjata mengeluarkan kilatan listrik di setiap serangan.',
      how_to_get: 'Drop dari Storm Eagle boss atau craft.',
      materials: 'Storm Crystal x4, Conductor Core x2, Blank Rune Stone x2',
      location: 'Storm Peaks / Rune Forge Advanced',
      level_req: '50',
      notes: 'AoE splash sangat efektif di group farming.'
    },
  ],
  npc: [
    {
      id: 'n1', name: 'Elara the Merchant', role: 'Weapon Vendor & Quest Giver',
      location: 'Silver Town', coordinates: 'X: 450, Y: 230',
      functions: 'Jual beli senjata, tukar material, kasih quest side chain "The Lost Relic"',
      sells: 'Silver Dagger, Iron Sword, Bronze Shield, Basic Potions',
      description: 'Pedagang wanita setengah elf yang ramah. Dia memiliki banyak koneksi ke dungeon-dungeon di wilayah barat.',
      notes: 'Quest "The Lost Relic" memberikan reward Rare Accessory saat selesai.'
    },
    {
      id: 'n2', name: 'Blacksmith Ignar', role: 'Craftsman & Forge Master',
      location: 'Ignis City - Volcano District', coordinates: 'X: 820, Y: 115',
      functions: 'Craft senjata api, upgrade weapon tier, tempa material Volcanic',
      sells: 'Craft service (bayar Gold), Volcanic Steel, Magma Ore',
      description: 'Blacksmith tua dengan lengan yang dipenuhi luka bakar. Satu-satunya yang bisa menempa senjata dari material Volcano.',
      notes: 'Perlu reputasi "Ignis Guild" minimal Honored untuk bisa craft item Legendary.'
    },
    {
      id: 'n3', name: 'Shadow Master Nyx', role: 'Skill Trainer & Black Market',
      location: 'Nyx City - Underground', coordinates: 'X: 300, Y: 580',
      functions: 'Mengajarkan Shadow skills, jual item black market, reset skill tree',
      sells: 'Shadow Scroll, Stealth Potion, Forbidden Tome, Void Essence',
      description: 'Entitas misterius yang hanya muncul setelah matahari terbenam. Tidak ada yang tahu apakah dia manusia atau bukan.',
      notes: 'Unlock dengan menyelesaikan quest "Into the Shadows". Lokasi tersembunyi (trapdoor di belakang kedai).'
    },
  ],
  items_drop: [
    {
      id: 'id1', name: 'Soul Shard', rarity: 'uncommon',
      drop_from: 'Ghost, Specter, Soul Guardian',
      drop_rate: '15% dari Ghost, 8% dari Soul Guardian',
      location: 'Haunted Forest, Ghost Dungeon B1-B3',
      use: 'Material craft untuk Dark-type weapons dan beberapa aksesori. Juga digunakan sebagai currency oleh NPC Reaper.',
      description: 'Pecahan jiwa yang terkristal. Memancarkan cahaya biru redup yang agak menyeramkan.',
      notes: 'Max stack 99. Bisa dijual ke NPC seharga 500 Gold masing-masing.'
    },
    {
      id: 'id2', name: 'Phoenix Feather', rarity: 'epic',
      drop_from: 'Phoenix Boss, Flame Bird Elite',
      drop_rate: '5% dari Phoenix Boss, 1% dari Flame Bird',
      location: 'Volcano Summit, Fire Dungeon Layer 5',
      use: 'Material crafting untuk weapon api tier tinggi. Juga digunakan untuk quest "Rise from Ashes".',
      description: 'Bulu dari phoenix yang tidak pernah padam. Hangat saat disentuh dan sedikit bercahaya.',
      notes: 'Sangat dicari untuk Blazing Katana craft.'
    },
    {
      id: 'id3', name: 'Dragon Scale Fragment', rarity: 'rare',
      drop_from: 'Young Dragon, Dragon Minion, Dragon Boss',
      drop_rate: '20% Young Dragon, 5% Dragon Boss',
      location: 'Dragon Lair, Sky Island',
      use: 'Material untuk armor Dragon tier dan beberapa aksesori DEF tinggi.',
      description: 'Fragment sisik naga. Sangat keras - bahkan pisau biasa tidak bisa menggoresnya.',
      notes: '5 fragment bisa digabungkan menjadi 1 Dragon Scale penuh di Blacksmith.'
    },
  ],
  boss: [
    {
      id: 'b1', name: 'Hollowed King', rarity: 'legendary',
      location: 'Dark Castle - Floor B5',
      hp: '2,500,000',
      respawn: 'Setiap 24 jam (real time)',
      drops: 'Zangetsu Blade (2%), Dark Crown (5%), Void Essence x10 (30%), King\'s Soul (15%), Gold 50,000-100,000',
      weaknesses: 'Holy damage, Light element, Dawn\'s Blessing buff',
      recommended_level: '70+',
      description: 'Raja yang dikutuk dan dibuat menjadi hantu oleh penyihir gelap. Bertahta di kedalaman Dark Castle.',
      strategy: 'Phase 1 (100-60% HP): Main DPS, hindari Shadow Slam. Phase 2 (60-30%): Mulai spam AOE Shadow, butuh healer aktif. Phase 3 (30-0%): Berserk, interval serangan 2x lebih cepat. Gunakan Holy buff sebelum P3.',
      notes: 'Party minimum 4 orang. Bawa Holy Water sebanyak mungkin.'
    },
    {
      id: 'b2', name: 'Volcano Titan', rarity: 'mythic',
      location: 'Volcano Summit - Eruption Zone',
      hp: '8,000,000',
      respawn: 'Setiap 72 jam (real time)',
      drops: 'Magu Magu no Mi (0.5%), Titan Core (3%), Magma Essence x20 (25%), Titan\'s Gauntlet (2%), Gold 200,000-500,000',
      weaknesses: 'Water/Ice element, special: Volcano Seal item',
      recommended_level: '90+',
      description: 'Titan purba yang terjaga dari tidurnya ketika gunung berapi mulai meletus. Boss tier tertinggi di dunia overworld.',
      strategy: 'Butuh minimum 10 player. Water mage wajib ada minimal 3 orang untuk reduce damage. Hindari ground cracks (indikator lava eruption). Focus DPS di kaki, bukan badan.',
      notes: 'World Boss - semua player bisa ikut. Drop dibagi berdasarkan damage contribution.'
    },
    {
      id: 'b3', name: 'Thorkan, God of Thunder', rarity: 'legendary',
      location: 'Thunder Peak - Raid Instance',
      hp: '5,000,000',
      respawn: 'Instance reset setiap minggu',
      drops: 'Thunder Warhammer (2%), Thorkan\'s Helm (3%), Storm Rune (8%), Thunder Crystal x5 (40%), Gold 80,000',
      weaknesses: 'Earth element, Ground attacks (stagger)',
      recommended_level: '80+',
      description: 'Dewa petir yang diturunkan dari pantheon karena melanggar aturan ilahi. Kekuatannya masih dahsyat meski sudah dihukum.',
      strategy: 'Tank wajib punya lightning resistance minimal 50%. DPS jangan clump karena chain lightning. Interupsi skill "Thunder Judgment" dengan Stagger sebelum cast selesai.',
      notes: 'Raid 8 orang. Weekly lockout per karakter.'
    },
  ],
  code_redeem: [
    {
      id: 'cr1', name: 'UPDATE1', rarity: 'epic',
      description: 'Hadiah: 2x EXP (30 Menit) & 50.000 Gold',
      notes: 'Hanya bisa diklaim 1x per akun. Kedaluwarsa: -'
    }
  ],
};

// ============================================================
// STATE
// ============================================================
let currentCategory = null;
let currentFilter = '';
let editingItem = null;

// ============================================================
// INIT
// ============================================================
window.onload = function() {
  updateStats();
  updateCounts();
  document.getElementById('welcomeModal').classList.remove('hidden');
};

function updateStats() {
  let total = 0;
  let legendary = 0;
  Object.values(DB).forEach(arr => {
    arr.forEach(item => {
      total++;
      if (item.rarity === 'legendary' || item.rarity === 'mythic') legendary++;
    });
  });
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statBoss').textContent = DB.boss.length;
  document.getElementById('statLegendary').textContent = legendary;
  document.getElementById('statNPC').textContent = DB.npc.length;
}

function updateCounts() {
  Object.keys(CATEGORIES).forEach(key => {
    const el = document.getElementById('count-' + key);
    if (el) el.textContent = (DB[key] || []).length + ' items';
  });
}

// ============================================================
// NAVIGATION
// ============================================================
function selectCategory(key) {
  currentCategory = key;
  currentFilter = '';
  const cat = CATEGORIES[key];

  document.getElementById('heroSection').classList.add('hidden');
  const cv = document.getElementById('categoryView');
  cv.classList.remove('hidden');
  cv.classList.add('anim-in');

  document.getElementById('catIcon').textContent = cat.icon;
  document.getElementById('catTitle').textContent = cat.title;
  document.getElementById('catDesc').textContent = cat.desc;
  document.getElementById('breadcrumbCat').textContent = cat.title;
  document.getElementById('catSearch').value = '';

  renderItems();
}

function backToHome() {
  currentCategory = null;
  document.getElementById('heroSection').classList.remove('hidden');
  document.getElementById('categoryView').classList.add('hidden');
  updateStats();
  updateCounts();
}

// ============================================================
// RENDER ITEMS
// ============================================================
function renderItems() {
  const grid = document.getElementById('itemsGrid');
  const empty = document.getElementById('emptyState');
  const items = (DB[currentCategory] || []).filter(item => {
    if (!currentFilter) return true;
    return JSON.stringify(item).toLowerCase().includes(currentFilter.toLowerCase());
  });

  if (items.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  grid.innerHTML = items.map(item => renderItemCard(item)).join('');
}

function getRarityBadge(rarity) {
  const labels = {common:'Common',uncommon:'Uncommon',rare:'Rare',epic:'Epic',legendary:'Legendary',mythic:'Mythic'};
  return `<span class="rarity-${rarity || 'common'} text-xs px-2 py-0.5 rounded-full font-title" style="font-size:0.65rem;letter-spacing:0.05em">${labels[rarity] || rarity || 'Common'}</span>`;
}

function getCatIcon(key) {
  return CATEGORIES[key]?.icon || '📄';
}



// ============================================================
// ITEM MODAL
// ============================================================
function openItemModal(id) {
  const items = DB[currentCategory] || [];
  const item = items.find(i => i.id === id);
  if (!item) return;

  document.getElementById('itemModal').classList.remove('hidden');
  document.getElementById('itemModalContent').innerHTML = renderItemDetail(item);
}

function closeItemModal(e) {
  if (!e || e.target === document.getElementById('itemModal') || !e.target) {
    document.getElementById('itemModal').classList.add('hidden');
  }
}

function renderItemCard(item) {
  const imgCats = ['sword', 'melee', 'accessories', 'items_drop'];
  let visualHtml = '';
  
  if (imgCats.includes(currentCategory)) {
    // Pakai gambar untuk kategori tertentu
    visualHtml = `<img src="${item.image || 'https://via.placeholder.com/48x48/1a1a2e/c9a84c?text=IMG'}" alt="img" class="w-12 h-12 object-cover rounded-lg border border-[var(--border-bright)] flex-shrink-0">`;
  } else {
    // Pakai emoji untuk kategori lainnya
    const icon = CATEGORIES[currentCategory]?.icon || '📄';
    visualHtml = `<div class="text-2xl flex-shrink-0 w-12 text-center">${icon}</div>`;
  }
  
  return `
  <div class="item-card p-4" onclick="openItemModal('${item.id}')">
    <div class="flex items-start gap-3">
      ${visualHtml}
      <div class="flex-1 min-w-0">
        <div class="font-title text-sm text-white truncate">${item.name}</div>
        <div class="mt-1">${getRarityBadge(item.rarity)}</div>
        ${item.stats ? `<div class="text-xs text-gray-500 mt-2 truncate">${item.stats}</div>` : ''}
        ${item.role ? `<div class="text-xs text-gray-500 mt-2 truncate">${item.role}</div>` : ''}
        ${item.fruit_type ? `<div class="text-xs mt-2 truncate" style="color:#c07aff">${item.fruit_type}</div>` : ''}
        ${item.element ? `<div class="text-xs mt-2 truncate" style="color:#6ca8ff">${item.element} Element</div>` : ''}
        ${item.location ? `<div class="text-xs text-gray-600 mt-1 truncate">📍 ${item.location}</div>` : ''}
      </div>
    </div>
  </div>`;
}

function renderItemDetail(item) {
  const imgCats = ['sword', 'melee', 'accessories', 'items_drop'];
  let visualHtml = '';
  
  if (imgCats.includes(currentCategory)) {
    visualHtml = `<img src="${item.image || 'https://via.placeholder.com/64x64/1a1a2e/c9a84c?text=IMG'}" alt="img" class="w-16 h-16 object-cover rounded-xl border border-[var(--gold)]">`;
  } else {
    const icon = CATEGORIES[currentCategory]?.icon || '📄';
    visualHtml = `<div class="text-4xl w-16 text-center">${icon}</div>`;
  }
  
  // Bagian tombol edit sudah dihapus dari sini
  let html = `
  <div class="flex items-center gap-4 mb-4">
    ${visualHtml}
    <div>
      <h2 class="font-display text-lg gold-text">${item.name}</h2>
      <div class="flex items-center gap-2 mt-1">
        ${getRarityBadge(item.rarity)}
        ${item.type ? `<span class="tag">${item.type}</span>` : ''}
        ${item.fruit_type ? `<span class="tag" style="color:#c07aff;border-color:rgba(192,122,255,0.3)">${item.fruit_type}</span>` : ''}
        ${item.element ? `<span class="tag" style="color:#6ca8ff;border-color:rgba(106,168,255,0.3)">${item.element}</span>` : ''}
        ${item.slot ? `<span class="tag">${item.slot}</span>` : ''}
        ${item.role ? `<span class="tag">${item.role}</span>` : ''}
      </div>
    </div>
  </div>
  <div class="gold-divider"></div>`;
  
  if (item.description) {
    html += `<p class="text-gray-300 text-sm mb-3 leading-relaxed">${item.description}</p>`;
    html += `<div class="gold-divider"></div>`;
  }
  
  // Sisa kodenya (stats, hp, dll) biarkan sama seperti sebelumnya:
  if (item.stats) html += `<div class="mb-4"><div class="section-label mb-2">📊 Stats</div><div class="p-3 rounded-lg text-sm" style="background:rgba(201,168,76,0.06);border:1px solid var(--border)">${item.stats}</div></div>`;
  if (item.hp) html += `<div class="mb-4 boss-hp p-3 rounded-lg"><div class="section-label mb-2">💀 Boss Info</div><div class="grid grid-cols-2 gap-2 text-sm"><div><span class="text-gray-500">HP:</span> <span style="color:#ff5577">${item.hp}</span></div><div><span class="text-gray-500">Respawn:</span> <span class="text-gray-300">${item.respawn || '-'}</span></div><div><span class="text-gray-500">Min. Level:</span> <span style="color:var(--gold)">${item.recommended_level || '-'}</span></div><div><span class="text-gray-500">Weakness:</span> <span style="color:#6ca8ff">${item.weaknesses || '-'}</span></div></div></div>`;
  if (item.location && currentCategory === 'npc') html += `<div class="mb-4"><div class="section-label mb-2">📍 Lokasi & Info</div><table class="wiki-table rounded-lg overflow-hidden" style="background:var(--dark-4)"><tr><th>Lokasi</th><td>${item.location}</td></tr>${item.coordinates ? `<tr><th>Koordinat</th><td>${item.coordinates}</td></tr>` : ''}${item.functions ? `<tr><th>Fungsi</th><td>${item.functions}</td></tr>` : ''}${item.sells ? `<tr><th>Jual</th><td>${item.sells}</td></tr>` : ''}</table></div>`;
  if (item.how_to_get) html += `<div class="mb-4"><div class="section-label mb-2">🎯 Cara Mendapatkan</div><div class="p-3 rounded-lg text-sm text-gray-300 leading-relaxed" style="background:rgba(80,220,120,0.05);border:1px solid rgba(80,220,120,0.15)">${item.how_to_get}</div></div>`;
  if (item.materials && item.materials !== '-') html += `<div class="mb-4"><div class="section-label mb-2">🧪 Material Craft</div><div class="flex flex-wrap gap-1">${item.materials.split(',').map(m => `<span class="material-tag">🧪 ${m.trim()}</span>`).join('')}</div></div>`;
  if (item.location && currentCategory !== 'npc') html += `<div class="mb-4"><div class="section-label mb-2">📍 Lokasi</div><span class="location-tag">📍 ${item.location}</span></div>`;
  if (item.level_req) html += `<div class="mb-4"><div class="section-label mb-2">⚡ Level Requirement</div><span style="color:var(--gold);font-family:'Cinzel',serif;font-size:0.9rem">Level ${item.level_req}+</span></div>`;
  if (item.drops) html += `<div class="mb-4"><div class="section-label mb-2">💎 Drop Table</div><div class="flex flex-wrap gap-1">${item.drops.split(',').map(d => `<span class="drop-tag">💎 ${d.trim()}</span>`).join('')}</div></div>`;
  if (item.drop_from) html += `<div class="mb-4"><div class="section-label mb-2">👾 Drop Info</div><table class="wiki-table rounded-lg overflow-hidden" style="background:var(--dark-4)"><tr><th>Drop Dari</th><td>${item.drop_from}</td></tr><tr><th>Drop Rate</th><td>${item.drop_rate}</td></tr>${item.use ? `<tr><th>Kegunaan</th><td>${item.use}</td></tr>` : ''}</table></div>`;
  if (item.abilities) html += `<div class="mb-4"><div class="section-label mb-2">✨ Abilities</div><div class="p-3 rounded-lg text-sm text-gray-300" style="background:rgba(160,60,255,0.05);border:1px solid rgba(160,60,255,0.2)">${item.abilities}</div></div>`;
  if (item.passives) html += `<div class="mb-4"><div class="section-label mb-2">🛡️ Passives</div><div class="p-3 rounded-lg text-sm text-gray-300" style="background:rgba(74,158,255,0.05);border:1px solid rgba(74,158,255,0.2)">${item.passives}</div></div>`;
  if (item.bonus) html += `<div class="mb-4"><div class="section-label mb-2">⭐ Clan Bonus</div><div class="p-3 rounded-lg text-sm text-gray-300" style="background:rgba(201,168,76,0.06);border:1px solid var(--border)">${item.bonus}</div></div>`;
  if (item.effect) html += `<div class="mb-4"><div class="section-label mb-2">🔮 Effect</div><div class="p-3 rounded-lg text-sm text-gray-300" style="background:rgba(160,60,255,0.05);border:1px solid rgba(160,60,255,0.2)">${item.effect}</div></div>`;
  if (item.strategy) html += `<div class="mb-4"><div class="section-label mb-2">🗺️ Strategi</div><div class="p-3 rounded-lg text-sm text-gray-300 leading-relaxed" style="background:rgba(255,107,53,0.05);border:1px solid rgba(255,107,53,0.2)">${item.strategy}</div></div>`;
  if (item.notes) html += `<div class="mb-2"><div class="section-label mb-2">📝 Notes</div><div class="p-3 rounded-lg text-sm text-gray-400 italic" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07)">${item.notes}</div></div>`;
  
  return html;
}

// ============================================================
// SEARCH
// ============================================================
function filterItems(val) {
  currentFilter = val;
  renderItems();
}

function handleGlobalSearch(val) {
  if (!val) return;
  // Just a hint - could expand to cross-category search
}
function closeWelcomeModal(e) {
  // Menutup modal jika tombol diklik atau area luar modal diklik
  if (!e || e.target === document.getElementById('welcomeModal') || !e.target) {
    document.getElementById('welcomeModal').classList.add('hidden');
  }
}