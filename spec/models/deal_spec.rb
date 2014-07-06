require 'spec_helper'

describe Deal do
	it { should belong_to(:category) }
	it { should belong_to(:business) }
end
