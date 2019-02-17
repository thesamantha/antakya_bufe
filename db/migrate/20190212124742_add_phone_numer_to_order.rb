class AddPhoneNumerToOrder < ActiveRecord::Migration[5.0]
  def change
	  add_column :orders, :tele, :string
  end
end
