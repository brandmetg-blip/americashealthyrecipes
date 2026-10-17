/* ==========================================================================
   The Ancient Healing Recipe Book — chapters + Chapter 1 & 2 recipes
   Recipe fields:
     id, ch, title, tag (who it is for), type (picks the picture), color (liquid),
     origin, time, when, yield, often, ing [[iconKey, text]], steps [], why, tip, caution?
   ========================================================================== */
window.BOOK = {
  chapters: [
    { id: 'belly', name: 'Belly & Bloat', icon: '🌿', color: '#6b8f3a', tint: '#eaf2dc',
      intro: 'A heavy, swollen belly is rarely about willpower. It is usually about slow digestion, trapped gas and a gut that has lost its rhythm. These fifteen remedies wake digestion up gently, the way grandmothers did it: warm water, seeds, peels and fermented foods.' },
    { id: 'liver', name: 'Liver & Kidney', icon: '💧', color: '#2e7d5b', tint: '#e2f0e8',
      intro: 'Your liver and kidneys filter everything you eat, drink and breathe. They do not need harsh "detoxes". They need water, bitter greens, gentle teas and colourful vegetables. These twelve recipes give them exactly that.' },
    { id: 'skin', name: 'Skin & Beauty', icon: '✨', color: '#b8735a', tint: '#f7ebe5',
      intro: 'Long before there were beauty counters, there were kitchens. Honey, oats, yogurt, rice water and plant oils have softened, brightened and comforted skin for thousands of years. Here are fourteen of the best, inside and out.' },
    { id: 'joints', name: 'Joints & Pain', icon: '🦴', color: '#b8862c', tint: '#f7eed9',
      intro: 'Stiff mornings and sore knees often come from inflammation that builds quietly over years. These ten remedies combine warming spices, mineral-rich broths and old-fashioned soaks and compresses to bring comfort back to your body.' },
    { id: 'sleep', name: 'Sleep & Stress', icon: '🌙', color: '#5b62a0', tint: '#e8e9f4',
      intro: 'A calm evening is a remedy in itself. These nine tonics, teas and rituals help your body slow down, your mind go quiet and your sleep go deeper, without the groggy morning after.' },
    { id: 'lungs', name: 'Lungs & Mucus', icon: '🌬️', color: '#3e8a8f', tint: '#e2f1f2',
      intro: 'Coughs, thick morning mucus and stuffy sinuses were once treated with what was on the stove: onions, honey, thyme, steam and broth. These eight remedies are as useful today as they ever were.' },
    { id: 'energy', name: 'Energy & Fatigue', icon: '⚡', color: '#c98c14', tint: '#fbf1d6',
      intro: 'Real energy does not come from a fourth cup of coffee. It comes from iron, steady blood sugar, minerals and good morning habits. These eleven recipes help you feel steady and clear from breakfast to bedtime.' },
    { id: 'hormones', name: 'Hormones & Cortisol', icon: '🌸', color: '#a35a7a', tint: '#f5e7ee',
      intro: 'After 40, hormones shift and stress hormones can run high. These ten recipes use seeds, spices and calming herbs that women and men have relied on through every change of life.' },
    { id: 'hair', name: 'Teeth, Hair & Nails', icon: '🦷', color: '#4f7396', tint: '#e5edf5',
      intro: 'Strong teeth, thick hair and healthy nails reflect what is happening inside. These eleven remedies nourish from the inside and care for you from the outside, using oils, rinses and mineral-rich foods.' },
    { id: 'pantry', name: 'Bonus: Pantry Foundations', icon: '🏺', color: '#8a6a3a', tint: '#f1ebe0',
      intro: 'Six simple preparations to keep ready in your kitchen. Make them once and you will reach for them again and again throughout this book.' }
  ],
  recipes: [],
  plan: []
};

