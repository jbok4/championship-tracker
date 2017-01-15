class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :sport, :location

  has_many :awards

end