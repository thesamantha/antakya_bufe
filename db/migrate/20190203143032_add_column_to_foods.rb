class AddColumnToFoods < ActiveRecord::Migration[5.0]
  def change
	  add_column :foods, :quantity, :integer
  end
end
