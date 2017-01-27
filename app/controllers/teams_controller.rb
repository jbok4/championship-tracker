class TeamsController < ActionController::Base

  def index
    teams = Team.all
    render json: teams
  end

  def create
    team = Team.new(team_params)
    if team.save
      render json: team
    else
      render json: { errors: team.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    team = Team.find_by_id(params[:id])
    @awards = Award.where(team_id: team.id).order("created_at DESC")
    render json: team
  end

  def update
    team = Team.find_by_id(params[:id])
    if team.update(team_params)
      render json: team
    else
      render json: { errors: team.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def upvote
    team = Team.find(params[:id])
    #! means it also saves it, so saves writing an extra step
    team.increment!(:upvote)

    render json: team
  end

  def destroy
    team = Team.find_by_id(params[:id])
    team.destroy
  end

  private

  def team_params
    params.require(:team).permit(:name, :logo, :sport, :founded, :location, :upvote)
  end
end