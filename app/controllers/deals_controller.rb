class DealsController < ApplicationController

	before_filter :load_deal, :only => [:show, :edit, :update, :destroy]
  before_filter :authenticate_business!

	def index
		@deals = Deal.all
	end

	def show
	end

	def new
    	@deal = Deal.new
  	end

  def create
    @deal = Deal.new(params[:deal])

    if @deal.save
      flash[:notice] = "Deal was successfully created!"
      redirect_to category_path(@deal.category_id)
    else
      p @deal.errors
      render :new
    end
  end

  private 

  def load_deal
    @deal = Deal.find(params[:id])
  end

end