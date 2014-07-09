module ApplicationHelper
  def deal_background_image(deal)
    "background-image: url('#{deal.deal_image_url}');"
  end
end
