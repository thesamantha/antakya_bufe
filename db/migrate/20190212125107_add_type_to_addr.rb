class AddTypeToAddr < ActiveRecord::Migration[5.0]
  def change
	  change_column :orders, :address, :string
  end
end
