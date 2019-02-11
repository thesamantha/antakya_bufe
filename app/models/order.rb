class Order < ApplicationRecord
  has_many :foods, inverse_of: :order, autosave: true, dependent: :destroy
  accepts_nested_attributes_for :foods,
                                allow_destroy: true,
                                reject_if: lambda { |f| f[:quantity].blank? }

  validates :foods, presence: true
end
