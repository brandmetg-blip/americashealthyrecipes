/* The Ancient Healing Recipe Book — Chapter 5, 6 & 7 recipes */
window.BOOK.recipes.push(

/* ═════════════════════════ CHAPTER 5 · SLEEP & STRESS ═════════════════════════ */
{
  id: 'z1', ch: 'sleep', title: 'Bay Leaf Calming Tea', tag: 'For a racing mind and the stress you carry into the evening',
  type: 'tea', color: '#b8a86a', origin: 'Mediterranean & Latin American', time: '10 min', when: 'Evening', yield: '1 cup', often: 'Afternoon or evening',
  ing: [['bayleaf', '2–3 dried bay leaves'], ['water', '1½ cups water'], ['cinnamon', '1 small piece cinnamon (optional)'], ['honey', '1 teaspoon honey'], ['lemon', 'A slice of lemon']],
  steps: ['Bring the water to a boil and add the bay leaves and cinnamon.', 'Lower the heat and simmer for 5 minutes.', 'Turn off the heat, cover and let it steep for 3 more minutes.', 'Remove the leaves, add honey and lemon, and sip slowly somewhere quiet.'],
  why: 'In Mexico and around the Mediterranean, "té de laurel" is a traditional evening tea for calming the nerves and settling the stomach after dinner. The warm ritual of sipping it slowly is part of the calm.',
  tip: 'Breathe in the steam for a minute before you drink. Bay leaves smell wonderfully soothing.',
  caution: 'Always remove the leaves before drinking. Whole bay leaves should never be swallowed.'
},
{
  id: 'z2', ch: 'sleep', title: 'Warm Milk, Honey & Nutmeg Tonic', tag: 'For waking at 3 am and not falling back asleep',
  type: 'milk', color: '#f4ead2', origin: 'Traditional Western & Amish', time: '5 min', when: 'Evening', yield: '1 mug', often: 'Every night',
  ing: [['milk', '1 cup milk (any kind)'], ['honey', '1 teaspoon raw honey'], ['nutmeg', 'A tiny pinch of freshly grated nutmeg'], ['cinnamon', 'A pinch of cinnamon']],
  steps: ['Heat the milk gently until steaming but not boiling.', 'Pour into a mug and stir in the honey.', 'Grate a little nutmeg and a pinch of cinnamon over the top.', 'Drink 30–45 minutes before bed with the lights low.'],
  why: 'Warm milk at bedtime is one of the oldest sleep rituals. Milk contains tryptophan, the building block of the sleep hormone melatonin. A little honey and nutmeg make it a comforting signal to the body that the day is over.',
  tip: 'Keep the ritual the same every night. Repetition teaches your body it is time to sleep.',
  caution: 'Use only a small pinch of nutmeg. Large amounts can make you unwell.'
},
{
  id: 'z3', ch: 'sleep', title: 'Chamomile & Lemon Balm Nightcap', tag: 'For anxious thoughts that will not switch off',
  type: 'tea', color: '#f2e2a0', origin: 'Traditional Western', time: '10 min', when: 'Evening', yield: '1 cup', often: 'Every evening',
  ing: [['chamomile', '1 tablespoon dried chamomile flowers'], ['lemonbalm', '1 teaspoon dried lemon balm'], ['water', '1 cup boiling water'], ['honey', 'Honey to taste']],
  steps: ['Put the herbs in a cup or teapot.', 'Pour over the boiling water, cover and steep for 7–10 minutes. Covering keeps the gentle oils in.', 'Strain, sweeten if you wish, and drink an hour before bed.'],
  why: 'Chamomile has been the European bedtime tea for centuries, and lemon balm was grown in monastery gardens to "gladden the heart". Both are gentle calming herbs that have been studied for mild anxiety and sleep.',
  tip: 'Brew it strong. A weak chamomile tea bag dipped for one minute does very little.',
  caution: 'Avoid chamomile if you are allergic to ragweed or daisies. Check with your doctor if you take sedatives or thyroid medication (lemon balm).'
},
{
  id: 'z4', ch: 'sleep', title: 'Tart Cherry Evening Drink', tag: 'For short, broken sleep',
  type: 'drink', color: '#8a1a3a', origin: 'Modern traditional', time: '2 min', when: 'Evening', yield: '1 glass', often: 'Nightly for 2 weeks to judge',
  ing: [['tartcherry', '¼ cup (60 ml) unsweetened tart cherry juice'], ['water', '¾ cup warm or cool water'], ['lemon', 'A squeeze of lemon']],
  steps: ['Mix the cherry juice with the water.', 'Add a squeeze of lemon.', 'Drink about 1–2 hours before bed.'],
  why: 'Tart Montmorency cherries naturally contain small amounts of melatonin, and small studies suggest tart cherry juice may help people sleep a little longer and better.',
  tip: 'Buy concentrate and dilute it. It is cheaper and lasts longer in the fridge.',
  caution: 'Check the label for added sugar. Diabetics should count it as fruit juice.'
},
{
  id: 'z5', ch: 'sleep', title: 'Lavender & Epsom Evening Bath', tag: 'For tension in the neck and shoulders',
  type: 'bath', color: '#c8bce6', origin: 'Provençal & English', time: '25 min', when: 'Evening', yield: '1 bath', often: '2–3 evenings a week',
  ing: [['epsom', '1 cup Epsom salt'], ['lavender', 'A handful dried lavender (in a muslin bag)'], ['lavenderoil', '6 drops lavender essential oil'], ['oatmilk', '½ cup milk or oat milk (optional)']],
  steps: ['Mix the lavender oil into the milk (oil needs something to disperse in).', 'Run a warm bath and add the Epsom salt, milk mixture and lavender bag.', 'Dim the lights and soak for 20 minutes.', 'Go straight to bed while your body is warm and relaxed.'],
  why: 'A warm bath about 1–2 hours before bed helps your body cool down afterwards, which is a natural signal for sleep. Lavender\'s scent has been studied for relaxation, and it has been used in Provence for centuries.',
  tip: 'Leave your phone in another room. The bath is the point.',
  caution: 'Never add essential oils straight to bath water, as they can irritate skin. Get out slowly.'
},
{
  id: 'z6', ch: 'sleep', title: 'Ashwagandha Moon Milk', tag: 'For feeling "wired but tired" at night',
  type: 'milk', color: '#e8d2b0', origin: 'Indian (Ayurvedic)', time: '6 min', when: 'Evening', yield: '1 mug', often: 'Nightly, up to 8 weeks',
  ing: [['milk', '1 cup milk or oat milk'], ['ashwagandha', '½ teaspoon ashwagandha powder'], ['cinnamon', '¼ teaspoon cinnamon'], ['cardamom', 'A pinch of ground cardamom'], ['honey', '1 teaspoon honey']],
  steps: ['Warm the milk gently in a pot.', 'Whisk in the ashwagandha, cinnamon and cardamom.', 'Simmer for 3 minutes without boiling.', 'Pour into a mug and stir in honey.'],
  why: 'Ashwagandha is one of Ayurveda\'s most respected herbs, traditionally taken in warm milk at night. Modern studies suggest it may help lower stress and the stress hormone cortisol.',
  tip: 'Ashwagandha tastes earthy. Cardamom and honey make it lovely.',
  caution: 'Do not use if pregnant or breastfeeding, if you have thyroid or autoimmune conditions, or take sedatives, thyroid or immune medicines without your doctor\'s OK.'
},
{
  id: 'z7', ch: 'sleep', title: 'Banana & Cinnamon Sleep Tea', tag: 'For restless legs and a restless mind',
  type: 'tea', color: '#e8d27a', origin: 'Caribbean & Folk', time: '12 min', when: 'Evening', yield: '1 cup', often: 'Evenings',
  ing: [['banana', '1 organic banana, ends trimmed'], ['water', '2 cups water'], ['cinnamon', '1 cinnamon stick'], ['honey', 'Honey to taste']],
  steps: ['Wash the banana well and cut it in half, skin on.', 'Simmer in the water with the cinnamon stick for 10 minutes.', 'Strain the liquid into a mug and add honey if you like.', 'Eat the soft banana flesh with a spoon.'],
  why: 'Bananas contain magnesium and potassium, minerals that help muscles relax. Simmering the whole fruit draws them into a sweet, gentle tea. It is a beloved folk remedy in the Caribbean.',
  tip: 'Use organic bananas because you are cooking the peel.'
},
{
  id: 'z8', ch: 'sleep', title: 'Valerian & Passionflower Tea', tag: 'For trouble falling asleep',
  type: 'tea', color: '#c8a86a', origin: 'European & Native American', time: '12 min', when: 'Evening', yield: '1 cup', often: 'Nightly for up to 4 weeks',
  ing: [['valerian', '1 teaspoon dried valerian root'], ['passionflower', '1 teaspoon dried passionflower'], ['mint', 'A few mint leaves (for taste)'], ['water', '1 cup boiling water']],
  steps: ['Put the valerian, passionflower and mint in a teapot.', 'Pour over boiling water, cover and steep for 10 minutes.', 'Strain and drink 30–60 minutes before bed.'],
  why: 'Valerian has been used for sleep since ancient Greece, and passionflower was used by Native Americans to calm the nerves. Both are among the most studied herbal sleep aids.',
  tip: 'Valerian smells earthy, like old socks! Mint makes it much more pleasant.',
  caution: 'Can cause drowsiness. Do not drive after drinking, and never mix with alcohol, sleeping pills or sedatives. Not for pregnancy.'
},
{
  id: 'z9', ch: 'sleep', title: 'Lavender Pillow Mist & Wind-Down Ritual', tag: 'For a bedroom that feels like a place to rest',
  type: 'ritual', color: '#c8bce6', origin: 'Provençal', time: '5 min', when: 'Evening', yield: '1 spray bottle', often: 'Every night',
  ing: [['lavenderoil', '15 drops lavender essential oil'], ['witchhazel', '1 tablespoon witch hazel or vodka'], ['water', '½ cup distilled or boiled water'], ['lavender', 'A sprig of dried lavender (optional)']],
  steps: ['Mix the lavender oil with the witch hazel in a spray bottle (it helps the oil mix with water).', 'Add the water and lavender sprig and shake.', 'Each night: dim the lights 30 minutes before bed, put screens away and lightly mist your pillow.', 'Lie down, take 10 slow breaths, counting four in and six out.'],
  why: 'Smell is closely tied to memory and mood. When you use the same calming scent every night, your brain learns to link it with sleep. Slow breathing with a longer out-breath calms the nervous system.',
  tip: 'Shake before every use. Oil and water separate.',
  caution: 'Spray onto fabric, not skin or into the air near pets (cats are sensitive to essential oils).'
},

/* ═════════════════════════ CHAPTER 6 · LUNGS & MUCUS ═════════════════════════ */
{
  id: 'u1', ch: 'lungs', title: 'Onion & Honey Cough Syrup', tag: 'For a tickly, nagging cough',
  type: 'syrup', color: '#d9a03a', origin: 'Eastern European & Amish', time: '10 min + 8 hours', when: 'Any time', yield: '1 small jar', often: '1 teaspoon up to 4 times a day',
  ing: [['onion', '1 medium onion, thinly sliced'], ['honey', 'About ½ cup raw honey'], ['lemon', '2 slices lemon (optional)'], ['ginger', '3 slices ginger (optional)']],
  steps: ['Layer the onion slices in a clean jar, covering each layer with a spoonful of honey.', 'Tuck the lemon and ginger in between.', 'Close the lid and leave on the counter for 8 hours or overnight. The onion releases its juice into the honey.', 'Strain into a clean jar and keep in the fridge for up to 1 week.', 'Take 1 teaspoon as needed, up to 4 times a day.'],
  why: 'This is a classic grandmother\'s remedy across Europe. Honey coats and soothes the throat, and studies show it can ease night-time coughs. Onion has long been used to help loosen mucus.',
  tip: 'It tastes much better than it sounds: sweet, with only a gentle onion flavour.',
  caution: 'Never give honey to babies under 1 year old. See a doctor for a cough lasting more than 3 weeks, coughing up blood, or shortness of breath.'
},
{
  id: 'u2', ch: 'lungs', title: 'Eucalyptus & Thyme Steam', tag: 'For blocked sinuses and chest congestion',
  type: 'steam', color: '#bfe0e0', origin: 'Australian & European', time: '15 min', when: 'Any time', yield: '1 session', often: 'Up to twice a day',
  ing: [['water', 'A large bowl of just-boiled water'], ['thyme', '2 tablespoons dried thyme'], ['eucalyptusoil', '3 drops eucalyptus oil'], ['cloth', 'A large towel']],
  steps: ['Pour the hot water into a large heatproof bowl on a table and add the thyme and eucalyptus oil.', 'Wait 1–2 minutes for it to cool slightly.', 'Sit with your face about 30 cm above the bowl, eyes closed, and drape the towel over your head.', 'Breathe slowly through your nose for 5–10 minutes, taking breaks when needed.'],
  why: 'Warm, moist air helps thin mucus so it drains more easily. Eucalyptus and thyme have strong, clearing aromas that have been used for chest colds for generations.',
  tip: 'Blow your nose gently right after. That is when everything loosens.',
  caution: 'Hot water burns easily, so keep the bowl stable. Not for young children. Eucalyptus oil can trigger asthma in some people. Never swallow essential oils.'
},
{
  id: 'u3', ch: 'lungs', title: 'Mullein & Marshmallow Root Tea', tag: 'For a dry, irritated throat and chest',
  type: 'tea', color: '#d9cc9a', origin: 'Traditional Western', time: '15 min', when: 'Any time', yield: '2 cups', often: '2–3 cups a day for up to 2 weeks',
  ing: [['mullein', '1 tablespoon dried mullein leaf'], ['marshmallow', '1 teaspoon dried marshmallow root'], ['water', '2½ cups water'], ['honey', 'Honey to taste']],
  steps: ['Simmer the marshmallow root in the water for 5 minutes.', 'Turn off the heat, add the mullein, cover and steep for 10 minutes.', 'Strain through a coffee filter or fine cloth. This is important, because mullein has tiny hairs that tickle the throat.', 'Sweeten and sip warm.'],
  why: 'Mullein has been called "the lung herb" in European folk medicine. Marshmallow root (the plant the sweet was originally made from) becomes slippery in water and coats and soothes a dry, scratchy throat.',
  tip: 'Make a bigger batch and keep it in a flask by your bed.',
  caution: 'Marshmallow root can slow how medicines are absorbed. Take it at least 1 hour apart from medication.'
},
{
  id: 'u4', ch: 'lungs', title: 'Ginger, Lemon & Honey Throat Tea', tag: 'For the first scratchy signs of a cold',
  type: 'tea', color: '#f2c85a', origin: 'Chinese & Traditional Western', time: '10 min', when: 'Any time', yield: '2 cups', often: '3 times a day while unwell',
  ing: [['ginger', '2 inches fresh ginger, sliced'], ['lemon', 'Juice of 1 lemon'], ['honey', '2 teaspoons raw honey'], ['water', '2½ cups water']],
  steps: ['Simmer the sliced ginger in the water for 8 minutes.', 'Turn off the heat and let it cool for 2 minutes.', 'Strain into mugs and stir in the lemon juice and honey.', 'Sip as hot as is comfortable.'],
  why: 'Ginger has been used in China for colds for over 2,000 years. It warms you from the inside, honey soothes the throat and lemon adds vitamin C. Warm fluids also keep mucus thin.',
  tip: 'The more ginger, the spicier and more warming. Adjust to your taste.'
},
{
  id: 'u5', ch: 'lungs', title: 'Thyme & Honey Chest Tea', tag: 'For a chesty cough with mucus',
  type: 'tea', color: '#c8b46a', origin: 'German & Mediterranean', time: '10 min', when: 'Any time', yield: '1 cup', often: '3 times a day',
  ing: [['thyme', '1 tablespoon fresh thyme (or 1 tsp dried)'], ['water', '1 cup boiling water'], ['honey', '1 teaspoon honey'], ['lemon', 'Slice of lemon']],
  steps: ['Put the thyme in a cup and pour over the boiling water.', 'Cover and steep for 10 minutes.', 'Strain, add honey and lemon, and drink warm.'],
  why: 'Thyme is approved in Germany as a traditional herbal medicine for coughs. It contains thymol, an aromatic compound that has been used to help loosen mucus in the chest.',
  tip: 'Breathe in the steam from your cup before you drink.',
  caution: 'See a doctor if you have a fever above 38.5°C/101°F for more than 3 days, green or bloody mucus, or chest pain.'
},
{
  id: 'u6', ch: 'lungs', title: 'Warm Garlic & Ginger Broth', tag: 'For when you feel a cold coming on',
  type: 'soup', color: '#e8c87a', origin: 'Traditional (worldwide)', time: '20 min', when: 'Any time', yield: '2 bowls', often: 'Daily while unwell',
  ing: [['bonebroth', '3 cups chicken or vegetable broth'], ['garlic', '4 cloves garlic, crushed'], ['ginger', '1 inch ginger, sliced'], ['onion', '1 onion, sliced'], ['thyme', 'A few sprigs thyme'], ['lemon', 'Squeeze of lemon']],
  steps: ['Crush the garlic and let it sit for 10 minutes. This allows its healthy compounds to form.', 'Simmer the broth with the onion, ginger and thyme for 10 minutes.', 'Add the garlic for the last 2–3 minutes only.', 'Season, add lemon and drink a big mug while hot.'],
  why: 'Hot soup is a remedy in every culture. It hydrates, the steam helps clear your nose, and garlic has been used for colds since ancient Egypt. Crushing garlic and waiting a few minutes lets allicin form.',
  tip: 'Add a handful of noodles or rice to make it a meal.'
},
{
  id: 'u7', ch: 'lungs', title: 'Salt Water Gargle & Nasal Rinse', tag: 'For a sore throat and post-nasal drip',
  type: 'rinse', color: '#d8eef5', origin: 'Indian & Traditional Western', time: '5 min', when: 'Morning & evening', yield: '1 glass', often: '2–3 times a day',
  ing: [['salt', '½ teaspoon fine sea salt'], ['water', '1 cup warm boiled water'], ['bakingsoda', 'A pinch of baking soda (optional)']],
  steps: ['Boil the water and let it cool until comfortably warm.', 'Stir in the salt and baking soda until dissolved.', 'Gargle a mouthful for 30 seconds at the back of your throat, then spit it out.', 'Repeat until the glass is finished.'],
  why: 'Salt water draws fluid from swollen throat tissue and helps wash away mucus. Doctors still recommend it for sore throats today. Nasal rinsing with salt water is an ancient Indian practice ("jala neti").',
  tip: 'For a nasal rinse, use only cooled boiled or distilled water in a neti pot, never tap water straight from the tap.',
  caution: 'Do not swallow it. Unboiled tap water must never be used in the nose.'
},
{
  id: 'u8', ch: 'lungs', title: 'Chinese Steamed Pear with Honey', tag: 'For a dry cough and a dry, sore throat',
  type: 'food', color: '#e8e09a', origin: 'Chinese', time: '45 min', when: 'Evening', yield: '1 pear', often: 'Daily while coughing',
  ing: [['pear', '1 ripe pear (Asian pear if you have it)'], ['honey', '1 tablespoon honey'], ['jujube', '2 red dates (optional)'], ['water', 'A little water']],
  steps: ['Cut the top off the pear and keep it as a lid. Scoop out the core with a teaspoon.', 'Fill the hollow with honey (and the dates, if using).', 'Put the lid back on and set the pear in a small heatproof bowl.', 'Steam over simmering water for 40 minutes until soft.', 'Eat the warm pear with a spoon and drink the juices in the bowl.'],
  why: '"Xueli" or steamed pear is a much-loved Chinese home remedy for dry coughs, especially in autumn. In Chinese food tradition, pear is considered moistening for the lungs and throat.',
  tip: 'No steamer? Put the bowl on a folded cloth in a covered pot with 3 cm of water.'
}
);

