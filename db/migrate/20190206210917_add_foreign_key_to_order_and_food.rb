class AddForeignKeyToOrderAndFood < ActiveRecord::Migration[5.0]
  def change
	  add_foreign_key :foods, :orders
  end
end
