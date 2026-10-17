/* The Ancient Healing Recipe Book — Chapter 8, 9, Pantry & 7-day plan */
window.BOOK.recipes.push(

/* ═════════════════════════ CHAPTER 8 · HORMONES & CORTISOL ═════════════════════════ */
{
  id: 'h1', ch: 'hormones', title: 'Twice-a-Day Spearmint Tea', tag: 'For women with unwanted hair growth or hormonal skin',
  type: 'tea', color: '#9cc87a', origin: 'Middle Eastern & Turkish', time: '7 min', when: 'Morning & evening', yield: '1 cup', often: '2 cups a day for at least 1 month',
  ing: [['mint', '1 tablespoon dried spearmint (or a handful fresh)'], ['water', '1 cup boiling water'], ['honey', 'Honey to taste']],
  steps: ['Put the spearmint in a cup and pour over boiling water.', 'Cover and steep for 5 minutes.', 'Strain, sweeten lightly and drink. Repeat in the evening.'],
  why: 'In Turkey, spearmint tea has long been a household drink. Small studies in women with PCOS found that two cups a day helped lower excess androgens (male-type hormones) over a month.',
  tip: 'Make sure it is spearmint, not peppermint. Spearmint is the one that was studied.',
  caution: 'Talk to your doctor if you are pregnant, trying to conceive or take hormone medication.'
},
{
  id: 'h2', ch: 'hormones', title: 'The Seed Cycling Routine', tag: 'For irregular cycles and the years around menopause',
  type: 'food', color: '#c8b48a', origin: 'Naturopathic folk tradition', time: '2 min a day', when: 'Morning', yield: '2 tablespoons a day', often: 'Daily, switching every 2 weeks',
  ing: [['flax', '1 tablespoon ground flaxseed (days 1–14)'], ['pumpkinseed', '1 tablespoon pumpkin seeds (days 1–14)'], ['sesame', '1 tablespoon sesame seeds (days 15–28)'], ['sunflower', '1 tablespoon sunflower seeds (days 15–28)']],
  steps: ['Days 1–14 (from the first day of your period, or the new moon if you no longer have periods): eat 1 tbsp ground flax and 1 tbsp pumpkin seeds daily.', 'Days 15–28 (or from the full moon): switch to 1 tbsp sesame and 1 tbsp sunflower seeds daily.', 'Grind the seeds fresh or buy them ground and keep them in the fridge.', 'Sprinkle on porridge, yogurt, salads or blend into smoothies.'],
  why: 'Seed cycling is a folk practice rather than a proven treatment. But the seeds themselves are excellent: flax is rich in lignans (plant compounds that interact gently with estrogen), pumpkin seeds in zinc, and sesame and sunflower in vitamin E and healthy fats.',
  tip: 'Keep two small jars labelled "First half" and "Second half" next to your kettle.'
},
{
  id: 'h3', ch: 'hormones', title: 'Maca & Cacao Hormone-Balancing Drink', tag: 'For low mood, low libido and low energy after 40',
  type: 'milk', color: '#8a5a3a', origin: 'Peruvian & Mayan', time: '5 min', when: 'Morning', yield: '1 mug', often: '5 days a week',
  ing: [['milk', '1 cup milk or oat milk'], ['cacao', '1 tablespoon raw cacao'], ['maca', '1 teaspoon maca powder'], ['cinnamon', '¼ teaspoon cinnamon'], ['maple', '1 teaspoon maple syrup or honey']],
  steps: ['Warm the milk gently.', 'Whisk in the cacao, maca, cinnamon and sweetener until frothy.', 'Pour into a mug and enjoy as a morning treat.'],
  why: 'The Maya drank cacao as a sacred drink, and the Incas valued maca for vitality. Studies suggest maca may help mood and libido during menopause, and cacao gives magnesium and a gentle lift.',
  tip: 'Use a milk frother or shake it in a jar for a café-style drink.',
  caution: 'Cacao contains a little caffeine. Check with your doctor if you have hormone-sensitive conditions or thyroid issues.'
},
{
  id: 'h4', ch: 'hormones', title: 'Evening Cortisol Reset Ritual', tag: 'For belly weight that comes with stress',
  type: 'ritual', color: '#c8d8a0', origin: 'Traditional (worldwide)', time: '20 min', when: 'Evening', yield: '1 ritual', often: 'Every evening',
  ing: [['lemonbalm', '1 teaspoon dried lemon balm'], ['chamomile', '1 teaspoon chamomile'], ['water', '1 cup hot water'], ['pumpkinseed', 'A small handful of pumpkin seeds (magnesium snack)']],
  steps: ['At the same time each evening, brew the lemon balm and chamomile for 7 minutes.', 'Turn off overhead lights and use a lamp.', 'Sit with your tea and write down 3 things from today you are grateful for and 1 thing for tomorrow.', 'Eat a small handful of pumpkin seeds.', 'Spend the last 5 minutes breathing slowly: in for 4, out for 6.'],
  why: 'Cortisol, the stress hormone, should fall in the evening. Constant stress keeps it high, which is linked to belly fat, poor sleep and cravings. Calm herbs, dim light, slow breathing and a mineral-rich snack all signal safety to your body.',
  tip: 'The ritual matters more than the tea. Do it even on busy nights, even for 5 minutes.'
},
{
  id: 'h5', ch: 'hormones', title: 'Fenugreek Seed Morning Water', tag: 'For blood-sugar swings and cravings',
  type: 'drink', color: '#e8d08a', origin: 'Indian & Middle Eastern', time: '1 min + overnight', when: 'Morning', yield: '1 glass', often: 'Daily',
  ing: [['fenugreek', '1 teaspoon fenugreek seeds'], ['water', '1 cup water']],
  steps: ['Soak the fenugreek seeds in the water overnight.', 'In the morning, drink the water on an empty stomach.', 'Chew the softened seeds too if you can (they are slightly bitter).'],
  why: 'Fenugreek seeds are rich in soluble fibre, which slows sugar absorption. It is a staple in Indian kitchens and has been studied for supporting healthy blood sugar.',
  tip: 'Lightly toast the seeds first if you find the taste too bitter.',
  caution: 'Not for pregnancy. Can lower blood sugar, so check with your doctor if you take diabetes medicine. Avoid with peanut or chickpea allergy.'
},
{
  id: 'h6', ch: 'hormones', title: 'Sage Tea for Hot Flushes', tag: 'For night sweats and hot flushes during menopause',
  type: 'tea', color: '#c8d0a0', origin: 'European', time: '8 min', when: 'Any time', yield: '1 cup', often: 'Up to 2 cups a day, for up to 4 weeks at a time',
  ing: [['sage', '1 teaspoon dried sage (or 4 fresh leaves)'], ['water', '1 cup boiling water'], ['lemon', 'Slice of lemon'], ['honey', 'Honey to taste']],
  steps: ['Steep the sage in boiling water, covered, for 5–7 minutes.', 'Strain and add lemon and honey.', 'Drink warm, or chill it and sip cold during the day.'],
  why: 'Sage has been used in European folk medicine for excessive sweating for centuries, and small modern studies have looked at it for menopausal hot flushes.',
  tip: 'Many women find iced sage tea especially soothing during a hot flush.',
  caution: 'Not in pregnancy or breastfeeding, or with epilepsy. Do not drink more than 2 cups a day or for months on end.'
},
{
  id: 'h7', ch: 'hormones', title: 'Broccoli & Sesame Stir-Fry', tag: 'For healthy hormone balance from your plate',
  type: 'food', color: '#6aa84a', origin: 'Chinese & Japanese', time: '15 min', when: 'Evening', yield: '2 portions', often: '2–3 times a week',
  ing: [['broccoli', '1 head broccoli, in small florets'], ['garlic', '2 cloves garlic'], ['ginger', '1 inch ginger'], ['sesameoil', '1 tablespoon sesame oil'], ['sesame', '1 tablespoon sesame seeds'], ['lemon', 'Squeeze of lemon or splash of soy sauce']],
  steps: ['Chop the broccoli and let it sit for 30 minutes if you can (this helps its healthy compounds form).', 'Heat the sesame oil in a pan, add the garlic and ginger for 30 seconds.', 'Add the broccoli and 3 tablespoons water, cover and steam-fry for 4 minutes.', 'Toss with sesame seeds and lemon or soy sauce.'],
  why: 'Broccoli and its cousins contain compounds (such as sulforaphane and indole-3-carbinol) that support the way the liver processes estrogen. Light cooking keeps more of these benefits.',
  tip: 'Keep it bright green and a little crunchy. Overcooking loses flavour and nutrients.'
},
{
  id: 'h8', ch: 'hormones', title: 'Cinnamon & Cardamom Balance Tea', tag: 'For sugar cravings and an afternoon energy dip',
  type: 'tea', color: '#c8843a', origin: 'Indian & Middle Eastern', time: '10 min', when: 'Daytime', yield: '2 cups', often: 'After lunch',
  ing: [['cinnamon', '1 cinnamon stick'], ['cardamom', '4 cardamom pods, crushed'], ['clove', '2 whole cloves'], ['water', '2½ cups water'], ['milk', 'Splash of milk (optional)']],
  steps: ['Simmer the spices in the water for 8 minutes.', 'Strain into cups.', 'Add a splash of milk if you like.'],
  why: 'Warm spices are a traditional way to finish a meal in India and the Middle East. Cinnamon may help blood sugar stay steadier, and the naturally sweet taste of cardamom and cinnamon helps quiet a sweet tooth.',
  tip: 'When a craving hits, make this tea and wait 10 minutes. Most cravings pass.'
},
{
  id: 'h9', ch: 'hormones', title: 'Hibiscus Iced Tea', tag: 'For high-stress days and supporting healthy blood pressure',
  type: 'drink', color: '#b8203a', origin: 'Egyptian & Mexican', time: '10 min + chilling', when: 'Daytime', yield: '1 litre', often: '1–2 glasses a day',
  ing: [['hibiscus', '2 tablespoons dried hibiscus flowers'], ['water', '1 litre water'], ['lime', 'Juice of 1 lime'], ['honey', '1 tablespoon honey'], ['cinnamon', '1 cinnamon stick (optional)']],
  steps: ['Bring the water to a boil, turn off the heat and add the hibiscus and cinnamon.', 'Steep for 10 minutes until deep red.', 'Strain, stir in the honey and lime and chill.', 'Serve over ice.'],
  why: 'Called "karkadé" in Egypt and "agua de Jamaica" in Mexico, hibiscus tea is a beloved everyday drink. Several studies suggest it may help support healthy blood pressure.',
  tip: 'It is beautiful served in a glass jug, a good way to drink more water.',
  caution: 'May lower blood pressure, so check with your doctor if you take blood-pressure medicine. Not for pregnancy.'
},
{
  id: 'h10', ch: 'hormones', title: 'Golden Flax Breakfast Bowl', tag: 'For hot flushes and a happier gut',
  type: 'porridge', color: '#e8c87a', origin: 'Modern traditional', time: '5 min', when: 'Morning', yield: '1 bowl', often: 'Daily',
  ing: [['yogurt', '¾ cup plain yogurt or kefir'], ['flax', '2 tablespoons ground flaxseed'], ['berries', '½ cup berries'], ['walnut', 'A few walnuts'], ['honey', 'Drizzle of honey']],
  steps: ['Spoon the yogurt into a bowl.', 'Stir in the ground flax.', 'Top with berries, walnuts and a little honey.'],
  why: 'Flax is the richest food source of lignans, plant compounds that act very gently on estrogen receptors. Some women find daily flax helps with mild hot flushes. Yogurt or kefir adds friendly bacteria.',
  tip: 'Buy whole flax and grind a week\'s worth at a time in a coffee grinder. Keep it in the fridge.'
},

/* ═════════════════════════ CHAPTER 9 · TEETH, HAIR & NAILS ═════════════════════════ */
{
  id: 't1', ch: 'hair', title: 'Oil Pulling with Coconut & Clove', tag: 'For morning breath and gums that feel tender',
  type: 'ritual', color: '#fbf6ea', origin: 'Indian (Ayurvedic)', time: '10–15 min', when: 'Morning', yield: '1 session', often: 'Daily, before brushing',
  ing: [['coconutoil', '1 tablespoon coconut or sesame oil'], ['clove', '1 drop clove oil (optional)']],
  steps: ['First thing in the morning, put the oil in your mouth (solid coconut oil melts in seconds).', 'Gently swish it around your teeth and gums for 10–15 minutes. Do not gargle.', 'Spit it into the bin, not the sink, as oil can clog pipes.', 'Rinse with warm water and brush your teeth as usual.'],
  why: 'Oil pulling ("kavala") is an ancient Ayurvedic practice. The oil collects bacteria from around the teeth and gums, and some small studies suggest it may help reduce plaque and bad breath.',
  tip: 'Do it while you shower or make breakfast and the time flies.',
  caution: 'This is an extra, not a replacement for brushing, flossing and dentist visits. Never swallow the oil.'
},
{
  id: 't2', ch: 'hair', title: 'Clove & Salt Gum Rinse', tag: 'For a sore gum or toothache until you see the dentist',
  type: 'rinse', color: '#e8dcc0', origin: 'Indian & Traditional Western', time: '5 min', when: 'Any time', yield: '1 cup', often: 'Up to 3 times a day',
  ing: [['clove', '4 whole cloves'], ['salt', '½ teaspoon salt'], ['water', '1 cup hot water']],
  steps: ['Steep the cloves in the hot water for 5 minutes and let it cool until warm.', 'Stir in the salt.', 'Swish gently around the sore area for 30 seconds and spit out.', 'Repeat until the cup is finished.'],
  why: 'Cloves contain eugenol, a natural numbing compound that dentists still use in some temporary fillings. Warm salt water soothes inflamed gums.',
  tip: 'For quick relief, hold a whole clove gently against the sore spot.',
  caution: 'A toothache means something needs fixing. See your dentist. Swelling of the face or fever is urgent.'
},
{
  id: 't3', ch: 'hair', title: 'Gentle Baking Soda Tooth Polish', tag: 'For coffee and tea stains on teeth',
  type: 'paste', color: '#ffffff', origin: 'Traditional Western', time: '3 min', when: 'Evening', yield: '1 use', often: 'Once a week',
  ing: [['bakingsoda', '½ teaspoon baking soda'], ['coconutoil', '½ teaspoon coconut oil'], ['peppermintoil', '1 drop peppermint oil (optional)']],
  steps: ['Mix the baking soda and coconut oil into a soft paste.', 'Brush very gently for 1 minute with a soft toothbrush.', 'Rinse well, then brush with your normal fluoride toothpaste.'],
  why: 'Baking soda is mildly abrasive and alkaline, and it is found in many commercial whitening toothpastes. Used gently and occasionally, it lifts surface stains.',
  tip: 'Drink coffee and tea through a straw and rinse with water afterwards to reduce new stains.',
  caution: 'Do not scrub hard or use more than once a week, as it can wear enamel. Avoid with braces or sensitive teeth. (We do not recommend charcoal, which is too abrasive.)'
},
{
  id: 't4', ch: 'hair', title: 'Rosemary & Castor Oil Hair Serum', tag: 'For thinning hair and a slow-growing hairline',
  type: 'serum', color: '#8aa86a', origin: 'Mediterranean & African', time: '5 min + overnight', when: 'Evening', yield: '1 small bottle', often: '3 nights a week',
  ing: [['castoroil', '2 tablespoons castor oil'], ['oliveoil', '2 tablespoons olive or jojoba oil'], ['rosemaryoil', '10 drops rosemary essential oil'], ['peppermintoil', '3 drops peppermint oil (optional)']],
  steps: ['Mix the oils in a dropper bottle.', 'Part your hair in sections and apply drops directly to the scalp.', 'Massage firmly with your fingertips for 5 full minutes. The massage is as important as the oil.', 'Cover with a silk scarf or old towel and leave overnight.', 'Shampoo twice in the morning to remove the oil.'],
  why: 'Rosemary has been a hair tonic in the Mediterranean since antiquity. A small 2015 study found rosemary oil worked about as well as a low-strength minoxidil for one type of hair loss after 6 months. Castor oil has long been used in Africa and the Caribbean to condition hair.',
  tip: 'Be patient: hair grows slowly. Take a photo today and compare after 3 months.',
  caution: 'Never put essential oils on the scalp undiluted. Patch-test first. Sudden or patchy hair loss should be checked by a doctor (it can be thyroid, iron or hormones).'
},
{
  id: 't5', ch: 'hair', title: 'Apple Cider Vinegar Shine Rinse', tag: 'For dull, frizzy hair and a flaky, itchy scalp',
  type: 'rinse', color: '#f0d27a', origin: 'Traditional Western', time: '2 min', when: 'Any time', yield: '1 rinse', often: 'Once or twice a week',
  ing: [['acv', '2 tablespoons apple cider vinegar'], ['water', '1 cup cool water'], ['rosemary', 'A sprig of rosemary (optional)']],
  steps: ['Mix the vinegar into the water (steep the rosemary in it for an hour if you like).', 'After shampooing, slowly pour it over your hair and scalp.', 'Leave for 2 minutes, then rinse lightly with cool water.'],
  why: 'Shampoo is slightly alkaline and lifts the outer layer of the hair. A mild acid rinse helps smooth it down again, which makes hair look shinier and feel less tangled.',
  tip: 'The vinegar smell disappears completely once your hair is dry.',
  caution: 'Keep out of your eyes. Use less often if your scalp feels dry.'
},
{
  id: 't6', ch: 'hair', title: 'Onion Juice Scalp Treatment', tag: 'For patchy thinning and weak regrowth',
  type: 'rinse', color: '#e8d4a0', origin: 'Middle Eastern & Indian', time: '45 min', when: 'Any time', yield: '1 treatment', often: 'Twice a week',
  ing: [['onion', '1 medium onion'], ['honey', '1 teaspoon honey (optional)'], ['lemon', 'A few drops lemon (helps the smell)']],
  steps: ['Grate or blend the onion and squeeze the juice through a cloth.', 'Mix in the honey.', 'Dab onto the scalp with a cotton pad, focusing on thin areas.', 'Leave for 30 minutes, then shampoo well.'],
  why: 'Onion is rich in sulphur, a building block of hair protein. A small study found onion juice helped regrowth in some people with patchy hair loss (alopecia areata).',
  tip: 'Wash with a few drops of lemon juice in your shampoo to remove the smell.',
  caution: 'Patch-test first, as onion juice can sting or irritate. Stop if your scalp becomes red or itchy.'
},
{
  id: 't7', ch: 'hair', title: 'Fermented Rice Water Hair Rinse', tag: 'For long hair that breaks and tangles',
  type: 'rinse', color: '#f4f1e6', origin: 'Chinese (Yao women)', time: '5 min + 24 hours', when: 'Any time', yield: '1–2 rinses', often: 'Once a week',
  ing: [['rice', '½ cup uncooked rice'], ['water', '2 cups water'], ['orangepeel', 'A few strips of orange peel (for scent)']],
  steps: ['Rinse the rice once and discard the water.', 'Soak the rice in 2 cups of water for 30 minutes, then strain the water into a jar with the orange peel.', 'Leave the jar at room temperature for 24 hours to ferment slightly, then refrigerate.', 'After shampooing, pour it over your hair, massage, leave for 10 minutes and rinse.'],
  why: 'The Yao women of Huangluo village in China are famous for floor-length hair, which they wash in fermented rice water. Rice water contains starches and inositol, which may help coat and strengthen hair.',
  tip: 'Use within 5 days. Dilute with plain water if your hair feels stiff.'
},
{
  id: 't8', ch: 'hair', title: 'Nettle & Horsetail Mineral Tea', tag: 'For nails that split, peel and break',
  type: 'tea', color: '#9ab07a', origin: 'European', time: '10 min', when: 'Daytime', yield: '1 cup', often: 'Daily for 6 weeks, then a break',
  ing: [['nettle', '1 teaspoon dried nettle leaf'], ['horsetail', '½ teaspoon dried horsetail'], ['water', '1 cup boiling water'], ['lemon', 'Slice of lemon'], ['honey', 'Honey to taste']],
  steps: ['Steep the nettle and horsetail in boiling water, covered, for 10 minutes.', 'Strain and add lemon and honey.', 'Drink once a day.'],
  why: 'Horsetail is one of the richest plant sources of silica, and nettle is full of minerals like iron and calcium. European herbalists have long used them together for hair, skin and nails.',
  tip: 'Massage a drop of olive oil into your cuticles each night while you drink it.',
  caution: 'Use horsetail in short courses only (not more than 6 weeks). Avoid in pregnancy, with kidney or heart problems, or if you take diuretics or lithium.'
},
{
  id: 't9', ch: 'hair', title: 'Black Sesame & Walnut Paste', tag: 'For early greying and dull, thinning hair',
  type: 'porridge', color: '#3a3430', origin: 'Chinese', time: '15 min', when: 'Morning', yield: '1 jar (7 servings)', often: '2 spoonfuls a day',
  ing: [['blacksesame', '1 cup black sesame seeds'], ['walnut', '½ cup walnuts'], ['honey', '2–3 tablespoons honey'], ['rice', '2 tablespoons rice flour (optional, to thicken)']],
  steps: ['Toast the sesame seeds in a dry pan for 3–4 minutes until fragrant. Toast the walnuts separately.', 'Let them cool, then grind together into a coarse paste.', 'Stir in the honey and store in a jar in the fridge.', 'Each morning, stir 2 tablespoons into a cup of hot water or milk to make a warm "soup", or spread on toast.'],
  why: 'In Chinese food tradition, black sesame and walnuts are eaten to nourish the hair and are linked with "kidney essence" and youthfulness. They are rich in healthy fats, iron, zinc and copper, minerals linked to healthy hair.',
  tip: 'Black sesame soup ("zhi ma hu") is a much-loved Chinese dessert. Enjoy it warm in winter.'
},
{
  id: 't10', ch: 'hair', title: 'Warm Olive Oil & Lemon Cuticle Soak', tag: 'For dry, ragged cuticles and brittle nails',
  type: 'soak', color: '#d8d08a', origin: 'Mediterranean', time: '15 min', when: 'Evening', yield: '1 soak', often: 'Twice a week',
  ing: [['oliveoil', '3 tablespoons olive oil'], ['lemon', '1 teaspoon lemon juice'], ['vitamine', '1 capsule vitamin E (optional)']],
  steps: ['Warm the olive oil until just warm to the touch (10 seconds in the microwave).', 'Stir in the lemon juice and vitamin E.', 'Soak your fingertips for 10 minutes.', 'Massage the oil into each cuticle and nail, then wipe off the excess.'],
  why: 'Brittle nails are often dry nails. Warm oil softens cuticles and seals moisture into the nail, which is what expensive cuticle oils do.',
  tip: 'Do it before bed and wear cotton gloves overnight for the best results.'
},
{
  id: 't11', ch: 'hair', title: 'Egg & Olive Oil Hair Mask', tag: 'For dry, damaged or chemically treated hair',
  type: 'mask', color: '#f2d06a', origin: 'Mediterranean & Latin American', time: '30 min', when: 'Any time', yield: '1 mask', often: 'Once a week',
  ing: [['egg', '1 egg yolk (2 for long hair)'], ['oliveoil', '1 tablespoon olive oil'], ['honey', '1 teaspoon honey']],
  steps: ['Whisk the egg yolk, olive oil and honey together.', 'Apply to damp hair from the middle to the ends.', 'Cover with a shower cap and leave for 20 minutes.', 'Rinse with cool water first (hot water cooks the egg!), then shampoo gently.'],
  why: 'Egg yolk contains proteins, fats and lecithin that coat and soften the hair. Olive oil adds shine. This is how grandmothers conditioned hair long before bottled conditioner.',
  tip: 'Use the egg white for the Firming Mask in Chapter 3.',
  caution: 'Always rinse with cool water. Avoid if allergic to eggs.'
}
);

