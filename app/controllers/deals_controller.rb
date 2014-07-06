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
    @deal = Deal.new(params[:post])

    if @deal.save
      flash[:notice] = "Deal was successfully created!"
      redirect_to root
    else
      render :new
    end
  end

 #  def edit
 #  end

 #  def update
 #    if @deal.update_attributes(params[:post])
 #      redirect_to root
 #    else
 #      render :edit
 #    end
 #  end

 #  def destroy
 #    @deal.destroy
 #    redirect_to root
 #  end

	# private
 #  def load_deal
 #    @deal = Deal.find(params[:id])
 #  end


end