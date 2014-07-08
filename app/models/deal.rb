
class Deal < ActiveRecord::Base
  attr_accessible :title, :description, :start_time, :finish_time, :address, :longitude, :latitude, :deal_image, :category_id, :business_id

  geocoded_by :address

  mount_uploader :deal_image, ImageUploader
  belongs_to :category
  belongs_to :business

  validates :title, :description, :address, :start_time, :finish_time, presence: true

  validate :finish_date_in_future?
  
  after_validation :geocode, if: :address_changed?


  def finish_date_in_future?
  	if finish_time.present? && finish_time < DateTime.now
  		errors.add(:finish_time, "can't be in the past")
  	end
  end

  # def less_than_four_hours?
  # 	if ((finish_time - start_time) * 24 * 60 ) > 240
  # 		errors.add(:finish_time, "Deals can only be four hours max")
  # 	end
  # end
end
