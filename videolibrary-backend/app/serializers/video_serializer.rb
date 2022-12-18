class VideoSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :category, :movie, :movie_url, :thumbnail_url
end
