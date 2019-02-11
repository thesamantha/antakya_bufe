class AddFoodRefToOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :orders, :food, foreign_key: true
  end
end
