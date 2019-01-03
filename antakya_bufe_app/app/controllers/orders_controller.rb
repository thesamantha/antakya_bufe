class OrdersController < ApplicationController
  def new
    @order = Order.new

    # should receive key called food in params hash
    # for food in foods do
    #     @foods.push(food)
    # end
  end

  private
    def order_id
      params.require(:order_id)
    end

    #send foods as JSON in params hash
    def foods
      params.require(:foods)
    end
end
