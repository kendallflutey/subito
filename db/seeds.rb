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

Deal.create(title:"Free French Fries",
			description: "come on down to JJs and buy any regular burger combo and you will receive a free regular french fries",
			category_id: 1,
			business_id: 1,
			address: "257 Cuba St, Te Aro, Wellington 6011",
			start_time: DateTime.now,
<<<<<<< HEAD
			finish_time: DateTime.new(2014,07,9,20,50,55),
			deal_image: (File.open(File.join(Rails.root, '/app/assets/images/fries.jpg')))
=======
			finish_time: DateTime.new(2014,07,12,20,50,55),
			deal_image: (File.open(File.join(Rails.root, '/app/assets/images/ekim.png')))
>>>>>>> master
			)

Deal.create(title:"half price shakes",
			description: "come on down to Ekim and get any shake from our range at half price. slurp em up at the price of half a cup",
			category_id: 1,
			business_id: 2,
			address: "170/172 Cuba St, Wellington 6011",
			start_time: DateTime.now,
			finish_time: DateTime.new(2014,07,9,8,50,55),
			deal_image: (File.open(File.join(Rails.root, '/app/assets/images/milkshake.jpg')))
			)

Deal.create(title:"20% off counter food",
			description: "Stop in at midnight espresso an get 20% of our fabulous range of counter food. Get in quick It'll be gone in a flash",
			category_id: 1,
			business_id: 3,
			address: "164 Cuba St, Te Aro, Wellington 6011",
			start_time: DateTime.now,
			finish_time: DateTime.new(2014,07,9,19,50,55),
			deal_image: (File.open(File.join(Rails.root, '/app/assets/images/counterfod.jpg')))
			)

Deal.create(title:"sushi train",
			description: "jump on board the sushi train for the ride of your life as there is 2 for 1 sushi for the life of this deal",
			category_id: 1,
			business_id: 1,
			address: "158 Tory St, Te Aro, Wellington 6011",
			start_time: DateTime.now,
			finish_time: DateTime.new(2014,07,9,16,50,55),
			deal_image: (File.open(File.join(Rails.root, '/app/assets/images/sushi.jpg')))
			)

Deal.create(title:"half price coca cola!",
			description: "Patels dairy are offering half price cola to clear some excess stock so come in quick and grab a bargain",
			category_id: 1,
			business_id: 2,
			address: "120 Willis St, Wellington",
			start_time: DateTime.now,
			finish_time: DateTime.new(2014,07,9,15,50,55),
			deal_image: (File.open(File.join(Rails.root, '/app/assets/images/cola.jpg')))
			)

Deal.create!(title:"Taco Mania",
			description: "Get your sombrero on for some cheap mexican kai. its 30% of all taco meals excluding gluten free while this deal lasts",
			category_id: 1,
			business_id: 3,
			address: "321 courtenay place, Wellington",
			start_time: DateTime.now,
			finish_time: DateTime.new(2014,07,9,20,50,55),
			deal_image: (File.open(File.join(Rails.root, '/app/assets/images/taco,jpg')))
			)




