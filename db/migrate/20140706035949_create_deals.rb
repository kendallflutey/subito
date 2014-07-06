class CreateDeals < ActiveRecord::Migration
  def change
    create_table :deals do |t|
    	t.string :title
      t.string :description
      t.datetime :start_time
      t.datetime :finish_time
      t.string :address
      t.float :longitude
      t.float :latitude
      t.string :deal_image
      t.belongs_to :business
      t.belongs_to :category
      
      t.timestamps
    end
  end
end
