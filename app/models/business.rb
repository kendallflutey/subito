class Business < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  attr_accessible :name, :address, :email, :phone

  has_many :deals

  validates :name, :address, :email, presence: true
  validates :email, uniqueness: {message: "The email is already registered, please login if it's yours"}
  validates :email, format: { with: /.+@.+\..{2,}/, message: "This isn't a valid email address"}

end
