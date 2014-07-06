### SEED ALL THE CATEGORIES
Category.create(name: "Food and Drink")
Category.create(name: "Entertainment")
Category.create(name: "Retail")
Category.create(name: "Services")

# ### BUSINESSES
Business.create(name: "Ekim Burger",
				address: "257 Cuba St, Te Aro, Wellington 6011",
				phone: "04 533 6767",
				email: "ekim@burger.com",
				password: "ekim123")


Business.create(name: "Fidels",
				address: "234 Cuba St, Te Aro 6011",
				phone: "04 533 6868",
				email: "fidels@cafe.com",
				password: "fidels123")

Business.create(name: "Olive Cafe",
				address: "170/172 Cuba St, Wellington 6011",
				phone: "04 533 6969",
				email: "olive@cafe.com",
				password: "olive123")

Business.create(name: "Light House Cinema",
				address: "29 Wigan St, Te Aro, Wellington 6011",
				phone: "04 533 7070",
				email: "lighthouse@cinemas.com",
				password: "lighthousecinemas123")

Business.create(name: "Spacesuit",
				address: "164 Cuba St, Te Aro, Wellington 6011",
				phone: "04 533 7171",
				email: "space@suit.com",
				password: "spacesuit123")

### DEALS

Deal.create(title:"50% off burgers",
			description: "burgers cheap for all to eat",
			category_id: 1,
			business_id: 1,
			address: "257 Cuba St, Te Aro, Wellington 6011",
			longitude: 174.774128,
			latitude: -41.296125,
			start_time: DateTime.now,
			finish_time: DateTime.now)

Deal.create(title:"half price shakes!",
			description: "slurp em up at the price of half a cup",
			category_id: 1,
			business_id: 2,
			address: "170/172 Cuba St, Wellington 6011",
			start_time: DateTime.now,
			finish_time: DateTime.now)

Deal.create(title:"20% off counter food",
			description: "cheap food for cheap people(we dont have counter food",
			category_id: 1,
			business_id: 3,
			address: "164 Cuba St, Te Aro, Wellington 6011",
			longitude: 174.775026,
			latitude: -41.294269,
			start_time: DateTime.now,
			finish_time: DateTime.now)



