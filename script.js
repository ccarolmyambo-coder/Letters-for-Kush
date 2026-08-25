// =========================================
// KUSH & ZOE MODES
// =========================================

const kush = document.querySelector(".kush-mode");
const zoe = document.querySelector(".zoe-mode");

const modeDisplay =
    document.querySelector("#mode-display");

const modeImage =
    document.querySelector("#mode-image");

const modeTitle =
    document.querySelector("#mode-title");

const modeCaption =
    document.querySelector("#mode-caption");

const backButton =
    document.querySelector("#backButton");


// KUSH

kush.addEventListener("click", function () {

    modeImage.src = "images/kush.jpg";

    modeImage.alt =
        "Kush in gangster mode";

    modeTitle.textContent =
        "Gangster Mode 🕶️";

    modeCaption.textContent =
        "Don't let the pretty face fool you. 🕶️";

    modeDisplay.classList.add("show");

});


// ZOE

zoe.addEventListener("click", function () {

    modeImage.src = "images/zoe.jpg";

    modeImage.alt =
        "Zoe in soft girl mode";

    modeTitle.textContent =
        "Soft Girl Mode 🎀";

    modeCaption.textContent =
        "The soft side she claims doesnt show, mind you i see it everyday. 🎀";

    modeDisplay.classList.add("show");

});


// BACK FROM KUSH / ZOE

backButton.addEventListener("click", function () {

    modeDisplay.classList.remove("show");

});



// =========================================
// ENTER + LETTERS PAGE
// =========================================

const enterButton =
    document.querySelector("#enterButton");

const landingPage =
    document.querySelector(".landing-page");

const lettersPage =
    document.querySelector("#letters-page");

const lettersBackButton =
    document.querySelector("#lettersBackButton");


landingPage.style.display = "flex";

lettersPage.style.display = "none";


// ENTER

enterButton.addEventListener("click", function () {

    landingPage.style.display = "none";

    lettersPage.style.display = "block";

});


// BACK TO LANDING

lettersBackButton.addEventListener("click", function () {

    lettersPage.style.display = "none";

    landingPage.style.display = "flex";

});



// =========================================
// LETTER SYSTEM
// =========================================

const letterCards =
    document.querySelectorAll(".letter-card");

const letterModal =
    document.querySelector("#letterModal");

const letterTitle =
    document.querySelector("#letterTitle");

const letterClue =
    document.querySelector("#letterClue");

const letterPassword =
    document.querySelector("#letterPassword");

const unlockLetter =
    document.querySelector("#unlockLetter");

const letterMessage =
    document.querySelector("#letterMessage");

const closeLetter =
    document.querySelector("#closeLetter");

const finalLetterPrompt =
    document.querySelector("#finalLetterPrompt");

const openFinalLetter =
    document.querySelector("#openFinalLetter");


let currentLetter = null;



// =========================================
// LETTERS, PASSWORDS & CLUES
// =========================================

