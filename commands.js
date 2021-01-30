/* 
    setting here:
    * the game name (will appear as title)
    * Credits (will appear at the footer of the page)
	* commads of the game
*/

sGameName = "WSB-GameStop Saga - DFV view (Click text to continue)";

GameCredits = "Alex";

aCommands = {
	"Start": [
		["i", "images/gamestop1.jpg"],
		["t", "You enter a GameStop store. The store looks outdated, but you see some customers buying Call of Duty games and Pokemon merchandise."],
		["t", "You go home and read the newspaper. 'GameStop shares at all time low' and 'Hedge funds speculating on GameStop's demise' are two recent headlines."],
		["i", "images/inspector.png"],
		["b", "You don't understand as you saw the store today and the customers buying, so decide to dig deeper into this story.", "Do financial research on GameStop"],
		["b", "You decide to do nothing and invest 10 Dollars in an exchange-traded fund (ETF) instead.", "Invest in ETF"]
	],
	"Do financial research on GameStop": [
		["i", "images/badbill.png"],
		["t", "You're studying GameSpot's financial reports and discover that the company is in bad shape. CEOs are coming and going, losses and debt are piling up, digital downloads are the future, foot traffic for GameSpot stores is falling."],
		["t", "However, you think to yourself that the new console generation might invigorate the business."],
		["t", "You decide that Gamestop's current share price of §5 is undervaluing the business. There could be a turnaround, after all."],
		["t", "You invest some money into the firm's shares and wonder what to do next."],
		["b", "Tell your partner about it and walk the dog.", "Partner"],
        ["b", "Log on to r/wallstreetbets and tell people you just invested in Gamestop", "WSB"]
	],
	"Invest in ETF": [
		["i", "images/oklife.png"],
		["t", "You invest steadily in your ETF and occassionally read Wallstreetbets."],
		["t", "You enjoy a relaxing life and a good pension."],
		["b", "Restart and take a more risky path.", "Start"],
	],

	"Partner": [
	["i", "images/oklife.png"],
	["t", "Your partner is understanding and not questioning your investment decisions."],
	["t", "You enjoy a relaxing life and eventually sell your shares, making a nice little profit."],
	["b", "Restart.", "Start"],
	],

	"WSB":[
		["i", "images/wsb1.jpg"],
		["t", "You post your opinion of GameStop (a so-called Due Diligence) on r/wallstreetbets and many think you're crazy. Others are curious."],
		["t", "You log off and do some more research on GameStop. You discover, that the shares are heavily shorted. That means that many people (especially financial firms like Hedge Funds) borrowed shares from other people, sold it on to other people who in turn lend them on to other people."],
		["i", "images/overshort.png"],
		["t", "In fact, you discover that 140% of GameSpot shares are shorted. Which means that they are over-shorted. Which means that every owner of a GameSpot share will definitely be able to sell her shares because all people who borrowed shares need to eventually return them. And for this they need to buy the shares."],
		["t", "That means that short selling Hedge Funds went too far. Of course, they were hoping that nobody notices."],
        ["b", "You notice and decide to post it on Wallstreetbets.", "WSB2"],
		["b", "You tell your partner, do nothing about it and go to bed.", "Partner"]
    ],	
	"WSB2":[
		["i", "images/boom.png"],
		["t", "WSB is going wild. Other people agree with your assessment of the situation."],
		["t", "Then, out of nowhere, an investor named Ryan Cohen invests in GameSpot. Wow! He successfully built an online pet-food retailer and many people pin their hopes on him to transform GameStop."],
		["t", "WSB is excited! People start buying GameSpot shares, hoping for share price rises. Some think a fair price would be somewhere around $30 to $60, given a potential digital transformation of the company."],
		["t", "Others, including you, go a step further and calculate that the share price will rise dramatically. Because eventually short sellers need to come up with shares and return them. And if only enough people on WSB would buy the shares, refuse to sell them at low prices, short sellers would need to pay a lot for these shares. WSB people would get rich!"],
		["b", "You buy more shares.", "Melvin"],
		["b", "You talk to your partner and do nothing.", "Partner"]
	],
	"Melvin":[
		["i", "images/vader.png"],
		["t", "You're on high spirits and hope for a nice profit with your GameSpot shares."],
		["t", "However, the short sellers are striking back. Two of them publish research reports on GameSpot, basically telling the public that GameSpot shares trade at too high of a price and the company is failing."],
		["t", "You discuss with your fellow WSB people and become angry. Now more than ever you buy more Gamespot shares."],
		["t", "You calculate that these short sellers need to buy back the shares is in the very near future. Because they agreed with the original owners a certain date at which to return the shares."],
		["t", "It's a public battle now. People on WSB, Discord and Twitter are jumping on the GameSpot train, buying shares. Shares are trading at over $100 now."],
		["b", "You hold on to your shares, which are now worth a fortune.", "Hold"],
		["b", "You sell your shares, which are now worth a fortune.", "Partner"]
    ],	
	"Hold":[
		["i", "images/angry.png"],
		["t", "People tell you to at least sell some of your shares. But you still hold on to them, anticipating the upcoming showdown with short sellers."],
		["t", "You want to squeeze them out as much as possible, thereby creating a Short Squeeze."],
		["t", "It's become a full assault on Wall Street by now. The short sellers are getting nervous. GameSpot shares trade at $300 now. Eventually you sell some shares, but hold on to a huge amount."],
		["t", "Everyone expects Friday, 29 January 2021, to be the day of the big Short Squeeze as many short sellers agreed to return shares to their original owners that day. Unfortunately, freeloaders have been appearing and try to pump and dump other shares too. Such as Nokia or Nakd."],
		["t", "You've created a whole movement of people investing in GameSpot to 'stick it to the man'. Many trade on popular brokers that are basically free to trade on. Many invest for the first time."],
		["b", "It's Wednesday now. You decide to go to bed early to rest well and get as much energy as possible for the showdown.", "Showdown"],
		["b", "It's Wednesday now. You decide to visit your local GameSpot, which has closed down. You go to bed.", "Showdown"]
	],
	"Showdown":[
		["i", "images/robin.png"],
		["t", "It's Thursday! One day before the potential showdown. Shares of firms such as Nokia, AMC, GameSpot or Naked are rising a lot. Traditional TV channels scramble to understand what is going on. People call you and your WSB crew a cartel and mob."],
		["t", "You slept well though and feel calm. However, many of the brokers that were used to trade GameSpot and other shares decided it was all too risky for them and heavily limited trading. People are no longer able to buy GameSpot in large amounts. They cry foul."],
		["t", "Given these trading disruptions, GameSpot shares fluctuate heavily. They fall, rise, and fall again."],
		["t", "It's Friday now, trading limitations are still in place. It is suspected that many short sellers were able to get hold of shares, even at a heavy loss, and return them to their original owners."],
		["t", "GameStop trades at around $300 now. Many people who followed you early have become very rich. Others have not been so lucky."],
		["b", "Even though people are angry with Wall Street and the brokers, there is no showdown today. You have sold a lot of shares by now and decide to walk your dog.", "Dog"]
	],
	"Dog":[
		["i", "images/rocket.png"],
		["t", "You're so tired now!"],
		["t", "People say you changed Wall Street and helped to support GameStop against greedy short sellers. Others accuse you led first-time investors to do risky trades."],
		["t", "It's been nerve-wrecking. You fall asleep."],
		["r", "Retry"]
	]
}			
