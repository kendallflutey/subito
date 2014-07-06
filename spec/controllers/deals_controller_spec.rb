require 'spec_helper'

describe DealsController do 

	before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:business]
      business = FactoryGirl.create(:business)
      sign_in business
    end

	describe "#index" do 

		before(:each) do
    	get :new
    end

		it "returns a collection of all the deals" do 
			get :index
			expect(assigns(:deals)).to eq(Deal.all)
		end

		it "response with OK" do 
			get :index
			response.code.should eq("200")
		end

		it "renders the index template" do 
			get :index
			response.should render_template("index")
		end
	end

	describe "#new" do 

		it "creates a new instance of Deal" do 
			get :new
			expect(assigns(:deal)).to be_a_new(Deal)
		end

		it "renders the new view" do 
			get :new
			response.should render_template("new")
		end
	end

	describe "#create" do 

		context "Valid Params" do 
			let(:my_deal) {FactoryGirl.attributes_for(:deal)}

			it "creates a new deal" do 
				expect{post :create, deal: my_deal}.to change(Deal, :count).by(1)
			end

			it "redirects to category_url when saved" do 
	      		post :create, deal: my_deal
	      		expect(response).to redirect_to(business_deals(my_deal[:business_id]))
    		end
		end
	end


end









