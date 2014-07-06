class CategoriesController < ApplicationController

	def index
		@categories = Category.all
	end

	def show
		@category = Category.find(params[:id])
		@deals = Deal.where(category_id: @category.id)
	end

  def getdeals
    @category = Category.find(params[:id])
    @deals = Deal.where(category_id: @category.id)
    render json: @deals
  end

end
