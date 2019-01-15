class Order < ApplicationRecord
  has_many :food

  validates :food, :length => { :minimum => 1 }
end
