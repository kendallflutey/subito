class CategoriesController < ApplicationController

	def index
		@categories = Category.all
	end

	def show
		@category = Category.find(params[:id])
		@deals = Deal.where(category_id: @category.id)
	end

  def getdeals
    # @position = JSON.parse(cookies["lat_lng"])
    latitude = position["latitude"]
    longitude = position["longitude"]

    @deals = Deal.near([latitude, longitude], 1000)
    render json: @deals
  end

  def full_show
    @category = Category.find(1)
    # @position = JSON.parse(cookies["lat_lng"])
    # latitude = @position["latitude"]
    # longitude = @position["longitude"]
    # @deals = Deal.near([latitude, longitude], 1000)
    @deals = Deal.where(category_id: @category.id)
  end



end
