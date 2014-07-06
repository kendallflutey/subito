class Deal < ActiveRecord::Base
  attr_accessible :title, :description, :start_time, :finish_time, :address, :longitude, :latitude, :deal_image, :category_id, :business_id

  geocoded_by :address

  belongs_to :category
  belongs_to :business

  validates :title, :description, presence: {message: "This field is required"}

  after_validation :geocode, if: :address_changed?
end
