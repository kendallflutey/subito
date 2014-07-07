
class CategoriesController < ApplicationController

	def index
		@categories = Category.all
	end

	def show
    @categories = Category.all
		@category = Category.find(params[:id])
		@deals = Deal.where(category_id: @category.id)
	end

  def user_coords
    latitude = params[:latitude]
    longitude = params[:longitude]

    getdeals(latitude, longitude)
    
  end

  def getdeals(latitude, longitude)
    deals = Deal.near([latitude, longitude], 1000)
    render json: deals
  end

end
