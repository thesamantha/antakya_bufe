class AddOrderRefToFoods < ActiveRecord::Migration[5.0]
  def change
    add_reference :foods, :order, foreign_key: true
  end
end
