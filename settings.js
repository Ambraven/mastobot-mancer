export const INSTANCE_URL = 'https://localhost:3000/api/v1';
export const ACCESS_TOKEN = '<your token here>';
export const TOOT_OPTIONS = {
  visibility: 'public',
};

export const REPLACEMENTS = {
  'cafe': 'coffee',
  'caffe': 'coffee',
  'coffe': 'coffee',
  'kawa': 'coffee',

  'the': 'tea',

  'annif': 'birthday',
  'anif': 'birthday',
  'anniv': 'birthday',
  'aniv': 'birthday',
  'anniversaire': 'birthday',
  
  'mochi': 'dango',

  'glace': 'icecream',
  'sorbet': 'icecream',  
};

export const WHAT_TO_SAY = {
  coffee: [
    (from, to) => makeHallumancer(`${to} Here is some coffee! (offered by ${from})`, '☕'),
    (from, to) => makeHallumancer(`${to} Have some coffee from ${from}!`, '☕'),
    (from, to) => makeHallumancer(`${to} What about a delicious coffee, offered by ${from}?`, '☕'),
    (from, to) => makeHallumancer(`${to} Hello, ${from} wants to offer you a coffee!`, '☕'),
    (from, to) => makeHallumancer(`${to} Enjoy a warm and delicious coffee! Offered by ${from}.`, '☕'),
    (from, to) => makeHallumancer(`${to} Black, with sugar or with milk? Under the command of ${from}, I can cast all the coffee you want!`, '☕'),
    (from, to) => makeHallumancer(`${to} Hey, ${from} thinks you deserve a coffee! Agreed!`, '☕'),
    (from, to) => makeHallumancer(`${to} Be prepared! ${from} invoked the coffeemancer for you!`, '☕'),
    (from, to) => makeHallumancer(`${to} Black like magic! (and offered by ${from})`, '☕'),
  ],

  tea: [
    (from, to) => makeMancer(`${to} Here is some tea! (offered by ${from})`, '🍵'),
    (from, to) => makeMancer(`${to} Have some tea from ${from}!`, '🍵'),
    (from, to) => makeMancer(`${to} What about a delicious and flavored tea, offered by ${from}?`, '🍵'),
    (from, to) => makeMancer(`${to} Hello, ${from} wants to offer you this cup of tea!`, '🍵'),
    (from, to) => makeMancer(`${to} Enjoy What about a warm and flavored tea! Offered by ${from}.`, '🍵'),
    (from, to) => makeMancer(`${to} Black, green, with sugar or with milk? Under the command of ${from}, I can cast all the tea you want!`, '🍵'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve a nice cup of tea! Agreed!`, '🍵'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the teamancer for you!`, '🍵'),
    (from, to) => makeMancer(`${to} Green like magic!  (and offered by ${from})`, '🍵'),            
  ],

  birthday: [
    (from, to) => makeMancer(`${to} Is it your birthday? Neat!`, BIRTHDAY),
    (from, to) => makeMancer(`${to} A happy birthday from ${from}!`, BIRTHDAY),
    (from, to) => makeMancer(`${to} How nice, ${from} remembered it\'s your birthday today!`, BIRTHDAY),   
    (from, to) => makeMancer(`${to} Hi, ${from} wants to wish you a happy birthday! Let me cast something for you.`, BIRTHDAY),
    (from, to) => makeMancer(`${to} Hello, ${from} wishes you a happy birthday.`, BIRTHDAY),
    (from, to) => makeMancer(`${to} Hey, ${from} reminded me of your birthday!`, BIRTHDAY),
  ],

  cookie: [
    (from, to) => makeMancer(`${to} Would you like a cookie? It'\s a gift from ${from}.`, '🍪'),
    (from, to) => makeMancer(`${to} Here, have a cookie from ${from}!`, '🍪'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve a cookie!`, '🍪'),   
    (from, to) => makeMancer(`${to} Yum, there is chocolate in it and ${from} thinks you may enjoy some!`, '🍪'),
    (from, to) => makeMancer(`${to} A fresh baked cookie, offered by ${from}.`, '🍪'),
    (from, to) => makeMancer(`${to} Cookie! (offered by ${from})`, '🍪'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the cookiemancer for you!`, '🍪'),
  ],

  pizza: [
    (from, to) => makeMancer(`${to} Hello, ${from} wants to share a pizza with you.`, '🍕'),
    (from, to) => makeMancer(`${to} A nice pizza, offered by ${from}!`, '🍕'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve this pizza!`, '🍕'),   
    (from, to) => makeMancer(`${to} Yum, ${from} wants you to have this delicous pizza.`, '🍕'),
    (from, to) => makeMancer(`${to} Regina, veggie, margherita? Under the command of ${from}, I can cast any pizza for you! Even with pineapples!`, '🍕'),
    (from, to) => makeMancer(`${to} Pizza! (offered by ${from})`, '🍕'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the pizzamancer for you!`, '🍕'),
  ],

  dango: [
    (from, to) => makeMancer(`${to} Here, have some dangos from ${from}!`, '🍡'),
    (from, to) => makeMancer(`${to} Hey, ${from} thinks you deserve something sweet and squishy!`, '🍡'),   
    (from, to) => makeMancer(`${to} Sweet, flavored and soft! (offered by ${from})`, '🍡'),
    (from, to) => makeMancer(`${to} Rice, red bean, green tea. It\'s dango time! (offered by ${from})`, '🍡'),
    (from, to) => makeMancer(`${to} Some dangos and a warm cup of green tea, yum! (offered by ${from})`, '🍡🍵'),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the dangomancer for you!`, '🍡'),
  ],

  icecream: [
    (from, to) => makeMancer(`${to} Here, have a sweet ice cream from ${from}!`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} Hey, ${from} would like to offer you this ice cream`, ICE_CREAMS),   
    (from, to) => makeMancer(`${to} Yum! Ice cream! (offered by ${from})`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} Vanilla, strawberry, chocolate, pistachio? Under the command of ${from}, I can cast any ice cream for you!`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} It\'s hot in here, would you like some ice cream? ${from} thinks you would.`, ICE_CREAMS),
    (from, to) => makeMancer(`${to} Be prepared! ${from} invoked the icecreamancer for you!`, ICE_CREAMS),
  ],
};

