class DealsController < ApplicationController

	# before_filter :load_deal, :only => [:show, :edit, :update, :destroy]

	def index
		@deals = Deal.all
	end

	def show
		@deal = Deal.find(params[:id])
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
      render :new
    end
  end

end