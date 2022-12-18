# Add thumbnails for preview
require_relative "../../app/previewers/video_preview.rb"

Rails.application.config.active_storage.previewers << VideoPreviewer