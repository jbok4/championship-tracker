class Team < ApplicationRecord
  has_many :awards, dependent: :destroy
end