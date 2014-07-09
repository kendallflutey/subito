require 'spec_helper'

describe CategoriesController do 

	describe "#index" do 
		before(:each) do
			get :index
		end

		it "returns a collection of all the categories" do 
			expect(assigns(:categories)).to eq(Category.all)
		end

		it "responds with OK" do 
			response.code.should eq("200")
		end

		it "renders the correct template" do 
			response.should render_template("index")
		end
	end

	describe "#show" do

		let(:category) {FactoryGirl.create(:category)}
		let(:deal) {FactoryGirl.attributes_for(:deal)}

		before(:each) do
			Category.stub(:all).and_return(category)
			Category.stub(:find).and_return(category)
			Deal.stub(:where).and_return(deal)
		end

		it "returns a collection of all the categories" do 
			get :show, id: category[:id], category_id: category[:id]
			expect(assigns(:categories)).to eq(Category.all)
		end

		it "returns a specific category" do 
			get :show, id: category[:id], category_id: category[:id]
			expect(assigns(:category)).to eq(category)
		end

		it "returns a collection of deals" do 
			get :show, id: category[:id], category_id: category[:id]
			expect(assigns(:deals)).to eq(deal.stringify_keys)
		end

		it "searches with where once" do 
			Deal.should_receive(:where).exactly(1)
			get :show, id: category[:id], category_id: category[:id]
		end

		it "renders the correct template" do 
			response.should render_template(category)
		end

		it "responds with OK" do 
			response.code.should eq("200")
		end
	end

	describe "#user_coords" do 

		before(:each) do
			post :user_coords
		end

		it "responds with OK" do 
			response.code.should eq("200")
		end
	end

end















