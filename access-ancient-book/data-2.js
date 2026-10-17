/* The Ancient Healing Recipe Book — Chapter 3 & 4 recipes */
window.BOOK.recipes.push(

/* ═════════════════════════ CHAPTER 3 · SKIN & BEAUTY ═════════════════════════ */
{
  id: 's1', ch: 'skin', title: 'Raw Honey & Turmeric Glow Mask', tag: 'For dark spots and dull, tired skin',
  type: 'mask', color: '#e9a92a', origin: 'Indian', time: '20 min', when: 'Evening', yield: '1 mask', often: 'Twice a week',
  ing: [['honey', '1 tablespoon raw honey'], ['turmericpowder', '¼ teaspoon ground turmeric'], ['yogurt', '1 teaspoon plain yogurt'], ['lemon', '2 drops lemon juice (optional)']],
  steps: ['Mix the honey, turmeric and yogurt into a smooth paste in a small dish.', 'Wash your face and pat it dry.', 'Spread a thin layer over your face, avoiding the eyes.', 'Relax for 15 minutes.', 'Rinse off with warm water, then splash with cool water and pat dry.'],
  why: 'Indian brides have used turmeric pastes before their weddings for generations. Turmeric is soothing, honey is naturally antibacterial and moisturising, and the lactic acid in yogurt gently loosens dull skin cells.',
  tip: 'Use a tiny amount of turmeric. More is not better, it only stains.',
  caution: 'Test on your inner arm 24 hours before using on your face. Turmeric can leave a yellow tint on very fair skin for a few hours. Leave out the lemon if your skin is sensitive, and avoid sun straight after.'
},
{
  id: 's2', ch: 'skin', title: 'Rosehip & Vitamin E Night Oil', tag: 'For stretch marks, scars and crepey skin',
  type: 'oil', color: '#e0702a', origin: 'South American & European', time: '3 min', when: 'Evening', yield: '30 ml bottle', often: 'Every night',
  ing: [['rosehipoil', '2 tablespoons rosehip seed oil'], ['vitamine', '1 teaspoon vitamin E oil'], ['almondoil', '1 tablespoon sweet almond oil'], ['lavenderoil', '3 drops lavender essential oil (optional)']],
  steps: ['Pour the oils into a small dark glass bottle and shake gently.', 'After your evening shower, while skin is still a little damp, warm 4–5 drops between your palms.', 'Massage into stretch marks or scars in small circles for 2 minutes.', 'Let it soak in before dressing.'],
  why: 'Rosehip oil, pressed from the seeds of wild roses in the Andes, is naturally rich in essential fatty acids and vitamin A-like compounds. Daily massage keeps skin supple and can help soften the look of marks over months.',
  tip: 'Be patient: give it 8–12 weeks of nightly use. Massage is as important as the oil.',
  caution: 'Skip almond oil if you have a nut allergy (use more rosehip instead). Patch-test first.'
},
{
  id: 's3', ch: 'skin', title: 'Egg White Firming Mask', tag: 'For enlarged pores and a tired, slack look',
  type: 'mask', color: '#f6f0dc', origin: 'Traditional Western', time: '20 min', when: 'Evening', yield: '1 mask', often: 'Once a week',
  ing: [['egg', '1 egg white'], ['lemon', '½ teaspoon lemon juice'], ['honey', '½ teaspoon honey']],
  steps: ['Whisk the egg white with the lemon and honey until foamy.', 'Brush or spread a thin layer over clean skin.', 'Leave for 15 minutes until it feels tight and dry.', 'Rinse with lukewarm water and pat dry. Follow with moisturiser.'],
  why: 'As egg white dries, it tightens on the skin and gives a temporary firming effect. Our grandmothers used it before special occasions. The honey helps keep skin from drying out.',
  tip: 'Use the yolk in the Egg & Olive Oil Hair Mask in Chapter 9, so nothing goes to waste.',
  caution: 'Avoid if you are allergic to eggs. Wash hands and bowls well afterwards. Keep it out of your eyes and mouth.'
},
{
  id: 's4', ch: 'skin', title: 'Oatmeal & Yogurt Soothing Mask', tag: 'For itchy, red or very dry skin',
  type: 'mask', color: '#efe3c8', origin: 'Traditional Western', time: '20 min', when: 'Any time', yield: '1 mask', often: 'Up to 3 times a week',
  ing: [['oats', '2 tablespoons rolled oats, finely ground'], ['yogurt', '1 tablespoon plain yogurt'], ['honey', '1 teaspoon honey'], ['water', 'A little warm water']],
  steps: ['Grind the oats to a fine powder in a blender or coffee grinder.', 'Mix with the yogurt, honey and a splash of warm water to make a soft paste.', 'Smooth onto your face or any itchy patch.', 'Leave for 15 minutes, then rinse gently with lukewarm water.'],
  why: 'Colloidal oatmeal (very finely ground oats) is one of the few home remedies used in pharmacy creams for eczema and itch. It forms a soft protective layer and calms irritated skin.',
  tip: 'For itchy skin all over, tie a cup of ground oats in a sock and soak it in a warm bath.'
},
{
  id: 's5', ch: 'skin', title: 'Aloe & Cucumber Cooling Gel', tag: 'For sun-warmed, irritated or puffy skin',
  type: 'mask', color: '#c8e2a0', origin: 'African & Caribbean', time: '10 min', when: 'Any time', yield: '1 small jar', often: 'Daily (keeps 1 week in fridge)',
  ing: [['aloe', '3 tablespoons fresh aloe vera gel (or pure store-bought)'], ['cucumber', '¼ cucumber, peeled'], ['rosewater', '1 teaspoon rose water (optional)']],
  steps: ['Blend the cucumber to a purée and strain out the juice.', 'Whisk 1 tablespoon of cucumber juice into the aloe gel.', 'Add rose water if you like and spoon into a clean jar.', 'Keep in the fridge and apply a thin, cold layer whenever skin feels hot.'],
  why: 'Aloe has been used for burns and irritated skin in Africa and the Caribbean for thousands of years. Cold cucumber juice adds instant cooling and helps reduce puffiness.',
  tip: 'Pat it under your eyes straight from the fridge in the morning to de-puff.',
  caution: 'Not for open wounds or serious burns. If cutting fresh aloe, drain the yellow sap first, as it can irritate.'
},
{
  id: 's6', ch: 'skin', title: 'Coffee Grounds & Coconut Body Scrub', tag: 'For rough skin and the look of cellulite',
  type: 'scrub', color: '#4a2a14', origin: 'Brazilian & Caribbean', time: '10 min', when: 'Any time', yield: '1 jar (3–4 uses)', often: '2 times a week',
  ing: [['coffeegrounds', '½ cup used coffee grounds'], ['sugar', '¼ cup brown sugar'], ['coconutoil', '3 tablespoons coconut oil, softened'], ['cinnamon', '½ teaspoon ground cinnamon']],
  steps: ['Mix everything in a bowl until it looks like wet sand.', 'In the shower, rub handfuls in firm upward circles on thighs, hips and arms for 3–5 minutes.', 'Rinse with warm water. Do not use soap afterwards, so the oil keeps skin soft.', 'Store leftovers in a sealed jar for up to a week.'],
  why: 'Scrubbing removes dry skin and the massage boosts circulation. Caffeine on the skin can briefly tighten and smooth its look. The effect is temporary but lovely, and a great way to reuse coffee grounds.',
  tip: 'The oil makes the shower floor slippery. Rinse it well and step carefully.',
  caution: 'Do not use on the face, broken skin or sunburn.'
},
{
  id: 's7', ch: 'skin', title: 'Shea & Coconut Stretch Mark Butter', tag: 'For skin that is stretching or has stretched',
  type: 'paste', color: '#f3e6c4', origin: 'West African', time: '15 min + setting', when: 'Evening', yield: '1 small jar', often: 'Daily',
  ing: [['shea', '3 tablespoons raw shea butter'], ['coconutoil', '1 tablespoon coconut oil'], ['vitamine', '1 teaspoon vitamin E oil'], ['almondoil', '1 tablespoon sweet almond oil']],
  steps: ['Melt the shea butter and coconut oil together in a bowl set over a pot of hot water.', 'Remove from the heat and stir in the almond and vitamin E oils.', 'Pour into a clean jar and let it set in the fridge for 1 hour.', 'Massage a small amount into belly, hips and thighs after bathing.'],
  why: 'Shea butter comes from the nut of the African shea tree and has been used by West African women for skin and hair for centuries. It is deeply moisturising and helps keep skin elastic.',
  tip: 'Whip the half-set butter with a fork for 2 minutes and it turns light and fluffy.',
  caution: 'Leave out almond oil if you have a nut allergy.'
},
{
  id: 's8', ch: 'skin', title: 'Green Tea Toner', tag: 'For oily, blemish-prone or tired skin',
  type: 'rinse', color: '#c8d88a', origin: 'Japanese & Chinese', time: '10 min', when: 'Morning', yield: '1 small bottle', often: 'Twice a day (keeps 1 week in fridge)',
  ing: [['greentea', '1 green tea bag'], ['water', '½ cup hot water'], ['witchhazel', '2 tablespoons alcohol-free witch hazel'], ['aloe', '1 teaspoon aloe gel (optional)']],
  steps: ['Steep the green tea in hot water for 5 minutes and let it cool completely.', 'Mix the cool tea with the witch hazel and aloe.', 'Pour into a clean bottle and keep it in the fridge.', 'Apply with a cotton pad after washing your face.'],
  why: 'Green tea is rich in soothing antioxidants. Witch hazel is a traditional North American plant toner that helps tighten the look of pores.',
  tip: 'Pour it into a spray bottle for a refreshing mist on hot days.'
},
{
  id: 's9', ch: 'skin', title: 'Japanese Rice Water Face Rinse', tag: 'For uneven, dull or rough skin',
  type: 'rinse', color: '#f4f1e6', origin: 'Japanese', time: '35 min', when: 'Morning', yield: '1 cup', often: 'Daily (keeps 3 days in fridge)',
  ing: [['rice', '½ cup uncooked white rice'], ['water', '1 cup water']],
  steps: ['Rinse the rice once quickly to remove dust and pour that water away.', 'Add 1 cup of fresh water and let the rice soak for 30 minutes, stirring now and then.', 'Strain the milky water into a clean jar. Cook the rice as usual.', 'After washing your face, splash or pat the rice water on and let it dry.'],
  why: 'Women of the Japanese imperial court in the Heian period were said to wash with rice water for smooth, bright skin. It contains small amounts of starch, vitamins and minerals that leave skin feeling soft.',
  tip: 'Use the same rice water on your hair (see Chapter 9).'
},
{
  id: 's10', ch: 'skin', title: 'Avocado & Honey Hydrating Mask', tag: 'For dry, tight or mature skin',
  type: 'mask', color: '#b8d07a', origin: 'Latin American', time: '20 min', when: 'Evening', yield: '1 mask', often: 'Once a week',
  ing: [['avocado', '¼ ripe avocado'], ['honey', '1 teaspoon honey'], ['oliveoil', '½ teaspoon olive oil']],
  steps: ['Mash the avocado until completely smooth.', 'Stir in the honey and olive oil.', 'Spread over clean skin, including your neck.', 'Leave for 15 minutes, then rinse with warm water.'],
  why: 'Avocado is full of healthy fats and vitamin E that nourish dry skin. It has been used in Mexican and Central American homes as a beauty food for generations.',
  tip: 'Eat the rest of the avocado. Healthy fats from food matter for skin too.'
},
{
  id: 's11', ch: 'skin', title: 'Berry & Orange Collagen Smoothie', tag: 'For skin that looks thinner and drier with age',
  type: 'drink', color: '#a04a7a', origin: 'Modern traditional', time: '5 min', when: 'Morning', yield: '1 large glass', often: 'Daily',
  ing: [['berries', '1 cup mixed berries (fresh or frozen)'], ['orange', '1 orange, peeled'], ['chia', '1 tablespoon chia seeds'], ['yogurt', '½ cup plain yogurt'], ['water', '½ cup water']],
  steps: ['Put everything in a blender.', 'Blend for 1 minute until smooth.', 'Drink straight away.'],
  why: 'Your body needs vitamin C to build collagen, the protein that keeps skin firm. Berries and oranges are packed with it, chia adds omega-3 fats and yogurt adds protein.',
  tip: 'Add a scoop of plain collagen or gelatin powder for extra protein.'
},
{
  id: 's12', ch: 'skin', title: 'Rose Water & Aloe Face Mist', tag: 'For skin that feels tight and thirsty during the day',
  type: 'rinse', color: '#f6c8d4', origin: 'Persian & Middle Eastern', time: '3 min', when: 'Any time', yield: '1 small spray bottle', often: 'Any time (keeps 2 weeks in fridge)',
  ing: [['rosewater', '¼ cup pure rose water'], ['aloe', '1 tablespoon aloe vera gel'], ['water', '2 tablespoons cooled boiled water']],
  steps: ['Whisk the aloe into the water until dissolved.', 'Add the rose water and pour into a clean spray bottle.', 'Close your eyes and mist your face from about 20 cm away.'],
  why: 'Rose water has been made in Persia for over a thousand years and was prized for calming and refreshing the skin. Aloe adds a light layer of moisture.',
  tip: 'Keep it in the fridge. A cold mist on a warm afternoon feels wonderful.'
},
{
  id: 's13', ch: 'skin', title: 'Papaya Brightening Mask', tag: 'For dull skin and uneven tone',
  type: 'mask', color: '#f29a4a', origin: 'Caribbean & Southeast Asian', time: '15 min', when: 'Evening', yield: '1 mask', often: 'Once a week',
  ing: [['papaya', '2 tablespoons ripe papaya, mashed'], ['honey', '1 teaspoon honey'], ['oats', '1 teaspoon ground oats']],
  steps: ['Mash the papaya with a fork until smooth.', 'Stir in the honey and oats.', 'Apply to clean skin and leave for 10 minutes only.', 'Rinse with cool water and moisturise.'],
  why: 'The papain enzyme in papaya gently dissolves dead skin cells, the same way it digests protein in your stomach. It is a natural, mild exfoliation.',
  tip: 'Do not leave it on longer than 10 minutes. Enzymes keep working.',
  caution: 'Patch-test first. Skip if you have a latex allergy (papaya can cross-react) or very sensitive skin.'
},
{
  id: 's14', ch: 'skin', title: 'Calendula Healing Oil', tag: 'For dry patches, cracked heels and rough elbows',
  type: 'oil', color: '#f2a02a', origin: 'Traditional Western', time: '3 hours (or 4 weeks)', when: 'Evening', yield: '1 jar', often: 'Daily as needed',
  ing: [['calendula', '½ cup dried calendula flowers'], ['oliveoil', '1 cup olive or sunflower oil'], ['vitamine', '1 teaspoon vitamin E oil']],
  steps: ['Put the dried flowers in a clean, dry jar and cover completely with the oil.', 'Quick method: stand the open jar in a pot of barely simmering water for 3 hours, topping up the water as needed.', 'Slow method: close the jar and leave it on a sunny windowsill for 4 weeks, shaking every few days.', 'Strain through a cloth, stir in the vitamin E and pour into a dark bottle.'],
  why: 'Calendula (pot marigold) has been a cottage-garden healer for centuries, used for chapped hands, dry skin and minor irritation. Infusing it in oil captures its soothing compounds.',
  tip: 'Rub it into cracked heels at night and put on cotton socks. You will feel the difference in 3 days.',
  caution: 'Always use dried, not fresh, flowers so the oil does not go mouldy. Avoid if allergic to daisies or ragweed.'
},

/* ═════════════════════════ CHAPTER 4 · JOINTS & PAIN ═════════════════════════ */
{
  id: 'j1', ch: 'joints', title: 'Golden Turmeric Milk', tag: 'For stiff joints and inflammation that keeps you up at night',
  type: 'milk', color: '#e9b030', origin: 'Indian', time: '8 min', when: 'Evening', yield: '1 mug', often: 'Every evening',
  ing: [['milk', '1 cup milk (dairy, oat or almond)'], ['turmericpowder', '1 teaspoon ground turmeric'], ['pepper', 'A pinch of black pepper (the one ingredient most people forget)'], ['cinnamon', '¼ teaspoon ground cinnamon'], ['ginger', '3 slices fresh ginger'], ['honey', '1 teaspoon honey']],
  steps: ['Warm the milk in a small pot over low heat.', 'Whisk in the turmeric, black pepper, cinnamon and ginger slices.', 'Let it simmer very gently for 5 minutes, without boiling.', 'Strain into a mug and stir in the honey.', 'Sip slowly, about an hour before bed.'],
  why: 'Turmeric\'s curcumin is poorly absorbed on its own. Black pepper contains piperine, which can raise absorption many times over, and the fat in milk helps too. That is why "haldi doodh" in India is always made with milk and pepper.',
  tip: 'Make it faster with Golden Paste from the Pantry chapter: stir 1 teaspoon into warm milk.',
  caution: 'Talk to your doctor before taking turmeric daily if you use blood thinners, diabetes medication, or have gallstones.'
},
{
  id: 'j2', ch: 'joints', title: 'Ginger & Cayenne Warming Joint Rub', tag: 'For aching knees, hands and lower back',
  type: 'paste', color: '#e07a3a', origin: 'Traditional Western & Chinese', time: '15 min', when: 'Any time', yield: '1 small jar', often: 'Up to 3 times a day',
  ing: [['coconutoil', '¼ cup coconut oil'], ['cayenne', '1 teaspoon cayenne pepper'], ['gingerpowder', '1 teaspoon ground ginger'], ['peppermintoil', '5 drops peppermint essential oil (optional)']],
  steps: ['Gently melt the coconut oil in a bowl over hot water.', 'Stir in the cayenne and ginger and keep warm for 10 minutes to infuse.', 'Strain through a coffee filter if you want a smooth rub.', 'Add the peppermint oil, pour into a jar and let it set.', 'Rub a small amount into sore joints and wash your hands well afterwards.'],
  why: 'Cayenne contains capsaicin, the same ingredient used in pharmacy pain creams. It creates warmth and, with regular use, can reduce how strongly pain signals are felt. Ginger and peppermint add warming and cooling comfort.',
  tip: 'Apply it with a spoon or wear a glove, so you never get it in your eyes by accident.',
  caution: 'Test a small area first. It will feel warm but should never burn. Never use on broken skin or near eyes, and keep away from children.'
},
{
  id: 'j3', ch: 'joints', title: 'Grandmother\'s Bone Broth Soup', tag: 'For creaky joints and recovery',
  type: 'soup', color: '#d9a85a', origin: 'Traditional (worldwide)', time: '15 min (using ready broth)', when: 'Any time', yield: '2 bowls', often: 'Daily',
  ing: [['bonebroth', '3 cups bone broth (see Pantry recipe)'], ['carrot', '1 carrot, diced'], ['celery', '1 stalk celery, diced'], ['garlic', '1 clove garlic'], ['parsley', 'A handful of parsley'], ['salt', 'Salt and pepper']],
  steps: ['Heat the bone broth in a pot.', 'Add the carrot, celery and garlic and simmer for 10 minutes until tender.', 'Season to taste and stir in chopped parsley.', 'Drink a mug or eat a bowl each day.'],
  why: 'Long-simmered bones release gelatin and amino acids such as glycine and proline, building blocks your body uses for connective tissue. Every culture has some version of this healing soup.',
  tip: 'Drink a mug of plain warm broth in the afternoon instead of a snack.'
},
{
  id: 'j4', ch: 'joints', title: 'Epsom Salt & Ginger Soak', tag: 'For aching muscles and sore feet after a long day',
  type: 'soak', color: '#cfe4ea', origin: 'English & Chinese', time: '25 min', when: 'Evening', yield: '1 bath or foot soak', often: '2–3 times a week',
  ing: [['epsom', '2 cups Epsom salt (½ cup for a foot bath)'], ['gingerpowder', '2 tablespoons ground ginger'], ['lavenderoil', '5 drops lavender oil (optional)'], ['water', 'A warm bath']],
  steps: ['Run a warm, not hot, bath.', 'Stir in the Epsom salt and ginger until dissolved.', 'Add the lavender oil just before getting in.', 'Soak for 20 minutes, then rinse and wrap up warmly.', 'Drink a large glass of water afterwards.'],
  why: 'Epsom salt (magnesium sulphate) has been added to baths since it was discovered in Epsom, England, in the 1600s. A warm soak relaxes tight muscles, and ginger adds a gentle warming feeling.',
  tip: 'No bath? Use ½ cup salt and 1 tablespoon ginger in a basin for your feet.',
  caution: 'Ginger baths can make you sweat. Get out slowly. Not for people with heart problems or very low blood pressure without medical advice, or with open cuts.'
},
{
  id: 'j5', ch: 'joints', title: 'Pineapple Turmeric Smoothie', tag: 'For swelling and stiffness after activity',
  type: 'drink', color: '#f0c03a', origin: 'Tropical & Indian', time: '5 min', when: 'Morning', yield: '1 large glass', often: 'Daily',
  ing: [['pineapple', '1 cup fresh or frozen pineapple'], ['turmericpowder', '½ teaspoon ground turmeric'], ['ginger', '½ inch fresh ginger'], ['pepper', 'Pinch of black pepper'], ['coconutmilk', '1 cup coconut or oat milk']],
  steps: ['Add everything to a blender.', 'Blend until smooth and creamy.', 'Drink straight away.'],
  why: 'Pineapple contains bromelain, an enzyme studied for swelling. Turmeric and ginger are two of the best-known anti-inflammatory spices, and pepper and coconut fat help turmeric absorb.',
  tip: 'Freeze pineapple chunks so you always have them ready.'
},
{
  id: 'j6', ch: 'joints', title: 'Warm Castor Oil Pack', tag: 'For a stiff, sore joint that needs deep warmth',
  type: 'compress', color: '#f0e2a0', origin: 'Traditional Western & Egyptian', time: '45 min', when: 'Evening', yield: '1 reusable pack', often: '3–4 evenings a week',
  ing: [['castoroil', '2–3 tablespoons castor oil'], ['cloth', '1 piece of flannel or cotton cloth'], ['water', 'A hot water bottle']],
  steps: ['Fold the flannel to fit over the sore joint.', 'Soak it with castor oil until damp but not dripping.', 'Lay it over the joint and cover with plastic wrap or an old towel.', 'Place a hot water bottle on top and rest for 30–45 minutes.', 'Wipe off any oil with a warm cloth. Store the flannel in a jar and reuse it many times.'],
  why: 'Castor oil was used in ancient Egypt, and castor oil packs became popular in America in the 1900s. The warm, oily pack relaxes the area and is a comforting old remedy for stiffness.',
  tip: 'Lie down with your feet up while it works. It is a lovely excuse to rest.',
  caution: 'Do not use on broken skin, during pregnancy, or during your period. Castor oil stains fabric, so use old towels. Never swallow it.'
},
{
  id: 'j7', ch: 'joints', title: 'Cabbage Leaf Knee Wrap', tag: 'For swollen, puffy knees and ankles',
  type: 'compress', color: '#a8c97f', origin: 'Eastern European', time: '5 min + 1 hour', when: 'Evening', yield: '1 wrap', often: 'As needed',
  ing: [['cabbage', '2–3 outer leaves of green cabbage'], ['cloth', 'A bandage or soft cloth']],
  steps: ['Wash the leaves and cut out the thick centre stem.', 'Roll over them with a rolling pin until they soften and release a little juice.', 'Warm them slightly in a pan, or chill them in the fridge for swelling.', 'Wrap around the knee and hold in place with a bandage for up to 1 hour.'],
  why: 'Russian and Polish grandmothers swear by cabbage leaves for swollen joints. Cabbage contains soothing plant compounds, and the cool, moist wrap simply feels good on a puffy joint.',
  tip: 'Change the leaves when they wilt and warm up.'
},
{
  id: 'j8', ch: 'joints', title: 'Walnut, Flax & Berry Morning Oats', tag: 'For joints that need omega-3 support',
  type: 'porridge', color: '#d8c49a', origin: 'Scottish & Traditional Western', time: '10 min', when: 'Morning', yield: '1 bowl', often: 'Daily',
  ing: [['oats', '½ cup rolled oats'], ['milk', '1 cup milk or water'], ['walnut', '1 tablespoon chopped walnuts'], ['flax', '1 tablespoon ground flaxseed'], ['berries', '½ cup berries'], ['cinnamon', 'Pinch of cinnamon']],
  steps: ['Simmer the oats in the milk for 5 minutes, stirring now and then.', 'Take off the heat and stir in the flax.', 'Top with walnuts, berries and cinnamon.'],
  why: 'Walnuts and flax are the richest plant sources of omega-3 fat (ALA), which helps balance inflammation. Berries add colourful antioxidants. It is a whole anti-inflammatory breakfast in one bowl.',
  tip: 'Always add flax after cooking and grind it fresh. Whole flax seeds pass straight through.'
},
{
  id: 'j9', ch: 'joints', title: 'Rosemary Infused Massage Oil', tag: 'For tired, aching hands and stiff fingers',
  type: 'oil', color: '#a8b86a', origin: 'Mediterranean', time: '2 hours (or 2 weeks)', when: 'Evening', yield: '1 small bottle', often: 'Daily',
  ing: [['rosemary', '3 sprigs fresh rosemary, dried overnight'], ['oliveoil', '½ cup olive oil'], ['lavenderoil', '3 drops lavender oil (optional)']],
  steps: ['Let the rosemary dry on the counter overnight. Water in fresh herbs spoils oil.', 'Put the sprigs in a jar and cover with the olive oil.', 'Warm the jar in a pan of barely simmering water for 2 hours (or leave in a sunny window for 2 weeks).', 'Strain into a bottle and add the lavender oil.', 'Massage into hands, wrists and knees in slow circles.'],
  why: 'Rosemary has been used in Mediterranean massage oils for hundreds of years for its warming, circulation-boosting reputation. The massage itself loosens stiff joints and brings comfort.',
  tip: 'Warm a little oil between your palms first. Warm oil feels twice as soothing.'
},
{
  id: 'j10', ch: 'joints', title: 'Turmeric Red Lentil Dal', tag: 'For a warming anti-inflammatory dinner',
  type: 'soup', color: '#e8a030', origin: 'Indian', time: '30 min', when: 'Evening', yield: '4 portions', often: 'Weekly',
  ing: [['lentils', '1 cup red lentils, rinsed'], ['turmericpowder', '1 teaspoon ground turmeric'], ['ginger', '1 inch ginger, grated'], ['garlic', '2 cloves garlic'], ['cumin', '1 teaspoon cumin seeds'], ['onion', '1 onion, chopped'], ['water', '3 cups water']],
  steps: ['Simmer the lentils in the water with the turmeric for 20 minutes until soft and creamy.', 'Meanwhile, fry the onion in a little oil until golden.', 'Add the cumin, ginger and garlic to the onion and cook 1 minute until fragrant.', 'Stir the onion mixture into the lentils and season with salt and pepper.', 'Serve with rice or warm bread and a squeeze of lemon.'],
  why: 'Dal is the everyday comfort food of India. Turmeric, ginger, garlic and cumin together make a warming, anti-inflammatory meal, and lentils give protein and fibre.',
  tip: 'It freezes beautifully. Make a double batch.'
}
);
