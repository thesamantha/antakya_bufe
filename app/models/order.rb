class Order < ApplicationRecord
  has_many :foods, inverse_of: :order, autosave: true, dependent: :destroy
  accepts_nested_attributes_for :foods,
                                allow_destroy: true,
                                reject_if: lambda { |f| f[:quantity].blank? }

  validates :foods, presence: true, :if => lambda { |o| o.current_step == "delivery" }
  validates :customer_name, presence: true, :if => lambda { |o| o.current_step == "delivery" }
  validates :address, presence: true, :if => lambda { |o| o.current_step == "delivery" }
  validates :tele, presence: true, :if => lambda { |o| o.current_step == "delivery" }


  # logic for multiple-step order

  attr_writer :current_step # setter-method for :current_step

  def current_step
    @current_step || steps.first
  end

  def steps
    %w[food delivery].freeze
  end

  def next_step
    self.current_step = steps[steps.index(current_step)+1]
  end

  def previous_step
    self.current_step = steps[steps.index(current_step)-1]
  end

  def first_step?
    current_step == steps.first
  end

  def last_step?
    current_step == steps.last
  end

  def all_valid?
    steps.all? do |step|
      self.current_step = step
      valid?
    end
  end
end
