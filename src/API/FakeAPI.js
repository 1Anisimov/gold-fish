import image from "../app/image/image 12.png"
import imageSecond from "../app/image/tavlei-stena-cshitov.jpg"

 export const products = [
    {
     img: image,
     price: 3000,
     name: "Warhammer 40,000: Chaos Space Marines",
     players: "3-5",
     time: "30-60",
     age: "18",
     category:"board_games",
     subcategory:"Games_for_companies",
     id:1,
     sale:2550,
     saleProcent:15,
    },
    {
        img: imageSecond,
        price: 1690,
        name: "Тавлеи: Стена щитов",
        players: "2",
        time: "20-40",
        age: "6",
        category:"board_games",
        subcategory:"Games_for_two",
        id:2,
        sale:null,
        saleProcent:null,
       },
       {
        img: image,
        price: 4000,
        name: "Warhammer 40,000: Chaos Space Marines",
        players: "3-5",
        time: "30-60",
        age: "18",
        category:"board_games",
        subcategory:"Games_for_companies",
        id:3,
        sale:null,
        saleProcent:null,
       },
       {
        img: image,
        price: 13000,
        name: "Warhammer 40,000: Chaos Space Marines",
        players: "3-5",
        time: "30-60",
        age: "18",
        category:"board_games",
        subcategory:"Games_for_companies",
        id:4,
        sale:null,
        saleProcent:null,
       },
       {
        img: image,
        price: 1900,
        name: "Warhammer 40,000: Chaos Space Marines",
        players: "3-5",
        time: "30-60",
        age: "18",
        category:"board_games",
        subcategory:"Games_for_companies",
        id:5,
        sale:null,
        saleProcent:null,
       },
       {
           img: imageSecond,
           price: 7490,
           name: "Тавлеи: Стена щитов",
           players: "2",
           time: "20-40",
           age: "6",
           category:"board_games",
           subcategory:"Games_for_two",
           id:6,
           sale:4868,
           saleProcent:35,
          },
          {
           img: image,
           price: 1000,
           name: "Chaos Space Marines",
           players: "3-5",
           time: "30-60",
           age: "18",
           category:"magic",
           subcategory:"Dominaria_United",
           id:7,
           sale:900,
           saleProcent:10,
          },
          {
           img: image,
           price: 6000,
           name: "Warhammer 40,000: Chaos Space Marines",
           players: "3-5",
           time: "30-60",
           age: "18",
           category:"warhammer",
           subcategory:"The_Horus_Heresy",
           id:8,
           sale:4800,
           saleProcent:20,
          }
];
export const categoriesArray = [
    { name: 'Настольные игры', value: 'board_games' },
    { name: 'Warhammer 40000', value: 'warhammer' },
    { name: 'Magic: the Gathering', value: 'magic' },
    { name: 'Аксессуры для игр', value: 'accessories_game' },
    { name: 'Краски', value: 'paints' },
    { name: 'Аксессуары для моделизма', value: 'accessories_modeling' }
  ];
  











 export const subcatigoriesArray = [
    {name:"Ролевые Игры", value:"Role_playing_games", category:"board_games"},
    {name:"Игры для двоих", value:"Games_for_two", category:"board_games"},
    {name:"Игры для компаний", value:"Games_for_companies", category:"board_games"},
    {name:"Стратегические игры", value:"Strategy_games", category:"board_games"},
    {name:"Кооперативные игры", value:"Coop_games", category:"board_games"},
    {name:"Логические игры", value:"Logic_games", category:"board_games"},
    {name:"Игры для детей", value:"Games_for_children", category:"board_games"},

    {name:"The Horus Heresy", value:"The_Horus_Heresy", category:"warhammer"},
    {name:"The Old World", value:"The_Old_World", category:"warhammer"},
    {name:"Warhammer 40k", value:"Warhammer_40k", category:"warhammer"},
    {name:"Age of Sigmar", value:"Age_of_Sigmar", category:"warhammer"},
    {name:"Warcry", value:"Warcry", category:"warhammer"},
    {name:"Warhammer: Underworlds", value:"Warhammer_Underworlds", category:"warhammer"},
    {name:"Killteam", value:"Killteam", category:"warhammer"},
    {name:"Necromunda", value:"Necromunda", category:"warhammer"},
    {name:"Lord of the Rings", value:"Lord_of_the_Rings", category:"warhammer"},
    {name:"Blood Bowl", value:"Blood_Bowl", category:"warhammer"},
    {name:"Titanicus", value:"Titanicus", category:"warhammer"},
    {name:"Террейн", value:"Terrain", category:"warhammer"},
    {name:"Альтернативные миниатюры", value:"Alternative_miniatures", category:"warhammer"},

    {name:"Dominaria United", value:"Dominaria_United", category:"magic"},
    {name:"March of the Machine", value:"March_of_the_Machine", category:"magic"},
    {name:"The Brothers War", value:"The_Brothers_War", category:"magic"},
    {name:"Иннистрад: Полночная Охота", value:"Innistrad_Midnight_Hunt", category:"magic"},
    {name:"Приключения в Забытых Королевствах", value:"Adventures_in_the_Forgotten_Realms", category:"magic"},
    {name:"Иннистрад Багровая Клятва", value:"Innistrad_Crimson_Oath", category:"magic"},
    {name:"Kamigawa Neon Dynasty", value:"Kamigawa_Neon_Dynasty", category:"magic"},
    {name:"Расцвет Зендикара", value:"Zendikar_Rising", category:"magic"},
    {name:"Калдхайм", value:"Kaldheim", category:"magic"},
    {name:"Стриксхейвен", value:"Strixhaven", category:"magic"},

    {name:"Протекторы", value:"Protectors", category:"accessories_game"},
    {name:"Альбомы", value:"Albums", category:"accessories_game"},
    {name:"Коробочки", value:"Boxes", category:"accessories_game"},
    {name:"Кубики", value:"Cubes", category:"accessories_game"},
    {name:"Коврики", value:"Rugs", category:"accessories_game"},
    {name:"Мешочки", value:"Pouches", category:"accessories_game"},
    {name:"Case", value:"Case", category:"accessories_game"},

    {name:"Jim Scale", value:"Jim_Scale", category:"paints"},
    {name:"Citadel", value:"Citadel", category:"paints"},
    {name:"AK", value:"AK", category:"paints"},
    {name:"Bosny", value:"Bosny", category:"paints"},
    {name:"Vallejo", value:"Vallejo", category:"paints"},
    {name:"Zip Maket", value:"Zip_Maket", category:"paints"},

    {name:"Green Stuff World", value:"Green_Stuff_World", category:"accessories_modeling"},
    {name:"Кисти", value:"Brushes", category:"accessories_modeling"},
    {name:"Инструменты", value:"Tools", category:"accessories_modeling"},
    {name:"Декорации", value:"Scenery", category:"accessories_modeling"},
    {name:"Подставки", value:"Stands", category:"accessories_modeling"},

 ]
export function getAllProducts () {
    return products;
}