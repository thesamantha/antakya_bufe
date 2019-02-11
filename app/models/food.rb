class Food < ApplicationRecord
  belongs_to :order, inverse_of: :foods

  NAMES = %w[ Barany Falafel Tal Tavaszi-salata ].freeze

  PRICES = [890, 1000, 1400, 790].freeze

  INGREDIENTS = [ "darált bárányhús, répa, káposzta, hagyma, saláta, paradicsom vagy csalamádé, joghurtos szósz, csípős szósz, lavas",
                  "falafel",
                  "csirkehús, káposzta, répa, hagyma, saláta, paradicsom vagy csalamádé, joghurtos szósz, csípős szósz, sültkrumpli, pita",
                  "paradicsom, salata, sajt, oliva"].freeze
end
