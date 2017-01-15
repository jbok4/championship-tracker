class AwardSerializer < ActiveModel::Serializer
  attributes :team_id, :title, :year, :content

  belongs_to :team

end