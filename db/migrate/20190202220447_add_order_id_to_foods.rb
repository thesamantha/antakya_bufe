class AddOrderIdToFoods < ActiveRecord::Migration[5.0]
  def change
	  add_column :foods, :order_id, :integer
  end
end
