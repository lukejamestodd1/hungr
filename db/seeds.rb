# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Status.delete_all

users = User.create([
  {name: 'Jason', email: 'jason@pudding.com', status: "Coffee", location: 'nowhere'},
  {name: 'Kat', email: 'kat@pudding.com', status: "Coffee", location: 'nowhere'},
  {name: 'Max', email: 'max@pudding.com', status: "Coffee", location: 'nowhere'},
  {name: 'Imogen', email: 'imogen@pudding.com', status: "Coffee", location: 'nowhere'},
  {name: 'Nick', email: 'nick@pudding.com', status: "Other", location: 'nowhere'},
  {name: 'Ben', email: 'ben@pudding.com', status: "Other", location: 'nowhere'},
  {name: 'Adrian', email: 'adrian@pudding.com', status: "Italian", location: 'nowhere'},
  {name: 'Emma', email: 'emma@pudding.com', status: "Italian", location: 'nowhere'},
  {name: 'Sally', email: 'sally@pudding.com', status: "Italian", location: 'nowhere'},
  {name: 'Alex', email: 'alex@pudding.com', status: "Dessert", location: 'nowhere'},
  {name: 'Sam', email: 'sam@pudding.com', status: "Dessert", location: 'nowhere'},
  {name: 'Dani', email: 'dani@pudding.com', status: "Breakfast", location: 'nowhere'},
  {name: 'Kelly', email: 'kelly@pudding.com', status: "Breakfast", location: 'nowhere'},
  {name: 'Ange', email: 'ange@pudding.com', status: "Breakfast", location: 'nowhere'},
  {name: 'Gary', email: 'gary@pudding.com', status: "Breakfast", location: 'nowhere'},
  {name: 'Cindy', email: 'cindy@pudding.com', status: "Drinks", location: 'nowhere'},
  {name: 'Sandy', email: 'sandy@pudding.com', status: "Drinks", location: 'nowhere'},
  {name: 'Mindi', email: 'mindi@pudding.com', status: "Drinks", location: 'nowhere'},
  {name: 'Carly', email: 'carly@pudding.com', status: "Asian", location: 'nowhere'},
  {name: 'Sharon', email: 'sharon@pudding.com', status: "Asian", location: 'nowhere'}
  ]);

statuses = Status.create([
	{name: 'Drinks', image_url: "/icons/cheers.png"},
	{name: 'Italian', image_url: "/icons/pizza.png"},
	{name: 'American', image_url: "/icons/burger-and-soda-with-straw.png"},
	{name: 'Breakfast', image_url: "/icons/bacon.png"},
	{name: 'Dessert', image_url: "/icons/three-balls-ice-cream-cone.png"},
	{name: 'Coffee', image_url: "/icons/very-hot-drink-with-shine.png"},
	{name: 'Healthy', image_url: "/icons/leaves-of-herbs.png"},
	{name: 'Other', image_url: "/icons/eggplant-rotated-to-left.png"},
	{name: 'Asian', image_url: "/icons/rice-bowl-with-chopsticks.png"}
	]);