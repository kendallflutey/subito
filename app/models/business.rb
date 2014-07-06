class Business < ActiveRecord::Base
  attr_accessible :name, :address, :email, :phone

  has_many :deals

  validates :name, :address, :email, presence: {message: "This field is required"}
  validates :email, uniqueness: {message: "The email is already registered, please login if it's yours"}
  validates :email, format: { with: /.+@.+\..{2,}/, message: "This isn't a valid email address"}
end
