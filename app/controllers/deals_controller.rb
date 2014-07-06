class DealsController < ApplicationController

	before_filter :load_deal, :only => [:show, :edit, :update, :destroy]

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
      redirect_to deals_path
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