const letters = {

    // =====================================
    // LETTER 1
    // =====================================

    1: {

        password: "birthday",

        clue:
            "what day is it today (one word)",

        message: `Dear Nthuwangu
Or Zoe, I don’t know actually, but I’m addressing YOU. I don’t even know where to start or where this is going. Actually, as I’m typing this, I’m remembering how you said you like handwritten letters because they show that more effort was put in, but I’m gonna need you to trust me when I say I put in the effort, and just because I’m typing this right now does not make this any less special. Okay, anyways….. I actually don’t know where to start, and I’m trying not to include everything in this letter so that I have something else to write in the other 25.

You’re such a blessing, not only to me but to your family, your friends, your partner, and whoever finds themselves in your proximity. No words can explain how grateful I am to have you in my life, and to think I almost took that for granted, because wdym we were not speaking all the time?!

From the good morning texts, to the OOTD pictures, to updating me about your day, to watching movies together (we seriously need to get back on our Zoom), to you going to the gym, to you going back home—cooking, cleaning, pooping (lol please laugh)—and finally to you saying goodnight. You allow me to spend the day with you. even when I’m more than 200 km away,  I feel as if I’m with you all the time. Let’s not forget your podcast VNs that I’d promise to listen to before I slept but sometimes couldn’t (forgive me). With such a great distance between us, these “not so little” things help make the distance bearable.

I’ve really enjoyed getting to know you on a DEEPER level, even though I only asked about your favourite flowers last week (please laugh), we digress. From the things you like, to the things you don’t like or trigger you (trigger warning: a trigger word will be used, but I hope you get it). You have allowed me to see a part of you, well actually, you have allowed me to see all parts of you and wow, I love you even more. You’re my iron, by the way. I hope I’m also your iron, because yk, iron sharpens iron.

We first met 3.38 years ago (I had to Google that because I mean, who was counting), and honestly, I didn’t think we’d be this close. I always thought to myself that anything pertaining to long distance will not work, and yoh, I was wrong. You make things work if you want them to and if you really cherish what you have. You have contributed a lot to how I see friendships and how I view love.

I hope we are able to fulfil our little promises to one another (aka you cooking for me). Ahhhhhhhh, I’ve just remembered the cookies. Kush, I think about those cookies A LOT. I still have the container here in my room. And you said it was your first time, right? Wow, you ATE DZOWN. Okay, I’m getting distracted, this is a birthday letter. I had to come back and add in this part, you said I need a beating, ill be waiting (laugh please) also you pray for me and I pray for youuuuu.

The effort you pour into the things/people you love is so great to see, and I really hope you pour into your cup as well. I don’t think you’d forget to pour into your own cup (smiley face). But when your cup is running a little empty ill be there to fill it up – but remember your cup will always overflow according to proverbs. And how beautiful are you?!?!?! Girl, come to the front!!!!! You are absolutely beautiful, Kush (and Zoe), inside and out (yes, I’m being cliché, but it’s the truth). Even when you’re not happy, you are literally the cutest person (I’m thinking of when we were robbed of the game at camp). The most beautiful thing about you is your love for God, and your desire to serve Him wholeheartedly… im actually giggling, ive just remembered how you almost said “amen beloved” after your first time presenting at work (im DUSTED). Remember you are the salt of the earth, so you must arise shine and give God all the GLORY GLORY (I know you got the victor reference, so please read that sentence again and say it like that child)

With that said (cliché again), I just want to wish you a very happy birthday. I hope you had a good day. The bestest day. May the Lord continue to be with you, and bless you beyond what you can imagine. Cheers to being 21 (cough cough, you’re 26), and cheers to your youth, where you will continue to serve the Lord before the troubles of life come! May God continue to shine a lamp onto your path. I was going to say “I don’t say this often” but that would be a lie because I say this everyday, but I love you ma’am and I hope you felt loved. My other prayer is that the lord should not bring me out of this friendship COMPRETLEY (did you get the reference)

This is not a threat (it is), but this better be the last birthday where we don’t have any pictures together or else ill be putting our separate pictures in ai and combining them.`

    },


    // =====================================
    // LETTER 2
    // =====================================

    2: {

        password: "07/04/2023",

        clue:
            "what date did we meet (dd/mm/yyyy)",

        message: `Dear Kush

Remember camp in 2024, do you still say “panty” like “pent”. Girl did you even check what happens when you click into “kush” or “zoe”. Go do that right now!!!!

You’re back great. We are going to start on a very light note. I remember the day we met (not like it was yesterday, I had to think a bit) and I remember you being quiet. Well I guess it’s expected when we didn’t know each other. Girl who am I kidding, I don’t even remember how we started talking but I remember you being in COC. Did you have dreads then? Nope!!! But I remember leaving camp thinking I gained a great friendship. And then guess what happened, we spoke on whatsapp, until we didn’t…girllll it was months off and a week on, like some toxic situationship. But we praise God because it’s not like that.

On the 19th of April 2023, you said “Hey Nthuwangu” so now (im not sure when you’re reading this) im saying Hey Nthuwangu (again). Im also realising I complained about friendships and I stayed…yea you need to come give me a beating.

You know whats shocking the last time we spoke in 2023 was the day after your birthday then we spoke again on the 28th of January 2024? Kush what was I thinking. Im so shocked (not the redundancy chile (yes im proof reading)).

But I think this letter serves as a “trip down memory lane” and no we weren’t comfortable to talk about our poops just yet (please laugh).

As much as I give you a reason everyday of why I love you, im gonna double it. I loved you from that year that we met, and I guess my fear of being betrayed got to me and I only told you 3 years later.

You provide such a safe space and you make me feel seen, you encourage and you’re there even when I don’t know what im talking about.

Good things take time, so may we continue to pour into each others cups.

I love you Nthuwangu.

You see me, im in my Kalanga Bag`

    },


    // =====================================
    // LETTER 3
    // =====================================

    3: {
        password: "seventeen",
        clue: "how many minutes was the longest vn you sent (in words)",
        message: `Dear Kush, welcome to letter 3
This is giving either an email or diary entry….or is it just me?😃 don’t worry there will be no trigger words in this letter…but to make you more prepared, it won’t appear in any letters, but it will be a password. 

Anyways, how long did it take you to find the answer. And yes the audio you forwarded DOES count as a vn. Anyway I have starred 35 of your messages, and I always go back and reread our chats, and I laugh as if it the first time seeing the messages, each time😭 imagine…the very first one I starred (edit: I was actually struggling with the spelling of that word. Stared v starrred) was in 2023. The exact date the 13th of April and you said “Women are not good people” and what funny is that you just said it😭😭😭 and that was the first time I used a trigger word - as a response. Can you guess what it is? Don’t search our chats (I’ve got my eye on you). 

And one thing about you, you let me steal so many phrases from you Omds 😭😭😭 not you enabling thief behavior. Just kidding. This letter was just to ultimately say that you’re a good woman, you’re a great woman and not once did I include you in “women” when you said they aren’t good people. 😭

I’m also just now reminded of how we started saying “worldly” statements and kept on asking each other if it was biblical. I also remember when I sent you a TikTok about a girl who said something about how we should also pray. Then you responded with “she’s Muslim” and I said I didn’t know and you said “you should be able to tell by her name”😭😭 Whuu chileeeee

Anyways thank you for keeping me accountable and also providing a brave space (yes,I’m stealing that as well)
Also tell me if you were able to get 4hrs of screen time last week. (I didn’t). I love you.`
    },


    // =====================================
    // LETTER 4
    // =====================================

    4: {
        password: "287",
        clue: "how many kms are we apart (just a number)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 5
    // =====================================

    5: {
        password: "touch",
        clue: "finish the sentence \"blank the screen\"",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 6
    // =====================================

    6: {
        password: "nlt",
        clue: "what is the bible version i used for the verse on the cover letter (abbreviation)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 7
    // =====================================

    7: {
        password: "apologies",
        clue: "give me a trigger word (sorry in advance)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 8
    // =====================================

    8: {
        password: "chickenstirfry",
        clue: "what was the first meal i asked you for the recipe (leave no spaces)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 9
    // =====================================

    9: {
        password: "no",
        clue: "did we cuddle at camp? yes or no",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 10
    // =====================================

    10: {
        password: "three",
        clue: "how many times did we restart your gym journey (in words)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 11
    // =====================================

    11: {
        password: "tuesday",
        clue: "what day (mon-sun) did i ask about your favorite pasta shape",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 12
    // =====================================

    12: {
        password: "22/03",
        clue: "when did we start speaking everyday(dd/mm)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 13
    // =====================================

    13: {
        password: "obession",
        clue: "what was the first movie we watched (leave no spaces)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 14
    // =====================================

    14: {
        password: "kush",
        clue: "who said \"i love you\" first (over text- write their name)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 15
    // =====================================

    15: {
        password: "steyncity",
        clue: "name a surburban area ive mentioned",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 16
    // =====================================

    16: {
        password: "kush",
        clue: "which alter ego do i speak to everyday",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 17
    // =====================================

    17: {
        password: "yes",
        clue: "do your fullstops indicate you being upset (yes or no)",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 18
    // =====================================

    18: {
        password: "neither",
        clue: "dogs or cats",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 19
    // =====================================

    19: {
        password: "vanilla",
        clue: "what is my go to ice cream flavour",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 20
    // =====================================

    20: {
        password: "proverbs",
        clue: "i mentioned a bible verse, what book is it found in",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 21
    // =====================================

    21: {
        password: "maam",
        clue: "a word i say everyday",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 22
    // =====================================

    22: {
        password: "five",
        clue: "how many different symbols are on the screen",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 23
    // =====================================

    23: {
        password: "seven",
        clue: "how many days did it take for me to code this",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 24
    // =====================================

    24: {
        password: "21",
        clue: "how old are you",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 25
    // =====================================

    25: {
        password: "yes",
        clue: "did you enjoy that McD burger after not having one for almost 10 years",
        message: "This letter is still being written 💙"
    },


    // =====================================
    // LETTER 26 — OPEN LAST
    // =====================================

    26: {
        password: "iloveyou",
        clue: "This one is special. 💙",
        message: "This letter is still being written 💙"
    }

};



// =========================================
// OPEN A LETTER
// =========================================

letterCards.forEach(function (card) {

    card.addEventListener("click", function () {

        currentLetter =
            card.dataset.letter;


        // Letter 26 has a special title

        if (currentLetter === "26") {

            letterTitle.textContent =
                "💙 Open Last";

        } else {

            letterTitle.textContent =
                "Letter " + currentLetter;

        }


        // Show clue

        letterClue.textContent =
            letters[currentLetter].clue;


        // Clear password

        letterPassword.value = "";


        // Hide previous message

        letterMessage.style.display =
            "none";


        // Hide final prompt

        finalLetterPrompt.style.display =
            "none";


        // Open modal

        letterModal.classList.add("show");

    });

});



// =========================================
// UNLOCK LETTER
// =========================================

unlockLetter.addEventListener("click", function () {


    // Check password

    if (
        letterPassword.value ===
        letters[currentLetter].password
    ) {


        // =================================
        // LETTER 26
        // =================================

        if (currentLetter === "26") {

            finalLetterPrompt.style.display =
                "block";

        }


        // =================================
        // NORMAL LETTER
        // =================================

        else {

            letterMessage.textContent =
                letters[currentLetter].message;

            letterMessage.style.display =
                "block";

        }

    }


    // =====================================
    // WRONG PASSWORD
    // =====================================

    else {

        const wrongPasswordMessages = [

            "Kush? Did you really type that. 😭",

            "Is our friendship a joke to you? 😂",

            "Girl, you know the answer activate Zoe. 🎀",

            "Not you getting this wrong chile 😭",

            "Do we need to pray so that you get the right answer? 😭"

        ];


        const randomMessage =
            wrongPasswordMessages[
                Math.floor(
                    Math.random() *
                    wrongPasswordMessages.length
                )
            ];


        letterMessage.textContent =
            randomMessage;


        letterMessage.style.display =
            "block";

    }

});



// =========================================
// OPEN FINAL LETTER
// =========================================

openFinalLetter.addEventListener(
    "click",
    function () {

        letterMessage.textContent =
            letters[currentLetter].message;


        letterMessage.style.display =
            "block";


        finalLetterPrompt.style.display =
            "none";

    }
);



// =========================================
// CLOSE LETTER
// =========================================

closeLetter.addEventListener(
    "click",
    function () {

        letterModal.classList.remove("show");

    }
);