window.BOOK.recipes.push(

/* ═════════════════════════ CHAPTER 7 · ENERGY & FATIGUE ═════════════════════════ */
{
  id: 'e1', ch: 'energy', title: 'Blackstrap Molasses Iron Tonic', tag: 'For tiredness, pale skin and cold hands',
  type: 'tea', color: '#5a3416', origin: 'Amish & Southern American', time: '2 min', when: 'Morning', yield: '1 cup', often: 'Daily',
  ing: [['molasses', '1 tablespoon blackstrap molasses'], ['water', '1 cup hot water'], ['lemon', 'Juice of ½ lemon'], ['ginger', 'Slice of ginger (optional)']],
  steps: ['Stir the molasses into the hot water until dissolved.', 'Add the lemon juice and ginger.', 'Sip warm with breakfast.'],
  why: 'Blackstrap molasses is the dark syrup left after sugar is refined, and it holds most of the minerals, including iron, calcium and magnesium. Lemon\'s vitamin C helps your body absorb the iron.',
  tip: 'Do not drink it with tea or coffee. They reduce iron absorption. Wait an hour.',
  caution: 'Constant tiredness can be a sign of anaemia or thyroid problems. Ask your doctor for a simple blood test. Molasses is still a sugar for diabetics.'
},
{
  id: 'e2', ch: 'energy', title: 'Maca & Banana Morning Shake', tag: 'For mornings when you cannot get going',
  type: 'drink', color: '#e8d4a0', origin: 'Peruvian (Andean)', time: '3 min', when: 'Morning', yield: '1 large glass', often: '5 days a week',
  ing: [['maca', '1 teaspoon maca powder'], ['banana', '1 ripe banana'], ['oatmilk', '1 cup oat or dairy milk'], ['almond', '1 tablespoon almond butter'], ['cinnamon', 'Pinch of cinnamon']],
  steps: ['Add everything to a blender.', 'Blend for 30 seconds until creamy.', 'Drink with or instead of breakfast.'],
  why: 'Maca is a root grown high in the Peruvian Andes, where it has been eaten for thousands of years for stamina. The banana and almond butter give steady energy from natural sugar, fat and protein.',
  tip: 'Start with ½ teaspoon of maca and increase over a week.',
  caution: 'Check with your doctor first if you have thyroid problems or hormone-sensitive conditions.'
},
{
  id: 'e3', ch: 'energy', title: 'Green Spinach, Apple & Ginger Smoothie', tag: 'For an afternoon slump and brain fog',
  type: 'drink', color: '#7ab84a', origin: 'Modern traditional', time: '4 min', when: 'Morning', yield: '1 large glass', often: 'Daily',
  ing: [['spinach', '2 handfuls spinach'], ['greenapple', '1 green apple, cored'], ['ginger', '½ inch ginger'], ['lemon', 'Juice of ½ lemon'], ['water', '1 cup cold water']],
  steps: ['Put the water in the blender first, then the spinach, apple, ginger and lemon.', 'Blend for 1 minute until completely smooth.', 'Drink straight away for the most nutrients.'],
  why: 'Leafy greens give folate, iron and magnesium, all needed to make energy in your cells. Apple adds fibre and gentle sweetness, and ginger wakes you up.',
  tip: 'Add half a frozen banana if it is too sharp for you.'
},
{
  id: 'e4', ch: 'energy', title: 'Japanese Matcha Morning Ritual', tag: 'For calm, focused energy without the coffee jitters',
  type: 'tea', color: '#7aa83a', origin: 'Japanese', time: '3 min', when: 'Morning', yield: '1 bowl', often: 'Daily',
  ing: [['matcha', '1 teaspoon matcha powder'], ['water', '⅓ cup hot water (80°C / 175°F)'], ['oatmilk', '½ cup warm milk (optional)']],
  steps: ['Sift the matcha into a wide bowl to prevent lumps.', 'Pour in a little of the hot water and whisk into a smooth paste.', 'Add the rest of the water and whisk quickly in a "W" shape until frothy.', 'Top with warm milk if you like a latte, and drink slowly.'],
  why: 'Zen monks drank matcha to stay alert during long meditation. It contains caffeine plus L-theanine, an amino acid that promotes calm focus, so the energy feels smoother than coffee.',
  tip: 'Never use boiling water. It makes matcha bitter.',
  caution: 'Contains caffeine. Drink before noon if you are sensitive.'
},
{
  id: 'e5', ch: 'energy', title: 'Spirulina & Pineapple Green Shot', tag: 'For a quick morning nutrient boost',
  type: 'shot', color: '#2f7a5a', origin: 'Aztec & African', time: '2 min', when: 'Morning', yield: '1 small glass', often: 'Daily',
  ing: [['spirulina', '½ teaspoon spirulina powder'], ['pineapple', '½ cup pineapple juice'], ['lime', 'Squeeze of lime']],
  steps: ['Shake everything together in a jar with a lid.', 'Pour into a small glass and drink in one go.'],
  why: 'Spirulina is a blue-green algae that the Aztecs harvested from Lake Texcoco and that people around Lake Chad in Africa still eat today. It is rich in protein, iron and B vitamins.',
  tip: 'Pineapple juice hides the "pond" taste of spirulina better than anything.',
  caution: 'Buy from a reputable brand tested for contaminants. Avoid if you have an autoimmune disease or phenylketonuria (PKU).'
},
{
  id: 'e6', ch: 'energy', title: 'Beet & Orange Stamina Juice', tag: 'For stamina on walks and active days',
  type: 'drink', color: '#c02a4a', origin: 'Eastern European', time: '5 min', when: 'Morning', yield: '2 glasses', often: '3 times a week',
  ing: [['beet', '1 small cooked or raw beetroot'], ['orange', '2 oranges, peeled'], ['carrot', '1 carrot'], ['ginger', 'Small piece ginger'], ['water', '½ cup water']],
  steps: ['Chop the beet, oranges and carrot.', 'Blend with the ginger and water until smooth.', 'Strain if you like it thinner, and drink about 2 hours before a walk or activity.'],
  why: 'Beetroot is rich in natural nitrates, which the body turns into nitric oxide. This helps blood vessels relax and may improve stamina, which is why some athletes drink beet juice before exercise.',
  tip: 'Pre-cooked vacuum-packed beets make this extra quick.',
  caution: 'Your urine may turn pink. This is harmless. If you take blood-pressure medicine, ask your doctor before drinking beet juice daily.'
},
{
  id: 'e7', ch: 'energy', title: 'Date & Walnut Energy Bites', tag: 'For a healthy pick-me-up instead of sweets',
  type: 'snack', color: '#8a5a3a', origin: 'Middle Eastern', time: '15 min', when: 'Daytime', yield: '12 bites', often: '1–2 a day',
  ing: [['dates', '1 cup soft pitted dates'], ['walnut', '1 cup walnuts'], ['oats', '¼ cup rolled oats'], ['cacao', '1 tablespoon raw cacao (optional)'], ['sesame', 'Sesame seeds to roll']],
  steps: ['Blend the walnuts and oats until crumbly.', 'Add the dates and cacao and blend until it sticks together when pressed.', 'Roll into 12 small balls with damp hands.', 'Roll in sesame seeds and keep in the fridge for up to 2 weeks.'],
  why: 'Dates have been the energy food of desert travellers for thousands of years. They are sweet but full of fibre and potassium, and walnuts add healthy fats and protein to slow the sugar release.',
  tip: 'Freeze some. They taste like fudge straight from the freezer.',
  caution: 'Dates are naturally sweet. Diabetics should treat them as a fruit portion.'
},
{
  id: 'e8', ch: 'energy', title: 'Ginseng & Red Date Tea', tag: 'For long-term tiredness and feeling run down',
  type: 'tea', color: '#c8843a', origin: 'Chinese & Korean', time: '25 min', when: 'Morning', yield: '2 cups', often: 'Daily for up to 6 weeks, then rest',
  ing: [['ginseng', '3–4 thin slices dried ginseng'], ['jujube', '4 red dates (jujube), split'], ['goji', '1 tablespoon goji berries'], ['water', '3 cups water']],
  steps: ['Put the ginseng, red dates and water in a pot.', 'Simmer gently with the lid on for 20 minutes.', 'Add the goji berries for the last 3 minutes.', 'Drink warm in the morning and eat the softened dates.'],
  why: 'Ginseng has been the most prized tonic root in China and Korea for over 2,000 years, used to restore energy and resilience. Red dates and goji are traditional nourishing additions that sweeten it naturally.',
  tip: 'Re-simmer the same slices once more the next day before discarding.',
  caution: 'Can affect blood pressure, blood sugar and sleep. Avoid with blood thinners, diabetes or heart medicines, or in pregnancy, unless your doctor agrees. Do not drink in the evening.'
},
{
  id: 'e9', ch: 'energy', title: 'Overnight Oats with Chia & Berries', tag: 'For steady energy that lasts until lunch',
  type: 'porridge', color: '#d8c4e0', origin: 'Swiss & Modern', time: '5 min + overnight', when: 'Morning', yield: '1 jar', often: 'Daily',
  ing: [['oats', '½ cup rolled oats'], ['chia', '1 tablespoon chia seeds'], ['milk', '¾ cup milk or yogurt'], ['berries', '½ cup berries'], ['honey', '1 teaspoon honey']],
  steps: ['In a jar, mix the oats, chia, milk and honey.', 'Stir well, close the lid and refrigerate overnight.', 'In the morning stir, top with berries, and eat cold or gently warmed.'],
  why: 'Inspired by the Swiss "Bircher muesli" created by Dr Bircher-Benner for his patients. Oats and chia release energy slowly and keep blood sugar steady, so you avoid the mid-morning crash.',
  tip: 'Make 3 jars on Sunday night for an easy week.'
},
{
  id: 'e10', ch: 'energy', title: 'Rosemary & Lemon Focus Water', tag: 'For brain fog and forgetfulness',
  type: 'drink', color: '#d8e8b0', origin: 'Mediterranean & Ancient Greek', time: '5 min + 1 hour', when: 'Daytime', yield: '1 litre', often: 'Daily',
  ing: [['rosemary', '2 sprigs fresh rosemary'], ['lemon', '½ lemon, sliced'], ['water', '1 litre water']],
  steps: ['Bruise the rosemary by rolling it between your hands.', 'Put it in a jug with the lemon slices and water.', 'Chill for at least 1 hour and sip through the day.'],
  why: 'Greek students wore rosemary garlands while studying, and Shakespeare wrote "there\'s rosemary, that\'s for remembrance". Its aroma has been studied for alertness, and staying hydrated alone helps you think more clearly.',
  tip: 'Rub a rosemary sprig between your fingers and breathe in deeply whenever you feel foggy.'
},
{
  id: 'e11', ch: 'energy', title: 'Rooibos & Orange Afternoon Tea', tag: 'For the 3 pm crash without caffeine',
  type: 'tea', color: '#b8401e', origin: 'South African', time: '6 min', when: 'Daytime', yield: '1 cup', often: 'Every afternoon',
  ing: [['rooibos', '1 rooibos tea bag'], ['orangepeel', 'A strip of orange peel'], ['cinnamon', 'A small piece cinnamon'], ['water', '1 cup boiling water'], ['honey', 'Honey or milk to taste']],
  steps: ['Put the tea, orange peel and cinnamon in a cup.', 'Pour over boiling water and steep for 5 minutes.', 'Add honey or a splash of milk.', 'Take a 10-minute break to drink it. Sit down or go outside.'],
  why: 'Rooibos grows only in the Cederberg mountains of South Africa, where it has been brewed for centuries. It is naturally caffeine-free and full of antioxidants, so it refreshes without affecting your sleep.',
  tip: 'The afternoon slump is often thirst and tiredness. A warm drink and a real break helps more than sugar.'
}
);
