class Business < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and 
  devise :database_authenticatable, :registerable, :omniauthable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauth_providers => [:facebook, :twitter]


  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  attr_accessible :name, :address, :email, :phone

  has_many :deals

  validates :name, presence: true, :if => 'provider.blank?'
  validates :email, uniqueness: {message: "The email is already registered, please login if it's yours"}, :if => 'provider.blank?'
  validates :email, format: { with: /.+@.+\..{2,}/}, :if => 'provider.blank?'

  def self.twitter_from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_create do |business|
      business.provider = auth.provider
      business.uid = auth.uid
      business.name = auth.info.name
      business.email = auth.info.email
      business.address = auth.info.location
    end
  end

  def self.facebook_from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_create do |business|
      business.provider = auth.provider
      business.uid = auth.uid
      business.name = auth.info.name
      puts "made it here!"

      business.email = auth.info.email
      business.address = auth.location
    end
  end


  def self.new_with_session(params, session)
    if session["devise.business_attributes"]
      new(session["devise.business_attributes"], without_protection: true) do |business|
        business.attributes = params
        business.valid?
      end
    else
      super
    end
  end

  def password_required?
    super && provider.blank?
  end

  def email_required?
    super && provider.blank?
  end

  def update_with_password(params, *options)
    if encrypted_password.blank?
      update_attributes(params, *options)
    else
      super
    end
  end
  
end
