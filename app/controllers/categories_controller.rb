class CategoriesController < ApplicationController

	def index
    @categories = Category.all
	end

	def show
    # Consider before filters to DRY up code
    @categories = Category.all
		@category = Category.find(params[:id])

    # Why are you not using your association here? In fact you don't need to create this
    # instance var in your controller you can just use @categories and it's association
    # in the view.
    @deals = Deal.where(category_id: @category.id)
	end

  # Rather than pushing this code out into a controller method I would put the work
  # into model scopes (or methods).
  # location = [ params[:latitude], params[:longitude] ]
  # filtered_deals = Deals.in_category(params[:id]).close_to(location)
  # render json: filtered_deals
  def user_coords
    latitude = params[:latitude]
    longitude = params[:longitude]

    getdeals(latitude, longitude)
    
  end

  def getdeals(latitude, longitude)
    # 1000 should be a constant in the model
    deals = Deal.near([latitude, longitude], 1000)

    filtered_deals = deals.select { |deal| deal.category_id == params[:id].to_i}

    render json: filtered_deals
  end

end
