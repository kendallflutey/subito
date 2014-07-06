FactoryGirl.define do 
	factory :deal do 
		sequence(:title) { |n| "I am title number #{n}"}
		sequence(:description) { |n| "I am description number #{n}"}
		sequence(:address) { |n| "I am the address number #{n}"}
		start_time DateTime.now
		finish_time DateTime.now
	end

	factory :invalid_deal, parent: :deal do 
		title nil
	end
end