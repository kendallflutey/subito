require 'spec_helper'

describe DealsController do 

	before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:business]
      @my_business = FactoryGirl.create(:business)
      sign_in @my_business
    end

	describe "#index" do 

		before(:each) do
    		get :index
    	end

		it "returns a collection of all the deals" do 
			expect(assigns(:deals)).to eq(Deal.all)
		end

		it "responds with OK" do 
			response.code.should eq("200")
		end

		it "returns prepares a current deal" do 
			expect(assigns(:deal)).to be_a(Deal)
		end

		it "renders the correct template" do 
			response.should render_template("new")
		end
	end

	describe "#new" do 

		before(:each) do
			get :new
		end

		it "creates a new instance of Deal" do 
			expect(assigns(:deal)).to be_a_new(Deal)
		end

		it "renders the new view" do 
			response.should render_template("new")
		end

		it "responds with OK" do 
			response.code.should eq("200")
		end
	end

	describe "#create" do 

		context "Valid Params" do 
			
			let(:my_deal) {FactoryGirl.attributes_for(:deal, business_id: 1)}

			it "creates a new deal" do 
				post :create
				expect(assigns(:deal)).to be_a_new(Deal)
			end

			it "persists a deal" do 
				expect{post :create, deal: my_deal}.to change(Deal, :count).by(1)
			end

			it "stays on current page when saved" do 
	      		post :create, deal: my_deal
	      		expect(response).to redirect_to(business_deals_url(my_deal[:business_id]))
    		end

    		it "displays a flash notice when saved" do 
    			post :create, deal: my_deal
    			flash[:notice].should_not be_nil
    		end

    		it "responds with OK" do 
    			response.code.should eq("200")
    		end
		end
	end


end









