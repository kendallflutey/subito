FactoryGirl.define do 
	factory :deal do 
		sequence(:title) { |n| "I am title number #{n}"}
		sequence(:description) { |n| "I am description number #{n}"}
	end

	factory :invalid_deal, parent: :deal do 
		title nil
		sequence(:description) { |n| "I am description number #{n}"}
	end
end