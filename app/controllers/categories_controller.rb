class CategoriesController < ApplicationController

	def index
		@categories = Category.all
	end

	def show
		@category = Category.find(params[:id])
		@deals = Deal.where(category_id: @category.id)
	  # render json: @deals
	end

  def getdeals
    # @category = Category.find(params[:id])
    # @deals = Deal.where(category_id: @category.id)
    # pp cookies["lat_lng"]
    position = JSON.parse(cookies["lat_lng"])
    # pp"############################"
    # puts position
    # puts position["latitude"]
    latitude = position["latitude"]
    longitude = position["longitude"]
    # pp "****************************************"
    # pp latitude
    # pp longitude
    # pp "**************************************"

    @deals = Deal.near([latitude, longitude], 1000)
    # pp @deals
    # @categorized_deals = @deals.select { |deal| deal.category_id == (params[:id]) }
    render json: @deals
  end



end