/* ═════════════════════════ BONUS · PANTRY FOUNDATIONS ═════════════════════════ */
window.BOOK.recipes.push(
{
  id: 'p1', ch: 'pantry', title: 'Golden Paste', tag: 'The base for golden milk, broths and smoothies',
  type: 'paste', color: '#e9a316', origin: 'Indian', time: '10 min', when: 'Any time', yield: '1 small jar (2 weeks)', often: '½–1 teaspoon a day',
  ing: [['turmericpowder', '¼ cup ground turmeric'], ['water', '½ cup water'], ['pepper', '1½ teaspoons black pepper'], ['coconutoil', '3 tablespoons coconut or olive oil']],
  steps: ['Simmer the turmeric and water in a small pan, stirring, for 7–10 minutes until it becomes a thick paste. Add a little more water if needed.', 'Turn off the heat and stir in the pepper and oil until smooth.', 'Cool and spoon into a clean jar. Keep in the fridge for up to 2 weeks.', 'Use ½–1 teaspoon in warm milk, soups, rice or smoothies.'],
  why: 'Cooking turmeric with fat and black pepper makes its curcumin much easier for the body to absorb. Having it ready means you will actually use it every day.',
  tip: 'Freeze teaspoon-sized portions in an ice-cube tray.',
  caution: 'Ask your doctor first if you take blood thinners or have gallstones.'
},
{
  id: 'p2', ch: 'pantry', title: 'Frozen Ginger Cubes', tag: 'Fresh ginger ready in seconds, never wasted',
  type: 'paste', color: '#e8cf9a', origin: 'Chinese & Indian', time: '10 min', when: 'Any time', yield: '1 ice-cube tray', often: 'Use as needed',
  ing: [['ginger', '½ lb (250 g) fresh ginger'], ['lemon', 'Juice of 1 lemon'], ['water', 'A little water']],
  steps: ['Wash the ginger well. There is no need to peel organic ginger.', 'Chop roughly and blend with the lemon juice and a splash of water to a thick paste.', 'Spoon into an ice-cube tray and freeze.', 'Pop the cubes into a freezer bag. One cube is about 1 tablespoon of fresh ginger.'],
  why: 'Ginger is used in more recipes in this book than almost any other ingredient. Frozen ginger keeps its flavour for months, so you are never without it.',
  tip: 'Drop a cube straight into hot water with honey and lemon for an instant throat tea.'
},
{
  id: 'p3', ch: 'pantry', title: 'Slow-Simmered Bone Broth', tag: 'The foundation for soups, stews and healing mugs',
  type: 'soup', color: '#d9a85a', origin: 'Traditional (worldwide)', time: '12–24 hours (mostly unattended)', when: 'Any time', yield: '3 litres', often: 'Make every 2 weeks',
  ing: [['bonebroth', '2 lb (1 kg) chicken or beef bones (wings, feet, knuckles are best)'], ['acv', '2 tablespoons apple cider vinegar'], ['onion', '1 onion, halved'], ['carrot', '2 carrots'], ['celery', '2 celery stalks'], ['bayleaf', '2 bay leaves']],
  steps: ['Put the bones in a large pot or slow cooker and cover with cold water. Add the vinegar and leave for 30 minutes.', 'Add the vegetables and bay leaves and bring slowly to a simmer. Skim off any foam.', 'Simmer very gently, lid tilted, for 12 hours for chicken or up to 24 hours for beef (a slow cooker on low is ideal).', 'Strain, cool and refrigerate. Lift off the fat layer if you wish.', 'Keep in the fridge for 5 days or freeze in jars for 3 months.'],
  why: 'Long simmering draws gelatin, collagen and minerals from the bones. The splash of vinegar helps. Good broth sets like jelly when cold, which is the sign of a gelatin-rich batch.',
  tip: 'Keep a bag in the freezer for onion ends, carrot peels and chicken bones. When it is full, make broth.',
  caution: 'Cool broth quickly (in a sink of cold water) and refrigerate within 2 hours.'
},
{
  id: 'p4', ch: 'pantry', title: 'Old-Fashioned Fire Cider', tag: 'A fiery winter tonic to keep in the pantry',
  type: 'tonic', color: '#e8a04a', origin: 'American folk (New England)', time: '20 min + 4 weeks', when: 'Morning', yield: '1 large jar', often: '1 tablespoon a day in winter',
  ing: [['acv', 'About 2 cups raw apple cider vinegar'], ['garlic', '1 head garlic, chopped'], ['onion', '1 onion, chopped'], ['ginger', '3 inches ginger, grated'], ['cayenne', '¼ teaspoon cayenne or 1 small chilli'], ['lemon', '1 lemon, sliced'], ['honey', 'Honey to taste (after straining)']],
  steps: ['Put the garlic, onion, ginger, chilli and lemon into a clean 1-litre jar.', 'Pour in vinegar until everything is covered by 2–3 cm.', 'Place baking paper under the lid (vinegar corrodes metal) and close tightly.', 'Store in a dark cupboard for 4 weeks, shaking every day or two.', 'Strain, stir in honey to taste and keep in the fridge.'],
  why: 'Fire cider is a traditional New England folk tonic that combines warming foods long used against winter colds: garlic, onion, ginger, chilli and vinegar. A daily spoonful is a strong-tasting winter habit.',
  tip: 'Use it as a salad dressing with olive oil, or add a spoonful to warm water with honey.',
  caution: 'Very acidic and spicy. Always dilute, and skip it with reflux or stomach ulcers.'
},
{
  id: 'p5', ch: 'pantry', title: 'How to Make Any Herbal Infused Oil', tag: 'The master method behind the oils in this book',
  type: 'oil', color: '#b8b02a', origin: 'Traditional Western', time: '3 hours (or 4 weeks)', when: 'Any time', yield: '1 jar', often: 'Make as needed',
  ing: [['rosemary', '½ cup dried herb (rosemary, calendula, lavender or chamomile)'], ['oliveoil', '1 cup olive, sunflower or almond oil'], ['vitamine', '½ teaspoon vitamin E oil (to keep it fresh)']],
  steps: ['Always use dried herbs. Fresh herbs contain water, which spoils oil.', 'Put the herb in a clean, completely dry jar and cover with oil by 2 cm.', 'Warm method: set the open jar in a pan of barely simmering water for 3 hours. Sun method: close the jar and leave on a sunny windowsill for 4 weeks, shaking often.', 'Strain through a cloth, squeeze out every drop, and add the vitamin E.', 'Label with the date and keep in a dark bottle for up to 1 year.'],
  why: 'Oil gently draws out the fat-soluble compounds and aroma from herbs. Herbalists have made infused oils this way for centuries. It is the foundation for massage oils, balms and hair serums.',
  tip: 'Melt 1 part beeswax with 4 parts infused oil and you have made a healing balm.'
},
{
  id: 'p6', ch: 'pantry', title: 'Spiced Healing Honey', tag: 'A spoonful for tea, toast and sore throats',
  type: 'syrup', color: '#d9922a', origin: 'Middle Eastern & Traditional Western', time: '10 min + 1 week', when: 'Any time', yield: '1 jar', often: '1 teaspoon as needed',
  ing: [['honey', '1 cup raw honey'], ['cinnamon', '2 cinnamon sticks'], ['ginger', '1 inch fresh ginger, thinly sliced'], ['clove', '4 whole cloves'], ['orangepeel', '2 strips dried orange peel']],
  steps: ['Put the spices and peel in a clean, dry jar.', 'Pour over the honey (warm the honey jar in hot water first if it is thick).', 'Close and leave in a warm spot for 1 week, turning the jar upside down each day.', 'Use as it is, or strain out the spices.'],
  why: 'Honey has been used as a medicine since ancient Egypt. Infusing it with warming spices gives you a ready-made remedy for tea, sore throats and winter mornings.',
  tip: 'Stir a teaspoon into hot water with lemon for an instant throat soother.',
  caution: 'Never give honey to babies under 1 year old. Use dried, not fresh, ginger if you plan to keep it longer than 2 weeks, and refrigerate.'
}
);

/* ═════════════════════════ 7-DAY STARTER PLAN ═════════════════════════ */
window.BOOK.plan = [
  { day: 1, theme: 'Wake up your digestion', morning: 'b15', day_: 'b4', evening: 'z2' },
  { day: 2, theme: 'Hydrate & flush', morning: 'l3', day_: 'l11', evening: 'z1' },
  { day: 3, theme: 'Calm inflammation', morning: 'j5', day_: 'b6', evening: 'j1' },
  { day: 4, theme: 'Steady energy', morning: 'e9', day_: 'e11', evening: 'b10' },
  { day: 5, theme: 'Care for your skin', morning: 's11', day_: 'l8', evening: 's1' },
  { day: 6, theme: 'Balance & restore', morning: 'h10', day_: 'h8', evening: 'h4' },
  { day: 7, theme: 'Rest day ritual', morning: 'b2', day_: 'j3', evening: 'z5' }
];
