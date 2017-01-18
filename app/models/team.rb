class Team < ApplicationRecord
  has_many :awards, dependent: :destroy
  validates :name, uniqueness: { case_sensitive: false }
end