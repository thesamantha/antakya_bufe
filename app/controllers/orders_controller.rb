class OrdersController < ApplicationController
  def new
    @order = Order.new()

    Food::NAMES.each_with_index do |name, index|
      @order.foods.build(name: name, price: Food::PRICES[index], ingredients: Food::INGREDIENTS[index])
    end
  end


  # grab id of food and count from that id's column, add one for each count?
  def create
    @order = Order.new(order_params)

    #set order as not yet completed
    @order.finished = false
    #sum up order total from price of each item ordered (multiplied by quantity of each item)
    @order.total = 0
    @order.foods.each do |food|
      @order.total += food.price*food.quantity
    end

    respond_to do |format|
      if @order.save
        AppMailer.order_email(User.find(email: "samanthatitewebber@gmail.com"), @order).deliver_now
        format.html { redirect_to root_path, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render root_path, notice: 'Error in creating order.' }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    def order_params
      params.require(:order).permit(foods_attributes: [:id, :order_id, :quantity, :name, :ingredients, :price])
    end

end
