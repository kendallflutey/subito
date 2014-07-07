require 'spec_helper'

describe Business do

	it { should have_many(:deals) }
	it { should validate_presence_of :name }
	it { should validate_presence_of :email }

	it { should validate_uniqueness_of :email }

	it { should_not allow_value("kendallflutey.com").for(:email) }

	context "email validation" do 

		it "recognises when email is valid" do 
			business = FactoryGirl.create(:business)
			expect(business).to be_valid
		end
	end

	context "omniauth login" do 

		let(:business) { FactoryGirl.create(:business) }

		it "requires a password for non-omniauth businesses" do 
			expect(business.password_required?).to eq(true)
		end

		it "requires an email for non-omniauth businesses" do 
			expect(business.email_required?).to eq(true)
		end

	end

end
