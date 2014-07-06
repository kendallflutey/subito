require 'spec_helper'

describe Deal do
	it { should belong_to(:category) }
	it { should belong_to(:business) }

	it { should validate_presence_of :title }
	it { should validate_presence_of :description }
	it { should validate_presence_of :address }
	it { should validate_presence_of :start_time }
	it { should validate_presence_of :finish_time }

end
