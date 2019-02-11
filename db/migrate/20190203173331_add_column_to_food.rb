class AddColumnToFood < ActiveRecord::Migration[5.0]
  def change
	  add_column :foods, :ingredients, :string
  end
end
