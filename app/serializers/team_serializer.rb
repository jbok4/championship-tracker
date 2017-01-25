class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :sport, :location, :upvote

  has_many :awards

end