require 'spec_helper'

describe Business do

	it { should have_many(:deals) }
	it { should validate_presence_of :name }
	it { should validate_presence_of :address }
	it { should validate_presence_of :email }

	it { should validate_uniqueness_of :email }

end
