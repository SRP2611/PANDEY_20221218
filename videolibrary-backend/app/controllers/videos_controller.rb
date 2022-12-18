class VideosController < ApplicationController
  before_action :set_video, only: %i[ show update destroy ]

  # GET /videos
  def index
    @videos = Video.all

    render json: @videos
  end

  # GET /videos/1
  def show
    @video = Video.find(params[:id])
    render json: VideoSerializer.new(@video).serializable_hash[:data][:attributes]
  end

  # POST /videos
  def create
    @video = Video.new(video_params)

    if @video.save
      render json: VideoSerializer.new(@video).serializable_hash[:data][:attributes]
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  def latest
    @video = Video.last
    
    render json: VideoSerializer.new(@video).serializable_hash[:data][:attributes]
  end

  # PATCH/PUT /videos/1
  def update
    if @video.update(video_params)
      render json: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # DELETE /videos/1
  def destroy
    @video.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def video_params
      params.permit(:title, :category_id, :movie, :thumbnail)
    end
end
