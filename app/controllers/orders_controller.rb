class OrdersController < ApplicationController
  def new
    session[:order_params] ||= {}
    @order = Order.new(session[:order_params])
    @order.current_step = session[:order_step]

    Food::NAMES.each_with_index do |name, index|
      @order.foods.build(name: name, price: Food::PRICES[index], ingredients: Food::INGREDIENTS[index])
    end
  end

  def create

    session[:order_params].deep_merge!(params[:order]) if params[:order]
    @order = Order.new(session[:order_params])
    @order.current_step = session[:order_step]
    if params[:back_button]
      @order.previous_step
    elsif @order.last_step?
      @order.save
    else
      @order.next_step
    end
    session[:order_step] = @order.current_step

    binding.irb
    if @order.new_record? && !@order.last_step?
      @order.foods.destroy_all
      Food::NAMES.each_with_index do |name, index|
        @order.foods.build(name: name, price: Food::PRICES[index], ingredients: Food::INGREDIENTS[index])
      end
      render "new"
    else
      session[:order_step] = session[:order_params] = nil
      AppMailer.order_email(User.find_by(email: "samanthatitewebber@gmail.com"), @order).deliver_now
      flash[:notice] = "Order was successfully created."
      redirect_to root_path
    end
  end

  private

    def order_params
      params.require(:order).permit(foods_attributes: [:id, :order_id, :quantity, :name, :ingredients, :price])
    end

end
