class Deal < ActiveRecord::Base
  attr_accessible :title, :description, :start_time, :finish_time, :address, :longitude, :latitude, :deal_image

  validates :title, :description, presence: {message: "This field is required"}
end
