// a js library that holds all of the event data
//
  
    var messageCards = [
    ["SIMIFY"],
    ["Click anywhere to start."],
    ["In SIMIFY, you are in the long marathon"],
    ["of entrepreneurship. Earn bucks with"],
    ["your energy. The more energy you keep,"],
    ["the more decisions you get each week."],
    [""],
    ["Build your brand one choice at a time."],
    //bucks, energy, traffic, conversion
    [0,0,0,0,]

    ["Day 1"],
    ["-1 ENERGY"],
    ["You didnt get much sleep yesterday."],
    ["Hopefully things get a bit better."],
    [""],
    [""],
    [""],
    [""],
    ]

    var choiceCards = [
    
    // level one events
    // these show up early game (first 3 turns)
    ["CROWDFUNDING"],
    ["Run a crowdfunding campaign to"],
    ["secure pre-orders and generate"],
    ["revenue. It's a lot of work,"],
    ["but it might pay off."],
    ["-5 ENERGY, +2 BUCKS, +3 TRAFFIC"],
    //bucks, energy, traffic, conversion
    [2],[-5],[3],[0],
  
    ["NEW THEME"],
    ["There's a theme you want to try out,"],
    ["but there's a chance it could break"],
    ["your apps and cause a headache."],
    ["The new theme should convert better."],
    ["-? ENERGY,-2 BUCKS,+.2% CONVERSION"],
    [-2],[getRandomInt(3)-3],[0],[2],
    
    ["RELAX"],
    ["Rome wasn't built in a day. Take"],
    ["a break and clear your head."],
    ["Opportunity cost is some bucks."],
    [""],
    ["+SOME ENERGY, -1 BUCKS"],
    [-1],[getRandomInt(3)+1],[0],[0],
  
    ["BLOGSPOTTER"],
    ["A local blogger has offered"],
    ["to feature you in return for"],
    ["some product. It might help"],
    ["boost traffic a bit."],
    ["-1 ENERGY, +1 TRAFFIC"],
    //bucks, energy, traffic, conversion
    [0],[-1],[1],[0],
    
    ["ESPRESSO MACHINE"],
    ["It was a bit on the expensive"],
    ["side, but the added jolt might"],
    ["get more things done."],
    [""],
    ["+3 ENERGY, -3 BUCKS"],
    //bucks, energy, traffic, conversion
    [-3],[3],[0],[0],
    
    ["INFLUENCERS"],
    ["Hopefully there is some"],
    ["value in being internet famous."],
    ["Maybe some traffic will come of it."],
    [" "],
    ["-2 ENERGY, -3 BUCKS, +0-2 TRAFFIC"],
    //bucks, energy, traffic, conversion
    [-3],[-2],[getRandomInt(2)],[0],
    
    ["TRADE SHOWS"],
    ["It cost too much, but you"],
    ["got a prime spot to show off"],
    ["your goods. Might get some"],
    ["publicity"],
    ["-1 ENERGY, -3 BUCKS, +1 TRAFFIC"],
    //bucks, energy, traffic, conversion
    [-3],[-1],[1],[0],
    
    ["SHOPBOOST APP"],
    ["An app that curates and suggests"],
    ["add-on purchases for customers."],
    [""],
    [""],
    ["-2 ENERGY, +? BUCKS, 10% CONVERSION"],
    //bucks, energy, traffic, conversion
    [getRandomInt(1)+3],[-2],[0],[1],
    
    ["CUSTOMER REVIEWS"],
    ["You spend some time setting up a good"],
    ["customer review app that adds some"],
    ["credibility to the store."],
    [""],
    ["-2 ENERGY, +.20% CONVERSION RATE"],
    [0],[-2],[0],[2],
    
    ["CONVENTION TRIP"],
    ["Take some time and hit a convention."],
    ["You never know who you might meet,"],
    ["and it could be relaxing."],
    [""],
    ["+? ENERGY, -3 BUCKS, +? TRAFFIC"],
    //bucks, energy, traffic, conversion
    [-3],[2],[getRandomInt(1)],[0],
    
    ["DROPSHIP"],
    ["Instead of holding your own"],
    ["product, you start shipping direct"],
    ["to customers via warehousing."],
    ["Shipping times scare some traffic."],
    ["+3 ENERGY,+2 BUCKS,-? CONVERSION"],
    //bucks, energy, traffic, conversion
    [2],[3],[0],[getRandomInt(2)-2],
    
    ["INTERN!"],
    ["A student wants to help you reach"],
    ["their generation the best way they"],
    ["know how: memes."],
    [""],
    ["+2 ENERGY, +? TRAFFIC"],
    //bucks, energy, traffic, conversion
    [0],[2],[getRandomInt(1)+1],[0],
    
    // Level two events
    // These can show up after turn 3
    // These start to be higher impact.
    
    ["FACEBOOK ADS"],
    ["Paid traffic to capitalize on your"],
    ["high converting website. Let's"],
    ["hope that the cash doesn't get"],
    ["eaten up."],
    ["-3 ENERGY, -5 BUCKS, +? TRAFFIC"],
    [-5],[-3],[getRandomInt(2)+1],[0],
    
    ["SUBSCRIPTION BOX"],
    ["Boxbros, a subscription box company"],
    ["catering to discerning bros, wants"],
    ["to feature you in their fall box."],
    ["It's a lot of work but..."],
    ["-6 ENERGY, +2 BUCKS, +? TRAFFIC"],
    [2],[-6],[getRandomInt(2)+2],[0],
    
    ["RECURRING REV"],
    ["One of your products is a hit with"],
    ["subscription options. It's a little"],
    ["more work on the back end, and it eats"],
    ["at your bottom line."],
    ["-4 ENERGY, -2 BUCKS, +3 TRAFFIC"],
    [-2],[-4],[3],[0],
    
    ["REDDIT ADS"],
    ["A dangerous game. Reddit tends"],
    ["to chew up and spit out marketers."],
    ["But if you can get it right..."],
    [""],
    ["-2 ENERGY, -4 BUCKS, +? TRAFFIC"],
    [-4],[-2],[getRandomInt(4)-1],[0],
    
    ["SOMETHING CORPORATE"],
    ["An opportunity to sell to a client"],
    ["looking for corporate gifts. They"],
    ["have a strict budget."],
    [""],
    ["-3 ENERGY, +10 BUCKS"],
    [+10],[-3],[0],[0],
    
    ["MAILMONKEY"],
    ["You can send out an offer to your"],
    ["engaged email list. It works well,"],
    ["but don't get spammy or you might."],
    ["lose customers."],
    ["-2 ENERGY, +2 BUCKS, +? TRAFFIC"],
    [2],[-2],[getRandomInt(2)-1],[0],
    
    ["DESIGN PRO"],
    ["You can get a professional designer to"],
    ["optimize your landing page for conversion."],
    ["Expensive, but an investment."],
    [""],
    ["-7 BUCKS, +.5% CONVERSION RATE"],
    [-7],[0],[0],[5],
    
    //bucks, energy, traffic, conversion
    ["GO VIRAL"],
    ["One of your videos is going viral, and now"],
    ["is the time to decide to keep it or not."],
    ["It will get you hits, but how good could"],
    ["they be?"],
    ["+3 TRAFFIC, -.2% CONVERSION RATE"],
    [0],[0],[3],[-2],
    
    ];
    