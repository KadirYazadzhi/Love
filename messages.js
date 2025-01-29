const messages = [
    "Your smile lights up the darkest days.",
    "You have a heart of gold that touches everyone you meet.",
    "Your kindness is your superpower.",
    "You make the world a brighter place just by being in it.",
    "Your laughter is the sweetest melody.",
    "You have the courage of a lion.",
    "Your eyes hold the beauty of a thousand sunsets.",
    "You bring joy wherever you go.",
    "You are more loved than you can ever imagine.",
    "Your presence is a gift to those around you.",
    "You inspire people without even trying.",
    "Your determination is truly admirable.",
    "You are beautiful inside and out.",
    "You have the ability to make anyone feel special.",
    "Your unique perspective makes the world richer.",
    "You are a masterpiece in the making.",
    "Your creativity knows no bounds.",
    "You have a soul full of wonders.",
    "You spread positivity effortlessly.",
    "Your resilience is awe-inspiring.",
    "You radiate warmth and love.",
    "You have the ability to turn challenges into opportunities.",
    "Your compassion changes lives.",
    "You are a light in the lives of so many.",
    "Your honesty is refreshing and rare.",
    "You are the definition of grace under pressure.",
    "You are strong, even when you feel weak.",
    "Your voice is soothing and full of strength.",
    "You make people feel at home in your presence.",
    "Your dreams have the power to change the world.",
    "You are deserving of all the happiness in the world.",
    "Your inner beauty shines brighter than any star.",
    "You are the epitome of strength and elegance.",
    "Your thoughtfulness leaves a lasting impression.",
    "You have the power to make people believe in themselves.",
    "You are one of a kind, and that is your strength.",
    "Your ability to see the good in everything is inspiring.",
    "You make even the smallest moments memorable.",
    "Your courage inspires others to be brave.",
    "You bring out the best in people.",
    "Your potential is limitless.",
    "You are a beacon of hope to those around you.",
    "Your laughter is contagious and uplifting.",
    "You face life’s challenges with incredible grace.",
    "You are a natural at making people feel special.",
    "Your authenticity is your greatest gift.",
    "You are loved more than words can express.",
    "Your presence alone is comforting and grounding.",
    "You are capable of achieving greatness.",
    "You have an infectious zest for life.",
    "Your kindness leaves a lasting impact.",
    "You are a source of inspiration to many.",
    "Your strength is unshakable, even in tough times.",
    "You have a way of making everyone feel included.",
    "Your wisdom is beyond your years.",
    "You light up every room you walk into.",
    "You make ordinary moments extraordinary.",
    "Your compassion is your greatest treasure.",
    "You are a fighter, and your strength knows no bounds.",
    "Your dreams are as big as your heart.",
    "You make people believe in themselves.",
    "You are a breath of fresh air to those around you.",
    "Your perseverance is unmatched.",
    "You are the calm in someone’s storm.",
    "Your creativity inspires innovation.",
    "You are loved for who you are, not for what you do.",
    "Your energy is vibrant and contagious.",
    "You are the sunshine on a cloudy day.",
    "Your kindness is what makes you truly beautiful.",
    "You have a way of making people feel seen and valued.",
    "You have the ability to make the impossible possible.",
    "Your love for others is truly selfless.",
    "You are the definition of elegance and poise.",
    "Your soul is pure and full of light.",
    "You inspire people to be the best version of themselves.",
    "You are a living example of kindness and compassion.",
    "Your optimism is a breath of fresh air.",
    "You make the world a better place just by being in it.",
    "You have a unique beauty that radiates from within.",
    "You are brave enough to be vulnerable, and that is powerful.",
    "Your thoughts and ideas have the power to change lives.",
    "You are a treasure to those who know you.",
    "Your patience is a gift to those around you.",
    "You bring a sense of peace wherever you go.",
    "Your love is unconditional and pure.",
    "You are capable of amazing things.",
    "Your heart is as vast as the ocean.",
    "You are more than enough, just as you are.",
    "Your happiness lights up the lives of others.",
    "You are a gem, rare and precious.",
    "Your sense of humor brightens even the darkest days.",
    "You are the reason someone smiles today.",
    "Your kindness can change the world, one person at a time.",
    "You are loved more than you will ever know."
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function setRandomMessage() {
    const messageElement = document.querySelector(".message");
    if (messageElement) {
        const storedMessage = localStorage.getItem("dailyMessage");
        if (storedMessage) {
            messageElement.textContent = storedMessage;
        } else {
            const newMessage = getRandomMessage();
            messageElement.textContent = newMessage;
            localStorage.setItem("dailyMessage", newMessage);
        }
    }
}


