class AwardsController < ActionController::Base
  before_action :set_award, only: [:show, :edit, :update, :destroy]
  before_action :set_team, except: [:index, :show]

  def index
    awards = Award.all
    render json: awards
  end

  def create
    @award = @team.awards.build(award_params)
    if @award.save
      render json: @award
    else
      render json: { errors: @award.errors.full_messages }
    end
  end

  def edit
  end

  def show
    team = Team.find_by_id(params[:id])
    render json: award
  end

  def update
    @award.update(award_params)
  end

  def destroy
    award.destroy
  end

  private

  def set_award
    @award = Award.find(params[:id])
  end

  def set_team
    @team = Team.find(params[:team_id])
  end

  def award_params
    params.require(:award).permit(:title, :year, :content)
  end
end