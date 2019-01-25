class AddNameAddressTeleToUser < ActiveRecord::Migration[5.0]
  def change
	  add_column :users, :name, :string
	  add_column :users, :addr, :string
	  add_column :users, :tele, :string
  end
end
