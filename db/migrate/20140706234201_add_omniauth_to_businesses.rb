class AddOmniauthToBusinesses < ActiveRecord::Migration
  def change
    add_column :businesses, :provider, :string
    add_column :businesses, :uid, :string
  end
end