window.BOOK.recipes.push(

/* ═════════════════════════ CHAPTER 1 · BELLY & BLOAT ═════════════════════════ */
{
  id: 'b1', ch: 'belly', title: 'Cinnamon Morning Water', tag: 'For the belly that wakes up bloated',
  type: 'tea', color: '#c8763a', origin: 'Traditional Western', time: '12 min', when: 'Morning', yield: '1 large cup', often: 'Daily for 2 weeks',
  ing: [['cinnamon', '1 cinnamon stick (Ceylon if you can find it)'], ['water', '2 cups water'], ['honey', '1 teaspoon raw honey'], ['lemon', 'A small squeeze of lemon']],
  steps: ['Put the cinnamon stick and water in a small pot.', 'Bring to a gentle simmer and let it bubble softly for 10 minutes. Do not boil it hard.', 'Take it off the heat and let it cool for 2 minutes.', 'Stir in the honey and lemon, pour into your favourite cup and sip slowly before breakfast.'],
  why: 'Cinnamon helps slow down how quickly sugar enters your blood after a meal. Steadier blood sugar means fewer cravings and less of the puffy, heavy feeling that comes from sugar spikes.',
  tip: 'Keep the cinnamon stick. You can simmer it a second time the next morning.',
  caution: 'Choose Ceylon ("true") cinnamon for daily use. The common cassia kind contains coumarin, which is not good in large daily amounts.'
},
{
  id: 'b2', ch: 'belly', title: 'The 30-Second Spanish Orange Peel Ritual', tag: 'For a stalled metabolism and after-meal heaviness',
  type: 'tea', color: '#ef9a3a', origin: 'Mediterranean', time: '30 sec + 8 min steep', when: 'Morning', yield: '1 cup', often: 'Daily',
  ing: [['orangepeel', 'Peel of 1 organic, unwaxed orange'], ['water', '1½ cups just-boiled water'], ['cinnamon', '1 small piece of cinnamon (optional)'], ['honey', '1 teaspoon raw honey (optional)']],
  steps: ['Scrub the orange well under warm water. This takes about 30 seconds.', 'Peel it in long strips with a vegetable peeler, taking as little of the white pith as possible.', 'Place the strips (and cinnamon, if using) in a cup and pour over the hot water.', 'Cover with a saucer and steep for 8 minutes so the fragrant oils stay in the cup.', 'Remove the peel, add honey if you like, and sip warm. Eat the orange itself as part of breakfast.'],
  why: 'Orange peel holds most of the fruit\'s aromatic oils and flavonoids, such as hesperidin. In Spain and across the Mediterranean, and as "chen pi" in China, citrus peel has long been used to settle the stomach and ease bloating after food.',
  tip: 'Dry extra peel on a plate near a sunny window for 3–4 days and store it in a jar. One tablespoon of dried peel equals one fresh orange.',
  caution: 'Use organic or unwaxed oranges, because the peel is where pesticide residue and wax collect.'
},
{
  id: 'b3', ch: 'belly', title: 'Morning Fiber Starter Drink', tag: 'For a sluggish gut that never feels fully emptied',
  type: 'drink', color: '#e8d9a8', origin: 'Traditional Western', time: '2 min', when: 'Morning', yield: '1 glass', often: 'Daily, 30 minutes before breakfast',
  ing: [['psyllium', '1 teaspoon psyllium husk (build up to 1 tablespoon)'], ['flax', '1 teaspoon ground flaxseed'], ['water', '1 cup (8 oz) room-temperature water'], ['lemon', 'Juice of ½ lemon']],
  steps: ['Pour the water and lemon juice into a large glass.', 'Add the psyllium and flax and stir briskly for 10 seconds.', 'Drink straight away, because psyllium thickens quickly.', 'Follow with another full glass of plain water.'],
  why: 'Psyllium and flax are soluble fibres. They absorb water and form a soft gel that helps everything move along regularly, while also feeding the friendly bacteria in your gut.',
  tip: 'Start with a small amount for the first week. Your gut likes new fibre introduced slowly.',
  caution: 'Always drink plenty of water with psyllium. Take it at least 2 hours apart from medicines, as fibre can affect how they are absorbed.'
},
{
  id: 'b4', ch: 'belly', title: 'Ginger & Fennel Belly Tea', tag: 'For gas, cramping and that tight, heavy feeling',
  type: 'tea', color: '#d8c27a', origin: 'Indian & Western', time: '10 min', when: 'After meals', yield: '2 cups', often: 'After your two largest meals',
  ing: [['fennel', '1 teaspoon fennel seeds'], ['ginger', '4 thin slices fresh ginger'], ['mint', '1 teaspoon dried peppermint or 6 fresh leaves'], ['water', '2 cups boiling water']],
  steps: ['Crush the fennel seeds lightly with the back of a spoon to release their oils.', 'Put the fennel, ginger and mint in a teapot or jug.', 'Pour over the boiling water, cover and steep for 8 minutes.', 'Strain and sip slowly. Slow sipping is part of the remedy.'],
  why: 'Fennel has been used to ease trapped gas for centuries, which is why Indian restaurants still offer fennel seeds after a meal. Ginger helps the stomach empty and mint relaxes the muscles of the gut.',
  tip: 'Make a double batch and keep the second cup in a flask for after dinner.'
},
{
  id: 'b5', ch: 'belly', title: 'Apple Cider Vinegar Before-Meal Tonic', tag: 'For bloating that starts as soon as you eat',
  type: 'drink', color: '#e6b45a', origin: 'Amish & Traditional Western', time: '1 min', when: 'Before meals', yield: '1 glass', often: '15 minutes before your main meal',
  ing: [['acv', '1 tablespoon raw apple cider vinegar ("with the mother")'], ['water', '1 cup warm water'], ['honey', '1 teaspoon raw honey'], ['gingerpowder', 'A pinch of ground ginger']],
  steps: ['Pour the warm water into a glass.', 'Add the vinegar, honey and ginger and stir until the honey dissolves.', 'Drink through a straw about 15 minutes before your largest meal.', 'Rinse your mouth with plain water afterwards.'],
  why: 'A small amount of diluted vinegar before eating may help digestion get started and can soften the rise in blood sugar after a meal. Amish families have kept a jug of cider vinegar in the pantry for generations.',
  tip: 'If the taste is strong at first, start with 1 teaspoon and work up.',
  caution: 'Never drink vinegar undiluted. Skip this if you have reflux, stomach ulcers or take medicines for blood sugar or potassium without asking your doctor. The straw protects your tooth enamel.'
},
{
  id: 'b6', ch: 'belly', title: 'Cumin, Coriander & Fennel Tea', tag: 'For a gut that feels inflamed and unsettled',
  type: 'tea', color: '#d9c28a', origin: 'Indian (Ayurvedic)', time: '12 min', when: 'Any time', yield: '3 cups', often: 'Sip through the day',
  ing: [['cumin', '½ teaspoon cumin seeds'], ['coriander', '½ teaspoon coriander seeds'], ['fennel', '½ teaspoon fennel seeds'], ['water', '4 cups water']],
  steps: ['Bring the water to a boil in a small pot.', 'Add all three seeds, lower the heat and simmer for 10 minutes.', 'Strain into a flask to keep it warm.', 'Sip a little at a time throughout the day.'],
  why: 'Known in India as "CCF tea", this trio is one of the most famous digestive blends in Ayurveda. Each seed is mild on its own; together they gently calm gas, support digestion and reduce that churning feeling.',
  tip: 'Toast the seeds in a dry pan for 1 minute before simmering for a deeper, nuttier flavour.'
},
{
  id: 'b7', ch: 'belly', title: 'Peppermint After-Dinner Tea', tag: 'For cramping and an irritable, crampy gut',
  type: 'tea', color: '#8fbf6a', origin: 'Traditional Western', time: '8 min', when: 'After meals', yield: '1 cup', often: 'After dinner',
  ing: [['mint', 'A small handful of fresh mint (or 1 tea bag)'], ['water', '1 cup just-boiled water'], ['honey', 'Honey to taste']],
  steps: ['Tear the mint leaves gently to release their scent.', 'Place in a cup and pour over the hot water.', 'Cover and steep for 6 minutes.', 'Remove the leaves, sweeten lightly if you wish, and sip slowly.'],
  why: 'Peppermint relaxes the smooth muscle of the intestines, which is why it has been used for cramps and gas for hundreds of years. Peppermint is also studied today for irritable bowel symptoms.',
  tip: 'Grow a pot of mint on your windowsill. It is almost impossible to kill and gives you fresh leaves all year.',
  caution: 'Peppermint can make heartburn worse in some people. If you have reflux, try the Ginger & Fennel Tea instead.'
},
{
  id: 'b8', ch: 'belly', title: 'Papaya & Lime Enzyme Bowl', tag: 'For heavy, slow digestion after rich food',
  type: 'food', color: '#f29a4a', origin: 'Caribbean & Latin American', time: '5 min', when: 'Morning', yield: '1 bowl', often: '3–4 mornings a week',
  ing: [['papaya', '1 cup ripe papaya, cubed'], ['lime', 'Juice of ½ lime'], ['mint', 'A few mint leaves, torn'], ['chia', '1 teaspoon chia seeds (optional)']],
  steps: ['Halve the papaya, scoop out the black seeds and cube the orange flesh.', 'Put it in a bowl and squeeze the lime over the top.', 'Scatter with torn mint and chia seeds.', 'Eat slowly, ideally as the first thing you eat in the morning.'],
  why: 'Papaya contains papain, a natural enzyme that helps break down protein. In the Caribbean and Central America, a bowl of papaya with lime is a traditional way to keep digestion light and regular.',
  tip: 'Papaya is ripe when the skin is mostly yellow-orange and gives slightly when pressed, like a ripe avocado.'
},
{
  id: 'b9', ch: 'belly', title: 'Pineapple & Mint Digestive Water', tag: 'For puffiness and bloating after salty meals',
  type: 'drink', color: '#f3dc7a', origin: 'Tropical folk tradition', time: '5 min + 2 hours', when: 'Any time', yield: '1 litre', often: 'Daily',
  ing: [['pineapple', '1 cup fresh pineapple, in chunks'], ['mint', '6–8 fresh mint leaves'], ['cucumber', '5 slices cucumber'], ['water', '1 litre cold water']],
  steps: ['Put the pineapple, mint and cucumber in a large jug.', 'Press them lightly with a wooden spoon to release the juices.', 'Fill with cold water and refrigerate for at least 2 hours.', 'Drink through the day and refill once with fresh water.'],
  why: 'Fresh pineapple contains bromelain, an enzyme that helps digest protein. The mint soothes and the cucumber adds water and minerals, which helps your body let go of fluid it is holding after salty food.',
  tip: 'Eat the pineapple pieces at the end of the day so nothing goes to waste.'
},
{
  id: 'b10', ch: 'belly', title: 'Turmeric Flat-Belly Broth', tag: 'For an inflamed, swollen middle',
  type: 'soup', color: '#e8a52a', origin: 'Indian & Traditional Western', time: '20 min', when: 'Evening', yield: '2 bowls', often: '3 evenings a week',
  ing: [['bonebroth', '3 cups chicken, bone or vegetable broth'], ['turmeric', '1 inch fresh turmeric, grated (or 1 tsp ground)'], ['ginger', '1 inch fresh ginger, grated'], ['garlic', '2 cloves garlic, sliced'], ['pepper', '¼ teaspoon black pepper'], ['lemon', 'Juice of ½ lemon']],
  steps: ['Warm the broth in a pot over medium heat.', 'Add the turmeric, ginger and garlic and simmer gently for 15 minutes.', 'Stir in the black pepper and simmer 1 more minute.', 'Turn off the heat, add the lemon juice and pour into bowls.', 'Sip slowly as a light dinner or before your evening meal.'],
  why: 'Turmeric\'s golden compound, curcumin, is one of the most studied natural anti-inflammatories. Black pepper helps your body absorb much more of it, and warm broth is gentle on a tired gut.',
  tip: 'Add a handful of spinach in the last minute to turn it into a complete light meal.',
  caution: 'Turmeric stains clothes and countertops. Speak with your doctor before taking turmeric daily if you use blood thinners or have gallbladder problems.'
},
{
  id: 'b11', ch: 'belly', title: 'Amish Crock Sauerkraut', tag: 'For a gut that needs more good bacteria',
  type: 'food', color: '#e6e2a0', origin: 'Amish', time: '20 min + 1–3 weeks', when: 'With meals', yield: '1 large jar', often: '1–2 tablespoons with dinner',
  ing: [['cabbage', '1 medium green cabbage (about 2 lb)'], ['salt', '1 tablespoon sea salt (no iodine)'], ['cumin', '1 teaspoon caraway or cumin seeds (optional)']],
  steps: ['Remove the outer leaves of the cabbage and keep one clean leaf aside.', 'Slice the cabbage very thinly and place it in a large bowl.', 'Sprinkle with salt and squeeze and massage with clean hands for 8–10 minutes until it is limp and sitting in its own liquid.', 'Pack it tightly into a clean jar, pressing down until the liquid rises above the cabbage. Lay the saved leaf on top and weigh it down with a small glass.', 'Cover loosely with a cloth and leave at room temperature, away from sunlight, for 1–3 weeks. Taste from day 7. When it is pleasantly sour, close the lid and refrigerate.'],
  why: 'Raw sauerkraut is alive with beneficial bacteria made by natural fermentation. A small spoonful with meals helps support a varied, healthy gut, which is linked to better digestion and less bloating.',
  tip: 'Start with just one teaspoon a day. A gut new to fermented foods needs a week or two to adjust.',
  caution: 'Everything must stay under the liquid. If you see fuzzy mould (not the harmless white film), throw the batch away. Sauerkraut is salty, so go easy if you are watching your salt.'
},
{
  id: 'b12', ch: 'belly', title: 'Japanese Miso Soup for the Gut', tag: 'For a delicate stomach that needs gentle food',
  type: 'soup', color: '#c8945a', origin: 'Japanese', time: '10 min', when: 'Morning or evening', yield: '2 bowls', often: 'Daily if you like',
  ing: [['water', '3 cups water'], ['seaweed', '1 small piece dried wakame seaweed'], ['miso', '2 tablespoons miso paste'], ['mushroom', '3 shiitake mushrooms, sliced'], ['onion', '1 green onion, sliced']],
  steps: ['Soak the wakame in a little water for 5 minutes, then chop it.', 'Bring the 3 cups of water to a simmer and add the mushrooms for 3 minutes.', 'Turn the heat right down. Mix the miso with a ladle of the hot water in a cup until smooth.', 'Stir the miso back into the pot with the wakame. Do not let it boil.', 'Pour into bowls and top with the green onion.'],
  why: 'Miso is fermented soybean paste. In Japan a bowl of miso soup is part of daily breakfast and is valued for its living cultures and its gentle, warming effect on the stomach.',
  tip: 'Keep miso in the fridge. It lasts for months and makes a quick, comforting cup any time.',
  caution: 'Miso is high in salt. Boiling destroys its living cultures, so always add it off the heat.'
},
{
  id: 'b13', ch: 'belly', title: 'Prune & Fig Overnight Soak', tag: 'For constipation and a stuck, heavy belly',
  type: 'food', color: '#6a3a4a', origin: 'Amish & Eastern European', time: '2 min + overnight', when: 'Morning', yield: '1 small bowl', often: 'Daily until regular, then as needed',
  ing: [['prunes', '4 prunes'], ['fig', '2 dried figs, halved'], ['water', '1 cup hot water'], ['lemon', 'A thin slice of lemon']],
  steps: ['Place the prunes, figs and lemon slice in a small bowl or jar.', 'Pour over the hot water and cover.', 'Leave on the kitchen counter overnight.', 'In the morning, eat the softened fruit and drink the sweet soaking water.'],
  why: 'Prunes contain fibre and sorbitol, a natural sugar that draws water into the bowel, while figs add more fibre. Soaking makes them softer and easier on the stomach. This is one of the oldest farmhouse remedies there is.',
  tip: 'Add a pinch of cinnamon to the soak in winter for a warming breakfast.'
},
{
  id: 'b14', ch: 'belly', title: 'Simple Rice Congee for a Tired Gut', tag: 'For recovery after an upset stomach',
  type: 'porridge', color: '#f4eedc', origin: 'Chinese', time: '1 hour', when: 'Morning', yield: '3 bowls', often: 'When your stomach needs rest',
  ing: [['rice', '½ cup white rice'], ['water', '6 cups water or light broth'], ['ginger', '4 thin slices fresh ginger'], ['salt', 'A pinch of salt'], ['onion', 'Green onion to finish']],
  steps: ['Rinse the rice until the water runs nearly clear.', 'Put it in a pot with the water and ginger and bring to a boil.', 'Lower the heat and simmer, partly covered, for 45–60 minutes, stirring now and then, until creamy and soft.', 'Season lightly with salt and top with sliced green onion.'],
  why: 'Congee is the bowl Chinese families turn to whenever someone is unwell. Long, slow cooking makes rice extremely easy to digest, and ginger warms and settles the stomach.',
  tip: 'Freeze portions in jars. Reheat with a splash of water for a two-minute comforting breakfast.'
},
{
  id: 'b15', ch: 'belly', title: 'Warm Lemon & Ginger Wake-Up Water', tag: 'For a slow, sluggish start to the day',
  type: 'tea', color: '#f2d36a', origin: 'Traditional Western & Indian', time: '5 min', when: 'Morning', yield: '1 cup', often: 'Every morning',
  ing: [['lemon', 'Juice of ½ lemon'], ['ginger', '3 thin slices fresh ginger'], ['water', '1 cup hot (not boiling) water'], ['honey', '½ teaspoon raw honey (optional)']],
  steps: ['Put the ginger slices in a mug and pour over the hot water.', 'Let it steep for 3–4 minutes.', 'Squeeze in the lemon juice and stir in honey if you like.', 'Drink it slowly, before your coffee or breakfast.'],
  why: 'A warm drink first thing gently wakes up the digestive system after the night. Ginger stimulates digestion and lemon adds fresh flavour and vitamin C. It is also a simple way to start the day hydrated.',
  tip: 'Make it part of a ritual: one cup, standing by a window, before you look at your phone.',
  caution: 'Lemon is acidic. Rinse your mouth with water afterwards and wait 30 minutes before brushing your teeth.'
},

/* ═════════════════════════ CHAPTER 2 · LIVER & KIDNEY ═════════════════════════ */
{
  id: 'l1', ch: 'liver', title: 'Dandelion Root & Lemon Tea', tag: 'For heaviness under the right ribs and water retention',
  type: 'tea', color: '#8a5a2a', origin: 'Traditional Western', time: '15 min', when: 'Morning', yield: '2 cups', often: 'Once a day for 3 weeks, then a week off',
  ing: [['dandelion', '1 tablespoon roasted dandelion root (or 2 tea bags)'], ['water', '2½ cups water'], ['lemon', 'A slice of lemon'], ['honey', 'Honey to taste']],
  steps: ['Simmer the dandelion root in the water for 10 minutes. Roots need simmering, not just steeping.', 'Strain into cups.', 'Add a slice of lemon and a little honey.', 'Drink one cup in the morning and one in the early afternoon.'],
  why: 'Dandelion root is a classic "bitter" herb that European herbalists used to support bile flow and digestion. The leaves and roots also have a gentle diuretic effect, which is why the French call it "pissenlit".',
  tip: 'Roasted dandelion root tastes like a mild coffee. Add a splash of milk and it makes a good caffeine-free morning drink.',
  caution: 'Avoid if you are allergic to ragweed or daisies, have gallstones, or take diuretics, lithium or blood-thinning medicines without asking your doctor.'
},
{
  id: 'l2', ch: 'liver', title: 'Beet & Ginger Liver Tonic', tag: 'For a tired, overworked liver',
  type: 'drink', color: '#a8204a', origin: 'Eastern European', time: '5 min', when: 'Morning', yield: '2 glasses', often: '3 times a week',
  ing: [['beet', '1 small raw beetroot, peeled and chopped'], ['apple', '1 apple, cored'], ['carrot', '1 carrot'], ['ginger', '1 inch fresh ginger'], ['lemon', 'Juice of ½ lemon'], ['water', '1 cup cold water']],
  steps: ['Wash and chop all the produce.', 'Blend everything with the water until smooth.', 'Strain through a sieve if you prefer it thin, or drink it as it is for extra fibre.', 'Drink fresh within 30 minutes.'],
  why: 'Beetroot is rich in betalains and nitrates, and has long been a liver food in Eastern European kitchens. Apple and carrot add fibre and natural sweetness, while ginger and lemon keep it bright.',
  tip: 'Do not panic if your urine turns pink the next day. It is harmless and common after beets.',
  caution: 'Beets are high in oxalates. If you have had oxalate kidney stones, keep beet drinks occasional.'
},
{
  id: 'l3', ch: 'liver', title: 'The ACV & Lemon Morning Reset', tag: 'For puffy ankles and a heavy, swollen feeling',
  type: 'drink', color: '#f0d27a', origin: 'Amish & Traditional Western', time: '2 min', when: 'Morning', yield: '1 glass', often: 'Each morning for 1 week, then 3 times a week',
  ing: [['acv', '1 tablespoon raw apple cider vinegar'], ['lemon', 'Juice of ½ lemon'], ['water', '1½ cups warm water'], ['honey', '1 teaspoon raw honey (optional)']],
  steps: ['Pour the warm water into a large glass.', 'Add the vinegar, lemon juice and honey and stir well.', 'Drink through a straw on an empty stomach.', 'Follow with a plain glass of water and wait 20 minutes before breakfast.'],
  why: 'This three-ingredient drink is a farmhouse favourite. Above all it gets you drinking a big glass of water first thing. Good hydration, plus potassium-rich lemon and vinegar, helps your body let go of fluid it has been holding.',
  tip: 'Pair it with a 10-minute walk. Moving your calves pumps fluid out of swollen ankles.',
  caution: 'Always dilute. Use a straw to protect your teeth. Swelling in the legs that does not go away should always be checked by a doctor.'
},
{
  id: 'l4', ch: 'liver', title: 'Parsley & Watermelon Kidney Cooler', tag: 'For water retention on hot days',
  type: 'drink', color: '#f07080', origin: 'Mediterranean', time: '5 min', when: 'Daytime', yield: '2 glasses', often: 'Daily in warm weather',
  ing: [['watermelon', '3 cups watermelon, cubed'], ['parsley', 'A small handful fresh parsley'], ['lime', 'Juice of 1 lime'], ['mint', 'A few mint leaves']],
  steps: ['Put the watermelon, parsley, lime and mint into a blender.', 'Blend until smooth. No water is needed.', 'Pour over ice and drink straight away.'],
  why: 'Watermelon is more than 90% water and rich in potassium. Parsley has been used in Mediterranean folk medicine as a gentle natural diuretic. Together they help flush the kidneys with fluid.',
  tip: 'Freeze leftovers in ice-cube trays and drop them into sparkling water.',
  caution: 'Large amounts of parsley are not advised in pregnancy. If you have kidney disease, ask your doctor before increasing potassium.'
},
{
  id: 'l5', ch: 'liver', title: 'The Daily Lemon Water Kidney Habit', tag: 'For anyone prone to kidney stones or dehydration',
  type: 'drink', color: '#f6e48a', origin: 'Traditional Western', time: '2 min', when: 'Any time', yield: '1 litre', often: 'Every day',
  ing: [['lemon', 'Juice of 2 lemons'], ['water', '1 litre water'], ['mint', 'Mint sprig (optional)']],
  steps: ['Squeeze the lemons into a 1-litre bottle.', 'Fill with water and add mint if you like.', 'Drink it steadily through the day, on top of your usual water.'],
  why: 'Lemon juice contains citrate, which binds to calcium in urine. Doctors often suggest more fluid and more citrate to people who tend to form calcium stones. The simplest habit is often the most powerful.',
  tip: 'Aim for pale-yellow urine. That is the easiest sign you are drinking enough.',
  caution: 'This supports prevention but does not dissolve existing stones. Severe side or back pain, fever, or blood in the urine needs a doctor straight away.'
},
{
  id: 'l6', ch: 'liver', title: 'Corn Silk Tea', tag: 'For a sensitive bladder and mild urinary discomfort',
  type: 'tea', color: '#e8d48a', origin: 'Chinese & Native American', time: '12 min', when: 'Daytime', yield: '2 cups', often: 'Daily for up to 2 weeks',
  ing: [['cornsilk', 'Silk from 4 ears of fresh corn (or 1 tablespoon dried)'], ['water', '2½ cups water'], ['honey', 'Honey or lemon to taste']],
  steps: ['Pull the silky threads from the corn and rinse them.', 'Simmer in the water for 10 minutes.', 'Strain, sweeten lightly and drink warm or cool.'],
  why: 'Both Chinese medicine and Native American healers have used corn silk as a soothing, mild diuretic tea for the urinary tract. It is a lovely example of using every part of a plant.',
  tip: 'Dry corn silk on a paper towel in summer and keep it in a jar for the rest of the year.',
  caution: 'Mildly diuretic and may lower potassium. Avoid with blood-pressure, diabetes or diuretic medicines unless your doctor agrees. Any burning or fever means a doctor\'s visit, not tea.'
},
{
  id: 'l7', ch: 'liver', title: 'Bitter Greens Salad with Lemon & Olive Oil', tag: 'For sluggish digestion of fats',
  type: 'food', color: '#7aa84a', origin: 'Mediterranean', time: '10 min', when: 'Before meals', yield: '2 small plates', often: 'Before dinner, 3–4 times a week',
  ing: [['dandelion', 'A large handful dandelion greens, rocket or chicory'], ['radish', '4 radishes, thinly sliced'], ['oliveoil', '2 tablespoons extra-virgin olive oil'], ['lemon', 'Juice of ½ lemon'], ['salt', 'Pinch of sea salt and pepper']],
  steps: ['Wash and dry the greens and tear into bite-sized pieces.', 'Add the sliced radishes.', 'Whisk the olive oil, lemon juice, salt and pepper in a cup.', 'Toss everything together and eat before your main course.'],
  why: 'In Italy and Greece, a small plate of bitter greens comes before the meal for a reason. Bitter tastes stimulate saliva, stomach acid and bile, preparing the body to digest fats.',
  tip: 'If the greens taste too bitter, mix half and half with soft lettuce until you get used to them.'
},
{
  id: 'l8', ch: 'liver', title: 'Green Tea & Lemon Afternoon Cup', tag: 'For a liver under pressure from rich food',
  type: 'tea', color: '#b8c86a', origin: 'Japanese & Chinese', time: '4 min', when: 'Daytime', yield: '1 cup', often: '1–2 cups a day',
  ing: [['greentea', '1 teaspoon loose green tea or 1 tea bag'], ['water', '1 cup water at about 80°C (not boiling)'], ['lemon', 'A squeeze of lemon']],
  steps: ['Boil the water and let it rest for 2 minutes to cool slightly.', 'Pour over the tea and steep for 2–3 minutes only.', 'Remove the tea and add a squeeze of lemon.'],
  why: 'Green tea is rich in catechins, antioxidants that have been studied for liver and metabolic health. Adding lemon may help your body absorb more of them. Boiling water makes green tea bitter, so let it cool a little.',
  tip: 'Drink it after lunch. It is gentle enough not to disturb your sleep when taken before 3 pm.',
  caution: 'Green tea contains caffeine. Stick to normal brewed tea; concentrated green tea extract pills have been linked to liver problems.'
},
{
  id: 'l9', ch: 'liver', title: 'Cranberry & Lime Bladder Tonic', tag: 'For women prone to bladder discomfort',
  type: 'drink', color: '#c02a4a', origin: 'Native American & Traditional Western', time: '2 min', when: 'Daytime', yield: '1 tall glass', often: 'Daily',
  ing: [['cranberry', '½ cup unsweetened cranberry juice'], ['lime', 'Juice of ½ lime'], ['sparkling', '1 cup sparkling or still water'], ['honey', '1 teaspoon honey (optional)']],
  steps: ['Pour the cranberry juice into a tall glass.', 'Add the lime juice and honey and stir.', 'Top with sparkling water and ice.'],
  why: 'Cranberries contain compounds called proanthocyanidins, which may make it harder for certain bacteria to stick to the bladder wall. Native Americans used cranberries as food and medicine long before Europeans arrived.',
  tip: 'Buy 100% unsweetened juice. Most "cranberry cocktail" drinks are mostly sugar.',
  caution: 'Cranberry is for prevention, not treatment. Burning, fever or back pain needs a doctor. Ask your doctor if you take warfarin.'
},
{
  id: 'l10', ch: 'liver', title: 'Old-Fashioned Lemon Barley Water', tag: 'For tired kidneys and hot, dry days',
  type: 'drink', color: '#f2e6b0', origin: 'English & Chinese', time: '40 min', when: 'Daytime', yield: '1.5 litres', often: 'A glass or two a day',
  ing: [['barley', '½ cup pearl barley'], ['water', '2 litres water'], ['lemon', 'Peel and juice of 2 lemons'], ['honey', '2 tablespoons honey']],
  steps: ['Rinse the barley well in a sieve.', 'Put the barley, water and lemon peel in a pot and bring to a boil.', 'Simmer gently for 30 minutes.', 'Strain into a jug, stir in the lemon juice and honey, and cool.', 'Keep in the fridge for up to 3 days.'],
  why: 'Barley water was served to Victorian invalids and is still sipped in China and Hong Kong to "cool" the body. It is a soothing, gently filling way to drink more fluid, which is the best thing you can do for your kidneys.',
  tip: 'Do not throw away the cooked barley. Add it to soups or eat it warm with butter and salt.'
},
{
  id: 'l11', ch: 'liver', title: 'Cucumber, Celery & Mint Cooler', tag: 'For bloated, puffy days',
  type: 'drink', color: '#a8d07a', origin: 'Traditional Western', time: '5 min', when: 'Daytime', yield: '2 glasses', often: 'Daily for a week',
  ing: [['cucumber', '1 cucumber'], ['celery', '2 celery stalks'], ['mint', 'A handful of mint'], ['lime', 'Juice of 1 lime'], ['water', '1 cup cold water']],
  steps: ['Roughly chop the cucumber and celery.', 'Blend with the mint, lime and water until smooth.', 'Strain if you like, pour over ice and drink fresh.'],
  why: 'Cucumber and celery are mostly water and contain potassium, which helps balance the sodium that makes you puffy. It is a refreshing, low-sugar way to hydrate.',
  tip: 'Drink this instead of a salty snack in the afternoon.'
},
{
  id: 'l12', ch: 'liver', title: 'Garlic & Lemon Roasted Cabbage', tag: 'For everyday liver support on your plate',
  type: 'food', color: '#b8d08a', origin: 'Eastern European', time: '35 min', when: 'Evening', yield: '4 portions', often: '2–3 times a week',
  ing: [['cabbage', '½ green cabbage, cut into wedges'], ['garlic', '3 cloves garlic, crushed'], ['oliveoil', '3 tablespoons olive oil'], ['lemon', 'Juice of ½ lemon'], ['salt', 'Salt and pepper']],
  steps: ['Heat the oven to 220°C / 425°F.', 'Lay the cabbage wedges on a tray and brush with the olive oil mixed with garlic.', 'Season with salt and pepper and roast for 25–30 minutes until the edges are golden.', 'Squeeze the lemon over the top before serving.'],
  why: 'Cabbage and its cousins (broccoli, kale, Brussels sprouts) contain sulphur compounds that support the liver\'s own natural cleaning enzymes. Garlic adds more of the same. This is the liver "detox" that grandmothers actually cooked.',
  tip: 'Leftovers are wonderful chopped into a morning omelette.'
}
);
