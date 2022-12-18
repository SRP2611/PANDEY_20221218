class Video < ApplicationRecord
  belongs_to :category
  has_one_attached :movie
  has_one_attached :thumbnail
  has_one_attached :preview_image

  validates :movie, attached: true, size: { less_than: 200.megabytes , message: 'attached video is too large, should be < 200MB' } 
  validates :movie, attached: true, content_type: [:mp4, :mov]

  def movie_url
    Rails.application.routes.url_helpers.url_for(movie) if movie.attached?
  end

  def thumbnail_url
    Rails.application.routes.url_helpers.url_for(thumbnail) if thumbnail.attached?
  end
end