const CAKES = ['🎂', '🍰'];
const BIRTHDAY = [...CAKES, '🎁', '🍾', '🎂🍾', '🍰🍾', '🎂🥂', '🍰🥂', '🎶🎂🎶', '🎶🍰🎶', '🎶🎁🎶', '🎶🍾🎶'];
const DRINKS = ['🍷', '🍸', '🍹', '🍺'];
const ICE_CREAMS = ['🍨', '🍧', '🍦'];

const SPARKLES = [
  '☆ﾟ.*',
  '☆ﾟ๑*',
  '*:･ﾟ✧',
  '✧°๑･⁺｡',
  '*･ﾟ๑°',
  '☆ﾟ*･｡ﾟ',
  '*ﾟ✲*☆',
  '✩⁺˚✲°',
  '✧ﾟ.*・',
  '✲ﾟ๑*.°',
];

const FACES = [
  ...HALLUMANCER_FACES,
  'ᵔ ◡ ᵔ',
  'ﾟ ◡ ﾟ',
  '⚆ ◡ ⚆',
  '◔ ◡ ◔',
  '• ◡ •',
  'ᵔ ᴥ ᵔ',
  'ﾟ ᴥ ﾟ',
  '⚆ ᴥ ⚆',
  '◔ ᴥ ◔',
  '• ᴥ •',
  'ᵔ ω ᵔ',
  'ﾟ ω ﾟ',
  '⚆ ω ⚆',
  '◔ ω ◔',
  '• ω •',
  'ᵔ ʖ ᵔ',
  'ﾟ ʖ ﾟ',
  '⚆ ʖ ⚆',
  '◔ ʖ ◔',
  '• ʖ •',
];
const makeMancer = (before, item, faces = FACES) => {
  if (Array.isArray(item)) {
    item = randomPick(item);
  }

  const face = randomPick(FACES);
  const sparkles = randomPick(SPARKLES);
  
  return `${before}\n(∩ ${face} )⊃━${sparkles}${item}`.trim();
}


const HALLUMANCER_FACES = [
  '◉ ᗜ ◉',
  '☼ ᗜ ☼',
  '⚆ ᗜ ⚆',
  '◔ ᗜ ◔',
  '• ᗜ •',
  '° ᗜ °',
  '* ᗜ *',
  '@ ᗜ @',
  '◉ ◡ ◉',
  '☼ ◡ ☼',
];
const makeHallumancer = (before, item, faces = HALLUMANCER_FACES) => {
  return makeMancer(before, item, faces);
}

const randomPick = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}