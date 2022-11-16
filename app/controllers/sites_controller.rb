class SitesController < ApplicationController
  before_action :set_site, only: [:show, :update, :destroy]

  # GET /sites
  def index
    # Get all sites for the current user
    @sites = Site.where(user_id: current_user.id)

    # TODO: Return the sites also current user
    render json: @sites
  end

  # GET /sites/1
  def show
    # Get the site by id from the current user
    @site = Site.where(user_id: current_user.id).find(params[:id])
    render json: @site
  end

  # POST /sites
  def create
    # Log the activity
    @activity = Activity.new
    @activity.user_id = current_user.id
    @activity.description = "Created a new site called #{params[:name]}"
    @activity.save

    # Create the site
    @site = Site.new(site_params)
    @site.user_id = current_user.id
    @site.save

    # Create the build
    @build = Build.new
    @build.user_id = current_user.id
    @build.title = "Initial build"
    @build.site_id = @site.id
    @build.save

    # If all task is done successfully, return the site
    if @site.save
      render json: @site, status: :created, location: @site
    else
      render json: @site.errors, status: :unprocessable_entity
    end

  end


  # DELETE /sites/1
  def destroy
    # Destroy the site if it belongs to the current user
    if @site.user_id == current_user.id
      if @site.destroy
        render json: { message: "Site deleted successfully" }, status: :ok
      else
        render json: @site.errors, status: :unprocessable_entity
      end
    end
    # Log the activity
    @activity = Activity.new
    @activity.user_id = current_user.id
    @activity.description = "Deleted a site"
    @activity.save
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_site
      @site = Site.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def site_params
      params.require(:site).permit(:name, :title, :tagline, :email, :description, :repo_url, :repo_name, :repo_branch, :domain, :image_url)
    end
end
