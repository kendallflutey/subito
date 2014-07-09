
class Deal < ActiveRecord::Base
  # Line too long, line break
  attr_accessible :title, :description, :start_time, :finish_time, :address, :longitude, :latitude, :deal_image, :category_id, :business_id

  geocoded_by :address

  mount_uploader :deal_image, ImageUploader
  belongs_to :category
  belongs_to :business

  validates :title, :description, :address, :start_time, :finish_time, presence: true

  validate :finish_date_in_future?
  
  after_validation :geocode, if: :address_changed?


  def finish_date_in_future?
    # This conditional could be put into a private method to make this more
    # readable. Better yet check out the Rails helper called "passed?" or
    # something like that. There are lots of helpers for time stuff in Rails
  	if finish_time.present? && finish_time < DateTime.now
  		errors.add(:finish_time, "can't be in the past")
  	end
  end

  # Don't commit commented out code!
  # def less_than_four_hours?
  # 	if ((finish_time - start_time) * 24 * 60 ) > 240
  # 		errors.add(:finish_time, "Deals can only be four hours max")
  # 	end
  # end
end
